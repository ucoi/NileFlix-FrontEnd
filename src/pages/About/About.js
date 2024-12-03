import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <p>Welcome to NileFlix! We are dedicated to bringing you the best movies and TV shows from around the world.</p>
            
            <section className="mission">
                <h3>Our Mission</h3>
                <p>Our mission is to provide a seamless and enjoyable streaming experience for our users. We strive to offer a diverse selection of content that caters to all tastes and preferences.</p>
            </section>
            
            <section className="team">
                <h3>Meet the Team</h3>
                <div className="team-members">
                    <div className="team-member">
                        <img src="path/to/ahmed-hisham.jpg" alt="Ahmed Hisham" />
                        <h4>Ahmed Hisham</h4>
                        <p>Front-End Develeoper</p>
                    </div>
                    <div className="team-member">
                        <img src="path/to/salah-sultan.jpg" alt="Salah Sultan" />
                        <h4>Salah Sultan</h4>
                        <p>Unit Tester </p>
                    </div>
                    <div className="team-member">
                        <img src="path/to/ahmed-rabeh.jpg" alt="Ahmed Rabeh" />
                        <h4>Ahmed Rabeh</h4>
                        <p>Backend Develeoper</p>
                    </div>
                    <div className="team-member">
                        <img src="path/to/mohamed-abdallah.jpg" alt="Mohamed Abdallah" />
                        <h4>Mohamed Abdallah</h4>
                        <p>Database Develeoper</p>
                    </div>
                </div>
            </section>
            
            <section className="contact">
                <h3>Contact Us</h3>
                <p>If you have any questions or feedback, feel free to reach out to us:</p>
                <ul>
                    <li>Email: support@nileflix.com</li>
                    <li>Phone: +1 (555) 123-4567</li>
                    <li>Address: 123 NileFlix St, Movie City, CA 12345</li>
                </ul>
            </section>
        </div>
    );
};

export default About;
