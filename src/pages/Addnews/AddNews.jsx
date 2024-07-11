
const AddNews = () => {
    return (
        <>
            <section className="h-[100vh] flex items-center justify-center bg-[#31473a]">
                {/* section to hold the main content */}
                <section className="bg-[#f1f1f2] w-3/12 rounded-xl">
                    <h3 className="text-center text-3xl font-semibold mb-3 mt-2">News portal</h3>
                    <p className="text-center text-xl font-semibold">Add a news</p>
                    <form className="flex flex-col gap-7 px-10">
                        <input placeholder="Title" className="h-10 ps-3 rounded-md" type="text" name="title" id="" />
                        <input placeholder="description" className="h-10 ps-3 rounded-md" type="text" name="description" id="" />
                        <input placeholder="Photo url" className="h-10 ps-3 rounded-md" type="text" name="photo" id="" />
                        <input placeholder="" className="h-10 ps-3 rounded-md" type="file" style={{ display: "none" }} name="file" id="file" />
                        <label className=" flex gap-2 justify-start items-center" htmlFor="file">
                            <img src="https://i.ibb.co/Yb1GxFc/icons8-image-30.png" alt="" />
                            <p className="text-lg font-semibold">
                                Upload a picture
                            </p>
                        </label>
                        <input className="h-10 mb-8 cursor-pointer bg-[#31473a] text-white text-lg font-semibold rounded-md" type="submit" value="Share now" />
                    </form>
                </section>
            </section>
        </>
    );
};

export default AddNews;