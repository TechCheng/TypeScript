{
  // 函数类型接口

  //函数类型1
  let add4: (x: number, y: number) => number

  //函数声明方式2
  interface Add2 {
    (x: number, y: number): number
  }

  //函数声明方式3:类型别名
  type Add1 = (x: number, y: number) => number


  // 混合类型接口
  interface Lib {
    (): void;
    version: string;
    doSth(): void
  }

  function getLib() {
    let lib: Lib = (() => {

    }) as Lib //类型断言
    lib.version = '1.0';
    lib.doSth = () => { }

    return lib
  }

  let b2 = getLib()
  b2.doSth()
}