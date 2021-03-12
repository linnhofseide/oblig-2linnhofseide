
var filmerValue;
var antallValue;
var fornavnValue;
var etternavnValue;
var tlfValue;
var epostValue;
var tickets = [];

function fetchValues() {
    filmerValue = document.getElementById("filmer").value;
    antallValue = document.getElementById("antall").value;
    fornavnValue = document.getElementById("fornavn").value;
    etternavnValue = document.getElementById("etternavn").value;
    tlfValue = document.getElementById("tlf").value;
    epostValue = document.getElementById("epost").value;
}

function createNewTicket() {
    tickets.push([filmerValue, antallValue, fornavnValue, etternavnValue, tlfValue, epostValue]);
}

function ticketSale() {
    fetchValues();
    if (validate()) {
        createNewTicket();
        resetValues();
    }
    updateView();
}


function deleteTickets() {
    tickets = [];
    updateView();
}

function resetValues() {
    document.getElementById("filmer").value = "0";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("tlf").value = "";
    document.getElementById("epost").value = "";
}

function updateView() {
    document.getElementById("soldTickets").innerHTML = "";
    var ticketTable = "<table class='table table-bordered'>";
    for (var ticket of tickets) {
        ticketTable += "<tr>";
        ticketTable += "<td>" + ticket[0] + "</td><td>" + ticket[1] + "</td><td>" + ticket[2] + "</td><td>" + ticket[3] + "</td><td>" + ticket[4] + "</td><td>" + ticket[5] + "</td>"
        ticketTable += "</tr>"
    }

    ticketTable += "</table>"
    document.getElementById("soldTickets").innerHTML = ticketTable;

    $.post("/kinobillett", Leggtil(tickets));

}

function displayWarningTexts() {
    if (filmerValue == "0") {
        document.getElementById("warningTextFilmer").textContent = "Må velge film";
    } else {
        document.getElementById("warningTextFilmer").textContent = "";
    }
    if (antallValue.trim() == "") {
        document.getElementById("warningTextAntall").textContent = "Må skrive noe inn i antall";
    } else {
        document.getElementById("warningTextAntall").textContent = "";
    }
    if (fornavnValue.trim() == "") {
        document.getElementById("warningTextFornavn").textContent = "Må skrive noe inn i fornavn";
    } else {
        document.getElementById("warningTextFornavn").textContent = "";
    }
    if (etternavnValue.trim() == "") {
        document.getElementById("warningTextEtternavn").textContent = "Må skrive noe inn i etternavn";
    } else {
        document.getElementById("warningTextEtternavn").textContent = "";
    }
    if (tlfValue.trim() == "") {
        document.getElementById("warningTextEtterTlf").textContent = "Må skrive inn telefonnr";
    } else {
        document.getElementById("warningTextEtterTlf").textContent = "";
    }
    if (epostValue.trim() == "") {
        document.getElementById("warningTextEtterEpost").textContent = "Må skrive noe inn i epost";
    } else {
        document.getElementById("warningTextEtterEpost").textContent = "";
    }
}

function validate() {
    displayWarningTexts();
    if (filmerValue != "0" && antallValue.trim() != "" && fornavnValue.trim() != "" && etternavnValue.trim() != "" && tlfValue.trim() != "" && epostValue.trim() != "") {
        return true;
    }
    return false;
}
