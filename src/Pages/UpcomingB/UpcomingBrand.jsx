import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const UpcomingBrand = () => {
    useEffect(()=>
    {
        AOS.init({
duration:1000,
 once:false,
                delay:300,
        },[])
    })
    return (
        <div className='mt-11'>
            <h1 className='text-2xl flex justify-center mb-7 shadow-sm'>
                Upcoming
            </h1>
            <div className='flex'>
      <div data-aos="fade-up">
<img
className='w-[300px] h-[200px]'
src="https://i.ibb.co/KzPXzP7/download.png" alt="" />

      </div>
      <div data-aos="slide-left">
        <img
        className='w-[300px] h-[200px]' src="https://i.ibb.co/0sZSp72/download-1.png" alt="" />
      </div>
      <div data-aos="zoom-in">
        <img 
        className='w-[300px] h-[200px]'
        src="https://i.ibb.co/crnz7nt/download-2.png" alt="" />
      </div>
      <div data-aos="zoom-in">
        <img
        className='w-[300px] h-[200px]'
         src="https://i.ibb.co/yXp9nYz/download-4.png" alt="" />
      </div>
      </div>
     
      
        </div>
    );
};

export default UpcomingBrand;