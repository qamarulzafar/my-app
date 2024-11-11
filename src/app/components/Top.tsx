import React from 'react'


interface TopProps {
  title: string;
}

const Top = (props: TopProps) => {
  return (
    <div>
        <div className="main w-full h-28 md:h-40 flex justify-center items-center bg-slate-200">
            <div className=" relative top-14 md:top-20 sec w-3/4 md:w-1/2 h-4/5 drop-shadow-md bg-white flex justify-center items-center">
                <p className='text-2xl md:text-4xl'>{props.title}</p>
            </div>
        </div>
      
    </div>
  )
}

export default Top
