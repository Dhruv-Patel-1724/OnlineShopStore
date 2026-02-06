import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const Contact = () => {

const {isAuthenticated, user} = useAuth0();

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

    return (
    <Wrapper>
      <h2 className='common-heading'>Contact Page</h2>
<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.26528305825!2d73.
9141427093353!3d18.56207508246671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
1!3m3!1m2!1s0x3bc2c14b1a42c151%3A0x6b590a4511f7543e!2sSMOOR%20Cafe%20-%20Phoenix%20Mall!
5e0!3m2!1sen!2sin!4v1768130767761!5m2!1sen!2sin"
width="100%"
height="400"
style={{border:0}} 
FullScreenscreen=""
loading="lazy"
referrerPolicy ="no-referrer-when-downgrade">
  </iframe>

  <div className="container">
    <div className="contact-form">
      <form action="https://formspree.io/f/mvzzpjdl" 
      method="POST" 
      className="contact-inputs ">

        <input
         type="text"
        placeholder="UserName"
        name="UserName"
        value={isAuthenticated ? user.name: " " }
        required
        autoComplete="Off"
        />

    <input type="email"
    name="Email"
    placeholder="Enter your email"
    autoComplete="Off"
    value={isAuthenticated ? user.email : ""}
    required
    
    />

    <textarea
    name="Message"
    cols="30"
    rows="10"
    required
    autoComplete="off"
    placeholder="Enter your Message">
    </textarea>

    <input
    type="Submit"
    value="Send"
     />

      </form>
    </div>
  </div>

  

    </Wrapper>

  )
};


export default Contact;
