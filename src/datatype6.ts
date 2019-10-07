//类1：继承和成员修饰

class Dog{
  name:string
  run(){}
  constructor (name:string){
    this.name=name
  }
}

//类的成员属性都是实例属性，类的成员方法都是原型方法
console.log(Dog.prototype) //{run: ƒ, constructor: ƒ}
let dog=new Dog('wangwang') 
console.log(dog)  //Dog {name: "wangwang"}

//类的成员属性必须有初始值
//name:string = 'dog'  这样上面的this.name=name 可以不用写了


//类的继承
class Husky extends Dog {
  color:string
  constructor(name:string,color:string){
    super(name)
    this.color=color
  }
}


//访问修饰符  
//默认public
//private 私有的,不能在声明它的类的外部访问（不能在实例和子类调用，只能在类本身中访问）
//protected 和 private 类似，区别是它在子类中也是允许被访问的（只能在类本身和子类中访问，不能在实例中访问）

//static ES7  修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用
//只能类本身和继承的类调用，不能被实例中调用