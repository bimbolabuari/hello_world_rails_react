import getInitialGreeting from '../utilities/getData'

const initialState = {
    greeting: '',
}


export const GET_GREETING_REQUEST = '/greeting/GET_GREETING_REQUEST';


export const getGreeting = async (dispatch) => {
    const greeting = await getInitialGreeting();
    return dispatch({
      type: GET_GREETING_REQUEST,
      payload: greeting,
    });
};


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GREETING_REQUEST:
            return { ...state, greeting: action.payload };

        default:
            return state;
    }
}

export default Reducer;