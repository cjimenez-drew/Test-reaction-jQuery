$(document).ready(function() {


    function getRandomColor() {
        var start = new Date().getTime();
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color
    }

    function makeShapeAppear() {
        var top = Math.random() * 600; //top random
        var left = Math.random() * 1200; //left random
        var width = (Math.random() * 100) + 100;

        if (Math.random() > 0.5) {
            $('#shape').css('borderRadius', '50%');
        } else {
            $('#shape').css('borderRadius', '0%');
        }

        $('#shape').css('background', getRandomColor());
	    document.getElementById('shape').style.background = getRandomColor();
		document.getElementById('shape').style.width = width + 'px';
        document.getElementById('shape').style.top = top + 'px'; //random pozicija top
        document.getElementById('shape').style.left = left + 'px'; //random pozicija left
        document.getElementById('shape').style.display = 'block';
        start = new Date().getTime();
    }

    function appearAfterDelay() {
        
        setTimeout(makeShapeAppear, Math.random() * 100);
    }
    appearAfterDelay();

    $('#shape').on('click', function() {
        $('#shape').css('display', 'none');
        var end = new Date().getTime();
        var timeScore = (end - start) / 1000;
        $('#timeScore').html(timeScore + 's');
        appearAfterDelay();
    })
});