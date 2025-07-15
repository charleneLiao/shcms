// 主頁面側選單

$('ul.navChild').hide();
$('li.navParent').hover(function() {
    if ($(this).find('ul.navChild').length > 0) {
        $(this).find('ul.navChild').stop().slideDown('milliseconds');
    }
}, function() {
    if ($(this).find('ul.navChild').length > 0) {
        $(this).find('ul.navChild').stop().slideUp('milliseconds');
    }
});

// 全選
function toggle(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}
// 頭部右-個人選單
document.querySelector('#profileWrap').addEventListener('click', function() {
    document.querySelector('.panelUsr').classList.toggle('active');
    document.querySelector('#profileWrap').classList.toggle('act');
});

function btnStatus() {
    var x = document.getElementById("panelbtnSatus");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// 隱藏密碼
function ok() {
    let pass = document.getElementById('password');
    let word = pass.getAttribute('type');
    console.log(word);
    if (word == 'password') {
        pass.setAttribute('type', 'text');
    } else {
        pass.setAttribute('type', 'password');
    }
}

// POP-UP
jQuery(document).ready(function($) {
    //open popup
    $('.cd-popup-trigger').on('click', function(event) {
        event.preventDefault();
        $('.cd-popup').addClass('is-visible');
    });

    //close popup
    $('.cd-popup').on('click', function(event) {
        if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function(event) {
        if (event.which == '27') {
            $('.cd-popup').removeClass('is-visible');
        }
    });
});