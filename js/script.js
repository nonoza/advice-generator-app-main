//Variables
let getRandomID = '';
let getRandomAdvice = '';
let getadvicebtn = document.getElementById('advice-btn');


//Load the function when the page loads
window.addEventListener('load', () =>{
    setTimeout(()=> { 
    getAdvicegenerator();
}, 1000);
});

//When the button is clicked the event get the advice and id from the function

getadvicebtn.addEventListener("click",getAdvicegenerator);

//Function to get the advice and id from an API using JSON and Get method.

 function getAdvicegenerator(){
    setTimeout(()=> { 
    $ .ajax ({
        url :"https://api.adviceslip.com/advice?method=getAdvice",
        method : "GET",
        dataType : "json",
        
        success : function (request){
            getRandomID = request.slip.id;//Getting ID from the URL
            getRandomAdvice = request.slip.advice;//requesting the advice from the url.

            $('#advice-id').html(getRandomID);
            $('#advice-text').html('"'+ getRandomAdvice +'"');
        },
        
        error: function(xhr, status, error){
            $('#advice-id').html("ID not valid");
            $('#advice-text').html("text not valid");
        }
    }, 1000);
    });
    
}


