import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { faCheckSquare, faFastBackward, faSadCry, faVectorSquare } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FooterColOne = [
    { name: "623 Harrison St., 2nd Floor, San Francisco, CA 94107", icon: <FontAwesomeIcon icon={faVectorSquare} />, link: '' },
    { name: "hello@omnifood.com", icon: <FontAwesomeIcon icon={faVectorSquare} />, link: '' },
]

const FooterColTwo = [
    { name: "Recipe directory", icon: <FontAwesomeIcon icon={faVectorSquare} />, link: '' },
    { name: "Privacy & terms", icon: <FontAwesomeIcon icon={faVectorSquare} />, link: '' },
]

const SocialIcon = [
    { icon: <FontAwesomeIcon icon={faFacebookF} /> },
    { icon: <FontAwesomeIcon icon={faInstagram} /> },
    { icon: <FontAwesomeIcon icon={faLinkedinIn} /> },
    { icon: <FontAwesomeIcon icon={faYoutube} /> },
    { icon: <FontAwesomeIcon icon={faDiscord} /> }
]

const Footer = () => {
    return (
        <section className="bg-dark footer-area">
            <div className="container">
                <div class="row py-5">
                    <div class="col-md-4 text-white">
                        <h2 class="title">Sample Refactoring</h2>
                        <p>Copyright © 2021 by Joydip Paul, Inc. All rights reserved.</p>
                        <div class="social-icon d-flex">
                            {SocialIcon.map(icon =>
                                <div className="me-2">
                                    <a href="">{icon.icon}</a>
                                </div>
                            )}
                        </div>
                    </div>

                    <div class="col-md-3 text-white">
                        <h2 class="title">Contact us</h2>
                        <FontAwesomeIcon icon={["fab", "github"]} />
                        {FooterColOne.map(item =>
                            <div className="footer-body">
                                <a href="{item.link}"><p><span>{item.icon}</span> {item.name}</p></a>
                            </div>
                        )}
                    </div>

                    <div class="col-md-3 text-white">
                        <h2 class="title">Resources</h2>
                        {FooterColTwo.map(item =>
                            <div className="footer-body">
                                <ul>
                                    <li><a href="{item.link}"><p><span>{item.icon}</span> {item.name}</p></a></li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div class="col-md-2 text-white">
                        <h2>NewsLetter</h2>
                        <input type="text" placeholder="subscribe" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Footer;