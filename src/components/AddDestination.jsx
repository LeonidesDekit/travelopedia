import React from 'react'

function AddDestination() {
    return (
        <div className="p-4 border">
            <form>
                <div className="row col-8 offset-2">
                    <h4>Enter a new destination</h4>
                    <div className="col-5 p1">
                        <input className="form-control"
                            type="text"
                            placeholder="Enter City ...">
                        </input>
                    </div>
                    <div className="col-5 p1">
                        <input className="form-control"
                            type="text"
                            placeholder="Enter Country"></input>
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