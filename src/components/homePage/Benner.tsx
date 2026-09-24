import Image from 'next/image';
import benner from '@/assets/banner.png'

const Benner = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center p-10 bg-[#222630]'>
                <div className=''>
                    <h4 className='text-[#C2F800] text-[12px] my-4'>WORKOUT LIBRARY</h4>
                    <h1 className='text-4xl font-bold my-4'>TRAIN WITH INTENT. LOG <br/>
EVERY SET.</h1>
                    <p className='text-[#9CA3AF] text-[12px] my-4'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br/>
into today's plan, and watch the week's work add up.</p>
                    <button className='bg-[#C2F800] text-black py-2 px-2.5 text-[12px] font-bold my-4 rounded '>BROWSE WORKOUTS</button>
                </div>
                <Image src={benner} alt='benner'/>
            </div>
        </div>
    );
};

export default Benner;