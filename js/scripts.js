/*
 *
 * variables
 *
 */
// create array for cat names and counters
const cats = ['Dydo', 'Momo', 'Nano', 'Roro',  'Zazy'];
const counters = [0, 0, 0, 0, 0];

const wrapper = document.querySelector('wrapper');
const catList = document.getElementById('cat_list');
const catWrapper = document.querySelector('.cat_wrapper');

// set a default cat image and display its name
document.querySelector('.cat_name').innerHTML = '';
const catImg = document.createElement('img');

// add img to display area
catWrapper.appendChild(catImg);

// select click numbers
let clickNum = document.querySelector('.click_num').innerHTML;


for(let i = 0; i < cats.length; i++) {
    //create list item for every cat name
    const li = document.createElement('li');
    const liText = document.createTextNode(cats[i]);
    li.appendChild(liText);
    catList.appendChild(li);
    console.log(cats[i]);

    // make copy of cat name to pass for closure
    var liName = cats[i];
    //add eventlistener to every cat name == list item
    li.addEventListener('click', function(cat) {
        let countclicks = 0;

        return function() {
            /*  every time we click listitem(cat name)
            *   convert it to lowercase to pass it as src link
            *   add every cat img for every name
            */
            let catName = cat.toLowerCase();
            imgSrc = `images/${catName}.png`;
            document.querySelector('.cat_name').innerHTML = cat;
            catImg.setAttribute('src', imgSrc);
            catImg.setAttribute('class', 'cat_img');
            catImg.setAttribute('alt', 'cat image');
            catImg.setAttribute('id', i);
        }
       
    }(liName));
    
};


// add eventlistener to cat image
catImg.addEventListener('click', function(e) {
    // get cat id and pass it to i to reflect cat counter for the clicked one
    let clickedOneId = e.target.getAttribute('id');
    let i = Number(clickedOneId);
    
    // increase counter of the clicked cat
    counters[i] +=1;

    // add counter number to DOM
    document.querySelector('.click_num').innerHTML = counters[i];
    console.log(counters[i], counters, e.target);
});
