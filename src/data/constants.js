const projectImages = require
  .context("../images/projects", false, /\.(png|jpe?g|svg)$/)
  .keys()
  .reduce((imgs, path) => {
    // strip the leading "./" and file extension from the key
    const key = path.replace(/^\.\/(.*)\.(png|jpe?g|svg)$/, "$1");
    imgs[key] = require(`../images/projects/${key}.${path.split(".").pop()}`);
    return imgs;
  }, {});

export const Bio = {
  name: "Santosh Luitel",
  roles: [
    "Software Developer",
    "Student",
    "Programmer",
  ],
  description:
    "Welcome to my personal portfolio. I'm Santosh Luitel Software Developer and M.S. student in Computer Science at the University of South Dakota. Passionate about crafting scalable web applications, AI-driven solutions, and DevOps pipelines. Feel free to explore my projects, GitHub, and connect with me!",
  github: "https://github.com/santosh5541",
  resume:
    "https://drive.google.com/file/d/15UBLWC2fskq0ZIC1wRYuFW92udhTlCOt/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/santosh-luitel-b31b62201/",
  twitter: "https://twitter.com/santosh_luitel",
  insta: "https://www.instagram.com/santoshluitel/",
  facebook: "https://www.facebook.com/santosh.luitel",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "Next Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
      {
        name: "Angular Js",
        image:
          "https://camo.githubusercontent.com/8886130b3d8aba95dbdd7c4f9a41029606424cc06d1873c1ced87dd55a222fef/68747470733a2f2f616e67756c61722e696f2f6173736574732f696d616765732f6c6f676f732f616e67756c61722f616e67756c61722e737667",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Flutter",
        image:
          "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Graph Ql",
        image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Flask",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png",
      },
      {
        name: "Django",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFFyY16N5NRhzoG24RqB7x8Ok2t8Bdgs-tuMsOBXS2Q&s",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "SpringBoot",
        image:
          "https://img.icons8.com/?size=100&id=90519&format=png&color=000000",
      }
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "AWS",
        image:
          "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
      },
      {
        name: "Google Cloud",
        image:
          "https://static-00.iconduck.com/assets.00/google-cloud-platform-logo-icon-2048x1824-pg4wzspq.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Jenkins",
        image:
          "https://toppng.com/uploads/preview/jenkins-logo-11609365847mufysaivph.png",
      },
      {
        name: "Nginx",
        image: "https://download.logo.wine/logo/Nginx/Nginx-Logo.wine.png",
      },
      {
        name: "Kubernetes",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/00/Kubernetes_%28container_engine%29.png",
      },
    ],
  },
  {
    title: "Android",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Kotlin",
        image:
          "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
      },
      {
        name: "Android Studio",
        image:
          "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
      },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Tenserflow",
        image:
          "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png",
      },
      {
        name: "Keras",
        image:
          "https://miro.medium.com/v2/resize:fit:600/1*DKu_54iqz6C-p6ndo7rO3g.png",
      },
      {
        name: "Jupyter",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png",
      },
      {
        name: "Google Colab",
        image:
          "https://assets.stickpng.com/images/63c2e4c9c4baad4ce22bf9ef.png",
      },
      {
        name: "Sk Learn Kit",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
      },
      {
        name: "Figma",
        image:
          "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://careerinnepal.com/uploads/company/logo/7b267b83c441c2a8282420811234d1ea.png",
    role: "IT Support Engineer",
    company: "Casino Palace Pvt Ltd",
    date: "Feb 2022 - Nov 2022",
    desc: " I served as IT Support Engineer, where I configured and maintained network devices—including access points and firewalls—debugged Java applications while maintaining underlying databases and deploying web services, provided comprehensive troubleshooting for hardware, software, and network issues, and monitored and secured the IT infrastructure using Cloudflare and VNC servers.",
    skills: [
      "Docker",
      "Jenkins",
      "Linux",
      "Windows Server",
      "Linux Server",
      "HTML",
      "CSS",
      "JavaScript",
      "Java"
    ],
  },
  {
    id: 1,
    img: "data:image/png;base64,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",
    role: "Network Administrator & Java Software Enginee",
    company: "NIC ASIA Capital Ltd.",
    date: "Dec 2022 - April 2023",
    desc: "I served as a Network Administrator & Java Software Engineer, where I developed Java‑based web applications using Spring Framework, Hibernate, and RESTful APIs, automated testing and deployment tasks with Selenium while managing version control via Git, monitored and maintained security operations across firewalls and network devices, and provided technical support alongside thorough documentation of network and system changes.",
    skills: [
      "Java",
      "Selenium",
      "Nginx",
      "JavaScript",
      "Linux",
      "Windows Server",
      "Linux Server"
    ],
  },
  {
    id: 2,
    img: "https://media.licdn.com/dms/image/v2/C510BAQFPPKmbAC3Qqg/company-logo_200_200/company-logo_200_200/0/1630620476022?e=2147483647&v=beta&t=rcu1VOG3ufWQNvaCltQTzrw-EPaLu0RJS75fDlI-qQE",
    role: "Software Engineer",
    company: "Code Fusion Technologies Pvt. Ltd",
    date: "May 2023 - Oct 2024",
    desc: "At Code Fusion Technologies Pvt. Ltd. I served as a Software Engineer, where I developed robust backend services using Java, Spring Boot, and MongoDB, designed and implemented scalable microservices architectures, and managed server deployments across Linux and cloud environments.",
    skills: [
      "Android",
      "Java",
      "Kotlin",
      "javascript",
      "Devops",
      "React",
      "Figma",
      "Mongodb",
      "microservices"
    ],
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTHH85rqeQFzAwlWQvMpGs5P5jgXAeluwNzA&s",
    role: "Software Engineer",
    company: "F1Soft International Pvt. Ltd",
    date: "Oct 2024 - Dec 2024",
    desc: "At F1Soft International Pvt. Ltd. (Oct 2024 – Dec 2024), I served as a Software Engineer, where I developed and maintained both backend and frontend components for mobile banking products using AngularJS, Java, Spring Boot, and a microservices architecture, and integrated Spring Security to enforce robust authentication and optimize overall performance.",
    skills: [
      "ReactJS",
      "Angular",
      "Microservices",
      "SQL",
      "MongoDb",
      "Jenkins",
      "Docker",
      "AWS",
      "RestApi",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "data:image/jpeg;base64,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",
    school: "University of South Dakota",
    date: "Expected 2026",
    grade: "waiting",
    desc: "I am currently pursuing an M.S. in Computer Science at the University of South Dakota.",  
    degree: "M.S. in Computer Science",
  },
  {
    id: 1,
    img: "data:image/png;base64,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",
    school: "Tribhuvan University",
    date: "January 2021",
    grade: "First Division",
    desc: "I completed my Bachelor's degree in Information Management at Tribhuvan University in January 2021.",  
    degree: "Bachelor of Information Management",
  },
  {
    id: 2,
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhMVFhUXFRcXGBgXFRoYHRcYGBcYFxgZFxoYHSggGBolGxgWIzEhJSorLi4uFx8zODMsNygtLi0BCgoKDg0OGxAQGzImICUtLS0tNS0tLy0vLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABKEAABAwIDBAYFCAYKAQUBAAABAAIDBBEFEiEGMUFREyJhcYGRBzIzobEUQlJicoKSwSNTorLR8BUlNDVDY3OzwuGTRFR0o9IW/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAIEAQMGBQf/xABCEQACAQIDBAcGBAUCBAcAAAAAAQIDEQQhMQUSQVETMmFxgZGxFCKhwdHwM0JS4QYjYnLxFTQkU6LCNUNUY4KSsv/aAAwDAQACEQMRAD8A7igCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIC1TVLJBmje14uRdpBF2mxFxxBFlhNPQlKMou0lYurJEIAgCAIAgCAIAgCAIAgCAIAgCAIAgCA5vtdtxPRYgYwBJD0UZdGdCCcxJa7gbW0NwqtSs4TtwPfwOy6eJwu9e0rvPy1Rs+z+2dHV2DJA2T9XJ1XeHB3gStsK0ZaHnYnZ1fD9ZXXNZr9vE2FbSiEAQBAEBG41j1PStzTytZyG9zvstGpUZTjHU30MLVrytTjf75nJdsPSLNUgxQXhh3E367x9Yj1B2Dz4KlUruWSyR1GB2PTo2nV96XwX1IHAMeqqCS8d23sXRPBDXgjQlp1Gm5w+C1wnKDyLuJwlHFw97Pk1qvvkdd2Z2/paoBrnCGX6DzYE/Udud7j2K7CvGXecti9lV8PmlvR5r5rgbatx5gQBAEAQGFieKwU7c88rI2/WNr9w3k9yjKSjqbaVCpWlu04tvsOabVelNzg6OiaWix/SvGv3GHd3u8lVqYn9J0OD2Ek1LEPwXzf08zqdJJmYx3NrT5gFW1oc3NWk0XVkiEAQBAEAQBAEAQBAcI9Krv6yl7GRfuArz8R+IdpsVf8JHvZZrNg6xsbJY2CZro2SWjPXaHNDrOYdee6+5YdCVrrMlT2th3Nwk91ptZ6Zdv1MfD9rMQpTkbNILf4cozW7LPF2+FliNWccrmyps/C4hb26u9ftkbNReluoA/S08T+1rnR/HMtqxMuKPOqbApPqTa71f6Eiz0vstrSOv2Sg/FoU/auw0P+H5cKi8ixP6XnfMpAO101/cGfmovFckTj/D6/NU8l+5ruKekfEJRYSMhB/VNsfxOJI8LLXLETfYX6OxsLTzacu/6KxgYbszW1ZMuRwadXTTuLW25lz9XDuuoxpyln6m6rjsNh1uXz5Rz+CyJFs+H0GsVq6pG57haCM8C1v+IRzvw0LVK8IaZv4FdwxWL6/8uHL8z+n3qeN2tZVDo8Ti6VtzlmiAZLFflbRzRy7PnJ0qllNGXs+VD3sJKz4p5p/v95Fmq2Le9ploZWVcX1OrI3sfGdb92vYFh0b5xzRKG04xe5iIuEu3R9z++8xcN2pr6M5GyyNt/hyjMB2ZX6t8LLEak45XNtXA4XErecU+1ftkbRReluoA/S08TzzY90fuIctqxMuKPOqbApt+5NrvV/oSDfS8zjSPv2Sg/wDEKftS5Gh/w/LhUXkY9R6Xn/MpGjtdMT7gwfFReKfBGyP8Pr81T4fua9ifpIxCUWEjIR/lMsfxPLiPCy1yrzfGxeo7GwsM2nLvf0sR9Ds9X1jukEcjr75ZnENtzzv3juuoqnOeZuqYzC4Zbt0uyP0XzMHaLCXUs76d7mucwNuW3t1mNfpfUgZrX7FGpFxdjfhMQsRTVSKsnf4Ox9E4Mb08J/yo/wBwL0o6I4OtlUl3v1MxSNQQBAEAQBAEAQBAEBwX0qf3lP8AZj/2wvOxH4jO22N/tI979S9txVyRT0r4pHscKCn1Y4tPz+SzVbUlbkjXs6nCpSqKaTW/LXwLEW3VSW5KmOCqbymiBPg5tvgsdNLjmTlsqinvUm4PsZV/TGFye1w58Z5wTm34XWCzvU3rHyZj2bGw6lZP+5f5KekwU/4deOzNEfzS9LtM22iuMH5norMGbupauTsfM1o/Ycl6XJjo9oS1qRXcvqj0bYsi/slBTQng9wMrx3F1vzTpUurFIx/psqn41WUuzRELi+O1NSf08z3j6JNmjuaLN9y1ynKWrLlDCUaH4cUvXzI5RLAQF2mqHxuD43uY4bnNcWkeIWU7ZojOEZrdkrrtNkh26qC0MqY4KpnKaME+Dh8bFbOmlpLM86WyqSe9Sbg+xnv9LYVJ7TD5IzzgnNvBrrALO9TesfIx7PjodSsn/cv8nnSYL9CvHZmiP5pel2mbbRXGHxPRXYM3VtJVSHlJMGj9grG9S5MdFtCWtSK7l9Uet2yZF/ZKClhPB7mmV47nOss9LbqxSMf6bKp+NVlLs0XzIbGdoaqpB6ed7x9G+Vv4W2C1znKWrLlDB0KP4cUvXzZLelD+8aj7MX+yxTr9dlXY/wDtIePqzt2Bf2aD/Rj/AHAr8eqjjq/4su9+pnKRqCAIAgCAIAgCAIAgOEelYf1lL2sj/cC8/Edc7TYr/wCEj3v1Le3+r6M88Ppv+axV1XcjOzOrUX/uS+Rqy1HphAEAQBAEAQBAEAQBAEAQBAeOF9EGhs/pPP8AWVT2dEP/AKI1txHXZ52x/wDaQ8f/ANM7jgotTwj/ACo/3Ar8dEcbW/El3v1M1SNQQBAEAQBAEAQBAEBw/wBLsdsQJ+lDGf3h+SoYjrnY7Dd8L4v5GLtuLxYc7nQxj8On5rFXSPcbNnZTrx/rZgw7MyOpTWCanETTlddz8zX2ByECP1usOzXeoqm3HeurG6WOjGt0G7Le7la3PXQxMBwh9VKIY3xtefVEhcMxAJIBa062BOtlGEXJ2RtxOIjh4b8k2uzh8USVDsfLLUPpo56Yyx3zNzvFy02cGno9S071NUm3upq5XqbRhTpKrKEt19i8OPHgYFBgjpqg0zJYs9yA4l4a4jeGnJe+/eBuKioXlu3N1TFRp0emlF28Lr4mVh2yz5+m6OopiIAXPOd9soFy9p6PVuh17O5ZVNu9msjXVx8aW7vwl72mS15a6mPU4GWRsl6enfG6ToszHPIY7KXdcFgIFhwBWHCyvdGyGKUpuG5JNK9mlmuzMkpdhqhsrIOmpTK9mdjOkcC9uti27ANcp48FLoZXtdXK0dq0nB1N2W6nZuyy+JHYRs9NUTupQ6OOZpIySlzSS2+YDK06gAnu3XUYwcnu8SxXxlOjSVVpuL4r/KLlTsxM2KSZj4pmROyy9E8kxnddzXNabdousum7N8iMMfTlONNpxcs1da+TZYosDe+L5Q98cMObKJJC7ru4iNrGuc+1tbC3kVhQbV+BOpioxqdFFOUtbK2Xe20kMWwKWBjJSWSQyepLE4uYSL3abgFrtDoRwPIpKDSvwM0MXCrJws1Jap6/4FFgj3xfKHvjhhzZRJIXdd3FrGsa5zyOwWRQbV+AqYqManRRTlLWy4LtbaSPcVwGWBjJszJIZNGSxkuYTrdpuA5rtDoRwKSg0r8DFDFwqycLNSWqepexTZmSCnZUumgdHJ7PI55c/nYFg3cbkblmVNpXuQo46FWq6SjJNa3Sy+JF0LM0sbecjB5uAUFqi1VdoSfY/Qm/SQ++I1R+s0eUTB+SnX67KeyVbCU/H1Z3uhZaNg5MaPIBeitDiJu8m+0vrJEIAgCAIAgCAIAgCA4z6ZorVkTvpQD9l7/4qjiV7yOs2DK9CS5S+SIrak5qHDH/AOVMz8D2gfmoVOpEs4PLE149qfmmZND/AHDUf/Nb+7Csr8F9/wBDXU/8Th/Y/wDuI/0d/wB5U323f7b1Gj10WNqf7SfcvVHrsTNNi0k/BlZMXfYMr2v/AGSU3t2pftMdB0+BVPnBW77KxMbT4f8AJKysqG2DTGDCfr1d2kjuDag/dC2TjuSlLy8ftlPCVvaKFKk9b+93Qz+N4os+jZrTHiAccrfkbgSBmyizrkNuL2HC4usUPzdxs2s3v0Wld7/0NfxqGnZDEKed0uYyGS4LLOblDLx5jbql1ncblappJKzL2HlVlVk6sbWtbj352XZkdKrcK6XEaWYSNvBRRS9CL9JJlMlslwG2JIHrX7NQVbcb1E+SOdp4jcwlSnbrTavwV7a8fgarsXiBqMbZOW5TI+Z2X6P6GSw7wLLTSlvVbnqY+kqOznTTvZL1RXHWw0UFe0zRyzVWZjI47uyNu+7pCQA09c6b9PJdQUs82R6OpiqlFqLUYWbbyvppz0KvSbEGMoI2eybTdXlfqXPabZfNZrq26lyMbHlvSrSl1nLP4jZyz8Fr2Seqx4ey/B9mEW5dYD8R5rEM6Ukxi7x2jRcdWrPuz+Q9JMQZDh0bPZimJbyJIjue/cfFZrqyiuwbIblUrylrvfUbLWfg+Isf6rCHtvwflBFvFrfNYp50pDG+7tCjKOryfdcsbU/3VhndKlT8OJswX++r+BruzUeespm86iLy6RpPuutcFeS7y/jJbuHqP+l+hl7Tu6XEZx9Kqczyf0f5LM85vvNWEXR4OHZG/wALn0O0WFl6Rwh6gCAIAgCAIAgCAIAgOUem2Hr0r+bZW+RYR8SqeKWaZ038PyyqR7n6mt4j1sHpXfq6qaM9mYOetT/CXeX6Xu7QqLnFPyshQY9RNw91E8VF3yCVz2iLR4DBZoLtW9TjrqiqQ3N1iphMS8Uq8d3JWSd9M9ctcyvCtoKGCemkYyfJTh51EeeSSS4JeQ6waG2tbl4pGpBNPkYrYPFVac4yavK3OyS5ZEDj1ZFLUSyxZw2R7n2kyghz3Fzh1SQRrotc5JttF7C06lOlGE7XStlfh3khtBtOamnpIDe8DC15JHXcOqw8zZg48XuU51d6KXIr4XA9BVqVF+Z5di1fx9DI2Sx+lpo6hsrZnOnjdEcmSzWkEXBc65dryWadSMU78TXjsJXrzg4WSi75318jDNVQNhfGwVBdI5mZ72xXZG05iIwHesTbeeCjeFrfQ3dHi5VFOW7leyV82+eRMYxtpEaqnq6YStkhY2ItkyZXxtzXF2km5zEctx4Kcqy3lKPAqUNmVFRnRq2tJ3ur3Ty59x5RbS0EeIfLmRzt9Z3RAR2Ej2ua8g5vV61+8ngiqwU95CeCxU8L7O3Hvz0Wa4faNYxWeJ0r3w58jnFwD8ocC4kkdUkW13rVJpvI9OhCpGmoztdZZX+ZMt2hhnpY6WsD7w+xmjyuc1pFsj2uIu2wA0PzRy1n0kXFRlw0KbwdSlXdahb3usnfXmmixX49GKUUVMHCIv6SV8ls8r9LXDSQ1gsNLncPHDqLd3Y6E6WEm63T1etayS0S+bMiPaKGakZSVgf+hP6GaPKXMG7I9riMzbaaHgOSz0icd2XAg8FUpV3WoW97rJ3s+1NFisx2NtL8ipg8ROf0kz35c8rhawytJDGCw0ub2774c1u7qJ08JN1unq23krRS0X1ZI4lj+HzUtPSkVQFPezgIruzb7gu0UnUg4qOeXcV6WExdOtOqt33v7voVbLzRT4tTdAwsiZlDGutmtFC43eW6FxcCb9qzBqVRW0MYyE6WAn0jvJ6+MuHgROFfp8RjP6yrDvAy5/goxzmu8tVv5WDfZC3wsfRS9I4MIAgCAIAgCAIAgCAIDnvppp70sL/ozgeDmO/MBVsSvdTPd2BO1eUecfRo1DZyYf0bNmAIgrKeexFxlJa03HLQrTD8N9jR6eMi/bI2/NCUfU7IMKp/1EX/AI2/wV3djyOU6ar+p+ZgYnDAyIyRQ07iHAaxtsbOAeLgaG2bXgRx3KShG+aNFXF1VDehL4vxKqgUbWuPRQuLQSWtYzNdtiRbmMzdO1Y6NcjMsbJJvfeXaV1VPSsIb0MJeSzqZGXs54YXWtuFz5JuLkSli6kct53y49pYqYIg4htNARmawdRt8xczMbW9UNc4/c7VlQjyITxdZPJvlq+z78CuFlK55AigLLNs4MYcznOcMosNbZfesdGuRlYyblZTdsuPEtsiiLYT8nhBlJPsQ6zN4vYaEtLdToL+CzuR5EVjKzUXvPPv0L9NDSOaXdFABc26jNW5i1rt24kaLG4uROOLnJX335nhipc4Y2njde+oZHYZXhhGvEE+48dE6Nch7ZPespPz7bcy9BS0bzZjIHG19GMOly2+7m1w8Cm4uRKOKlLSb8zCiihdHM4U8AdHmGsbSMwGbUAX0uB3grPRx5GpYytKMmpO67WVTMpmxE9DA6QC2URtF33a227dmcATrZOjjfQzLG1FC+87971/yX5oqJrS4xwaFw0YzVzAS5o03jKdOxY6NciTxkkrufx4rgU08NKQ1rooBJYZmhjTkdlDiDpoBcanmOabi5COLm8nN3456ZXNdxcxR1/SRsY1sGHzzEsaACXHK3Ub7hpstErKfcmevh96phbN33pxX35nPPRlTZ8Rpx9HO8/dY63vIVagrzR0G157uEn22XxO/L0TiAgCAIAgCAIAgCAIAgNW9JlJ0mHT23sDZB9x4J/ZzLTXV4M9HZNTcxcO3LzRy/YUdIyupuMtI5ze10RuP3lVpZqUeaOj2l7kqNXlL1/wdj2bmE1LBNrd8Ubj1j61gT+1dXoSvFM5HFUVTrzjyb9TMgw+JjQ1rAGh2YD63PvU7sqxpQirJdpQ7CoSCMg1Lid+pdv/AJ4JdmOhhyPKrDmue2QWDg5tzza2+nvRMTpJyUlqVOwyIvLy25Pbx5jlu8deZS5l0ot3sWm4HTgg9GLtta9zbLex1O/UpvMh7PT5F+TDoy1rSDZoIADnDQ6EGx1G7fyS5N0otJFsYPBpaMC1rWuLAOzAAjdr5pdkegp8EI8HgbYCNoA3d9w6/fcA37+ZS7CoU1oiqmwuGMhzI2ggZQeIAvpc/aKXZmNGEXdIvClZ17NHXvm+tcW1PHRYuT3I55a6mPLhMLiSWA31IubE5s2o3byfMrN2QdCm9UDhEH6tu9xOm8uJLr89/wAOSXY6Cny+2Y1ZgjXEZA1os/Ne5vmAtccbEZu8DndZUjXPDpvLtND2kmDG4rI3RrWU9FH3WGca/a9ypVH133I6nAUkvZqS/ql5aehH+hikzVcsnBkNvF7h+TCo4ZXk2W9v1LUYw5v0X7nY1dOUCAIAgCAIAgCAIAgCAxcUpBNDLCd0kb2H7zS381iSurGylUdOcZrg0/I4NsFVdDiEGfS7zE8H64LLH7xC86k7TR2u04dLhZ7vK68M/Q6z6OnZaaSmO+mqJodeQfmae6zh5K5R6tuTOX2nnVVT9cVL4WfxRtS3HnBAEAQBAEAQBAEAQBAEBS9wAJO4C57ggSvkcR2mqv6uiJ0dV1c9URxyglrb+bVQm/cXa7nX4On/AMXJcIRjHx4/M2z0LUWWmmmI9pLlHa2Nv/6c7yW7DL3Wzzdv1L1ow5L1/ax0RWTwggCAIAgCAIAgCAIAgCA+e9tqR1NiM4bpaXpmfftILdgcSPBebVW7N+Z3Oz6ir4SN+W6/DL0OobN1g/pCQtv0dZTQ1TOQc0ZHgdti0lW4P332q5zeKpv2WKetOTg/VfM3RbzyggKXvABJ4IYbsrmP8vZzPks7rNfTRLZxEcGk+5Z3THTckXIa5p0N29/8VixmNVMvSzNaLk/9pYnKSWpinEPqFZ3TX03YVtxBnG48P4Jusyq0S7DUtcbD4LDViUZqWheWCYQGv7eVpioZi313tETAN5dKRGLdozE+C11XaDLuzqaniY30Wb7lmck9IsjW1EdM09Wlp44fvZczj72+SpVnZ7vJHUbKi5UpVXrOTf38Tr2w2H9BQU8ZFndGHu+1IS9wPcXW8FdpR3YJHLbQrdLiZz7beCyJ1bCmEAQBAEAQBAEAQBAEAQHJ/TVhtnwVIHrAxOPaOuz3F/kqeKjmmdNsCteM6T716P5GLs5idqSlqSdaGpMUmv8A6eo0uewFwA+ysQl7qfJ/Bk8XQ/n1KX/Mjdf3R+35nYgVdOWCAi62ozGwOg8FNIrVJ3yRjE/zmG7+Kyagf5Op8UBaqJgxjnnQNaXHuGpv5LKV2RlJRi5Mgti8VdPHIHklzXk7/mvJcN/AOLvctlSNmVMDXdWDvqn6mw+XvWount/hz4ctUB615BvfXvvrz0QynYl6aYOF/NQasW4S3kXVgkaftVO2StpYHEdHAH1s3YIwRHf7xK01HeaXLM9TCRcMPUmtZWhHx1+ByXDonV9e0O3zzlzhyaSXuHgwEeCpRW/PvOoqtYTCu35Y28dPU+iQF6ZwZ6gCAIAgCAIAgCAIAgCAIDXtvcJ+U0MsYF3gdIz7TOsB4i48Vrqx3oNF7Z2I6DERk9NH3M5H6P6hpmfSyH9HVxOhPY+xMbu+9wO1ypUWr7r4nUbUhJU1WjrB38OJ13YbEHS0rWSe2hJglH14+rfxFj4q7SleOeqyOWx9JQrNx6sveXc/poSdfOR1QDqNTr8VuSPMqztkR4ueZ8L6qRXKZ5Wx6yPawfXc1nxKCTUc5O3fZGA/HaQaGpj8HOPvDSENLxNFazXmRG2eLRmlIilY/pHBt2uBIHrG44DQDxWykryK2Orx6H3JJ3yyNa2LrujqmgkBsnUNzYXOrSfvADxW6qrxPPwNTcrJc8jfpcbpGmxqY79jifDqgj3qqe08RRWTmvMvQYlA/Rk8Tjy6Rt+zR1ihKNWnLSSfiZRYRwO76P5obLNFdPMWm4BP8EaMwk08iXzi1zoLX10t3rWXFnocg2jxY/Jamq3Pr5uii7KWHQnudqD9sKlOXuuXP0R1OEw/8+FLhTV3/dL6fIu+hjCc0stURoxvRt+06xd5Nt+JZw0c3Ixt6vaEaK45v5HXFcOXCAIAgCAIAgCAIAgCAIAgCA+fdt8JdR1z2s6rS4TREcATcW+y4EeAXm1Ybk8juNnV1icMt7P8r++1G/4FjLRUwVY0hr2iOUcI6uMWHdmsR26FWYT95S4P1PCxGGbpTovrUnddsH9NScxHZR8kjpGVtQwuN7B2g5ABpbYAK2pHKVcDKcnJVJK/b/gxm7HTn18RqHDkC4fF5+CzvdhrWz6n5qsvvxMml2Eo26va+V3OR517w2wPisbzNkNmUFm1d9rJNmzlGBb5ND4xtPvIWLsseyUP0LyOXbexQsq3RwRtYGNaHBugLj1jpuGhaNORVugvduc7tJU41t2CtbXvNdW4887LgOE0UtPFK2mhs9gJuwOIO5wu650NwqErp2Osw9DDzpRkoLNci7VbH0L98DR9gln7pAUd5kp4DDy1j5ZEa7YUM/s9XUQ9gdcfslqzvGh7NUfw5yXj/g8bsdOfXxGocOQLh8XlZ3uwwtn1PzVZffiebSh8VNFh8Ur3zVLuia55Bc2PfK82to1uniFXrSut1as9/ZVBU/5k23Gmr58XwXmcu24xFstSIofY07RBEBxy6OI5ku07bBUqsrystFkdbs6i6dHfn1pe8/HT4HZ9jMG+SUkUJHXtmf8Abdq7y3eAV6lDdikcljsR7RXlU4cO5aE2thUCAIAgCAIAgCAIAgCAIAgCA5v6XGwyxsazrVETibNF7MI6zXdugIG/TtWutQlOnvrgW9l7Zo4bGRw8n18u58L+njc03YmrZIJMPldlZUWMT7+zqG+zcO8gDtsBxVKk0/cfH1Oq2jTlBxxMFdx1XOPFeH3odd2Pxh08JbKMtRC7opm/Xb84fVcNQd29Xact5Z6rU5bG4dUql4dWWce7l4aE6thTCA8KA4Ficr3zSOkFnmRxcDwOY3Hhu8F6MUklY4qtKUqknLW7KsRohFk67X542ydW/Vza5TfiEjK5mtS6O2d7pM6T6LJXmme1w6jZDkPeAXAdgPxKq10t49/ZEpOi09L5G5rQeqEBRNK1rS5xAa0EkncABck+CGUm3ZHKcZx9zY5cRN2y1IdT0TTvjgB681juLjr4t4FU5Tyc+eS7uZ0mHwilOOGWkPen2y4R8NPMgvRfhDJ61rpCMsPXDSfXePUA529Y9wUcPScnvcEWdtY+NCmqN/fne3ctfp5ndleORCAIAgCAIAgCAIAgLVVUNjaXvNmjebXtwvpwWUrkJzjCO9LQtwV8TxdkjHdzgjTRGFanPqyT8S6+dg1LmjvICxYm5xWrI2q2ip2HKH9I76MYzk/h0U1TkypUx9CLspXfJZv4EHjGMzuFnubSRnmc0zh2Mbq33d62whHhn6HnYrGVpK0n0cfOT7ktDWJMUbGC2maW3BDpXG8judjuYDyGvarChfrfseLLFxppxw6tzk+s/p4GhYrSdFJdujT1mkaWO+w5W4Lw8ZQ6Kplo9D65/DO2FtLB2qO9SGUu3k/Fa9tzoOD7QFzWYm3WSMNhr4xvfH8ycAcRv8xwWYz/AD+f1MV8JuyeFejzpvk+MfvsOo08zXta9hDmuAc0jUEEXBCtp3OdlFxbT1RcQwEByv0mYP0c4naOrL63ZIBr5jXvDlboSurHObWw+5U6RaP1NexCFz3wsaLudFC0DmSAAPNbIuyZSrRcpQiuKR2fBcObTwRwt+a2xPN29x8TdUpS3nc6uhSVKmoLgZyibQgNM2wrRUSfIQ/LExvS1kl7ZIh1hHfg59vJaKj3nueZ6uCpujD2hq8nlBc3z8PU5NtLjDqyoztblYLRwx7gyNujRbhfee/kFUk3Unl3I6ShTp4HDuVR6XlN+v39TZsDEDImxSNLXNNxNH6wcTe7h84X3biAF7tKg6ULR8T49tPbENpYqVWsms/da1ilomuPPvN4wvHJ2N64FTEP8WLVzR9dm/zt4qEqcXpk+0uYfG1oR97+ZH9UdfFak/QYzBN7ORpPK9nfhOq0yhKOqPTo4ujW6kl8/Iz1EsnhKAohma6+VwdY2NjfXlpxSxGMoy0ZcQkEAQBAEBS9gIIIBBFiDqCORQw0mrM0DHB0MpY+mgLTq1wY5uZvD1XAXG4qxHNanO4r+TU3ZU424ZNejI44k3hTU/ixzt/2nWU1F82U3Xjwpx8m/VlEmMzkZQ/I36MbWxjl8wAqShEhLF1mrKVl2WXoRT+Z38fgVtR58882W/58v+lI1GPX0okYWnTkeRG4rViKKqw3X4d56uxtq1Nm4qNeGa0kuceK+a7URGz+LSUVRny3GrJYzukjPrNN/MeHBc8nKnOz8T7XUhSx+GUqbyavF8uX0Z1LZXE2UsjIA/NR1HXo5D8wnV1O88CDe1+7foLVOW67cHp9DnsZRlWi6lrVIZTXP+pfPzN7Vg8cICM2kwoVNO+E7yLtPJ41afy7iVKEt2VyviqCrUnD7uahsXgpdUtmkbYQwxtAP6wtsfwi/iQt1SeVlxZ5uCwzdVTl+WKXidCVc9oICE2qxz5NGBG3PUSnJBH9J54n6rd5P8VrqT3VlrwLeDw3TSbk7RjnJ8l9XwOUbX4gIIzQRyZ5HP6Ssl/WzHXJf6LTw7B2qpUe6txeJ02Ao9LP2iSsllBclz8fvgRGBUdv0rhv9Xu5+P8AO9ehs/D/APmy8PqcV/G23N6XsFF5LOffwj4avty4EyF6h86L1NK5pzMcWnm0kHzCi0nqbaUpQd4uz7CUGMPd7VkU3bIwZvB7LO87rS4JaZHorFzl+IlLvWfmrMyYsWjGgilZ/p1TwPJwKi4v7RvjioLSLXdN/MuxVMcz2sEU0jnGwD6lxHjZu5Raazv8DbGpCrJQUW2+c39DoFDSMiYGMaGgcBfedTv1381Xbu7nR0qUacFGKsjIWDYEAQBAEAQGFi2HRzxlkneHcWnmFKMmnkaMRQhWhuz/AMHMa2AMe5jXh4BsHN3HiFai7nJ1oKEnFO/ajGP8+KmaGWnfz4qSNMkWw0k2G/4cDdZcrEIU3NmbBTBuu88z+XJaXJsv06MYkXtLhPSN6Vg67RqPpN/iFRxVDeW9HU7T+Gds+zT9mrP3JPJ/pf0fweZh7KY1G1rqOqJ+Sym+Yb4JPmysPDW1/PnehTml7stH8Dt8dhZNqvR68f8AqXJ/fyOrbL41I1/yGsI6drbxyfNqYuD2n6Vt48edrlOT6stfU5nF4eLj09HqvVcYvk+zkzaltPOCApZGBewAubntPNDCSWhUhkwMbxaKlhdNKbNG4De5x3NaOLioykoq7N1ChOtNQhr95s5nj+NSU2apmI+XzstFHvFHAeP+ofjfkQas5uOb6z+COgwuGhXtSh+FF5v9cvp8jS8CwwzvJdfIDd5Pzjvy34k8f+1HD0HUlnobNu7Xjs+huw/El1VyXPw4dpucsLSLW3brcO5eynu6HyarFVLuedyOkjLTY+B5rfGVzy6tFwfYesCyxFF1q1s3ovQxlzg0WuTYXIA15k6BRbNsIuTSR0bZzAG04zOs6QjV3ADk3s7eKqznvHU4LBRoK7zk/vIm1AvBAEAQBAEBjVldHEAZHtbc2FzvWUm9DXUrQpq83Y1LHJquouGNBi5RPa/N9qxue6y2w3VqePi5YmvlFe72NO/eQDsKqP1Ev/jdw8Ft3lzPMeGrfofkyoYHUbzGWjm8hgHfmIWd+I9irv8ALbvy9Q2ghaQJJOlcd0cAzE8bZyLeQKzvSeit3kOgoxfvy3nyhn8foR8s4E8jDGIiLAMvusNxJ3njftUfG4eU3Fx3ewyM4G8geKwTui27EIm73jw1+CzYOpFcTV8UoWSS5objNvbl3u+qAeKpVMEpSunY67Z38YPD0FRqQc2sou9suT109DZKPD651MyEwvIieHwyyfo3w21tG9xHV03G/uFpRw8Et1yuaKu3sdUqOrSoqN1Zp6PvvYmpMarrWfXUkfOzmOP7DXardux5M8meJxL1qQj3Z/UxX4tLxxYfdjk/JgWd3+k1PET44j4P6HgxGb5uKtv9YSN+LCs7q/SOmqPq4heN18jJgxLFB7Kphn7GvicfI5XLFocUTjWxn5JqXc1+xH4jitYJ21FXTucYmkRNcxzY2P8A1ltznePdZa3QhJ3TLtPbeLw9N06lLJ6tXTa5XzVjS6qnlmmMksoc57rveb38hyGgHYFUlgqjlqdLh/4ywMaO6qcotLJap+Pq7G44eyJrAyIiw5HXvPaV6EIKEd1HFYvGzxlV1qju38OxdiLxUiqzDknZnY0tL7vAytOpvpYEcddFlX4GmTi2lJX7FqZowtj/AOzyhx/VyWjkHZr1XeBU3NrrIisLCb/kyv2PKX0ZZnw+aP14nt72m3nuTeT0Ylh6sOtFrwLAI3LDIJrQ2jZvF6llmdHJLHyDSS37J3W7D7lpnGLzPYwWKrwtHdco+nibxDM124jtFxcHkbbitB70ZKWhcQkEAQBAEBRLC1ws5ocORAPxQjKMZKzVyMm2cpXa9EAfqkt/dIU9+RWlgMPL8vll6Fs7Mw8HTDsErk6RkP8AT6XOX/2ZQNk6W93Nc77T3fkQs9LIj/peH4pvvbJOiw+KIWjja3uGp7zvKg5N6lulQp0laEUjUPSDTRsLZ5KZsrHdUua50b2u4Xc24cCN1xpbfqFspvhc8vacIRtUlC68mvE0vp6Hf0E/d07befR3W20uZ5O9hf0S819D3+k6ZvqUTL85JZJPMAtBTdfMdPRXVpLxbf0Dto6gAiMthaeEMbY/2gM3vTcQeNq6RtFdit+5GTzuebvc5x5uJcfMqVitKUpO8ncn9kYY3tqekiY/o4HytLgdHN3DQjTsUJtqxfwEYSjPeinZXVzC2Zax9VEx7Gua9+UtI0APKx0IWZ6GjB7sq8VJJpkmzDInSVk8jAIaYuaI2EtD3Zi1jSb3A0FyOajd5LmWVQhKdWpJe7DKyyvyIo4jG9kjJIImkt/RujZlLXAjQ66tIuNbqW61oyt08JRlGUUssrLiY9Hi1RF7OaRo5B5t5bllxTNdPEVafVk14mZ//QyO9rHBN2vhbf8AEzKfesbi4G32yb68VLvX0sefL6Q+tRlp5xzvHkHhyWlzHS0HrT8pP53KjPREair7uljP/BPe7BvYb+rzX0Nl2Dp4ZJs8NNlbHqZJHmRxJ9UMFg1p4k2JsOF1rqNpZs9HZsKc6l6cLJcW7vw4I3TEcEp59ZIwT9IdU+Y1PioRnKOjPUr4KhXznHP4kezZYM9lUzxjkH3HkpdJfVIrR2aofh1JLxLwwWb/AN5L5NUd9cjYsJV/5svh9AdnGu9rNPJ2OksPIJv8kZ9hi+vOT8foZ1BhUMPsmBpOhOpJ8TqouTepvpYalS6isZqwbwgCAIAgCAIAgCAICxX0jJo3RSC7XCxH8ORWU7O5CpTjUi4y0ZxTHsJfSzOifw1a76TTuP8AHtBVqMt5XOQxOHlQqOD8O4jlIrhAEBtGxbOrVEuY3PTvjbme1t3ncBmI89y1VOB6ez17tR31TSzWpRgGGGKeme98Yd0pcR0sZDWMy9ZxDrAku0G/QrMpXTMYXD9HUhKTV781kkZsFVHnrqSV7GNqHufHJmBYHZi5uZzSQAerrwso20aNsakd6rRm0lJtp8NcsyCfgj42SPmLWBreqA9jjI8kBoaGk3HEnkFPevoU3hZQi5VMraZrNkUplQIAgMigonzSNijF3ONgPiTyAGqw3ZXNlOnKpJQjqzteA4SymhbEzhq4/Scd5P8AO4BVZSu7nX4ahGhTUIkgom8IAgCAIAgCAIAgCAIAgCAIAgCAhNqtn2VcWXRsjbljuR4g/VKlCW6ynjMJHEQtxWjOVVOz9WxxYaeUkG12sc4HuLRYhWVNczmp4SvCW64PwVyuPZurIuYXMHOQiMDvzkLG/EzHBV2ruNu/L1Kv6KgZ7arj+zCDKfPRo803m9ES9npR/EqL/wCOf7GbBQxH2VBVTfWkc5o8o2296xd8WbY0qf5KUpd+XoZrMJmO7CW+Mjx8ZAo7y/Ub1Qn/AOnXn+5U7Apd7sKb92ocP+ZTe/qDws+ND/q/cwKrDYW+1o6uDtaRI0fiaPipKT4M0To0116co92a+JhDCoH+xq4/szAxHzN2nzWd58UavZ6cvw6i8cv2KZNm6sC4hc8c4yJAe7ISm/EjLBV1nu37s/QsxYFVONhTzX7Y3DzJFgs7y5kVha7dlB+R0/Y/ZhtIzM6zpnDrO4NH0W9nM8VXnPeOjwOCWHjd9Z6/Q2RQL4QBAEAQBAEAQBAEAQBAEAQBAEAQBAUSxhwIcAQeBQw0mrMhZtkKJzs7obnte/4ZrKe/IqSwGHlLecc+9/UkaPC4IvZRRs7WsAPid5UW2zfChTp9WKXgZiwbQgCAICPrsEppvawxuPPKA78Q196ypNaGiphqVTrxTIZ2wVJmzM6WP7En5kE+9T6RlX/S6Cd43Xcydw3DY4G5WZjfeXvc8nxcdB2DRQbuXKVGNNWXxdzMWDaEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAf/9k=",
    school: "Liverpool International College",
    date: "January 2017",
    grade: "First Division",
    desc: "I completed my high school education in Computer Science at Liverpool International College in January 2017.",  
    degree: "High School Diploma in Computer Science",
  },
];


