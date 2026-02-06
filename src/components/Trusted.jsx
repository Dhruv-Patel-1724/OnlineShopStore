import styled from "styled-components";
import trustedImg1 from "../Images/image2.png"
import trustedImg2 from "../Images/image3.png"
import trustedImg3 from "../Images/image4.png"
import trustedImg4 from "../Images/image6.png"
import trustedImg5 from "../Images/image8.png"

const Trusted = () => {
  return (
    <Wrapper className="brand-seaction">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          <div className="slide">
            <img 
            src={trustedImg1} alt="trusted-brand"/>
            </div>

            <div className="slide">
            <img 
            src={trustedImg2} alt="trusted-brand"/>
            </div>

            <div className="slide">
            <img 
            src={trustedImg3} alt="trusted-brand"/>
            </div>

            <div className="slide">
            <img 
            src={trustedImg4} alt="trusted-brand"/>
            </div>

            <div className="slide">
            <img 
            src={trustedImg5} alt="trusted-brand"/>
          </div>
        </div>
      </div>

    </Wrapper>
  )

}
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  .slide{
  display:flex;
  align-items: center;
  gap:4rem;
    justify-content: space-between;}

  img {
    min-width: 8rem;
    height: 8rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted