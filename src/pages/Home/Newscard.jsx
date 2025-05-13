import { Link } from "react-router-dom";

 

const Newscard = ( {news}) => {
    const {title,image_url,details,id} = news;
    return (
        <div>
             {/* news card */}

             <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img className="p-12"
      src={image_url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
     {
        details.length>200
        ?
        <p>{details.slice(0,200)} <Link to={`/news/${id}`} className="text-red-800"> Read more....</Link></p>

        :

        <p>{details}</p>
     }
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Newscard;