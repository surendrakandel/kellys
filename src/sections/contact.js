import React from 'react';
import Logos from 'assets/logos.svg';
import Logo from 'components/logo';
import { jsx } from 'theme-ui';
import { Container, Grid,Flex, Box } from 'theme-ui';
/** @jsx jsx */

export default function Contact(){
    return <section className="flex items-center p-20 lg:justify-center " >
    <div className="flex flex-col overflow-hidden  rounded-md max md:flex-row md:flex-1 lg:max-w-screen-md" sx={styles.container} id="contact">
      <div className="p-3  text-white  md:w-132 md:flex-shrink-0 md:flex md:flex-col md:items-start md:justify-center" sx={styles.left}>
        <div className="text-4xl py-5 font-bold tracking-wider text-center max-w-md " style={{color:"rgb(7,55,104)"}}>
          <a href="#">
            Kelly Accouting <br/>
            & <br/>
            Tax Associates
          </a>
        </div>
        <p className="font-normal px-10  md:mt-20" sx={styles.leftpage}>
        <div class="flex items-center" styles={{width:"100%"}}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8" style={{color:"rgb(7,55,104)"}}>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-60" style={{color:"rgb(7,55,104)"}}>
                            1131 W 6th St #210, <br />
                            Ontario, CA, 91762
                            </div>
                        </div>
                        <div class="flex items-center mt-4  dark:text-gray-400" style={{color:"rgb(7,55,104)"}}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8" style={{color:"rgb(7,55,104)"}}>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-60" style={{color:"rgb(7,55,104)"}}>
                                +1 (909) 687-7017
                            </div>
                        </div>
                        <div class="flex items-center mt-4 text-gray-100 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 " style={{color:"rgb(7,55,104)"}}>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-60" style={{color:"rgb(7,55,104)"}}>
                                info@kellyaccountingtax.com
                            </div>
                        </div>
        </p>
      </div>
      <div className="p-10 py-5 bg-white md:flex-1 w-full ">
        <h3 className="my-4 text-2xl font-semibold text-gray-700">Lets Get Started!</h3>
        <form action="#" className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-sm font-semibold text-gray-500">Name</label>
            <input type="text" id="name" autofocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
            <input type="email" id="email" autofocus className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
          </div>
          <div className="flex flex-col space-y-1">
          <label htmlFor="text" className="text-sm font-semibold text-gray-500">Message</label>

            <textarea type="text" id="message" rows="7" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
          </div>

          <div className="w-full m-auto">
            <button type="submit" className="w-60 px-4 py-4 text-lg font-semibold text-white transition-colors duration-300 rounded-md shadow focus:outline-none focus:ring-blue-200 focus:ring-4" sx={styles.button}>
              Send Message
            </button>
          </div>


        </form>
      </div>
    </div>
  </section>;
}
const styles = {
    section:{
        minWidth: "500px",
        width:"100%",
        height: "1100px",
        backgroundColor: "contact",
        color:"rgb(7,55,104)",
        fontSize:"20px"
    },
    container:{
        width: "90%",
        maxWidth:"1240px",
        margin: "auto",
        boxShadow: "0px 4px 10px rgb(38 78 118 / 12%)",
    },
    left:{
        alignItems:"center",
        borderRight: "1px solid rgba(209, 213, 219, var(--tw-border-opacity))",
    },
    leftpage:{
        minWidth:"300px",
        width: "100%",
    },

    right:{
        paddingTop: "50px",
        width:"70%",
        height:"100%",
    },
    form:{
        paddingTop:"30px",
        paddingBottom:"30px",
        width:"100%",
    },
    img:{
        margin: "auto",
        width:"90%",
        maxWidth:"500px",
    },
    button:{
        background:"rgb(7,55,104)",
        '&:hover':{
          background: '#EA3A60',
        }
    }
}

export async function getStaticProps({ params }) {
	const page = await getCollectionItem('pages', 'contact');

	return {
		props: {
			page: JSON.parse(JSON.stringify(page))
		}
	};
}