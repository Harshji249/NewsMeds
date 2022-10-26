import React, { Component } from 'react'

export default class JumbotronItem extends Component {
    render() {
        let {title, description,imageUrl,newsUrl} = this.props;
        return (
                <div className="jumbotron">
                    <img className="d-flex justify-content-center" style={{width: "40rem"}} src={imageUrl} alt="" />
                    <h3 className="display-4">{title}</h3>
                    <p className="lead">{description}</p>
                    <hr className="my-4" />
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href={newsUrl} role="button">Learn more</a>
                    </p>
                </div>
        )
    }
}
