# ✅ What to Enter in "Custom domains"

When you click "Set up a custom domain" in Cloudflare Pages, enter:

## 🎯 Primary Entry

**Enter:**
```
www.aethercorp.us
```

This makes your site available at: `https://www.aethercorp.us`

---

## 🌐 Also Add the Root Domain (Recommended)

After setting up `www.aethercorp.us`, do it again and also add:

**Enter:**
```
aethercorp.us
```

This makes your site also available at: `https://aethercorp.us` (without www)

Cloudflare will automatically redirect one to the other, so both work.

---

## 📋 Step-by-Step

1. **First custom domain:**
   - Enter: `www.aethercorp.us`
   - Click "Continue" or "Save"
   - Wait for DNS to configure (1-2 minutes)

2. **Second custom domain (optional but recommended):**
   - Click "Set up a custom domain" again
   - Enter: `aethercorp.us` 
   - Click "Continue" or "Save"
   - Wait for configuration

---

## ✅ Verification

After adding the domain(s):

- You'll see both domains listed in "Custom domains"
- They should show "Active" status
- SSL certificates will be automatically provisioned
- Your site will be live at both URLs within 2-3 minutes

---

## 🎯 What NOT to Enter

- ❌ Don't enter `https://www.aethercorp.us` (no protocol)
- ❌ Don't enter `www.aethercorp.us/` (no trailing slash)
- ❌ Don't enter `www.aethercorp.us:443` (no port)
- ❌ Don't enter the `.pages.dev` URL

**Just enter:** `www.aethercorp.us`

---

That's it! The form should guide you through the rest automatically.

