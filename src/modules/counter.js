// action type 만들기
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어준다.
// 다른 모듈과 이름이 중복되는 것을 방지하기 위함이다.

const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action creator function 만들기
// 액션 생성함수 를 만들고 export 키워드를 사용해서 내보낸다.

export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
