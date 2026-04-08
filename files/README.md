# VR Devaiah Enclave - Plot Finder

**Mobile-first interactive plot map with smooth zoom, filters, and WhatsApp integration.**

## 📦 Files Included

- **index.html** — Single-file app (24KB) with all CSS/JS embedded
- **Asset-3-source.svg** — SVG map with 50 plot shapes
- **layout-clean.png** — Background map image (310KB)
- **brand-logo.png** — Logo asset (optional)
- **vercel.json** — Deployment configuration

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI (Fastest)
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub + Vercel (Recommended)
1. Push all files to a GitHub repo
2. Go to [vercel.com](https://vercel.com)
3. Import your repo → Deploy (no config needed)

### Option 3: Drag & Drop
- Go to [vercel.com/new](https://vercel.com/new)
- Drop the folder → done

## 🧪 Test Locally

```bash
# Using Python
python -m http.server 8000

# Using Node
npx http-server . -p 8000

# Then open: http://localhost:8000
```

## ✨ Features

✅ **Phone-First Design** — Optimized for mobile (45vh bottom sheet filters)  
✅ **Smooth Zoom** — Multi-touch pinch + wheel zoom with overlay controls  
✅ **Full-Screen Modal** — Plot details pop up completely (not zoomed)  
✅ **Smart Filters** — Search by number, filter by status/size with live counts  
✅ **WhatsApp Integration** — Direct CTA buttons to contact via WhatsApp  
✅ **Responsive** — Seamless desktop layout (340px sidebar, centered modal)  
✅ **Dark Mode Ready** — CSS variables for easy theme switching  
✅ **Zero Dependencies** — Single HTML file, works everywhere  
✅ **Fast Load** — ~24KB HTML + assets, cached for 1 hour  

## 🎮 User Experience

### Mobile (< 768px)
- Bottom sheet with filters (swipe up to expand)
- Map controls in bottom-right corner
- Overlay zoom controls appear on drag
- Full-screen modal pops from bottom
- WhatsApp FAB fixed at bottom

### Desktop (≥ 768px)
- Sidebar filters (left), sidebar selected plot (right)
- Centered modal
- Same zoom/pan functionality

## 📊 Data Structure

All 50 plots hardcoded in `plots` array:
```javascript
{id, num, size, dim, status, area, facing}
```

To change statuses: edit `status: 'available'` → `'booked'` or `'sold'`

## 🛠️ Customization

### Change WhatsApp Number
Line 1 in script: `const WHATSAPP='919035060371'`

### Adjust Colors
CSS variables in `<style>`:
```css
--navy: #173b67
--odd: #c99ae8
--size40: #58d4e4
--size30: #f1d655
```

### Change Company Name
Search-replace "VR Devaiah Enclave" throughout

## 📱 Mobile Optimization

- **Viewport fit cover** for notch devices
- **Safe area insets** for bottom sheet
- **Touch-friendly** button sizes (44px+)
- **No hover states** on mobile (only active)
- **GPU acceleration** with `transform-gpu`
- **Smooth scroll** with `-webkit-overflow-scrolling`

## 🔧 Browser Support

✅ Chrome/Edge 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ iOS Safari 14+  
✅ Android Chrome 90+  

## 📈 Performance

- **Page Load**: < 1s (static hosting)
- **SVG Render**: < 200ms (50 plots)
- **Filter Update**: < 50ms
- **Zoom/Pan**: 60fps smooth

## 🚫 Known Limitations

- No backend — all data is client-side
- Admin panel removed (security)
- SVG must be loaded from same origin (CORS)
- Mobile: Max 3 zoom levels (0.3x - 3x)

## 🆘 Troubleshooting

### Map doesn't load
- Check `Asset-3-source.svg` is in same folder as `index.html`
- Check browser console for errors
- Verify SVG contains `polygon.cls-1` or `rect.cls-1` elements

### Plots don't appear
- Open DevTools (F12) → Console tab
- Plots should show "50 plots loaded"
- Check that SVG fetch returns 200 status

### WhatsApp not opening
- Verify WHATSAPP number includes country code (91 for India)
- Check phone has WhatsApp installed
- Links work on mobile browsers, not desktop

## 📄 License

Free to use for this project. 

---

**Last Updated**: April 2026  
**Version**: 2.0 (Phone-Optimized)
