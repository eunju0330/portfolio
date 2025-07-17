const wrap = new Swiper('#wrap',{
    direction:'vertical',
    mousewheel:{
        sensitivity:1,
        releaseOnEdges:true,
    },
    speed:900,
    simulateTouch:false,
});

new Swiper('#redesign-swiper', {
    loop: true, // 🔁 루프 켜기
    slidesPerView: 1,
    spaceBetween: 30,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      dragSize: 'auto', // 자동 크기 설정 (슬라이드 개수에 따라)
    },
});

//그래픽디자인
const sns = new Swiper('.graphic_group .swiper#sns-swiper',{
    slidesPerView:4,
    spaceBetween:25,
    autoplay:{delay:0,},
    speed:4000,
    loop:true,
})

const bnr = new Swiper('.graphic_group .swiper#banner-swiper',{
    slidesPerView:4,
    spaceBetween:25,
    autoplay:{delay:0,},
    speed:4000,
    loop:true,
})

//SNS 프로젝트 클릭 시 팝업 실행(클릭한 이미지가 팝업 이미지로 교체)
const snsProject = document.querySelectorAll('#sns-swiper .swiper-slide');
const bannerProject = document.querySelectorAll('#banner-swiper .swiper-slide');
const popup = document.querySelector('.popup_bg');
const popupImg = document.querySelector('.popup_bg .popup img');
/* 모든슬라이드이미지 */
const allSlides = document.querySelectorAll('#sns-swiper .swiper-slide img, #banner-swiper .swiper-slide img');

//팝업 열 때
allSlides.forEach(img => {
    img.addEventListener('click', () => {
        const realSrc = img.dataset.popup || img.src;
        popupImg.src = realSrc;
        popup.style.display = 'block';
        wrap.mousewheel.disable();
    });
});

//popup_bg 닫힘
popup.addEventListener('click',()=>{
    popup.style.display='none'
    wrap.mousewheel.enable();
})

//detail 슬라이드
const detail = new Swiper('.swiper#detail-swiper',{
    loop:true,
    speed:300,
});
const detailNextBtn = document.querySelector('.detail_btn_wrap .detail_next');
const detailPrevBtn = document.querySelector('.detail_btn_wrap .detail_prev');
detailNextBtn.addEventListener('click',()=>{
    detail.slideNext(0);
});
detailPrevBtn.addEventListener('click',()=>{
    detail.slidePrev(0);
});

/* 팝업 */
const detailProject = document.querySelectorAll('.detail_wrap#detail .swiper-slide');
console.log(detailProject,popup);