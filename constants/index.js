export const exploreWorlds = [
  {
    id: 'Project-1',
    imgUrl: '/project-1.png',
    title: 'My own Neural Network',
  },
  {
    id: 'Project-2',
    imgUrl: '/project-2.png',
    title: 'SmartSlide',
  },
  {
    id: 'Project-3',
    imgUrl: '/project-3.png',
    title: 'PixScout: An Odyssey',
  },
  {
    id: 'Project-7',
    imgUrl: '/project-7.png',
    title: 'Serverless AWS app',
  },
  {
    id: 'Project-8',
    imgUrl: '/project-8.png',
    title: 'E-commerce website',
  },
];

export const startingFeatures = [
  'Find a world that suits you and you want to enter',
  'Enter the world by reading basmalah to be safe',
  'No need to beat around the bush, just stay on the gas and have fun',
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'A new world',
    subtitle:
        'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/headset.svg',
    title: 'More realistic',
    subtitle:
        'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];

export const insights = [
  {
    imgUrl: '/HKU.png',
    title: 'Find a list of certifications and courses I have completed so far!',
    subtitle:
        'I believe that consistent self-development helps me improve myself. Here you canf ind some courses I have completed with Coursera, AWS, etc.',
  },
  {
    imgUrl: '/notes_ss.png',
    title: 'View my notes on Machine Learning/AI',
    subtitle:
        'I have been very interested in the world of Machine Learning/AI. Here, you can find some notes, and my own neural network I built from scratch without any libraries. ',
  },
  {
    imgUrl: '/headshot-1.jpeg',
    title: 'Find out more about my life outside Computer Science!',
    subtitle:
        'I love to play the piano in my free time, and believe that hitting the gym helps me stay on my toes at all times!',
  },
];
export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
    link: 'https://twitter.com/joshuakatt',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
    link: 'https://linkedin.com/in/joshua-kattapuram',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
    link: 'https://instagram.com/username',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
    link: 'https://facebook.com/username',
  },
];

