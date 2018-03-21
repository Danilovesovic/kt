var text = `<div class="row">
         <div class="col-lg-8 col-lg-offset-1">
                
        <div class="col-lg-3">
            <button class="btn btn-danger form-control">00:00</button>
        </div>
    </div>`;

// select elements
var startBtn = $('#startBtn');
var info = $('.info');
var userArea = $('#userArea');
var clock = $('#clock');

var rg = new RegExp(/\n/g);
var mainText = text.replace(rg, " ");

var textArray = mainText.trim().split("");
var textCopy = textArray.filter(function(e) {
    return e !== " ";
})


$('pre').text(text);

// add listeners
userArea.on('keydown', userTabed);
startBtn.on('click', startGame);

function userTabed(e) {

    console.log(e.keyCode);
    if (e.keyCode == 13) {
        var userTyping = $(this).val();
        var userText = userTyping.replace(rg, " ");
        var userArray = userText.trim().split("");
        var userTextCopy = userArray.filter(function(e) {
            return e !== " ";
        });
        console.log(textCopy.toString() === userTextCopy.toString());
    } else if (e.keyCode == 9) {
        e.preventDefault();
        $(this).val($(this).val() + "    ");
    }
}

function startGame() {
    this.className = "btn btn-success form-control";
    $(this).html("i am done !");
    info.show();
    startTheClock();
}

function startTheClock() {
    var s = 0;
    var m = 0;
    var loop = setInterval(function() {
        s++;
        // make a clock
    }, 1000)
}