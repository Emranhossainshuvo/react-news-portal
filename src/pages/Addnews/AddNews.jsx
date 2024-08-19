
const AddNews = () => {

    const handleAddNews = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const news = {
            title,
            photo,
            description,
            category
        }
        console.log(news)

        

    }

    return (
        <>
            <section className="h-[100vh] flex items-center justify-center bg-[#31473a]">
                {/* section to hold the main content */}
                <section className="bg-[#f1f1f2] w-3/12 rounded-xl">
                    <h3 className="text-center text-3xl font-semibold mb-3 mt-2">News portal</h3>
                    <p className="text-center text-xl font-semibold">Add a news</p>
                    <form onSubmit={handleAddNews} className="flex flex-col gap-7 px-10">
                        <input placeholder="Title" className="h-10 ps-3 rounded-md" type="text" name="title" id="" />
                        <input placeholder="description" className="h-10 ps-3 rounded-md" type="text" name="description" id="" />
                        <input placeholder="Photo url" className="h-10 ps-3 rounded-md" type="text" name="photo" id="" />
                        <input placeholder="" className="h-10 ps-3 rounded-md" type="file" style={{ display: "none" }} name="file" id="file" />
                        <div className="flex justify-between items-center">
                            <label className=" flex gap-2 justify-start items-center" htmlFor="file">
                                <img src="https://i.ibb.co/Yb1GxFc/icons8-image-30.png" alt="" />
                                <p className="text-lg font-semibold">
                                    Upload a picture
                                </p>
                            </label>
                            <select className="p-2 appearance-none bg-[#314739f3] text-white rounded-md" name="category">
                                <option value="business">Business</option>
                                <option value="technology">Technology</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="science">Science</option>
                            </select>
                        </div>
                        <input className="h-10 mb-8 cursor-pointer bg-[#31473a] text-white text-lg font-semibold rounded-md" type="submit" value="Share now" />
                    </form>
                </section>
            </section>
        </>
    );
};

export default AddNews;