# PropelAI Brand Portal - Vercel Deployment Guide

This guide provides step-by-step instructions to deploy the PropelAI Brand Portal to Vercel.

## Prerequisites

Before deploying to Vercel, ensure you have:

1. **Vercel Account** - Sign up at [vercel.com](https://vercel.com) (free tier available)
2. **GitHub Account** - Required for connecting your repository to Vercel
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

#### Step 2: Connect to Vercel

1. **Go to Vercel Dashboard**:
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"

2. **Import from GitHub**:
   - Click "Import Git Repository"
   - Search for `propelai-brand-portal`
   - Click "Import"

3. **Configure Project**:
   - **Project Name**: `propelai-brand-portal` (or your preferred name)
   - **Framework Preset**: Select "Vite"
   - **Root Directory**: `./` (default)
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install`

4. **Environment Variables** (if needed):
   - Leave empty for now (no sensitive data required)
   - Click "Deploy"

5. **Wait for Deployment**:
   - Vercel will build and deploy your project
   - You'll see a progress indicator
   - Once complete, you'll get a deployment URL

#### Step 3: Access Your Deployment

- Your site will be available at: `https://propelai-brand-portal.vercel.app`
- You can customize the domain in Vercel settings

---

### Method 2: Deploy via Vercel CLI

For advanced users who prefer command-line deployment.

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Authenticate with Vercel

```bash
vercel login
```

Follow the prompts to authenticate with your Vercel account.

#### Step 3: Deploy

```bash
cd propelai-brand-portal
vercel
```

Follow the interactive prompts:
- **Which scope?** - Select your personal account or team
- **Link to existing project?** - Choose "No" for first deployment
- **Project name?** - `propelai-brand-portal`
- **In which directory is your code?** - `./`
- **Want to modify these settings?** - Choose "No" or customize as needed

#### Step 4: Access Your Deployment

After deployment completes, you'll receive a URL like:
`https://propelai-brand-portal.vercel.app`

---

### Method 3: Deploy via Vercel Web UI (Manual Upload)

For quick testing without GitHub integration.

1. Go to [vercel.com/import](https://vercel.com/import)
2. Select "Project from Git" or upload ZIP file
3. Follow the configuration steps
4. Click "Deploy"

---

## Post-Deployment Configuration

### Custom Domain Setup

1. **In Vercel Dashboard**:
   - Go to your project settings
   - Click "Domains"
   - Click "Add Domain"
   - Enter your custom domain (e.g., `propelai-portal.com`)

2. **Update DNS Records**:
   - Vercel will provide DNS configuration
   - Update your domain registrar's DNS settings
   - Wait for DNS propagation (5-48 hours)

3. **Enable SSL**:
   - Vercel automatically provisions SSL certificates
   - Your site will be secure at `https://your-domain.com`

### Environment Variables

If you need environment variables:

1. Go to **Project Settings** → **Environment Variables**
2. Add variables as needed
3. Redeploy for changes to take effect

### Build Optimization

The `vercel.json` file includes:
- **Cache headers** for static assets (1 year)
- **Rewrites** for client-side routing
- **Build configuration** optimized for Vite

---

## Continuous Deployment

Once connected to GitHub, every push to the `main` branch will:

1. Trigger an automatic build on Vercel
2. Run the build command: `pnpm build`
3. Deploy to production if build succeeds
4. Generate a new deployment URL

### Preview Deployments

Pull requests automatically get preview deployments:
- Each PR gets a unique preview URL
- Share with team members for review
- Merge to main for production deployment

---

## Troubleshooting

### Build Fails

**Error: "pnpm: command not found"**
- Vercel should auto-detect pnpm from `pnpm-lock.yaml`
- If not, add to `vercel.json`: `"installCommand": "npm install -g pnpm && pnpm install"`

**Error: "Module not found"**
- Ensure all dependencies are in `package.json`
- Run `pnpm install` locally to verify
- Commit `pnpm-lock.yaml` to Git

### Site Shows 404

- Check that `vercel.json` has the correct rewrites
- Ensure `dist` folder is the output directory
- Verify build command creates `dist/index.html`

### Slow Performance

- Check Vercel Analytics in dashboard
- Review build time in deployment logs
- Consider optimizing images and assets

### Domain Not Working

- Verify DNS records are correctly configured
- Wait for DNS propagation (can take 48 hours)
- Check Vercel domain settings for any errors

---

## Monitoring & Analytics

### Vercel Analytics

1. Go to **Project Settings** → **Analytics**
2. Enable Web Analytics to track:
   - Page views
   - User interactions
   - Performance metrics

### Logs

View deployment logs:
1. Go to **Deployments** tab
2. Click on any deployment
3. View build and runtime logs

---

## Rollback to Previous Deployment

If something goes wrong:

1. Go to **Deployments** tab
2. Find the previous working deployment
3. Click the three dots menu
4. Select "Promote to Production"

---

## Updating Your Site

### After Making Changes

1. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Update: Description of changes"
   git push origin main
   ```

2. **Vercel automatically deploys**:
   - Build starts automatically
   - New deployment created
   - Live within minutes

### Manual Redeploy

To redeploy without code changes:

1. Go to **Deployments** tab
2. Click the three dots on latest deployment
3. Select "Redeploy"

---

## Performance Tips

1. **Optimize Images**: Use WebP format where possible
2. **Code Splitting**: Vite automatically handles this
3. **Caching**: Vercel's CDN caches static assets globally
4. **Monitoring**: Use Vercel Analytics to identify bottlenecks

---

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Vercel Support**: https://vercel.com/support

---

## Quick Reference

| Task | Command |
|------|---------|
| Deploy via CLI | `vercel` |
| View logs | `vercel logs` |
| List deployments | `vercel list` |
| Remove project | `vercel remove` |
| Pull environment | `vercel env pull` |

---

**PropelAI Brand Portal v1.1**
Ready for production deployment on Vercel
