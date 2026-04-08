const SVG_MAP_SOURCE = './Asset-3-source.svg';
const ADMIN_PASSWORD = 'paavani123';
const STORAGE_KEY = 'vrdevaiah-admin-plots-v2';
const WHATSAPP_NUMBER = '919035060371';
const PLOT_NUMBER_BY_SHAPE_INDEX = [
  '39', '50', '42', '40', '44', '46', '41', '45', '43', '49',
  '47', '48', '27', '22', '24', '23', '25', '26', '28', '32',
  '33', '34', '30', '31', '29', '10', '3', '4', '9', '8',
  '7', '5', '6', '13', '11', '17', '14', '12', '15', '16',
  '19', '20', '21', '18', '38', '37', '36', '35', '1', '2'
];

function buildPlot(id, plotNumber, sizeType, facing, areaSqm) {
  return {
    id,
    plotNumber,
    sizeType,
    dimensions:
      sizeType === 'ODD'
        ? 'Variable'
        : sizeType === '9.14x12.19'
          ? '30 x 40 ft'
          : '30 x 30 ft',
    areaSqm,
    status: 'available',
    facing
  };
}

const defaultPlots = [
  buildPlot(1, '39', '9.14x9.14', 'East', 83.54),
  buildPlot(2, '40', '9.14x9.14', 'East', 83.54),
  buildPlot(3, '41', '9.14x9.14', 'East', 83.54),
  buildPlot(4, '42', '9.14x9.14', 'East', 83.54),
  buildPlot(5, '43', '9.14x9.14', 'East', 83.54),
  buildPlot(6, '44', '9.14x9.14', 'East', 83.54),
  buildPlot(7, '45', '9.14x9.14', 'East', 83.54),
  buildPlot(8, '46', '9.14x9.14', 'East', 83.54),
  buildPlot(9, '47', '9.14x9.14', 'East', 83.54),
  buildPlot(10, '48', '9.14x9.14', 'East', 83.54),
  buildPlot(11, '49', '9.14x9.14', 'East', 83.54),
  buildPlot(12, '50', '9.14x9.14', 'East', 83.54),
  buildPlot(13, '35', 'ODD', 'North', 99.81),
  buildPlot(14, '36', 'ODD', 'North', 99.81),
  buildPlot(15, '37', 'ODD', 'North', 99.81),
  buildPlot(16, '38', 'ODD', 'North', 99.81),
  buildPlot(17, '21', '9.14x12.19', 'North', 111.46),
  buildPlot(18, '20', '9.14x12.19', 'North', 111.46),
  buildPlot(19, '19', '9.14x12.19', 'North', 111.46),
  buildPlot(20, '18', '9.14x12.19', 'North', 111.46),
  buildPlot(21, '34', '9.14x9.14', 'East', 83.54),
  buildPlot(22, '33', '9.14x12.19', 'East', 111.46),
  buildPlot(23, '22', '9.14x12.19', 'East', 111.46),
  buildPlot(24, '32', '9.14x12.19', 'East', 111.46),
  buildPlot(25, '23', '9.14x12.19', 'East', 111.46),
  buildPlot(26, '31', '9.14x12.19', 'East', 111.46),
  buildPlot(27, '24', '9.14x12.19', 'East', 111.46),
  buildPlot(28, '30', '9.14x9.14', 'East', 83.54),
  buildPlot(29, '25', '9.14x12.19', 'East', 111.46),
  buildPlot(30, '29', '9.14x9.14', 'East', 83.54),
  buildPlot(31, '26', '9.14x12.19', 'East', 111.46),
  buildPlot(32, '28', 'ODD', 'East', 99.81),
  buildPlot(33, '27', 'ODD', 'East', 99.81),
  buildPlot(34, '17', '9.14x9.14', 'South', 83.54),
  buildPlot(35, '16', '9.14x12.19', 'South', 111.46),
  buildPlot(36, '15', '9.14x12.19', 'South', 111.46),
  buildPlot(37, '14', '9.14x9.14', 'South', 83.54),
  buildPlot(38, '11', '9.14x9.14', 'South', 83.54),
  buildPlot(39, '12', '9.14x12.19', 'South', 111.46),
  buildPlot(40, '13', '9.14x9.14', 'South', 83.54),
  buildPlot(41, '1', 'ODD', 'West', 99.81),
  buildPlot(42, '2', 'ODD', 'West', 99.81),
  buildPlot(43, '3', 'ODD', 'West', 99.81),
  buildPlot(44, '4', 'ODD', 'West', 99.81),
  buildPlot(45, '5', '9.14x9.14', 'North', 83.54),
  buildPlot(46, '6', '9.14x9.14', 'North', 83.54),
  buildPlot(47, '7', '9.14x9.14', 'North', 83.54),
  buildPlot(48, '8', '9.14x9.14', 'North', 83.54),
  buildPlot(49, '9', '9.14x9.14', 'North', 83.54),
  buildPlot(50, '10', '9.14x9.14', 'North', 83.54)
];

