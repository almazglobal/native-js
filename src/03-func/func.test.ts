import {addMoneyToBudjet, CityType, demolishHouseTheStreet, repairHouse, toFireStaff, toHireStaff} from "./func";

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
                id: 3,
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


test.skip("Budjet should be changed for HOSPITAL", () => {
    addMoneyToBudjet(city.governmentBuildings, 'HOSPITAL', 100000)
    expect(city.governmentBuildings[0].budget).toBe(300000)
    expect(city.governmentBuildings[1].budget).toBe(500000)
})

test.skip("Budjet should be changed for FIRE-STATION", () => {
    addMoneyToBudjet(city.governmentBuildings, 'FIRE-STATION', -100000)
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test.skip("Houses should be destroyed", () => {
    demolishHouseTheStreet(city, "Happy street")
    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

test.skip("House should be repaired", () => {
  repairHouse(city.houses[1])
  expect(city.houses[1].repaired).toBeTruthy()
})

test("Staff should be decreased", () => {
  toFireStaff(city.governmentBuildings[0], 20)
  expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test("Staff should be increased", () => {
    toHireStaff(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(220)
})