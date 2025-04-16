## Daily Dev Log - 2025-04-16

### Branch: `mayank/dev/3D-close-button`

#### ✅ Completed Tasks:

- Added a **close button** to the image modal component.
- Disabled closing the modal via clicking on the image or nav area; modal can now only be closed via:
  - The close (`X`) button
  - The `Escape` key
- Styled the close button to support **dark mode**.
- Rewrote metadata extraction logic using **`piexifjs`** to display image EXIF data like:
  - Name
  - Latitude, Longitude
  - Elevation
- Reorganized and refactored `ImageComponent.tsx` to:
  - Use better state management (`useState`)
  - Clean up conditional logic
- Used `ReactDOM.createPortal` to handle modal rendering properly
- Deleted unnecessary/unused shell scripts from server repo:
  - `config-unused-vars-check.sh`
  - `env-unused-vars-check.sh`

#### 🛠 Git Operations:

- Resolved Git error during branch switch due to uncommitted changes
- Used the following Git commands:
  - `git stash` before switching branches
  - `git merge development` to sync latest changes
  - `git pull --rebase` to fix non-fast-forward issue during push

#### 💡 Keyboard Shortcuts & Tooling:

- Used VS Code shortcut `Shift + Alt + F` to auto-format code

#### 🔧 Fixes & Improvements:

- Improved code readability and accessibility in modal component
- Ensured no external clicks close the modal (UX consistency)
- Maintained portal DOM isolation via `#root` anchor

---

### Outcome:
This log can be added to a 3-month progress report showcasing full ownership of a modular UI component, Git proficiency, refactoring practices, and attention to dark mode and accessibility.

> Next: Merge into dev branch after final testing and create PR.

---

*Logged by: Mayank*