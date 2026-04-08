const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'paavani123';

function json(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
}

async function supabaseRequest(path, options = {}) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Supabase request failed with ${response.status}`);
  }

  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

function normalizePlot(row) {
  return {
    id: row.id,
    plotNumber: String(row.plot_number),
    sizeType: row.size_type,
    dimensions: row.dimensions,
    areaSqm: Number(row.area_sqm),
    status: row.status,
    facing: row.facing
  };
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-password');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    json(res, 500, { error: 'Missing Supabase environment variables.' });
    return;
  }

  try {
    if (req.method === 'GET') {
      const status = req.query?.status;
      const size = req.query?.size;
      const search = req.query?.search;
      const clauses = ['select=id,plot_number,size_type,dimensions,area_sqm,status,facing', 'order=id.asc'];

      if (status && status !== 'all') {
        clauses.push(`status=eq.${encodeURIComponent(status)}`);
      }

      if (size && size !== 'all') {
        clauses.push(`size_type=eq.${encodeURIComponent(size)}`);
      }

      if (search) {
        clauses.push(`plot_number=eq.${encodeURIComponent(String(search).replace(/^plot\s*[- ]?/i, ''))}`);
      }

      const rows = await supabaseRequest(`plots?${clauses.join('&')}`, {
        method: 'GET',
        headers: {
          Prefer: 'count=exact'
        }
      });

      json(res, 200, {
        plots: rows.map(normalizePlot),
        count: rows.length
      });
      return;
    }

    if (req.method === 'PATCH') {
      const password = req.headers['x-admin-password'];
      if (password !== ADMIN_PASSWORD) {
        json(res, 401, { error: 'Unauthorized' });
        return;
      }

      const { id, plotNumber, status, sizeType, dimensions, areaSqm, facing } = req.body || {};
      const targetNumber = plotNumber || id;

      if (!targetNumber) {
        json(res, 400, { error: 'Missing plot identifier.' });
        return;
      }

      const update = {};
      if (status) update.status = status;
      if (sizeType) update.size_type = sizeType;
      if (dimensions) update.dimensions = dimensions;
      if (typeof areaSqm === 'number' && Number.isFinite(areaSqm)) update.area_sqm = areaSqm;
      if (facing) update.facing = facing;
      update.updated_at = new Date().toISOString();

      const rows = await supabaseRequest(`plots?plot_number=eq.${encodeURIComponent(String(targetNumber))}`, {
        method: 'PATCH',
        body: JSON.stringify(update)
      });

      const plot = Array.isArray(rows) && rows[0] ? normalizePlot(rows[0]) : null;
      json(res, 200, { success: true, plot });
      return;
    }

    json(res, 405, { error: 'Method not allowed' });
  } catch (error) {
    json(res, 500, { error: error.message || 'Unexpected server error' });
  }
};
