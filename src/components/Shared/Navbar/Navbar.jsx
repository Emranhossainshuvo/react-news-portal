import moment from 'moment';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaDiscord } from "react-icons/fa6";
import { SearchContext } from '../../../Contexts/SearchContext/SearchContext';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const { setSearchQuery } = useContext(SearchContext);
    const [theme, setTheme] = useState('light');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);


    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    // console.log(theme)
    return (
        <>
            {/* section that will hold everything in this page */}
            <section className="border-b-[1px] border-black dark:border-white pt-5 dark:bg-[#0b1221]">
                {/* section for date time and social links */}
                <section className=" px-2 w-full h-7">
                    <section className='flex max-w-screen-2xl mx-auto justify-between items-center'>
                        {/* date and time */}
                        <p className='text-black dark:text-white'>
                            {moment().format("dddd, MMM Do, YYYY")}
                        </p>
                        {/* social links */}
                        <ul className='flex gap-5 text-black dark:text-white'>
                            <li><FaFacebook /></li>
                            <li><FaTwitter /></li>
                            <li><FaLinkedinIn /></li>
                            <li><FaDiscord /></li>
                        </ul>
                    </section>
                </section>
                {/* section for logo and the routes/navigations */}


                <section className='p-4 '>

                    <section className='max-w-screen-2xl mx-auto'>
                        <section className='flex justify-between items-center mb-4'>
                            <h3 className=' text-4xl text-black dark:text-white  font-medium'>
                                <Link>
                                    News portal
                                </Link>

                            </h3>

                            <section>
                                <ul className='flex gap-4'>
                                    <li className='bg-[#1a4d2e] p-1 rounded-sm text-white'>
                                        <NavLink to={"/addNews"}>
                                        Add news
                                        </NavLink>
                                        
                                        </li>
                                </ul>
                            </section>
                            <section className='flex gap-3 items-center justify-end'>
                                <input onClick={toggleTheme} data-hs-theme-switch="" className="relative w-[3.25rem] h-7 bg-gray-300 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-gray-700 focus:ring-gray-700 focus:outline-none appearance-none

before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200

after:absolute after:end-1.5 after:top-[calc(50%-0.40625rem)] after:w-[.8125rem] after:h-[.8125rem] after:bg-no-repeat after:bg-[right_center] after:bg-[length:.8125em_.8125em] after:transform after:transition-all after:ease-in-out after:duration-200 after:opacity-70 checked:after:start-1.5 checked:after:end-auto" type="checkbox" id="darkSwitch" />


                            </section>
                        </section>
                        
                    </section>
                </section>


                {/* search */}
                <input onChange={handleSearch} type="text" className='ps-2 mb-10 w-full md:w-[50%] md:mx-auto h-12 text-white dark:text-black bg-gray-600 dark:bg-gray-300 flex justify-center outline-none rounded-md' placeholder='Search anything...' />
            
            </section>  
        </>
    );
};

export default Navbar;