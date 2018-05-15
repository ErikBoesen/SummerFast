console.log('Trying keyboard control at ' + location.href);
console.log(document.getElementById('previous'));
console.log(document.getElementById('next'));
console.log('SummerFast: creating keylistener for keyboard control');
document.getElementById('next'))
addEventListener('keydown', function(e) {
    var act = document.activeElement;
    if (
        !(act.tagName === 'input' && act.type === 'text')
    ) {
        switch (e.which) {
            case 37: // Left arrow key
                document.getElementById('previous').click();
                break;
            case 39: // Right arrow key
                document.getElementById('next').click();
                break;
        }
    }
});
