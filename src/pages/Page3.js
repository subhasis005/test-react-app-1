import React, { Component } from 'react';
import Meta from './../Meta';
import Sidebar from './Sidebar';

class Page3 extends Component {
    render() {
        return (

            <>
            
                <Meta slug="page_3" />

                <div>
                    <h1>Page 3</h1>

                    <Sidebar />

                </div>

            </>
            
        );
    }
}

export default Page3;