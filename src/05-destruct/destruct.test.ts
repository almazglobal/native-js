test("", () => {
    let props = {
        name: "Alex",
        age: 38,
        lessons: [{title: "1"}, {title:"2"}]
    }


    expect(props).toEqual({
        age: 38,
        name: "Alex",
        lessons: [{title:"2"}, {title: "1"}]
    })
})


