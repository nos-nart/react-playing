import React from 'react'
import AddTask from './components/AddTask'


const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col xl10 l10 m12 s12 offset-xl1 offset-l1">
          <AddTask />
        </div>
      </div>
    </div>
  )
}
export default App;
