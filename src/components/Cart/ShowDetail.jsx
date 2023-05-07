import React from "react";
import "./ShowDetail.css";
import { Link } from "react-router-dom";

const ShowDetail = ({show}) => {
  
  return (
    <div>
   
    <div className='ShowDetail'>
        
        <img  className="cards__img" src={show.show?.image && show.show?.image?.original} alt={show.show.name} />

    
        <div className="cards__overlay">
            <div className="card__title">{show ? show.show.name : ""}</div>
            <div className="card__runtime">
            {show ? show.show.premiered : ""}
            <div className="card__rating">
                {show ? show.show.rating.average : ""}
                <i className="fas fa-star" />
            </div>
            </div>
            <div className="card__description">
            {show ? show.show.summary.replace(/<[^>]+>/g, '').slice(0, 118) + "..." : ""}
            </div>
        </div>


    </div>
       <div>
          <Link to={`/show/${show.show.id}`}>
              <button className="card__button" >Details</button>
          </Link>
    
       </div>
    </div>
  );
};

export default ShowDetail;
