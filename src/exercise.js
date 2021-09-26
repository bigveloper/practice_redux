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
