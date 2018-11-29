import React, { Component } from 'react';
import Media from '../../../components/Media/Media';

import classes from './gallery.module.css'

// import { connect } from 'react-redux';

class Gallery extends Component {

    state = {
        gallery: [
            {
                images: []
            }
        ]
    }

    componentDidMount() {
        // this.setState({ gallery: [{ name: "test" }, { name: "test" }, { name: "test" }] });
        this.props.onload();
    }

    render() {
        let gallery = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;


        gallery = (

            <div className={classes['gallery-container']}>

                <div className={classes['gallery-grid']}>
                    {this.props.gal.map((post, index) => {
                        let images, imageB;
                        if (post.images !== undefined && post.images[0].mp4 === undefined) {
                            imageB = { 'background-image': 'url(' + post.images[0].link + ')' }
                            images = (
                                <div key={index} style={imageB} >
                                    <Media item={post}></Media>
                                </div>
                            )
                        }
                        return (images);
                    })
                    }
                </div>
            </div>
        );

        return (gallery);

    }

}





export default Gallery;