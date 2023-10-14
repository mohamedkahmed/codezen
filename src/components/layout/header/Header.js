import Hero from '../hero/Hero';
import './Header.scss';
import ReactPlayer from 'react-player/lazy'


const Header = () => {
  return (
    <>
    
    <header className='header'>
    <section className='backgorund-video'>
      <ReactPlayer
      url="https://youtu.be/963mR7QS1a0?si=wSVDeYYf_Rdp4za9"
      controls={false}
      playing={true}
      loop={true}
      width="1895.11px"
      height="1066px"
      playbackRate={.60}
    />
      </section>
      <div className="overlay"></div>
      <div className='container'>
      <Hero/>
      </div>
    </header>
    </>
  )
 }

export default Header