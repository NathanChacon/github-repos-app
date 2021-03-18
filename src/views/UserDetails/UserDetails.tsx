import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from '../../utils/api'
import RepoCard from "./RepoCard/RepoCard"
import './UserDetails.css'
function UserDetails(){
    const {userName} = useParams<{userName:string}>()
    const [user, setUser] = useState<User>()
    const [userRepos, setUserRepos] = useState<Array<Repo>>([])
    const [error, setError] = useState<string>('')
    useEffect(() => {
        startUserConfig(userName)
    },[])

    const startUserConfig = async (userName:string) => {
        try{
            const user = await getUserByName(userName)
            const userRepos = await getReposByUserName(userName)
            setUser(user)
            setUserRepos([...userRepos])
        }
        catch(error){
            setError(error)
        }
    }

    const getUserByName = (userName:string):Promise<User> => {
        return new Promise((resolve, reject) =>  {
            axios.get(userName)
            .then(
                (response) => {
                    console.log(response)
                    response.data ? resolve(response.data) : reject('User not found')
                },
                (error) => {
                    reject('User not found')
                }
            )
        })
    }

    const getReposByUserName = (userName:string):Promise<Array<Repo>> => {
        return new Promise((resolve, reject) =>  {
            axios.get(`${userName}/repos`)
            .then(
                (response) => {
                    console.log(response)
                    response.data ? resolve(response.data) : reject('User not found')
                },
                (error) => {
                    console.log(error)
                    reject('User not found')
                }
            )
        })
    }

    const getStarredReposByUserName = (userName:string) => {
        return new Promise((resolve, reject) =>  {
            axios.get(`${userName}/starred`)
            .then(
                (response) => {
                    console.log(response)
                    response.data ? resolve(response.data) : reject('User not found')
                },
                (error) => {
                    console.log(error)
                    reject('User not found')
                }
            )
        })
    }

    return (
        <section className="container bg-primary text-primary d-flex col p-20"> 
            {
                user
                ?
                <div className="user-details">
                    <figure className="user-details__avatar">
                        <img src={user.avatar_url}></img>
                    </figure>
                    <div className="user-details__text-container">
                        <h2 className="user-details__title">Name: {user.login}</h2>
                        {user.email ? <h4 className="user-details__subtitle">Email: {user.email}</h4> : ''}
                        {user.followers ? <h4 className="user-details__subtitle">Fallowers: {user.followers}</h4> : ''}
                        {user.bio ? <h4 className="user-details__subtitle">Bio: {user.bio}</h4> : ''}
                    </div>
                </div>
                :
                ''
            }
            <div>
                {
                    userRepos.map((repo) => {
                        return <RepoCard title={repo.name} link={repo.clone_url} description={repo.description} private={repo.private} date={repo.updated_at}></RepoCard>
                    })
                }
            </div>
        </section>
    )
}

interface User {
    login:string,
    avatar_url:string,
    email:string,
    bio:string,
    followers:number
}

interface Repo{
    name:string
    description: string,
    updated_at:string,
    clone_url:string,
    forks:number,
    private:boolean
}


export default UserDetails