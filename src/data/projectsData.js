const projects = [
  {
    id: 1,
    title: "Chews",
    description:
      "A mobile-first web app to help with decision-making and recipe-finding at mealtimes. Created in 4 weeks in a 6-person team as my School of Code final project.",
    tech: "Next.js | Tailwind CSS | Chakra UI | Node.js | Express | PostgreSQL | Auth0 | Vercel | Heroku",
    buttons: [
      { link: "https://chews-dev.vercel.app/", text: "View App" },
      {
        link: "https://github.com/simonpartridge86/Chews-App-Frontend",
        text: "GitHub Repo",
      },
    ],
    images: [
      {
        src: "https://i.postimg.cc/XNCGjW9J/Chews-Screenshots.png",
        alt: "chews app home page",
      },
    ],
  },
  {
    id: 2,
    title: "SoCial",
    description:
      "A single-page React app created to help School of Code bootcampers create online meetups. Created during a one-week mini-project in a 4-person team during my School of Code bootcamp.",
    tech: "React | CSS | Node.js | Express | PostgreSQL | Netlify | Railway",
    buttons: [
      {
        link: "https://socialbymishmash.netlify.app/",
        text: "View App",
      },
      {
        link: "https://github.com/simonpartridge86/SoCial-App-Frontend",
        text: "Github Repo",
      },
    ],
    images: [
      {
        src: "https://i.postimg.cc/rpqyNzjH/Screenshot-2022-09-13-at-23-22-25.png",
        alt: "social app",
      },
    ],
  },
  {
    id: 3,
    title: "Portfolio Site",
    description:
      "This website! Created as a portfolio site to showcase my projects to prospective employers.",
    tech: "React | Styled Components | Netlify",
    buttons: [
      {
        link: "https://github.com/simonpartridge86/my-portfolio-site",
        text: "GitHub Repo",
      },
    ],
    images: [
      {
        src: "https://i.postimg.cc/kMxd57qY/Screenshot-2022-09-13-at-23-20-35.png",
        alt: "simon partridge portfolio site",
      },
    ],
  },
  {
    id: 4,
    title: "Randomization",
    description:
      "An NPM package that reduces the syntax for random number generation, as well as providing other randomization functionality. Created in a team of 3 during a 5-hour hackathon.",
    tech: "JavaScript | Jest",
    buttons: [
      {
        link: "https://github.com/samsonhumber/simple-randomization",
        text: "GitHub Repo",
      },
      {
        link: "https://www.npmjs.com/package/simple-randomization",
        text: "View Package",
      },
    ],
    images: [
      {
        src: "https://i.postimg.cc/xT81VpF5/Screenshot-2022-10-14-at-17-10-57.png",
        alt: "NPM simple randomization",
      },
    ],
  },
];

export default projects;
