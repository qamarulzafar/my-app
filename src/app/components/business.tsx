import React from 'react'
import Image from 'next/image'
import comp from '../images/com.png'

const Business = () => {
  return (
    <div>
       <div className="flex justify-center items-center flex-col">
          <Image src={comp} alt="computer img" width={500} />
          <h2 className="text2xl text-center md:text-3xl mt-5 font-bold" >Lets Take Your Buiseness To The Next Level</h2>
          <button className="px-8 py-2 bg-red-400 mt-10 mb-20" >Contact Me</button>
        </div>
    </div>
  )
}

export default Business
