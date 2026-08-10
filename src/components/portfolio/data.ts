import xpertmePage from "@/assets/xpertme/xpertme1.jpg";
import xpertme1 from "@/assets/xpertme/xpertme1.jpg";
import xpertme2 from "@/assets/xpertme/xpertme2.jpg";
import xpertme3 from "@/assets/xpertme/xpertme3.jpg";
import xpertme4 from "@/assets/xpertme/xpertme4.jpg";
import xpertme5 from "@/assets/xpertme/xpertme5.jpg";
import xpertme6 from "@/assets/xpertme/xpertme6.jpg";
import femsa1_1 from "@/assets/Femsa1/f1.jpg";
import femsa1_2 from "@/assets/Femsa1/f2.jpg";
import femsa1_3 from "@/assets/Femsa1/f3.jpg";
import femsa1_4 from "@/assets/Femsa1/f4.jpg";
//import videoFemsa1 from "@/assets/Femsa1/;
import femsa2_1 from "@/assets/femsa2/f1.jpg";
import femsa2_2 from "@/assets/femsa2/f2.jpg";
import femsa2_3 from "@/assets/femsa2/f3.jpg";
import femsa2_4 from "@/assets/femsa2/f4.jpg";
import femsa2_5 from "@/assets/femsa2/f5.jpg";
import femsa2_6 from "@/assets/femsa2/f6.jpg";
import femsa2_7 from "@/assets/femsa2/f7.jpg";
import femsa2_8 from "@/assets/femsa2/f8.jpg";
import femsa2_9 from "@/assets/femsa2/f9.jpg";
import femsa2_10 from "@/assets/femsa2/f10.jpg";
import femsa2_11 from "@/assets/femsa2/f11.jpg";
import videoFemsa2_1 from "@/assets/femsa2/video1.jpg";
//import videoFemsa2_2 from "@/assets/femsa2/Simulador VR de manejo FEMSA Prototipo.mp4";
//import videoFemsa2_3 from "@/assets/femsa2/Simulador VR de manejo FEMSA360.mp4";
import bimboWow_1 from "@/assets/BimboWow/bw1.jpg";
import bimboWow_2 from "@/assets/BimboWow/bw2.jpg";
import bimboWow_3 from "@/assets/BimboWow/bw3.jpg";
import bimboWow_4 from "@/assets/BimboWow/cam_1.jpg";
import bimboWow_5 from "@/assets/BimboWow/cam_1_1.jpg";
import bimboWow_6 from "@/assets/BimboWow/cam_2.jpg";
//import videoBimboWow_1 from "@/assets/BimboWow/Bimbo wow.mp4";
import bimboAR_1 from "@/assets/BimboAR/target.png";
import bimboAR_2 from "@/assets/BimboAR/info_1.png";
import bimboAR_3 from "@/assets/BimboAR/info_2.png";
import bimboAR_4 from "@/assets/BimboAR/info_3.png";
import bimboAR_5 from "@/assets/BimboAR/info_4.png";
import bimboAR_6 from "@/assets/BimboAR/info_5.png";
import bimboAR_7 from "@/assets/BimboAR/info_6.png";
import bimboAR_8 from "@/assets/BimboAR/info_7.png";
//import videoBimboAR_1 from "@/assets/BimboAR/BImboAR.mp4";
import bimboD_1 from "@/assets/BimboDeteccion/bd1.jpg"
import bimboD_2 from "@/assets/BimboDeteccion/bd2.jpg"
//import videoBimboD_1 from "@/assets/BimboAR/BImboAR.mp4";
import infovir1 from "@/assets/Infovir/infovir1.jpg";
import infovir2 from "@/assets/Infovir/infovir2.jpg";
import infovir3 from "@/assets/Infovir/infovir3.jpg";
import infovir4 from "@/assets/Infovir/infovir4.jpg";


import truckImg from "@/assets/project-truck.jpg";
import enterpriseImg from "@/assets/project-enterprise.jpg";
import planetariumImg from "@/assets/project-planetarium.jpg";
import mobileImg from "@/assets/project-mobile.jpg";

export type MediaItem = {
  type: "image" | "video" | "youtube" | "webgl" |"onedrive";
  src: string;
  caption?: string;
  thumbnail?: string;
};

export type KeyFeature = {
  /** lucide-react icon name, e.g. "Gamepad2" */
  icon: string;
  title: string;
  description: string;
};

export type Result = {
  metric: string;
  label: string;
};

export type CaseStudy = {
  category: string;
  duration: string;
  videoUrl?: string;
  liveDemoUrl?: string;
  overview: string;
  goal: string;
  problem: string[];
  solution: string[];
  roles: string[];
  roleResponsibilities: string[];
  features: KeyFeature[];
  challenges: { title: string; description: string }[];
  results: Result[];
  resultsNarrative?: string;
  media: MediaItem[];
  lessonsLearned: string[];
  futureImprovements: string[];
};

