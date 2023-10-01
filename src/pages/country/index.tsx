import { countryInfo } from "@/models/country";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Country = () => {
  const [data, setCountryInfo] = useState<countryInfo | null>(null);

  const style1={backgroundColor:"white"};
  const style2={border:"none"};



  useEffect(() => {
    fetch(`https://restcountries.com/v2/all`)
      .then((res) => res.json())
      .then((result) => setCountryInfo(result));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {data != null &&
          data.map((country, index) => {
            return (
              <div className="col-md-4 my-3" key={index}>
                <div className="card">
                  <Link
                    href={`/country/country-details/${country.name}`}
                    className="card-title text-center"
                  >
                    {country.name}
                  </Link>
                  <Link
                    href={`/country/country-details/${country.name}`}
                    className="btn btn-primary"
                    style={{...style1,...style2}}
                  >
                    <img
                      className="img-fluid"
                      src={country.flags.svg}
                      style={{ height: "255px" }}
                      alt="Card image cap"
                    />
                  </Link>
                  <div className="card-body">
                    <Link
                      href={`/country/country-details/${country.name}`}
                      className="btn btn-primary"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Country;
