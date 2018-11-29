// import axios from 'axios';

import { SET_SECTION } from './types';

// export const getGallery = (props) => {
//     console.log('---', props);
//     return (dispatch) => {
//         axios.get('/api/gallery', props)
//             .then(response => {
//                 console.log(response);
//                 dispatch(gallery(response.data));
//             })
//             .catch(error => {
//                 throw (error);
//             });
//     }
// };

export const handleSection = (data) => {
    return {
        type: SET_SECTION,
        payload: {
            section: data
        }

    }
}