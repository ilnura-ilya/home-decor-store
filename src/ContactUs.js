function ContactUs (){
   return (
      <div className="contactUs">
         <h2>CONTACT US</h2>
         <form>
            <input className="form" placeholder="Your Name"/>
            <textarea className="form" placeholder="Your message"></textarea>
            <button className="submit" type="submit">SEND</button>
         </form>
      </div>
   )
}

export default ContactUs;