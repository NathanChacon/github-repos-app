import './Home.css'
import SearchInput from '../../components/SearchInput/SearchInput'
function Home(){
    const onSearch = (value:string) => {
        console.log(value)
    }
    return (
        <section className="container bg-primary text-primary d-flex a-center j-center">
            <SearchInput label="Find user" onSearch={onSearch} width="50%"></SearchInput>
        </section>
    )
}

export default Home