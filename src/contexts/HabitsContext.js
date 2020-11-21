import React, {useState, createContext} from "react"

export const HabitsContext = createContext();

export const HabitsContextProvider = (props) => {
    const [habits, setHabits] = useState([])
    const [selectedHabits, setSelectedHabits] = useState(null)
   
    const addHabits = (habits) =>{
        setHabits([...habits, user])
    }

    return (
        <HabitsContext.Provider value ={{habits, setHabits, addHabits, selectedHabits, setSelectedHabits}}>
            {props.children}
        </HabitsContext.Provider>
    )
}