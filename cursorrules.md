# Cursor Development Rules and Best Practices

## Project Context
Rules and best practices for development in the Cursor IDE environment, focusing on efficient development workflows and common pitfalls to avoid. These rules are specifically tailored for meme site development and deployment on Vercel.

## Project Structure

### Site Organization
1. **Directory Structure**
   - Each meme site should be in its own directory under `sites/`
   - Use kebab-case for directory names (e.g., `surprised-pikachu`)
   - Include redirects in the `sites/redirects/` directory

2. **Required Files**
   - `index.html` - Main entry point
   - `vercel.json` - Deployment configuration
   - `package.json` - Project metadata and dependencies
   - Image assets (jpg/png)
   - `.gitignore` - Git ignore rules

3. **Asset Naming**
   - Use PascalCase for main meme images (e.g., `TheMoreYouKnow.jpg`)
   - Use camelCase for auxiliary assets (e.g., `surprisedPikachu.jpg`)

## Command Line Usage

### PowerShell Rules
1. **Command Output Handling**
   - ❌ Don't use: `git status | cat` (PowerShell's `cat` is an alias for `Get-Content`)
   - ✅ Use instead: `git status`

2. **Command Chaining**
   - ❌ Don't use: `command1 && command2` (Unix-style)
   - ✅ Use instead: `command1; command2` (PowerShell-style)

3. **Long Commands**
   - ❌ Don't use: Single long command lines that may get truncated
   - ✅ Use instead: Break into multiple commands:
     ```powershell
     git add .
     git commit -m "your message"
     git push
     ```

### Development Server
1. **Local Testing**
   - Use `serve` package for local development
   - Run with `npm run dev` or `npm start`
   - Test all redirects locally before deploying

## Deployment Configuration

### Vercel Settings
1. **Build Configuration**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "*.{html,jpg,png}",
         "use": "@vercel/static"
       }
     ]
   }
   ```

2. **Cache Control**
   - Set appropriate cache headers for assets
   - Use `must-revalidate` for HTML files
   - Enable longer cache times for images

### Meta Tags
1. **Required Tags**
   - Include viewport settings
   - Set appropriate OpenGraph tags
   - Configure Twitter Card metadata

2. **Image Preview**
   - Use absolute URLs for image assets
   - Set correct image dimensions
   - Optimize images for web

## Git Workflow
1. **Commit Messages**
   - Use prefixes: `fix:`, `feat:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`
   - Keep messages concise and descriptive
   - Reference issue numbers when applicable

2. **Branch Management**
   - Keep feature branches short-lived
   - Pull and rebase before pushing
   - Delete branches after merging

## Documentation
1. **README Requirements**
   - Include deployment URL
   - Document any special configurations
   - List dependencies and versions

2. **Code Comments**
   - Document complex CSS layouts
   - Explain redirect logic
   - Note browser-specific fixes

## Development Workflow
1. **Version Control**
   - Commit frequently with clear messages
   - Review changes before committing
   - Keep commits focused and atomic

2. **Code Review**
   - Review your own changes first
   - Use meaningful commit messages
   - Test changes before pushing

3. **Testing**
   - Test in multiple browsers
   - Verify mobile responsiveness
   - Check image loading performance
