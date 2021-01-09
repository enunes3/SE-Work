const message= 'Hello World';

  // using vanilla JS
// document.addEventListener('DOMContentLoaded', () => {
//     const div = document.querySelector('.container')
//     div.innerHTML = '<h1>' + message + '</h1>'
// });

  //importing ReactDOM library line 9 in index.html
ReactDOM.render(
  //the message we want to render
  <h1 > {message}  or hard code a string< /h1>,
  //where we are trying to place the content
  document.querySelector('.container')
);
