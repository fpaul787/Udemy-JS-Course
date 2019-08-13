// Budget Controller
var budgetController = (function(){



})();

// UI Controller
var UIController = (function(){

    var DOMstring = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    
    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstring.inputType).value,
                description: document.querySelector(DOMstring.inputDescription).value,
                value: document.querySelector(DOMstring.inputValue).value
            };
        },

        getDOMstring: function(){
            return DOMstring;
        }
    };

})();


// Separate on concerns
// Each part on an application 
// should focus on their own
// task. 

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function(){

        var DOM = UICtrl.getDOMstring();


        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);


        document.addEventListener('keypress', function(event){
            // console.log('event');
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
    
        });

    };

    // Public intialization function
    
    var ctrlAddItem = function(){

        // 1. Get the field input data
        var input = UICtrl.getInput();

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }

    return{
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();