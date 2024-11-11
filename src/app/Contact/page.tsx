import React from 'react'
import Top from '../components/Top'
import ContactForm from '../components/contsctForm'

const page = () => {
  return (
    <div>
      <Top title = "Contact" />
      <p className='my-32 text-center w-3/4 md:w-1/2 m-auto text-2xl font-light'>Im a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>

      <ContactForm/>

    </div>
  )
}

export default page
