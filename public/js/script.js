const menu = document.getElementById("menu");
const btn = document.getElementById("menu-toggle");
const icon = document.getElementById("icon");
const links = document.querySelectorAll("#link");

function toggleIcon() {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
}

btn.addEventListener("click", () => {
  menu.classList.toggle("translate-y-48");
  toggleIcon();
});

links.forEach((item) => {
  item.addEventListener("click", () => {
    links.forEach((item) => {
      item.classList.remove("text-blue-700");
    });
    item.classList.add("text-blue-700");
  });
});

function checkWindowSize() {
  if (window.innerWidth < 768) {
    if (icon.classList.contains("fa-xmark")) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }

    links.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.toggle("translate-y-48");
        toggleIcon();
      });
    });
  } else {
    menu.classList.remove("translate-y-48");
  }
}
// const mediaQuerySm = window.matchMedia("(max-width: 768px)");
// const mediaQueryMd = window.matchMedia("(min-width: 768px)");
// function handleTabletChange(e) {
//   if (e.matches) {
//     links.forEach((link) => {
//       link.addEventListener("click", () => {
//         menu.classList.toggle("translate-y-48");
//         toggleIcon();
//       });
//     });
//   }
// }
// mediaQuerySm.addListener(handleTabletChange);
// handleTabletChange(mediaQuerySm);

window.addEventListener("resize", function () {
  checkWindowSize();
});

checkWindowSize();
