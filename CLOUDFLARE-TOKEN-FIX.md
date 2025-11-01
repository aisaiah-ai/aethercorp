# 🔑 Cloudflare API Token - Permission Fix Required

**Date:** November 1, 2025  
**Issue:** Authentication error - Missing permissions on API token

## ❌ **Current Error**

```
✘ [ERROR] A request to the Cloudflare API (/memberships) failed.
Authentication error [code: 10000]

👋 You are logged in with an User API Token. 
Unable to retrieve email for this user. 
Are you missing the `User->User Details->Read` permission?
```

## 🔧 **Root Cause**

The `CLOUDFLARE_API_TOKEN` in GitHub Secrets doesn't have the required permissions for `wrangler pages deploy`.

## ✅ **Required Permissions**

Your Cloudflare API token needs these permissions:

### **Account Permissions**
1. **Account Settings** - Read
2. **Cloudflare Pages** - Edit

### **User Permissions**
3. **User Details** - Read

## 📋 **Step-by-Step Fix**

### **Step 1: Create New API Token**

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
2. Click **"Create Token"**
3. Click **"Get started"** next to **"Create Custom Token"**

### **Step 2: Configure Token Permissions**

**Token Name:** `GitHub Actions - Pages Deploy`

**Permissions:**
```
Account - Account Settings - Read
Account - Cloudflare Pages - Edit
User - User Details - Read
```

**Account Resources:**
```
Include - <Your Account Name>
```

**Zone Resources:**
```
(Leave blank or set to "All zones" if needed)
```

**Client IP Address Filtering:**
```
(Optional - leave blank for GitHub Actions)
```

**TTL:**
```
(Optional - set expiration date or leave blank)
```

### **Step 3: Copy the Token**

1. Click **"Continue to summary"**
2. Click **"Create Token"**
3. **IMPORTANT:** Copy the token immediately (it won't be shown again)
4. Save it securely

### **Step 4: Update GitHub Secret**

#### **Option A: Using GitHub Web Interface**

1. Go to your repository: `https://github.com/aisaiah-ai/aethercorp`
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Find `CLOUDFLARE_API_TOKEN` in the list
4. Click **Update** (pencil icon)
5. Paste your new token
6. Click **Update secret**

#### **Option B: Using GitHub CLI**

```bash
# Set the new token
gh secret set CLOUDFLARE_API_TOKEN --body "YOUR_NEW_TOKEN_HERE" --repo aisaiah-ai/aethercorp
```

### **Step 5: Verify the Token**

Test locally (optional):

```bash
# Set the token in your environment
export CLOUDFLARE_API_TOKEN="your_new_token"

# Test wrangler authentication
wrangler whoami

# If successful, test pages deploy
cd aether_corp_web/build/web
wrangler pages deploy . --project-name=aethercorp
```

### **Step 6: Trigger New Deployment**

After updating the GitHub secret:

```bash
# Make a small change or re-trigger the workflow
git commit --allow-empty -m "chore: Trigger deployment with new API token"
git push origin main
```

## 🎯 **Exact Token Configuration**

When creating the token, use these exact settings:

```
┌─────────────────────────────────────────────────────┐
│ Permissions                                         │
├─────────────────────────────────────────────────────┤
│ Account                                             │
│   ├─ Account Settings.................... Read      │
│   └─ Cloudflare Pages.................... Edit      │
│                                                     │
│ User                                                │
│   └─ User Details........................ Read      │
└─────────────────────────────────────────────────────┘
```

## ⚠️ **Important Notes**

1. **Don't use Global API Key** - Use an API Token with specific permissions
2. **Keep token secure** - Never commit it to your repository
3. **Token expires?** - Set a reminder to renew before expiration
4. **Multiple accounts?** - Ensure token is for the correct account

## 🔍 **Verification**

After updating the token, the deployment should:

1. ✅ Authenticate successfully
2. ✅ Read account information
3. ✅ Deploy to Cloudflare Pages
4. ✅ Complete without errors

## 📞 **Alternative: Using Cloudflare Pages Direct Integration**

If you prefer not to use tokens, you can:

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages**
3. Click **"Create a project"**
4. Connect your GitHub repository
5. Let Cloudflare handle authentication

This method doesn't require managing API tokens.

## ✅ **Expected Success Output**

After fixing the token, you should see:

```
🌍  Uploading... (X/Y files)
✨  Success! Uploaded X files (Y.YY sec)
✨  Deployment complete! Take a peek over at https://xxxxxxxx.aethercorp.pages.dev
```

---

**Next Step:** Create a new Cloudflare API token with the correct permissions and update GitHub secret.

