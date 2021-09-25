

/* --Search Input-- */

/* cached */
const filterFieldEl = document.querySelector('#filter-field')
const indexViewEl = document.getElementById('index-view');
const listContainerEl = document.querySelector('#index-view section');


const carousel = document.getElementsByClassName('CarouselItems');
const prodDisp = document.getElementsByClassName('frontProds');

/* event listeners */

document.getElementById('filter-field').addEventListener('keyup', typeAhead)


/*
document.getElementById('filter-btn').addEventListener('click', searchSort)


function searchSort(){
  const getValue = filterFieldEl.value
  
    if(getValue){
      items = items.filter(p => p.name.trim().toLowerCase() === getValue.trim().toLowerCase())
    }
  render()
}
*/
let currentView, items;


document.getElementById('filter-btn')
 .addEventListener('click', function(){
   currentView = 'index';
   render();

   carousel.style.visibility = 'hidden';
   prodDisp.style.visibility = 'hidden';
 })

async function init() {
  console.log(items)
  currentView = 'index';
  items = await fetch(BASE_URL).then(res => res.json());

  //sort the items by name
  items.sort(searchSort); 

  render();
 }

function render() {
  indexViewEl.style.display = currentView === 'index' ? 'block' : 'none';
  // addPuppy.style.display = 'none';

  if (currentView === 'index') {
  let html = products.reduce((html, prods) => html + 
    `<div>${products.name} from (${products.product_type}) </div>`, '');
  listContainerEl.innerHTML = html;

  const allDivs = listContainerEl.childNodes

  allDivs.forEach(el => {
    el.style.border = 'orange 2px solid'
    el.style.padding = '20px';
  })

  } else if (currentView === 'create') {
    // TODO
  }
}

async function typeAhead(){
  const filterValue = filterFieldEl.value
  if (filterValue && filterValue.length >= 3){
    items = await fetch(BASE_URL).then(res => res.json())
    items = items.filter(p => p.name.trim().toLowerCase().includes(filterValue.trim().toLowerCase()))
    render()
  }
  else{
    init()
  }
}



/* --Slides--*/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName('slides');
    var dots = document.getElementsByClassName('dot');
    if( n > slides.length){slideIndex = 1}
    if( n < 1){slideIndex = slides.length}
    for(i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

}

/* --Display products on homepage-- */

// function displays() {
//   var front = document.getElementById('fronts');
//   var title = document.getElementById('title')
//   if(front.style.visibility === 'hidden'){
//     front.style.visibility = 'visible';
//   } else{
//     front.style.visibility = 'hidden';
//   }
// }


/* --cart-- */

function cartDisp(){

  var cartDiv = document.getElementById('cart')
  if(cartDiv.style.visibility === 'hidden' ){
    cartDiv.style.visibility = 'visible';
  } else{
    cartDiv.style.visibility = 'hidden';
  }
  
}

// document.getElementById(`<%=p.img%>`).addEventListener('click', handleAddItem);
// async function handleAddItem(){
//  cart = document.getElementById('placeCart') 
//  document.getElementById(`<%=p.product_type%>`).push(cart)
  
//  await cart.save()


  //  if (addCart === onclick) {
  //    let addItem = await fetch(BASE_URL, {
  //      method: 'GET',
  //     //  headers: {'Content-Type': 'application/json'},
  //      body: JSON.stringify({
  //        name: products[0].value,
         
  //      })
  //    }).then(res => res.json());
     
  //  }
// }