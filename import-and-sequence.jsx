#target premierepro

(function () {
    try {
        // 1) Check if project is open
        if (!app.project) {
            alert("No project found. Please open a project in Premiere first.");
            return;
        }

        // 2) Ask user for folder (file picker dialog)
        var importFolder = Folder.selectDialog("Select a folder with media to import");
        if (!importFolder) {
            alert("No folder selected. Script cancelled.");
            return;
        }

        // 3) Collect files from the chosen folder
        var filesToImport = importFolder.getFiles();
        if (filesToImport.length === 0) {
            alert("No files found in this folder.");
            return;
        }

        // Collect ONLY files; convert to OS paths
        var entries = importFolder.getFiles()
        var filePaths = [];
        for (var i = 0; i < entries.length; i++) {
            var e = entries[i];
            if (e instanceof File) {
                filePaths.push(e.fsName)            // <-- string path
            }
        }

        // 4) Import into Premiere (at root bin level)
        app.project.importFiles(filePaths, true, app.project.rootItem, false);
        alert("Imported " + filePaths.length + " files into the Project panel.");

        // 5) Create a new sequence automatically
        // Use first imported clip as reference
        var newSeqName = "Scripted Sequence " + new Date().getTime();
        var firstClip = app.project.rootItem.children[app.project.rootItem.children.numItems - 1];
        
        if (firstClip && firstClip.isSequence() === false) {
            app.project.createNewSequenceFromClips(newSeqName, [firstClip], app.project.rootItem);
            alert("New sequence created: " + newSeqName);
        } else {
            alert("Could not create sequence — no valid clip found.");
        }

    } catch (e) {
        alert("Error: " + e);
    }
})();