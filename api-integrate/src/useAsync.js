import { useReducer, useEffect } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null 
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const useAsync = (callback, deps = [], skip = false) => {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: false 
    });

    const fetchData = async () => {
        dispatch({type: 'LOADING'});
        try {
            const data = await callback();
            dispatch({ type: 'SUCCESS', data });
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    };

    useEffect(() => { // useEffect의 첫번째 파라피터 함수는 async가 불가능하다. useEffect(async () => ...) 불가능
        if (skip) return;
        fetchData();
    }, deps);

    return [state, fetchData];
}

export default useAsync;