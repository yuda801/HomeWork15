$(() => {

    $("#copy-first-name").click(() => {
        let inputFirstName = $("#first-name-input").val()
        $("#first-name-output").append(inputFirstName)
        $("#first-name-input").val('')
    });

    $("#copy-last-name").click(() => {
        let inputLastName = $("#last-name-input").val()
        $("#last-name-output").append(inputLastName)
        $("#last-name-input").val('')
    });



    // ex2
    $("#fill-range").click(() => {
        let min = $("#first-number-input").val()
        let max = $("#last-number-input").val()

        for (let i = min; i <= max; i++) {
            $("#nubers-in-range").append("<option>" + i + "</option>")
        }
    })


    // ex3
    $(".color-and-show-numbers").click(function() {
        $(".box").each(function() {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            $(this).css("background-color", "#" + randomColor);
        });
    });



})

// const setBg = () => {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
// }

// genNew.addEventListener("click", setBg);
// setBg();