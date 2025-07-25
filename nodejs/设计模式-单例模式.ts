class SingleInstance {
  private static instance?: SingleInstance
  private constructor() {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new SingleInstance()
    }
    return this.instance
  }
}

console.log(SingleInstance.getInstance() === SingleInstance.getInstance())
