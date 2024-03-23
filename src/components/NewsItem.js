import React from "react";
const NewsItem = (props) => {
  // export class NewsItem extends Component {
  //   constructor() {
  //     super();
  //     console.log("hello i m constructor");
  //   }
  // render() {
  let { title, description, imgurl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div>
          <span
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
            className="badge rounded-pill bg-danger">
            {source}
          </span>
        </div>
        <img
          src={
            !imgurl ? "https://cdn.ndtv.com/common/images/ogndtv.png" : imgurl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>

          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
  // }
};

export default NewsItem;