export const projects = [
  {
    id: 0,
    title: "MRI Detection System",
    description:
      "This project implements an end‑to‑end MRI tumor detection pipeline using transfer learning with the VGG16 convolutional backbone. Starting from raw scan images, it resizes and normalizes each slice, applies on‑the‑fly augmentations to enrich the training set, and then feeds them into a custom classifier head built atop the frozen VGG16 feature extractor (with the last few convolutional layers fine‑tuned for MRI texture). The model is compiled with an Adam optimizer and trained over multiple epochs using a data generator to manage memory, after which it’s evaluated on held‑out scans. Finally, a utility function loads new MRI images, runs inference to predict “Tumor: <type>” or “No Tumor,” and displays each scan with its confidence score—providing a streamlined tool for rapid, automated tumor screening.",
    image: projectImages["banner"], // add your image URL
    tags: ["Python", "TensorFlow", "Keras", "Transfer Learning", "VGG16"],
    category: "machine learning",
    github: "https://github.com/santosh5541/MRISYSTEM",
    // webapp: "", // your demo link
  },
  {
    id: 1,
    title: "HVAC System",
    description:
      "I developed a reinforcement-learning-based HVAC control system that learns optimal temperature-setpoint policies by interacting with a simulated building environment. I started by implementing a physics-informed thermal model and a rule-based controller, then I trained DQN, DDQN, SAC, and PPO agents using OpenAI Gym and Stable-Baselines3. I tuned hyperparameters through random search, grid search, and Bayesian optimization to maximize energy savings while ensuring indoor temperatures stayed within comfort bounds. In my experiments, the PPO agent (with grid-search tuning) performed best—achieving about 41.5 kWh of energy savings, keeping temperature deviations under 3.6 °C, and reducing HVAC costs by roughly $4,150 over the testing period. To prevent overfitting, I incorporated dropout, L2 weight decay, and early stopping, and my comparative analysis across algorithms highlights how careful reward design and parameter selection drive both efficiency and comfort in smart-building control.",
    image: projectImages["hvac"],
    tags: ["Python", "OpenAI Gym", "Stable‑Baselines3", "Reinforcement Learning", "Bayesian Optimization"],
    category: "automation",
    github: "https://github.com/amalsha27/RL-Project",
    // webapp: "",
  },
  {
    id: 2,
    title: "Movie Recommendation System",
    description:
      "I built a content‑based movie recommendation engine in Python using the TMDB 5000 Movies and Credits datasets. I first merged each film’s metadata with its cast and crew details in pandas, then combined key textual features (overview, genres, keywords, cast, crew) into a unified “tags” field. After lowercasing and stemming with NLTK’s PorterStemmer, I vectorized those tags using scikit‑learn’s CountVectorizer (capped at 5,000 terms) and computed a cosine‑similarity matrix over the resulting feature vectors. I wrapped the core recommend(movie_title) function— which looks up a movie’s index, sorts its similarity scores, and returns the top five matches—inside a Streamlit app. In the UI, users can type or select a title, click “Recommend,” and instantly see poster images, titles, and overviews of their five most similar films",
    image: projectImages["mrc"],
    tags: ["Python", "Pandas", "NLTK", "scikit‑learn", "Streamlit"],
    category: "data science",
    github: "https://github.com/santosh5541/movierecommendation",
    // webapp: "",
  },
  {
    id: 3,
    title: "Power Plant System",
    description:
      "The core motive behind this Power‑Plant project is to give teams a simple, self‑contained microservice for managing and querying battery asset data. By exposing a RESTful API backed by MongoDB, it lets you: Ingest new battery records (name, capacity, size, location, etc.) Query those records by postcode range, so you can quickly see which batteries serve which regions Integrate effortlessly with dashboards or automation pipelines via a well‑documented Swagger UI In short, it was built to centralize your battery data into one lightweight service—making it easy to onboard new data sources, explore stored records, and drive energy‑management decisions without wrestling with low‑level database or deployment details.",
    image: projectImages["pps"],
    tags: ["Node.js", "Express.js", "MongoDB", "Swagger UI"],
    category: "microservice",
    github: "https://github.com/santosh5541/Power-Plant",
    // webapp: "",
  },
  {
    id: 4,
    title: "Inventory Management System",
    description:
      "This project is an “Inventory Management System” backend built with SpringBoot (parent 2.7.1) under the group com.inventory and artifact inventory-backend, designed to centralize product and stock control in a MySQL database via Spring Data JPA. It exposes RESTful endpoints (via spring‑boot‑starter‑web) that validate input with Hibernate Validator, map between DTOs and entities using ModelMapper, and secure access through Spring Security with JWT tokens. For operational workflows it integrates Razorpay’s Java SDK for payment processing, allows CSV import/export of inventory data via OpenCSV, and leverages Lombok to reduce boilerplate. A comprehensive test suite is included with spring‑boot‑starter‑test, making IMSFinal a production‑ready microservice for robust, secure inventory tracking and transaction handling.",
    image: projectImages["ims"],
    tags: ["Java", "Spring Boot", "MySQL", "Spring Data JPA", "JWT", "Razorpay"],
    category: "backend",
    github: "https://github.com/santosh5541/imsfinal",
    // webapp: "",
  },
  {
    id: 5,
    title: "Wallet Transaction System",
    description:
      "This transaction_project is a Maven‑managed Java application that implements a wallet‑transaction system. It centralizes all wallet operations—deposits, withdrawals and peer‑to‑peer transfers—behind a clean programmatic API, validating each request, atomically updating user balances and logging every action for full auditability. By relying on a Maven wrapper and pom.xml, it ensures consistent builds and dependency management, making it easy to integrate into larger financial‑services pipelines and client applications",
    image: projectImages["wts"],
    tags: ["Java", "Maven"],
    category: "backend",
    github: "https://github.com/santosh5541/transaction_project",
    webapp: "",
  },
  {
    id: 6,
    title: "Student Management System",
    // date: "Feb 2024",
    description:
      "I developed a microservices‑based student management system to showcase how to build a scalable, loosely coupled backend for handling student data. I split core functionality into individual Spring Boot services—such as the microservices-student service for CRUD operations—registered them with a Eureka service registry (serviceregistry), and fronted all API calls through a Spring Cloud Gateway (cloudgateway). On top of that, I built an Angular SPA (crud-angular) to provide an interactive UI for creating, updating, and viewing student records. This architecture demonstrates best practices in service discovery, API routing, and separation of concerns, making it easy to extend with new microservices (e.g., course management or authentication) without touching existing components",
    image: projectImages["sms"],
    tags: ["Java", "Spring Boot", "Spring Cloud", "Eureka", "Angular", "TypeScript"],
    category: "full stack",
    github: "https://github.com/santosh5541/microservice_f1",
    // webapp: "",
  },
  {
    id: 7,
    title: "Todo Application",
    description:
      "I built a single‑page to‑do list application using Angular 16.0.2, scaffolded with the Angular CLI. It demonstrates core Angular concepts—components for rendering task items, services for managing state, two‑way data binding and reactive forms for creating and editing tasks, and routing for navigation—all written in TypeScript and styled with HTML/CSS. The CLI setup also includes a live development server with hot‑reload, unit testing via Karma, and end‑to‑end testing scaffolds via Protractor, making it a full‑featured starter project for task management and modern front‑end workflows",
    image: projectImages["todo"],
    tags: ["Angular", "TypeScript", "Karma", "Protractor"],
    category: "web app",
    github: "https://github.com/santosh5541/todo",
    webapp: "",
  },
];


