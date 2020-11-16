import { Component } from "react"
import axios from "axios"


export default class Desc extends Component{
    constructor(props){
        super(props)
        this.state = {
            url : "",
            text : "",
            comments:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    handleChange(event){
            this.setState({text: event.target.value})
    }

    handleSubmit(){
        let id = this.props.match.params.id

//post a comment
        fetch(`/api/comments/${id}`, {
            method:"POST",
            headers:{
                "Content-Type":'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(res=>{
            if(res.status===403)
                alert("token not provided, please login and then retry")
            else if(res.status===500)
                alert("user unauthorized, please login and retry commenting")
        })
    }

   async componentDidMount(){
        const id = this.props.match.params.id
        let imgLink = `/api/items/${id}`
        let commentsLink = `/api/comments/${id}`

        //fetch all related comments and image link and set them in state
        let fetchedComment = await axios.get(commentsLink).then(response => response.data.comments)
        const img = await axios.get(imgLink).then(response => response.data).then(item => item.imgurl)

        this.setState({
            comments: fetchedComment,
            url : img
        })

    }
        
    
   render() {
       if(this.state.comments){
        var comment = this.state.comments.map(comment => <div key={comment._id} style={{display:"block", textAlign:"left", margin:"10 20"}}>
                                                            <strong>{comment.name}</strong>
                                                            <p>{comment.review}</p>
                                                        </div>)
       }
       
        return (
            <div className="items">
                <img className="desc" src={this.state.url} alt="Loading Image"></img>
                <div className="comment">
                    <h3>
                        Reviews
                    </h3>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <textarea value={this.state.text} onChange={this.handleChange} style={{display:"block", width:"100%"}}/>
                        <button>
                            Leave a review
                        </button>
                    </form>
                    {comment}
                </div>
            </div>
        )
   }
    


}