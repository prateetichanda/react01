import React from 'react'

export default class Rainbow extends React.Component
{
    render()
    {
        let alphabetColor=
        {
            color:'brown',
            float:'left',
            backgroundColor:this.props.fcolor,
            
        }
        return(
        <h1 style={alphabetColor}>{this.props.children}</h1>
    )
    }
}