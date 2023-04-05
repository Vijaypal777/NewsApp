import React, { Component } from 'react';
export class NewsItem extends Component {
  
 render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://cdn.vox-cdn.com/thumbor/eJCf-0eN-BMvuoNTj_0k-ImYauY=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24390408/STK149_AI_01.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More..</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;



