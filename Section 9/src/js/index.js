import Search from "./models/Search";
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader } from './views/base';

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

// import axios from 'axios';

// async function getResults(query){

    
//     //older browsers might not recognize fetch
//     // using axios to do ajax call

//     const proxy = 'https://cors-anywhere.herokuapp.com/';
//     const key = '6bd13bc05e1ae4ec00fabf0a3c299d54';

//     try{
//          //REMEMBER, we handle promises using async, await
//     const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
//     const recipes = res.data.recipes;
//     console.log(recipes);
//     }catch(error){
//         alert(error);
//     }

//     // error handling is easier in axios than in fetch
   
// }



// getResults('pizza');
// getResults('sandwich');






/////////////////////////////////////////
// Lecture 140
// import Search from './models/Search';

// const search = new Search('pizza');
// console.log(search);


///////////////////////////////////////////////
// Lecture 141

// State 



/** Global state of the app
 *  - Search Object
 *  - Current recipe object
 *  - Shopping list object
 *  - Liked recipes
 */
const state = {};

const controlSearch = async () => {
    // 1)  Get query from view
    const query = searchView.getInput(); // TODO
    console.log(query);

    if(query){
        // 2) New search object and add to state
        state.search = new Search(query);


        // 3) Prepare UI for results 
        searchView.clearInput();

        // clear results from previous search
        searchView.clearResults();
        renderLoader(elements.searchRes);

        // 4) Search for recipes
        await state.search.getResults(); // we wait for it to finish in the background


        // 5) Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);

    }
}


elements.searchForm.addEventListener('submit', e => {
    e.preventDefault(); // stop reload
    controlSearch();
});

// add event listener for event click
elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    // console.log(btn);
    if(btn){
        const goToPage = parseInt(btn.dataset.goto, 10); // base 10
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
        // console.log(goToPage);
    }
})


// const search = new Search ('pizza');
// console.log(search);
// search.getResults();

