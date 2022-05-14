import React from 'react';

export default function Portfolios() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>PORTFOLIO</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
              <strong>PROJECTS</strong> 
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                <a href='https://www.github.com/BrenoBertapele' target='blanck'> <strong>Take a look at my personal projects</strong></a>
                </h6>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}
