import React from 'react'

const NewsItem = (props) => {
    const styleObj = {
        backgroundColor: props.mode === "dark" ? "#212529" : "white",
        color: props.mode === "dark" ? "white" : "black",
    };
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3' style={styleObj}>
            <div className="card" style={styleObj}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={!imageUrl ? "https://media.cnn.com/api/v1/images/stellar/prod/221123073722-wasp-39.jpg?c=16x9&q=w_800,c_fill" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body" style={styleObj}>
                    <h5 className="card-title" style={styleObj}>{title}</h5>
                    <p className="card-text" style={styleObj}>{description}</p>
                    <p className="card-text" style={styleObj}><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
