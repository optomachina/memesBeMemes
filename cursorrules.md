# Cursor Rules and Best Practices

## PowerShell Command Line Rules

1. **Piping to `cat`**: In PowerShell, piping to `cat` (like `git status | cat`) doesn't work as expected. PowerShell's `cat` is an alias for `Get-Content` which expects file input, not pipeline input.
   - ❌ Don't use: `git status | cat`
   - ✅ Use instead: `git status`

2. **Multiple Commands**: When running multiple git commands, use semicolons to separate them:
   - ✅ Example: `git add .; git commit -m "message"; git push`

3. **Long Commands**: PowerShell may truncate long commands in the output. Break them into separate commands if you encounter issues:
   ```powershell
   git add .
   git commit -m "your message"
   git push
   ```
