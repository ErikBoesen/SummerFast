console.log('Trying keyboard control at ' + location.href);
console.log(document.getElementById('previous'));
console.log(document.getElementById('next'));
console.log('SummerFast: creating keylistener for keyboard control');
addEventListener('keydown', function(e) {
    var act = document.activeElement;
    if (
        !(act.tagName === 'input' && act.type === 'text')
    ) {
        switch (e.which) {
            case 219: // Left bracket
                document.getElementById('previous').click();
                break;
            case 221: // Right bracket
                document.getElementById('next').click();
                break;
        }
    }
});
