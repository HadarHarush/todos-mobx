import { action, autorun, makeObservable, observable, reaction } from 'mobx'
import { makeId } from '../../../services/utils'
import RootStore from '../../rootStore'

let runningId: number = 0

export default class Todo {
  id: string = makeId()

  constructor(
    public rootStore: RootStore,
    public name: string,
    public userId: string,
    public isCompleted: boolean = false
  ) {
    if (rootStore !== null) this.rootStore = rootStore
    makeObservable(this, {
      name: observable,
      isCompleted: observable,
      updateName: action,
      toggleIsCompleted: action,
      updateTodo: action,
    })
  }

  updateName(name: string) {
    this.name = name
  }

  toggleIsCompleted() {
    this.isCompleted = !this.isCompleted
  }

  updateTodo(
    name: string = this.name,
    isCompleted: boolean = this.isCompleted
  ) {
    this.name = name
    this.isCompleted = isCompleted
  }
}
