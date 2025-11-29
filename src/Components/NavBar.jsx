import { Link } from 'react-router-dom';
import tvmazeLogo from '../assets/tvmaze-logo.png'; // Add logo in assets folder


export default function Navbar() {
return (
<nav className='flex items-center justify-between bg-gray-900 p-4'>
<div className='flex items-center gap-4'>
<img src={tvmazeLogo} alt='TV Maze Logo' className='h-10 w-auto' />
<h1 className="hidden md:block text-white text-xl font-bold">
  Movie App
</h1>
</div>
<div className='flex gap-6 text-white'>
<Link to='/'>Shows</Link>
<Link to='/webchannels'>Web Channels</Link>
<Link to='/people'>People</Link>
<Link to='/networks'>Networks</Link>
<Link to='/calendar'>Calendar</Link>
</div>
</nav>
);
}