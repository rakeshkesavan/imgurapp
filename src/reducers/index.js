import * as types from '../actions/types';

const initialState = {
    gallery: [
        {
            images: [
                { link: '' }
            ]
        }
    ]
}

const reducer = (state = initialState, action) => {
    if (action.type === types.GET_GALLERY_CONTENT) {
        console.log("entha sambhavam");
        return { ...state, gallery: action.payload.body.data }

    }
    return state;
};

export default reducer;