/*  
    ReactDOM Renders code to page 
    Args - virtual DOM element, and a real DOM element where we will place virtual DOM

    Application Component - think of this as a function that returns a React
    Virtual DOM Element. Compenents can only return a single element, so we'll 
    wrap our h1 and p in a single div. 
    
*/

function Application() {
  return (
      <div>
       <h1>Hello from React</h1>
       <p>I was rendered from the Application component.</p>
      </div>
  ); 
}

ReactDOM.render(<Application />, document.getElementById('container'));

