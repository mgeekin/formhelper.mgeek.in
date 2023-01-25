
var demoStyle = `


#spacegame{
    opacity:.4;
}


h1,h2,h3,h4{
    margin-block:1em;
}






.tdl {
    text-transform: capitalize;
}

thead {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 900;
}

#resetAll {
    margin-top: 40px;
    font-size: 1rem;
    padding: 10px;
    margin: 40px auto;
    width: 400px;
    margin-bottom: 20%;
}

.input{
color:black}
`


var formfields = [
    {
        "heading": "Basic",
        "data": ['First name', 'Middle name', "Last name", 'Full name']
    },
    {
        "heading": "Contact",
        "data": ['Country code', 'Mobile', 'Email', "Address"]
    },
    {
        "heading": "Education",
        "data": ['degee', 'college', 'year']
    },
    {
        "heading": "Publication 1",
        "data": ['Title', 'Journal', "Authors", "Year", "pages"]
    },
    {
        "heading": "Publication 2",
        "data": ['Title', 'Journal', "Authors", "Year", "pages"]
    },

    {
        "heading": "Publication 3",
        "data": ['Title', 'Journal', "Authors", "Year", "pages"]
    }
];
append(main, gen("div", `sec`, "", 'section container'));
append(sec, gen("h1", ``, "Demo Form to test working of software", ''));
append(sec, gen("p", ``, "The data is not saved.", ''));

for (var i = 0; i < formfields.length; i++) {
    var heading = formfields[i].heading;
    var datafield = formfields[i].data;
    console.log(datafield)

    append(sec, gen("div", `div${heading}`));

    // document.getElementById(`div${heading}`).append(gen("h3", `heading${i}`, `${heading}`));
    document.getElementById(`div${heading}`).append(gen("table", `table${i}`));
    document.getElementById(`table${i}`).append(gen("thead", `thead${i}`));
    document.getElementById(`thead${i}`).append(gen("h3", `heading${i}`, `${heading}`));
    document.getElementById(`table${i}`).append(gen("tbody", `tbody${i}`));
    for (var j = 0; j < datafield.length; j++) {
        var dataentry = datafield[j];
        console.log(dataentry);
        var row = gen("tr", `formrow${i}${j}`, "", "row");
        var ltext = gen("td", `formltd${i}${j}`, dataentry, "tdl");
        var rinput = gen("td", `formrtd${i}${j} `, gen("input", `datafield[j]`, "", "input"));
        //document.getElementById(`$forminput${i} `).value = `$forminput${i} `;
        document.getElementById(`tbody${i}`).append(row);
        row.append(ltext, rinput);
    }
    //document.getElementById(`lia${ i } `).href = "/";
};


sec.append(gen("div", "resetAll", "Reset All", "button"));
resetAll.addEventListener("click", cleaninput);

function cleaninput() {
    var a = document.querySelectorAll("input");
    for (i = 0; i < a.length; i++) {
        console.log(a[i].value);
        a[i].value = "";
    }
}


//addButton("TEMP", main);

function addButton(text, target) {
    var button = document.createElement("div");
    button.classList.add("typebutton");
    button.innerText = text;
    button.onclick = function () {
        console.log(this.innerText);
        eel.typeit(this.innerText, 0);
    };
    target.append(button);

}

loadscss(demoStyle)
