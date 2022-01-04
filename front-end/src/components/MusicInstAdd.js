// component to add a musical instrument
import React from 'react';

class MusicInstAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // you should save the variables in this state

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
            <div>
                /* A HTML form for the user to insert a musical instrument */

                <form>
                    <fieldset>
                        <legend>Insert a new Musical Instrument:</legend>


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

export default MusicInstAdd