import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from "./NewsCard";
import { SearchContext } from "../../../Contexts/SearchContext/SearchContext";

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

    if (loading) return <p className='flex text-5xl font-semibold justify-center items-center h-[100vh]'>Loading...</p>;
    if (error) return <p>Error loading news: {error.message}</p>;

    return (
        <>
            <section className="">
                <section className=" text-white my-4 bg-gray-400 py-5 px-2 ">
                    <section className='flex  max-w-screen-2xl mx-auto justify-between items-center'>
                        <div>
                            <span className="bg-[#1A4D2E] text-lg font-bold p-2 rounded-sm capitalize">{tabQuery}</span>
                        </div>
                        <div className="flex gap-1">
                            <button onClick={() => handleBusiness("business")} className="p-2 text-lg font-bold rounded-sm bg-[#F5EFE6] text-[#1A4D2E]">Business</button>
                            <button onClick={() => handleBusiness("technology")} className="p-2 text-lg font-bold rounded-sm bg-[#F5EFE6] text-[#1A4D2E]">Technology</button>
                            <button onClick={() => handleBusiness("entertainment")} className="p-2 rounded-sm bg-[#F5EFE6] text-lg font-bold text-[#1A4D2E]">Entertainment</button>
                            <button onClick={() => handleBusiness("science")} className="p-2 rounded-sm bg-[#F5EFE6] text-lg font-bold text-[#1A4D2E]">Science</button>
                        </div>
                    </section>
                </section>

                <section className="grid  max-w-screen-2xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {currentArticles.map(article => (
                        <NewsCard key={article._id} news={article} />
                    ))}
                </section>

                <div className="flex gap-2 justify-center my-10">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="bg-gray-200 px-3 py-1 rounded-l"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={indexOfLastArticle >= filteredArticles.length}
                        className="bg-gray-200 px-3 py-1 rounded-r"
                    >
                        Next
                    </button>
                </div>

            </section>
        </>
    );
};

export default NewsCards;
