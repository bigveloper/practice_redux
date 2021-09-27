import React from 'react';

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
    const onChange = (e) => {
        //e.target.value 의 타입은 문자열 이기 때문에 숫자로 변환 해주어야 한다.
        onSetDiff(parseInt(e.target.value, 10));
    };

    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} min="1" onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default Counter;

// 프리젠테이셔널 컴포넌트에선 주로 이렇게 UI 를 선언하는 것에 집중하며, 필요한 값들이나 함수는
// props 로 받아와서 사용하는 현태로 구현한다.

// 컨테이너 컴포넌트를 만들러 가자
// CounterContainer.js
