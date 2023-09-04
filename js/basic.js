    // var swiper = new Swiper(".mySwiper", {
    //   direction: "vertical",
    //   slidesPerView: "auto",
    //   freeMode: true,
    //   scrollbar: {
    //     el: ".swiper-scrollbar",
    //   },
    //   mousewheel: true,
    // });
  



        // 내비게이션 바 요소 선택
        const navbar = document.getElementById("navi");

        // 스크롤 이벤트 리스너 등록
        window.addEventListener("scroll", () => {
            // 현재 스크롤 위치 확인
            const scrollY = window.scrollY;

            // 스크롤을 내릴 때, 배경색과 텍스트 색을 변경
            if (scrollY > 0) {
                navbar.style.backgroundColor = "white";
                navbar.style.color = "black";
            } else { // 스크롤을 올릴 때, 다시 초기 색상으로 변경
                navbar.style.backgroundColor = "transparent";
                navbar.style.color = "white";
            }
        });
    