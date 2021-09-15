const ages = [10, 20, 22, 1, 100, 90, 14]

const predicate = (age: number) => {
    return age > 90
}

const oldAges = [100]

export type CourseType = {
    title: string
    price: number
}
const courses = [
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

const cheapPredicate = (course: CourseType) => {
    return course.price < 160
}

const cheapCourses = [
    {
        title: "CSS",
        price: 110,
    },
    {
        title: "React",
        price: 150,
    }]

export const filteredOldMan = (ages: Array<number>): Array<number> => {
    return ages.filter(item => item > 90)
}

export const filteredCheapCourses = (course: Array<CourseType>): Array<CourseType> => {
    return course.filter(item => item.price < 160)
}