---
name: smart-commit
description: "Use when: committing code, pushing changes, creating commits, git commit, git push, shipping code, saving work. Analyzes staged/unstaged changes, finds or creates a linked GitHub issue, generates a detailed conventional-commit message, commits, and pushes — all in one step."
argument-hint: "Describe what you changed or leave blank for auto-detection"
---

# Smart Commit & Push

Analyze local git changes, link them to a GitHub issue (or create one), craft a high-quality commit message, commit, and push — all in one flow.

## When to Use

- You're ready to commit and push your work
- You want commits automatically tied to GitHub issues
- You want consistently great commit messages without thinking about formatting

## Procedure

### Step 1 — Gather Context

1. Run `git status` and `git diff --stat` to understand what changed.
2. Run `git diff` (staged first via `git diff --cached`, then unstaged) to read the actual code changes.
3. Identify the files modified, added, or deleted.
4. Summarize the intent: what was built, fixed, or refactored.

### Step 2 — Detect or Create a GitHub Issue

1. Use the GitHub MCP tools to search for open issues in the current repository that relate to the changes (match by keywords from changed files, feature area, or commit context).
2. **If a matching issue is found**: note its number and title. Confirm with the user that this is the right issue.
3. **If NO matching issue is found**:
   - Draft a new issue title and body describing the work that was done.
   - The issue title should be concise and action-oriented (e.g., "Add fuzzy search to product catalog").
   - The issue body should include:
     - **Summary**: 1–2 sentences on what was implemented/fixed.
     - **Changes**: bullet list of key files and what changed.
     - **Labels** suggestion (e.g., `enhancement`, `bug`, `chore`).
   - Create the issue using the GitHub MCP tools.
   - Note the new issue number.

### Step 3 — Stage Changes

1. If there are unstaged changes the user wants to include, stage them with `git add`.
2. Confirm the final set of staged files with the user if there's ambiguity (e.g., mix of unrelated changes).

### Step 4 — Craft the Commit Message

Generate a commit message following **Conventional Commits** format:

```
<type>(<scope>): <short summary> (#<issue-number>)

<body>

Closes #<issue-number>
```

**Rules for the message:**
- **type**: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `style`, `perf`, `ci`, `build`
- **scope**: the area of the codebase (e.g., `api`, `frontend`, `auth`, `products`, `cart`)
- **short summary**: imperative mood, lowercase, no period, max 72 chars
- **body**: bullet list of meaningful changes grouped by file/area — no filler, no obvious statements. Explain *why* not just *what* when the reason isn't obvious.
- **footer**: `Closes #<number>` to auto-close the linked issue on merge, or `Refs #<number>` if the issue shouldn't be closed yet.

**Example:**
```
feat(products): add fuzzy search with Fuse.js (#42)

- Integrate Fuse.js for client-side fuzzy matching on product name,
  description, and category fields
- Add search input with debounced filtering (300ms) to Products page
- Display "no results" state when search yields zero matches
- Support dark mode styling for search input

Closes #42
```

### Step 5 — Commit and Push

1. Run `git commit` with the crafted message.
2. Run `git push` to the current branch.
3. If push fails due to upstream changes, run `git pull --rebase` first, then retry the push.

### Step 6 — Report

Provide a summary to the user:
- Commit hash (short)
- Branch pushed to
- Issue linked (with number and URL)
- Whether the issue was newly created or existing
- The full commit message

## Quality Checklist

- [ ] Commit message follows conventional commits format
- [ ] Issue number is referenced in both the summary line and footer
- [ ] Body describes meaningful changes, not just "updated files"
- [ ] Scope accurately reflects the area of change
- [ ] Type correctly categorizes the change (feat vs fix vs refactor etc.)
- [ ] All intended changes are staged before committing
