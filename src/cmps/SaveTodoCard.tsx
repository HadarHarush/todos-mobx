import { Button, Card } from '@material-ui/core'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { useStore } from '../hooks/useStore'
import IconButton from '@material-ui/core/IconButton'

const SaveTodoCard = observer(
  ({
    id,
    name = '',
    isCompleted = false,
    handleCloseCard,
  }: {
    id?: string
    name?: string
    isCompleted?: boolean
    handleCloseCard?: () => any
  }) => {
    const {
      dataStore: { todosStore },
    } = useStore()

    const [todo, setTodo] = useState({ name, isCompleted })

    const saveTodo = (ev: any) => {
      ev.preventDefault()
      if (id) {
        const todoToUpdate = todosStore.getById(id)
        todoToUpdate?.updateTodo(todo.name, todo.isCompleted)
        if (handleCloseCard) handleCloseCard()
        return
      }
      todosStore.addTodo(todo.name, 'u1', todo.isCompleted)
    }

    return (
      <Card>
        <form onSubmit={saveTodo}>
          <input
            type="text"
            value={todo.name}
            name="name"
            onChange={({ target: { value } }) =>
              setTodo({ ...todo, name: value })
            }
          ></input>
          <input
            type="checkbox"
            name="isCompleted"
            checked={todo.isCompleted}
            onChange={({ target: { checked } }) =>
              setTodo({ ...todo, isCompleted: checked })
            }
          />
          <Button type="submit" variant="contained" color="primary">
            {id ? 'Update' : 'Add'} Todo
          </Button>
          {handleCloseCard && (
            <IconButton
              size="small"
              color="secondary"
              onClick={handleCloseCard}
            >
              <p>X</p>
            </IconButton>
          )}
        </form>
      </Card>
    )
  }
)

export default SaveTodoCard
