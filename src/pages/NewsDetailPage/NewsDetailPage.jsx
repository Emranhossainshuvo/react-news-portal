import { useLocation } from "react-router-dom";

const NewsDetailPage = () => {

    const location = useLocation();
    const { news } = location.state || {};

        // console.log(news)

    return (
        <>
            {/* section to hold everything in this page */}
            <section className="mt-10 flex flex-col">
                <img className="" src={news.urlToImage} alt="" />

                <h4 className="text-3xl font-semibold mt-7">{news.title}</h4>
                <p className="mt-7">{news.content}</p>
            </section>
        </>
    );
};

export default NewsDetailPage;