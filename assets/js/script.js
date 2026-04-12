document.getElementById('calculate').addEventListener('click', function(){

    console.log("clicou!");

    const value = parseFloat(document.getElementById('value').value);
    const fee = parseFloat(document.getElementById('fee').value) / 100;
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(value) || isNaN(fee) || isNaN(time)) {
        alert("Preencha todos os campos!");
        return;
    }

    const total = value * (1 + fee) ** time;

    document.getElementById('total').innerHTML = "R$ " + total.toFixed(2);

});