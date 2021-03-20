import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from '../../utils/api'
import ReactLoading from 'react-loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCodeBranch, faClock} from '@fortawesome/free-solid-svg-icons'
import Card, {CardProps} from "./Card/Card"
import './UserDetails.css'
function UserDetails(){
    const STARRED_REPOS = 'starred repos'
    const USER_REPOS = 'user repos'
    const USER_ERROR = 'User Not Found'
    const REPOS_ERROR = 'Empty'
    const repoTypes:Array<string> = [USER_REPOS, STARRED_REPOS]
    const [selectedRepo, setSelectedRepo] = useState(USER_REPOS)
    const {userName} = useParams<{userName:string}>()
    const [user, setUser] = useState<User>()
    const [cards, setCards] = useState<Array<CardProps>>([])
    const [userError, setUserError] = useState('')
    const [reposError, setReposError] = useState('')
    const loadingType = 'bubbles'

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
        setCards([])
        try{
            const repos:Array<Repo> = repoType === USER_REPOS ? await getReposByUserName(userName) : await getStarredReposByUserName(userName)
            const cards:Array<CardProps> = repos.map((repo) => {
                return {
                    title: repo.name,
                    description: repo.description,
                    link: repo.clone_url,
                    footer:[
                        {label:getFormattedDate(repo.updated_at), icon:faClock},
                        {label:repo.forks.toString(), icon:faCodeBranch}
                    ]
                }
            })
            setCards([...cards])
        }
        catch(error){
            setReposError(error)
        }
    }

    const getFormattedDate = (rawDate:string):string => {
        const date = new Date(rawDate)
        let formattedDate = date.toISOString()
        formattedDate = formattedDate.split('T')[0].replaceAll('-','/')
        return formattedDate
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
                    response.data && response.data.length ? resolve(response.data) : reject(REPOS_ERROR)
                },
                (error) => {
                    reject(REPOS_ERROR)
                }
            )
        })
    }

    const getStarredReposByUserName = (userName:string):Promise<Array<Repo>> => {
        return new Promise((resolve, reject) =>  {
            axios.get(`${userName}/starred`)
            .then(
                (response) => {
                    response.data && response.data.length > 0 ? resolve(response.data) : reject(REPOS_ERROR)
                },
                (error) => {
                    reject(REPOS_ERROR)
                }
            )
        })
    }

    const onRepoTypeChange = async (event:React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRepo(event.target.value)
        startRepoConfig(userName, event.target.value)        
    }

    return user ? 
    (
        <section className="container bg-primary text-primary d-flex col p-20"> 
            <div className="user-details">
                <figure className="user-details__avatar">
                    <img src={user.avatar_url}></img>
                </figure>
                <div className="user-details__text-container">
                    <h2 className="user-details__title">Name: {user.login}</h2>
                    {user.email ? <h4 className="user-details__title">Email: {user.email}</h4> : ''}
                    {user.followers ? <h4 className="user-details__title">Fallowers: {user.followers}</h4> : ''}
                    {user.bio ? <p className="user-details__description">{user.bio}</p> : ''}
                </div>
            </div>
            <div>
                <select className="select-input mt-20" value={selectedRepo} onChange={(e) => {onRepoTypeChange(e)}}>
                    {
                        repoTypes.map((repoType, i) => {
                            return <option key={i}  className="select-input__option" value={repoType}>{repoType}</option>
                        })
                    }
                </select>
                {
                    cards.length > 0 
                    ?
                    <React.Fragment>
                        {
                            cards.map((card, i) => {
                                return <Card {...card}></Card>
                            })
                        }
                    </React.Fragment>
                    :
                    <div className="d-flex a-center j-center mt-10">
                        {
                            reposError 
                            ?
                            <h5>{reposError}</h5>
                            :
                            <ReactLoading type={loadingType}></ReactLoading>
                        }
                    </div>
                }
            </div>
        </section>
    )
    :
    (
        <div className="container d-flex col a-center j-center bg-primary text-primary">
            {
                userError 
                ?
                <React.Fragment>
                    <FontAwesomeIcon icon={faTimes} className="icon"/>
                    <h1>{userError}</h1>
                </React.Fragment>
                :
                <ReactLoading type={loadingType}></ReactLoading>
            }
        </div>
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