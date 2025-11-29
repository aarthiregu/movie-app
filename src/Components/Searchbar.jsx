export default function SearchBar({ value, onChange }) {
return (
<div className='flex justify-center my-4'>
<input
className='border border-gray-300 rounded-lg p-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500'
placeholder='Search shows...'
value={value}
onChange={(e) => onChange(e.target.value)}
/>
</div>
);
}