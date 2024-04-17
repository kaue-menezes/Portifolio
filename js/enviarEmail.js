document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("SCfX38trULgvKxP4y");

    var myForm = document.getElementById('my-form');
    
    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        
     emailjs.sendForm('service_f9d866n', 'template_d2a6lav', this)
            .then(function() {
                alert('Mensagem enviada com sucesso!');
                myForm.reset(); 
            }, function(error) {
                alert('Erro ao enviar a mensagem: ', error);
            });
    });
});
