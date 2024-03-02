function textRemaining(textarea){
    const text_span = document.getElementById("text-remaining");

    console.log(textarea.value.length)

    let num_of_symbols = textarea.value.length;
    text_span.innerHTML = "" + num_of_symbols + "/" + textarea.maxLength;
};


const form_text_area = document.getElementById("text-area");
form_text_area.addEventListener("keyup", () => textRemaining(form_text_area));

function validate(event){
    alert("Test")
    console.log("Test");
}