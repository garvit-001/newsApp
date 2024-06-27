import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl } = props;

  // let indianTime = new Date(time).toGMTString();
  let indianTime = new Date(props.time).toGMTString();

  return (
    <div>
      <div className="card bg-dark text-white border border-dark rounded shadow p-3 mb-5 bg-dark rounded">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              {/* {author} on {indianTime} */}
              {props.author} on {indianTime}
              {/* you can simply do {props.something} which you are passing from parent component or can declare variable at the vary top*/}
            </small>
          </p>
          <a href={newsUrl} target=" " className="btn btn-primary">
            read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
