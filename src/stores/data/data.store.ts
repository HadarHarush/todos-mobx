import RootStore from '../rootStore'
import TodosStore from './todos.store'
import UsersStore from './users.store'

export default class DataStore {
  todosStore: TodosStore
  usersStore: UsersStore

  constructor(rootStore: RootStore) {
    this.todosStore = new TodosStore(rootStore)
    this.usersStore = new UsersStore(rootStore)
  }
}
