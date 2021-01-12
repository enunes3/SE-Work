class Visitors extends React.Component {
  render () {
      return(
    <div id="visitors">
        <div id="vis">
            <h2>Website Visitors</h2>
            <h3>821</h3>
        </div>
    </div>
    )}
};

class Reviews extends React.Component {
  render () {
      return(
    <div id="reviews">
        <div id="item">
            <h2>Reviews</h2>
            <h3>1,281</h3>
        </div>
        <div id="item">
            <h2>Average Rating</h2>
            <h3>4.6</h3>
        </div>
        <div id="item">
            <h2>Sentiment Analysis</h2>
            <h3>960</h3>
            <h3>122</h3>
            <h3>321</h3>
        </div>
    </div>
    )}
};

class Sidebar extends React.Component {
  render () {
      return(
    <div id="sidebar">
    <h2>Dashboard</h2>
    <h2>Widget</h2>
    <h2>Reviews</h2>
    <h2>Customers</h2>
    <h2>Online Analysis</h2>
    <h2>Settings</h2>
     </div>
    )}
};

//importing React.Component library line 8 in index.html
class App extends React.Component {
//class MUST have a render function -- so a Component must render some view
  render () {
    return(
    <div id="main">
    <Sidebar />
    <Reviews />
    <Visitors />
    </div>
    )}
};

  //importing ReactDOM library line 9 in index.html
ReactDOM.render(
  //the content we want to display
<App />,
  //where we are trying to place the content
document.querySelector('.main')
);
