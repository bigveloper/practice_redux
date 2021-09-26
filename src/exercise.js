/**
 * @description redux
 */

// createStore 는 store 를 만들어 주는 함수
// react project 에서는 단 하나의 store 를 만듦
import { createStore } from 'redux';

// redux 에서 관리할 state 정의
const initState = {
    counter: 0,
    text: '',
    list: [],
};

// action type 정의
// action type 은 주로 대문자로 작성한다.
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// action creator function 정의
// action creator function 는 camelCase 로 작성한다.
function increase() {
    return {
        type: INCREASE, // action object 에는 type 값이 필수!!!
    };
}

// 화살표 함수로 작성하는것이 코드가 간결해짐, 익숙해져야 함
const decrease = () => ({
    type: DECREASE,
});

const change_text = (text) => ({
    type: CHANGE_TEXT,
    text, // action 안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있다!
});

const addToList = (item) => ({
    type: ADD_TO_LIST,
    item,
});

// reducer 만들기
// 위 action creator function 들을 통해 만들어진 객체들을 참조하여,
// 새로운 상태를 만드는 함수를 만들어 본다.
// 주의: reducer 에서는 불변성을 꼭 지켜줘야 한다. //

function reducer(state = initState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1,
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item),
            };
        default:
            return state;
    }
}
