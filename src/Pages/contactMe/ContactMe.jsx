
import "./contactMe.css";
const ContactMe = () => {
    return(
        <>
            <div className="contactMe">
                <div className="contactMe_header">
                    <p id="contactMe_header-title">Get in Touch</p>
                    <h1>Contact Me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className="contactMe_form">
                    <form className="contactMe_form-form">
                        <div className="contactMe_form-form_name">
                            <label for="firstName">First Name</label>
                            <input id="firstName" name="firstName"></input>
                            <label for="lastName"> Last Name</label>
                            <input id="lastName" name="lastName"></input>
                        </div>
                        <div className="contactMe_form-from_contact">
                            <label for="email">Email</label>
                            <input id="email"></input>
                            <label for="phone">Phone Number</label>
                            <input id="phone"></input>
                        </div>
                        <div className="contactMe_form-from_Message">
                            <label for="message">Message</label>
                            <textarea id="message"></textarea>
                        </div>
                        <div className="contactMe_form-from_btn">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactMe;