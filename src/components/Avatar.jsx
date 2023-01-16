import Sasuke from '../assets/sasukebit.png'

export default function Avatar() {
  return (
    <div className='avatar inline-block w-14 h-14 rounded-full overflow-hidden border-2 border-blue-800'>
      <img
        src={Sasuke}
        alt='user avatar'
        height='100%'
        width='100%'
        className='mb-3 w-14 h-14 border-2 object-cover'
      />
    </div>
  )
}
