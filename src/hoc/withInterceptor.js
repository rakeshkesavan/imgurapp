import React, { Component } from 'react';

import Spinner from '../components/UI/Spinner/Spinner'

const withInterceptor = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,
            spinner: false
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null, spinner: true });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => {
                this.setState({ error: null, spinner: false });
                return res;
            }, error => {
                console.log(error);
                this.setState({ error: error, spinner: false });
            });
        }


        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            console.log("interceptor rendered");
            return (
                <>
                    <Spinner show={this.state.spinner}></Spinner>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }
}

export default withInterceptor;