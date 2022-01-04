//component to edit a musical instrument entry

import React from 'react';

class MusicInstEdit extends React.Component{
    constructor(props){
        super(props);
        let id = window.location.href.split('=')[1]
        this.state = {id
        }
    }
    render(){
        return(
            <div>This is the Musical Instrument's Edit component</div>
        )
    }
}

export default MusicInstEdit;
