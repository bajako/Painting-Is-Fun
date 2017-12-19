document.addEventListener( 'DOMContentLoaded', function () {


    //I'm using randomColor//
    function random() {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        this.style.backgroundColor = randomColor;
    }


    //Apperance of randomColor//
    function paint() {
        console.log('Apperance of randomColor');
        document.querySelectorAll('.box').forEach(function (d) {
        d.addEventListener('mousemove', random);
        });
    }


    //randomColor disappears//
    function paintStop() {
        console.log('randomColor disapears');

        document.querySelectorAll('.box').forEach(function (d) {
        d.removeEventListener('mousemove', random);
        });
    }


    //When mousedown randomColor appears//
    document.querySelectorAll('.box').forEach(function (d) {
        d.addEventListener('mousedown', paint);
    });


    //When mouseup randomColor disappears//
    document.querySelectorAll('.box').forEach(function (d) {
        d.addEventListener('mouseup', paintStop);
    });
});
