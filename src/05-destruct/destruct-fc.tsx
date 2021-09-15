import React from "react";

type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}
type PropsType = {
    title: string
    man: ManType
    food: string[]
    car: { model: string }
}

export const ManComponent: React.FC<PropsType> = (props) => {

    const {title, man} = props
    return (
        <div>
            <h1>{title}</h1>
            <hr />
            <div>
                {props.car.model}
            </div>
        </div>
    )
}