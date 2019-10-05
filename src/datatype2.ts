{
  //枚举类型
  //具体支持反向映射与否，在ts的playground上编译下就知道

  //数字枚举 实现机制：反向映射
  enum Role {
    Reporter,
    Deveolper,
    Maintainer,
    Owner,
    Guest
  }

  console.log(Role.Reporter) //0
  console.log(Role)
  console.log(Role[0]) //Reporter  

  //字符串枚举  不支持反向映射 
  enum Message {
    Success = '恭喜你，成功了',
    Fail = '失败了'
  }

  //异构枚举   数字枚举+字符串枚举
  enum Answer {
    N,
    Y = 'yes'
  }


  //枚举成员
  enum Char {
    //常量枚举 const
    a,
    b = Char.a,
    c = 1 + 3,

    //计算属性枚举 computed
    d = Math.random(),
    e = '123'.length,

    f = 4 // computed后面常量成员一定要有初始值
  }

  //常量枚举  const声明的，在编译时候会移除,运行时候代码非常简洁
  //使用场景，不需要对象，只需要对象的值时候可以使用常量枚举(深表多此一举)
  const enum Month {
    Jan,
    Feb,
    Mar
  }
  let month = [Month.Jan, Month.Feb, Month.Mar]// [0,1,2]



  //枚举类型
  enum E { a, b }
  enum F { a = 0, b = 1 }
  enum G { a = 'apple', b = 'orange' }

  let e: E = 3
  let f: F = 3
  console.log('枚举类型',e,f) //3  疑问：这是搞什么事 
  // e===f  //false 

  let e1: E.a = 1
  let e2: E.b
  //e1===e2 //false
  let e3: E.a = 2
  e1 === e3

  let g1: G = G.a  //字符串枚举取值只能是成员
  let g2: G.a = G.a //只能是自身

}

