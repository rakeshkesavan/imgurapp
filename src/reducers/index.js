import * as types from '../actions/types';

const initialState = {
    gallery: [
        {
            images: [
                { link: '' }
            ]
        }
    ],
    section: "hot",
    sort: "viral",
    window: "day",
    showViral: true

}

const reducer = (state = initialState, action) => {
    // if (action.type === types.GET_GALLERY_CONTENT) {
    //     return { ...state, gallery: action.payload.body.data }

    // }

    switch (action.type) {

        case types.GET_GALLERY_CONTENT:
            return { ...state, gallery: action.payload.body.data }

        case types.SET_SECTION:
            return { ...state, section: action.payload.section }



        // const newPerson = {
        //         id: Math.random(), // not really unique but good enough here!
        //         name: action.personData.name,
        //         age: action.personData.age
        //     }
        //     return {
        //         ...state,
        //         persons: state.persons.concat( newPerson )
        //     }
        // case actionTypes.REMOVE_PERSON:
        //     return {
        //         ...state,
        //         persons: state.persons.filter(person => person.id !== action.personId)
        //     }
        default:
            /* code */
            break;
    }
    return state;
};


export default reducer;