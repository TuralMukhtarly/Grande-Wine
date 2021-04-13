const initialState = {
    items: [],
    isLoaded: false,
}

const beverages = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BEVERAGES':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            }
        default:
            return state;;
    }
}

export default beverages;