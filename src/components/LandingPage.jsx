import React from 'react';

function LandingPage() {
  return (
    <div className='w-full h-screen bg-black pt-1'>
      <div className='w-full mt-24 h-4/5 px-20'>
        <div className='video_section w-full h-full'>
            <video 
            className="w-full h-full object-cover"
            src="/assets/playbackvid.mp4"
            autoPlay
            loop
            muted
            playsInline
            />
        </div>
        <div className="commentators mt-4 gap-10 flex">
          <div className="commentator-1 w-1/4 h-16 relative">
            <img 
              src="/assets/ojass_commentator.jpg" 
              alt="Background" 
              className="w-full h-full object-cover rounded-bl-[20rem]"
            />
            <div className="absolute top-0 left-4 text-black">
              <p className="text-lg font-semibold">Ojass</p>
            </div>
          </div>
          <div className="commentator-1 w-1/4 h-16 relative">
            <img 
              src="/assets/Nikhil_commentator.jpg" 
              alt="Background" 
              className="w-full h-full object-cover rounded-bl-[20rem]"
            />
            <div className="absolute top-0 left-4 text-white">
              <p className="text-lg font-semibold">Nikhil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;