import { v1 } from "uuid";

const actions = {
    add: 'add', remove: 'remove', get: 'get', update: 'update'
}
export default function todoReducer(state, action) {
    switch (action.type) {
        case actions.add:
            return [...state, {todo: action.todo, id: v1()}]
        case actions.remove:
            return state.filter(todo => todo.id !== action.id);
        case actions.update:
            state.find((e) => e.id === action.id).todo = action.todo;
            return [...state];
    }
    throw Error("Action not found");
}

export {actions}