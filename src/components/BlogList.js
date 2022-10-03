import React from 'react';
import "../css/Car.css";
import { Link } from 'react-router-dom';


const BlogList = ({blogs}) => {
    return (
        <div>
            <h1 className="text-center mb-3">AFT Laptop Blog</h1>
            {
                blogs.map((laptop) => (
                    <div className="container preview" key={laptop.id}>

                        <h2>{laptop.title}</h2>
                        <div>
                            <i className="text-info">{laptop.coo}</i>
                        </div>

                       
                        <p className="text-justify">{laptop.body}</p>
                        <Link to={`/blog/${laptop.id}`}>Read More......</Link>
                    </div>
                ))
            }

        </div>
    );
}

export default BlogList;
