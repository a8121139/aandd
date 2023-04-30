function show(array) {
    var html = '';
    html = html + '<table border="1">';
    html = html + '<tr>';
    for (var i = 0; i < array.length; i++) {
        html = html + '<td>' + array[i] + '</td>';
    }
    html = html + '</tr>';
    html = html + '</table>';
    //document.getElementById('res').innerHTML = html;
    document.getElementById('res').insertAdjacentHTML('beforeend', html);
}

function createSequentialNumbers(numbers, n){
    for (let i=1; i<=n; i++) {
        numbers.push(i);
    }
    return numbers;
}

function createRandomNumbers(numbers, n){
    for (let i=1; i<=n; i++) {
        var x = Math.floor(Math.random() * 100) + 1;
        numbers.push(x);
    }
    return numbers;
}