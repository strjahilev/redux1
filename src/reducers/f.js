const start = [
    'start1', 'start2'
];

export default function f(state=start, action) {
    if (action.type === 'ADD'){
        return [
            ...state, action.payload
        ]
    }
    if (action.type === 'MINUS'){
        return [
            ...state, action.payload
        ]
    }
    // console.log (action);
    return state;
}