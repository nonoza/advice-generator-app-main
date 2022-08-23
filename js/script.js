let getRandomID = '';
let getRandomAdvice = '';
let getadvicebtn = document.getElementById('advice-btn');

getadvicebtn.addEventListener("click",getAdvicegenerator);

function getAdvicegenerator(){
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
    });
}

