import 'swiper/css';
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <>
            <section className='max-w-screen-2xl border-b-2 h-[50vh] flex flex-col gap-2 justify-center mx-auto'>


                <section className=' text-center flex justify-center'>

                    <img className='h-20 w-20 dark:rounded-md' src="https://i.ibb.co/vwrHWWN/icons8-newspaper-64.png" alt="" />
                </section>


                <h5 className='tracking-tight text-center text-3xl text-white font-semibold'>
                    News portal
                </h5>
                <p className='text-center text-white text-2xl font-medium'>The ultimate news for everyone</p>
            </section>
        </>
    );
};

export default Banner;