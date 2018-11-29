import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Gallery from './Gallery/Gallery';
import { getGallery } from '../../actions/gallery'

import { connect } from 'react-redux';

class ImgurBrowser extends Component {

    render() {
        return (
            <>
                <Route path="/gallery" render={() => <Gallery {...this.props} />} />
                {/* <Gallery /> */}
            </>
        )
    }


}

const mapStateToProps = state => {
    return {
        gal: state.gallery
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onload: () => dispatch(getGallery())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ImgurBrowser);
