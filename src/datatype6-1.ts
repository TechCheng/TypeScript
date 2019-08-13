//类2：抽象类与多态
//只能继承，不能实例化。可以抽离出共性，方便继承子类去具体化方法，实现多态

abstract class Animal{
  eat(){
    console.log('sleep')
  }
}

// let animal=new Animal

class Dog1 extends Animal{
  constructor(name:string){
    super() //继承需要，实现不需要super
    this.name=name
  }
  name:string
  run(){}
}

