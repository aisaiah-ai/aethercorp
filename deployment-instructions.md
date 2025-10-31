# AetherCorp Deployment to Cloudflare Pages

## 🚀 Ready for Deployment!

Your AetherCorp Flutter web application is built and ready for deployment to https://www.aethercorp.us

## 📦 Build Status

✅ **Build Directory:** `aether_corp_web/build/web/`
✅ **Index.html:** Present and valid
✅ **Main JS:** Present (main.dart.js)
✅ **Assets:** All assets included
✅ **Manifest:** PWA manifest present
✅ **Icons:** App icons included

## 🌐 Cloudflare Pages Deployment

### Method 1: Direct Upload (Recommended)

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com/
   - Navigate to "Pages" in the sidebar

2. **Create/Update Project**
   - Click "Create a project" or select existing "aethercorp" project
   - Choose "Upload assets"

3. **Upload Build Files**
   - Navigate to: `/Users/Shared/users/AMDShared/WorkspaceShared/flutter/aether_corp/aether_corp_web/build/web/`
   - Select ALL files and folders in the `web` directory
   - Upload them to Cloudflare Pages

4. **Configure Project Settings**
   - **Project name:** `aethercorp`
   - **Production branch:** `main`
   - **Build command:** `cd aether_corp_web && flutter build web --release`
   - **Build output directory:** `aether_corp_web/build/web`

5. **Deploy**
   - Click "Deploy site"
   - Wait for deployment to complete (2-3 minutes)

### Method 2: GitHub Integration (Automatic)

1. **Connect Repository**
   - In Cloudflare Pages, choose "Connect to Git"
   - Select your GitHub repository
   - Authorize Cloudflare to access your repo

2. **Configure Build Settings**
   - **Framework preset:** None
   - **Build command:** `cd aether_corp_web && flutter build web --release`
   - **Build output directory:** `aether_corp_web/build/web`
   - **Root directory:** `/`

3. **Deploy**
   - Click "Save and Deploy"
   - Future pushes to main branch will auto-deploy

## 🔧 Custom Domain Setup

### Configure aethercorp.us

1. **Add Custom Domain**
   - In your Cloudflare Pages project
   - Go to "Custom domains"
   - Click "Set up a custom domain"
   - Enter: `aethercorp.us`

2. **DNS Configuration**
   - Add CNAME record: `www` → `your-project.pages.dev`
   - Add A record: `@` → `192.0.2.1` (or use Cloudflare's IP)
   - Enable "Proxy" (orange cloud)

3. **SSL Certificate**
   - Cloudflare will automatically provision SSL
   - Wait 5-10 minutes for certificate activation
   - Verify HTTPS is working

## 📁 Files to Upload

Upload these files from `aether_corp_web/build/web/`:

```
📁 assets/
├── AssetManifest.bin
├── AssetManifest.bin.json
├── AssetManifest.json
├── FontManifest.json
├── fonts/
├── packages/
└── shaders/

📁 canvaskit/
├── canvaskit.js
├── canvaskit.wasm
├── chromium/
└── skwasm_*.js

📁 icons/
├── Icon-192.png
├── Icon-512.png
├── Icon-maskable-192.png
└── Icon-maskable-512.png

📄 index.html
📄 main.dart.js
📄 flutter.js
📄 flutter_bootstrap.js
📄 flutter_service_worker.js
📄 manifest.json
📄 version.json
📄 favicon.png
```

## 🔍 Post-Deployment Verification

### 1. Check Site Accessibility
- Visit: https://www.aethercorp.us
- Verify the site loads correctly
- Check all pages and functionality

### 2. Test PWA Features
- Check if the app can be installed
- Verify offline functionality
- Test responsive design

### 3. Performance Check
- Use Google PageSpeed Insights
- Check Core Web Vitals
- Verify fast loading times

### 4. Security Verification
- Ensure HTTPS is working
- Check security headers
- Verify no console errors

## 🚨 Troubleshooting

### Common Issues

#### Site Not Loading
- Check DNS propagation (can take up to 24 hours)
- Verify SSL certificate is active
- Check Cloudflare Pages build logs

#### 404 Errors
- Ensure all files are uploaded
- Check file paths are correct
- Verify SPA routing is configured

#### Build Errors
- Check Flutter version compatibility
- Verify all dependencies are installed
- Review build logs for specific errors

### Debug Commands

```bash
# Check build output
ls -la aether_corp_web/build/web/

# Verify essential files
ls -la aether_corp_web/build/web/index.html
ls -la aether_corp_web/build/web/main.dart.js

# Test local build
cd aether_corp_web
flutter build web --release
```

## 📊 Monitoring

### Cloudflare Analytics
- Monitor traffic and performance
- Check error rates
- Review security events

### GitHub Actions
- Monitor CI/CD pipeline status
- Check build and deployment logs
- Verify automatic deployments

## 🎉 Success!

Once deployed, your AetherCorp website will be available at:
- **Primary URL:** https://www.aethercorp.us
- **Cloudflare URL:** https://your-project.pages.dev

The site will automatically update whenever you push changes to the main branch (if using GitHub integration).

---

**🚀 Your AetherCorp website is ready to go live!**



