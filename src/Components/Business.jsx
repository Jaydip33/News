import axios from "axios";
import React, { useEffect, useState } from "react";

function Business() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://inshortsapi.vercel.app/news?category=business"
        );
        console.log("Fetching data successfully", res.data.data);
        setNewsData(res.data.data);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4" style={{ marginTop: "90px" }}>
        Business News
      </h1>
      <div className="row">
        {newsData.map((i) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card h-100 card-hover">
              <img
                src={i.imageUrl}
                alt="loding..."
                style={{ height: "200px" }}
                className="card-ima-top img-fluid rounded"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {i.title}
                  {i.isBreaking && <i className="fas fa-bolt text-warning"></i>}
                </h5>
                <p className="card-text">{i.content}</p>
                <p>
                  <i className="far fa-user me-2"></i>
                  {i.author}
                </p>
                <p>
                  <i className="far fa-clock me-2"></i>
                  {i.date}
                </p>
              </div>
              <div className="card-footer text-center">
                <a
                  href={i.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Business;
