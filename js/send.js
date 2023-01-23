emailjs.init("Rs0PjhQv-DVO180ut");
function send() {
    var date={
        nume: document.getElementById("nume").value,
        prenume: document.getElementById("prenume").value,
        email: document.getElementById("email").value,
        tema: document.getElementById("tema").value,
        mesaj: document.getElementById("mesaj").value
    };
    emailjs.send("service_oj9s0f3", "template_4sfcu05", date)
    .then(function(raspuns) {
        alert("Заявка отправлена")
        decodeURIComponent.getElementById('formular').reset();    
    },
    function (eror){
        alert("ошибка при отправке")
    })
        
}    