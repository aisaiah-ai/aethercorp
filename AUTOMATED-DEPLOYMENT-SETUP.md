# 🚀 AetherCorp Automated CI/CD Setup

This guide will help you set up **fully automated deployment** to Cloudflare Pages whenever you push to the main branch.

## 🎯 What This Achieves

- ✅ **Automatic deployment** on every push to `main` branch
- ✅ **Live site updates** at https://www.aethercorp.us
- ✅ **Zero manual intervention** required
- ✅ **Build verification** before deployment
- ✅ **Rollback capability** if issues occur

## 📋 Prerequisites

1. **GitHub Repository** - Your code must be in a GitHub repository
2. **Cloudflare Account** - With Pages enabled
3. **Domain Access** - Control over aethercorp.us domain

## 🔧 Step 1: Get Cloudflare API Credentials

### Get Cloudflare API Token

1. Go to [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click **"Create Token"**
3. Use **"Custom token"** template
4. Set permissions:
   - **Account**: `Cloudflare Pages:Edit`
   - **Zone**: `Zone:Read` (for your domain)
5. **Account Resources**: Include your account
6. **Zone Resources**: Include your domain `aethercorp.us`
7. Click **"Continue to summary"** → **"Create Token"**
8. **Copy the token** - you'll need it for GitHub secrets

### Get Cloudflare Account ID

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Select your domain `aethercorp.us`
3. In the right sidebar, find **"Account ID"**
4. **Copy the Account ID**

## 🔐 Step 2: Configure GitHub Secrets

1. Go to your GitHub repository
2. Click **"Settings"** → **"Secrets and variables"** → **"Actions"**
3. Click **"New repository secret"**
4. Add these secrets:

```
Name: CLOUDFLARE_API_TOKEN
Value: [Your API Token from Step 1]

Name: CLOUDFLARE_ACCOUNT_ID  
Value: [Your Account ID from Step 1]
```

## 🌐 Step 3: Set Up Cloudflare Pages Project

### Option A: Let GitHub Actions Create the Project

The automated workflow will create the project automatically when you first push to main.

### Option B: Create Project Manually (Recommended)

1. Go to [Cloudflare Pages](https://dash.cloudflare.com/pages)
2. Click **"Create a project"**
3. Choose **"Connect to Git"**
4. Select your GitHub repository
5. Configure build settings:
   - **Framework preset**: None
   - **Build command**: `cd aether_corp_web && flutter build web --release`
   - **Build output directory**: `aether_corp_web/build/web`
   - **Root directory**: `/`
6. Click **"Save and Deploy"**

## 🔗 Step 4: Configure Custom Domain

1. In your Cloudflare Pages project
2. Go to **"Custom domains"**
3. Click **"Set up a custom domain"**
4. Enter: `aethercorp.us`
5. Follow DNS configuration instructions
6. Wait for SSL certificate activation (5-10 minutes)

## 🚀 Step 5: Test the Automation

### Test the Pipeline

1. **Make a small change** to your code
2. **Commit and push** to main branch:
   ```bash
   git add .
   git commit -m "Test automated deployment"
   git push origin main
   ```
3. **Check GitHub Actions**:
   - Go to your repository
   - Click **"Actions"** tab
   - Watch the workflow run
4. **Verify deployment**:
   - Visit https://www.aethercorp.us
   - Check that your changes are live

### Expected Workflow

1. **Push to main** → Triggers GitHub Actions
2. **Lint & Test** → Code quality checks
3. **Build** → Flutter web build
4. **Deploy** → Automatic Cloudflare Pages deployment
5. **Live** → Site updates in ~3-5 minutes

## 📊 Monitoring Your Deployments

### GitHub Actions Dashboard

- **Repository** → **Actions** tab
- View all workflow runs
- Check build logs and deployment status
- See deployment URLs and details

### Cloudflare Pages Dashboard

- **Pages** → **aethercorp** project
- View deployment history
- Check build logs
- Monitor performance metrics

### Site Verification

- **Primary URL**: https://www.aethercorp.us
- **Cloudflare URL**: https://aethercorp.pages.dev
- **Status**: Check if site is live and responsive

## 🔧 Troubleshooting

### Common Issues

#### 1. GitHub Actions Fails

**Check:**
- GitHub secrets are correctly set
- Cloudflare API token has correct permissions
- Account ID is correct

**Fix:**
```bash
# Check secrets in GitHub repository settings
# Verify API token permissions in Cloudflare
# Ensure account ID matches your Cloudflare account
```

#### 2. Build Fails

**Check:**
- Flutter version compatibility
- Dependencies in pubspec.yaml
- Build logs in GitHub Actions

**Fix:**
```bash
# Update Flutter version in workflow
# Check pubspec.yaml dependencies
# Review build error logs
```

#### 3. Deployment Fails

**Check:**
- Cloudflare Pages project exists
- API token has Pages:Edit permission
- Build output directory is correct

**Fix:**
```bash
# Create Cloudflare Pages project manually
# Update API token permissions
# Verify build output path
```

#### 4. Domain Not Working

**Check:**
- DNS settings in Cloudflare
- SSL certificate status
- Domain configuration

**Fix:**
```bash
# Verify DNS records
# Check SSL certificate activation
# Ensure domain is properly connected
```

### Debug Commands

```bash
# Check GitHub Actions status
gh run list --repo your-username/aethercorp

# View latest workflow run
gh run view --repo your-username/aethercorp

# Check Cloudflare Pages status
curl -X GET "https://api.cloudflare.com/client/v4/accounts/{account_id}/pages/projects/aethercorp" \
  -H "Authorization: Bearer {api_token}"
```

## 🎉 Success Indicators

### ✅ Everything Working

- GitHub Actions shows green checkmarks
- Cloudflare Pages shows successful deployment
- https://www.aethercorp.us loads correctly
- Changes appear on the live site
- SSL certificate is active (HTTPS)

### 🔄 Automatic Updates

Once set up, every push to main will:
1. **Automatically trigger** the CI/CD pipeline
2. **Build and test** your Flutter app
3. **Deploy to Cloudflare Pages**
4. **Update your live site** at https://www.aethercorp.us

## 📈 Advanced Features

### Branch Protection

Set up branch protection rules:
1. Go to **Repository Settings** → **Branches**
2. Add rule for `main` branch
3. Require status checks to pass
4. Require up-to-date branches

### Environment Variables

Add environment variables in Cloudflare Pages:
1. Go to **Pages** → **aethercorp** → **Settings**
2. **Environment Variables** tab
3. Add any required environment variables

### Custom Headers

The `_headers` file is already configured for:
- Security headers
- Cache optimization
- SPA routing support

## 🚀 You're All Set!

Your AetherCorp website now has **fully automated CI/CD**:

- ✅ **Push to main** → **Automatic deployment**
- ✅ **Live site** → https://www.aethercorp.us
- ✅ **Zero downtime** deployments
- ✅ **Build verification** before deployment
- ✅ **Rollback capability** if needed

**Happy coding!** 🎉



