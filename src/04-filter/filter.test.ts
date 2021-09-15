import {CourseType, filteredCheapCourses, filteredOldMan} from "./filter";

let ages: Array<number>;
let courses: CourseType[]
beforeEach(() => {
    ages = [10, 20, 22, 1, 100, 90, 14, 101]
    courses = [
        {
            title: "CSS",
            price: 110,
        },
        {
            title: "JS",
            price: 200,
        },
        {
            title: "React",
            price: 150,
        }]

})
test("Should take men older than 90", () => {
    let oldMen = filteredOldMan(ages)
    expect(oldMen.length).toBe(2)
    expect(oldMen).toEqual([100, 101])
})


test("Should take courses cheapper than 150", () => {
    let cheapCourse = filteredCheapCourses(courses)
    expect(cheapCourse.length).toBe(2)
    expect(cheapCourse).toEqual([
        {
            title: "CSS",
            price: 110,
        },
        {
            title: "React",
            price: 150,
        }])
})


test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "JS", isDone: false},
        {id: 2, title: "CSS", isDone: false},
        {id: 3, title: "React", isDone: true},
        {id: 4, title: "HTML", isDone: true},
        {id: 5, title: "Angular", isDone: false},
    ]

    let completedTasks = tasks.filter(item => item.isDone)
    expect(completedTasks.length).toBe(2)
    expect(completedTasks).toEqual([

        {id: 3, title: "React", isDone: true},
        {id: 4, title: "HTML", isDone: true},
    ])
})