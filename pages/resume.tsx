import { languages } from "../styles/data"
import {Bar} from '../components/Bar'

const resume = () => {
    return (
        <div className='px-6 py-2'>
            {/* education */}

            <div className='grid gap-6 md:grid-cols-2'>
                <div>
                    <h5 className='my-3 text-2xl font-bold'>Education</h5>
                    <div>
                        <h5 className='my-2 text-xl font-bold'>
                            Electrical And Electronics Engineering
                        </h5>
                        <p className='font-semibold'>
                            Academy of Technology (2009- 2013)
                        </p>
                    </div>
                </div>
              
{/*  experience */}
                <div>
                    <h5 className='my-3 text-2xl font-bold'>Experience </h5>
                    <div>
                        <h5 className='my-2 text-xl font-bold'>
                            Software Engineer 
                        </h5>
                        <p className='font-semibold'>
                            Current Company Aptude (2019 - on)
                        </p>
                    </div>
                </div>
                
            </div>

            
{/* languages & tools*/}

            <div className='grid gap-6 md:grid-cols-2'> 
            <div>
                <h3 className='my-3 text-3xl font-bold'>Languages& Frameworks </h3>
            </div>
            <div className='my-2'>
                {
                  languages.map(language => <Bar data ={language} key={language.name}  /> )  
                }
                
            </div>
            
{/*  tools*/}
            {/* <div>
                <h3 className='my-3 text-3xl font-bold'>Tools & Softwares </h3>
            </div>
            <div className='my-2'>
                {
                  tools.map(tool => <Bar data ={tool} key={tool.name}  /> )  
                }
                
            </div> */}
                
            </div>


             
        </div>
    )
}

export default resume
