{
  //类2：抽象类与多态
  //只能继承，不能实例化。可以抽离出共性，方便继承子类去具体化方法，实现多态
  //抽象类中的抽象方法 子类在实现时候 必须对这些抽象方法具体化，这就是多态

  abstract class Animal {
    eat() {
      console.log('sleep')
    }
    abstract sleep(): void
  }

  // let animal=new Animal

  class Dog1 extends Animal {
    constructor(name: string) {
      super() //继承需要，实现不需要super
      this.name = name
    }
    name: string
    run() { }
    sleep() {
      console.log(this.name + ' dog slepp')
    }
  }
  let dog1 = new Dog1('wangwang')

  class Cat extends Animal {
    sleep() {
      console.log('Cat sleep')
    }
  }
  let cat = new Cat()

  let animals: Animal[] = [dog1, cat]

  animals.forEach(i => {
    console.log(i.sleep())
  })


  //this类型：很方便链式调用  
  class WorkFlow {
    step1() {
      return this
    }

    step2() {
      return this
    }
  }
  new WorkFlow().step1().step2()

  class Myflow extends WorkFlow {
    next() {
      return this
    }
  }
  new Myflow().next().step1().next().step2()
}