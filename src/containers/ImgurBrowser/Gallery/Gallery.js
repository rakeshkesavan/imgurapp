import React, { Component } from 'react';
import Media from '../../../components/Media/Media';
import Header from '../../../components/Header/header'

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
        console.log("componentDidMount", this.props);
        this.props.onload(this.props);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.sect);
        if (prevProps.sect !== this.props.sect) {
            //console.log("sects are differnt", this.props);
            this.props.onload(this.props);
        }

    }
    sectionHandler(section) {
        this.props.handleSection(section.toLowerCase());
        // this.props.onload(this.props);
    }

    render() {
        let gallery = <p style={{ textAlign: 'center' }}>Something went wrong!</p>,
            header = (<Header section={this.props.sect} sectionClicked={(section) => this.sectionHandler(section)}></Header>);

        gallery = (

            <div className={classes['gallery-container']}>

                <div className={classes['gallery-grid']}>
                    {this.props.gal.map((post, index) => {
                        let images, imageB;
                        if (post.images !== undefined && post.images[0].mp4 === undefined) {
                            imageB = { 'backgroundImage': 'url(' + post.images[0].link + ')' }
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

        return (
            <>
                {header}
                {gallery}
            </>
        );

    }

}

export default Gallery;