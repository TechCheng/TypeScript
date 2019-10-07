// 交叉类型：是多个类型的集合，并不是交集，其实是并集
interface DogInterface {
  run(): void
}

interface CatInteface {
  jump(): void
}

let pet: DogInterface & CatInteface = {
  run() { },
  jump() { }
}