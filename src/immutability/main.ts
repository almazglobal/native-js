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

export type UserWithBookType = UserType & {
    books: Array<string>
}


export const moveUser = (user: UserWithLaptopType, city: string) => {
  return {...user, address: {...user.address, city}}
}

export const upgradeLaptop = (user: UserWithLaptopType, laptopName: string) => {
    return {...user, laptop: {...user.laptop, title: laptopName}}
}