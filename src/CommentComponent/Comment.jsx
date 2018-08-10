import React from 'react';
import CommentAuthor from './CommentAuthor';
import CommentActions from './CommentActions';
import CommentText from './CommentText';

class Comment extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <CommentAuthor/>
                <CommentText/>
                <CommentActions/>
            </div>
         );
    }
}
 
export default Comment;
