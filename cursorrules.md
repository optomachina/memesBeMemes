# Cursor Development Rules and Best Practices

## Project Context
Rules and best practices for development in the Cursor IDE environment, focusing on efficient development workflows and common pitfalls to avoid.

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

### Git Workflow
1. **Commit Messages**
   - Use prefixes: `fix:`, `feat:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`
   - Keep messages concise and descriptive
   - Reference issue numbers when applicable

2. **Branch Management**
   - Keep feature branches short-lived
   - Pull and rebase before pushing
   - Delete branches after merging

## Code Style and Structure

### File Organization
- Use consistent directory structures
- Group related files together
- Use clear, descriptive file names

### Naming Conventions
- Use lowercase with dashes for directories
- Use PascalCase for component files
- Use camelCase for utility files

### Error Handling
- Implement proper error boundaries
- Log errors appropriately for debugging
- Provide user-friendly error messages
- Handle network failures gracefully

## Documentation
- Maintain clear README files
- Document complex logic and workflows
- Keep configuration files well-documented
- Add comments only for non-obvious logic

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
   - Test in multiple environments
   - Verify changes locally before pushing
   - Follow test-driven development when appropriate
