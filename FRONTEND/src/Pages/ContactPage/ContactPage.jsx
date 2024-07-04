import React from 'react'
// import Contact from '../../Components/Contact/Contact'
import Contact from '../../Components/Contact/Contact'
import { Helmet } from 'react-helmet-async'
const ContactPage = () => {
  return (
    <>
    <Helmet>
        <meta
          name="description"
          content="Get in touch: Fill the form to start a conversation "
        />
        <link rel='canonical' href='/contact'/>
      </Helmet>
    <div className='landingContainer min-h-[100vh] py-[90px] '>
      <Contact />
    </div>
    </>
  )
}

export default ContactPage