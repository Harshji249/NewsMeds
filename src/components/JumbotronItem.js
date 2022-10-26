import React, { Component } from 'react'

export default class JumbotronItem extends Component {
    render() {
        let {title, description,imageUrl,newsUrl} = this.props;
        return (
                <div className="jumbotron">
                    <img  style={{width: "80rem"}} src={imageUrl} alt="" />
                    <h1 className="display-4">{title}</h1>
                    <p className="lead">{description}</p>
                    <hr className="my-4" />
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href={newsUrl} role="button">Learn more</a>
                    </p>
                </div>
        )
    }
}