export type Project = {
  slug: string;
  title: string;
  image: string;
  technologies: string[];
  description: string;
  responsibilities: string[];
  demoUrl?: string;
  githubUrl?: string;
  galleryUrl?: string;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  { //VR Driver Assessment Simulator for Commercial Truck Operators
    slug: "VR-Driver-Assessment-Simulator-for-Commercial-Truck-Operators",
    title: "VR Driver Assessment Simulator for Commercial Truck Operators",
    image: femsa2_1,
    technologies: ["Unity", "C#", "Oculus Rift", "Arduino", "HLSL", "Shader Programming", "VR Development", "Vehicle Simulation", "Particle Systems", "Traffic Systems", "Real-Time Metrics", "JSON", "Enterprise Training Systems"],
    description:
      "A virtual reality truck-driving simulator designed to assess and improve the performance of commercial vehicle operators.",
    responsibilities: [
      "Developed core functionality for Oculus VR and Android applications using Unity and C#.",
      "Implemented authentication, user login, and training content delivery systems.",
      "Integrated REST APIs for downloading and synchronizing training data.",
      "Managed local storage, file handling, and content loading workflows.",
      "Redesigned and improved the interactive training player used for lessons, activities, and assessments.",
      "Developed responsive UI systems for multiple screen sizes and devices.",
      "Optimized application performance, loading times, and resource management.",
      "Integrated multimedia content including 3D models, textures, audio, video, and 360° video experiences.",
      "Processed and managed JSON-based data structures.",
      "Collaborated on scalable architecture improvements to improve maintainability and future development.",
      "Supported synchronization of user progress and assessment results with backend systems.",
    ],
    //demoUrl: "#",
    //githubUrl: "#",
    caseStudy: {
      category: "Unity Development ·VR Development · Vehicle Simulation",
      duration: "18 months · 2019 — 2021",
      //videoUrl: "https://www.youtube.com/watch?v=0uH3qRYjcCc",
      //liveDemoUrl: "#",
      overview:
        "The platform recreates realistic Mexican roads, highways, urban environments, and challenging driving situations. Drivers operate a physical truck cockpit equipped with a real steering wheel and dashboard controls while navigating through immersive VR environments using Oculus Rift. The simulator evaluates driving behavior, adherence to safety protocols, vehicle handling skills, and responses to dynamic road events. Performance metrics are transmitted in real time to monitoring systems where instructors can review driver progress and assessment results. The solution was later adapted and commercialized for additional enterprise clients, including Bimbo,Ricolino.",
      goal: "Develop an immersive VR-based driver assessment platform that allows Coca-Cola FEMSA to train and evaluate commercial truck operators in realistic driving scenarios while measuring compliance with safety procedures, driving habits, and operational standards.",
      problem: [
        "Many driver training programs rely on real-world evaluations, which are expensive, difficult to standardize, and potentially unsafe when assessing inexperienced drivers in high-risk situations.",
        "The company needed a scalable solution capable of:",
        "Evaluating driver performance consistently.",
        "Recreating hazardous situations without real-world risk.",
        "Measuring compliance with safety procedures.",
        "Capturing detailed driving metrics in real time.",
        "Training drivers across multiple vehicle types and environments.",
        "Additionally, achieving immersion was critical because drivers needed to perceive the virtual truck as an extension of the physical cockpit.",
      ],
      solution: [
        "Developed a VR-based driver assessment simulator that combines physical driving controls with immersive virtual environments.",
        "The platform evaluates driver actions such as:",
        "Respecting stop signs.",
        "Using turn signals.",
        "Checking mirrors.",
        "Activating headlights.",
        "Using windshield wipers.",
        "Managing speed appropriately.",
        "Responding to hazards.",
        "Performing reverse maneuvers.",
        "The system records driver actions, evaluates compliance with predefined safety criteria, and streams performance metrics for instructor review.",
        "Custom weather effects, traffic systems, realistic road conditions, and interactive scenarios were implemented to replicate real-world driving challenges."
      ],
      roles: ["Unity Developer (Simulation Systems & VR Engineering)"],
      roleResponsibilities: [
        "Responsible for simulation programming, evaluation systems, VR interactions, weather systems, shader development, hardware integration, and realism enhancements.",
        "Developed core driving simulation systems in Unity.",
        "Implemented driver evaluation and scoring systems.",
        "Programmed traffic behavior and road interaction logic.",
        "Created real-time performance metrics tracking.",
        "Developed custom HLSL shaders for windshield rain effects.",
        "Implemented dynamic water droplet behavior and humidity simulation.",
        "Synchronized windshield wiper behavior with rain shaders.",
        "Created weather effects using particle systems (rain, fog, environmental effects).",
        "Integrated Arduino-based hardware communication with Unity.",
        "Implemented dashboard control interactions.",
        "Developed reverse maneuver assessment scenarios.",
        "Assisted in optimization and VR performance tuning.",
        "Collaborated with 3D artists and technical teams to improve physical-to-virtual alignment.",
      ],
      features: [
        {
          icon: "LifeBuoy",
          title: "Realistic Truck Driving Simulation",
          description:
            "Operate commercial vehicles using a physical steering wheel and dashboard controls integrated with VR.",
        },
        {
          icon: "Car",
          title: "Driver Safety Evaluation",
          description:
            "Automatic assessment of compliance with safety procedures and driving regulations.",
        },
        {
          icon: "LandPlot",
          title: "Real-Time Performance Metrics",
          description:
            "Driving events and evaluation data are transmitted for instructor monitoring and reporting.",
        },
        {
          icon: "Construction",
          title: "Dynamic Traffic System",
          description:
            "Vehicles and traffic interactions monitored ",
        },
        {
          icon: "CloudHail",
          title: "Adverse Weather Conditions",
          description:
            "Rain, fog, and low-visibility environments.",
        },
        {
          icon: "StepBack",
          title: "Reverse Maneuver Training",
          description:
            "Precision driving exercises in narrow urban spaces.",
        },
        {
          icon: "Biohazard",
          title: "Hazard & Distraction Scenarios",
          description:
            "Dynamic events designed to test driver awareness and reaction times.",
        },
        {
          icon: "Van",
          title: "Multi-Vehicle Support",
          description:
            "Training scenarios for multiple commercial truck models.",
        },
        {
          icon: "TrafficCone",
          title: "Realistic Mexican Road Environments",
          description:
            "Urban streets, highways, intersections, road defects, and regional traffic conditions.",
        },
      ],
      challenges: [
        {
          title: "Physical-to-Virtual Vehicle Alignment",
          description:
            "Drivers initially reported that the virtual truck did not accurately match the dimensions and positioning of the physical simulator. To solve this, I designed a calibration workflow that mapped key reference points from the physical vehicle to the virtual model. This allowed the 3D team to align truck geometry more accurately and significantly improved immersion.",
        },
        {
          title: "Realistic Rain Simulation",
          description:
            "Implemented custom HLSL shaders capable of simulating: A) Water droplets. B) Humidity buildup. C) Water streaks. D) Windshield cleaning synchronization. The system dynamically reacted to windshield wiper activation, removing water accumulation in real time.",
        },
        {
          title: "Performance in VR",
          description:
            "Maintaining smooth VR performance while rendering: A) Traffic vehicles. B) Dynamic weather. C) Particle systems. D) Large environments. Required continuous optimization and careful resource management.",
        },
      ],
      results: [
        { metric: "", label: "Delivered a realistic and scalable driver assessment platform." },
        { metric: "", label: "Enabled safe evaluation of hazardous driving situations." },
        { metric: "", label: "Standardized driver training procedures." },
        { metric: "", label: "Improved consistency in performance evaluations." },
        { metric: "", label: "Provided instructors with real-time performance metrics." },
        { metric: "", label: "Increased immersion through physical cockpit integration." },
        { metric: "", label: "Successfully deployed for Coca-Cola FEMSA training initiatives." },
        { metric: "", label: "ILater adapted for use by additional enterprise clients, including Bimbo. Ricolino" },
      ],
      resultsNarrative:
        "",
      media: [
        { type: "onedrive", src: "https://1drv.ms/v/c/377fd27ea1019dea/IQDqnQGhftJ_IIA3hQ4AAAAAAU5ngYGGYKA3y8dD28XUcSE", caption: "",thumbnail: videoFemsa2_1, },
        //{ type: "video", src: videoFemsa2_2, caption: "" },
        //{ type: "video", src: videoFemsa2_3, caption: "" },
        { type: "image", src: femsa2_1, caption: "" },
        { type: "image", src: femsa2_2, caption: "" },
        { type: "image", src: femsa2_3, caption: "" },
        { type: "image", src: femsa2_4, caption: "" },
        { type: "image", src: femsa2_5, caption: "" },
        { type: "image", src: femsa2_6, caption: "" },
        { type: "image", src: femsa2_7, caption: "" },
        { type: "image", src: femsa2_8, caption: "" },
        { type: "image", src: femsa2_9, caption: "" },
        { type: "image", src: femsa2_10, caption: "" },
        { type: "image", src: femsa2_11, caption: "" },
      ],
      lessonsLearned: [
        "Realism is not only visual; physical alignment and interaction fidelity significantly impact immersion.",
        "Driver training simulations require balancing realism, usability, and performance.",
        "Hardware integration introduces unique challenges that benefit from modular system design.",
        "Small environmental details can greatly improve user engagement and training effectiveness.",
        "Objective metrics provide more reliable evaluations than purely observational assessments."
      ],
      futureImprovements: [
        "AI-based driving behavior analysis.",
        "Eye-tracking integration for attention monitoring.",
        "Dynamic weather generation.",
        "Multi-user instructor observation modes.",
        "Advanced telemetry dashboards.",
        "Predictive safety scoring.",
        "Support for newer XR headsets and mixed reality devices."
      ],
    },
  },

  {//VR Retail Execution Training Simulator
    slug: "VR-Retail-Execution-Training-Simulator",
    title: "VR Retail Execution Training Simulator",
    image: femsa1_1,
    technologies: ["Unity", "C#", "VR", "Oculus Rift", "VR Interaction Systems", "UI/UX", "Drag & Drop Systems", "Validation Logic", "Performance Evaluation Systems", "REST APIs", "JSON", " 3D Environments"],
    description:
      "Virtual Reality training and evaluation system developed for FEMSA sales teams.",
    responsibilities: [
      "Developed the complete VR training simulator using Unity and C#.",
      "Designed and implemented all interaction systems.",
      "Created the virtual tablet interface used for product selection.",
      "Developed drag-and-drop interaction mechanics adapted for VR.",
      "Implemented object placement systems for products, stands, and advertising materials.",
      "Created validation systems to evaluate compliance.",
      "Developed scoring and performance evaluation logic.",
      "Integrated multiple training scenarios and environment configurations.",
      "Implemented user feedback systems and training workflows.",
      "Integrated backend communication for performance data reporting.",
      "Optimized VR interactions and application performance.",
      "Coordinated integration of 3D assets and training content.",
    ],
    //demoUrl: "#",
    //githubUrl: "#",
    caseStudy: {
      category: "VR Retail Execution Training Simulator",
      duration: "7 months · 2023 — 2024",
      //videoUrl: "#",
      //liveDemoUrl: "#",
      overview:
        "The application simulates realistic Mexican retail environments where employees must organize products, promotional materials assets according to predefined commercial standards. Users navigate different store scenarios and are required to correctly place beverages, dairy products, water, juices, promotional stands, and advertising materials inside refrigerators and store displays. Each environment presents unique requirements based on location type, customer demographics, and store configuration. The platform evaluates user performance and generates scoring data that can later be reviewed by instructors through external reporting systems.",
      goal: "Develop an immersive Virtual Reality training platform that enables sales representatives to practice merchandising and retail execution standards in realistic store environments, improving product placement accuracy and operational consistency before performing tasks in real-world locations.",
      problem: [
        "Retail execution quality directly impacts product visibility, brand presence, and sales performance. However, training sales representatives on merchandising standards across multiple store formats can be costly, time-consuming, and difficult to standardize.",
        "Sales representatives must learn how to correctly organize products, promotional materials, and display assets according to specific business rules that vary depending on store type, refrigerator configuration, and customer demographics.",
        "Traditional training methods often rely on classroom instruction or field supervision, making it difficult to consistently evaluate employee performance before they enter real retail environments.",
        "The organization needed a scalable and measurable solution that could provide hands-on training while objectively assessing merchandising skills and compliance with retail execution standards.",
      ],
      solution: [
        "Developed an immersive Virtual Reality training simulator that recreates realistic Mexican retail environments where sales representatives can practice merchandising tasks in a safe and controlled setting.",
        "The platform allows users to interact with virtual stores, select products from a virtual tablet interface, and place beverages, promotional materials, stands, and advertisements according to predefined retail execution guidelines.",
        "Multiple store scenarios were implemented, including residential, educational, and restaurant-adjacent locations, each with unique merchandising requirements and refrigerator configurations.",
        "The simulator automatically validates product placement, evaluates user decisions, calculates performance scores, and generates training results that can be reviewed by instructors through external reporting systems.",
        "By combining realistic VR interactions with automated evaluation, the solution provides a scalable training environment that helps standardize merchandising practices and improve employee preparedness before working in real stores.",
      ],
      roles: ["Unity", "C#", "Oculus Rift", "VR Interaction Systems", "UI/UX", "Drag & Drop Systems", "Validation Logic", "Performance Evaluation Systems", "REST APIs", "JSON", "3D Environments"],
      roleResponsibilities: [
        "Responsible for the complete development of the VR simulation experience, including gameplay systems, interaction mechanics, UI implementation, validation logic, and training workflows.",

      ],
      features: [
        {
          icon: "RectangleGoggles",
          title: "Realistic Retail Simulations",
          description:
            "Multiple fully modeled 3D store environments based on real Mexican convenience stores.",
        },
        {
          icon: "Replace",
          title: "Product Placement Training",
          description:
            "Users learn correct product distribution across different refrigerator types and merchandising spaces.",
        },
        {
          icon: "Pointer",
          title: "Interactive Object Placement",
          description:
            "Virtual products, promotional stands, and marketing materials can be selected and placed within the environment.",
        },
        {
          icon: "ShelvingUnit",
          title: "VR Inventory Interaction System",
          description:
            "Products are selected from a virtual tablet interface and instantiated as 3D objects for direct interaction.",
        },
        {
          icon: "ChartCandlestick",
          title: "Validation & Scoring System",
          description:
            "Automatic verification of product placement according to business rules and retail standards.",
        },
        {
          icon: "MapPinHouse",
          title: "Multi-Scenario Training",
          description:
            "Different commercial contexts including schools, residential areas, restaurants, and other retail locations.",
        },
        {
          icon: "CirclePile",
          title: "Performance Evaluation",
          description:
            "User actions are recorded and evaluated to generate training scores and performance metrics.",
        },
      ],
      challenges: [
        {
          title: "",
          description:
            "One of the primary challenges was translating real-world merchandising processes into intuitive VR interactions.",
        },
        {
          title: "",
          description:
            "The system needed to accurately validate product placement based on multiple variables, including store type, refrigerator configuration, product category, and merchandising rules.",
        },
        {
          title: "",
          description:
            "Additional challenges included creating efficient VR interaction workflows, managing large numbers of interactive objects, and maintaining performance across complex 3D environments while ensuring a smooth user experience.",
        },
      ],
      results: [
        { metric: "", label: "Enabled employees to practice store organization procedures in a risk-free virtual environment." },
        { metric: "", label: "Standardized training processes across multiple retail scenarios." },
        { metric: "", label: "Automated evaluation of merchandising compliance and placement accuracy." },
        { metric: "", label: "Improved scalability of training programs through virtual simulation." },
        { metric: "", label: "Generated performance data that could be reviewed by instructors and management teams." },
        { metric: "", label: "Reduced dependency on physical training environments." },
      ],
      resultsNarrative:
        "Delivered an immersive training solution for retail execution and merchandising practices.",
      media: [
        { type: "image", src: femsa1_1, caption: "" },
        { type: "image", src: femsa1_2, caption: "" },
        { type: "image", src: femsa1_3, caption: "" },
        { type: "image", src: femsa1_4, caption: "" },
        //{ type: "video", src: videoFemsa1, caption: "" },
        //{ type: "youtube", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", caption: "Gameplay walkthrough" },
      ],
      lessonsLearned: [
        "Effective VR training experiences require balancing realism with usability.",
        "Complex business rules can be successfully translated into interactive simulation systems.",
        "Early definition of validation logic significantly reduces implementation complexity.",
        "Modular interaction systems improve maintainability and future scalability.",
        "User feedback and intuitive interactions are critical for successful training applications.",
      ],
      futureImprovements: [
        "AI-driven coaching and performance recommendations.",
        "Advanced analytics dashboards for training managers.",
        "Integration with enterprise learning management systems (LMS).",
        "Expanded retail scenarios and merchandising configurations.",
        "Hand tracking and next-generation XR interaction systems.",
        "Digital Twin integration for real-world retail environments.",
      ],
    },
  },
  {//Enterprise-XR-Training-Platform
    slug: "Enterprise-XR-Training-Platform",
    title: "Enterprise XR Training Platform",
    image: xpertmePage,
    technologies: ["Unity", "C#", "Oculus VR", "Android", "UI/UX Systems", "REST APIs", "JSON", "Multimedia Streaming", "Video 360°", "3D Models", "Audio Systems",],
    description:
      "Enterprise training and certification platform developed for Oculus VR and Android devices. The system enables employees to access interactive learning content, complete practical exercises, perform assessments, and track their certification progress. The platform integrates with backend services to synchronize user activity, scores, training records, and progress reports, allowing instructors and administrators to monitor learning outcomes through web-based management tools.",
    responsibilities: [
      "Developed core functionality for Oculus VR and Android applications using Unity and C#.",
      "Implemented authentication, user login, and training content delivery systems.",
      "Integrated REST APIs for downloading and synchronizing training data.",
      "Managed local storage, file handling, and content loading workflows.",
      "Redesigned and improved the interactive training player used for lessons, activities, and assessments.",
      "Developed responsive UI systems for multiple screen sizes and devices.",
      "Optimized application performance, loading times, and resource management.",
      "Integrated multimedia content including 3D models, textures, audio, video, and 360° video experiences.",
      "Processed and managed JSON-based data structures.",
      "Collaborated on scalable architecture improvements to improve maintainability and future development.",
      "Supported synchronization of user progress and assessment results with backend systems.",
    ],
    //demoUrl: "#",
    //githubUrl: "#",
    caseStudy: {
      category: "Unity Development · Android Development · iOS Development Data · Synchronization",
      duration: "30 months · 2023 — 2026",
      videoUrl: "https://www.youtube.com/watch?v=0uH3qRYjcCc",
      //liveDemoUrl: "#",
      overview:
        "Development of enterprise training applications for Oculus VR and Android platforms, focused on employee certification, learning management, and performance evaluation through interactive experiences.",
      goal: "Develop a scalable enterprise training and certification platform for Oculus VR and Android devices, enabling organizations to deliver immersive learning experiences, evaluate employee performance, and monitor training progress through centralized management systems.",
      problem: [
        "Organizations needed a scalable solution to train and certify employees through immersive and interactive learning experiences.",
        "The main challenge was managing large amounts of training data, user progress, assessments, multimedia content, and synchronization between client applications and backend services while maintaining performance across multiple devices.",

      ],
      solution: [
        "Developed and maintained core functionality for both Oculus VR and Android applications using Unity.",
        "Implemented user authentication, content delivery systems, API integrations, local data storage, content downloading, and learning progress synchronization.",
        "Redesigned and improved the interactive training player, allowing users to: Access learning modules, View multimedia content, Interact with training activities,Complete evaluations and exams,Track certification progress ",
        "Additionally, optimized the application architecture to support future growth and simplify maintenance.",
      ],
      roles: ["Unity Developer"],
      roleResponsibilities: [
        "Development of Oculus VR application modules",
        "Development of Android application modules",
        "User authentication systems",
        "API integration and data synchronization",
        "JSON data processing",
        "Local file storage and content management",
        "Responsive UI implementation",
        "Application optimization",
        "Multimedia content integration",
        "Basic animation implementation",
        "3D asset integration",
        "Performance improvements",
      ],
      features: [
        {
          icon: "Component",
          title: "Interactive Learning Modules",
          description:
            "Access to practical lessons, multimedia content, and guided training experiences.",
        },
        {
          icon: "ShieldCheck",
          title: "Assessments & Certifications",
          description:
            "Users can complete quizzes, evaluations, and certification activities directly within the application.",
        },
        {
          icon: "PictureInPicture2",
          title: "Multi-Platform Support",
          description:
            "Available on Oculus VR and Android devices, providing immersive and mobile learning experiences.",
        },
      ],
      challenges: [
        {
          title: "One of the primary challenges was understanding and organizing a large volume of interconnected training data, user records, assessments, and multimedia content.",
          description:
            "To address this, the application was structured into modular systems, improving scalability, maintainability, and code readability while supporting future feature expansion.",
        },
      ],
      results: [
        { metric: "", label: "Delivered a unified training experience across Oculus VR and Android platforms." },
        { metric: "", label: "Improved accessibility to training content through responsive and user-friendly interfaces." },
        { metric: "", label: "Enhanced application performance and loading times through optimization efforts." },
        { metric: "", label: "Facilitated instructor monitoring and evaluation through centralized reporting and progress tracking systems." },
      ],
      resultsNarrative:
        "",
      media: [
        { type: "image", src: xpertme1, caption: "Home" },
        { type: "image", src: xpertme2, caption: "Loading" },
        { type: "image", src: xpertme3, caption: "Menu" },
        { type: "image", src: xpertme4, caption: "Quiz" },
        { type: "image", src: xpertme5, caption: "Login: same components, horizontal" },
        { type: "image", src: xpertme6, caption: "Login: same components, vertical" },
        { type: "youtube", src: "https://youtu.be/3TBmPHipl-Q?si=j9FtJu1Zc0XN5rDm", caption: "Implementando Xpertme durante el trabajo a distancia - Caso de éxito" },
      ],
      lessonsLearned: [
        "Designing scalable systems becomes increasingly important as applications grow in complexity and data volume.",
        "A modular architecture significantly improves maintainability, readability, and future feature development.",
        "Managing synchronization between client applications and backend services requires careful planning and data organization.",
      ],
      futureImprovements: [
        "Integration of AR training experiences alongside existing VR and mobile modules.",
        "Expanded support for additional XR devices and future hardware.",
      ],
    },
  },
  {//InfoVir AR
    slug: "InfoVir-AR–Augmented-Reality-COVID-19-Educational-App",
    title: "InfoVir AR – Augmented Reality COVID-19 Educational App",
    image: infovir4,
    technologies: ["Unity", "C#", "AR Foundation / ARCore", "Android", "Google Play", "3D Animation Integration", "Mobile UI/UX"],
    description:
      "Interactive AR mobile application that educates users about COVID-19 through 3D visualizations and animations.",
    responsibilities: [
      "Developed the complete application in Unity.",
      "Implemented the application flow and navigation.",
      "Integrated augmented reality experiences.",
      "Programmed interactive educational modules.",
      "Implemented 3D animations and scene transitions.",
      "Developed the virus visualization module.",
      "Implemented symptom visualization.",
      "Developed the virus transmission simulation.",
      "Implemented prevention demonstrations.",
      "Created the social distancing visualization.",
      "Optimized the application for Android devices.",
      "Prepared the application for Google Play deployment."
    ],
    demoUrl: "https://www.behance.net/gallery/100400303/App-de-AR-INFOVIR-Covid19-?tracking_source=search_projects_recommended%7Cinfovir",
    //githubUrl: "#",
    caseStudy: {
      category: "Image Tracking · AR.js · HTML5 · WebGL",
      duration: "1 months · 2019",
      //videoUrl: "https://www.youtube.com/watch?v=0uH3qRYjcCc",
      //liveDemoUrl: "#",
      overview: "During the COVID-19 pandemic, there was an urgent need to communicate health information in a way that was easy to understand for all audiences. Traditional text-based information was often less engaging, making it difficult for users to visualize how the virus spreads and how preventive measures reduce infection risk.",
      goal: "Develop an augmented reality application that helps users understand COVID-19 by presenting educational content in an engaging and interactive way. The app explains the virus, its symptoms, transmission methods, prevention measures, and recommended social distancing using 3D animations.",
      problem: [
        "Public health campaigns needed a more engaging way to explain COVID-19 concepts. Many users struggled to understand invisible processes such as virus transmission and safe interpersonal distancing through traditional media alone.",
      ],
      solution: [
        "Developed an augmented reality application that transforms educational content into interactive 3D experiences, allowing users to visualize the virus, understand transmission methods, and learn prevention techniques in a more intuitive and memorable way.",

      ],
      roles: ["Unity Developer"],
      roleResponsibilities: [
        "I was responsible for the complete application development in Unity, implementing the user experience, augmented reality interactions, navigation, and educational modules.",

      ],
      features: [
        {
          icon: "Worm",
          title: "Interactive Virus Visualization",
          description:
            "Display of a detailed 3D coronavirus model in augmented reality with educational explanations.",
        },
        {
          icon: "Search",
          title: "Symptoms Explorer",
          description:
            "Interactive animations explaining the most common symptoms associated with COVID-19.",
        },
        {
          icon: "SunMedium",
          title: "Virus Transmission Simulation",
          description:
            "Visual demonstrations showing how respiratory droplets spread between people.",
        },
        {
          icon: "ShieldCogCorner",
          title: "Prevention Guidelines",
          description:
            "Educational AR content demonstrating preventive measures such as hand hygiene and mask usage.",
        },
        {
          icon: "RulerDimensionLine",
          title: "Social Distancing Visualization",
          description:
            "Real-scale augmented reality visualization illustrating the recommended safe distance between individuals.",
        },
      ],
      challenges: [
        {
          title: "Reliable Image Detection",
          description:
            "Ensuring the mural could be recognized consistently despite varying camera angles, lighting conditions, and mobile devices.",
        },
        {
          title: "Browser-Based Deployment",
          description:
            "Delivering an augmented reality experience without requiring users to download or install an application.",
        },
        {
          title: "Lightweight User Experience",
          description:
            "Keeping the experience simple enough for non-technical users while maintaining acceptable performance on mobile devices.",
        },
      ],
      results: [
        { metric: "", label: "Successfully published as an Android application." },
        { metric: "", label: "Improved accessibility to educational COVID-19 content." },
        { metric: "", label: "Combined AR technology with health education." },
        { metric: "", label: "Delivered an engaging alternative to static informational materials." },
        { metric: "", label: "Demonstrated the use of Unity beyond gaming in healthcare and public awareness." },
      ],
      resultsNarrative:
        "",
      media: [
        //{ type: "video", src: videoBimboAR_1, caption: "" },
        { type: "image", src: infovir1, caption: "" },
        { type: "image", src: infovir2, caption: "" },
        { type: "image", src: infovir3, caption: "" },

      ],
      lessonsLearned: [
        "Designing intuitive educational experiences with augmented reality.",
        "Optimizing AR performance for mobile devices.",
        "Structuring educational content into interactive modules.",
        "Integrating 3D assets into mobile AR applications.",
        "Creating user experiences that simplify complex concepts through visualization."
      ],
      futureImprovements: [
        "Multi-language support.",
        "Interactive quizzes and knowledge assessments.",
        "Healthcare analytics dashboard.",
        "Updated educational content for new diseases."
      ],
    },
  },
  {
    slug: "Bimbo-WOW–Interactive-360°-Learning Experience",
    title: "Bimbo WOW – Interactive 360° Learning Experience",
    image: bimboWow_5,
    technologies: ["Three.js", "JavaScript", "WebGL", "HTML5", "CSS3", "360° Rendering", "Interactive Learning Systems"],
    description:
      "Bimbo WOW is an interactive 360° web experience developed using Three.js and WebGL technologies.",
    responsibilities: [
      "Implemented 360° environment rendering using Three.js.",
      "Integrated 3D objects into interactive scenes.",
      "Developed object discovery mechanics.",
      "Implemented mission progression systems.",
      "Created trivia interaction workflows.",
      "Integrated multimedia educational content.",
      "Optimized browser performance and loading processes.",
      "Collaborated with content and design teams to build interactive learning experiences.",
    ],
    //demoUrl: "#",
    //githubUrl: "#",
    caseStudy: {
      category: "UInteractive 360° ·WebGL",
      duration: "1 months · 2019",
      //videoUrl: "https://www.youtube.com/watch?v=0uH3qRYjcCc",
      //liveDemoUrl: "#",
      overview:
        "Users explore immersive virtual environments where they must locate hidden objects, complete knowledge challenges, and unlock educational content. Each mission combines exploration, trivia questions, and multimedia resources such as videos, images, and PDF documents. The experience transforms traditional learning materials into an interactive and engaging journey, encouraging users to actively participate rather than passively consume content.",
      goal: "Create an engaging web-based learning experience that combines gamification, exploration, and educational content to increase user engagement and knowledge retention.",
      problem: [
        "Traditional educational content often suffers from low engagement and limited user interaction. Static materials such as documents, presentations, and videos can reduce user participation and knowledge retention.",
        "The client needed a more engaging approach that could:",
        "Encourage exploration and discovery.",
        "Increase user participation.",
        "Deliver educational content in an interactive format.",
        "Provide a modern digital experience accessible through a web browser.",
      ],
      solution: [
        "Developed a browser-based interactive experience using Three.js that combines 360° environments, object discovery mechanics, trivia challenges, and multimedia learning content.",
        "Users navigate through immersive scenes, locate mission objectives, answer knowledge-based questions, and unlock additional educational resources upon successful completion.",
        "The experience gamifies the learning process while maintaining accessibility through standard web browsers.",
      ],
      roles: ["Three.js Developer"],
      roleResponsibilities: [
        "Responsible for implementing the interactive experience, 360° rendering systems, object integration, and gameplay mechanics.",

      ],
      features: [
        {
          icon: "Telescope",
          title: "Interactive 360° Exploration",
          description:
            "Navigate immersive panoramic environments directly within a web browser.",
        },
        {
          icon: "Binoculars",
          title: "Object Discovery Missions",
          description:
            "Players must locate specific hidden objects to complete objectives.",
        },
        {
          icon: "Swords",
          title: "Knowledge Challenges",
          description:
            "Interactive trivia questions validate user understanding.",
        },
        {
          icon: "Library",
          title: "Multimedia Learning Content",
          description:
            "Support for videos, images, PDF documents, and educational resources.",
        },
        {
          icon: "Globe",
          title: "Browser-Based Experience",
          description:
            "No installation required; accessible through standard web technologies.",
        },
        {
          icon: "BookText",
          title: "Gamified Learning Flow",
          description:
            "Exploration, discovery, validation, and content unlocking.",
        },
      ],
      challenges: [
        {
          title: "360° Environment Integration",
          description:
            "Ensuring smooth navigation and interaction within panoramic environments while maintaining browser performance.",
        },
        {
          title: "Educational Content Integration",
          description:
            "Creating a seamless transition between exploration mechanics, trivia challenges, and multimedia learning materials.",
        },
        {
          title: "Performance Optimization",
          description:
            "Balancing visual quality and responsiveness across different devices and browsers.",
        },
      ],
      results: [
        { metric: "", label: "Delivered an engaging educational web experience." },
        { metric: "", label: "Increased user interaction through gamified learning mechanics." },
        { metric: "", label: "Combined exploration, assessment, and educational content within a single platform." },
        { metric: "", label: "Enabled learning experiences without requiring software installation." },
        { metric: "", label: "Expanded the use of immersive technologies beyond traditional VR applications." },
      ],
      resultsNarrative:
        "",
      media: [
        //{ type: "video", src: videoBimboWow_1, caption: "" },
        { type: "image", src: bimboWow_1, caption: "" },
        { type: "image", src: bimboWow_2, caption: "" },
        { type: "image", src: bimboWow_3, caption: "" },
        { type: "image", src: bimboWow_4, caption: "" },
        { type: "image", src: bimboWow_5, caption: "" },
        { type: "image", src: bimboWow_6, caption: "" },
      ],
      lessonsLearned: [
        "Browser-based 3D experiences can provide many benefits of immersion while remaining highly accessible.",
        "Educational content is more effective when users actively participate in the learning process.",
      ],
      futureImprovements: [
        "Mobile-first optimization.",
        "Expanded mission and content authoring tools.",
      ],
    },
  },
  {
    slug: "Bimbo-AR-Training Wall",
    title: "Bimbo AR Training Wall",
    image: bimboAR_1,
    technologies: ["AR.js", "A-Frame", "Three.js", "JavaScript", "HTML5", "CSS3", "WebAR", "Image Tracking",],
    description:
      "A WebAR experience developed for Grupo Bimbo that allows employees to access workplace guidance and operational recommendations by scanning a large informational mural using their smartphone camera.",
    responsibilities: [
      "Developed the complete WebAR application.",
      "Implemented image tracking and recognition systems.",
      "Integrated AR.js with A-Frame and Three.js.",
      "Created content activation workflows.",
      "Implemented mobile web interactions.",
      "Optimized browser performance.",
      "Tested image recognition behavior under different conditions.",
    ],
    //demoUrl: "#",
    //githubUrl: "#",
    caseStudy: {
      category: "Image Tracking · AR.js · HTML5 · WebGL",
      duration: "1 months · 2019",
      //videoUrl: "https://www.youtube.com/watch?v=0uH3qRYjcCc",
      //liveDemoUrl: "#",
      overview:
        "The experience uses image recognition technology to detect the mural and display contextual content without requiring any mobile application installation. The project was designed to improve employee engagement with internal communication materials while demonstrating the potential of browser-based augmented reality experiences.",
      goal: "Transform a large physical training mural into an interactive augmented reality experience that provides employees with workplace tips and operational best practices directly from their mobile devices.",
      problem: [
        "Large informational murals are commonly used to communicate operational procedures and workplace recommendations. However, static content often struggles to maintain employee engagement and may be overlooked during daily activities.",
        "The organization wanted a simple and accessible way to make internal communication more interactive without requiring employees to install additional software.",

      ],
      solution: [
        "Developed a browser-based augmented reality experience using AR.js, A-Frame, and Three.js.",
        "Employees could open a URL on their mobile device, scan the mural, and instantly access digital content related to workplace best practices.",
        "The experience transformed a traditional printed communication asset into an interactive learning tool while keeping deployment simple and accessible.",
        "Additionally, optimized the application architecture to support future growth and simplify maintenance.",
      ],
      roles: ["WebAR Developer"],
      roleResponsibilities: [
        "Responsible for the complete development and implementation of the augmented reality experience.",

      ],
      features: [
        {
          icon: "Globe",
          title: "Browser-Based Augmented Reality",
          description:
            "No application installation required.",
        },
        {
          icon: "Camera",
          title: "Image Recognition",
          description:
            "Recognition of the training mural using the device camera.",
        },
        {
          icon: "CopyCheck",
          title: "Interactive Training Tips",
          description:
            "Display of workplace recommendations and operational guidance.",
        },
        {
          icon: "TabletSmartphone",
          title: "Mobile Accessibility",
          description:
            "Accessible through standard mobile browsers.",
        },
        {
          icon: "Handshake",
          title: "Internal Communication Enhancement",
          description:
            "Combines physical and digital communication channels.",
        },
      ],
      challenges: [
        {
          title: "Reliable Image Detection",
          description:
            "Ensuring the mural could be recognized consistently despite varying camera angles, lighting conditions, and mobile devices.",
        },
        {
          title: "Browser-Based Deployment",
          description:
            "Delivering an augmented reality experience without requiring users to download or install an application.",
        },
        {
          title: "Lightweight User Experience",
          description:
            "Keeping the experience simple enough for non-technical users while maintaining acceptable performance on mobile devices.",
        },
      ],
      results: [
        { metric: "", label: "Successfully transformed a static communication asset into an interactive experience." },
        { metric: "", label: "ncreased engagement with internal training content." },
        { metric: "", label: "Demonstrated the viability of WebAR for enterprise communication." },
        { metric: "", label: "Eliminated installation barriers by using browser-based technologies." },
      ],
      resultsNarrative:
        "",
      media: [
        //{ type: "video", src: videoBimboAR_1, caption: "" },
        { type: "image", src: bimboAR_1, caption: "" },
        { type: "image", src: bimboAR_2, caption: "" },
        { type: "image", src: bimboAR_3, caption: "" },
        { type: "image", src: bimboAR_4, caption: "" },
        { type: "image", src: bimboAR_5, caption: "" },
        { type: "image", src: bimboAR_6, caption: "" },
        { type: "image", src: bimboAR_7, caption: "" },
        { type: "image", src: bimboAR_8, caption: "" },
      ],
      lessonsLearned: [
        "WebAR can be an effective solution for lightweight enterprise experiences.",
        "Simplicity often leads to higher adoption rates.",
        "mage-tracking quality directly impacts user engagement.",
        "Browser-based AR significantly reduces deployment complexity."
      ],
      futureImprovements: [
        "Animated 3D content instead of static images.",
        "Multi-language support.",
      ],
    },
  },
  {
    slug: "VR-Hazard-Detection-&-Driver-Awareness-Training-Platform",
    title: "VR Hazard Detection & Driver Awareness Training Platform",
    image: bimboD_1,
    technologies: ["Unity", "C#", "Node.js", "Express.js", "Socket.IO", "Google Cardboard", "VR Development", "Real-Time Communication", "Multiplayer Systems", "360° Video", "Web Dashboards"],
    description:
      "A multiplayer VR training platform developed for Grupo Bimbo to improve driver awareness and hazard recognition during onboarding programs.",
    responsibilities: [
      "Developed the complete VR training application in Unity.",
      "Implemented 360° video playback systems.",
      "Developed real-time multiplayer synchronization.",
      "Implemented Socket.IO communication systems.",
      "Integrated Node.js backend services.",
      "Created instructor-controlled session management features.",
      "Developed attention-tracking logic.",
      "Implemented quadrant-based hazard detection systems.",
      "Developed controller-based interaction workflows.",
      "Optimized mobile VR performance for Google Cardboard devices.",
      "Integrated real-time communication between trainees and instructors."
    ],
    //demoUrl: "#",
    //githubUrl: "#",
    caseStudy: {
      category: "UInteractive 360° ·WebGL",
      duration: "1 months · 2019",
      //videoUrl: "https://www.youtube.com/watch?v=0uH3qRYjcCc",
      //liveDemoUrl: "#",
      overview: "Instead of relying solely on live road demonstrations, the system uses real-world 360° driving footage that exposes trainees to common risks encountered during delivery operations. Participants use mobile VR headsets (Google Cardboard) to observe driving scenarios while instructors guide discussions, pause videos, ask questions, and evaluate hazard detection skills. The platform tracks where each trainee is looking within the 360° environment and provides instructors with real-time visibility through a web-based monitoring dashboard.",
      goal: "Provide a scalable and repeatable training solution that helps new drivers identify road hazards through guided 360° video experiences while allowing instructors to monitor participant attention and engagement in real time.",
      problem: [
        "Training new drivers traditionally required instructors to physically drive through city routes and point out potential hazards.",
        "# This approach created several limitations:",
        "Hazard situations were unpredictable.",
        "Some risks might not appear during training sessions.",
        "Training quality varied between groups.",
        "Real-world training involved operational costs.",
        "It was difficult to measure whether trainees actually identified hazards.",
        "The company needed a standardized and repeatable training solution capable of exposing all drivers to the same safety-critical situations.",
      ],
      solution: [
        "Developed a multiplayer VR training platform based on real 360° driving footage.",
        "Trainees watch immersive driving scenarios using mobile VR headsets while instructors control playback remotely through a web dashboard.",
        "The experience gamifies the learning process while maintaining accessibility through standard web browsers.",
        "Participants use a handheld controller with a joystick to identify hazards by selecting the area where they detected a risk.",
        "The platform tracks head orientation and hazard selections in real time, allowing instructors to monitor participant attention, evaluate responses, and guide discussions throughout the training session."
      ],
      roles: ["Unity Developer", "Real-Time Systems Engineer"],
      roleResponsibilities: [
        "Responsible for VR application development, multiplayer synchronization systems, real-time communication architecture, and instructor monitoring integration.",

      ],
      features: [
        {
          icon: "Globe",
          title: "360° Real-World Driving Footage",
          description:
            "Training based on actual driving environments and real traffic situations.",
        },
        {
          icon: "LayoutDashboard",
          title: "Instructor-Controlled Sessions",
          description:
            "Play, pause, and video management from a web dashboard.",
        },
        {
          icon: "RectangleGoggles",
          title: "Multiplayer VR Experience",
          description:
            "Multiple trainees connected simultaneously.",
        },
        {
          icon: "Biohazard",
          title: "Hazard Detection Exercises",
          description:
            "Participants actively identify risks within the environment.",
        },
        {
          icon: "MonitorCloud",
          title: "Real-Time Attention Monitoring",
          description:
            "Instructors can see where each participant is looking.",
        },
        {
          icon: "Building",
          title: "3x3 Quadrant Tracking System",
          description:
            "Visual representation of trainee focus areas.",
        },
        {
          icon: "ScanEye",
          title: "Interactive Risk Identification",
          description:
            "Drivers use a controller to mark detected hazards.",
        },
        {
          icon: "ShieldUser",
          title: "Standardized Safety Training",
          description:
            "Consistent exposure to critical driving situations.",
        },
      ],
      challenges: [
        {
          title: "Real-Time Synchronization",
          description:
            "Maintaining synchronization between multiple trainees while instructors controlled playback remotely.",
        },
        {
          title: "Attention Tracking",
          description:
            "Designing a lightweight solution capable of tracking user focus direction and transmitting the information in real time.",
        },
        {
          title: "Hazard Detection System",
          description:
            "Creating a mechanism that allowed trainees to identify risks naturally within a 360° environment using a handheld controller.",
        },
        {
          title: "Low-Cost VR Hardware",
          description:
            "Delivering immersive experiences on mobile-based VR devices while maintaining acceptable performance.",
        },
      ],
      results: [
        { metric: "", label: "Standardized driver safety training procedures." },
        { metric: "", label: "Reduced dependency on live route demonstrations." },
        { metric: "", label: "Enabled repeatable exposure to critical hazard scenarios." },
        { metric: "", label: "Improved instructor visibility into trainee engagement." },
        { metric: "", label: "Created a scalable onboarding solution for new drivers." },
        { metric: "", label: "Allowed objective evaluation of hazard recognition skills." },
        { metric: "", label: "Increased consistency across training sessions." },
      ],
      resultsNarrative:
        "",
      media: [
        //{ type: "video", src: videoBimboWow_1, caption: "" }, //agregar video

        { type: "image", src: bimboD_1, caption: "" },
        { type: "image", src: bimboD_2, caption: "" },
      ],
      lessonsLearned: [
        "Real-world footage can effectively simulate many training situations without requiring complex 3D environments.",
        "Attention tracking provides valuable insight into trainee awareness.",
        "Instructor-guided VR experiences can significantly improve learning outcomes.",
        "Multiplayer synchronization can be applied beyond gaming scenarios to enterprise training applications."
      ],
      futureImprovements: [
        "Automated scoring systems.",
        "Analytics dashboards.",
        "Mixed Reality support."
      ],
    },
  },
  {
    slug: "ar-vr-enterprise-solutions",
    title: "AR/VR Enterprise Solutions",
    image: enterpriseImg,
    technologies: ["Unity", "AR", "VR", "Mobile"],
    description:
      "Suite of cross-platform AR and VR applications delivered to enterprise clients for training, sales and visualization.",
    responsibilities: [
      "Architected reusable XR framework shared across multiple client products",
      "Delivered AR experiences on iOS and Android with Vuforia and ARCore",
      "Coordinated with 3D artists and product owners to ship on tight deadlines",
    ],
    demoUrl: "#",
  },
  {
    slug: "planetarium-virtual-tour",
    title: "Planetarium Virtual Tour",
    image: planetariumImg,
    technologies: ["Unity", "VR", "Interactive Experiences"],
    description:
      "Interactive virtual tour for the IPN Planetarium recreating the universe in real time for visitors and educational programs.",
    responsibilities: [
      "Developed immersive scene transitions and astronomy interactions",
      "Optimized rendering for sustained 90 FPS on standalone VR hardware",
      "Implemented narrated guided experiences in Spanish and English",
    ],
    demoUrl: "#",
  },
  {
    slug: "mobile-interactive-applications",
    title: "Mobile Interactive Applications",
    image: mobileImg,
    technologies: ["Unity", "Android", "iOS"],
    description:
      "Series of interactive mobile apps with AR features, gamified content and offline-first architecture.",
    responsibilities: [
      "Published apps to App Store and Google Play",
      "Designed offline data sync layer and analytics pipeline",
      "Implemented adaptive UI for tablets and phones",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  return projects.filter((p) => p.slug !== slug).slice(0, limit);
}

export const skillCategories = [
  {
    title: "Programming",
    skills: ["C#", "JavaScript"],
  },
  {
    title: "Unity",
    skills: ["Unity", "Shader Graph", "Optimization", "Physics"],
  },
  {
    title: "XR Technologies",
    skills: ["AR", "VR", "XR", "Vuforia", "ARCore"],
  },
  {
    title: "3D",
    skills: ["Blender", "3D Modeling", "Animation"],
  },
  {
    title: "Industrial Technologies",
    skills: ["Arduino", "IoT", "Simulation Systems"],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    company: "Xpertme",
    role: "Senior Unity / XR Developer",
    period: "2022 — Present",
    description:
      "Leading XR product development for enterprise clients across simulation, training and visualization.",
  },
  {
    company: "Sumeru",
    role: "Unity Developer",
    period: "2020 — 2022",
    description:
      "Built interactive Unity applications and AR/VR prototypes for international clients.",
  },
  {
    company: "Webxsp",
    role: "Interactive Developer",
    period: "2018 — 2020",
    description:
      "Developed interactive web and mobile experiences with a focus on 3D and immersive content.",
  },
  {
    company: "IPN Planetarium",
    role: "VR Developer",
    period: "2016 — 2018",
    description:
      "Created immersive astronomy experiences and guided VR tours for public exhibitions.",
  },
];

export const futureTech = [
  "Digital Twins",
  "Databricks",
  "Azure",
  "IoT",
  "Smart Manufacturing",
];
