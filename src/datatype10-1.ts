//当一个类型Y可以被赋值给类型X时，我们就可以说类型X兼容类型Y
// X 兼容 Y ：x（目标类型）=Y（源类型）


let  s:string = 'a'
s = null   
// 关闭strictNullChecks,null和undefined就可以赋值给string类型，string兼容null和Undefined
// null和undefined就是string的子类型


//接口兼容性
// 接口之间相互兼容时候，成员少的会兼容成员多的
interface X{
  a:any;
  b:any;
}

interface Y{
  a:any;
  b:any;
  c:any;
}

let x:X ={a:1,b:2}
let y:Y ={a:1,b:2,c:3}

x=y //成员少的兼容成员多的
// y=x  //成员多的无法兼容成员少的


