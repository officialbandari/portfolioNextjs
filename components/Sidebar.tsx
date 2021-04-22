import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
const Sidebar = () => {
    return (
        <div>


 {/*images*/}
            <img src="https://instagram.fhyd7-1.fna.fbcdn.net/v/t51.2885-19/s320x320/136182177_112858547365027_3848096182965957808_n.jpg?tp=1&_nc_ht=instagram.fhyd7-1.fna.fbcdn.net&_nc_ohc=LtmC0ZNOEksAX9h0QXa&edm=ABfd0MgAAAAA&ccb=7-4&oh=2dd8f158ff5a3c7884d7149bc67a5ba1&oe=60988C0E&_nc_sid=7bff83"
             alt="user avatar"
             className='w-32 h-32 mx-auto rounded-full'
             
             />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-Kaushan'>
                <span className='text-green'>krishna</span> 
                Dev
            </h3>
            <p className='px-2 py-1 my-4 bg-gray-200 rounded-full'>Web Developer</p>
            
                <a 
                className='flex items-center justify-center px-2 py-1 my-4 bg-gray-200 rounded-full'
                href=""
                download='name'
                >
                    <GiTie className='w-6 h-6' />
                    Download Resume
                </a>
                 
                 
  {/* social media icons*/}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
            <a href="">
            <AiFillGithub className='w-8 h-8 cursor-pointer'/>
            </a>
            <a href="">
            <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
            </a>
            </div>


 {/*address */}
             <div className='py-4 my-5 bg-gray-200' 
             style={{marginLeft : '-1rem', marginRight:'-1rem'}}
             >
                 <div className='flex items-center justify-center space-x-2 '>
                     <GoLocation/>
                     <span>Hyderabd,Telangana, India</span>
                 </div>
                 <p className='my-2 overflow-hidden'>officialbandari6@gmail.com</p>
                 <p className='my-2'>8074653037</p>
             </div>

             
  { /*Buttons*/} 
              <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none '
              onClick={()=>window.open('mailto:officialbandari6@gmail.com')}
              
              >Email me</button>
              <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'>Toggle Theme</button>



        </div>
    )
}

export default Sidebar
