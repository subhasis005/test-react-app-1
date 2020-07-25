import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

class Meta extends Component {

    constructor(){
        super();

        this.state={
            title: '',
            description: ''
        }
    }

    componentDidMount(){

        let apiurl = 'https://mathsonline.mptprime.com/testmails?metaslug=' + this.props.slug;

        axios.get(apiurl).then((response)=>{

            let metadata = response.data;

            let meta_title = metadata.title;
            let meta_desc = metadata.description;

            this.setState({

                title: meta_title,
                description: meta_desc
            })

        }).catch((error)=>{
            
            console.log(error);
            
        })
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>{this.state.title}</title>
                    <meta name="description" content={this.state.description} />
                </Helmet>
            </>
        );
    }
}

export default Meta;