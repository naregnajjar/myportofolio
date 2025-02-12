// @ts-ignore
import React from 'react'
import Header from './components/1-header/header'
import Hero from './components/2-Hero/Hero'
import Main from './components/3-Main/main'
import Contact from './components/4-contactUs/contactus'
import Footer from './components/5-footer/footer'

function App() {
  return (
    <div className='container' id='up'>
<Header />
<Hero /><div className='divider'/>
<Main /><div className='divider'/>
<Contact /><div className='divider'/>
<Footer /><div className='divider'/>

<a href="#up">
<button className='icon-keyboard_arrow_up scrollTop' id=''></button>
</a>
</div>
)
}

export default App
