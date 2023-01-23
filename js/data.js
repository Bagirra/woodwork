function getYear() {
    var d = new Date();
    var dd = d.getFullYear();
    document.getElementById('an').innerHTML = dd;
}