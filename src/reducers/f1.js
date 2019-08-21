const start = [
    'start3', 'start4'
];

export default function f1(state=start, action) {
    if (action.type === 'ADD1'){
        return [
            ...state, action.payload
        ]
    }
    if (action.type === 'MINUS1'){
        return [
            ...state, action.payload
        ]
    }
    // console.log (action);
    return state;
}