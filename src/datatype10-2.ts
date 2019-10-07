enum Type { Strong , Week}

class Java{
  helloJava(){
    console.log('Hello java')
  }
  java:string
}

class JavaScript{
  helloJS(){
    console.log('Hello JavaScript')
  }
  js:string
}

// 4 类型保护函数
function isJava(lang:Java | JavaScript):lang is Java {
    return (lang as Java).helloJava !== undefined
}

function getLanguage(type:Type,x?:string|number){
  let lang = type === Type.Strong ? new Java() : new JavaScript()
  // if((lang as Java).helloJava){
  //   console.log('helloJava')
  // }else{
  //   console.log('helloJS')
  // }

  // 1 instanceof  判断某个实例是否属于某个类
  // if( lang instanceof Java){
  //   lang.helloJava()
  // }else{
  //   lang.helloJS()
  // }

  //2 in 判断某个属性是否属于某个对象
  // if( 'java' in lang) {
  //   lang.helloJava()
  // }else{
  //   lang.helloJS()
  // }

  //3 typeof  判断一个变量的类型
  // if ( typeof x == 'string'){
  //   console.log(x.length)
  // }else{
  //   console.log(x.toFixed(2))
  // }

  //4 类型保护函数
  if(isJava(lang)){
    lang.helloJava()
  }else{
    lang.helloJS()
  }

  return lang
}

getLanguage(Type.Strong)