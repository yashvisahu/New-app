import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
        <div className="my-3">
        <div className="card" style={{width:"18rem"}}>
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
        {source} 
        </span>
      <img src={imageUrl? imageUrl:"https://th.bing.com/th/id/R.8de5643b121efcc3f1c6a38cdea894d6?rik=8FUvV5BBB%2bJYrg&riu=http%3a%2f%2fblog.thempowergroup.com%2fwp-content%2fuploads%2f2016%2f08%2fphotodune-3778250-exciting-news-xs.jpg&ehk=d4JsWNfZZI0q9E52CX1LAgGEOUE7EjnN3L3pWPcM%2btE%3d&risl=&pid=ImgRaw&r=0"} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">By {author? author:"unknown"} on {new Date(date).toGMTString()}</small></p>
        <a rel="noopener noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div></div>
    );
  }
}

export default NewsItem