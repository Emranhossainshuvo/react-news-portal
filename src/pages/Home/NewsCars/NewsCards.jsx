import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from "./NewsCard";
import { SearchContext } from "../../../Contexts/SearchContext/SearchContext";
import { NavLink } from 'react-router-dom';

const NewsCards = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tabQuery, setTabQuery] = useState("all");
    const { searchQuery } = useContext(SearchContext);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 9; // Number of articles per page

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get("https://react-news-portal-server-rho.vercel.app/news");
                setArticles(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const handleBusiness = value => {
        setTabQuery(value);
    };

    const filteredArticles = articles.filter(article => {
        return (
            (tabQuery === "all" || article.category === tabQuery) &&
            (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.description.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    });

    const indexOfLastArticle = currentPage * perPage;
    const indexOfFirstArticle = indexOfLastArticle - perPage;
    const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    if (loading) return <p className='text-5xl text-center mt-5 text-black dark:text-white h-[50vh]'>Loading...</p>;
    if (error) return <p>Error loading news: {error.message}</p>;

    return (
        <>
            <section className="dark:bg-[#0b1221]">
                <section className="text-white py-5 px-2 ">
                    <section className='flex border-b-2  pb-7 max-w-screen-2xl mx-auto justify-between items-center'>
                        <section className='flex flex-col justify-center items-center w-full mx-auto gap-4'>
                            <h3 className='text-3xl text-black dark:text-white font-semibold'>Top categories</h3>
                            <div className="flex flex-col md:flex-row justify-center mx-auto gap-1">
                                <section className='flex gap-1'>
                                    <NavLink onClick={() => handleBusiness("business")} className="p-2 text-center w-[133px] block text-lg font-bold rounded-sm bg-[#F5EFE6] text-[#1A4D2E]">Business</NavLink>
                                    <NavLink onClick={() => handleBusiness("technology")} className="p-2 text-center w-[133px] text-lg font-bold block rounded-sm bg-[#F5EFE6] text-[#1A4D2E]">Technology</NavLink>
                                </section>
                                <section className='flex gap-1'>
                                    <NavLink onClick={() => handleBusiness("entertainment")} className="p-2 text-center rounded-sm block w-[133px] bg-[#F5EFE6] text-lg font-bold text-[#1A4D2E]">Entertainment</NavLink>
                                    <NavLink onClick={() => handleBusiness("science")} className="p-2 rounded-sm w-[133px] block text-center bg-[#F5EFE6] text-lg font-bold text-[#1A4D2E]">Science</NavLink>
                                </section>
                            </div>
                        </section>
                    </section>
                </section>

                <section className="grid max-w-screen-2xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {currentArticles.map(article => (
                        <NewsCard key={article._id} news={article} />
                    ))}
                </section>

                <div className="flex gap-2 py-4 justify-center my-10">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="p-2 text-lg font-bold block rounded-sm bg-[#F5EFE6] text-[#1A4D2E]"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={indexOfLastArticle >= filteredArticles.length}
                        className="p-2 text-lg font-bold block rounded-sm bg-[#F5EFE6] text-[#1A4D2E]"
                    >
                        Next
                    </button>
                </div>

            </section>
        </>
    );
};

export default NewsCards;
