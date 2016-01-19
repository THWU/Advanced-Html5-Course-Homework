
var myCtx;
var myConvas;
var myContext;
var isDrawing = false;

window.onload = function() {
    
    myCtx = new Ctx("drawingCanvas");
    myConvas = myCtx.getObj();
    myContext = myCtx.getContext2d();
    //  Start Drawing 畫布在滑鼠左鍵壓下的時候
    myConvas.onmousedown = startDrawing;
    myConvas.onmouseup = stopDrawing;          //  Stop Drawing
    myConvas.onmouseout = stopDrawing;         //  Stop Drawing
    myConvas.onmousemove = draw;               //  Draw
};

function Ctx(id) {
    this.id = id;
    this.canvas = null;
}

Ctx.prototype.getObj = function() {
    this.canvas = document.getElementById(this.id);
    return this.canvas;
}

Ctx.prototype.getContext2d = function() {
    
    if (this.canvas !== null) {
        if (this.canvas.getContext) {
            return this.canvas.getContext('2d');
        }
    }else {
        alert("Can't find Canvas");
    }
}

function startDrawing(e) {
    
    isDrawing = true;
    myContext.beginPath();
    var mouseX = e.pageX - myConvas.offsetLeft;
    var mouseY = e.pageY - myConvas.offsetTop;
    myContext.moveTo(mouseX, mouseY);
}

function stopDrawing(e) {
    
    isDrawing = false;
    myContext.beginPath();
    var mouseX = e.pageX - myConvas.offsetLeft;
    var mouseY = e.pageY - myConvas.offsetTop;
    myContext.moveTo(mouseX, mouseY);
}

function draw() {
    
    if (isDrawing) {
        
        var x = e.pageX - myConvas.offsetLeft;
        var y = e.pageY - myConvas.offsetTop;
        myContext.lineTo(x, y);
        myContext.stroke();
    }
}



function draw1() {
    
    myContext.fillRect(25,25,100,100);
    myContext.clearRect(45,45,60,60);
    myContext.strokeRect(50,50,50,50);
}

function draw2() {
    
    myContext.beginPath();
    myContext.moveTo(75,50);
    myContext.lineTo(100,75);
    myContext.lineTo(100,25);
    myContext.fill();
}

//  Change Color
var previousColorElement;
function changeColor(color, imgElement) {
    
    myContext.strokeStyle = color;
    imgElement.className = "Selected";
    
    if (previousColorElement !== null) {
        previousColorElement.className = "";
    }
    previousColorElement = imgElement;
}

//  Change Thickness
var previousThicknessElement;
function changeThickness(thickness, imgElement) {
    
    myContext.strokeStyle = thickness;
    imgElement.className = "Selected";
    
    if (previousColorElement !== null) {
        previousColorElement.className = "";
    }
    previousThicknessElement = imgElement; 
}

function clearCanvas() {
    myContext.clearRect(0, 0, myCtx.convas.width, myCtx.convas.heigh);
}

function savaCanvas() {
    
    var imageCopy = document.getElementById('savedImageCopy');
    imageCopy.src = myContext.toDataURL();
    var imageContainer = document.getElementsById('savedCopyContainer');
    imageContainer.style.display = 'block';
}

/*
var canvas = document.getElementById('drawingCanvas');
if (canvas.getContext) {
    
    var ctx = canvas.getContext('2d');    
    //繪製圖形的程式碼寫在這邊
    
} // close if
*/