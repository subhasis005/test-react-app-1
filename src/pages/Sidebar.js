import React, { Component } from 'react';
import axios from 'axios';

class Sidebar extends Component {

    constructor(){
        super();

        this.state = {

            albums: []
        }
    }

    componentDidMount(){

        const apiurl = 'https://jsonplaceholder.typicode.com/albums';

        axios.get(apiurl).then((response) => {

            var albums = response.data.splice(0,5);

            this.setState({ albums: albums });

        }).catch((error) => {

            console.log(error);
        })
    }

    render() {

        const albums = this.state.albums.map((album,i) => {

            return <li key={i}>{album.title}</li>
        })

        return (
            
            <>
            
                <ul>
                    {albums}
                </ul>

            </>

        );
    }
}

export default Sidebar;