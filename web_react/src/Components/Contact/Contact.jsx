import React from 'react'
import './Contact.css'
import sms_icon from '../../assets/sms.png'
import call_icon from '../../assets/call.png'
import mail_icon from '../../assets/gmail.jpg'
import arrow_icon from '../../assets/arrow_icon.png'


function Contact() {
    const [result, setResult] = React.useState("");
    
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "32d02f41-c527-4d6f-ab12-30166f5cf7c9");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src= {sms_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or
                find our contact information below. Your feedback, questions and suggestions 
                are important to us as we strive to provide exceptional
                service to our MovieLens community.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" /> Email : hiruireshasewwandi@gmail.com</li>
                <li><img src={call_icon} alt="" /> Tel : +1 221-536-4578</li>
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit = {onSubmit}>
                <label>Your name</label>
                <input type="text" name = 'name' placeholder = 'Enter your name' required />
                <label>Phone Number</label>
                <input type='tel' name = 'phone' placeholder='Enter your mobile number' required />
                <lable>Write your message here</lable>
                <textarea name="message" id="" cols={30} rows={6} placeholder='Enter your message' required></textarea>
                <button type = 'submit' className='btn dark-btn'>Submit now <img src={arrow_icon} alt="" /></button>

            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact