import React from 'react'



const NewsItem = (props) => {
let {title,description,imageurl,url,author,date}=props;

return (
<div className="container my-3" >
<div className="card" style={{height:"500px"}}>
<img src={imageurl?imageurl:"https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="} className="card-img-top"  alt="..." style={{height:"250px",width:"390px"}}/>
<div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">Article By {author?author:"Unknown"} on {new Date(date).toString()}</small></p>
    <a rel="noreferrer" href={url}target="_blank" className="btn btn-sm btn-dark">Read More</a>
</div>
</div>
</div>
)
}

export default NewsItem