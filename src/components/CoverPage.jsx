function CoverPage() {
  return (
    <div className='w-full h-screen overflow-hidden flex flex-col bg-white relative'>

      {/* Hero Section — 62% of viewport */}
      <div className='flex flex-col border-b-4 border-black' style={{ height: '50%' }}>

        <div className='flex-1 flex flex-col items-center justify-center overflow-hidden w-full'>
          <h1
            className='font-title font-bold text-black whitespace-nowrap select-none'
            style={{ fontSize: '29vh', lineHeight: 0.72, textAlign: 'center', width: '100%' }}
          >
            SEBASTIAN
          </h1>
          <h1
            className='font-title font-bold text-black whitespace-nowrap select-none'
            style={{ fontSize: '37vh', lineHeight: 0.72, textAlign: 'center', width: '100%' }}
          >
            VETTEL
          </h1>
        </div>

      </div>

      {/* Bottom Section — remaining 38% */}
      <div className='flex-1 grid' style={{ gridTemplateColumns: '50% 50%' }}>

        {/* Left half: 2×2 stat grid */}
        <div className='grid grid-cols-2 grid-rows-2 border-r-4 border-black'>

          <div className='border-r-2 border-b-2 border-black overflow-hidden relative bg-cover bg-top' style={{ backgroundImage: "url('/photos/sebastian_03.jpg')" }}>
            <div className='absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent' />
            <div className='absolute bottom-3 left-3 z-10'>
              <p className='text-white/60 font-title tracking-[0.2em] uppercase mb-0.5' style={{ fontSize: '0.45rem' }}>World Championships</p>
              <p className='text-white font-title font-bold leading-none' style={{ fontSize: '3.5vh' }}>4×</p>
            </div>
          </div>

          <div className='border-b-2 border-black overflow-hidden relative bg-cover bg-center' style={{ backgroundImage: "url('/photos/sv_black.jpg')" }}>
            <div className='absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent' />
            <div className='absolute bottom-3 left-3 z-10'>
              <p className='text-white/60 font-title tracking-[0.2em] uppercase mb-0.5' style={{ fontSize: '0.45rem' }}>Race Wins</p>
              <p className='text-white font-title font-bold leading-none' style={{ fontSize: '3.5vh' }}>53</p>
            </div>
          </div>

          <div className='border-r-2 border-black overflow-hidden relative bg-cover bg-center' style={{ backgroundImage: "url('/photos/sebastian-vettel-ferrari-3rd.jpg')" }}>
            <div className='absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent' />
            <div className='absolute bottom-3 left-3 z-10'>
              <p className='text-white/60 font-title tracking-[0.2em] uppercase mb-0.5' style={{ fontSize: '0.45rem' }}>Podiums</p>
              <p className='text-white font-title font-bold leading-none' style={{ fontSize: '3.5vh' }}>122</p>
            </div>
          </div>

          <div className='overflow-hidden relative bg-cover bg-center' style={{ backgroundImage: "url('/photos/seb_helemt.jpg')" }}>
            <div className='absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent' />
            <div className='absolute bottom-3 left-3 z-10'>
              <p className='text-white/60 font-title tracking-[0.2em] uppercase mb-0.5' style={{ fontSize: '0.45rem' }}>Fastest Laps</p>
              <p className='text-white font-title font-bold leading-none' style={{ fontSize: '3.5vh' }}>38</p>
            </div>
          </div>

        </div>

        {/* Right half: large feature panel */}
        <div className='overflow-hidden relative bg-cover bg-center' style={{ backgroundImage: "url('/photos/ferrari_02.jpg')" }}>
          <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
        </div>

      </div>

      {/* Driver cutout — spans full 100vh, touches bottom of screen */}
      <div className='absolute inset-0 flex items-end justify-center z-10 pointer-events-none'>
        <img
          src='/photos/sebastian_cover.png'
          alt='Sebastian Vettel'
          className='h-3/4 w-auto object-contain object-bottom'
        />
      </div>

    </div>
  )
}

export default CoverPage
