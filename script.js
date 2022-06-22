function show() {
    let count = 0;
    let fio = document.getElementById("fio").value;
    let group = document.getElementById("group").value;
    // radio
    if (document.getElementById(1.2).checked) count++;
    // checkbox
    if (!document.getElementById(2.1).checked &&
        document.getElementById(2.2).checked &&
        !document.getElementById(2.3).checked &&
        document.getElementById(2.4).checked) 
        count++;
    // select
    if (document.getElementById(3.1).options[1].selected &&
        document.getElementById(3.2).options[0].selected) count++;
    if (document.getElementById(4.3).checked) count++;
    if (document.getElementById(5.2).checked) count++;
    if (document.getElementById(6.1).checked) count++;
    if (document.getElementById(7.3).checked) count++;
    rightAnswers.innerText = fio + " " + group + " Количество правильных ответов: "+ count;
}