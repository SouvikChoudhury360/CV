/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Souvik Choudhury",
  title: "Hi all, I'm Souvik",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having experience in full stack development with React, Node. Also a blockchain enthusiast."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1huwvVw_UwQQsC_62QZfju_Zucu_A2yKF/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SouvikChoudhury360",
  linkedin: "https://www.linkedin.com/in/souvik-choudhury-07275a1b1/",
  gmail: "choudhurysouvik2003@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Ethereum",
      fontAwesomeClassname: "fab fa-ethereum"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IIT MADRAS",
      logo: require("./assets/images/iitmLogo.png"),
      subHeader: "Bachelor of Science in Data Science",
      duration: "2021 - 2024(Expected)"
      //desc: "Participated in the research of XXX and published 3 papers.",
      //descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      schoolName: "Jadavpur University",
      logo: require("./assets/images/juLogo.png"),
      subHeader: "Bachelor of Engineering in Mechanical Engineering",
      duration: "2020 - 2024(Expected)",
      desc: "Current GPA: 9.43"
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Blockchain",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY HANDCRAFTED PROJECTS",
  projects: [
    {
      image: require("./assets/images/evoter.png"),
      projectName: "E-VOTER",
      projectDesc:
        "A Blockchain based online voting app. Built using React for Front-End, Solidity for writing Smart Contracts & Truffle framework for testing and deploying to Blockchain network.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/rollexxx23/e-Voting"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pvhub.png"),
      projectName: "PV-HUB",
      projectDesc:
        "A simple media sharing app powered by Ethereum Blockchain. Built using React for Front-End, Solidity for Smart-Contracts, IPFS for storing media on Blockchain, Truffle for testing and deploying to Blockchain.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/SouvikChoudhury360/PV_Hub"
        }
      ]
    },
    {
      image: require("./assets/images/chaterr.png"),
      projectName: "CHATERR",
      projectDesc:
        "An chatting application built with Flutter and backend powered by Firebase.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/SouvikChoudhury360/Chaterr"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Rankings 🏆 "),
  subtitle:
    "Some of my Contest rankings, Ratings on various platforms & Hackathons I've taken part in...",

  achievementsCards: [
    {
      title: "Google Kickstart",
      subtitle: "Google Kickstart 2021 Round C World Rank: 2936.",
      image: require("./assets/images/kickstartLogo.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1MhgSCIVPqQ73jFNO_aaI35oy-NYBRvcO/view?usp=sharing"
        }
      ]
    },
    {
      title: "Codechef",
      subtitle: "Max Rating: 1749 (3-Star).",
      image: require("./assets/images/codechefLogo.png"),
      footerLink: [
        {
          name: "View Profile",
          url: "https://www.codechef.com/users/souvik360"
        }
      ]
    },
    {
      title: "Codeforces",
      subtitle: "Max Rating: 1374 (Pupil).",
      image: require("./assets/images/codeforcesLogo.png"),
      footerLink: [
        {
          name: "View Profile",
          url: "https://codeforces.com/profile/Souvik360"
        }
      ]
    },
    {
      title: "Reply Challenge (Standard Edition)",
      subtitle: "Reply Challenge (Standard Edition) World Rank: 412.",
      image: require("./assets/images/replyLogo.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1yURkdkjBeE-oID5yK8-mupAXD02KT7RZ/view?usp=sharing"
        }
      ]
    },
    {
      title: "Double Slash Hackathon",
      subtitle:
        "Selected in top 15 teams in Double Slash Hackathon (Devfolio).",
      image: require("./assets/images/doubleslashLogo.png"),
      footerLink: [
        {
          name: "View",
          url: "https://devfolio.co/submissions/syndicater-ea6f"
        }
      ]
    },
    {
      title: "IEMHACKATHON 1.0",
      subtitle: "Selected in top 9 teams in IEMHACKATHON 1.0 (Devfolio).",
      image: require("./assets/images/iemLogo.png"),
      footerLink: [
        {
          name: "View",
          url: "https://devfolio.co/submissions/blockchain-based-voting-evoter-a587"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7384465089",
  email_address: "choudhurysouvik2003@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
