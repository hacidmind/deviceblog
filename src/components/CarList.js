import React from 'react';
import "../css/Car.css";

const CarList = ({ blogs, handleDeletes }) => {
    return (
        <div>
            <h1 className="text-center mb-3">AFT Car Blog</h1>
            {
                blogs.map((vehicle) => (
                    <div className="container preview" key={vehicle.id}>
                        <div className="row">
                            <div className="col-12">
                                <h2>{vehicle.title}</h2>
                                <button className="btn btn-danger float-end" onClick={() => handleDeletes(vehicle.id)}>Delete</button>
                                <div>
                                    <i className="text-info">{vehicle.coo}</i>
                                </div>

                                <img src={vehicle.pix} alt={vehicle.title} className="img-fluid mt-2" />
                                <p className="text-justify">{vehicle.body}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
}

export default CarList;
