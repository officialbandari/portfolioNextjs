

import { NextApiRequest , NextApiResponse }  from 'next';

import {services} from '../../styles/data'
export default (req: NextApiRequest,res: NextApiResponse) =>{
    // by default get request 
    console.log(services)
    res.status(200).json({
        services
    })
}