import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload: payload,
})

export const fetchBeverages = (sortBy, category) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false
    });

    axios.get(`http://localhost:8080/beverages?${category !== null ? `category=${category}` : ""
        }&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
            dispatch(setBeverages(data));
        });
};


export const setBeverages = (items) => ({
    type: 'SET_BEVERAGES',
    payload: items,
});

