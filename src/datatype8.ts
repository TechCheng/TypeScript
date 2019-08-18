//泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定
//把泛型理解为代表类型的参数

function log12<T>(value:T):T{
  console.log(value)
  return value
}

log12<string[]>(['a','b'])
log12(['a','b'])


//泛型接口
interface Log<T>{
  (value:T):T
}
let myLog:Log<number>
myLog(1)