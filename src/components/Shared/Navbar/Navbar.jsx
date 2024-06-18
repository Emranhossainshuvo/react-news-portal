import moment from 'moment';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaDiscord } from "react-icons/fa6";
import { Dropdown } from "flowbite-react";
import { SearchContext } from '../../../Contexts/SearchContext/SearchContext';
import { useContext } from 'react';

const Navbar = () => {

    const { setSearchQuery } = useContext(SearchContext);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <>
            {/* section that will hold everything in this page */}
            <section className=''>
                {/* section for date time and social links */}
                <section className="bg-[#31473A]   px-2 flex justify-between items-center w-full h-7">
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
                            <li><FaDiscord /></li>
                        </ul>
                    </p>
                </section>
                {/* section for logo and the routes/navigations */}
                <section className='bg-gray-400 p-2 grid md:grid-cols-3'>

                    <h3 className='tracking-tight text-3xl font-semibold'>News portal</h3>

                    <input onChange={handleSearch} type="text" className='ps-2 outline-none rounded-md' placeholder='Search anything...' />

                    <section className='flex gap-3 items-center justify-end'>
                        <input data-hs-theme-switch="" className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-gray-700 focus:ring-gray-700 focus:outline-none appearance-none

before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200

after:absolute after:end-1.5 after:top-[calc(50%-0.40625rem)] after:w-[.8125rem] after:h-[.8125rem] after:bg-no-repeat after:bg-[right_center] after:bg-[length:.8125em_.8125em] after:transform after:transition-all after:ease-in-out after:duration-200 after:opacity-70 checked:after:start-1.5 checked:after:end-auto" type="checkbox" id="darkSwitch" />

                        <button className='btn'>
                            Login
                        </button>
                    </section>


                </section>

            </section>
        </>
    );
};

export default Navbar;