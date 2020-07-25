import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Meta from './../Meta';

class Page1 extends Component {

    constructor(){

        super();

        this.state = {

            'posts': [],
            'isloaded': false
        }
    }

    componentDidMount(){

        const apiurl = 'https://jsonplaceholder.typicode.com/posts';

        axios.get(apiurl)
             .then((response) => {                
                 // console.log(response);
                 let posts = response.data;
                 this.setState({ posts: posts, isloaded: true });
             })
             .catch((error) => {
                 console.log(error);
                 alert('Something went wrong!');
             })
    }

    render() {

        const postsblocks = this.state.posts.map((post,i) => {

            var posturl = '/post/' + post.id;

            return (

                <li key={i}>
                    <Link to={posturl}>{post.title}</Link>
                </li>
            )
        });

        const isloaded = this.state.isloaded;

        const output = () => {

            if(!isloaded){

                return <p>Please wait...</p>
            }
            else{

                return <ol>{postsblocks}</ol>
            }
        }

        console.log(isloaded);

        return (
            <div>

                <Meta slug="page_1" />

                {output()}

            </div>
        );
    }
}

export default Page1;