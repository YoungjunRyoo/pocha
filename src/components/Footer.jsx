
import "../css/Footer.css"

function Footer(){

    return(
        <div className="footer">
            <div className="location">
                <h2>Location</h2>
                <p>6808 N Lamar Blvd #B-110, Austin, TX 78752</p>
            </div>
            <div className="contact-info">
                <h2>Contact Info</h2>
                <p><a href="tel:+15123230153">(512) 323-0153</a></p>

                <a 
                href="https://www.instagram.com/pochaisback_atx/?hl=en" 
                className="navbar-link"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img className="insta-link" src="images/icon1.png" alt="Instagram" />
                </a>
                <a 
                href="https://www.google.com/maps/place/Pocha+is+Back/@30.3358804,-97.7205053,17z/data=!3m1!4b1!4m6!3m5!1s0x8644cb680b7b5063:0xba4e09a1744ba7d1!8m2!3d30.3358804!4d-97.7205053!16s%2Fg%2F11s8_v4x4g?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" 
                className="navbar-link"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img className="insta-link" src="images/icon2.png" alt="Instagram" />
                </a>
        
            </div>
            <div className="business-hour">
                <h2>Business Hour</h2>
                <p>Mon-Fri{'\u00A0\u00A0'}5PM - 1AM</p>
                <p>Sat{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}5PM - 2AM</p>
                <p>Sun{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}Closed</p>
            </div>
            
        </div>

    );

}

export default Footer