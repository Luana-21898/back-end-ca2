//component to view all musical instruments

import React from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

class MusicInsts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          musicinsts: [],
          isLoaded: true
        }
     
    }

    componentDidMount(){

        axios.get('/musicalinst')
            .then((response) => {
            // handle success when status is 200 and OK
            // populate the musical instruments` array with the data from the server
            // set isLoaded to true to make sure we render the right values on screen
                this.setState( {
                    musicinsts: response.data,
                    isLoaded: true
                })
                
            })
            .catch((error)=> {
            // handle error 
            // in case we get an error from the server, e.g. the server is offline
                this.setState({
                    isLoaded:false,
                    error
                })
                
            })
       
           
    }


    render(){
        //assign variables using the state
        const { isLoaded, musicinsts} = this.state;
        
        //conditional rendering: https://reactjs.org/docs/conditional-rendering.html
        //if we are waiting for our server to serve us the data render this part of code
        // also render this if the SERVER is offline
        if(!isLoaded){
            return(
                <div>The page is loading or the SERVER is down...</div>
            )
        //render this part of code if we received the data from the server
        } else {
            return(
                <div>
                    <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Type</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Condition</th>
                            <th>Availability</th>
                        </tr>
                    </thead>

                    <tbody>
                        {musicinsts.map(musicalinst => (
                        <tr key={musicalinst._id}>
                            <td>{musicalinst._id}</td>
                            <td>{musicalinst.type}</td>
                            <td >{musicalinst.brand}</td>
                            <td >{musicalinst.price}</td>
                            <td >{musicalinst.condition}</td>
                            <td >{musicalinst.isAvailable? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                    </tbody> 
                    </table>
              </div>  
            )
        }
    }
}
    

export default MusicInsts;
