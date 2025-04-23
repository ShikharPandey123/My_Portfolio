import React from 'react'
import CV from "../../assets/ShikharPandey_Resume.pdf"
function CTA() {
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href = "#contact" onClick={handleScroll} className='btn btn-primary' >Let's Talk</a>
    </div>
  )
}

export default CTA