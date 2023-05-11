//get the applicable input fields according to the device type selected
function formFilter() {
    var selected = document.getElementById("selection").value;

    //reset all input fields
    reset();

    //switch statement to determine which fields to display according to the type of device selected. 
    switch (selected) {
        case "choosedevice":
            document.getElementById("adddevice").style.display = "none";
            break;

        case "microwave":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".temperature").style.display = "flex";
            document.querySelector(".onoff").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.querySelector(".timer").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "kettle":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".onoff").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.querySelector(".timer").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "heating":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".onoff").style.display = "flex";
            document.querySelector(".temperature").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.querySelector(".timer").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "aircon":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".onoff").style.display = "flex";
            document.querySelector(".temperature").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.querySelector(".timer").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "vacuumbot":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".onoff").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.querySelector(".timer").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "securityalarm":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".onoff").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "audioplayer":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".onoff").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.querySelector(".volume").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "curtains":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".openclose").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "autogate":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".openclose").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "smokedetector":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".onoff").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "cctv":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".onoff").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "lighting":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".onoff").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.querySelector(".timer").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "tv":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".onoff").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.querySelector(".volume").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "securitylock":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".onoff").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "gardensprinkler":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".onoff").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.querySelector(".timer").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "fridge":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".onoff").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "hob":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".onoff").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.querySelector(".timer").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "garageopener":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".openclose").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "fan":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".onoff").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.querySelector(".timer").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;

        case "aromatherapy":
            document.querySelector(".namedevice").style.display = "flex";
            document.querySelector(".onoff").style.display = "flex";
            document.querySelector(".wifi").style.display = "flex";
            document.querySelector(".timer").style.display = "flex";
            document.getElementById("adddevice").style.display = "flex";
            break;
    }

    //automatically input fields that are hidden as "NA"
    inputNA();
}

//reset all input fields
function reset() {
    document.getElementsByName("namedevice")[0].value = "";
    document.getElementsByName("temperature")[0].value = "";
    document.getElementsByName("onoff")[0].selectedIndex = "0";
    document.getElementsByName("openclose")[0].selectedIndex = "0";
    document.getElementsByName("wifi")[0].selectedIndex = "0";
    document.getElementsByName("timer")[0].value = "";
    document.getElementsByName("volume")[0].value = "";

    var formContent = [];
    formContent = document.querySelectorAll("#form > div");

    for (var i = 0; i < formContent.length; i++) {
        document.querySelector(`.${formContent[i].className}`).style.display = "none";
    }
}

//automatically input NA for fields that have been hidden
function inputNA() {
    var formContent = [];
    formContent = document.querySelectorAll("#form > div");

    for (var i = 0; i < formContent.length; i++) {
        if (document.querySelector(`.${formContent[i].className}`).style.display == "none") {
            document.getElementsByName(formContent[i].className)[0].value = "NA";
        }
    }

}