// get and display local storage values
var data = [];
if (localStorage.getItem("info")) {
    var inputs = document.querySelectorAll("div[contenteditable]");
    data = JSON.parse(localStorage.getItem("info"));
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerText = data[i]

    }
    total();

}
// saving inputs to local storoge 
function saveData() {
    var inputs = document.querySelectorAll("div[contenteditable]");

    for (var i = 0; i < inputs.length; i++) {
        data[i] = inputs[i].innerText;
    }
    localStorage.setItem("info", JSON.stringify(data));

}

// calulating the point totals for each value
function total(event) {
    if (event) {
        var currentrow = [...document.querySelectorAll("div[data-value='" + event.target.getAttribute("data-value") + "']")].indexOf(event.target);
        for (var i = 1; i <= 5; i++) {
            var currentcol = [...document.querySelectorAll("div[data-value='" + i + "']")][currentrow];
            var currenttotal = document.querySelector("div[data-total='" + i + "']");
            if (currentcol.innerText) {
                currenttotal.innerText = parseInt(currenttotal.innerText) - parseInt(currentcol.innerText);
            }
            currentcol.innerText = "";
        }

        if (event.target.innerText == "") {
            event.target.innerText = (event.target.getAttribute("data-value"))
        }
        else {
            event.target.innerText = "";
        }
    }


    if (event) {
        var currentadd = document.querySelectorAll("div[data-value='" + event.target.getAttribute("data-value") + "']");

        var sum = 0;
        for (var i = 0; i < 5; i++) {
            if (currentadd[i].innerText) {
                sum += parseInt(currentadd[i].innerText);
            }
        }
        document.querySelector("div[data-total='" + event.target.getAttribute("data-value") + "']").innerText = sum;
    }

    else {
        for (var i = 1; i <= 5; i++) {
            var currentadd = document.querySelectorAll("div[data-value='" + i + "']");
            var sum = 0;
            for (var j = 0; j < 5; j++) {
                if (currentadd[j].innerText) {
                    sum += parseInt(currentadd[j].innerText);
                }
            }
            document.querySelector("div[data-total='" + i + "']").innerText = sum;
        }
    }



    var sumrow = document.querySelectorAll("div[data-total]");
    var sumtotal = 0;
    for (var i = 0; i < 5; i++) {
        if (sumrow[i].innerText) {
            sumtotal += parseInt(sumrow[i].innerText);
        }
    }
    document.getElementById("sumtotal").innerText = sumtotal;
}

// display point value onclick
var rows = []

var points = document.querySelectorAll("#matrix div[contenteditable]");
for (var i = 0; i < points.length; i++) {
    points[i].addEventListener("click", function (event) {
        total(event);
    });
}




