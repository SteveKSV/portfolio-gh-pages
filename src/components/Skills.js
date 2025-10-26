import '../styles/Skills.css';

const Skills = () => {
    const skills = [
        {
            category: "Programming Languages & Frameworks",
            items: ["C#", ".NET Core", "ASP.NET Core", "Blazor", "React.js", "JavaScript", "HTML", "CSS"],
        },
        {
            category: "Databases",
            items: ["SQL Server", "MongoDB", "ADO.NET", "Entity Framework Core", "Dapper"],
        },
        {
            category: "Architecture & Tools",
            items: ["REST API", "GraphQL", "Clean Architecture", "MediatR", "Microservices", "Docker", "Ocelot API Gateway", "Git"],
        },
        {
            category: "Other",
            items: ["Data Analysis", "Active Learning (ML for text classification)", "UI/UX basics"],
        },
        {
            category: "Languages",
            items: ["English – B2", "Ukrainian – Native"],
        },
    ];
    
    return (
        <>
        <main className="skills-section">
            <h2 className="skills-title">My Technical Stack</h2>
            <div className="skills-grid">
                {skills.map((group, index) => (
                <div className="skill-card" key={index}>
                    <h3 className="skill-category">{group.category}</h3>
                    <div className="skill-tags">
                    {group.items.map((item, i) => (
                        <span className="skill-tag" key={i}>
                        {item}
                        </span>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </main>
        </>
    );
};
export default Skills;