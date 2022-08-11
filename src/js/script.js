const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.tool__rang-number'),
    lines = document.querySelectorAll('.tool__rang-subline');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
new WOW().init();

/* $(document).ready(function(){
    $('form').submit(function(){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('form').trigger('reset');
        });
    });
}); */

/* (function($) { */

/*     function validateForms(form){
        $(form).validate({
        rules:{
            name:{ 
            required:true,
            minlength: 2
            },
            phone: "required",
            email: {
            required:true,
            email:true
            }
        },
        messages: {
            name: {
        required: "Пожалуйста введите имя",
        minlength: jQuery.validator.format("Введите {0} минимум символов")
            },
            phone: "Пожалуйста введите телефон",
            email:{
            required:"Пожалуйста введите email",
            email: "Неправильно введена почта"
            }
        }
        });
    };

    validateForms("form")

    $('input[name=email]').mask("+38(999)999-99-99"); */
/* })(jQuery); */

$(document).ready(function(){
    $('#myform').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            
            $('form').trigger('reset');
        });
        return false;
    });
});