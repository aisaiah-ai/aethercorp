# AetherCorp CI/CD Setup Guide

## 🚀 Automatic Deployment to Cloudflare Pages

This guide will help you set up automatic deployment to Cloudflare Pages whenever you push to the main branch. Adding comments for redeploy

## 📋 Prerequisites

1. **GitHub Repository**: Your code should be in a GitHub repository
2. **Cloudflare Account**: You need a Cloudflare account with Pages enabled
3. **Domain**: Your domain `aethercorp.us` should be managed by Cloudflare

## 🔧 Setup Steps

### Step 1: Get Cloudflare API Token

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
2. Click "Create Token"
3. Use "Custom token" template
4. Set permissions:
   - **Account**: `Cloudflare Pages:Edit`
   - **Zone**: `Zone:Read` (for your domain)
5. **Account Resources**: Include your account
6. **Zone Resources**: Include your domain `aethercorp.us`
7. Click "Continue to summary" → "Create Token"
8. **Copy the token** - you'll need it for GitHub secrets

### Step 2: Get Cloudflare Account ID

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Select your domain `aethercorp.us`
3. In the right sidebar, find "Account ID"
4. **Copy the Account ID**

### Step 3: Configure GitHub Secrets

1. Go to your GitHub repository
2. Click "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Add these secrets:

```
Name: CLOUDFLARE_API_TOKEN
Value: [Your API Token from Step 1]

Name: CLOUDFLARE_ACCOUNT_ID  
Value: [Your Account ID from Step 2]
```

### Step 4: Connect Cloudflare Pages to GitHub

1. Go to [Cloudflare Pages](https://dash.cloudflare.com/pages)
2. Click "Create a project"
3. Choose "Connect to Git"
4. Select your GitHub repository
5. Configure build settings:
   - **Framework preset**: None
   - **Build command**: `cd aether_corp_web && flutter build web --release`
   - **Build output directory**: `aether_corp_web/build/web`
   - **Root directory**: `/`
6. Click "Save and Deploy"

### Step 5: Configure Custom Domain

1. In your Cloudflare Pages project
2. Go to "Custom domains"
3. Click "Set up a custom domain"
4. Enter: `aethercorp.us`
5. Follow DNS configuration instructions

## 🔄 How It Works

1. **Push to main branch** → GitHub Actions triggers
2. **Build Flutter app** → Creates production build
3. **Deploy to Cloudflare** → Updates your live site
4. **Automatic deployment** → Your site updates in ~2-3 minutes

## 📁 Files Created

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `wrangler.toml` - Cloudflare Pages configuration
- `_headers` - Custom headers for performance

## 🧪 Testing the Pipeline

1. Make a small change to your code
2. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Test CI/CD deployment"
   git push origin main
   ```
3. Check GitHub Actions tab for build progress
4. Visit your site to see the changes live

## 🎯 Expected Results

- **Automatic deployment** on every push to main
- **Live site**: https://aethercorp.us
- **Build time**: ~3-5 minutes
- **Zero downtime** deployments

## 🔧 Troubleshooting

### Build Fails
- Check Flutter version compatibility
- Verify all dependencies are in `pubspec.yaml`
- Check GitHub Actions logs for specific errors

### Domain Not Working
- Verify DNS settings in Cloudflare
- Check domain is properly connected to Pages
- Ensure SSL certificate is active

### Firebase Issues
- Verify Firebase configuration is correct
- Check environment variables are set
- Ensure Firestore database is created

## 📞 Support

If you encounter issues:
1. Check GitHub Actions logs
2. Check Cloudflare Pages build logs
3. Verify all secrets are correctly set
4. Ensure Flutter version compatibility

---

**🎉 Your AetherCorp website will now automatically deploy whenever you push to main!**
