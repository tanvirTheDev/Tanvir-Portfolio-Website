export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt:
      "Learn the basics of React and start building your first component.",
    category: "webDevelopment",
    content:
      "React is a popular JavaScript library for building user interfaces. In this post, we'll cover the basics of React, including components, props, and state. We'll also walk through creating your first React component.\n\nTo get started with React, you'll need to have Node.js installed on your computer. Once you have Node.js, you can create a new React project using Create React App, a tool that sets up a new React project with a good default configuration.\n\nHere's how to create a new React project:\n\n```bash\nnpx create-react-app my-first-react-app\ncd my-first-react-app\nnpm start\n```\n\nThis will create a new React project and start a development server. You can now open your browser and navigate to `http://localhost:3000` to see your React app running.\n\nIn the next section, we'll cover how to create and use React components, which are the building blocks of any React application. We'll explore how to pass data between components using props and how to manage component state for dynamic user interfaces.",
  },
  {
    id: 2,
    title: "Introduction to Machine Learning",
    excerpt:
      "Discover the fundamentals of machine learning and its applications.",
    category: "machineLearning",
    content:
      "Machine Learning is a subset of artificial intelligence that focuses on the development of algorithms and statistical models that enable computer systems to improve their performance on a specific task through experience.\n\nThere are three main types of machine learning:\n\n1. Supervised Learning: The algorithm is trained on a labeled dataset, learning to map input data to known output labels.\n2. Unsupervised Learning: The algorithm works on unlabeled data, trying to find patterns or structures within the data.\n3. Reinforcement Learning: The algorithm learns by interacting with an environment, receiving feedback in the form of rewards or penalties.\n\nSome common applications of machine learning include:\n\n- Image and speech recognition\n- Natural language processing\n- Recommendation systems\n- Fraud detection\n- Autonomous vehicles\n\nIn the next sections, we'll dive deeper into each type of machine learning and explore some popular algorithms used in the field. We'll also discuss the importance of data preprocessing and feature engineering in building effective machine learning models.",
  },
  {
    id: 3,
    title: "Git Basics: Commit, Push, and Pull",
    excerpt: "Master the essential Git commands for version control.",
    category: "gitAndGithub",
    content:
      "Git is a distributed version control system that helps developers track changes in their code, collaborate with others, and manage different versions of their projects. In this post, we'll cover the fundamental Git commands that every developer should know.\n\n1. git init: Initialize a new Git repository\n2. git add: Stage changes for commit\n3. git commit: Save staged changes with a descriptive message\n4. git push: Upload local commits to a remote repository\n5. git pull: Download and integrate changes from a remote repository\n\nUnderstanding these basic commands will help you start using Git effectively in your projects. As you become more comfortable with Git, you can explore more advanced features like branching, merging, and resolving conflicts.",
  },
  {
    id: 4,
    title: "Python for Beginners",
    excerpt:
      "Start your programming journey with Python, a versatile language.",
    category: "programming",
    content:
      "Python is a high-level, interpreted programming language known for its simplicity and readability. It's an excellent choice for beginners due to its clean syntax and vast ecosystem of libraries and frameworks.\n\nHere's a simple 'Hello, World!' program in Python:\n\n```python\nprint('Hello, World!')\n```\n\nPython supports various programming paradigms, including procedural, object-oriented, and functional programming. It's widely used in web development, data analysis, artificial intelligence, and scientific computing.\n\nIn this post, we'll cover basic Python concepts such as variables, data types, control structures, and functions. We'll also introduce you to some popular Python libraries and their applications in different fields.",
  },
  {
    id: 5,
    title: "Building Server-Side Rendered Apps with Next.js",
    excerpt:
      "Explore the power of Next.js for creating fast, SEO-friendly web applications.",
    category: "nextjs",
    content:
      "Next.js is a React framework that enables server-side rendering, static site generation, and other performance optimizations out of the box. It's an excellent choice for building modern web applications that require fast loading times and good SEO.\n\nSome key features of Next.js include:\n\n1. Automatic code splitting for faster page loads\n2. Simple client-side routing\n3. API routes for building API endpoints\n4. Built-in CSS and Sass support\n5. Fast Refresh for instant feedback during development\n\nIn this post, we'll walk through setting up a Next.js project, creating pages and components, and deploying your application. We'll also explore some advanced features like dynamic routes and API routes.",
  },
  // ... Add content for the rest of the blog posts
];
