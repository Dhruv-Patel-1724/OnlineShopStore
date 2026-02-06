import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { Button } from "../styles/Button" 
import React from "react"
import { FaDiscord, FaInstagram,  FaYoutube  }  from "react-icons/fa";

const Footer = () => {
  return(
  <Wrapper>
    <section className="contact-short">
        <div className="grid grid-two-column" >
            <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
        </div>
        <div>
            <Button>
                <NavLink to = "/contact">Get Started</NavLink>
            </Button>
        </div>
        </div>
    </section>

<footer>
    <div className="container grid grid-four-column">
        <div className="footer-about">
            <h3>KD Channel</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantiu</p>
        </div>

    <div className="footer-subscribe">
        <h3>Subscribe to get important updates</h3>
        <form action="#">
            <input type="email" 
            placeholder="your e-mail" />
            <input type="submit" value="subscribe" />
        </form>
</div>

<div className="footer-social">
<h3>Follow us</h3>
<div className="footer-social--icons">
  <div>
    <FaDiscord className="icons"/>
  </div>

  <div>
    <a href="https://www.instagram.com/kd.patel16/?__pwa=1">
     <FaInstagram className="icons"/>
    </a>
   
  </div>

<div>
<a href="https://www.youtube.com/channel/UC2vR8_Zbng0-JT-yiB2DXlQ" target="_blank">
<FaYoutube className="icons"/>
 </a>
</div>
</div>
</div>

<div className="footer-contact">
  <h3>Call us</h3>
  {/* <a href="tel:9714539702">+91 123445567890</a> */}
  <h3>+91 1234567890</h3>
</div>
    </div>

<div className="footer-bottom--section">
<hr/>
<div className="container grid grid-two-column">
  <p>
    @{new Date().getFullYear()}  KenishPatel. All Right Reserved
    </p>
    <div>
      <p>
        PRIVACY POLICY
      </p>
      <p>
        TERMS & CONDITIONS
      </p>
    </div>
</div>
</div>
</footer>

  </Wrapper>
  )

}
// const Wrapper = styled.section`
//   .iSIFGq {
//     margin: 0;
//   }

//   .contact-short {
//     max-width: 60vw;
//     margin: auto;
//     padding: 5rem 10rem;
//     background-color: ${({ theme }) => theme.colors.bg};
//     border-radius: 1rem;
//     box-shadow: ${({ theme }) => theme.colors.shadowSupport};
//     // transform: translateY(50%);

//     .grid div:last-child {
//       justify-self: end;
//       align-self: center;
//     }
//   }

//   .footer-subscribe input[type="submit"] {
//   margin-top: 1rem;
//   padding: 1rem 2.4rem;
//   background-color: #6254f3;
//   color: white;
//   border: none;
//   cursor: pointer;
// }


//   footer {
//     padding: 14rem 0 9rem 0;
//     background-color: ${({ theme }) => theme.colors.footer_bg};
//     h3 {
//       color: ${({ theme }) => theme.colors.hr};
//       margin-bottom: 2.4rem;
//     }
//     p {
//       color: ${({ theme }) => theme.colors.white};
//     }
//     .footer-social--icons {
//       display: flex;
//       gap: 2rem;

//       div {
//         padding: 1rem;
//         border-radius: 50%;
//         border: 2px solid ${({ theme }) => theme.colors.white};

//         .icons {
//           color: ${({ theme }) => theme.colors.white};
//           font-size: 2.4rem;
//           position: relative;
//           cursor: pointer;
//         }
//       }
//     }
//   }

//   .footer-bottom--section {
//     padding-top: 9rem;

