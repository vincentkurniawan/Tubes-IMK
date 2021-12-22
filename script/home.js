var books=[
{
  "title":"Little Woman",
  "author":"Louisa May Alcott",
  "isbn":"7445464385255",
  "rating":4.95,
  "price":"Rp. 129.000",
  "src":"../images/books_cover/1.png"
},{
  "title":"Thousand Years to Wait",
  "author":"L. Ryan Storms",
  "isbn":"9385454484122",
  "rating":4.92,
  "price":"Rp. 79.000",
  "src":"../images/books_cover/2.png"
},{
  "title":"Anya and The Nightingale",
  "author":"Sofiya Paternack",
  "isbn":"8485463385489",
  "rating":4.85,
  "price":"Rp. 93.500",
  "src":"../images/books_cover/3.png"
},{
  "title":"Bruja Born",
  "author":"Zoraida Cordova",
  "isbn":"8385462419255",
  "rating":4.82,
  "price":"Rp. 109.000",
  "src":"../images/books_cover/4.png"
},{
  "title":"All Children Grow Up Except One : Lost Boy",
  "author":"Christina Henry",
  "isbn":"9524463319111",
  "rating":4.80,
  "price":"Rp. 69.000",
  "src":"../images/books_cover/5.png"
},{
  "title":"Tess of The Road",
  "author":"Rachel Hartman",
  "isbn":"9780385685900",
  "rating":4.78,
  "price":"Rp. 89.000",
  "src":"../images/books_cover/7.png"
}
,{
  "title":"Not Here to Be Liked",
  "author":"Michelle Quach",
  "isbn":"978006308363",
  "rating":4.6,
  "price":"Rp. 100.000",
  "src":"../images/books_cover/6.png"
}
,{
  "title":"Beyond The Black Door",
  "author":"A. M. Strickland",
  "isbn":"9781250198747",
  "rating":4.45,
  "price":"Rp. 65.000",
  "src":"../images/books_cover/8.png"
},{
  "title":"Nightbooks",
  "author":"J. A. White",
  "isbn":"9780062560094",
  "rating":4.3,
  "price":"Rp. 97.000",
  "src":"../images/books_cover/9.png"
},{
  "title":"Ginger Bread",
  "author":"Helen Oyeyemi",
  "isbn":"9780143197850",
  "rating":4.25,
  "price":"Rp. 92.000",
  "src":"../images/books_cover/10.png"
},{
  "title":"Nobody Knows But You",
  "author":"Anica Mrose Rissi",
  "isbn":"9780062685315",
  "rating":4.17,
  "price":"Rp. 117.000",
  "src":"../images/books_cover/11.png"
},{
  "title":"Lost in The Never Woods",
  "author":"Aiden Thomas",
  "isbn":"9781250313973",
  "rating":4.02,
  "price":"Rp. 75.000",
  "src":"../images/books_cover/12.png"
},{
  "title":"Of White and Shady",
  "author":"Robert Verlander",
  "isbn":"9781925209297",
  "rating":4.00,
  "price":"Rp. 63.000",
  "src":"../images/books_cover/13-new.png"
},{
  "title":"Before We Disappear",
  "author":"Shaun David Hutchinson",
  "isbn":"7485464485270",
  "rating":3.9,
  "price":"Rp. 89.000",
  "src":"../images/books_cover/14.png"
},{
  "title":"The Inheritance Games",
  "author":"Jennifer Lynn Barnes",
  "isbn":"9780241476178",
  "rating":3.8,
  "price":"Rp. 76.750",
  "src":"../images/books_cover/15.jpg"
},{
  "title":"The Bird",
  "author":"Jules Michelet",
  "isbn":"9780143197853",
  "rating":3.65,
  "price":"Rp. 92.000",
  "src":"../images/books_cover/16.jpg"
},{
  "title":"Scavengers",
  "author":"Darren Simpson",
  "isbn":"9781474956024",
  "rating":3.59,
  "price":"Rp. 132.000",
  "src":"../images/books_cover/17.jpg"
},{
  "title":"The Wild Girl",
  "author":"Kate Forsyth",
  "isbn":"9781483084152",
  "rating":3.58,
  "price":"Rp. 123.000",
  "src":"../images/books_cover/18.jpg"
},{
  "title":"The Ninth Life",
  "author":"RTaylor B. Barton",
  "isbn":"9781335145888",
  "rating":2.72,
  "price":"Rp. 99.000",
  "src":"../images/books_cover/19.png"
},{
  "title":"The Wood : The Life and Times of Cockshutt Wood",
  "author":"John Lewis-Stempel",
  "isbn":"9781528872195",
  "rating":2.67,
  "price":"Rp. 56.000",
  "src":"../images/books_cover/20.png"
},{
  "title":"An Enchantment of Ravens",
  "author":"Margaret Rogerson",
  "isbn":"9781536447545",
  "rating":2.55,
  "price":"Rp. 106.000",
  "src":"../images/books_cover/21.jpg"
},{
  "title":"The Loneliest Girl in The Universe",
  "author":"Lauren James",
  "isbn":"9780062660268",
  "rating":2.45,
  "price":"Rp. 72.000",
  "src":"../images/books_cover/22.jpg"
},{
  "title":"Carbonel",
  "author":"Barbara Sleigh",
  "isbn":"9780722664759",
  "rating":2.55,
  "price":"Rp. 68.000",
  "src":"../images/books_cover/23.jpg"
}
];
var descending = false;

