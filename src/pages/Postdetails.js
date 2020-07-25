import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

class Postdetails extends Component {

    constructor({match}){

        super();

        let postid = match.params.id;

        this.state = {

            post_id: postid,
            post_title: '',
            post_details: ''
        }
    }

    componentDidMount(){

        let apiurl = 'https://jsonplaceholder.typicode.com/posts/' + this.state.post_id;

        axios.get(apiurl).then((response) => {

            let postdata = response.data;
            let post_title = postdata.title;
            let post_details = postdata.body;

            this.setState({ post_title: post_title, post_details: post_details });

        }).catch((error) => {

            alert('Something went wrong!');
        })
    }

    render() {
        return (

            <>
            
                <Helmet>
                    <title>{this.state.post_title}</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content={this.state.post_details} />
                </Helmet>

                <div>
                    <h1>{this.state.post_title}</h1>
                    <p>{this.state.post_details}</p>
                </div>

            </>
            
        );
    }
}

export default Postdetails;