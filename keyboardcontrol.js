console.log('Trying keyboard control at ' + location.href);
var button_previous = document.getElementById('previous')),
    button_next     = document.getElementById('next');
addEventListener('keydown', function(e) {
    var act = document.activeElement;
    if (
        !(act.tagName === 'input' && act.type === 'text')
    ) {
        switch (e.which) {
            case 219: // Left bracket
                button_previous.click();
                break;
            case 221: // Right bracket
                button_next.click();
                break;
        }
    }
});
