import { useState } from 'react';
import './header.css';


const Header = ()=>
  {
const [Showmodule, Setshowmodel] = useState(false);
  return(
     <header className=' flex'>
      <button onClick={ () =>
         {Setshowmodel (true)}}className='menu icon-menu'> </button> 
         <div/>
      <nav>
        <ul className='flex'>
          <li>
            <a href="#about">about</a></li>
          <li><a href="#Articles">Articles</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#speaking">speaking</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
      <button className='Theam  flex'>
        <span className='icon-moon-o'> </span>
        </button>

{/* small navbar popup start  */}

{Showmodule && (
  <div className=" page snav  menu">

  <ul className='model'>
    <li><button className='icon-cross' onClick={ () => {Setshowmodel (false)}}> </button></li>
    <li><a href="#about">About</a></li>
    <li><a href="#Articles">Articles</a></li>
    <li><a href="#Projects">Projects</a></li>
    <li><a href="#speaking">speaking</a></li>
    <li><a href="#Contact">Contact</a></li>
  </ul>

</div>
)}
{/* small navbar  popup ends  */}

    </header>
    );
}
export default Header;