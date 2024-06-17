import moment from 'moment';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaDiscord } from "react-icons/fa6";


const Navbar = () => {
    return (
        <>
            {/* section that will hold everything in this page */}
            <section>
                {/* section for date time and social links */}
                <section className="bg-[#31473A] flex justify-between items-center w-full h-7">
                    {/* date and time */}
                    <p className='text-white'>
                        {moment().format("dddd, MMM Do, YYYY")}
                    </p>
                    {/* social links */}
                    <p>
                        <ul className='flex gap-5 text-white'>
                            <li><FaFacebook /></li>
                            <li><FaTwitter /></li>
                            <li><FaLinkedinIn /></li>
                            <li><FaDiscord  /></li>
                        </ul>
                    </p>
                </section>
            </section>
        </>
    );
};

export default Navbar;