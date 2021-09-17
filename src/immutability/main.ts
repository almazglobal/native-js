export type UserType = {
    name: string
    age: number
    address: {
        city: string
        house: number
    }

}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

type CompaniesType = {
    title: string
    id: number
}

export type WithCompaniesType = {
    companies: CompaniesType[]
}

export const moveUser = (user: UserWithLaptopType, city: string) => {
  return {...user, address: {...user.address, city}}
}
export const moveUserToOtherHouse = (user: UserWithLaptopType & UserWithBooksType, house: number) => {
    return {...user, address: {...user.address, house}}
}

export const upgradeLaptop = (user: UserWithLaptopType, laptopName: string) => {
    return {...user, laptop: {...user.laptop, title: laptopName}}
}

export const addNewBookToUser = (user: UserWithLaptopType & UserWithBooksType, book: Array<string>) => {
    return {...user, books: [...user.books, ...book]}
}


export const updateBooks = (user: UserWithLaptopType & UserWithBooksType, newBook: string, updateBook: string) => {

    const newBooks = user.books.map(item => item === updateBook ? newBook : item)
    return {...user, books: newBooks}

}

export const removeBooks = (user: UserWithLaptopType & UserWithBooksType, removeBook: string) => {

    const newBooks = user.books.filter(item => item !== removeBook)
    return {...user, books: newBooks}

}

export const updateCompany = (user: WithCompaniesType, company: string, id: number) => {
   const newCompanies = user.companies.map(item => item.id === id ? {...item, title: company} : item)
    return {...user, companies: newCompanies}
}
export type CompaniesUserType = {
    [nameUser: string] : CompaniesType[]
}
export const updateCompanyUsers = (copmanies: CompaniesUserType,
                           userName: string,
                           companyId: number,
                           newTitle: string) => {

let companyUser = copmanies[userName].map(item => item.id === companyId ? {...item, title: newTitle} : item)
    return {...copmanies, [userName]: companyUser}
}