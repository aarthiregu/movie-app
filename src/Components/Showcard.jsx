import { useNavigate } from 'react-router-dom';


export default function Showcard({ show }) {
const navigate = useNavigate();
return (
<div className='bg-white shadow-md rounded-lg cursor-pointer hover:scale-105 transform transition-all' onClick={() => navigate(`/show/${show.id}`)}>
<img src={show.image?.medium || 'https://via.placeholder.com/210x295'} alt={show.name} className='rounded-t-lg w-full' />
<div className='p-2 text-center'>
<h3 className='font-semibold'>{show.name}</h3>
</div>
</div>
);
}