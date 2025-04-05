/*
1. JavaScript: Asynchronous Constructors
Implement the class MyClass with an asynchronous constructor that initializes a member variable x in MyClass. It can be invoked as await new MyClass(x).
Function Description
Complete the class MyClass in the editor below.
Constraints
1 ≤ x ≤ 100
*/

class MyClass {
  constructor() {
    throw new Error('use MyClass.create() instead')
  }

  static async create(x) {
    // validate input
    if (x < 1 || x > 100) {
      throw new Error('x must be between 1 and 100')
    }

    const instance = Object.create(MyClass.prototype)
    instance.x = x
    return instance
  }
}

// usage:
// const obj = await MyClass.create(42)