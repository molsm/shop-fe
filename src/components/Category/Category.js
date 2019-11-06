import React from 'react';
import { BrowserRouter as useParams } from 'react-router-dom'

class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {  
        const { url } = this.props.match.params
        
        return(
            <div>This is Category! You are browsing {url}</div>
        )
    }
}

export default Category;