//     hr {
//       margin-bottom: 2rem;
//       color: ${({ theme }) => theme.colors.hr};
//       height: 0.1px;
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .contact-short {
//       max-width: 80vw;
//       margin: 4.8rem auto;
//       transform: translateY(0%);
//       text-align: center;

//       .grid div:last-child {
//         justify-self: center;
//       }
//     }
      

//     footer {
//       padding: 9rem 0 9rem 0;
//     }

//     .footer-bottom--section {
//       padding-top: 4.8rem;
//     }
//   }
// `;


const Wrapper = styled.section`
  // /* ===== CONTACT SHORT SECTION ===== */
  // .contact-short {
  //   max-width: 70vw;
  //   margin: auto;
  //   padding: 4.5rem 6rem;
  //   background: linear-gradient(135deg, #f5f7ff, #ffffff);
  //   border-radius: 1.2rem;
  //   box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
  //   position: relative;
  //   z-index: 10;

  //   h3 {
  //     font-size: 2.2rem;
  //     font-weight: 600;
  //     margin-bottom: 0.6rem;
  //     color: #1a1a1a;
  //   }

  //   .grid div:last-child {
  //     justify-self: end;
  //     align-self: center;
  //   }

  //   a {
  //     color: white;
  //     text-decoration: none;
  //   }
  // }
  .contact-short {
  max-width: 75vw;
  margin: 0 auto;
  padding: 3.5rem 5rem;
  background-color: #ffffff;
  border-radius: 1.2rem;

  /* 🔥 PREMIUM SHADOW */
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 20px 60px rgba(98, 84, 243, 0.12);

  position: relative;
  transform: translateY(50%);
  z-index: 5;

  h3 {
    font-size: 1.9rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 0.4rem;
  }

  h3:last-child {
    font-size: 1.5rem;
    font-weight: 400;
    color: #555;
  }

  .grid {
    align-items: center;
  }

  .grid div:last-child {
    justify-self: end;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }
}


  /* ===== FOOTER MAIN ===== */
  footer {
    padding: 16rem 0 6rem 0;
    background: linear-gradient(180deg, #0b1437, #020b2d);

    h3 {
      color: #ffffff;
      font-size: 1.8rem;
      margin-bottom: 1.6rem;
    }

    p {
      color: #cfd3ff;
      font-size: 1.4rem;
      line-height: 1.7;
    }
  }

  /* ===== ABOUT ===== */
  .footer-about {
    max-width: 28rem;
  }

  /* ===== SUBSCRIBE ===== */
  .footer-subscribe {
    form {
      display: flex;
      flex-direction: column;
    }

    input[type="email"] {
      padding: 1.1rem 1.2rem;
      border-radius: 6px;
      border: none;
      outline: none;
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }

    input[type="submit"] {
      padding: 1.1rem;
      border-radius: 6px;
      border: none;
      background-color: #6254f3;
      color: #ffffff;
      font-size: 1.4rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #4b3fdc;
        transform: translateY(-2px);
      }
    }
  }

  /* ===== SOCIAL ICONS ===== */
  .footer-social--icons {
    display: flex;
    gap: 1.6rem;

    div {
      width: 4.2rem;
      height: 4.2rem;
      border-radius: 50%;
      border: 1px solid #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:hover {
        background-color: #6254f3;
        transform: scale(1.1);
      }

      .icons {
        color: #ffffff;
        font-size: 2rem;
        cursor: pointer;
      }
    }
  }

  /* ===== CONTACT ===== */
  .footer-contact h3:last-child {
    color: #cfd3ff;
    font-weight: 500;
  }

  /* ===== FOOTER BOTTOM ===== */
  .footer-bottom--section {
    margin-top: 4rem;

    hr {
      border: none;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.2);
      margin-bottom: 2rem;
    }

    .grid {
      align-items: center;
    }

    p {
      font-size: 1.3rem;
      color: #cfd3ff;
    }

    div {
      display: flex;
      gap: 2rem;
      justify-content:center;

      p {
        cursor: pointer;
        transition: color 0.3s ease;

        &:hover {
          color: #ffffff;
        }
      }
    }
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 90vw;
      padding: 3rem;
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 8rem 0 4rem 0;
    }

    .footer-bottom--section div {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
`;


export default Footer