import React from 'react'
import './faq.css'
import { Link } from 'react-router-dom'

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
    Straddle leverages technology to create a marketplace where farmers list their produce and industries procure their raw material needs. Our commodities include sorghum, millet, maize, rice paddy, cashew nuts, cocoa, sesame seeds, palm oil, soyabean.
    </Accordion>
    <Accordion title="Where can I find the straddle app?">
    You can find the straddle app for android devices on the google play store. Straddle app is currently not available on the iOS app store.
    </Accordion>
    <Accordion title="What are the user roles on the platform?">
    Buyer: interested in purchasing agricultural raw materials.
    Seller: wants to list agricultural raw materials for sale.
    </Accordion>
    <Accordion title="How do I become a seller with straddle?">
    You can become a straddle seller by using the Straddle app to register on google play store.
    </Accordion>
    <Accordion title="How do I cancel an ad?">
    You can remove products from your order by clicking edit ad then remove products from your order.
    </Accordion>
    <Accordion title="Can I pay on delivery?">
    Payment terms can be agreed by both parties, which can be either before delivery or after delivery.
    </Accordion>
    <Accordion title="In what countries can I find Straddle?">
    Straddle is only operational in Nigeria. 
    </Accordion>
    <Accordion title="My app is having a problem? How can I get supported?">
    You can get in touch with our customer support team. admin@straddle.site or 09072203493
    </Accordion>
      </div>
      <div className="question">
        <h3>Still have questions?</h3>
        <p>Can’t find the answer you’re looking for? Send us a message</p>
       <Link to="/Contact Us"><button>Contact us</button></Link>
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