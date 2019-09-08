//we use default exports when we only 
//want to export one thing from a 
//module
// export default 'I am an export string.';
import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        //older browsers might not recognize fetch
        // using axios to do ajax call

        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '6bd13bc05e1ae4ec00fabf0a3c299d54';

        try {
            //REMEMBER, we handle promises using async, await
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error) {
            alert(error);
        }

        // error handling is easier in axios than in fetch
    }
}



