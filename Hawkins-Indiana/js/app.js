console.log('stranger things are coming!');

$(() => {    //Adding Just getting started on the page
const addH2 = () => {
  $h2 = $('<h2>').text("Just getting started");
  $('body').append($h2);
}
addH2();
});
