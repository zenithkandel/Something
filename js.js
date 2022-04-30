let input = document.querySelector("input");
let btn = document.querySelector("button")
let p = document.querySelector("p");
btn.onclick = function(){
    let inpstr = input.value;
    let palindrome
    if (inpstr.split("").reverse().join("") === inpstr) {
        palindrome = "is"
    }
    else{
        palindrome = "is not"
    }
    // p.innerHTML = input.value.length
    p.innerHTML = `The Last Character Is &nbsp;<b>${inpstr.slice(inpstr.length-1)}</b><br>The Reversed String is <b>${inpstr.split("").reverse().join("")}</b><br>There are <b>${inpstr.length}</b> Characters in the word/string<br>The Word <b>${palindrome}</b> a palindrome<br><button onclick="pronounce()">Pronounce</button><button onclick="pronouncere()">Pronounce Reversed</button>`;
}
function pronounce(e){
    if (e === ""|| e === null || e === undefined) {
        e = input.value;
    }
    else{}
    var msg = new SpeechSynthesisUtterance();
    msg.text = e;
    window.speechSynthesis.speak(msg);
}


function pronouncere(){
    var msg = new SpeechSynthesisUtterance();
    msg.text = input.value.split("").reverse().join("");
    window.speechSynthesis.speak(msg);
}