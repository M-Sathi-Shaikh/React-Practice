import one from "../images/blog-1.jpg";
import two from "../images/blog-2.jpg";
import three from "../images/blog-3.jpg";
function Blogs(){
    

    return(
        <div className="p-11">
                <div className="text-center">
                <h1 className="text-xl">From Our Blog Articles</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
            <div className="flex flex-row p-9 m-9 gap-5">
                <div className="mt-5 w-1/3 border p-5">
                    <img src={one}/>
                    <h1 className="text-xl">Foods that are good for your hair growing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Read More...</button>
                    </div>
                    <div className="mt-5 w-1/3 border p-5">
                    <img src={two}/>
                    <h1 className="text-xl">Foods that are good for your hair growing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Read More...</button>
                    </div>
                    <div className="mt-5 w-1/3 border p-5">
                    <img src={three}/>
                    <h1 className="text-xl">Foods that are good for your hair growing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Read more...
        </button>    
                        </div>
            </div>

        </div>
    )
}

export default Blogs;