import React from 'react';

class Error extends React.Component {
  handleRouting = () => {
    window.location.href = '../Movies/movies.js'; 
  };

  render() {
    return (
      <div className="card">
        <div className="card" style={{ width: '18rem' }}>
          <image
            src="https://new3.co/wp-content/uploads/2018/01/888-11.jpg"
            className="card-img-top"
            alt="Card Image"
          />
          <div className="card-body">
            <h1 className="card-title">Not Found</h1>
            <p className="card-text">The page you are looking for does not exist.</p>
            <button className="btn btn-danger" onClick={this.handleRouting}>
              Go to movies
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
