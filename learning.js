const myDocument = app.activeDocument
myDocument.layers[0].name = "Background layer"

const selection = app.selection
const copySelection = app.copy(selection)

app.paste(copySelection)

const dest = '/Users/alexvela/Desktop/Illustrator_Scripts/final.pdf'
if (app.documents.length > 0) {
    var moveMatrix = app.getTranslationMatrix(0.5, 1.5);
  
    // Add a rotation to the translation, 10 degrees counter clockwise
    var totalMatrix = concatenateRotationMatrix(moveMatrix, 10);
  
    // apply the transformation to all art in the document
    var doc = app.activeDocument;
    for (var i = 0; i < doc.pageItems.length; i++) {
      doc.pageItems[i].transform(totalMatrix);
    }
  }

// saveFileToPDF(dest)

function saveFileToPDF(dest) {
    var doc = app.activeDocument;
  
    if (app.documents.length > 0) {
      var saveName = new File(dest);
      saveOpts = new PDFSaveOptions();
  
      saveOpts.compatibility = PDFCompatibility.ACROBAT5;
      saveOpts.generateThumbnails = true;
      saveOpts.preserveEditability = true;
  
      doc.saveAs(saveName, saveOpts);
    }
  }