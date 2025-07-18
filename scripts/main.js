document.addEventListener('DOMContentLoaded',()=>{
    const wrap=new Swiper('#wrap',{
        direction:'vertical',
        mousewheel:true,
        speed:900,
        simulateTouch:false,
    });

    //redesign
    new Swiper('#redesign-swiper', {
        loop:true,
        slidesPerView:1,
        centeredSlides:true,
        spaceBetween:30,
        scrollbar: {
            el:'.swiper-scrollbar',
            draggable:true,
            dragSize:'auto'
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

    //detail
    const detailSwiper = new Swiper('#detail-swiper', {
        loop:true,
        speed:300
    });

    const detailNextBtn = document.querySelector('.detail_btn_wrap .detail_next');
    const detailPrevBtn = document.querySelector('.detail_btn_wrap .detail_prev');

    detailNextBtn.addEventListener('click', () => {
        detailSwiper.slideNext(0);
    });
    detailPrevBtn.addEventListener('click', () => {
        detailSwiper.slidePrev(0);
    });

    /* 팝업 */
    const detailPopup = document.querySelector('.detail_wrap .popup_bg');
    const detailPopupImg = detailPopup.querySelector('img');
    const detailSlides = document.querySelectorAll('#detail-swiper img');

    // 팝업 열기
    function openDetailPopup(src) {
        detailPopupImg.src = src;
        detailPopup.style.display = 'block';
        document.body.style.overflow = 'hidden';
        wrap.mousewheel.disable();
    }

    // 팝업 닫기
    function closeDetailPopup() {
        detailPopup.style.display = 'none';
        detailPopupImg.src = '';
        document.body.style.overflow = '';
        wrap.mousewheel.enable();
    }

    // 이미지 클릭 시 팝업 열기
    detailSlides.forEach(img => {
        img.addEventListener('click', () => {
            openDetailPopup(img.dataset.popup);
        });
    });

    // 팝업 클릭 시 닫기
    detailPopup.addEventListener('click', () => {
        closeDetailPopup();
    });

    //nav
    document.querySelectorAll('.right_nav a').forEach((link,idx)=>{
        link.addEventListener('click',e=>{
            e.preventDefault();
            wrap.slideTo(idx,1000);
        });
    });
});