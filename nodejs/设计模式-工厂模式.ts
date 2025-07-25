class Factory {
  static create(type: string, properties: object) {
    switch (type) {
      case 'car':
        return new Car(properties)
      case 'bike':
        return new Bike(properties)
      default:
        return null
    }
  }
}
class Car {
  name: string
  speed: number
  constructor(properties: any) {
    this.name = properties.name
    this.speed = 100
  }
}
class Bike {
  name: string
  speed: number
  constructor(properties: any) {
    this.name = properties.name
    this.speed = 20
  }
}
console.log(Factory.create('car', { name: 'car1' }))
console.log(Factory.create('bike', { name: 'bike1' }))
