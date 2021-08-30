type BuildingsType = "HOSPITAL" | "FIRE-STATION"
type StreetType = {
    title: string,
}
type AddressType = {
    number?: number
    street: StreetType
}
type HousesType = {
    id: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}
type GovernmentBuildingsType = {
    type: BuildingsType
    budget: number
    staffCount: number
    address: AddressType
}
export type CityType = {
    title: string,
    houses: HousesType[]
    governmentBuildings: GovernmentBuildingsType[]
    citizensNumber: number
}

export const addMoneyToBudjet = (buidings: GovernmentBuildingsType[], typeBuidings: BuildingsType, budjet: number) => {
    let res = buidings.find(item => item.type === typeBuidings)
    if (res !== undefined) {
        res.budget += budjet
    }
}

export const demolishHouseTheStreet = (city: CityType, street: string) => {
    const res = city.houses.filter(item => item.address.street.title !== street)
    city.houses = res
}

export const repairHouse = (house: HousesType) => {
    house.repaired = true
}

export const toFireStaff = (governmentBuildings: GovernmentBuildingsType, stuffCount: number) => {
  governmentBuildings.staffCount -= stuffCount
}

export const toHireStaff = (governmentBuildings: GovernmentBuildingsType, stuffCount: number) => {
    governmentBuildings.staffCount += stuffCount
}