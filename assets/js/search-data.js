// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "news-i-started-my-research-internship-at-ipads-institute-of-parallel-and-distributed-systems-sjtu-supervised-by-prof-mingkai-dong",
          title: 'I started my research internship at IPADS (Institute of Parallel and Distributed Systems),...',
          description: "",
          section: "News",},{id: "news-our-paper-parer-boosting-erofs-image-creation-with-parallelism-and-reproducibility-was-presented-at-internetware-2024-in-macau",
          title: 'Our paper Parer: Boosting EROFS Image Creation With Parallelism and Reproducibility was presented...',
          description: "",
          section: "News",},{id: "news-i-won-the-silver-medal-in-ccsp-ccf-collegiate-computer-systems-and-program-design-competition-the-final-contest-selected-from-top-scorers-in-csp",
          title: 'I won the Silver Medal in CCSP (CCF Collegiate Computer Systems and Program...',
          description: "",
          section: "News",},{id: "news-i-graduated-with-my-b-eng-degree-from-shanghai-jiao-tong-university-and-was-honored-as-a-shanghai-outstanding-graduate",
          title: 'I graduated with my B.Eng. degree from Shanghai Jiao Tong University and was...',
          description: "",
          section: "News",},{id: "news-our-paper-switchfs-asynchronous-metadata-updates-for-distributed-filesystems-with-in-network-coordination-has-been-accepted-to-eurosys-2026",
          title: 'Our paper SwitchFS: Asynchronous Metadata Updates for Distributed Filesystems with In-Network Coordination has...',
          description: "",
          section: "News",},{id: "news-i-have-been-elected-as-the-chairman-of-the-ccf-sjtu-student-chapter-starting-jan-2026",
          title: 'I have been elected as the Chairman of the CCF SJTU Student Chapter...',
          description: "",
          section: "News",},{id: "news-our-paper-inference-in-the-shadows-taming-memory-bandwidth-contention-in-mobile-llm-inference-with-sereno-has-been-accepted-to-osdi-2026",
          title: 'Our paper Inference in the Shadows: Taming Memory Bandwidth Contention in Mobile LLM...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%69%6E_%74%6F%6E%67@%73%6A%74%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/xtst", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ujdcf9oAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://x.com/tongxin_sjtu", "_blank");
        },
      },{
        id: 'social-xiaohongshu',
        title: 'Xiaohongshu',
        section: 'Socials',
        handler: () => {
          window.open("https://xhslink.com/m/ANKzjmTyeHb", "_blank");
        },
      },{
        id: 'social-zhihu',
        title: 'Zhihu',
        section: 'Socials',
        handler: () => {
          window.open("https://www.zhihu.com/people/santo-39-44", "_blank");
        },
      },{
        id: 'social-ipads',
        title: 'Ipads',
        section: 'Socials',
        handler: () => {
          window.open("https://ipads.se.sjtu.edu.cn/", "_blank");
        },
      },{
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
