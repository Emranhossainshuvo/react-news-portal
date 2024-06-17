import moment from 'moment';


const Navbar = () => {
    return (
        <>
            {/* section that will hold everything in this page */}
            <section>
                {/* section for date time and social links */}
                    <section className="bg-[#31473A] w-full h-7">
                        {/* date and time */}
                        <p className='text-white'>
                        {moment().format("dddd, MMM Do, YYYY")}
                        </p>
                        {/* social links */}
                        <p>

                        </p>
                    </section>
            </section>
        </>
    );
};

export default Navbar;