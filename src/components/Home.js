import '../styles/Home.css';
import { FaTelegram, FaEnvelope, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import profileImage from '../images/profile-image.jpg';

const Home = () => {
    return (
        <>
            <main>
                <h1>SteveKSV's Portfolio</h1>
                 <p className="description">
                            Welcome to my portfolio website! Here you can find information about my projects and core skills.
                </p>
                <div className="profile-section">
                    <div className="profile-image-container">
                        <img 
                            src={profileImage} 
                            alt="Profile" 
                            className="profile-image"
                        />
                    </div>
                    <div className="profile-content">
                        <hr />
                        <p className="bio">
                            B.Sc. in Computer Science and first-year M.Sc. student, passionate about creating responsive, 
                            user-friendly interfaces and efficient back-end systems.
                            Eager to apply web development skills, collaborate in dynamic teams, and gain hands-on experience building real-world applications.
                        </p>
                        <hr/>
                    </div>
                </div>
                <div className="contacts">
                    <h2>How to reach me?</h2>
                    <ul>
                        <li>
                            <a href="https://t.me/UncleHachik" target="_blank" rel="noopener noreferrer">
                                <span className="contact-icon"><FaTelegram /></span>
                                <span className="contact-text">@UncleHachik</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:amigo.kl08@gmail.com">
                                <span className="contact-icon"><FaEnvelope /></span>
                                <span className="contact-text">amigo.kl08@gmail.com</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/SteveKSV" target="_blank" rel="noopener noreferrer">
                                <span className="contact-icon"><FaGithub /></span>
                                <span className="contact-text">SteveKSV</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:0661702368">
                                <span className="contact-icon"><FaPhoneAlt /></span>
                                <span className="contact-text">+38(066)-170-23-68</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </main>
            <footer></footer>
        </>
    );
};

export default Home;
