{
  //函数定义 有4种方式
  //函数类型1
  let add4: (x: number, y: number) => number

  //函数声明方式2
  interface Add2 {
    (x: number, y: number): number
  }

  //函数声明方式3:类型别名
  type Add1 = (x: number, y: number) => number

  //函数声明方式4：接口
  interface add434 {
    (x: number, y: number): number
  }

  //1、可选参数
  function add5(x: number, y?: number) {
    return y ? x + y : x
  }
  add5(1) //1


  //2、函数默认值
  function add6(x: number, y = 0, z: number, q = 1) {
    return x + y + z + q
  }
  add6(1, undefined, 3) //5  必选参数前的默认值不能省略，3前面的y必须传一个undefined进去，不然y就是3了

  //3、剩余参数
  function add7(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur)
  }
  add7(1, 2, 3, 4) //10

  //4、函数重载 
  //TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
  //ts实现函数重载的时候，要求定义一系列的函数声明，在类型最宽泛的版本中实现重载，最宽泛的版本个人理解应该是，参数是any类型 返回值是any类型,
  function add8(...rest: number[]): number;
  function add8(...rest: string[]): string;
  function add8(...rest: any[]): any {
    let first = rest[0]
    if (typeof first === 'string') {
      return rest.join('')
    }
    if (typeof first === 'number') {
      return rest.reduce((pre, cur) => pre + cur)
    }
  }
  console.log(add8(1, 2, 3))

}