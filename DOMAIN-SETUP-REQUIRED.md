# 🔴 CRITICAL: Custom Domain Not Connected to Cloudflare Pages

**Date:** November 2, 2025  
**Issue:** `www.aethercorp.us` is still pointing to the old site  
**Status:** Deployment successful, but domain not configured

## ✅ Current Status

- ✅ **GitHub Actions CI/CD**: Working perfectly
- ✅ **Cloudflare Pages Deployment**: Successful  
- ✅ **Build**: Latest version deployed at `https://3d506020.aethercorp.pages.dev`
- ❌ **Custom Domain**: `www.aethercorp.us` NOT connected to new deployment

## 🔍 What Happened

The deployment completed successfully about 10 hours ago (run ID: 19006172830), but the custom domain `www.aethercorp.us` is still pointing to the OLD server (Express/Google Cloud).

### Evidence:
- Old site: `www.aethercorp.us` → Express server with `x-powered-by: Express`
- New site: `3d506020.aethercorp.pages.dev` → Cloudflare Pages

## 🔧 How to Fix: Connect Your Domain

You need to manually configure the custom domain in Cloudflare Pages. Follow these steps:

### Option 1: Via Cloudflare Dashboard (Recommended)

1. **Log in to Cloudflare**
   - Go to: https://dash.cloudflare.com/
   - Sign in with your account

2. **Navigate to Pages**
   - ⚠️ **IMPORTANT:** You're probably looking at "Domain Overview" - that's the WRONG place!
   - In the LEFT SIDEBAR, click "Workers & Pages"
   - Then click on your "aethercorp" project
   - Look for "Custom domains" TAB at the top of the project page

3. **Add Custom Domain**
   - Go to "Custom domains" tab
   - Click "Set up a custom domain"
   - Enter: `www.aethercorp.us`
   - Follow the DNS configuration prompts

4. **Also Add Root Domain** (Optional but recommended)
   - Click "Set up a custom domain" again
   - Enter: `aethercorp.us` (without www)
   - Cloudflare will configure redirects automatically

### Option 2: Via Wrangler CLI

If you prefer command line:

```bash
# Install wrangler if you haven't
npm install -g wrangler

# Authenticate
export CLOUDFLARE_API_TOKEN="your_token_here"
export CLOUDFLARE_ACCOUNT_ID="your_account_id_here"

# Add custom domain
wrangler pages domain add aethercorp www.aethercorp.us
```

### DNS Configuration

Cloudflare should automatically configure the DNS. If you see instructions to add DNS records, they should look like:

```
Type: CNAME
Name: www
Target: aethercorp.pages.dev
Proxy status: Proxied (orange cloud)
```

Or for the root domain:
```
Type: CNAME
Name: @
Target: aethercorp.pages.dev
Proxy status: Proxied (orange cloud)
```

## ⏱️ Expected Time to Propagate

- **Cloudflare DNS**: Usually instant or within a few minutes
- **Full propagation**: Can take up to 15 minutes
- **SSL Certificate**: Auto-provisioned by Cloudflare (may take 1-2 minutes)

## ✅ Verification

Once configured, verify with:

```bash
# Check DNS resolution
dig www.aethercorp.us

# Should show Cloudflare IPs like:
# 2606:4700:3034::6815:41f1 (IPv6)
# 104.21.65.241 (IPv4)

# Check HTTP headers
curl -I https://www.aethercorp.us

# Should show:
# Server: cloudflare
# (Not x-powered-by: Express)
```

## 🎯 Root Cause

The GitHub Actions workflow deploys to Cloudflare Pages correctly, but the custom domain was never connected in the Cloudflare Dashboard. This is a one-time setup that needs to be done manually.

## 📋 After Domain is Connected

Once you complete the above steps:

1. ✅ `www.aethercorp.us` will point to your new Flutter site
2. ✅ Future deployments will automatically update the site
3. ✅ SSL will be automatically provisioned
4. ✅ The old Express server can be decommissioned

## 🆘 Need Help?

If you need assistance:
1. Check Cloudflare Pages documentation: https://developers.cloudflare.com/pages/platform/custom-domains/
2. Verify your Cloudflare API token has the right permissions
3. Check that your domain DNS is managed by Cloudflare

---

**⚡ Next Action: Log in to Cloudflare and add the custom domain to your Pages project.**

