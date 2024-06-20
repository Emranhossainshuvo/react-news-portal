import { SlCalender } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";

const NewsCard = ({ news }) => {

    const { title, img, description } = news || {};

    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };
    const truncateTitle = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };
    
    const navigate = useNavigate(); 


    const handelNavigation = () => {
        navigate(`/news`, {state: {news}})
    }

    return (
        <>
                <div onClick={handelNavigation} className="card flex flex-col m-1 cursor-pointer hover:shadow-sm hover:shadow-black rounded-none bg-base-100 shadow-xl">
                    <figure><img className="h-72" src={img ? img : "https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"} alt={title} /></figure>
                    <div className="card-body flex flex-col items-start">
                        <h2 className="card-title">{truncateTitle(description, 4)}</h2>
                        <p>{truncateText(description, 10)}</p>
                        {/* <p className="flex items-center gap-2"><SlCalender /><span>{publishedTime}</span></p> */}
                    </div>
                </div>
        </>
    );
};

export default NewsCard;