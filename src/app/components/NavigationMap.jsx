import { navigationMap } from './constant';

const NavigationMap = () => {
  return (
    <div className='width-container'>
        <ul className='flex gap-2'>
        {navigationMap.map((map, index)=>(
           <li key={index}>{map.label}</li> 
        ))}
        </ul>
      
    </div>
  )
}

export default NavigationMap;
