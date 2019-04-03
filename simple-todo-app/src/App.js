import React, { Component } from 'react'
import AddTask from './components/AddTask'
import Message from './components/Message'
import './App.css'
import TaskList from './components/TaskList';
import Search from './components/Search';

export default class App extends Component {
  render() {
    return (
            <div className="container">
                <div className="row mt-100">
                    <div className="col s12 m10 l8 xl8 offset-m1 offset-xl2 offset-l2">
                        <AddTask />
                        <Message />
                        <Search />
                        <TaskList />
                    </div>
                </div>
            </div>
        )
    }
}
