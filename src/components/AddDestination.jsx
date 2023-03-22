import React, { useState } from 'react'
import { useAddDestinationMutation } from '../api/destinationApi';

function AddDestination() {
    const [newCity, setNewCity] = useState("");
    const [newCountry, setNewCountry] = useState("");
    const [addDestination] = useAddDestinationMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        addDestination({
            id: Math.random() * 100,
            city: newCity,
            country: newCountry,
            daysNeeded: parseInt(Math.random() * 10) + 1,
        });
        setNewCity("");
        setNewCountry("");
    }
    return (
        <div className="p-4 border">
            <form onSubmit={handleSubmit}>
                <div className="row col-8 offset-2">
                    <h4>Enter a new destination</h4>
                    <div className="col-5 p1">
                        <input className="form-control"
                            type="text"
                            placeholder="Enter City ..."
                            value={newCity}
                            onChange={(e) => setNewCity(e.target.value)}>
                        </input>
                    </div>
                    <div className="col-5 p1">
                        <input className="form-control"
                            type="text"
                            placeholder="Enter Country"
                            value={newCountry}
                            onChange={(e) => setNewCountry(e.target.value)}></input>
                    </div>
                    <div className="col-2 p1">
                        <button className="btn btn-success form-control">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddDestination