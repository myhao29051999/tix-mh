import React, { useEffect } from "react";
// liblaries
import { useSelector, useDispatch } from "react-redux";

// layouts
import MasterLayout from "layouts/MasterLayout";

// actions
import { getMovieList } from "store/actions/movie.action";

// components
import MovieCard from "./MovieCard";

// styles
import { SliderStyle } from "./style";
function MovieList() {
  const movieList = useSelector((state) => state.movie.movieList);
  const dispatch = useDispatch(); //giup dispatch 1 cai action trong redux, vd bam nut add...

  const renderListMovie = () => {
    return movieList.map((movie, index) => {
      return (
        <div>
          <MovieCard
            key={index}
            urlImage={movie?.hinhAnh}
            movieName={movie?.tenPhim}
          />
        </div>
      );
    });
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray",
        }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    className: "center",
    centerModeL: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1096,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 745,
        settings: {
          slidesToShow: 1,
          rows: 2,
          infinite: true,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  return (
    <MasterLayout>
      <SliderStyle {...settings}>{renderListMovie()}</SliderStyle>
    </MasterLayout>
  );
}
export default MovieList;
