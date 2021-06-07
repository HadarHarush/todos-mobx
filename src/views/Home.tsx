import { observer } from 'mobx-react-lite'
import React from 'react'
import TodosList from '../cmps/TodosList'

const Home = observer(() => {
  return (
    <div className="home">
      <h2>Home</h2>
      <TodosList />
    </div>
  )
})

export default Home
