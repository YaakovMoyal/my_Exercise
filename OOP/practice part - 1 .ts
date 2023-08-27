class Shape {
  info() {
    return "This is a Shape";
  }
  draw() {
    console.log("drawing a shape");
  }
}

//מחלקת מלבן
class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  area(): number {
    const area = this.width + this.height * 2;
    return area;
  }
  info() {
    return "This is a Rectangle";
  }

  //scale
  scale(num: number) {
    this.width += num;
    this.height += num;
    return this;
  }

  //static method
  static newRectangle(rec1: Rectangle, rec2: Rectangle) {
    let newRec = new Rectangle(
      rec1.width + rec2.width,
      rec1.height + rec2.height
    );
    return newRec;
  }
}

// מחלקת מלבן עם צבע
class ColoredRectangle extends Rectangle {
  color: string;
  constructor(width: number, height: number, color: string) {
    super(width, height);
    this.color = color;
  }
  info() {
    return `This is a Rectangle in color ${this.color}`;
  }
}

// מחלקת ריבוע
class Square extends Rectangle {
  side: number;
  constructor(side: number) {
    super(side, side);
    this.side = side;
  }
}

// let my_rect = new ColoredRectangle(3, 6, "red");
// console.log(my_rect.area);

//
class Triangle extends Shape {
  draw() {
    console.log("drawing a triangle");
  }
}

//
class Circle extends Shape {
  draw() {
    console.log("drawing a circle");
  }
}

//
class Square2 extends Shape {
  draw() {
    console.log("drawing a square");
  }
}

function renderShapes(arr: Shape[]) {
  arr.forEach((element) => {
    element.draw;
  });
}
