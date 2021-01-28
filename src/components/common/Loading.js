import loadingGif from '../../images/loading_transparent.gif';

const Loading = () => (
  <div className="has-text-centered py-6 my-6">
    <div className="lds-roller">
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
    </div>
  </div>
);
// const Loading = () => (
//   <div className="has-text-centered py-6 my-6">
//     <img src={loadingGif} alt="loading gif" />
//   </div>
// );

export default Loading;
