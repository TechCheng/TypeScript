
//接口

//1、额外多的属性

interface List {
  id: number;
  name: string;
  [x: string]: any;  //字符串索引签名，可以表达多个属性了
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach((value: List) => {
    console.log(value.id, value.name)
  })
}

let result = {
  data: [
    { id: 1, name: 'A', sex: 'male' }, //ts默认采用鸭式语言风格法
    { id: 2, name: 'B' }
  ]
}
render(result)

render({
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }
  ]
} as Result) //类型断言，推荐此种写法

render(<Result>{//类型断言
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }
  ]
})

render({
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }
  ]
})
