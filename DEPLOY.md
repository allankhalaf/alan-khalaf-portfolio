# 🚀 Deploy to GitHub Pages

## First Time Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Create GitHub Repository
Go to https://github.com/new and create a repository named `alan-khalaf-portfolio`

### 3. Initialize Git and Push
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/allankhalaf/alan-khalaf-portfolio.git
git push -u origin main
```

### 4. Deploy to GitHub Pages
```bash
npm run deploy
```

Your site will be live at:
**https://allankhalaf.github.io/alan-khalaf-portfolio**

---

## 🔄 Update Site

After making changes:
```bash
git add .
git commit -m "Update description"
git push origin main
npm run deploy
```

---

## ⚠️ Important Notes

### Images
Place your images in `public/images/` folder:
```
public/
  images/
    alan-profile.jpg
    projects/
      himatech-store.jpg
      pizza-italia.jpg
      hima-fashion.jpg
      explore-syria.jpg
      ecommerce.jpg
```

### CV File
Place your CV in `public/cv/` folder:
```
public/
  cv/
    Alan_Khalaf_CV.pdf
```

### Custom Domain (Optional)
To use a custom domain, create `public/CNAME` file with your domain:
```
www.yourdomain.com
```

---

## 📁 Project Structure

```
alan-khalaf-portfolio/
├── public/                 # Static assets
│   ├── images/              # Images
│   ├── cv/                  # CV PDF
│   └── favicon.ico
├── src/
│   ├── components/          # React components
│   ├── hooks/               # Custom hooks
│   ├── context/             # React context
│   ├── data/                # Data files
│   ├── styles/              # CSS files
│   └── utils/               # Utilities
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🛠️ Tech Stack

- React 18 + Vite
- Tailwind CSS
- GSAP (Animations)
- Three.js (3D - optional)
- Lucide React (Icons)
