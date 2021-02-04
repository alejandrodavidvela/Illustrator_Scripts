// Reference Material
// https://www.youtube.com/watch?v=EGdgrP7azUQ
// https://www.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/Illustrator_JavaScript_Scripting_Reference_2017.pdf
// https://www.w3schools.com/jsref/met_win_prompt.asp

// Set active document and rename background layer
var myDocument = app.activeDocument
myDocument.layers[0].name = "Background layer"

// Ask for how many prints you want
var count = prompt("How many signs per bed?", 'type number 1 - 8');



// Check how many prints and execute that many objects
if(count === '1'){
    generateObject1()
}else if(count === '2'){
    generateObject1()
    generateObject2()
}else if(count === '3'){
    generateObject1()
    generateObject2()
    generateObject3()
}else if(count === '4'){
    generateObject1()
    generateObject2()
    generateObject3()
    generateObject4()
}else if (count === '5'){
    generateObject1()
    generateObject2()
    generateObject3()
    generateObject4()
    generateObject5()
}else if(count === '6'){
    generateObject1()
    generateObject2()
    generateObject3()
    generateObject4()
    generateObject5()
    generateObject6()
}else if(count === '7'){
    generateObject1()
    generateObject2()
    generateObject3()
    generateObject4()
    generateObject5()
    generateObject6()
    generateObject7()
}else if(count === '8'){
    generateObject1()
    generateObject2()
    generateObject3()
    generateObject4()
    generateObject5()
    generateObject6()
    generateObject7()
    generateObject8()
}
    


// Create objects in 1 - 8 locations
function generateObject1(){
    var doc = app.activeDocument
    var objLayer = myDocument.layers.add()
    var object1 = doc.pathItems.add()
    object1.filled = true
    var objFillColor = new CMYKColor()
    objFillColor.cyan = 6
    objFillColor.magenta = 2
    objFillColor.yellow = 97
    objFillColor.black = 1
    object1.fillColor = objFillColor
    object1.setEntirePath([[0,0], [1296,0], [1296,1728], [0,1728]])
}
function generateObject2(){
    var doc = app.activeDocument
    var objLaye = myDocument.layers.add()
    var object2 = doc.pathItems.add()
    object2.filled = true
    var objFillColor = new CMYKColor()
    objFillColor.cyan = 8
    objFillColor.magenta = 2
    objFillColor.yellow = 97
    objFillColor.black = 1
    object2.fillColor = objFillColor
    object2.setEntirePath([[1296,0], [2592,0], [2592,1728], [1296,1728]])
}
function generateObject3(){
    var doc = app.activeDocument
    var objLayer = myDocument.layers.add()
    var object3 = doc.pathItems.add()
    object3.filled = true
    var objFillColor = new CMYKColor()
    objFillColor.cyan = 10
    objFillColor.magenta = 2
    objFillColor.yellow = 97
    objFillColor.black = 1
    object3.fillColor = objFillColor
    object3.setEntirePath([[2592,0], [3888,0], [3888,1728], [2592,1728]])
}
function generateObject4(){
    var doc = app.activeDocument
    var objLayer = myDocument.layers.add()
    var object4 = doc.pathItems.add()
    object4.filled = true
    var objFillColor = new CMYKColor()
    objFillColor.cyan = 12
    objFillColor.magenta = 2
    objFillColor.yellow = 97
    objFillColor.black = 1
    object4.fillColor = objFillColor
    object4.setEntirePath([[3888,0], [5184,0], [5184,1728], [3888,1728]])
}
function generateObject5(){
    var doc = app.activeDocument
    var objLayer = myDocument.layers.add()
    var object5 = doc.pathItems.add()
    object5.filled = true
    var objFillColor = new CMYKColor()
    objFillColor.cyan = 6
    objFillColor.magenta = 2
    objFillColor.yellow = 97
    objFillColor.black = 1
    object5.fillColor = objFillColor
    object5.setEntirePath([[0,1728], [1296,1728], [1296,3456], [0,3456]])
}
function generateObject6(){
    var doc = app.activeDocument
    var objLayer = myDocument.layers.add()
    var object6 = doc.pathItems.add()
    object6.filled = true
    var objFillColor = new CMYKColor()
    objFillColor.cyan = 8
    objFillColor.magenta = 2
    objFillColor.yellow = 97
    objFillColor.black = 1
    object6.fillColor = objFillColor
    object6.setEntirePath([[1296,1728], [2592,1728], [2592,3456], [1296,3456]])
}
function generateObject7(){
    var doc = app.activeDocument
    var objLayer = myDocument.layers.add()
    var object7 = doc.pathItems.add()
    object7.filled = true
    var objFillColor = new CMYKColor()
    objFillColor.cyan = 10
    objFillColor.magenta = 2
    objFillColor.yellow = 97
    objFillColor.black = 1
    object7.fillColor = objFillColor
    object7.setEntirePath([[2592,1728], [3888,1728], [3888,3456], [2592,3456]])
}
function generateObject8(){
    var doc = app.activeDocument
    var objLayer = myDocument.layers.add()
    var object8 = doc.pathItems.add()
    object8.filled = true
    var objFillColor = new CMYKColor()
    objFillColor.cyan = 12
    objFillColor.magenta = 2
    objFillColor.yellow = 97
    objFillColor.black = 1
    object8.fillColor = objFillColor
    object8.setEntirePath([[3888,1728], [5184,1728], [5184,3456], [3888,3456]])
}