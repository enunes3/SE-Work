const list = []; //to-do list
const list2 = []; //completed list
$('form').on('submit', (e) => {
  console.log($('#input-box').val()); //allowing text in input box
  list.push($('#input-box').val());
  e.preventDefault();
  $(e.currentTarget).trigger('reset');
  render();
});
const render = () => {
  console.log('list: ', list); //adding text input into an array
  $('ul').empty();
  list.forEach((item) => createElementsOnDom(item, '#things-to-do')); //creating a new variable
  list2.forEach((item) => createElementsOnDom(item, '#things-that-are-done')); //creating a new variable
};

const createElementsOnDom = (item, currentArray) => {
  let completedOrRemoved;
  let handleCompleteOrRemove;
  if (currentArray === '#things-to-do') {
    completedOrRemoved = 'completed';
    handleCompleteOrRemove = handleComplete;
  } else {
    completedOrRemoved = 'removed';
    handleCompleteOrRemove = handleRemove;
  }
  const newLi = $('<li> </li>').text(item);
  const newButton = $("<button></button>").text(completedOrRemoved);
  console.log(newButton);     //creating button (completedOrRemoved)
  /*     newButton.addEventListener('click', () => {
          console.log('anything');
  }) */
  $(newButton).on('click', handleCompleteOrRemove);
  $(newLi).append(newButton);
  $(currentArray).append(newLi);
  //  console.log(i);
  console.log(newLi);   //printing out text input with button
}
const handleComplete = (event) => {
  let rawText = event.target.parentNode.textContent;
  const finalText = rawText.split('completed').join('');
  // console.log(finalText)
  let indexOfItem;
  list.forEach((value, index) => {
    if (value === finalText) {
      indexOfItem = index;
    }
  })
  const itemToMove = list.splice(indexOfItem, 1)[0];
  console.log(itemToMove);    //moves item from one list/array to the other
  list2.push(itemToMove)
  render();
}
const handleRemove = (event) => {
  let rawText = event.target.parentNode.textContent;
  const finalText = rawText.split('removed').join('');
  console.log(finalText)      //removes the item from the array+
  let indexOfItem;
  list.forEach((value, index) => {
    if (value === finalText) {
      indexOfItem = index;
    }
  })
  const itemToMove = list2.splice(indexOfItem, 1)[0];
  console.log(itemToMove);
  // list2.push(itemToMove)
  render();
}
