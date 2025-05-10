import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import swimming from '../../../assets/swimming.png'
import playground from '../../../assets/playground.png'
import classs from '../../../assets/class.png'
 

const Rightnav = () => {
    return (
        <div>
            <h1>This is right nav</h1>

            <div>
                <p className='text-xl font-bold mb-3'>LogIn with :</p>
            </div>
 
             <div className='px-2'>
             <div>
            <button className="btn flex gap-2 items-center px-14 border border-white ">

            <FaGoogle />
   
            <p>Login With Google </p>
            </button>
            </div>

            <div>
            <button className="btn flex gap-3 mt-2 items-center px-14 border border-white ">

            <FaGithub />
   
            <p>Login  With  github </p>
            </button>
            </div>
             </div>

             <div className='mt-6'>
               {/* div for social media  */}

               <p className='text-xl font-bold mb-2'>Find us on :</p>

               <div className='px-2'>
                <a className='flex items-center gap-2 p-2 border border-white w-full'> <FaFacebook /> FaFacebook</a>
                <a className='flex items-center gap-2 p-2 border border-white w-full mt-2'> <CiTwitter />  Twitter </a>
                <a className='flex items-center gap-2 p-2 border border-white w-full mt-2'> <FaInstagram />  Instagram</a>
               </div>


             </div>

             <div>
                {/* div for q zone */}

                <p className='text-xl font-bold mb-2'>Find us on :</p>
                <div className='p-4'><img className='bg-black'src={swimming} alt="Imported photo" /></div>

                <div className='p-4'><img className='bg-black'src={classs} alt="Imported photo" /></div>


                <div className='p-4'><img className='bg-black'src={playground} alt="Imported photo" /></div>


             </div>
           
        </div>

          
    );
};

export default Rightnav;