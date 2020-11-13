import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <section className="hero is-medium is-light ">
      <div className="hero-body has-text-centered">
        <div className="container">
          <h2 className="title is-3 ">Watch YouTube videos without distractions</h2>
          <Link to="/films">
            <button className="button is-black is-medium is-outlined my-6" type="button">
              Browse
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
