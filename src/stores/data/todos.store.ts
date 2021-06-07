import { action, autorun, makeObservable, observable, reaction } from 'mobx'
import RootStore from '../rootStore'
import Todo from './entities/todo.store'

export default class TodosStore {
  list: Todo[] = []

  private rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      list: observable,
      addTodo: action,
      getById: action,
      removeTodo: action,
    })
    this.rootStore = rootStore
    reaction(
      () => this.list.length,
      () => console.log('todos length changed: ', this.list)
    )
    this.init()
  }

  addTodo(name: string, userId: string, isCompleted: boolean = false) {
    this.list.push(new Todo(this.rootStore, name, userId, isCompleted))
  }

  getById(id: string) {
    return this.list.find((currTodo) => currTodo.id === id)
  }

  removeTodo(id: string) {
    const todoIndex = this.list.findIndex((currTodo) => currTodo.id === id)

    if (todoIndex < 0) {
      console.log('couldnt find todo to remove')
      return
    }

    this.list.splice(todoIndex, 1)
  }

  init() {
    // this.addTodo('hadar1', 1)
    // this.addTodo('hadar2', 2)
    // this.removeTodo(2)
  }
}
