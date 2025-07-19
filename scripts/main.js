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
        slidesPerView: 4,
        spaceBetween: 25,
        autoplay: { delay: 0 },
        speed: 4000,
        loop: true
    });

    const bnr = new Swiper('#banner-swiper', {
        slidesPerView: 4,
        spaceBetween: 25,
        autoplay: { delay: 0 },
        speed: 4000,
        loop: true
    });

    const popupSns = document.querySelector('.popup_bg.sns_popup');
    const popupBnr = document.querySelector('.popup_bg.banner_popup');
    const popupImgSns = popupSns.querySelector('img');
    const popupImgBnr = popupBnr.querySelector('img');
    const snsSlides    = document.querySelectorAll('#sns-swiper img');
    const bannerSlides = document.querySelectorAll('#banner-swiper img');

    function openSnsPopup(src) {
        popupImgSns.src = src;
        popupSns.style.display = 'block';
        document.body.style.overflow = 'hidden';
        wrap.mousewheel.disable();
        sns.mousewheel.disable();
    }

    function openBnrPopup(src) {
        popupImgBnr.src = src;
        popupBnr.style.display = 'block';
        document.body.style.overflow = 'hidden';
        wrap.mousewheel.disable();
        bnr.mousewheel.disable();
    }

    // 팝업 닫기
    function closePopup(popupElement, swiperInstance) {
        popupElement.style.display = 'none';
        document.body.style.overflow = '';
        wrap.mousewheel.enable();
        swiperInstance.mousewheel.enable();
    }

    // 팝업 열기
    snsSlides.forEach(img => {
    img.addEventListener('click', () => openSnsPopup(img.src));
    });
    bannerSlides.forEach(img => {
    img.addEventListener('click', () => openBnrPopup(img.src));
    });

    // 팝업 클릭 시 닫기
    popupSns.addEventListener('click', () => closePopup(popupSns, sns));
    popupBnr.addEventListener('click', () => closePopup(popupBnr, bnr));

    
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