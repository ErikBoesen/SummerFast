addEventListener('keydown', function(e) {
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
