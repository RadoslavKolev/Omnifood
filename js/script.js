//* Sets the current year to the footer
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//* Make mobile navigation work
const headerEl = document.querySelector("header");
const btnNavEl = document.querySelector(".btn-mobile-nav");

// "toggle" will add the class if it doesn't exist or vise versa
btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

//* Implementing smooth scrolling animation
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
  } 
  
  // Scroll to other sections
  if (href !== "#" && href.startsWith("#")) {
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({
      behavior: "smooth"
    });
  }

  // Close mobile navigation
  if (link.classList.contains("main-nav-link")) {
    headerEl.classList.toggle("nav-open");
  }
}));

//* Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(entries => {
  const entry = entries[0];

  if (!entry.isIntersecting) {
    // If we add that class to the header, it makes the page "jump"
    document.body.classList.add('sticky');
  } else {
    document.body.classList.remove('sticky');
  }
}, {
  root: null, // In the viewport
  threshold: 0, // It will fire when 0% of the Hero section is inside the viewport
  rootMargin: '-80px' // It's overlapping the Featured in section
});

obs.observe(sectionHeroEl);

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

checkFlexGap();
