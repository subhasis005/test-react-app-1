import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Meta from './../Meta';

class Page2 extends Component {

    interval = '';

    constructor(){

        super();

        this.state = {

            counter: 10
        }
    }

    componentDidMount(){

        let cnt = this.state.counter;

        this.interval = setInterval(() => {

            cnt = cnt - 1;

            if(cnt === 0)   clearInterval(this.interval);

            this.setState({ counter: cnt })
            
        }, 1000);
    }

    componentWillUnmount(){

        clearInterval(this.interval);
    }

    render() {

        let cnt = this.state.counter;

        if(cnt === 0){

            return <Redirect to="/page4" />
        }

        return (

            <>
                
                <Meta slug="page_2" />

                <div>
                    <h1>{cnt}</h1>
                </div>

            </>

        );
    }
}

export default Page2;