import axios from 'axios';

import { GET_GALLERY_CONTENT } from './types';

export const getGallery = (dispatch) => {
    console.log("blah ");
    return (dispatch) => {
        axios.get('/api/gallery')
            .then(response => {
                console.log(response);
                dispatch(gallery(response.data));
            })
            .catch(error => {
                throw (error);
            });
    }
};

export const gallery = (data) => {
    return {
        type: GET_GALLERY_CONTENT,
        payload: {
            // _id: data._id,
            // title: data.title,
            body: data
        }

    }
}