$(() => {

/* Exercise Begin */

const $openBtn = $('#openModal'); // Grabbing About the Game button
const $modal = $('#modal'); // Grabbing modal element
const $closeBtn = $('#close'); // Grabbing close button


const openModal = () => {     // Event handler to open the modal
  $modal.css('display', 'block');
}
const closeModal = () => {    // Event handler to close the modal
  $modal.css('display', 'none');
}

$openBtn.on('click', openModal); //Add event listener to About the Game button
$closeBtn.on('click', closeModal);  //Add event listener to Close button


/* Exercise End */
setTimeout(openModal, 5000); //CHECK THIS!!!
});
