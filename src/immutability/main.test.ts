import {
    addNewBookToUser,
    moveUser,
    moveUserToOtherHouse, removeBooks, updateBooks, updateCompany, updateCompanyUsers,
    upgradeLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./main";

function increaseAge(u: UserType) {
    return  {...u, age: u.age + 1}
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

test('change address, house number', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        age: 32,
        address: {
            city: 'Samara',
            house: 33,

        },
        laptop: {
            title: 'Asus'
        },
        books: ['JS', 'CSS', 'React']
    }

    const awesomeUser = moveUserToOtherHouse(user, 77)
    expect(awesomeUser).not.toBe(user)
    expect(awesomeUser.address).not.toBe(user.address)
    expect(awesomeUser.address.house).toBe(77)
    expect(user.address.house).toBe(33)
    expect(awesomeUser.books).toBe(user.books)

})

test('add new book to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        age: 32,
        address: {
            city: 'Samara',
            house: 33,

        },
        laptop: {
            title: 'Asus'
        },
        books: ['JS', 'CSS', 'React']
    }

    const awesomeUser = addNewBookToUser(user, ['Angular', 'RestApi'])
    expect(awesomeUser).not.toBe(user)
    expect(awesomeUser.books).not.toBe(user.books)
    expect(awesomeUser.books).toEqual(['JS', 'CSS', 'React', 'Angular', 'RestApi'])

})

test('update book CSS to TS', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        age: 32,
        address: {
            city: 'Samara',
            house: 33,

        },
        laptop: {
            title: 'Asus'
        },
        books: ['JS', 'CSS', 'React']
    }

    const awesomeUser = updateBooks(user, 'TS', 'CSS')
    expect(awesomeUser).not.toBe(user)
    expect(awesomeUser.books).not.toBe(user.books)
    expect(awesomeUser.books).toEqual(['JS', 'TS', 'React'])

})
test('remove book JS', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        age: 32,
        address: {
            city: 'Samara',
            house: 33,

        },
        laptop: {
            title: 'Asus'
        },
        books: ['JS', 'CSS', 'React']
    }

    const awesomeUser = removeBooks(user, 'JS')
    expect(awesomeUser).not.toBe(user)
    expect(awesomeUser.books).not.toBe(user.books)
    expect(awesomeUser.books).toEqual(['CSS', 'React'])

})

test('change name companies', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Alex',
        age: 32,
        address: {
            city: 'Samara',
            house: 33,

        },
        laptop: {
            title: 'Asus'
        },
        companies: [{id: 1, title: 'Ep'}, {id: 2, title: 'IT-INCUBATOR'}, {id: 3, title: 'Facebook'}]
    }

    const copyUser = updateCompany(user, 'Epam', 1)
    expect(copyUser.companies).not.toBe(user.companies)
    expect(copyUser).not.toBe(user)
    expect(copyUser.companies).toEqual([{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}, {
        id: 3,
        title: 'Facebook'
    }])
    expect(copyUser.companies[0]).toEqual({id: 1, title: 'Epam'})
})

test('update companies', () => {

    let companies = {
        'Alex': [{id: 1, title: 'Ep'}, {id: 2, title: 'IT-INCUBATOR'}, {id: 3, title: 'Facebook'}],
        'Bob': [{id: 1, title: 'Google'}, {id: 2, title: 'MobX'}],
    }
    let copmanyCopy = updateCompanyUsers(companies,
        'Alex',
        1,
        'Epam')

    expect(copmanyCopy['Alex']).not.toBe(companies['Alex'])
    expect(copmanyCopy['Alex']).toEqual([{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}, {id: 3, title: 'Facebook'}])
})