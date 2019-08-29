import React from 'react';
import HogCard from './HogCard';

class Hogs extends React.Component {
    
    render() {
        const mappedObj = this.props.hogsArray.map(obj => {
            // mapped return
            return <HogCard hog={obj}/>
            
        })
        // rendered return
        return(
          <div className="ui grid container">{mappedObj}</div>  
        )
    }
}

export default Hogs