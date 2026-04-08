# ⚡ VR Devaiah Enclave - Quick Start

## 📋 Pre-Deploy Checklist

- [ ] All files copied to folder:
  - index.html
  - Asset-3-source.svg
  - layout-clean.png
  - brand-logo.png
  - vercel.json
  - README.md

- [ ] Test locally first:
  ```bash
  python -m http.server 8000
  # Visit http://localhost:8000
  ```

- [ ] Verify on phone:
  - Filters sheet slides up
  - Click plot → modal pops from bottom (not zoomed)
  - Zoom buttons work smoothly
  - WhatsApp button opens chat

## 🚀 Deploy Steps

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: VR Devaiah Enclave plot finder"
git remote add origin https://github.com/YOUR_USERNAME/vr-devaiah-enclave.git
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Paste GitHub repo URL
4. Click "Deploy"
5. Wait ~30 seconds
6. Get your live URL

### Step 3: Custom Domain (Optional)
In Vercel dashboard:
- Settings → Domains
- Add your domain
- Follow DNS instructions

## 📱 Testing Checklist

### Mobile Phone (iOS/Android)
- [ ] Bottom sheet appears (can swipe up)
- [ ] Search works (type "1" → shows plot 1)
- [ ] Status filter works
- [ ] Size filter works
- [ ] Count updates live
- [ ] Click plot → modal pops full-screen
- [ ] Close button (X) works
- [ ] WhatsApp button opens chat
- [ ] Zoom buttons work (+, −, ⟲)
- [ ] Pinch to zoom works
- [ ] Drag map works
- [ ] No layout breaks
- [ ] Text readable on small screen

### Desktop
- [ ] Left sidebar visible with filters
- [ ] Right sidebar visible with selected plot
- [ ] Modal centered and readable
- [ ] All interactions smooth
- [ ] No mobile elements visible

## 🐛 If Something's Broken

### Map doesn't load
- Check browser console (F12 → Console)
- Verify `Asset-3-source.svg` exists
- Verify `layout-clean.png` exists
- Check file names match exactly

### Plots don't appear
- Verify SVG file is valid XML
- Check SVG contains `<polygon class="cls-1">` elements
- Console should show "50 plots" loaded

### Zoom sluggish
- Check browser performance (DevTools → Performance)
- Verify GPU acceleration is enabled
- Try clearing browser cache

### WhatsApp not working
- Check number includes country code (+91)
- Test on mobile with WhatsApp installed
- Desktop links won't work (expected)

## 📞 WhatsApp Setup

Current number: **+91 9035060371**

To change:
1. Open `index.html` in text editor
2. Find: `const WHATSAPP='919035060371'`
3. Replace with new number (no + or spaces)
4. Save and redeploy

## 🎨 Customization

### Change Company Name
Find: `VR Devaiah Enclave`
Replace: Your project name
Affects: Modal title, contact message, page title

### Change Colors
Edit these in `<style>`:
```css
--navy: #173b67        /* Primary blue */
--odd: #c99ae8         /* Purple plots */
--size40: #58d4e4      /* Cyan plots */
--size30: #f1d655      /* Yellow plots */
```

### Add/Remove Plots
Edit `plots` array in `<script>` section:
```javascript
{id:1, num:'39', size:'9.14x9.14', dim:'30×30', status:'available', area:83.54, facing:'East'}
```

Status: `'available'`, `'booked'`, or `'sold'`

## ✅ You're Live!

Your app is now live at:
```
https://your-project.vercel.app
```

Share it with:
- QR code (Vercel dashboard has generator)
- Direct link
- WhatsApp/Email

---

**Questions?** Check README.md for full docs.
