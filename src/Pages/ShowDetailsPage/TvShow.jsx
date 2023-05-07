import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import './TvShow.css';
import { useParams } from 'react-router-dom';

const TvShow = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="TvShow">
      <div className="TvShow__intro">
        {loading ? (
          <Skeleton height={500} />
        ) : (
          <img className="backdrop__img" src={shows.image?.original} alt={shows.name} />
        )}
      </div>
      <div className="TvShow__details">
        <div className="TvShow__detailLeft">
          {loading ? (
            <Skeleton height={400} width={280} />
          ) : (
            <div className="TvShow__poster">
              <img className="poster__img" src={shows.image?.medium} alt={shows.name} />
            </div>
          )}
        </div>

        <div className="TvShow__detailRight">
          <div className="TvShow__detailRightTop">
            {loading ? (
              <Skeleton height={40} width={500} />
            ) : (
              <div className="TvShow__name">{shows?.name}</div>
            )}
            {loading ? (
              <Skeleton height={20} width={200} />
            ) : (
              <div className="TvShow__lang">{shows?.language}</div>
            )}
            {loading ? (
              <Skeleton height={20} width={100} />
            ) : (
              <div className="TvShow__rating">
                {shows.rating?.average}
                <i class="fas fa-star" />
              </div>
            )}
            {loading ? (
              <Skeleton height={20} width={100} />
            ) : (
              <div className="TvShow__runtime">
                {shows ? shows?.runtime + ' mins' : ''}
              </div>
            )}
            {loading ? (
              <Skeleton height={20} width={200} />
            ) : (
              <div className="TvShow__releaseDate">
                {shows ? 'Release date: ' + shows?.premiered : ''}
              </div>
            )}

            <div className="TvShow__genres">
              {loading
                ? Array.from({ length: 5 }, (_, i) => (
                    <Skeleton key={i} height={20} width={80} style={{ marginRight: 10 }} />
                  ))
                : shows?.genres?.map((genre, i) => (
                    <span className="TvShow__genre" key={i}>
                      {genre}
                    </span>
                  ))}
            </div>
          </div>

          <div className="TvShow__detailRightBottom">
            <div className="summary">Summary</div>
            {loading ? (
              <Skeleton height={100} count={3} />
            ) : (
              <div>{shows?.summary?.replace(/<[^>]+>/g, '')}</div>
            )}
            </div>
          </div>
      </div>
    </div>
  )
}

export default TvShow
