const rectButton = document.getElementById("rectbutton");
const sqButton = document.getElementById("sqbutton");
const circButton = document.getElementById("circbutton");
const triButton = document.getElementById("tributton");
const shapePanel = document.getElementById("shape__panel");
function random() {
  return Math.floor(Math.random() * 500);
}
rectButton.addEventListener("click", function () {
  new Rectangle();
});
sqButton.addEventListener("click", function () {
  new Square();
});
circButton.addEventListener("click", function () {
  new Circle();
});
triButton.addEventListener("click", function () {
  new Triangle();
});

let shapename = document.getElementById("shapename");
let widthName = document.getElementById("widthname");
let heightName = document.getElementById("heightname");
let radiusName = document.getElementById("radiusname");
let areaName = document.getElementById("areaname");
let perimeterName = document.getElementById("perimetername");

class Shape {
    constructor() {
        this.shape = document.createElement("div");
        this.remover()
        
    }
    remover() {
        this.shape.addEventListener('dblclick', () =>{
            console.log("Hey");
            this.shape.remove();

        })
    };
    // I used this with Square just to test out using it here as opposed to putt
    describe(name, width, height) {
        shapename.value = this.name
        widthName.value = this.width
        heightName.value = this.height
    }
}

class Rectangle extends Shape {
    constructor() {
        super();
        let randomNum = random();
        let randomNum2 = random();
        // let shapename = document.getElementById('shapename')
        // this.rectangle = document.createElement('div')
        let rectWidthVal = document.getElementById("rectanglewidth").value;
        let rectHeightVal = document.getElementById("rectangleheight").value;
        this.shape.style.height = `${rectHeightVal}px`;
        this.shape.style.width = `${rectWidthVal}px`;
        this.shape.style.backgroundColor = "green";
        this.shape.style.position = "absolute";
        
        this.shape.style.top = `${randomNum}px`;
        this.shape.style.left = `${randomNum2}px`;

        shapePanel.append(this.shape);
        this.shape.addEventListener('dblclick', () => {
            this.remover()
        })
        this.shape.addEventListener("click", () => {
            
            shapename.value = "Rectangle";
            widthName.value = `${rectWidthVal}px`;
            heightName.value = `${rectHeightVal}px`;
            radiusName.value = "N/A";
            areaName.value = `${rectHeightVal * rectWidthVal}px`;
            perimeterName.value = `${2 * rectWidthVal + 2 * rectHeightVal}px`;
        });
    }
}

class Square extends Shape {
    constructor(height, width) {
        super(height, width);
        let randomNum = random();
        let randomNum2 = random();
        let squareSideVal = document.getElementById("squareside").value;
        this.name = "Square"
        this.width = squareSideVal
        this.height = squareSideVal
        this.shape = document.createElement("div");
        this.shape.style.height = `${squareSideVal}px`;
        this.shape.style.width = `${squareSideVal}px`;
        this.shape.style.backgroundColor = "red";
        this.shape.style.position = "absolute";
        this.shape.style.top = `${randomNum}px`;
        this.shape.style.left = `${randomNum2}px`;
        shapePanel.append(this.shape);
        this.remover()
        this.shape.addEventListener("click", () => {
           this.describe(this.name, this.width, this.height) 
            radiusName.value = "N/A";
            areaName.value = `${squareSideVal * squareSideVal}px`;
            perimeterName.value = `${4 * squareSideVal}px`;
        });
        
    }
}

class Circle extends Shape {
    constructor() {
        super();
    let randomNum = random();
    let randomNum2 = random();
    this.shape = document.createElement("div");
    let radiusVal = document.getElementById("radius").value;
    let diameter = radiusVal * 2;
    this.shape.style.height = `${diameter}px`;
    this.shape.style.width = `${diameter}px`;
    this.shape.style.borderRadius = "50%";
    this.shape.style.backgroundColor = "purple";
    this.shape.style.position = "absolute";
    this.shape.style.top = `${randomNum}px`;
    this.shape.style.left = `${randomNum2}px`;
    shapePanel.append(this.shape);
    this.shape.addEventListener('dblclick', () => {
        this.remover()
    })
    this.shape.addEventListener("click", () => {
      // console.log(shapename)
      // console.log(widthName)
      shapename.value = "Circle";
      widthName.value = `${radiusVal * 2}px`;
      heightName.value = `${radiusVal * 2}px`;
      radiusName.value = `${radiusVal}px`;
      areaName.value = `${radiusVal * radiusVal * 3.14}px`;
      perimeterName.value = `${radiusVal * 2 * 3.14}px`;
    });
  }
}

class Triangle extends Shape {
  constructor() {
    super();
    let randomNum = random();
    let randomNum2 = random();
    let trianglesqrt = Math.sqrt(2);
    this.shape = document.createElement("div");
    this.shape.classList.add("triangle");
    let triHeight = document.getElementById("isoscelesheight").value;
    this.shape.style.height = `0px`;
    this.shape.style.width = `0px`;
    this.shape.style.borderBottom = `${triHeight}px solid yellow`;
    this.shape.style.borderRight = `${triHeight}px solid transparent`;
    this.shape.style.position = "absolute";
    this.shape.style.top = `${randomNum}px`;
    this.shape.style.left = `${randomNum2}px`;
    //Look in CSS for background linear gradient
    shapePanel.append(this.shape);
    this.shape.addEventListener('dblclick', () => {
        this.remover()
    })
    this.shape.addEventListener("click", () => {
      // console.log(shapename)
      // console.log(widthName)
      shapename.value = "Triangle";
      widthName.value = `${triHeight}px`;
      heightName.value = `${triHeight}px`;
      radiusName.value = `N/A`;
      areaName.value = `${(triHeight * triHeight) / 2}px`;
      perimeterName.value = `${triHeight * 2 + trianglesqrt * triHeight}px`;
    });
  }
}
