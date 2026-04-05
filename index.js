/**
 * Selects the element with the id 'main-heading' and changes its text content to 'DOM Manipulation Challenge'.
 */
function changeHeadingText() {
  // TODO: Implement this function
  let change= document.querySelector('#main-heading');
  change.textContent= 'DOM Manipulation Challenge';
}

/**
 * Selects the element with the id 'box-to-modify' and changes its background color to 'lightblue'.
 */
function changeBoxColor() {
  // TODO: Implement this function
  let back_change= document.querySelector('#box-to-modify');
  back_change.style.backgroundColor='lightblue';
}

/**
 * Creates a new <li> element, sets its text content to 'New Item', and appends it to the <ul> with the id 'item-list'.
 */
function addNewItem() {
  // TODO: Implement this function
  let new_li= document.createElement('li');
  new_li.textContent='New Item';
  let current_ul= document.querySelector('#item-list');
  current_ul.appendChild(new_li);
}

/**
 * Selects the paragraph with the class 'content-para' and adds the class 'highlight' to it.
 */
function highlightParagraph() {
  // TODO: Implement this function
  let para=document.querySelector('.content-para');
  para.className='highlight';
  console.log(para.className);
}

/**
 * Selects the element with the id 'to-be-removed' and removes it from the DOM.
 */
function removeElement() {
  // TODO: Implement this function
  let re=document.querySelector('#to-be-removed');
  re.removeAttribute('id');
}


// Do not edit the lines below.
// These lines are for testing purposes.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        changeHeadingText,
        changeBoxColor,
        addNewItem,
        highlightParagraph,
        removeElement
    };
}

