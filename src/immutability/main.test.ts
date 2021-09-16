import {moveUser, upgradeLaptop, UserType, UserWithLaptopType} from "./main";

function increaseAge(u: UserType) {
    const copyUser = {...u, age: u.age + 1}
    return copyUser
    // u.age = u.age + 1
}

function changeAddress(u: UserType) {
    const newAddress = {...u.address, title: 'Minsk'}
    return {...u, address: newAddress}
}

test("reference type test", () => {
    let user: UserType = {
        name: 'Alex',
        age: 32,
        address: {
            city: 'Samara',
            house: 33,
        }
    }

    // let copyUser = increaseAge(user)
    let copyUser = changeAddress(user)
    // expect(user.age).toBe(32)
    // expect(copyUser.age).toBe(33)
    // expect(copyUser.address).toBe(user.address)
    expect(copyUser.address).toEqual(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Alex',
        age: 32,
            address: {
                city: 'Samara',
                house: 33,

        },
        laptop: {
            title: 'Asus'
        }
    }

const awesomeUser = moveUser(user, 'Kiev')
expect(awesomeUser).not.toBe(user)
expect(awesomeUser.address).not.toBe(user.address)
expect(awesomeUser.address.city).toBe('Kiev')
expect(awesomeUser.laptop).toBe(user.laptop)

})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Alex',
        age: 32,
        address: {
            city: 'Samara',
            house: 33,

        },
        laptop: {
            title: 'Asus'
        }
    }

    const awesomeUser = upgradeLaptop(user, 'Mac')
    expect(awesomeUser).not.toBe(user)
    expect(awesomeUser.laptop).not.toBe(user.laptop)
    expect(awesomeUser.laptop.title).toBe('Mac')
    expect(user.laptop.title).toBe('Asus')
    expect(awesomeUser.address).toBe(user.address)

})