export const exploreProjects = [
  {
    "id": "Project-0",
    "imgUrl": "/project-0.png",
    "title": "edified.io",
    "description": "My first Generative AI application.Developed a Generative AI application on OpenAI and BERT’s LLM using NextJS 13, Flask and Axios. Used Docker to containerize app for easier deployment and scalability.Used Kubernetes to deploy on cloud with Azure Kubernetes Service for high availability and load balancing.",
    "sections": [
      {
        "title": "About this Project",
        "content": "Notion.io was the inspiration for this app. I wanted to make note taking to the next level. I also learnt Kubernetes, Azure, and Flask so it was very enriching!"
      },
      {
        "title": "Tech-stack",
        "content": "NextJS 13, TypeScript, Docker, Azure Kubernetes Services, Flask, Python, Kubernetes, Azure DevOps, Javascript"
      }
    ],
    "imageText": "https://github.com/joshuakatt/edified.io"
  },{
    "id": "Project-1",
    "imgUrl": "/project-1.png",
    "title": "My own Neural Network",
    "description": "I embarked on an exciting journey to create my very own neural network, using the MNIST dataset. Building a Multilayer Perceptron (MLP) from scratch in Python, I trained it to recognize handwritten digits and evaluated its performance using Python and NumPy. The experience provided a deep insight into the intricacies of neural networks and honed my skills in data preprocessing and evaluation.",
    "sections": [
      {
        "title": "About this Project",
        "content": "This project began with the preprocessing of the MNIST dataset, including normalizing pixel values and one-hot encoding labels. I designed the Neural Network Model with an input layer, two hidden layers, and an output layer. Activation functions like ReLU were used in hidden layers, and Softmax for the output layer, making it suitable for multi-class classification. The training involved forward propagation, loss calculation, and backpropagation using the gradient descent algorithm. Finally, the model's performance was evaluated using the accuracy metric, a satisfying culmination of the project."
      },
      {
        "title": "Tech-stack",
        "content": "Python, NumPy"
      }
    ],
    "imageText": "https://github.com/joshuakatt/First-neural-network"
  },
  {
    "id": "Project-2",
    "imgUrl": "/project-2.png",
    "title": "SmartSlide",
    "description": "SmartSlide revolutionizes meetings and presentations by automating slide transitions using presenter speech. By integrating live speech recognition, it eliminates the need to manually change slides, enhancing the flow and efficiency of communication. This innovative approach leverages Python, Tkinter, and the TextRazor API to create a seamless user experience.",
    "sections": [
      {
        "title": "About this Project",
        "content": "SmartSlide is designed to make slide transitions smooth and hands-free during presentations. It's a smart program that understands the presenter's speech, allowing it to automatically move to the next slide without manual intervention. By employing technologies like Applescript, speech recognition, pyaudio, and multithreading, it ensures that the presenter can focus on communication rather than technicalities, creating a more engaging and professional presentation experience."
      },
      {
        "title": "Tech-stack",
        "content": "Python, Tkinter, TextRazor API, Applescript, speech recognition, pyaudio, multithreading"
      }
    ],
    "imageText": "https://github.com/joshuakatt/SmartSlide"
  },
  {
    "id": "Project-3",
    "imgUrl": "/project-3.png",
    "title": "PixScout: A 2D Odyssey",
    "description": "PixScout: A 2D Odyssey is a captivating game that brings together animated sprites, follow-around camera, and real-time in-game physics. With a modular game loading feature, players can easily switch between different game experiences. Whether exploring a simpler map in Game1 or tackling a more complex terrain in Game2, the adventure awaits. Built with LUA and LÖVE 2D, the game offers an immersive experience.",
    "sections": [
      {
        "title": "About this Project",
        "content": "PixScout: A 2D Odyssey offers an engaging gaming experience with two unique maps to explore. Game1 provides a simpler landscape for easy navigation, while Game2 invites players into a larger and more intricate world. The game empowers players with character selection, exploration, and interactive features, all supported by the anim8 library for animations and the STI library for tiled layouts. It's a journey into creativity and fun, showcasing the potentials of 2D game development with LUA and LÖVE 2D."
      },
      {
        "title": "Tech-stack",
        "content": "LUA, LÖVE 2D, STI library, anim8 library"
      }
    ],
    "imageText": "https://github.com/joshuakatt/PixScout-A-2D-Odyssey"
  },
  {
    "id": "Project-4",
    "imgUrl": "/project-4.png",
    "title": "ML Image Recognition",
    "description": "ML Image Recognition is an advanced exploration into the world of image classification using the CIFAR 100 dataset. By delving into convolutional neural networks (CNNs), transfer learning with models like VGG16, and utilizing techniques like data augmentation, the project achieves remarkable results. Two unique models were developed, each employing various strategies and technologies. This cutting-edge work, done using Python, Tensorflow, Keras, and Pandas, reflects the forefront of machine learning and AI.",
    "sections": [
      {
        "title": "About this Project",
        "content": "The ML Image Recognition project was a deep dive into the complex field of image classification. It began with image preprocessing and an in-depth understanding of CNNs. Transfer learning was utilized, with models like VGG16, along with techniques to improve generalization such as data augmentation. Two distinct models were implemented: one focused mainly on CNN, while the other combined CNN with transfer learning and data augmentation. The project not only showcases technical prowess but also offers insights into modern machine learning methods."
      },
      {
        "title": "Tech-stack",
        "content": "Python, Tensorflow, Keras, Pandas"
      }
    ],
    "imageText": "https://github.com/joshuakatt/Img-recognition-ML"
  },
  {
    "id": "Project-5",
    "imgUrl": "/project-5.png",
    "title": "ML Sentiment Analysis",
    "description": "ML Sentiment Analysis takes the challenge of classifying movie reviews into positive or negative sentiments using the IMDb dataset. A blend of Natural Language Processing techniques, word embeddings, and modern machine learning tools created a robust classification system. From tokenization to stop word removal and stemming, the project delves into the subtleties of text data preprocessing. Built using Python, Tensorflow, Keras, and GloVe, it's a showcase of how machine learning can be applied to the understanding of human emotions.",
    "sections": [
      {
        "title": "About this Project",
        "content": "The ML Sentiment Analysis project was an exploration into the sentiment classification of movie reviews. Utilizing the IMDb dataset, the task was to identify reviews as either positive or negative. The journey involved acquiring skills in Natural Language Processing, text data preprocessing like tokenization, stop word removal, stemming, and word embeddings such as Word2Vec or GloVe. The meticulous handling of text data and the implementation of cutting-edge technologies made this project an insightful experience in machine learning and sentiment analysis."
      },
      {
        "title": "Tech-stack",
        "content": "Python, Tensorflow, Keras, GloVe"
      }
    ],
    "imageText": "https://github.com/joshuakatt/Imdb-sentiment-analysis"
  },
  {
    "id": "Project-6",
    "imgUrl": "/project-6.png",
    "title": "3D Rubik's Cube Simulator",
    "description": "The 3D Rubik's Cube Simulator is a creative blend of mathematics, visualization, and interactive design. Developed in Python and utilizing the Matplotlib and NumPy libraries, this simulator brings the classic Rubik's Cube to life on your screen. With quaternion-based rotation handling, a graphical user interface to solve the cube, and features to undo steps and take screenshots, it's a fascinating example of how programming can transform a traditional puzzle into an engaging digital experience.",
    "sections": [
      {
        "title": "About this Project",
        "content": "My Rubik's Cube Simulator offers an interactive way to explore the beloved Rubik's Cube puzzle. It's not merely a static visual representation; it's an interactive environment where users can manipulate the cube using mouse and keyboard presses. Beyond visualization, the project included developing logic to solve the cube and provide tools like undoing steps and capturing the current state. The simulator is a testament to the power of programming in transforming conventional toys into immersive digital experiences."
      },
      {
        "title": "Tech-stack",
        "content": "Python, Matplotlib, NumPy"
      }
    ],
    "imageText": "https://github.com/joshuakatt/Rubiks_Cube_3D_Visualizer_Solver"
  },
  {
    "id": "Project-7",
    "imgUrl": "/project-7.png",
    "title": "CrazyRydes",
    "description": "CrazyRydes is a state-of-the-art serverless web application that leverages the power of AWS services to create a scalable and secure environment. With components such as AWS Lambda, Amazon API Gateway, AWS Amplify, Amazon DynamoDB, and Amazon Cognito, this application embodies the future of efficient web development. The serverless backend, secure user authentication, flexible data storage, and streamlined frontend development process highlight the technological innovation at the core of this project.",
    "sections": [
      {
        "title": "About this Project",
        "content": "CrazyRydes showcases the potential of serverless web application architecture, using cutting-edge AWS services. The backend, built with AWS Lambda and Amazon API Gateway, enables automatic scaling and minimized operational overhead. User authentication, powered by Amazon Cognito, ensures robust security. Amazon DynamoDB's NoSQL database service enhances data storage and retrieval capabilities. AWS Amplify facilitates frontend development, offering tools for seamless hosting and deployment."
      },
      {
        "title": "Tech-stack",
        "content": "AWS Lambda, Amazon API Gateway, Amazon DynamoDB, Amazon Cognito, AWS Amplify Console, Serverless"
      }
    ],
    "imageText": "https://github.com/joshuakatt/crazyrydes-site"
  },
  {
    "id": "Project-8",
    "imgUrl": "/project-8.png",
    "title": "Full Stack E-commerce Clone",
    "description": "The Full Stack E-commerce Clone is a robust and dynamic application that emulates a major online retail platform. Utilizing modern web technologies like JavaScript, npx, Firebase, React, Redux, and the Stripe API, this project offers a real-world e-commerce experience. With Firebase's real-time data handling, secure transaction processing through Stripe, and an engaging user interface crafted with HTML, CSS, and React Context API, it's a comprehensive demonstration of full-stack development expertise.",
    "sections": [
      {
        "title": "About this Project",
        "content": "This Full Stack E-commerce Clone project was an extensive endeavor to replicate the functionality of a major online retailer. Developed using JavaScript and npx, and integrated with Firebase for hosting and authentication, it offers a dynamic and real-time shopping experience. The secure transaction processing is handled through the Stripe API, while react-router-dom enhances navigation. The visually appealing UI, created with HTML, CSS, and React Context API, is complemented by React Redux's efficient state management, resulting in a responsive and user-friendly application."
      },
      {
        "title": "Tech-stack",
        "content": "JavaScript, npx, Firebase, React, Redux, Stripe API, HTML, CSS, React Context API"
      }
    ],
    "imageText": "https://github.com/joshuakatt/Amazon-Clone"
  },
  {
    "id": "Project-9",
    "imgUrl": "/project-9.png",
    "title": "Blog Management Platform",
    "description": "The Blog Management Platform is a sophisticated full-stack JS web application developed using Node.js and Express.js, showcasing an event-driven, non-blocking I/O model. The system is built around a RESTful API for seamless article management, supporting all CRUD (Create, Read, Update, Delete) operations. With dynamic EJS templates and well-designed route handling and server-side logic, this platform epitomizes efficiency, flexibility, and scalability in web development.",
    "sections": [
      {
        "title": "About this Project",
        "content": "The Blog Management Platform is a full-stack web application built with JS Express and Node.js. It harnesses the power of an event-driven, non-blocking I/O model, and utilizes a RESTful API to handle article management. The CRUD operations are elegantly implemented, providing an intuitive interface for data manipulation and persistence. Dynamic EJS templates enhance the user experience, while comprehensive route handling, server-side logic, and middleware implementation in Express.js ensure a robust and responsive platform."
      },
      {
        "title": "Tech-stack",
        "content": "JS Express, Node.js, REST API's, EJS, JavaScript"
      }
    ],
    "imageText": "https://github.com/joshuakatt/WebScraper"
  },
  {
    "id": "Project-10",
    "imgUrl": "/project-10.png",
    "title": "Webpage Price Monitor",
    "description": "The Webpage Price Monitor is a Go-based scraper designed to track changes and notify users efficiently. Utilizing powerful libraries such as Gin and Colly, it offers a flexible and robust solution to web scraping needs. With a custom-interval goroutine for periodic tasks and integration with GoQuery for data extraction, this tool embodies precision, reliability, and scalability in monitoring and data analysis.",
    "sections": [
      {
        "title": "About this Project",
        "content": "Engineered as a web page scraper, the Webpage Price Monitor is built using Go, Gin, and Colly libraries. It features a custom-interval goroutine for periodic scraping tasks, allowing for tailored monitoring. The integration of Colly and GoQuery enhances data extraction, change tracking, and error handling, while the deployment of a Gin router facilitates API endpoint creation and UI serving. This project represents a seamless blend of efficiency and customization in web scraping and monitoring solutions."
      },
      {
        "title": "Tech-stack",
        "content": "Go, Gin, Colly, GoQuery"
      }
    ],
    "imageText": "https://github.com/joshuakatt/WebScraper"
  },
  {
    "id": "Project-11",
    "imgUrl": "/project-11.png",
    "title": "Digital Can't Stop",
    "description": "Digital Can't Stop is a contemporary take on the classic game 'Can't Stop,' designed and crafted with Java and the Swing GUI library. Developed in collaboration with a team of fellow students for a software engineering course, this digital version introduces modern features such as Save/Load through serialization and potential networking capabilities. Thoughtfully inclusive, the game also includes accessibility features for individuals with CVD (Color Vision Deficiency).",
    "sections": [
      {
        "title": "About this Project",
        "content": "Digital Can't Stop is a digital rendition of the popular game 'Can't Stop,' built using Java and the Swing GUI library. Collaboratively developed with fellow students for a software engineering course, this project represents teamwork, innovation, and attention to detail. It incorporates modern features like Save/Load functionality with serialization and has been architected for future networking capabilities. The game stands out for its consideration of accessibility, providing specific features to accommodate individuals with CVD."
      },
      {
        "title": "Tech-stack",
        "content": "Java, Swing GUI library, Serialization"
      }
    ],
    "imageText": "https://github.com/joshuakatt/Digital-Can-t-Stop"
  }
  // Add more projects as needed
];