const defaultFacingByPlotNumber = {
  '39': 'East',
  '40': 'East',
  '41': 'East',
  '42': 'East',
  '43': 'East',
  '44': 'East',
  '45': 'East',
  '46': 'East',
  '47': 'East',
  '48': 'East',
  '49': 'East',
  '50': 'East',
  '35': 'West',
  '36': 'West',
  '37': 'West',
  '38': 'West',
  '21': 'North',
  '20': 'North',
  '19': 'North',
  '18': 'North',
  '34': 'West',
  '33': 'West',
  '32': 'West',
  '31': 'West',
  '30': 'West',
  '29': 'West',
  '28': 'West',
  '22': 'East',
  '23': 'East',
  '24': 'East',
  '25': 'East',
  '26': 'East',
  '27': 'East',
  '17': 'South',
  '16': 'West',
  '15': 'West',
  '14': 'North',
  '11': 'South',
  '12': 'East',
  '13': 'East',
  '1': 'West',
  '2': 'West',
  '3': 'South',
  '4': 'South',
  '5': 'North',
  '6': 'North',
  '7': 'North',
  '8': 'North',
  '9': 'North',
  '10': 'North'
};

defaultPlots.forEach((plot) => {
  if (defaultFacingByPlotNumber[plot.plotNumber]) {
    plot.facing = defaultFacingByPlotNumber[plot.plotNumber];
  }
});

const plots = loadPlots();

const state = {
  searchTerm: '',
  status: 'all',
  size: 'all',
  selectedPlotId: null,
  hoveredPlotId: null,
  isAdmin: false
};

const mapViewport = document.getElementById('mapViewport');
const mapScene = document.getElementById('mapScene');
const mapCanvas = document.getElementById('mapCanvas');
const searchInput = document.getElementById('searchInput');
const statusFilter = document.getElementById('statusFilter');
const sizeFilter = document.getElementById('sizeFilter');
const availableCount = document.getElementById('availableCount');
const liveAvailable = document.getElementById('liveAvailable');
const liveBooked = document.getElementById('liveBooked');
const liveSold = document.getElementById('liveSold');
const mapBadge = document.getElementById('mapBadge');
const selectedContent = document.getElementById('selectedContent');
const modal = document.getElementById('plotModal');
const modalTitle = document.getElementById('modalTitle');
const modalStatus = document.getElementById('modalStatus');
const modalNumberBox = document.getElementById('modalNumberBox');
const modalContent = document.getElementById('modalContent');
const modalFacingHeading = document.getElementById('modalFacingHeading');
const modalStatusInline = document.getElementById('modalStatusInline');
const plotContactText = document.getElementById('plotContactText');
const modalCloseButton = document.getElementById('modalCloseButton');
const modalCloseAction = document.getElementById('modalCloseAction');
const openAdminButton = document.getElementById('openAdminButton');
const brandAdminTrigger = document.getElementById('brandAdminTrigger');
const closeAdminButton = document.getElementById('closeAdminButton');
const adminDrawer = document.getElementById('adminDrawer');
const adminLocked = document.getElementById('adminLocked');
const adminUnlocked = document.getElementById('adminUnlocked');
const adminPassword = document.getElementById('adminPassword');
const adminLoginButton = document.getElementById('adminLoginButton');
const adminPlotSearch = document.getElementById('adminPlotSearch');
const adminPlotOptions = document.getElementById('adminPlotOptions');
const adminStatus = document.getElementById('adminStatus');
const adminSize = document.getElementById('adminSize');
const adminFacing = document.getElementById('adminFacing');
const adminArea = document.getElementById('adminArea');
const adminSaveButton = document.getElementById('adminSaveButton');
const adminLogoutButton = document.getElementById('adminLogoutButton');
const adminMessage = document.getElementById('adminMessage');
const contactButton = document.getElementById('contactButton');
const contactInlineButton = document.getElementById('contactInlineButton');
const zoomInButton = document.getElementById('zoomInButton');
const zoomOutButton = document.getElementById('zoomOutButton');
const zoomResetButton = document.getElementById('zoomResetButton');

