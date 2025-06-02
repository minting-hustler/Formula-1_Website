import React from 'react'

function CoverPage() {
  return (
    <div className='bg-white  w-full h-full flex flex-col '>

        <div className=' w-full h-1/2 '>
            <div className='  w-full h-1/2 bg-white text-center -pt-5 border-4 border-black border '>
                <p className=' w-full h-full text-12xl tracking-wide capitalize font-regular font-title text-black text-centre  flex items-center justify-center overflow-hidden'>
                VETTEL
                </p>
            </div>
            <div className='second_name   w-full h-1/2 bg-white text-center border-4 border-black border'>
                <p className='  w-full h-full  text-12xl  capitalize font-regular font-title text-black text-centre flex items-center justify-center overflow-hidden '>
                    SEBASTIAN
                </p>
            </div>
        </div>
        
        <div className='w-full bg-orange-900 flex '>
            <div className='bottom_left w-1/2 flex  bg-green-500'>
                
                <div className='bottom_ w-1/2 h-full flex flex-col bg-purple-500 bg-cover bg-center border-4 border-black border'>
                    <div className='w-full h-1/2  bg-green-500 bg-[url(photos/sebastian-vettel-ferrari-3rd.jpg)] bg-cover bg-center '>
                        <p className='text-2xl  capitalize font-bold font-title text-black pl-4 pt-4'>Podiums</p>
                    </div>
                    <div className='w-full h-1/2 bg-white bg-[url(photos/seb_helemt.jpg)] bg-cover bg-center border-t-4 border-b-4 border-black '>
                        <p  className='text-3xl  capitalize font-bold font-title text-black '>Awwards</p>

                    </div>
                </div>

                <div className='bottom_left_right w-1/2 h-full flex flex-col bg-yellow-500 bg-cover bg-center border-4 border-black border '>
                    <div className='w-full h-3/5 bg-blue-600 bg-[url(/photos/sv_black.jpg)] bg-cover bg-center '>
                        <p className='text-2xl  capitalize font-bold font-title text-black pl-2 pt-'>Wins</p>
                    </div>
                    <div className='w-full h-2/5  bg-red-300 bg-[url(photos/sebastian_09.jpeg)] bg-cover bg-center border-t-4 border-b-4 border-black '>
                    </div>
                    
                </div>

            </div>
            <div className='w-1/2 h-full bg-[url(/photos/ferrari_02.jpg)] bg-cover bg-center flex '>
                <img src="photos/sebastian_cover.png" alt="" />

            </div>
        </div>

        

        
        
    </div>
  )
}

export default CoverPage


