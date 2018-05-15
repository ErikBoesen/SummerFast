addEventListener('keydown', function(e) {
    console.log('SummerFast: creating keylistener for keyboard control');
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
});
