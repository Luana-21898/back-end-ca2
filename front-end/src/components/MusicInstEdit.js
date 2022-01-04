//component to edit a musical instrument entry

import React from 'react';

class MusicInstEdit extends React.Component {
    constructor(props) {
        super(props);
        let id = window.location.href.split('=')[1]
        this.state = {

            id: String,
            type: String,
            brand: String,
            price: Number,
            condition: String,
            isAvailable: Boolean
        }
    }
    render() {
        return (
            //This is the Musical Instrument's Edit component
            <div>

                <form>
                    <fieldset>
                        <legend>Edit the Musical Instrument:</legend>


                        <label for="id">ID:</label>
                        <input type="text" id="id" name="id" value=""></input>

                        <label for="type">Type:</label>
                        <input type="text" id="type" name="type" value=""></input>

                        <label for="brand">Brand:</label>
                        <input type="text" id="brand" name="brand" value=""></input>

                        <label for="price">Price:</label>
                        <input type="text" id="price" name="price" value=""></input>

                        <label for="condition">Condition:</label>
                        <input type="text" id="condition" name="condition" value=""></input>

                        <label for="isAvailable">Availability:</label>
                        <input type="text" id="isAvailable" name="isAvailable" value=""></input>

                    </fieldset>
                </form>




            </div>
        )
    }
}

export default MusicInstEdit;
