import React, { useState } from 'react'

function AddDestination() {
    const [newCity, setNewCity] = useState("");
    const [newCountry, setNewCountry] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setNewCity("");
        setNewCountry("");
    }
    return (
        <div className="p-4 border">
            <form>
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