import React from 'react'
import './Form.css'
const Form = () => {
  const FormSubmit = () => {
    alert("Gönderildi");
   
  };

  
  return (
    <div>
      <form onSubmit={FormSubmit}>
        <label htmlFor="Name">Name</label>
        <br />
        <input type='text' name="ad" required />
        <br />
        <label htmlFor="Surname">Surname</label>
        <br />
        <input type='text' name="soyad" required />
        <br />
        <label htmlFor="Phone">Phone</label>
        <br />
        <input type='number' name="phone" required />
        <br />
        <label htmlFor="Email">Email</label>
        <br />
        <input type='email' name="email" required />
        <br />
        <label htmlFor="Comment">Comment</label>
        <br />
        <input type='text' name="serh" required />
        <br />
        <button>Send</button>
      </form >
    </div>
  );
}

export default Form;