import { v4 as uuidv4 } from 'uuid'

export const actions = {
  addTodo: (label: string) => ({ type: 'addTodo', id: uuidv4(), label }),
  remove: (id: string) => ({ type: 'remove', id }),
  complete: (id: string) => ({ type: 'complete', id }),
  clear: () => ({ type: 'clear' }),
  setFilter: (filter: string) => ({ type: 'setFilter', filter }),
  edit: (id: string, label: string) => ({ type: 'edit', id, label })
};
