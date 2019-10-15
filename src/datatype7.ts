{
  //类与接口的关系
  interface Human {
    name: string;
    eat(): void
  }

  class Asian implements Human {
    constructor(name: string) {
      // super() //继承需要，实现不需要super
      this.name = name
    }
    name: string = '亚洲';
    eat() { }; //对接口的定义进行实现，类似抽象的类去实现意思差不多
    sleep() { }
  }

  //接口可以像类一样 一个接口可以继承多个接口
  interface Man extends Human {
    run(): void
  }

  interface Child {
    cry(): void
  }

  interface Boy extends Man, Child { }

  let boy: Boy = {
    name: '男孩',
    eat() { },
    cry() { },
    run() { }
  }



  //接口不仅可以继承接口，还可以继承类
  class Auto {
    state = 1
    // private state2=0
  }

  interface AutoInterface extends Auto {

  }

  class X1 implements AutoInterface {
    state = 1
  }

  class Bus extends Auto implements AutoInterface {

  }
}