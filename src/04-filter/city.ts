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
