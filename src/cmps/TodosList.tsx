import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { useStore } from '../hooks/useStore'
import SaveTodoCard from './SaveTodoCard'
import TodoPreview from './TodoPreview'
import TodosListFilterBar from './TodosListFilterBar'
const TodosList = observer(() => {
  const {
    dataStore: { todosStore },
  } = useStore()

  const [filtersMap, setFiltersMap] = useState({ text: '', isCompleted: false })

  const todosToShow = todosStore.list.filter((currTodo) => {
    const isMatchSearch = currTodo.name.includes(filtersMap.text)
    const isMatchCompleted = currTodo.isCompleted

    return (filtersMap.isCompleted ? isMatchCompleted : true) && isMatchSearch
  })

  return (
    <div className="todo-list-container">
      <TodosListFilterBar
        filtersMap={filtersMap}
        setFiltersMap={setFiltersMap}
      />
      <ul className="todo-list">
        {todosToShow.map((currTodo) => (
          <TodoPreview key={currTodo.id} todo={currTodo} />
        ))}
      </ul>
      <SaveTodoCard />
    </div>
  )
})

export default TodosList
