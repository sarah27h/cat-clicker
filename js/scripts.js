/*
 *
 * variables
 *
 */
// create array for cat names
const cats = ['Dydo', 'Momo', 'Nano', 'Roro',  'Zazy'];
const counters = [0, 0, 0, 0, 0];

const wrapper = document.querySelector('wrapper');
const catList = document.getElementById('cat_list');
const catWrapper = document.querySelector('.cat_wrapper');

// set a default cat image and display its name
document.querySelector('.cat_name').innerHTML = 'Dydo';
const catImg = document.createElement('img');

// catImg.setAttribute('src', 'images/dydo.png');


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
    var catCount = counters[i];
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

            // console.log(countclicks);
            let clickedArray = [];
            catImg.addEventListener('click', function(e) {
                
                let clickedOneId = e.target.getAttribute('id');
                // i = Number(clickedOneId);
                counters[Number(clickedOneId)]++;
                document.querySelector('.click_num').innerHTML = counters[i];
                console.log(counters[i], counters, e.target);
            });
            
        }
       
    }(liName));
    
    
};

// for(let i = 0; i < clicks.length; i++) {

//     var countclicks = clicks[i];
//     catImg.addEventListener('click', function(count) {
//         return function() {
//             count++;
//             // document.querySelector('.click_num').innerHTML = countclicks;
//             console.log(count);
//         }
            
//     }(clicks[i])); 
// }
// catImg.addEventListener('click', function() {
//     countclicks++;
//     document.querySelector('.click_num').innerHTML = countclicks;
//     console.log(countclicks);
// }); 

// catList.addEventListener('click', function(e) {
//     if(e.target.nodeName.toLowerCase() === 'li'){
//       console.log(e.target);
//     }
// });




















// for(let i = 0; i < cats.length; i++) {
//     const input = document.createElement('input');
//     input.setAttribute('type', 'radio');
//     input.setAttribute('name', 'choice');

//     const label = document.createElement('label');
//     labelText = document.createTextNode(cats[i]);
//     label.appendChild(labelText);

//     catList.appendChild(input);
    
//     input.after(label);
//     console.log(cats[i]);
// };


//  const wrapper = document.querySelector('.wrapper');
// const catImag = document.querySelector('.cat_img');

// const firstCat = document.querySelector('#first_cat');
// const firstCatName = 'Poplinre';
// document.querySelector('.cat_name1').innerHTML = firstCatName;


// const sectCat = document.querySelector('#sec_cat');
// const sectCatName = 'Chewie';
// document.querySelector('.cat_name2').innerHTML = sectCatName;

// console.log(wrapper);

// const clickNum1 = document.querySelector('.click_num1').innerHTML;
// const clickNum2 = document.querySelector('.click_num2').innerHTML;

// console.log(typeof(Number(clickNum1)));

// let countclicks1 = Number(clickNum1);
// let countclicks2 = Number(clickNum2);


/*
 *
 *  Event Listeners
 *
 */

// add click event listener to catImag
// wrapper.addEventListener('click', function(e) {
//     if(e.target.nodeName.toLowerCase() === 'img'){
//         const targetImg = e.target;
//         countclicks++;
//         console.log(countclicks + e.target.nodeName);
//         targetImg.innerHTML = countclicks;   
//     }
    
// });

// firstCat.addEventListener('click', function(e) {
//         countclicks1++;
//         console.log(countclicks1 + e.target.nodeName);
//         document.querySelector('.click_num1').innerHTML = countclicks1;   
// });

// sectCat.addEventListener('click', function(e) {
//     countclicks2++;
//     console.log(countclicks2 + e.target.nodeName);
//     document.querySelector('.click_num2').innerHTML = countclicks2;
// });