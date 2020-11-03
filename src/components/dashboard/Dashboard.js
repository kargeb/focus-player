import FilmsList from './filmsList/FilmsList';

const Dashboard = () => (
  <div className="section has-background-white-bis">
    <div className="container">
      <div className="title is-2 has-text-black">Dashboard</div>
      <FilmsList title="All films" />
    </div>
  </div>
);

export default Dashboard;
