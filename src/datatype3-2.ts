{
  {
    //接口
  
    //3、只读属性
  
    interface List {
      readonly id: number;//只读属性
      name: string;
      age?:number 
    }
  
    interface Result {
      data: List[]
    }
  
    function render(result: Result) {
      result.data.forEach((value: List) => {
        console.log(value.id, value.name)
        if(value.age){ 
          console.log(value.age)
        }
        // value.id++ //只读属性不能修改
      })
    }
  
    let result = {
      data: [
        { id: 1, name: 'A', sex: 'male' }, //ts默认采用鸭式语言风格法
        { id: 2, name: 'B' }
      ]
    }
    render(result)
  
  }
}