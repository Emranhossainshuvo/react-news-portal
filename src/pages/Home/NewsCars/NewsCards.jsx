import { SlCalender } from "react-icons/sl";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from "./NewsCard";
import { SearchContext } from "../../../Contexts/SearchContext/SearchContext";

const NewsCards = () => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tabQuery, setTabQuery] = useState("all")
    const { searchQuery } = useContext(SearchContext);

    const handleBusiness = (value) => {
        setTabQuery(value)
    }

    console.log(searchQuery)

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=${tabQuery}&apiKey=f1bf94591c5e435ca25985e0523f7c83`)
            .then(res => res.json())
            .then(data => {
                setArticles(data.articles)
            })
    }, [tabQuery])

    const filteredArticles = articles
        .filter(article => article.title !== '[Removed]' && article.source.name !== '[Removed]')
        .filter(article =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <>
            {/* section to hold everything in this page */}
            <section className="">
                {/* section for title bar */}
                <section className="flex text-white my-4 bg-gray-400 py-5 px-2 justify-between items-center">
                    <div>
                        <span className="bg-purple-500 p-1 rounded-sm capitalize">{tabQuery}</span>
                    </div>
                    <div className="flex gap-1">
                        <button onClick={() => handleBusiness("business")} className="p-1 rounded-sm bg-white text-black">Business</button>
                        <button  onClick={() => handleBusiness("technology")} className="p-1 rounded-sm bg-white text-black">Technology</button>
                        <button  onClick={() => handleBusiness("entertainment")} className="p-1 rounded-sm bg-white text-black">Entertainment</button>
                        <button  onClick={() => handleBusiness("science")} className="p-1 rounded-sm bg-white text-black">Science</button>
                    </div>
                </section>

                {/* section for the cards */}

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

                    {filteredArticles.map(article => <NewsCard key={article.description}
                        news={article}
                    >

                    </NewsCard>)}



                </section>
            </section>
        </>
    );
};

export default NewsCards;