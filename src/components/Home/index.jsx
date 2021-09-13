import { Link } from "react-router-dom"
const Home = ({members}) => {
    return(
        <div>
            <nav>
               {members.map((item,index)=>{
                   return item.type === 'pj' ?(
                       <div>
                           <Link to={`/company/${item.id}`} 
                                key={index}>
                                {item.name}
                            </Link>
                       </div>
                   ) : (
                        <div>
                            <Link to={`/customer/${item.id}`} 
                                key={index}>
                                {item.name}
                            </Link>
                        </div>
                   )
                          
               })}
            </nav>
        </div>
    )
}
export default Home