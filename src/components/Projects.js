import '../styles/Projects.css';
import whatToReadImg from '../images/WhatToRead.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Online Book Shop – WhatToRead",
            description:
                "A full-stack web application for browsing and purchasing books with user authentication and role-based access. The system supports product catalog management, shopping cart functionality, and secure checkout logic. Includes an admin panel with an active machine learning module for moving books from warehouse to database.",
            technologies: [
                "ASP.NET Core",
                "Entity Framework Core",
                "SQL Server",
                "MongoDB",
                "Python",
                "Flask",
                "RabbitMQ",
                "API Gateway",
                "Blazor Server"
            ],

            features: [
            {
                title: "Authentication & Authorization",
                description:
                "JWT-based authentication with role-based access control for users and administrators."
            },
            {
                title: "Book Catalog Management",
                description:
                "CRUD operations for books and categories with search and filtering support."
            },
            {
                title: "Shopping Cart & Orders",
                description:
                "Persistent shopping cart with order creation, validation, and status tracking."
            },
            {
                title: "Admin Panel",
                description:
                "Administrative interface for managing products, categories, and warehouse data."
            }
            ],

            concepts: [
            {
                title: "Microservice-Oriented Architecture",
                description:
                "System designed as independent services communicating through an API Gateway and RabbitMQ."
            },
            {
                title: "Clean Architecture",
                description:
                "Separation of concerns between domain, application, and infrastructure layers."
            },
            {
                title: "Active Machine Learning",
                description:
                "ML module that evaluates incoming warehouse data and decides which books should be added to the main database."
            },
            {
                title: "Asynchronous Communication",
                description:
                "Event-driven messaging between services using RabbitMQ to ensure scalability and reliability."
            }],
            link: "https://github.com/SteveKSV/Online-Book-Shop",
        },
    ];

    return (
        <article className="projects-page">
            <h1>Projects Page</h1>
            <div className='projects-grid'>
                {
                    projects.map((project => (
                        <div className='project-card' key={project.id}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className='project-image'>
                                <img src={whatToReadImg} alt={project.title} />
                            </div>
                            <div className='tech-stack'>
                                <h4>Technologies Used:</h4>
                                <span>{project.technologies.join(', ')}</span>
                            </div>
                            <div className="features">
                                <h4>Key Features</h4>
                                <ul>
                                    {project.features.map((feature, index) => (
                                    <li key={index}>
                                        <strong>{feature.title}:</strong> {feature.description}
                                    </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="concepts">
                                <h4>Architecture & Concepts</h4>
                                <ul>
                                    {project.concepts.map((concept, index) => (
                                    <li key={index}>
                                        <strong>{concept.title}:</strong> {concept.description}
                                    </li>
                                    ))}
                                </ul>
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                        </div>
                    )))
                }
            </div>
        </article>
    );
};
export default Projects;