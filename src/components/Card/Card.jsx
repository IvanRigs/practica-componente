import React from "react";

const Card = ({title, description, textButton}) => {
    return (
        <div className="card" style={{ width: "18rem", margin: "50px", marginTop: "0px" }}>
            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text" style={{fontSize: "18px"}}>{description}</p>
                <a href="#" className="btn btn-primary">Ver más</a>
            </div>
        </div>
    );
};

export default Card;
