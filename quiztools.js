/*addEventListener('keydown', function(e) {
    var act = document.activeElement;
    if (
        !(act.tagName === 'input' && act.type === 'text')
    ) {
        switch (e.which) {
            case 80: // P
                document.getElementById('previous').click();
                break;
            case 78: // N
                goNextLesson();
                window.location='../common/next.html';
                break;
        }
    }
});*/

var done_button = document.getElementById('done');
if (done_button != null) {
    console.log('SummerFast: running at ' + location.href);
    unlock_button = document.createElement('button');
    unlock_button.type = 'button';
    unlock_button.id = 'unlock_button'
    unlock_button.textContent = 'Unlock';
    unlock_button.addEventListener('click', function() {
        for (e of document.querySelectorAll('[disabled]')) e.disabled = false;
    });
    done_button.parentElement.appendChild(unlock_button);
    console.log('SummerFast: Appended unlock button');
} else {
    console.log('SummerFast: No done button detected');
}
