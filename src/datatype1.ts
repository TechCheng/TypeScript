{
  //原始类型
  let bool: boolean = true
  let num: number = 123
  let str: string = 'abc'

  //数组
  let arr1: number[] = [1, 2, 3]
  let arr2: Array<number> = [1, 2, 3] //数组泛型 Array 是泛型接口
  let arr3: Array<number | string> = [1, 2, 3, '4'] //  | 是联合类型

  //元组
  let tuple: [number, string] = [1, '1'] //数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象

  tuple.push(2)   //越界添加
  console.log(tuple)
  // tuple[2] //但是不能越界访问

  //函数
  let add = (x: number, y: number): number => x + y
  let add1 = (x: number, y: number) => x + y //通常函数的返回值类型可以省略，这就利用了ts的类型推断功能

  let compute: (x: number, y: number) => number  
  compute = (a, b) => a + b

  //对象
  let obj: object = { x: 1, y: 2 }
  // obj.x=3  //未制定具体类型 错误
  let obj1: { x: number, y: number } = { x: 1, y: 2 }
  obj1.x = 3

  //symbol
  let s1: symbol = Symbol()
  let s2: symbol = Symbol()

  //undefined null
  let un: undefined = undefined
  let nu: null = null

  //void
  let noReturn = () => { }

  //any
  let x
  x = 1
  x = 2
  x = []

  //never 表示永远没有返回值的类型
  // let error=()=>{
  //   throw new Error('error')
  // }

  // let endless =() =>{
  //   while(true){

  //   }
  // }
}