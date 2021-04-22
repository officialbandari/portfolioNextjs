import {services } from '../styles/data'
//import {  GetServerSidePropsContext,GetStaticPropsContext } from 'next'


import {ServiceCard} from '../components/ServiceCard'


const index = () => {
  
  
  
  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>
      <h5 className='my-3 font-medium'>
        To work in a challenging environment and be a spine of the team which is 
        achieving goals in IT Industry as well as in Career.
         I strongly believe that, I have the ability to discover and improve upon my potentials dormant within me. I believe that I should not wait for opportunities but to create them for achieving excellence.
        </h5>
        
     <div 
     className='flex-grow p-4 mt-5 bg-gray-400'
     style={{ marginLeft:'-1.5rem',marginRight: '-1.5rem'}}
     >
       <h6 className='my-3 text-xl font-bold tracking-wide'> 
       what I offer 
       </h6>
      
       <div className='grid gap-6 lg:grid-cols-2'>
         {services.map(service =>(
          <div className='bg-gray-200 rounded-lg lg:col-span-1'>
             <ServiceCard service= {service} />
          </div>
         ))}
       </div>
       <div>
         
         
         
        
       </div>
     </div>
    </div>
  )
}

export default index


// export const getServerSideProps = async (context : GetServerSidePropsContext) =>{

// const res = await fetch('http://localhost:3000/api/services')
// const data = await res.json()
// console.log('SERVER', services)

//   return{
//     props : {
//       services :data.services,
//     },
//   }

// }


// export const getStaticProps = async (context : GetStaticPropsContext) =>{

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()
//   console.log('SERVER', services)
  
//     return{
//       props : {
//         services :data.services,
//       },
//     }
  
//   }
  