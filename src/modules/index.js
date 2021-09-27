// 현재까지 두개의 module 을 만들었다.(counter, todos)
// 하나의 프로젝트에 여러개의 reducer 가 있을 때 하나로 합쳐서 사용한다.
// 하나로 합쳐진 reducer 를 root reducer 라고 부른다.
// reducer 를 합치는 작업은 redux 에 내장되어 있는 combineReducers 라는 함수를 사용한다.

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;

// root reducer 완성되었다. 이제 store 를 만들 것이다.
// redux store 를 만드는 작업은 src directory 의 index.js 에서 해주겠다.
