import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
          I graduated in Civil Engineering from the State University of Maringá in March 2018. 
          Currently, I am a student and enthusiast of the postgraduate course of Software Engineering with emphasis on software testing and quality. 
          Skills: HTML, CSS, Sass, JavaScript, TypeScript, React.js, Hooks, Redux, Redux Thunk, Redux Saga, MaterialUI, Gatsby, Bootstrap, Bulma, GraphQL, Context API, REST API, Node.js, Express, Git, NoSQL (MongoDB), SQL(PostgreSQL), Firebase, MySQL.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFORMATIONS</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Maringá/PR, Brazil
              </p>
              <p>
                <strong>Email:</strong> bertapele@gmail.com
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Spoken Languages</strong> - Portuguese/ English/ Spanish
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
