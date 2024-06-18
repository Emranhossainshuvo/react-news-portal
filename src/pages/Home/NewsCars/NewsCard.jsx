import { SlCalender } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";

const NewsCard = ({ news }) => {

    const { title, urlToImage, content, publishedAt } = news || {};

    const publishedTime = publishedAt.split("T")[0];

    const navigate = useNavigate(); 

    // console.log(news)

    const handelNavigation = () => {
        navigate(`/news`, {state: {news}})
    }

    return (
        <>
                <div onClick={handelNavigation} className="card cursor-pointer hover:shadow-sm hover:shadow-black rounded-none bg-base-100 shadow-xl">
                    <figure><img className="h-64" src={urlToImage ? urlToImage : "https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"} alt="Food items" /></figure>
                    <div className="card-body flex flex-col items-start">
                        <h2 className="card-title">{title}</h2>
                        <p>{content}</p>
                        <p className="flex items-center gap-2"><SlCalender /><span>{publishedTime}</span></p>
                    </div>
                </div>
        </>
    );
};

export default NewsCard;