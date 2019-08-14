//泛型类与泛型约束

//泛型类
class Log<T>{
  run (value:T){
    console.log(value)
    return value
  }
}

let logg=new Log<number>()//指定泛型参数
logg(1)

let log22=new Log()//不指定泛型参数，可以为所欲为的赋值
log22({1:3})



//泛型约束
interface Length{
  length:number
}
function log<T extends Length>(value:T):T{
  console.log(value,value.length)
  return value
}

log('11')
log([1])
log({length:2})