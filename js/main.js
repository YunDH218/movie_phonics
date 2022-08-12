const { default: Swiper } = require("swiper")

const koficReq = {
  key: "2a2f18f4a45e15619588126b2a2b5c0d",  // 발급받은키 값을 입력합니다.
  targetDt: "20220722", // 조회하고자 하는 날짜를 yyyymmdd 형식으로 입력합니다.
  // itemPerPage | 문자열	| ROW 의 개수를 지정합니다.(default : “10”, 최대 : “10“)
  // multiMovieYn |	문자열 |	다양성 영화/상업영화를 구분지어 조회할 수 있습니다. “Y” : 다양성 영화 “N” : 상업영화 (default : 전체)
  // repNationCd | 문자열 |	한국/외국 영화별로 조회할 수 있습니다. “K: : 한국영화 “F” : 외국영화 (default : 전체)
  // wideAreaCd |	문자열 | 상영지역별로 조회할 수 있으며, 지역코드는 공통코드 조회 서비스에서 “0105000000” 로서 조회된 지역코드입니다. (default : 전체)
}

const NRslides = document.querySelectorAll(".new-and-recommend .contents-container .swiper-slide img")
for (let index = 0; index < NRslides.length; index++) {
  let NRslide = NRslides[index]
  NRslide.src = "https://movics.netlify.app/movie_poster2.915aa8d1.jpg"
}

const NRSwiper = new Swiper(".new-and-recommend .swiper-container", {
  slidesPerView: "auto",
  loop: true,
})