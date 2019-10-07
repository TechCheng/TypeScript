// //泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定
// //把泛型理解为代表类型的参数

// function log12123<T>(value:T):T{ //保证类型输入和输出是一致的,区别于any类型,any很难保证统一
//   console.log(value)
//   return value
// }

// log12123<string[]>(['a','b'])
// log12123(['a','b'])


// //泛型接口
// interface Log2<T>{
//   (value:T):T
// }

// let myLog:Log2<number> = log12123
// console.log('打印出myLog(1)的值',myLog(1)) //1