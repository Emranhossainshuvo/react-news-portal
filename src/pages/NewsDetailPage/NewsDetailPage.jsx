import { useLocation } from "react-router-dom";

const NewsDetailPage = () => {

    const location = useLocation();
    const { news } = location.state || {};

        // console.log(news)

    return (
        <>
            {/* section to hold everything in this page */}
            <section className="pt-10 flex bg-white dark:bg-[#0b1221] flex-col">
                <img className="bg-cover h-[50vh] w-[4  0%] mx-auto bg-fixed" src={news.img} alt={news.title} />

                <h4 className="text-4xl p-1 font-semibold max-w-screen-2xl mx-auto text-black dark:text-white text-start mt-7">{news.title}</h4>
                <p className="mt-7 p-1 text-black dark:text-white max-w-screen-2xl mx-auto text-xl font-semibold">{news.description}</p>
            </section>
        </>
    );
};

export default NewsDetailPage;