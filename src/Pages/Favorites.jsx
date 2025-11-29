import { useEffect, useState } from 'react';
import Showcard from './Components/Showcard.jsx';


export default function Favorites() {
const [favorites, setFavorites] = useState([]);


useEffect(() => {
const favs = JSON.parse(localStorage.getItem('favorites')) || [];
setFavorites(favs);
}, []);


return (
<div className='p-4'>
<h1 className='text-2xl font-bold mb-4'>Your Favorites</h1>
{favorites.length === 0 ? (
<p>You have no favorite shows yet.</p>
) : (
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
{favorites.map(show => <Showcard key={show.id} show={show} />)}
</div>
)}
</div>
);
}