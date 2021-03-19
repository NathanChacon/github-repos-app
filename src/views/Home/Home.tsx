import './Home.css'
import SearchInput from '../../components/SearchInput/SearchInput'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
function Home(){
    const history = useHistory()
    const onSearch = (value:string) => {
        if(value && value.trim()){
            history.push(`/user/${value}`)
        }
    }

    return (
        <section className="container bg-primary text-primary d-flex col a-center j-center">
            <FontAwesomeIcon icon={faRocket} className="icon mb-10"></FontAwesomeIcon>
            <SearchInput label="Search user" onSearch={onSearch} width="50%"></SearchInput>
        </section>
    )
}

export default Home