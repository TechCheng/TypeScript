{
  // 交叉类型：是多个类型的集合，并不是交集，其实是并集
  interface DogInterface {
    run(): void
  }

  interface CatInteface {
    jump(): void
  }

  let pet: DogInterface & CatInteface = {
    run() { },
    jump() { }
  }


  // 联合类型：声明类型不确定，可以为多个类型中一个

  //变量的联合类型
  let a1243: number | string = 'a'
  let b123: 'a' | 'b' | 'c' = 'a'

  //对象的联合类型
  class Dog12 implements DogInterface {
    run() { }
    eat() { }
  }

  class Cat12 implements CatInteface {
    jump() { }
    eat() { }
  }

  enum Master { Boy, Girl }

  function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dog12() : new Cat12(); // pet:Dog12 | Cat12
    pet.eat() //pet:Dog12 | Cat12 为这两种类型的联合类型，但是现在只能取彼此共同的方法
    return pet
  }

  //可区分的联合类型 (说实话，没明白这个例子的含义)
  interface Square {
    kind: 'square';
    size: number;
  }

  interface Rectangle {
    kind: 'rectangle',
    width: number,
    height: number
  }

  interface Circle {
    kind: 'circle',
    r: number
  }

  type Shape = Square | Rectangle | Circle

  function area(s: Shape) {
    switch (s.kind) {
      case "square":
        return s.size * s.size
      case "rectangle":
        return s.height * s.width
      case "circle":
        return Math.PI * s.r * s.r
      default:
        return ((e: never) => { throw new Error(e) })(s)
    }
  }

  console.log(area({ kind: 'circle', r: 1 }))


}