// {
//   //接口

//   //4、可索引类型接口，当接口属性个数不确定时候使用

//   //数字类型索引
//   interface StringArray {
//     [index: number]: string
//   }

//   let chars: StringArray = ['A', 'B']

 
//   //字符串类型索引
//   interface Names {
//     [x: string]: string
//     [z: number]: string //可以和数字类型混用 但是注意：此时数字类型的返回值的类型一定要是字符串类型返回值的子类型
//   }
// }