let svgRoot = null;
let plotShapePairs = [];
let labelLayer = null;
const mapTransform = {
  scale: 1,
  x: 0,
  y: 0,
  targetScale: 1,
  targetX: 0,
  targetY: 0
};
let dragState = null;
let animationFrameId = null;

function loadPlots() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return structuredClone(defaultPlots);
    }

    const parsed = JSON.parse(saved);
    return defaultPlots.map((plot) => {
      const override = parsed.find((item) => item.id === plot.id);
      return override ? { ...plot, ...override } : plot;
    });
  } catch (error) {
    return structuredClone(defaultPlots);
  }
}

function savePlots() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(plots));
}

function sizeFill(sizeType) {
  if (sizeType === 'ODD') return '#c99ae8';
  if (sizeType === '9.14x12.19') return '#58d4e4';
  return '#f1d655';
}

function statusOpacity(status) {
  if (status === 'sold') return 0.28;
  if (status === 'booked') return 0.3;
  return 0.18;
}

function selectedPlot() {
  return plots.find((plot) => plot.id === state.selectedPlotId) || null;
}

function sqmToSqft(value) {
  return value * 10.7639;
}

function formatSqft(value) {
  return String(Math.round(sqmToSqft(value) / 100) * 100);
}

function dimensionsToFeet(sizeType) {
  if (sizeType === 'ODD') {
    return 'Variable';
  }

  if (sizeType === '9.14x12.19') {
    return '30 x 40 ft';
  }

  return '30 x 30 ft';
}

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function matchesFilters(plot) {
  const search = state.searchTerm.trim().toLowerCase();
  const normalizedSearch = search.replace(/^plot\s*[- ]?/i, '');
  const matchesSearch = !normalizedSearch || plot.plotNumber.toLowerCase() === normalizedSearch;
  const matchesStatus = state.status === 'all' || plot.status === state.status;
  const matchesSize = state.size === 'all' || plot.sizeType === state.size;
  return matchesSearch && matchesStatus && matchesSize;
}

function setSelectedPanel(plot) {
  if (!plot) {
    selectedContent.className = 'selected-empty';
    selectedContent.textContent = 'Click any plot on the map to inspect its details.';
    return;
  }

  selectedContent.className = 'selected-details';
  selectedContent.innerHTML = `
    <h3>Plot ${plot.plotNumber}</h3>
    <p>${dimensionsToFeet(plot.sizeType)}</p>
    <div class="selected-list">
      <div class="selected-row"><span>Area</span><span>${formatSqft(plot.areaSqm)} sq ft</span></div>
      <div class="selected-row"><span>Facing</span><span>${plot.facing}</span></div>
      <div class="selected-row"><span>Status</span><span>${plot.status}</span></div>
    </div>
  `;
}

