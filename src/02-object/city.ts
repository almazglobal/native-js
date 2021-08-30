type StreetType = {
    title: string,
}
type AddressType = {
    number?: number
    street: StreetType
}
type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}
type GovernmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
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