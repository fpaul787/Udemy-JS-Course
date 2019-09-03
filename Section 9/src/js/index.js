// // Global app controllers

// // this is also our entry point
// import x from './test';

// const num = 23
// console.log(`I imported ${x} from another module called test.js! variable  is ${num}` );


/////////////////////////////////////////////////////
//Lecture: ES6 Modules
// import str from './models/Search';

// //import multiple things or specify exactly
// // import {add, multiply, ID} from './views/searchView';
// // console.log(`Using imported function! ${add(ID, 2)} and ${multiply(3, 5)}. ${str}`);

// // import {add as a, multiply as m, ID} from './views/searchView';
// // console.log(`Using imported function! ${a(ID, 2)} and ${m(3, 5)}. ${str}`);


// import * as searchView from './views/searchView';
// console.log(`Using imported function! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3, 5)}. ${str}`);



////////////////////////////////////////////
// Lecture: Making our first API

import axios from 'axios';

async function getResults(query){

    
    //older browsers might not recognize fetch
    // using axios to do ajax call

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '6bd13bc05e1ae4ec00fabf0a3c299d54';

    try{
         //REMEMBER, we handle promises using async, await
    const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
    }catch(error){
        alert(error);
    }

    // error handling is easier in axios than in fetch
   
}

getResults('pizza');
getResults('sandwich')


