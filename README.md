# premierepro-scripting-tutorial-03-automating-imports
Tutorial 3 — Automating Imports and Creating a Sequence in Premiere Pro
This repository contains the code and instructions for **Tutorial 3** from [PremiereProScripting.com]

## Prerequisites
- Adobe Premiere Pro installed and open with a project.
- Visual Studio Code installed.
- VS Code extension: **Adobe ExtendScript Debugger**.

## Files
- `import-and-sequence.jsx` — the script that imports files and creates a sequence.

## Troubleshooting
- **Illegal parameter type error**  
  Ensure you’re only passing actual file paths to `app.project.importFiles()`. The script already filters `Folder.getFiles()` to include only files (`File` objects).  
- **No clips imported**  
  Double-check the folder you selected contains supported video or audio formats.  
- **Sequence not created**  
  Premiere needs a valid clip to base the sequence on. If the first file isn’t valid media, the script will warn you.

## License
MIT — see `LICENSE`.
