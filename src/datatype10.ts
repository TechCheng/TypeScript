//基础类型推断
let a = 1

let c = (x = 1) => x + 1

//最佳通用类型推断
let b = [1, null]


//上下文推断
window.onkeydown=(event)=>{
  console.log(event.BUBBLING_PHASE)
}



//类型断言
interface Foo{
  bar:number
}

let foo:Foo = {bar:1}
// let foo = {} as Foo

// foo.bar=1