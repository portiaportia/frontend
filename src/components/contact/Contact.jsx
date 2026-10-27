import "./Contact.css";
import {useState} from "react";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        
        const formData = new FormData(event.target);
        formData.append("access_key", "f45f3906-4be3-4f95-a4bd-820e85c09623");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        
        if (data.success) {
            setResult("Email Sent");
            setTimeout(()=>{setResult("");}, 3000);
            
            event.target.reset();
        } else {
            setResult("Error");
        }
  };

  return (
    <form onSubmit={onSubmit}>
        <p>
            <label for="name">Name: </label>
            <input type="text" name="name" required/>
        </p>
        <p>
            <label for="name">Email: </label>
            <input type="email" name="email" required/>
        </p>
        <p>
            <label for="message">Message:</label>
            <textarea name="message" required></textarea>
        </p>
      
        <p><button type="submit">Submit Form</button></p>
        <p>{result}</p>
    </form>
  );
};

export default Contact;