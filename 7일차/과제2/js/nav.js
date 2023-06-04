const toggleMenu = (toggleId, navListId) => {
  const toggle = document.getElementById(toggleId);
  const navList = document.getElementById(navListId);
  const toggleIcon = toggle.getElementsByTagName("i")[0];

  if (toggle && navList) {
    // toggle 클릭 시 아이콘 나오도록
    toggle.addEventListener("click", () => {
      navList.classList.toggle("show-menu");
      toggleIcon.classList.toggle("bx-menu");
      toggleIcon.classList.toggle("bx-x");
    });
  }
};
toggleMenu("nav-toggle", "nav-list");