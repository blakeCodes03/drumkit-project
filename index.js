

// function to play sound from either press or click
function makeSound(key) {
    switch (key) {
        case "w":
            var cymbal = new Audio('sounds/cymbal.mp3') ;       
        cymbal.play();            
            break;
        case "a":
            var snare = new Audio('sounds/snare.mp3') ;
        snare.play(); 
        case "s":
            var tom1 = new Audio('sounds/tom-1.mp3') ;
        tom1.play();
        case "d":
            var tom2 = new Audio('sounds/tom-2.mp3') ;
        tom2.play();
        case "j":
            var tom3 = new Audio('sounds/tom-3.mp3') ;
            tom3.play(); 
        case "k":
            var bassDrum = new Audio('sounds/Bass-drum.mp3') ;
        bassDrum.play();
        default:
            console.log("invalid input");
            break;
    }    
    
}
// detecting button press
document.addEventListener("keypress", function (event) {
    makeSound(event.key); 
    animation(event.key)

});

// detecting keyboard press
const buttonGroup = document.querySelectorAll(".drum");
for (let i = 0; i < buttonGroup.length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        animation(buttonInnerHTML);
        
    });

}

// Original block of code I wrote by myself... hahaha
// var buttonGroup = document.querySelectorAll(".drum");
// for (let i = 0; i < buttonGroup.length; i++){
//     buttonGroup[0].addEventListener("click", function() {              
//         var cymbal = new Audio('sounds/cymbal.mp3') ;       
//         cymbal.play(); 
//         animation(changee);      
//     } );
//     buttonGroup[1].addEventListener("click", function() {
//         var snare = new Audio('sounds/snare.mp3') ;
//         snare.play();       
//     } );
//     buttonGroup[2].addEventListener("click", function() {
//         var tom1 = new Audio('sounds/tom-1.mp3') ;
//         tom1.play();       
//     } );
//     buttonGroup[3].addEventListener("click", function() {
//         var bassDrum = new Audio('sounds/Bass-drum.mp3') ;
//         bassDrum.play();       
//     } );
//     buttonGroup[4].addEventListener("click", function() {
//         var tom3 = new Audio('sounds/tom-3.mp3') ;
//         tom3.play();       
//     } );
//     buttonGroup[5].addEventListener("click", function() {
//         var tom2 = new Audio('sounds/tom-2.mp3') ;
//         tom2.play();       
//     } );
   
//     }
//     document.addEventListener("keypress", function () {
//         var w = event.key;
//         var a = event.key;
//         var s = event.key;
//         var d = event.key;
//         var j = event.key;
//         var k = event.key; 
//         if (w === "w" || w === "W"){
//             var cymbal = new Audio('sounds/cymbal.mp3') ;       
//             cymbal.play();        
//         }
//         if (a === "a" || a === "A"){
//             var snare = new Audio('sounds/snare.mp3') ;
//             snare.play();      
//         }  
//         if ( s === "s" || s === "S") {
//             var tom1 = new Audio('sounds/tom-1.mp3') ;
//             tom1.play(); 
//         } 
//         if ( d === "d" || d === "D") {
//             var bassDrum = new Audio('sounds/tom-2.mp3') ;
//             bassDrum.play(); 
//         }    
//         if ( j === "j" || j === "J") {
//             var tom3 = new Audio('sounds/tom-3.mp3') ;
//             tom3.play();
//         }  
//         else if ( k === "k" || k === "K") 
//             var tom2 = new Audio('sounds/Bass-drum.mp3') ;
//             tom2.play();
         
    
//         });
        function animation(buttonInnerHTML) {
           var activeButton = document.querySelector("." + buttonInnerHTML)
           activeButton.classList.add("pressed"); 
           setInterval(() => {
            activeButton.classList.remove("pressed");
           }, 300);   
           
        }
        // document.querySelector("button.drum").innerHTML = " boy";
        
// function changeInnerHTML(less){
//       document.getElementById("title").innerHTML = less; 
//    } 
//    function myCalc(num1, num2, special) {
//     let sum = num1 + num2;
//     special(sum);    
//    }
//    myCalc(5, 3, changeInnerHTML);

//    function eventListene(typeOfEvent, callback) {
//     var eventThatHappened = {
//         eventType : "keypress",
//         key : "p",
//         duration : 2  
//     }
//     if (typeOfEvent === eventThatHappened.eventType) {
//         callback(eventThatHappened);
//     }
    
//    }
//    document.addEventListener("keypress", function(terry){
//     console.log(terry);
//    })

  
                  
        
    
    
    