import Image from 'next/image';
import footer from '@/assets/logo.png'

const Footer = () => {
    return (
        <div className='container mx-auto'>

            <div className='flex justify-between my-10'>
                <Image src={footer} alt='footer'/>
                <p className='text-[11px] text-gray-600'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
            
        </div>
    );
};

export default Footer;