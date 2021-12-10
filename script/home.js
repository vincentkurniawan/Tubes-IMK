var books=[
{
  "title":"Little Woman",
  "author":"Louisa May Alcott",
  "isbn":"7445464385255",
  "rating":4.95,
  "price":"Rp. 129.000",
  "src":"../images/books_cover/1.png"
},{
  "title":"Thousand Years To Wait",
  "author":"L. Ryan Storms",
  "isbn":"9385454484122",
  "rating":4.92,
  "price":"Rp. 79.000",
  "src":"../images/books_cover/2.png"
},{
  "title":"Anya And The Nightingale",
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
  "title":"Tess Of The Road",
  "author":"Rachel Hartman",
  "isbn":"9780385685900",
  "rating":4.78,
  "price":"Rp. 89.000",
  "src":"../images/books_cover/7.png"
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