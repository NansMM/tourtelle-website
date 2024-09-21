const header = document.querySelector("header");
const logo = document.querySelector("header svg");

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        header.classList.remove("bg-white");
        header.classList.remove("dark:bg-gray-800");
        header.classList.add("bg-transparent");
        header.classList.remove("shadow-md");
        logo.classList.remove("fill-red-600");
        logo.classList.add("fill-gray-800");
        logo.classList.add("dark:fill-white");
      } else {
        header.classList.remove("bg-transparent");
        header.classList.add("bg-white");
        header.classList.add("dark:bg-gray-800");
        header.classList.add("shadow-md");
        logo.classList.remove("fill-gray-800");
        logo.classList.remove("dark:fill-white");
        logo.classList.add("fill-red-600");

      }
    });
  },
);

scrollObserver.observe(document.querySelector("#top"));
