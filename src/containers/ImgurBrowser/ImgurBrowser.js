import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import Gallery from './Gallery/Gallery';
import { getGallery } from '../../actions/gallery';
import { handleSection } from '../../actions/section';

import { connect } from 'react-redux';

class ImgurBrowser extends Component {

    render() {
        console.log('rendered');
        return (
            <>
                <Switch>

                    <Route path="/gallery" render={() => <Gallery {...this.props} />} />
                    {/* <Route path="/gallery/:section?/:sort?/:window?/:showViral" render={() => <Gallery {...this.props} />} /> */}
                    {/* <Redirect from="/" to={urlParam} /> */}
                </Switch>

                {/* <Gallery /> */}
            </>
        )
    }


}

const mapStateToProps = state => {
    return {
        gal: state.gallery,
        sect: state.section,
        sortParam: state.sort,
        wnd: state.window,
        viral: state.showViral
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onload: (props) => dispatch(getGallery(props)),
        handleSection: (section) => dispatch(handleSection(section))
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ImgurBrowser));
