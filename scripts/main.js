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
const sns = new Swiper('.graphic_group .swiper#sns_swiper',{ //css에서 wrapper에 linear줘서 일정하게 흘러가게 할 수 있다.
    slidesPerView:4,
    spaceBetween:25,
    autoplay:{delay:0,},
    speed:4000,
    loop:true,
})

const bnr = new Swiper('.graphic_group .swiper#banner-swiper',{ //css에서 wrapper에 linear줘서 일정하게 흘러가게 할 수 있다.
    slidesPerView:4,
    spaceBetween:25,
    autoplay:{delay:0,},
    speed:4000,
    loop:true,
})

//SNS 프로젝트 클릭 시 팝업 실행(클릭한 이미지가 팝업 이미지로 교체)
const snsProject = document.querySelectorAll('#sns_swiper .swiper-slide');
const popup = document.querySelector('.popup_bg');
console.log(snsProject,popup); //4개뜨는지확인

//팝업 열 때
for(let sns of snsProject){ //만든 변수4개를 sns에 반복으로 담겠다.
    sns.addEventListener('click',()=>{
        popup.style.display = 'block'; //none->block
        //클릭한 이미지 경로 - 스와이프슬라이드 안에 있는 img의 src를 나오게 하고싶음
        popup.children[0].children[0].src = sns.children[0].src; //.popup_bg의 변수 popup, for문으로 했으니 몇개를 추가하든 다 이걸로 동작함.
        //팝업 실행 시 전체 수직 Swiper 스크롤 기능 막기
        wrap.mousewheel.disable(); //비활성화=disable //스크롤 풀기 enable() //wrap은 맨 위에서 만든 것
    })
}

//이제 popup_bg 닫히는 거 할 차례
popup.addEventListener('click',()=>{
    popup.style.display='none'
    wrap.mousewheel.enable();
})