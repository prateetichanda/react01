import React from 'react';

class CommentActions extends React.Component {

    constructor()
    {
        super()
        this.state={
            UpVoteCounter:0,
            message:"Hello from Alpha",
            replyMessage:"Prateeti"
        }
        this.commentUpVote=this.commentUpVote.bind(this)
        this.commentDownVote=this.commentDownVote.bind(this)
        this.Comment=this.Comment.bind(this)
        this.giveReply=this.giveReply.bind(this)
    }
    commentUpVote()
    {
        console.log("comment upvoted");
        this.setState({UpVoteCounter:this.state.UpVoteCounter+2});
    }
    commentDownVote()
    {
        console.log("comment upvoted");
        this.setState({UpVoteCounter:this.state.UpVoteCounter-2});
    }
    Comment()
    {
        this.setState({message:"thanks for voting "+this.state.UpVoteCounter})
    }
    componentWillMount()
    {
        console.log("CommentActions:component will mount now")
    }

    giveReply(e)
    {
        console.log(e.target.value)
        this.setState({replyMessage:e.target.value})
    }
    saveReply()
    {
        console.log("Reply: "+this.state.replyMessage)
    }
    render() { 
        return ( <div>
            
            <button onClick={this.commentUpVote}>UpVote</button>
            <button onClick={this.commentDownVote}>Down Vote</button>
            <h3>{this.state.UpVoteCounter}</h3>
            <h3>{this.state.message}</h3>
           <input type="text" value={this.state.replyMessage} onChange={this.giveReply}></input>
           <button onClick={this.saveReply.bind(this)}>Reply</button>
           <h4>{this.state.replyMessage}</h4>
        </div> );
    }
}
 
export default CommentActions;