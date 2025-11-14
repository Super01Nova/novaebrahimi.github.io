// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-has-been-published-in-the-virtual-worlds-journal-i-am-honored-that-my-work-introducing-the-socio-spatial-embodiment-model-for-conceptualizing-learning-in-virtual-worlds-is-featured-on-the-front-page-of-the-journal",
          title: 'Our paper has been published in the Virtual Worlds Journal. I am honored...',
          description: "",
          section: "News",},{id: "news-i-am-attending-democon-2025-in-boca-raton-florida-where-i-will-present-three-research-papers-examining-qualitative-comparative-studies-of-educational-practices-in-virtual-worlds-and-video-conferencing-platforms-i-am-honored-to-be-one-of-only-two-students-selected-to-receive-travel-funding-for-this-conference-based-on-my-research-contributions-and-academic-cv-i-look-forward-to-sharing-my-findings-with-the-educational-technology-community-and-engaging-with-fellow-researchers-who-are-advancing-the-future-of-digital-learning",
          title: 'I am attending Democon 2025 in Boca Raton, Florida, where I will present...',
          description: "",
          section: "News",},{id: "news-i-am-attending-the-ieee-frontiers-in-education-conference-2025-in-nashville-tennessee-where-i-will-present-a-paper-on-effective-teaching-strategies-in-virtual-worlds-for-engineering-and-computing-education-this-research-is-part-of-my-ongoing-work-on-design-patterns-aimed-at-enhancing-learning-experiences-in-virtual-worlds-i-look-forward-to-engaging-with-educational-innovation-research-and-reconnecting-with-scholars-from-last-year-s-conference",
          title: 'I am attending the IEEE Frontiers in Education Conference 2025 in Nashville, Tennessee,...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
