import {CityType, demolishHouseTheStreet} from "../03-func/func";
import {GovernmentBuildingsType} from "./city";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str",
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Str",
                    }
                }
            },
        ],
        citizensNumber: 1000000
    }
})

test("Houses should be destroyed", () => {
    const demolishHouseTheStreet = (city: CityType, street: string) => {
        city.houses =  city.houses.filter(item => {
            return item.address.street.title !== street

        })
    }
    demolishHouseTheStreet(city, "Happy street")

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})


test("Get buildings with correct staff count", () => {
    const getBuildingsWithStaffCountGreaterThan = (buildings: GovernmentBuildingsType[], countStuff: number) => {
        return buildings.filter(item => item.staffCount > 500)
    }


    let buildings = getBuildingsWithStaffCountGreaterThan(city.governmentBuildings, 500)
    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("FIRE-STATION")
})