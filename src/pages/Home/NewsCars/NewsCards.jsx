import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from "./NewsCard";
import { SearchContext } from "../../../Contexts/SearchContext/SearchContext";

const NewsCards = () => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 9;
    const [tabQuery, setTabQuery] = useState("all")
    const { searchQuery } = useContext(SearchContext);

    const handleBusiness = (value) => {
        setTabQuery(value);
        setCurrentPage(1); // Reset to first page when tab changes
    }

    console.log(searchQuery)

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`https://newsapi.org/v2/everything?q=${tabQuery}&apiKey=f1bf94591c5e435ca25985e0523f7c83`);
                setArticles(response.data.articles);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [tabQuery]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading news: {error.message}</p>;

    const filteredArticles = articles
        .filter(article => article.title !== '[Removed]' && article.source.name !== '[Removed]')
        .filter(article =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <section className="">
                <section className="flex text-white my-4 bg-gray-400 py-5 px-2 justify-between items-center">
                    <div>
                        <span className="bg-purple-500 p-1 rounded-sm capitalize">{tabQuery}</span>
                    </div>
                    <div className="flex gap-1">
                        <button onClick={() => handleBusiness("business")} className="p-1 rounded-sm bg-white text-black">Business</button>
                        <button onClick={() => handleBusiness("technology")} className="p-1 rounded-sm bg-white text-black">Technology</button>
                        <button onClick={() => handleBusiness("entertainment")} className="p-1 rounded-sm bg-white text-black">Entertainment</button>
                        <button onClick={() => handleBusiness("science")} className="p-1 rounded-sm bg-white text-black">Science</button>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {currentArticles.map(article => (
                        <NewsCard key={article.description} news={article} />
                    ))}
                </section>

                <section className="mt-4">
                    <Pagination totalPages={totalPages} paginate={paginate} currentPage={currentPage} />
                </section>
            </section>
        </>
    );
};

const Pagination = ({ totalPages, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex justify-center space-x-2">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button
                            onClick={() => paginate(number)}
                            className={`px-3 py-1 rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NewsCards;
