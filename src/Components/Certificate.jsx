import React from "react";
import certificates from "../Components/Data/certificates.json";
const Certificate = () => {
  return (
    <>
      <div className="container projects my-4">
        <h1>CERTIFICATES</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {certificates.map((data) => (
            <>
              <div
                key={data.id}
                className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
              >
                <div
                  className="card text-light"
                  style={{
                    width: "18rem",
                    border: "1px solid yellowgreen",
                    borderRadius: "10px",
                    backgroundColor: " rgb(11, 26, 51) ",
                    // backgroundColor: "black",
                    boxShadow: "5px 5px 10px 5px rgba(101,175,10, 0.5)",
                  }}
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={`${data.imageSrc}`}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "200px",
                        border: "2px solid yellowgreen",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    {/* <p className="card-text">{data.institution}</p> */}
                    <p className="card-text">{data.Duration}</p>
                    {/* <p className="card-text">{data.Description}</p> */}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificate;
