import { useParams } from "react-router"
import { Link } from "react-router-dom"
import Members from "../components/Home/Members/Members"

const Company = () =>{
    const params = useParams()
    const member = Members.find(member=>member.id === params.id)
    return (
        <div>
            <h1>Detalhes da Empresa</h1>

            <p>
                Nome da empresa: {member && member.name}
            </p>

        <Link to="/">
            Voltar
        </Link>
</div>
    )
}

export default Company