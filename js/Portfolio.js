// Navigation toggle for menu
$(".toggle").click(function () {
  $(".toggle, .overlay, .gnb").toggleClass("active");
});

$(".gnb a").click(function () {
  $(".toggle, .overlay, .gnb").removeClass("active");
});

// 별이 떨어지는 배경 만들기
function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  // 크기를 랜덤하게 설정
  const sizeClass = ["small", "medium", "large"][Math.floor(Math.random() * 3)];
  star.classList.add(sizeClass);

  // 색상도 랜덤하게 설정
  const colorClass = ["color-1", "color-2", "color-3"][
    Math.floor(Math.random() * 3)
  ];
  star.classList.add(colorClass);

  // 랜덤 위치 설정
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDuration = `${Math.random() * 2 + 5}s`; // 애니메이션 속도

  document.querySelector("#feature1").appendChild(star);

  // 별이 떨어지고 나면 DOM에서 제거
  setTimeout(() => {
    star.remove();
  }, 10000);
}

// 일정 시간마다 새로운 별 생성
setInterval(createStar, 300);

const typeit = new TypeIt("#typeit", {
  speed: 80, // 속도
  startDelay: 1300, // 시작 딜레이 1.3초
  waitUntilVisible: true,
  afterComplete: function () {
    // 타이핑이 완료된 후 2초 뒤에 이미지 섹션을 표시
    setTimeout(function () {
      var appUiContainer = document.getElementById("app-ui-container");
      appUiContainer.style.display = "block"; // display를 block으로 바꿈
      setTimeout(function () {
        appUiContainer.style.opacity = "1"; // opacity를 1로 변경하여 서서히 나타나게 함
      }, 50); // 작은 지연 후 opacity 적용
    }, 2000); // 2초 (2000ms) 딜레이

    // 타이핑이 끝난 후 글자가 위로 올라가는 효과
    setTimeout(function () {
      var title = document.getElementById("typeit");
      title.classList.add("title-move-up"); // 글자를 위로 이동시키는 클래스 추가
    }, 1000); // 타이핑 완료 후 1초 후에 위로 이동
  },
});

typeit
  .type("안녕하세요")
  .type(" ")
  .type('<strong class="title-color">Front-end Developer</strong>')
  .type(" ")
  .type("<strong>NOH SU BIN </strong>", { delay: 300 })
  .delete(11, { delay: 400 })
  .type("<strong> 노수빈 </strong>입니다 !", { speed: 80 })
  .type(" ")
  .go();

// #app-ui-container 클릭 시 About 섹션으로 스크롤
document
  .getElementById("app-ui-container")
  .addEventListener("click", function () {
    document.getElementById("feature2").scrollIntoView({ behavior: "smooth" });
  });