export const exploreCerts = [
  {
    "id": "Cert-1",
    "imgUrl": "/UofL.png",
    "title": "University of London",
    "description": "",
    "sections": [
      {
        "title": "About this Certification",
        "content": ""
      },
      {
        "title": "Issuing Authority",
        "content": "University of London"
      }
    ],
    "imageText": "University of London"
  },
  {
    "id": "Cert-2",
    "imgUrl": "/Yale.png",
    "title": "Yale University",
    "description": "",
    "sections": [
      {
        "title": "About this Certification",
        "content": ""
      },
      {
        "title": "Issuing Authority",
        "content": "Yale University"
      }
    ],
    "imageText": "Yale University"
  },
  {
    "id": "Cert-3",
    "imgUrl": "/HKU.png",
    "title": "The Hong Kong University of Science and Technology",
    "description": "",
    "sections": [
      {
        "title": "About this Certification",
        "content": ""
      },
      {
        "title": "Issuing Authority",
        "content": "The Hong Kong University of Science and Technology"
      }
    ],
    "imageText": "The Hong Kong University of Science and Technology"
  },
  {
    "id": "Cert-4",
    "imgUrl": "/Upenn.png",
    "title": "University of Pennsylvania",
    "description": "",
    "sections": [
      {
        "title": "About this Certification",
        "content": ""
      },
      {
        "title": "Issuing Authority",
        "content": "University of Pennsylvania"
      }
    ],
    "imageText": "University of Pennsylvania"
  }
  
  
  // Add more projects as needed
];