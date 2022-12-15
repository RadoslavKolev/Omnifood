//* Sets the current year to the footer
const setCurrentYear = () => {
  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
};

//* Make mobile navigation work
const openMobileNavBar = () => {
  const headerEl = document.querySelector("header");
  const btnNavEl = document.querySelector(".btn-mobile-nav");

  // "toggle" will add the class if it doesn't exist or vise versa
  btnNavEl.addEventListener("click", () => {
    headerEl.classList.toggle("nav-open");
  });
};

//* Implementing smooth scrolling animation
const smoothScrolling = () => {
  const allLinks = document.querySelectorAll("a:link");
  
  allLinks.forEach(link => link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === '#') {
      // Scroll back to top
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else if (href !== "#" && href.startsWith("#")) {
      // Scroll to other sections
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth"
      });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-list")) {
      headerEl.classList.toggle("nav-open");
    }
  }));
};

//* Fixing flexbox gap property missing in some Safari versions
const checkFlexGap = () => {
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

setCurrentYear();
openMobileNavBar();
smoothScrolling();
checkFlexGap();

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/