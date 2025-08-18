import React, {useState} from 'react'
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Programs from './components/programs'
import Title from './components/Title'
import About from './components/about'
import Campus from './components/campus'
import Testimonials from './components/testimonials'
import Contact from './components/contact'
import Footer from './components/footer'
import Videoplayer from './components/videoplayer'

const App= ()=>{

const [playVideo, setPlayVideo] = useState(false);

return  (  
    <div>
      <Navbar />
      <Hero />
      <div className="container">
      <Title subTitle='Our Program' title='What we offer'/>
      <Programs />
      <About setPlayVideo={setPlayVideo} />
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus />
      <Title subTitle='Testimonials' title='What our students say'/>
      <Testimonials />
      <Title subTitle='Contact us' title='Get in touch'/>
      <Contact />
      <Footer />
      </div>
      <Videoplayer playVideo={playVideo} setPlayVideo={setPlayVideo} />
    </div>
)
}

export default App