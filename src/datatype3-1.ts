// {
//   //接口

//   //2、可选属性

//   interface List {
//     id: number;
//     name: string;
//     age?:number //可选属性
//   }

//   interface Result {
//     data: List[]
//   }

//   function render(result: Result) {
//     result.data.forEach((value: List) => {
//       console.log(value.id, value.name)
//       if(value.age){ 
//         console.log(value.age)
//       }
//     })
//   }

//   let result = {
//     data: [
//       { id: 1, name: 'A', sex: 'male' }, //ts默认采用鸭式语言风格法
//       { id: 2, name: 'B' }
//     ]
//   }
//   render(result)

// }