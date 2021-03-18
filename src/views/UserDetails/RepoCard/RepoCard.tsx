import './RepoCard.css'
function RepoCard(props:RepoCardProps){
    return (
        <div className="card text-primary">
            <h1>
                <a href={props.link} target="blank">{props.title}</a>
            </h1>
            <p>{props.description}</p>
        </div>
    )
}

interface RepoCardProps{
    title:string,
    description:string
    link:string,
    date:string,
    private:boolean
}

export default RepoCard