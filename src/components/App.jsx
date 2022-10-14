
import { GlobalStyle } from './GlobalStyle';


export const App = () => {
  return (
    <><div className="FeedBack">
    <h1>Please leave feedback</h1>

    <button type="button" onClick={(e)=>{console.log(e)}}>Good</button>
      <button type="button" onClick={(e) => { console.log(e) }}>Neutral</button>
      <button type="button" onClick={(e) => { console.log(e) }}>Bad</button>

    <h1>Statistics</h1>
    <p>Good</p>
    <p>Neutral</p>
    <p>Bad</p>
    <p>Total:</p>
    <p>Positive feedback:</p>
  </div>
      <GlobalStyle />
    </>
  );
};