import { FaCheck } from "react-icons/fa";
import shampoo from "../images/shampoo.png"

function Features(){

    return(
    <div>
        <div className="flex justify-center">
            <div className="w-96 mt-5 text-center">
            <h3 className="text-2xl">Best Benefits Of Our Natural
            </h3><h2 className="text-2xl font-bold">  Hair Shampoo</h2>
            <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus,.</p>
          </div>
        </div>


          <div className="flex flex-row gap-4 mx-8 mt-5">
      <div className="bg-white h-20 w-full p-5 mt-8">
        <div className="">
      <FaCheck className="bg-white text-green-500 rounded xl-7"/>
            <h1>Natural & Organic
            </h1>
            <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.
            </p>
            <FaCheck className="bg-white text-green-500 rounded xl-7"/>
            <h1>Natural & Organic
            </h1>
            <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.
            </p>
            <FaCheck className="bg-white text-green-500 rounded xl-7"/>
            <h1>Natural & Organic
            </h1>
            <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.
            </p>
        </div>
      </div>
      <div className="bg-white h-20 w-full">
      <div>
           <img src={shampoo}/>
        </div>
      </div>
      <div className="bg-white-500 h-20 w-full p-5 mt-8">
      <div>
      <FaCheck className="bg-white text-green-500 rounded xl-7"/>
            <h1>Natural & Organic
            </h1>
            <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.
            </p>
            <FaCheck className="bg-white text-green-500 rounded xl-7"/>
            <h1>Natural & Organic
            </h1>
            <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.
            </p>
            <FaCheck className="bg-white text-green-500 rounded xl-7 "/>
            <h1>Natural & Organic
            </h1>
            <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.
            </p>
        </div>
      </div>
    </div>

    

    </div>
    )
}

export default Features;