import React from "react";
import TvShowList from "../../components/TvShowList/TvShowList";
const HomePage = () => {
  return (
    <div className="show__list">
        <header  className="header"> 
          <h1 className="heading-1">Tv Shows</h1>
        </header>
        <TvShowList />
    </div>
  );
};

export default HomePage;