function buildDetailPill(label, value) {
  return `
    <div class="detail-pill">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function clampScale(value) {
  return Math.min(4, Math.max(0.8, value));
}

function lerp(start, end, t) {
  return start + (end - start) * t;
}

function animateTransform() {
  if (!mapScene) return;

  const smoothness = 0.15;
  const scaleChanged = Math.abs(mapTransform.scale - mapTransform.targetScale) > 0.001;
  const xChanged = Math.abs(mapTransform.x - mapTransform.targetX) > 0.5;
  const yChanged = Math.abs(mapTransform.y - mapTransform.targetY) > 0.5;

  if (scaleChanged || xChanged || yChanged) {
    if (scaleChanged) {
      mapTransform.scale = lerp(mapTransform.scale, mapTransform.targetScale, smoothness);
    }
    if (xChanged) {
      mapTransform.x = lerp(mapTransform.x, mapTransform.targetX, smoothness);
    }
    if (yChanged) {
      mapTransform.y = lerp(mapTransform.y, mapTransform.targetY, smoothness);
    }

    mapScene.style.transform = `translate(${mapTransform.x}px, ${mapTransform.y}px) scale(${mapTransform.scale})`;
    animationFrameId = requestAnimationFrame(animateTransform);
  } else {
    animationFrameId = null;
  }
}

function applyMapTransform() {
  if (!mapScene) {
    return;
  }

  mapTransform.targetScale = mapTransform.scale;
  mapTransform.targetX = mapTransform.x;
  mapTransform.targetY = mapTransform.y;

  if (animationFrameId === null) {
    animateTransform();
  }
}

function zoomMap(factor, centerX, centerY) {
  if (!mapViewport) {
    return;
  }

  const rect = mapViewport.getBoundingClientRect();
  const originX = centerX ?? rect.left + rect.width / 2;
  const originY = centerY ?? rect.top + rect.height / 2;
  const pointerX = originX - rect.left;
  const pointerY = originY - rect.top;
  const nextScale = clampScale(mapTransform.targetScale * factor);
  const worldX = (pointerX - mapTransform.x) / mapTransform.scale;
  const worldY = (pointerY - mapTransform.y) / mapTransform.scale;

  mapTransform.targetScale = nextScale;
  mapTransform.targetX = pointerX - worldX * nextScale;
  mapTransform.targetY = pointerY - worldY * nextScale;

  if (animationFrameId === null) {
    animateTransform();
  }
}

function resetMapTransform() {
  mapTransform.targetScale = 1;
  mapTransform.targetX = 0;
  mapTransform.targetY = 0;
  mapTransform.scale = 1;
  mapTransform.x = 0;
  mapTransform.y = 0;
  applyMapTransform();
}

function openModal(plot) {
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  modalTitle.textContent = `Plot ${plot.plotNumber}`;
  modalNumberBox.textContent = `Plot - ${plot.plotNumber}`;
  modalFacingHeading.textContent = `Facing ${plot.facing.toUpperCase()}`;
  modalStatusInline.textContent = plot.status.charAt(0).toUpperCase() + plot.status.slice(1);
  modalStatus.textContent = `Status: ${plot.status.charAt(0).toUpperCase() + plot.status.slice(1)}`;
  modalStatus.className = `plot-status-pill plot-status-${plot.status}`;
  plotContactText.textContent = `Reach out today on WhatsApp: +91 90350 60371`;
  modalContent.innerHTML = [
    buildDetailPill('Dimensions', dimensionsToFeet(plot.sizeType)),
    buildDetailPill('Area in Sq Ft', formatSqft(plot.areaSqm)),
    buildDetailPill('Facing', plot.facing)
  ].join('');
}

function closeModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function refreshCounts(activePlots) {
  availableCount.textContent = String(plots.filter((plot) => plot.status === 'available').length);
  liveAvailable.textContent = String(activePlots.filter((plot) => plot.status === 'available').length);
  liveBooked.textContent = String(activePlots.filter((plot) => plot.status === 'booked').length);
  liveSold.textContent = String(activePlots.filter((plot) => plot.status === 'sold').length);
  mapBadge.textContent =
    activePlots.length === plots.length ? 'Interactive master plan' : `${activePlots.length} plots in focus`;
}

function polygonFromShape(shape) {
  if (shape.tagName.toLowerCase() === 'polygon') {
    return shape;
  }

  const x = Number(shape.getAttribute('x') || 0);
  const y = Number(shape.getAttribute('y') || 0);
  const width = Number(shape.getAttribute('width') || 0);
  const height = Number(shape.getAttribute('height') || 0);
  const transform = shape.transform?.baseVal?.consolidate()?.matrix;
  const corners = [
    [x, y],
    [x + width, y],
    [x + width, y + height],
    [x, y + height]
  ].map(([px, py]) => {
    if (!transform) {
      return [px, py];
    }
    return [
      transform.a * px + transform.c * py + transform.e,
      transform.b * px + transform.d * py + transform.f
    ];
  });

  const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  polygon.setAttribute('class', shape.getAttribute('class') || '');
  polygon.setAttribute('points', corners.map(([px, py]) => `${px},${py}`).join(' '));
  shape.replaceWith(polygon);
  return polygon;
}

function styleShape(shape, plot, visible, selected, hovered) {
  shape.classList.add('plot-shape');
  const emphasized = selected || hovered;
  const baseOpacity = statusOpacity(plot.status);

  // Cleaner, more visible plot styling
  shape.style.fill = emphasized ? 'rgba(23,59,103,0.95)' : sizeFill(plot.sizeType);
  shape.style.opacity = visible ? String(emphasized ? 0.85 : baseOpacity) : '0.08';
  shape.style.stroke = emphasized ? 'rgba(11,31,54,0.95)' : 'rgba(255,255,255,0.4)';
  shape.style.strokeWidth = emphasized ? '3' : (visible ? '1.2' : '0');
  shape.style.vectorEffect = 'non-scaling-stroke';
  shape.style.filter = visible
    ? emphasized
      ? 'brightness(0.92) saturate(1.25)'
      : 'brightness(1.05) saturate(1.1)'
    : 'grayscale(0.3) brightness(0.85)';
}

function renderLabels(activeIds) {
  if (!labelLayer) {
    return;
  }

  labelLayer.innerHTML = '';

  plotShapePairs.forEach(({ plot, shape }) => {
    const box = shape.getBBox();
    const visible = activeIds.has(plot.id);
    const isSold = plot.status === 'sold';
    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', String(box.x + box.width / 2));
    label.setAttribute('y', String(box.y + box.height / 2));
    label.setAttribute('text-anchor', 'middle');
    label.setAttribute('dominant-baseline', 'middle');
    label.setAttribute('font-size', box.width < 120 ? '40' : '48');
    label.setAttribute('font-weight', '800');
    label.setAttribute('fill', 'rgba(18,28,36,0.88)');
    label.setAttribute('paint-order', 'stroke');
    label.setAttribute('stroke', 'rgba(255,255,255,0.72)');
    label.setAttribute('stroke-width', '1.4');
    label.style.pointerEvents = 'none';
    label.style.userSelect = 'none';
    label.style.opacity = visible ? '0.98' : '0.14';
    label.textContent = plot.plotNumber;
    labelLayer.appendChild(label);

    if (visible && isSold) {
      const badgeWidth = Math.min(Math.max(84, box.width * 0.68), Math.max(84, box.width - 12));
      const badgeHeight = 36;
      const badgeX = box.x + (box.width - badgeWidth) / 2;
      const badgeY = box.y + Math.max(8, box.height * 0.16);

      const badge = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      badge.setAttribute('x', String(badgeX));
      badge.setAttribute('y', String(badgeY));
      badge.setAttribute('width', String(badgeWidth));
      badge.setAttribute('height', String(badgeHeight));
      badge.setAttribute('rx', '12');
      badge.setAttribute('fill', '#173b67');
      badge.setAttribute('opacity', '0.94');
      labelLayer.appendChild(badge);

      const badgeText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      badgeText.setAttribute('x', String(box.x + box.width / 2));
      badgeText.setAttribute('y', String(badgeY + badgeHeight / 2 + 1));
      badgeText.setAttribute('text-anchor', 'middle');
      badgeText.setAttribute('dominant-baseline', 'middle');
      badgeText.setAttribute('font-size', '17');
      badgeText.setAttribute('font-weight', '800');
      badgeText.setAttribute('letter-spacing', '2.4');
      badgeText.setAttribute('fill', '#ffffff');
      badgeText.style.pointerEvents = 'none';
      badgeText.textContent = 'SOLD';
      labelLayer.appendChild(badgeText);
    }
  });
}

function populateAdminPlotOptions() {
  adminPlotOptions.innerHTML = plots
    .map((plot) => `<option value="${plot.plotNumber}">Plot ${plot.plotNumber}</option>`)
    .join('');
}

function syncAdminPanel() {
  adminLocked.classList.toggle('hidden', state.isAdmin);
  adminUnlocked.classList.toggle('hidden', !state.isAdmin);

  const plot = selectedPlot();
  if (!state.isAdmin || !plot) {
    adminPlotSearch.value = '';
    adminStatus.value = 'available';
    adminSize.value = 'ODD';
    adminFacing.value = 'North';
    adminArea.value = '';
    return;
  }

  adminPlotSearch.value = plot.plotNumber;
  adminStatus.value = plot.status;
  adminSize.value = plot.sizeType;
  adminFacing.value = plot.facing;
  adminArea.value = String(formatSqft(plot.areaSqm));
}

function renderMap() {
  if (!svgRoot) {
    return;
  }

  const activePlots = plots.filter(matchesFilters);
  const activeIds = new Set(activePlots.map((plot) => plot.id));
  const currentPlot = selectedPlot();

  plotShapePairs.forEach(({ plot, shape }) => {
    styleShape(
      shape,
      plot,
      activeIds.has(plot.id),
      plot.id === state.selectedPlotId,
      plot.id === state.hoveredPlotId
    );
  });

  renderLabels(activeIds);
  setSelectedPanel(currentPlot);
  syncAdminPanel();
  refreshCounts(activePlots);
}

async function initializeMap() {
  const response = await fetch(SVG_MAP_SOURCE);
  const svgText = await response.text();
  const parsed = new DOMParser().parseFromString(svgText, 'image/svg+xml');
  svgRoot = parsed.documentElement;

  svgRoot.setAttribute('class', 'loaded-map');
  svgRoot.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  svgRoot.removeAttribute('width');
  svgRoot.removeAttribute('height');
  svgRoot.querySelectorAll('image').forEach((image) => image.remove());
  svgRoot.querySelectorAll('path').forEach((path) => path.remove());

  const sourceShapes = Array.from(svgRoot.querySelectorAll('polygon.cls-1, rect.cls-1')).map(polygonFromShape);

  plotShapePairs = plots.map((plot, index) => ({
    plot,
    shape: sourceShapes[index]
  }));

  plotShapePairs.forEach(({ plot, shape }) => {
    shape.style.cursor = 'pointer';
    shape.addEventListener('mouseenter', () => {
      state.hoveredPlotId = plot.id;
      renderMap();
    });
    shape.addEventListener('mouseleave', () => {
      if (state.hoveredPlotId === plot.id) {
        state.hoveredPlotId = null;
        renderMap();
      }
    });
    shape.addEventListener('click', () => {
      state.selectedPlotId = plot.id;
      openModal(plot);
      renderMap();
      // Reset zoom when opening modal for clean full view
      resetMapTransform();
    });
  });

  labelLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  labelLayer.setAttribute('id', 'labelLayer');
  svgRoot.appendChild(labelLayer);

  mapCanvas.innerHTML = '';
  mapCanvas.appendChild(svgRoot);
  populateAdminPlotOptions();
  renderMap();
}

searchInput.addEventListener('input', (event) => {
  state.searchTerm = event.target.value;
  renderMap();
});

statusFilter.addEventListener('change', (event) => {
  state.status = event.target.value;
  renderMap();
});

sizeFilter.addEventListener('change', (event) => {
  state.size = event.target.value;
  renderMap();
});

if (mapViewport) {
  mapViewport.addEventListener(
    'wheel',
    (event) => {
      event.preventDefault();
      zoomMap(event.deltaY < 0 ? 1.12 : 1 / 1.12, event.clientX, event.clientY);
    },
    { passive: false }
  );

  mapViewport.addEventListener('pointerdown', (event) => {
    if (event.target instanceof HTMLElement && event.target.closest('.glass-panel, .floating-contact, .map-controls')) {
      return;
    }

    dragState = {
      x: event.clientX,
      y: event.clientY,
      startX: mapTransform.x,
      startY: mapTransform.y
    };
    mapViewport.classList.add('is-dragging');
  });

  mapViewport.addEventListener('pointermove', (event) => {
    if (!dragState) {
      return;
    }

    mapTransform.targetX = dragState.startX + (event.clientX - dragState.x);
    mapTransform.targetY = dragState.startY + (event.clientY - dragState.y);
    mapTransform.x = mapTransform.targetX;
    mapTransform.y = mapTransform.targetY;

    if (animationFrameId === null) {
      animateTransform();
    }
  });

  ['pointerup', 'pointerleave', 'pointercancel'].forEach((eventName) => {
    mapViewport.addEventListener(eventName, () => {
      dragState = null;
      mapViewport.classList.remove('is-dragging');
    });
  });
}

zoomInButton?.addEventListener('click', () => zoomMap(1.15));
zoomOutButton?.addEventListener('click', () => zoomMap(1 / 1.15));
zoomResetButton?.addEventListener('click', resetMapTransform);

if (openAdminButton) {
  openAdminButton.addEventListener('click', () => {
    adminDrawer.classList.remove('hidden');
  });
}

if (brandAdminTrigger) {
  brandAdminTrigger.addEventListener('dblclick', () => {
    adminDrawer.classList.remove('hidden');
  });
}

closeAdminButton.addEventListener('click', () => {
  adminDrawer.classList.add('hidden');
});

adminLoginButton.addEventListener('click', () => {
  if (adminPassword.value === ADMIN_PASSWORD) {
    state.isAdmin = true;
    adminPassword.value = '';
    adminMessage.textContent = 'Admin unlocked.';
    renderMap();
    return;
  }

  adminMessage.textContent = 'Incorrect password.';
});

adminPlotSearch.addEventListener('change', () => {
  const value = adminPlotSearch.value.trim().replace(/^plot\s*[- ]?/i, '');
  const plot = plots.find((item) => item.plotNumber === value);
  if (!plot) {
    adminMessage.textContent = 'Plot not found.';
    return;
  }

  state.selectedPlotId = plot.id;
  adminMessage.textContent = `Editing Plot ${plot.plotNumber}.`;
  renderMap();
});

adminSaveButton.addEventListener('click', () => {
  const plot = selectedPlot();
  if (!state.isAdmin || !plot) {
    adminMessage.textContent = 'Select a plot first.';
    return;
  }

  plot.status = adminStatus.value;
  plot.sizeType = adminSize.value;
  plot.dimensions =
    plot.sizeType === 'ODD'
      ? 'Variable'
      : plot.sizeType === '9.14x12.19'
        ? '30 x 40 ft'
        : '30 x 30 ft';
  plot.facing = adminFacing.value;
  plot.areaSqm = (Number(adminArea.value) / 10.7639) || plot.areaSqm;
  savePlots();
  adminMessage.textContent = `Plot ${plot.plotNumber} updated.`;
  renderMap();
  if (!modal.classList.contains('hidden')) {
    openModal(plot);
  }
});

adminLogoutButton.addEventListener('click', () => {
  state.isAdmin = false;
  adminMessage.textContent = 'Admin locked.';
  renderMap();
});

modal.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeModal === 'true') {
    closeModal();
  }
});

modalCloseButton.addEventListener('click', closeModal);
modalCloseAction.addEventListener('click', closeModal);

contactButton.addEventListener('click', () => {
  openWhatsApp('Hi, I want more details about VR Devaiah Enclave.');
});

contactInlineButton.addEventListener('click', () => {
  const plot = selectedPlot();
  const plotMessage = plot
    ? `Hi, I want more details about Plot ${plot.plotNumber} in VR Devaiah Enclave.`
    : 'Hi, I want more details about VR Devaiah Enclave.';
  openWhatsApp(plotMessage);
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
    adminDrawer.classList.add('hidden');
  }
});

initializeMap().catch((error) => {
  console.error('Unable to load map SVG', error);
});
