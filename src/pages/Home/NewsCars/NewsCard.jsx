import { SlCalender } from "react-icons/sl";

const NewsCard = ({news}) => {

    const {title} = news || {};

    return (
        <>
            <div className="card rounded-none bg-base-100 shadow-xl">
                <figure><img src={"https://discussion.qodeinteractive.com/wp-content/uploads/2016/02/is-this-the-new-kickboxing-champion-of-the-world-374x228.jpg"} alt="Food items" /></figure>
                <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-1 p-2">Sports</p>
                <div className="card-body flex flex-col items-start">
                    <h2 className="card-title">{title}</h2>
                    <p>This is a good recipe and it tastes so good I tried it for the first time in my life a year ago and I feelt no it is not good as much people talks about it ....</p>
                    <p className="flex items-center gap-2"><SlCalender /><span> 21 February, 1952</span></p>
                </div>
            </div>
        </>
    );
};

export default NewsCard;