/**
 * References : https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
 */
const sort_by = (field, reverse, primer) => {

  const key = primer ?
    function(x) {
      return primer(x[field])
    } :
    function(x) {
      return x[field]
    };

  reverse = !reverse ? 1 : -1;

  return function(a, b) {
    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  }
}

function init(){
  let sortSelection = document.getElementById("sort");
  sortSelection.addEventListener("change", onSortChanged);

  let sortDirection = document.getElementById("sort-direction");
  sortDirection.addEventListener("click", onSortDirectionClick);

  let cards = document.getElementsByClassName("catalog-card");
  for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', onCardClick);
  }

  let form1 = document.getElementById("form1");
  form1.addEventListener('submit', onSubmit);
}

function onSubmit(e){
  e.preventDefault();

  let searchFilter = document.getElementById("search-filter");
  let searchTextbox = document.getElementById("t-search");
  if(searchTextbox.value === "") window.location.replace("Home.html");

  if(searchFilter.value == "0") window.location.replace("HomeSearchLittleWoman.html");
  else if (searchFilter.value == "1") window.location.replace("HomeSearchRachelHartman.html");
  else if (searchFilter.value == "2") window.location.replace("HomeSearchISBN.html");
}

function onCardClick(e){
  // let badge = document.getElementsByClassName("badge")[0];
  // console.log(badge);
  // badge.style.setProperty('--num', "10");
  document.getElementById('id01').style.display='block';
}

function onSortChanged(){
  let sortSelection = document.getElementById("sort");
  let sorted; //array of books yang sudah di sortir
  if(sortSelection.value == "0"){
    sorted = books.sort(sort_by("rating", true, parseFloat));
  }else if(sortSelection.value == "1"){
    sorted = books.sort(sort_by("title", descending, (a) => a.toUpperCase()));
  }else{
    sorted = books.sort(sort_by("author", descending, (a) => a.toUpperCase()));
  }
  
  let bookCards = document.getElementsByClassName("cc");
  for(let i = 0; i < bookCards.length; i++){
    let parent = bookCards[i];
    parent.children[0].src = sorted[i].src; //posisi node buat img
    let parentContent = parent.children[1];
    let parentContentHeader = parentContent.children[0];
    parentContentHeader.children[0].innerHTML = sorted[i].title; //posisi node buat judul buku
    parentContent.children[1].innerHTML = "by " + sorted[i].author;
    parentContent.children[2].innerHTML = "ISBN : " + sorted[i].isbn;
    //parentContent.children[3] adalah sinopsis. Untuk skrg semua buku sinopsisnya lorem ipsum
    let parentContentInfo = parentContent.children[4];
    parentContentInfo.children[0].children[1].innerHTML = sorted[i].rating.toString() + "/5"; //rating
    parentContentInfo.children[1].innerHTML = sorted[i].price;
  }
}

function onSortDirectionClick(e){
  e.preventDefault();
  let sortDirection = document.getElementById("sort-direction");
  if(descending){
    //ubah ke ascending
    descending = false;
    sortDirection.children[0].classList.remove("fa-sort-amount-desc");
    sortDirection.children[0].classList.add("fa-sort-amount-asc");
    
  }else{
    //ubah ke descending
    descending = true;
    sortDirection.children[0].classList.remove("fa-sort-amount-asc");
    sortDirection.children[0].classList.add("fa-sort-amount-desc");
  }
  onSortChanged();
}

init();