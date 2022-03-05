import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Spin, Row, Col } from "antd";

// actions
import { getMovieDetail } from "store/actions/movie.action";

// utils
import { formatDate } from "utils";

// components
import { Header, ModalTrailer, Button } from "components";

// styles
import {
  MovieDetailContainer,
  MovieDetailContent,
  TextBackToHomePage,
  TitleGroup,
  TitleDivide,
  MovieDescribe,
  MovieTextDetail,
  MovieDetailGroup,
  MovieTextTypeFilm,
  MovieDetailImg,
} from "./style";
function MovieDetail() {
  const { tenPhim, hinhAnh, moTa, ngayKhoiChieu, trailer } = useSelector(
    (state) => state.movie.movieDetail
  );
  const loading = useSelector((state) => state.common.loading);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  const handleBackToHomePage = () => {
    history.push("/");
  };

  useEffect(() => {
    dispatch(getMovieDetail(params.maPhim));
  }, [params.maPhim]);

  return (
    <>
      <Header />
      <MovieDetailContainer>
        <MovieDetailContent>
          {loading ? (
            <Spin />
          ) : (
            <>
              <TitleGroup>
                <div
                  aria-hidden={true}
                  onClick={handleBackToHomePage}
                  className="text-back-to-homePage"
                >
                  Trang chủ
                </div>
                <TitleDivide />
                <TextBackToHomePage>{tenPhim}</TextBackToHomePage>
              </TitleGroup>
              <Row gutter={[0, 42]}>
                <Col md={12} xs={24} className="movie-detail__image">
                  <MovieDetailImg src={hinhAnh} alt="img-detail-movie" />
                </Col>
                <Col md={12} xs={24}>
                  <TextBackToHomePage>{tenPhim}</TextBackToHomePage>
                  <MovieDescribe>{moTa}</MovieDescribe>
                  <MovieDetailGroup>
                    <MovieTextDetail>Phân loại</MovieTextDetail>
                    <MovieTextTypeFilm>
                      C18 - Phim dành cho khán giả từ 18 tuổi trở lên
                    </MovieTextTypeFilm>
                  </MovieDetailGroup>
                  <MovieDetailGroup>
                    <MovieTextDetail>Đạo diễn</MovieTextDetail>
                    <MovieTextDetail>- -</MovieTextDetail>
                  </MovieDetailGroup>
                  <MovieDetailGroup>
                    <MovieTextDetail>Diễn viên</MovieTextDetail>
                    <MovieTextDetail>- -</MovieTextDetail>
                  </MovieDetailGroup>
                  <MovieDetailGroup>
                    <MovieTextDetail>Thể loại</MovieTextDetail>
                    <MovieTextDetail>- -</MovieTextDetail>
                  </MovieDetailGroup>
                  <MovieDetailGroup>
                    <MovieTextDetail>Thời lượng</MovieTextDetail>
                    <MovieTextDetail>90 phút</MovieTextDetail>
                  </MovieDetailGroup>
                  <MovieDetailGroup>
                    <MovieTextDetail>Khởi chiếu</MovieTextDetail>
                    <MovieTextDetail>
                      {formatDate(ngayKhoiChieu, "DD/MM/YYYY")}
                    </MovieTextDetail>
                  </MovieDetailGroup>
                  <MovieDetailGroup>
                    <MovieTextDetail>Ngôn ngữ</MovieTextDetail>
                    <MovieTextDetail>Phụ đề tiếng Việt</MovieTextDetail>
                  </MovieDetailGroup>
                  <MovieDetailGroup style={{ marginTop: "32px" }}>
                    <ModalTrailer isButton videoId={trailer} />
                    <Button style={{ marginLeft: "16px" }} type="primaryRed">
                      Mua vé ngay
                    </Button>
                  </MovieDetailGroup>
                </Col>
              </Row>
            </>
          )}
        </MovieDetailContent>
      </MovieDetailContainer>
    </>
  );
}

export default MovieDetail;
