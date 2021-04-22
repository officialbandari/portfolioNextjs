import {IService, ISkill } from '../styles/type'
import {RiComputerLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiOutlineAntDesign,AiOutlineApi} from 'react-icons/ai'
import {BsCircleFill } from 'react-icons/bs'



export const services: IService[] =[

{

    Icon : RiComputerLine,
    title :' Frontend Development',
    about : 'I can build a beautiful and scalable SPA using <b>HTML </b>, <b>CSS </b> and <b>React.JS </b>'
},


{

    Icon : FaServer,
    title :' Backend Development',
    about : 'handle database, server, api using <b>GolangMux </b> ,<b>Express </b> & other frameworks </b>'
},

{

    Icon : AiOutlineApi,
    title :' API  Development',
    about : 'I can develop robust REST API using  <b>NODEJS API </b> <b>Golang MuxAPI </b> and <b>Express API</b>  </b>'
},

{

    Icon : AiOutlineAntDesign,
    title :' UI designer',
    about : 'stunning user interface designer using <b>Bootstrap 4&5 </b> and <b>MaterialUI </b>  '
}






]


export const languages :ISkill[] = [

    {  
        Icon: BsCircleFill,
        name:'javascript',
        level :'70%'
       
    },

    {
        name:'Nodejs',
        level :'65%',
        Icon :BsCircleFill
    },

    {
        name:'Express',
        level :'70%',
        Icon :BsCircleFill
    },

    {
        name:'AngularJS',
        level :'60%',
        Icon :BsCircleFill
    },

    {
        name:'Docker',
        level :'50%',
        Icon :BsCircleFill
    }
]