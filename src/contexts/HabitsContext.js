
import React, { Component } from 'react';

const HabitsContext = React.createContext({
    habitsList: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setHabitsList: () => {},
});

export default HabitsContext

export class HabitsProvider extends Component {
    state = {
        habitsList: [],
        error: null,
    };

    setHabitsList = habitsList => {
        this.setState({ habitsList })
    };

    setError = error => {
        console.error(error)
        this.setState({ error })
    };

    clearError = () => {
        this.setState({ error: null })
    };

    render() {
        const value = {
            habitsList: this.state.habitsList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setHabitsList: this.setHabitsList,
        };
        return (
            <HabitsContext.Provider value={value}>
                {this.props.children}
            </HabitsContext.Provider>
        );
    };
};