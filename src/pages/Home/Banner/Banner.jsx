import 'swiper/css';
import 'swiper/css/navigation';




const Banner = () => {
    return (
        <>
            <section className='max-w-screen-2xl border-b-2 h-[50vh] flex flex-col justify-center mx-auto'>


                <section className=' text-center flex justify-center'>

                    <img className='h-20 w-20 dark:rounded-md dark:bg-white' src="https://i.ibb.co/rcYtv3x/icons8-news-50.png" alt="" />
                </section>


                <h5 className='tracking-tight text-center text-3xl text-black dark:text-white font-semibold'>
                    News portal
                </h5>
                <p className='text-center dark:text-white text-2xl font-medium'>The ultimate news for everyone</p>
            </section>
        </>
    );
};

export default Banner;