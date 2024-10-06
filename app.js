function nameOf(params) {
    console.log(params.a + params.b)
}

nameOf({ a: 1, b: 2 })

console.log("hello from main and debugger");


class A {
    constructor() {
        this.a = 1

    }
}

const alliance = new A()
alliance.b = 2