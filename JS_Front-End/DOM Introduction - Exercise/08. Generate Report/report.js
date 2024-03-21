function generateReport() {
    let checkBoxes = document.querySelectorAll('input')

    let checked = [];

    for (let i = 0; i < checkBoxes.length; i++) {
        const element = checkBoxes[i];
        if (element.checked) {
            checked.push(i);
        }
    }
    let rows = document.getElementsByTagName('tr');
    let rowsArr = Array.from(rows);
    rowsArr.shift(); //headers

    let result = [];

    for (let row of rowsArr) {
        let info = {};
        for (let i of checked) {
            let name = checkBoxes[i].name;
            let rowInfo = row.children[i].textContent;
            info[name] = rowInfo;
        }
        result.push(info)
    }
    report = JSON.stringify(result);

    let outputElement = document.getElementById('output');
    outputElement.textContent = report;

}