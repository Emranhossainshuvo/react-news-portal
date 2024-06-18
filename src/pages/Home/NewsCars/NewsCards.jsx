import { SlCalender } from "react-icons/sl";
import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from "./NewsCard";

const NewsCards = () => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=f1bf94591c5e435ca25985e0523f7c83&q=cricket")
            .then(res => res.json())
            .then(data => {
                setArticles(data.articles)
            })
    }, [])

    return (
        <>
            {/* section to hold everything in this page */}
            <section className="mt-10">
                {/* section for title bar */}
                <section>

                </section>

                {/* section for the cards */}

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

                    {articles.map(article => <NewsCard key={article.id}
                        news={article}
                    >

                    </NewsCard> )}

                    

                </section>
            </section>
        </>
    );
};

export default NewsCards;