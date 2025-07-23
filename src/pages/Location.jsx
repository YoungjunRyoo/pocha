import "../css/Location.css"
function Location(){
    return(
        <div className="location-page">
            <div className="map-info">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.5301234533413!2d-97.7205053!3d30.3358804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb680b7b5063%3A0xba4e09a1744ba7d1!2sPocha%20is%20Back!5e0!3m2!1sen!2sus!4v1752880312454!5m2!1sen!2sus"
                 width="400" 
                 height="400" 
                 style={{border:0}} 
                 allowfullscreen="" 
                 loading="lazy" 
                 referrerpolicy="no-referrer-when-downgrade">
                 </iframe>
                
                <div className="contact-address">
                    <h2>Location & Hours</h2>
                    <p><strong>6808 N Lamar Blvd<br />#B-110<br />Austin, TX 78752</strong></p>
                    <p><a href="https://www.google.com/maps/dir//Pocha+is+Back,+North+Lamar+Boulevard,+Austin,+TX/@30.3358804,-97.7205053,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8644cb680b7b5063:0xba4e09a1744ba7d1!2m2!1d-97.7205057!2d30.3359387?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Get directions</a></p><br/>
                </div>
            </div>

            <div className="hours">
                <h2>Business Hour</h2><br/>
                <p>Mon-Fri{'\u00A0\u00A0'}5PM - 1AM</p>
                <p>Sat{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}5PM - 2AM</p>
                <p>Sun{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}Closed</p>
            </div>
        </div>
    );
}

export default Location