document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.join-btn');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.open('https://discord.gg/ADDjDxgFvx', '_blank');
        });
    });
});
