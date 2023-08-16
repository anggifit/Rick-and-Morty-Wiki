import React from "react";
import styles from "./Card.module.scss"

const Card = ({ results }) => {

    if (!results){
        return <p>Loading data...</p>
    } 
        const display = results.map((character) => {
            let { id, image, name, status, location } = character;
            let badgeStyle = ""
            if (status === "Dead") {
                badgeStyle = `${styles.badge} position-absolute badge bg-danger` 
            } else if (status === "Alive") {
                badgeStyle = `${styles.badge} position-absolute badge bg-success` 
            } else {
                badgeStyle = `${styles.badge} position-absolute badge bg-secondary` 
            }

            return (
                <div
                    key={id}
                    className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
                >
                    <div className={`${styles.card} d-flex flex-column justify-content-center`}>
                        <img src={image} className={`${styles.img} img-fluid`} alt=""></img>
                        <div className={`${styles.content}`}>
                            <h5 className="fs-5 fw-bold mb-4">{name}</h5>
                            <p className="fs-6 fw-normal">Last Location</p>
                            <p className="fs-5">{location.name}</p>
                        </div>
                        
                        <div className={badgeStyle}>{status}</div>
                    </div>
                </div>
            )
        });
        
    return <>{display}</>;
}

export default Card