import React from 'react'

export default class HelloReact extends React.Component
{
    render()
    {
        return(
            <div>
              I am learning React,again and again {this.props.name}
              ({this.props.type})
            </div>
        )
    }
}