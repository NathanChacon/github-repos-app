import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from '../../utils/api'
import RepoCard from "./RepoCard/RepoCard"
import './UserDetails.css'
function UserDetails(){
    const STARRED_REPOS = 'starred repos'
    const USER_REPOS = 'user repos'
    const USER_ERROR = 'User Not Found'
    const repoTypes:Array<string> = [USER_REPOS, STARRED_REPOS]
    const [selectedRepo, setSelectedRepo] = useState(USER_REPOS)
    const {userName} = useParams<{userName:string}>()
    const [user, setUser] = useState<User>()
    const [repos, setRepos] = useState<Array<Repo>>([])
    const [userError, setUserError] = useState<string>('')
    useEffect(() => {
        startUserConfig(userName)
        startRepoConfig(userName, selectedRepo)
    },[])

    const startUserConfig = async (userName:string) => {
        try{
            const user = await getUserByName(userName)
            setUser(user)
        }
        catch(error){
            setUserError(error)
        }
    }

    const startRepoConfig = async (userName:string, repoType:string) => {
        try{
            const repos:Array<Repo> = repoType === USER_REPOS ? await getReposByUserName(userName) : await getStarredReposByUserName(userName)
            setRepos(repos)
        }
        catch(error){
            console.log('repos not found')
        }
    }

    const getUserByName = (userName:string):Promise<User> => {
        return new Promise((resolve, reject) =>  {
            axios.get(userName)
            .then(
                (response) => {
                    response.data ? resolve(response.data) : reject(USER_ERROR)
                },
                (error) => {
                    reject(USER_ERROR)
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

    const getStarredReposByUserName = (userName:string):Promise<Array<Repo>> => {
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

    const onRepoTypeChange = async (event:React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRepo(event.target.value)
        startRepoConfig(userName, event.target.value)        
    }

    return (
        <section className="container bg-primary text-primary d-flex col p-20"> 
            {
                user 
                ?
                <React.Fragment>
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
                    <div>
                        <select className="select-input mt-10" value={selectedRepo} onChange={(e) => {onRepoTypeChange(e)}}>
                            {
                                repoTypes.map((repoType) => {
                                    return <option className="select-input__option" value={repoType}>{repoType}</option>
                                })
                            }
                        </select>
                        {
                            repos.length !== 0 
                            ?
                            <React.Fragment>
                                {
                                    repos.map((repo) => {
                                        return <RepoCard title={repo.name} link={repo.clone_url} description={repo.description} private={repo.private} date={repo.updated_at}></RepoCard>
                                    })
                                }
                            </React.Fragment>
                            :
                            <div className="d-flex a-center j-center mt-10">
                                loading or error
                            </div>
                        }
                    </div>
                </React.Fragment>
                :
                <div className="container d-flex a-center j-center">
                    {
                        userError ? userError : 'loading'
                    }
                </div>
            }
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