// Show income tax upload on yes
function showInput(selectname, classname) {

    var select = document.getElementById(selectname).value;
    var inputs = document.getElementsByClassName(classname);
    if (select == "Yes") {
        for (var i = 0; i < 2; i++) {
            inputs[i].style.display = "block";
        }
    }
    else {
        for (var i = 0; i < 2; i++) {
            inputs[i].style.display = "none";
        }
    }
}

function storeInfo() {
    let name = document.getElementById("name").value;
    let photo = document.getElementById("photo").value;
    let bod = document.getElementById("bod").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zipcode = document.getElementById("zipcode").value;
    let homephone = document.getElementById("homephone").value;
    let mobilephone = document.getElementById("mobilephone").value;
    let email = document.getElementById("email").value;
    let hs = document.getElementById("hs").value;
    let graddate = document.getElementById("graddate").value;
    let jors = document.getElementById("jors").value;
    let classrank = document.getElementById("classrank").value;
    let gpa = document.getElementById("gpa").value;
    let career = document.getElementById("career").value;
    let clubs = document.getElementById("clubs").value;
    let fathername = document.getElementById("fathername").value;
    let fatheroccupation = document.getElementById("fatheroccupation").value;
    let ftax = document.getElementById("ftax").value;
    let upftax = document.getElementById("upftax").value;
    let mothername = document.getElementById("mothername").value;
    let motheroccupation = document.getElementById("motheroccupation").value;
    let mtax = document.getElementById("mtax").value;
    let upmtax = document.getElementById("upmtax").value;
    let guardian = document.getElementById("guardian").value;
    let guardianoccupation = document.getElementById("guardianoccupation").value;
    let gtax = document.getElementById("gtax").value;
    let upgtax = document.getElementById("upgtax").value;
    let family = document.getElementById("family").value;
    let home = document.getElementById("home").value;
    let essay = document.getElementById("essay").value;
    let transcript = document.getElementById("transcript").value;
    let recommendation = document.getElementById("recommendation").value;
    let covid = document.getElementById("covid").value;
    let sign = document.getElementById("sign").value;

    // If statements for possible missing tax form
    // No father tax form
    if(upftax === null) {
        upftax = "N/A";
    }

    // No mother tax form
    if(upmtax === null) {
        upmtax = "N/A"
    }

    // No guardian tax form
    if(upgtax === null) {
        upgtax = "N/A"
    }

    // Object tied to person's name containing all their form info
    const form = {
        name: name,
        photo: photo,
        bod: bod,
        address: address,
        city: city,
        state: state,
        zipcode: zipcode,
        homephone: homephone,
        mobilephone: mobilephone,
        email: email,
        hs: hs,
        graddate: graddate,
        jors: jors,
        classrank: classrank,
        gpa: gpa,
        career: career,
        clubs: clubs,
        fathername: fathername,
        fatheroccupation: fatheroccupation,
        ftax: ftax,
        upftax: upftax,
        mothername: mothername,
        motheroccupation: motheroccupation,
        mtax: mtax,
        upmtax: upmtax,
        guardian: guardian,
        guardianoccupation: guardianoccupation,
        gtax: gtax,
        upgtax: upgtax,
        family: family,
        home: home,
        essay: essay,
        transcript: transcript,
        recommendation: recommendation,
        covid: covid,
        sign: sign,

    }
    
    // Set entire form as value tied to the name which is the key.
    localStorage.setItem(form.name, JSON.stringify(form));
}

// Submit button functionality
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", (e) => {
    // Prevent page refresh
    e.preventDefault();
    storeInfo();
});

// function showModal() {

// }