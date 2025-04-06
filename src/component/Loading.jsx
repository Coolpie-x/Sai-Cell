import loader from "/loader.gif";

const Loading = () => {
    return (
        <div className="w-full h-screen absolute z-20 flex justify-center items-center bg-black">
            <img className="h-[50%] object-cover" src={loader} alt="" />
        </div>
    );
};

export default Loading;
