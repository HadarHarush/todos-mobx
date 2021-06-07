import { Button } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import Todo from '../stores/data/entities/todo.store'
import SaveTodoCard from './SaveTodoCard'

const TodoPreview = observer(({ todo }: { todo: Todo }) => {
  const [isEditOpen, setIsEditOpen] = useState(false)

  return (
    <>
      {!isEditOpen && (
        <div className="todo-preview">
          <p
            className={`${todo.isCompleted ? 'completed' : ''}`}
            onClick={() => todo.toggleIsCompleted()}
          >
            Todo Name: {todo.name}
          </p>
          {/* <p>Is completed: {JSON.stringify(todo.isCompleted)}</p> */}
          <div className="buttons-bar">
            <Button
              variant="contained"
              color="secondary"
              onClick={() =>
                todo.rootStore.dataStore.todosStore.removeTodo(todo.id)
              }
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setIsEditOpen(true)}
            >
              Edit
            </Button>
          </div>
        </div>
      )}
      {isEditOpen && (
        <SaveTodoCard
          id={todo.id}
          name={todo.name}
          isCompleted={todo.isCompleted}
          handleCloseCard={() => setIsEditOpen(false)}
        />
      )}
    </>
  )
})

export default TodoPreview
