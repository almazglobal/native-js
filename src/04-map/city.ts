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
export type GovernmentBuildingsType = {
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

export const getsStreetsTitlesOfGovermentsBuildings = (buildings: GovernmentBuildingsType[]) => {
   return buildings.map(item => item.address.street.title)
}

export const getsStreetsTitlesOfHouses = (houses: HousesType[]) => {
    return houses.map(item => item.address.street.title)
}

export const greetingsOnTheStreets = (houses: HousesType[]) => {
   return houses.map(item => `Hello, ${item.address.street.title}`)
}