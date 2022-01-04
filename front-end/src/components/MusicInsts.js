//component to view all musical instruments

import React from "react";
import { Link } from 'react-router-dom';

class MusicInsts extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <p>
                    This is the MusicInsts component.
                    This component should contain a list of musical instruments using a table tag or
                    perhaps components.
                </p>
                <h4>Here is an example of each</h4>
                <h5>#1 Table</h5>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Type</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Condition</th>
                        <th>isAvailable</th>
                    </tr>
                    {/* this part can and should be generated using a for loop */}
                    <tr>
                        <td>61a41dabca2ff287ec850707</td>
                        <td>String</td>
                        <td>Jackson</td>
                        <td>2000</td>
                        <td>New</td>
                        <td>False</td>
                        {/* link to view a single musical instrument's details by ID  */}
                        <td><Link to='/viewMusicInst?id=61a41dabca2ff287ec850707'>View</Link></td>
                        {/* link to view and edit the musical instrument's details by ID */}
                        <td><Link to='/editMusicInst?id=61a41dabca2ff287ec850707'>Edit</Link></td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>61d3a3b6dc2a199ff209f52c</td>
                        <td>Ukele</td>
                        <td>Fender</td>
                        <td>2000</td>
                        <td>New</td>
                        <td>True</td>
                        {/* link to view a single musical instrument's details by ID  */}
                        <td><Link to='/viewMusicInst?id=61d3a3b6dc2a199ff209f52c'>View</Link></td>
                        {/* link to view and edit the musical instrument's details by ID */}
                        <td><Link to='/editMusicInst?id=61d3a3b6dc2a199ff209f52c'>Edit</Link></td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>61d3b099b7bd5f44857d10b0</td>
                        <td>Flute</td>
                        <td>Candy</td>
                        <td>2000</td>
                        <td>New</td>
                        <td>True</td>
                        {/* link to view a single musical instrument's details by ID  */}
                        <td><Link to='/viewMusicInst?id=61d3b099b7bd5f44857d10b0'>View</Link></td>
                        {/* link to view and edit the musical instrument's details by ID */}
                        <td><Link to='/editMusicInst?id=61d3b099b7bd5f44857d10b0'>Edit</Link></td>
                        <td>
                            <a to="/delete/id">Delete</a>
                        </td>
                    </tr>
                </table>
                {/* insert html code here */}
                <h5>#2  Components</h5>
                {/* insert JSX code here */}
            </div>
        )
    }
}


export default MusicInsts;