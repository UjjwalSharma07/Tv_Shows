import React, { useState, useEffect } from "react";
import ShowDetail from "../Cart/ShowDetail";
import "./TvShowList.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const TvShowList = () => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      fetch("https://api.tvmaze.com/search/shows?q=all")
        .then((response) => response.json())
        .then((data) => {
          setShows(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, []);
  return (
    <div>
        {loading ? (
          <SkeletonTheme color="#333333" highlightColor="#444444">
            <div className="list__cards">
              {shows.map((show) => (
                <Skeleton key={show.show.id} count={15} height={320} />
              ))}
            </div>
          </SkeletonTheme>
        ) : (
          <div className="list__cards">
            {shows.map((show) => (
                <ShowDetail key={show.show.id} show={show} />
            ))}
          </div>
        )}
    </div>
  )
}

export default TvShowList
