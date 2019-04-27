import React from 'react'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <AddTask />
                <TaskList />
            </div>
        )
    }
}

export default App