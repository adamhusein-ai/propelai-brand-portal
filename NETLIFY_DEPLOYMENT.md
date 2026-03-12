# PropelAI Brand Portal - Netlify Deployment Guide

This guide provides step-by-step instructions to deploy the PropelAI Brand Portal to Netlify.

## Prerequisites

Before deploying to Netlify, ensure you have:

1. **Netlify Account** - Sign up at [netlify.com](https://netlify.com) (free tier available)
2. **GitHub Account** - Required for connecting your repository to Netlify
3. **Git Installed** - For version control and pushing code to GitHub
4. **Node.js 18+** - For local development and testing

## Deployment Methods

### Method 1: Deploy via GitHub (Recommended)

This is the easiest and most recommended approach as it enables automatic deployments on every push.

#### Step 1: Push Code to GitHub

1. **Initialize Git repository** (if not already done):
   ```bash
   cd propelai-brand-portal
   git init
   git add .
   git commit -m "Initial commit: PropelAI Brand Portal"
   ```

2. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Name it `propelai-brand-portal`
   - Choose "Public" or "Private"
   - Do NOT initialize with README, .gitignore, or license
   - Click "Create repository"

3. **Push code to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/propelai-brand-portal.git
   git branch -M main
   git push -u origin main
   ```

#### Step 2: Connect to Netlify

1. **Go to Netlify Dashboard**:
   - Visit [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"

2. **Connect GitHub**:
   - Click "GitHub" button
   - Authorize Netlify to access your GitHub account
   - Select your GitHub organization/user
   - Choose `propelai-brand-portal` repository

3. **Configure Build Settings**:
   - **Branch to deploy**: `main`
   - **Build command**: `pnpm build`
   - **Publish directory**: `dist`
   - **Node version**: `18.17.0` (or latest LTS)
   - Leave environment variables empty for now

4. **Review Configuration**:
   - Netlify will auto-detect the `netlify.toml` file
   - Verify all settings are correct
   - Click "Deploy site"

5. **Wait for Deployment**:
   - Netlify will build and deploy your project
   - You'll see a progress indicator
   - Once complete, you'll get a deployment URL

#### Step 3: Access Your Deployment

- Your site will be available at: `https://propelai-brand-portal.netlify.app`
- You can customize the domain in Netlify settings

---

### Method 2: Deploy via Netlify CLI

For advanced users who prefer command-line deployment.

#### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### Step 2: Authenticate with Netlify

```bash
netlify login
```

Follow the prompts to authenticate with your Netlify account.

#### Step 3: Deploy

```bash
cd propelai-brand-portal
netlify deploy --prod
```

Follow the interactive prompts:
- **Team**: Select your team
- **Site name**: `propelai-brand-portal` (or leave blank for auto-generated)
- **Directory to deploy**: `dist`

#### Step 4: Access Your Deployment

After deployment completes, you'll receive a URL like:
`https://propelai-brand-portal.netlify.app`

---

### Method 3: Manual Drag & Drop

For quick testing without Git integration.

1. Build the project locally:
   ```bash
   pnpm build
   ```

2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag and drop the `dist` folder onto the deployment area
4. Your site will be live instantly

---

## Post-Deployment Configuration

### Custom Domain Setup

1. **In Netlify Dashboard**:
   - Go to your site settings
   - Click "Domain management"
   - Click "Add custom domain"
   - Enter your custom domain (e.g., `propelai-portal.com`)

2. **Update DNS Records**:
   - Netlify will provide DNS configuration
   - Update your domain registrar's DNS settings
   - Wait for DNS propagation (5-48 hours)

3. **Enable SSL**:
   - Netlify automatically provisions SSL certificates via Let's Encrypt
   - Your site will be secure at `https://your-domain.com`

### Environment Variables

If you need environment variables:

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Click "Edit variables"
3. Add variables as needed
4. Redeploy for changes to take effect

### Build Optimization

The `netlify.toml` file includes:
- **Cache headers** for static assets (1 year)
- **Redirects** for client-side routing
- **Security headers** (X-Frame-Options, X-Content-Type-Options, etc.)
- **Build configuration** optimized for Vite

---

## Continuous Deployment

Once connected to GitHub, every push to the `main` branch will:

1. Trigger an automatic build on Netlify
2. Run the build command: `pnpm build`
3. Deploy to production if build succeeds
4. Generate a new deployment URL

### Deploy Previews

Pull requests automatically get deploy previews:
- Each PR gets a unique preview URL
- Share with team members for review
- Merge to main for production deployment

### Branch Deployments

Deploy specific branches:
1. Go to **Site settings** → **Build & deploy** → **Deploy contexts**
2. Configure which branches to deploy
3. Each branch gets its own preview URL

---

## Monitoring & Analytics

### Netlify Analytics

1. Go to **Analytics** tab in your site dashboard
2. View:
   - Page views
   - Unique visitors
   - Top pages
   - Referrers
   - Bandwidth usage

### Build Logs

View deployment logs:
1. Go to **Deploys** tab
2. Click on any deployment
3. View build and runtime logs

### Performance

Netlify provides performance insights:
1. Go to **Analytics** → **Performance**
2. Monitor Core Web Vitals
3. Identify optimization opportunities

---

## Troubleshooting

### Build Fails

**Error: "pnpm: command not found"**
- Ensure `pnpm-lock.yaml` is committed to Git
- Netlify auto-detects pnpm from lock file
- If not detected, set `NPM_FLAGS = "--legacy-peer-deps"` in environment

**Error: "Module not found"**
- Ensure all dependencies are in `package.json`
- Run `pnpm install` locally to verify
- Commit `pnpm-lock.yaml` to Git

### Site Shows 404

- Check that `netlify.toml` has correct redirects
- Verify `dist` folder is the publish directory
- Ensure build command creates `dist/index.html`

### Slow Performance

- Check Netlify Analytics for performance metrics
- Review build time in deployment logs
- Consider optimizing images and assets
- Enable Netlify's image optimization

### Domain Not Working

- Verify DNS records are correctly configured
- Wait for DNS propagation (can take 48 hours)
- Check Netlify domain settings for any errors

---

## Rollback to Previous Deployment

If something goes wrong:

1. Go to **Deploys** tab
2. Find the previous working deployment
3. Click the three dots menu
4. Select "Publish deploy"

---

## Updating Your Site

### After Making Changes

1. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Update: Description of changes"
   git push origin main
   ```

2. **Netlify automatically deploys**:
   - Build starts automatically
   - New deployment created
   - Live within minutes

### Manual Redeploy

To redeploy without code changes:

1. Go to **Deploys** tab
2. Click the three dots on latest deployment
3. Select "Retry deploy"

---

## Performance Tips

1. **Optimize Images**: Use WebP format where possible
2. **Code Splitting**: Vite automatically handles this
3. **Caching**: Netlify's CDN caches static assets globally
4. **Monitoring**: Use Netlify Analytics to identify bottlenecks

---

## Netlify Features

### Netlify Functions

Deploy serverless functions alongside your site:
```bash
mkdir -p netlify/functions
# Add function files
```

### Netlify Forms

Collect form submissions without backend:
1. Add `netlify` attribute to form
2. Form submissions appear in Netlify dashboard

### Netlify Identity

Add authentication to your site:
1. Enable Identity in site settings
2. Configure login/signup flows
3. Manage users in dashboard

---

## Support & Resources

- **Netlify Docs**: https://docs.netlify.com
- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Netlify Support**: https://support.netlify.com

---

## Quick Reference

| Task | Command |
|------|---------|
| Deploy via CLI | `netlify deploy --prod` |
| View logs | `netlify logs` |
| List sites | `netlify sites:list` |
| Open dashboard | `netlify open` |
| Link to existing site | `netlify link` |

---

## Comparison: Netlify vs Vercel

| Feature | Netlify | Vercel |
|---------|---------|--------|
| Static Hosting | ✅ | ✅ |
| Continuous Deployment | ✅ | ✅ |
| Custom Domains | ✅ | ✅ |
| SSL Certificates | ✅ (Auto) | ✅ (Auto) |
| Deploy Previews | ✅ | ✅ |
| Analytics | ✅ | ✅ (Premium) |
| Serverless Functions | ✅ | ✅ |
| Forms | ✅ | ❌ |
| Identity/Auth | ✅ | ❌ |
| Free Tier | Generous | Generous |

---

**PropelAI Brand Portal v1.1**
Ready for production deployment on Netlify
