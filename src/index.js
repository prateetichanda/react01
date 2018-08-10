import React from 'react'
import ReactDOM from 'react-dom'
import HelloReact from './HelloReact'
import Rainbow from './Rainbow';
import Comment from './CommentComponent/Comment';
var position1=document.getElementById("hello")
var position2=document.getElementById("colors");
var position3=document.getElementById("comment");
ReactDOM.render(
    <div>
    <HelloReact name="pra" type="6"></HelloReact>
    <HelloReact name="adios" type="9"></HelloReact>
    </div>,
    position1)
ReactDOM.render(<div><Rainbow></Rainbow>
    <Rainbow fcolor="red">R</Rainbow>
    <Rainbow fcolor="orange">a</Rainbow>
    <Rainbow fcolor="indigo">i</Rainbow>
    <Rainbow fcolor="blue">n</Rainbow>
    <br></br></div>,position2)

ReactDOM.render(<div><Comment></Comment>
</div>,position3)
