//当一个类型Y可以被赋值给类型X时，我们就可以说类型X兼容类型Y
// X 兼容 Y ：x（目标类型）=Y（源类型）


let s: string = 'a'
s = null
// 关闭strictNullChecks,null和undefined就可以赋值给string类型，string兼容null和Undefined
// null和undefined就是string的子类型


//接口兼容性
// 接口之间相互兼容时候，成员少的会兼容成员多的
interface X {
  a: any;
  b: any;
}

interface Y {
  a: any;
  b: any;
  c: any;
}

let x: X = { a: 1, b: 2 }
let y: Y = { a: 1, b: 2, c: 3 }

x = y //成员少的兼容成员多的
// y=x  //成员多的无法兼容成员少的


//函数兼容性   分成：1参数个数，2参数类型，3函数返回值，4函数重载
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
  return handler
}

//1) 参数个数  多的兼容少的
let handler1 = (a: number) => { }
hof(handler1)

let handler2 = (a: number, b: number, c: number) => { }
// hof(handler2)   

//可选参数和剩余参数 
let a3 = (p1: number, p2: number) => { }
let b3 = (p1?: number, p2?: number) => { }
let c4 = (...args: number[]) => { }
//固定参数可以兼容可选参数和剩余参数
a3 = b3
a3 = c4

//"strictFunctionTypes":false, 可选参数兼容固定参数和剩余参数
b3 = a3
b3 = c4

//剩余参数兼容可选参数和固定参数
c4 = a3
c4 = b3


//2)参数类型 成员多的兼容成员少的
interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Point2D {
  x: number;
  y: number;
}

let p3d = (point: Point3D) => { }
let p2d = (point: Point2D) => { }
p3d = p2d
// p2d=p3d   //"strictFunctionTypes": true 时候是不行的


//3)返回值类型   返回值类型少的可以兼容返回值类型多的
let f = () => ({ name: 'Alice' });
let g = () => ({ name: 'Alice', location: 'Beijing' });

f = g
//g = f  //是不行的 

//枚举兼容性  枚举之间是不兼容的
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
// let Color:Color.Red = Fruit.Red  //枚举之间是不兼容的


//类兼容性  类的构造函数和静态成员不参与比较，当类中有私有成员时，两个类不兼容，类与子类可以
class A {
  constructor(p: number, q: number) { }
  id: number = 1
  private name: string = ''
}

class B {
  static s = 1
  constructor(p: number) { }
  id: number = 2
  private name: string = ''
}

let aa = new A(1, 2)
let bb = new B(1)
// aa = bb
// bb = aa

class C extends A { }
let cc = new C(1, 2)
aa = cc
cc = aa

// 泛型兼容性  在两个泛型参数只有类型不相同时，只有在泛型参数使用时才影响
interface Empty<T> {
  // value:T //在两个泛型参数只有类型不相同时，只有在泛型参数使用时才影响
}

let obj11: Empty<number> = {}
let obj22: Empty<string> = {}
obj11 = obj22


let loggg1 = <T>(x:T) :T =>{
  console.log ('x')
  return x
}

let loggg2 =  <T>(y:T) :T =>{
  console.log ('y')
  return y
}

loggg1 = loggg2 