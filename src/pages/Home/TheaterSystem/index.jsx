import React, { useEffect, useState } from "react";
// liblaries
import { useSelector, useDispatch } from "react-redux";

// layouts
import MasterLayout from "layouts/MasterLayout";

// actions
import {
  getListTheaterSystem,
  getThongTinCumRapTheoHeThong,
  getThongTinLichChieuHeThongRap,
} from "store/actions/system.action";

// constants
import { images } from "constants/images";

// components
import TheaterCard from "./components/TheaterCard";
import FilmCard from "./components/InfoFilmCard";

// styles
import {
  TheaterContent,
  ColImgTheater,
  ImgTheater,
  DivCover,
  ColInfoTheater,
} from "./style";

function TheaterSystem() {
  const theaterList = useSelector((state) => state.system.systemList);
  const cumRap = useSelector((state) => state.system.thongTinCumRap);
  const lichChieuHeThongRap = useSelector(
    (state) => state.system.thongTinLichChieuHeThongRap
  );
  const dispatch = useDispatch(); //giup dispatch 1 cai action trong redux, vd bam nut add...
  // state
  const [maHeThongRap, setMaHeThongRap] = useState("BHDStar");
  const [active, setActive] = useState("BHDStar");
  const [listFilm, setListFilms] = useState([]);
  const [activeTheaterCard, setActiveTheaterCard] = useState("");

  const onGetMaHeThongRap = (item) => {
    setMaHeThongRap(item?.maHeThongRap);
    setActive(item?.maHeThongRap);
  };
  
  // lấy ra thông tin maCumRap dau tien khi chưa click vào theaterCard vẫn có maCumRap để render ra ds phim theo cụm rạp
  const firstMaCumRap = lichChieuHeThongRap ? lichChieuHeThongRap[0]?.lstCumRap[0]?.maCumRap : "";

  const onGetTypeTheater = () => {
    if (maHeThongRap === "BHDStar") {
      return "bhdStar";
    } else if (maHeThongRap === "CGV") {
      return "cgv";
    } else if (maHeThongRap === "CineStar") {
      return "cns";
    } else if (maHeThongRap === "Galaxy") {
      return "galaxy";
    } else if (maHeThongRap === "LotteCinima") {
      return "lotte";
    }
    return "mega";
  };

  const onRenderImageTheater = () => {
    if (maHeThongRap === "BHDStar") {
      return images.IMG_BHD;
    } else if (maHeThongRap === "CGV") {
      return images.IMG_CGV;
    } else if (maHeThongRap === "CineStar") {
      return images.IMG_CNS;
    } else if (maHeThongRap === "Galaxy") {
      return images.IMG_GALAXY;
    } else if (maHeThongRap === "LotteCinima") {
      return images.IMG_LOTTE;
    }
    return images.IMG_MEGA;
  };
  const onRenderListFilmsWithMaCumRap = (mcr) => {
    setActiveTheaterCard(mcr);
    let lstCumRap = lichChieuHeThongRap.map((item) => {
      return item?.lstCumRap;
    });
    let lstFilter = [];
    lstCumRap.map((i) => {
      lstFilter = i.filter((film) => {
        return film.maCumRap === mcr;
      });
    });
    lstFilter.map((i) => {
      setListFilms(i?.danhSachPhim);
    });
  };

  useEffect(() => {
    dispatch(getListTheaterSystem());
  }, []);

  useEffect(() => {
    if (maHeThongRap !== "") {
      dispatch(getThongTinCumRapTheoHeThong(maHeThongRap));
      dispatch(getThongTinLichChieuHeThongRap(maHeThongRap));
    }
  }, [maHeThongRap]);

  useEffect(() => {
    if(firstMaCumRap !== "") {
      onRenderListFilmsWithMaCumRap(firstMaCumRap);
    }
  }, [firstMaCumRap]);

  return (
    <MasterLayout id="theaterSystem">
      <TheaterContent>
        <ColImgTheater span={4}>
          {theaterList.map((item, index) => (
            <DivCover key={index} className="theater-cover">
              <ImgTheater
                key={index}
                className={
                  item?.maHeThongRap === active ? "img-active" : "img-theater"
                }
                src={item?.logo}
                aria-hidden={true}
                onClick={() => onGetMaHeThongRap(item)}
              />
            </DivCover>
          ))}
        </ColImgTheater>
        <ColInfoTheater span={8}>
          {cumRap.map((item, index) => (
            <DivCover key={index}>
              <TheaterCard
                className={
                  item.maCumRap === activeTheaterCard
                    ? "theaterCard-active"
                    : ""
                }
                key={index}
                image={onRenderImageTheater()}
                type={onGetTypeTheater()}
                name={item?.tenCumRap}
                address={item?.diaChi}
                listTheaters={item?.danhSachRap}
                onClick={() => onRenderListFilmsWithMaCumRap(item?.maCumRap)}
              />
            </DivCover>
          ))}
        </ColInfoTheater>
        <ColInfoTheater span={12}>
          {listFilm.map((item, index) => (
            <DivCover key={index}>
              <FilmCard
                key={index}
                image={item?.hinhAnh}
                name={item?.tenPhim}
                listFilms={item?.lstLichChieuTheoPhim}
              />
            </DivCover>
          ))}
        </ColInfoTheater>
      </TheaterContent>
    </MasterLayout>
  );
}
export default TheaterSystem;
