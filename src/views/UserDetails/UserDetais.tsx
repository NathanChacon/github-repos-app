import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from '../../utils/api'
import './UserDetails.css'
function UserDetails(){
    const {userName} = useParams<{userName:string}>()
    const [user, setUser] = useState<User>()
    const [error, setError] = useState<string>('')
    useEffect(() => {
        startUserConfig(userName)
    }, [])

    const startUserConfig = async (userName:string) => {
        try{
            const user = await getUserByName(userName)
            setUser(user)
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

    return (
        <section className="container bg-primary text-primary d-flex a-center j-center"> 
            {
                user
                ?
                <div className="user-details">
                    <figure className="user-details__avatar">
                        <img src={user.avatar_url}></img>
                    </figure>
                    <h2 className="user-details__title">Name: {user.login}</h2>
                    {user.email ? <h4 className="user-details__subtitle">Email: {user.email}</h4> : ''}
                    {user.followers ? <h4 className="user-details__subtitle">Fallowers: {user.followers}</h4> : ''}
                    <button className="button button__theme__primary p-10">repositories</button>
                </div>
                :
                ''
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


export default UserDetails