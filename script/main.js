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


//graphic
const sns = new Swiper('#sns-swiper', {
    slidesPerView:4,
    spaceBetween:25,
    autoplay:{ delay:0 },
    speed:4000,
    loop:true
});

const bnr = new Swiper('#banner-swiper', {
    slidesPerView:4,
    spaceBetween:25,
    autoplay:{ delay:0 },
    speed:4000,
    loop:true
});

const popup = document.querySelector('.popup_bg');
const popupImg = popup.querySelector('img');
const allSlides = document.querySelectorAll('#sns-swiper img, #banner-swiper img');

// 팝업 열기
function openPopup(src) {
    popupImg.src = src;
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
    wrap.mousewheel.disable();
    sns.mousewheel.disable();
    bnr.mousewheel.disable();
}

// 팝업 닫기
function closePopup() {
    popup.style.display = 'none';
    popupImg.src = '';
    document.body.style.overflow = '';
    wrap.mousewheel.enable();
    sns.mousewheel.enable();
    bnr.mousewheel.enable();
}

// 이미지 클릭 시 팝업 열기
allSlides.forEach(img => {
    img.addEventListener('click', () => {
        openPopup(img.src);
    });
});

// 팝업 클릭 시 닫기
popup.addEventListener('click', () => {
    closePopup();
});

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