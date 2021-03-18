import './Home.css'
import SearchInput from '../../components/SearchInput/SearchInput'
import { useHistory } from 'react-router-dom';
function Home(){
    const history = useHistory()
    const onSearch = (value:string) => {
        history.push(`/user/${value}`)
    }
    return (
        <section className="container bg-primary text-primary d-flex a-center j-center">
            <SearchInput label="Find user" onSearch={onSearch} width="50%"></SearchInput>
        </section>
    )
}

export default Home