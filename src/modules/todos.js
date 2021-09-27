// action type 선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todo/TOGGLE_TODO';

// action creator function 선언
const nextId = 1; // todo data 에서 사용할 고유 id

export const addTOdo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해 준다.
        text,
    },
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
});

// 초기 상태 선언 //
// reducer 의 초기 상태는 꼭 객체타입일 필요는 없다.
// 배열이어도 되고, 원시 타입(숫자,문자열, 불리언) 이어도 상관 없다.

const initState = [];

export default function todos(state = initState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.map(
                (todo) =>
                    todo.id === action.id // id 가 일치하면
                        ? { ...todo, done: !todo.done } // done 값을 반전 시키고
                        : todo // 아니라면 그대로 둠
            );
        default:
            return state;
    }
}
