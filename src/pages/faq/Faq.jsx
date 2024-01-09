import React from 'react'
import './faq.css'

const Faq = () => {
  return (
    <div className="faq section__padding">
      <div className="faq-text">
      <p>FAQs</p>
      <h1>Frequency Asked Questions</h1>
      <h4>We’ve answered some of your commonly asked questions, so you don’t need to ask again</h4>
      </div>
      <div className="wrapper">
      <Accordion title="Who is Straddle?">
      Straddle is a fast- growing technology company that aims to disrupt the global agricultural trade value chain. We are passionate about food security while delivering superior returns to farmers. We do this by promoting price transparency and discovery, democratizing access to markets and sectorial news.
    </Accordion>
    <Accordion title="What is Straddle?">
      
    </Accordion>
    <Accordion title="Where can I find the straddle app?">
     
    </Accordion>
    <Accordion title="What are the user roles on the platform?">
      
    </Accordion>
    <Accordion title="How do I become a seller with straddle?">
    
    </Accordion>
    <Accordion title="How do I cancel an ad?">
      
    </Accordion>
    <Accordion title="Can I pay on delivery?">
      
    </Accordion>
    <Accordion title="In what countries can I find Straddle?">
     
    </Accordion>
    <Accordion title="My app is having a problem? How can I get supported?">
      
    </Accordion>
      </div>
      <div className="question">
        <h3>Still have questions?</h3>
        <p>Can’t find the answer you’re looking for? Send us a message</p>
        <button>Contact us</button>
      </div>
      
     
    </div>
  )
}

export default Faq


const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper">
      
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
        >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};