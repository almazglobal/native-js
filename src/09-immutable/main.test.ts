type UserType = {
    name: string
    age: number
}

function increaseAge(user:UserType) {
    user.age++
}
let user: UserType;

beforeEach(()=> {
    const user = {
        name: "Alex",
        age: 32,
    }
    const users = [
        {
            name: "Alex",
            age: 32,
        },
        {
            name: "Ekat",
            age: 28,
        },
        {
            name: "Max",
            age: 42,
        }
    ]
})

test("reference type test",() => {
    const user = {
        name: "Alex",
        age: 32,
    }

    increaseAge(user);
    expect(user.age).toBe(33)
})

test("array test", ()=> {

})