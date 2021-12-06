function doFirst() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext('2d');
    let tran = Math.PI / 180
    context.beginPath();

    context.translate(500, 400);

    context.moveTo(100, 0);
    let range = document.getElementsByTagName('input')[0];
    let deg_range = document.getElementsByTagName('input')[1];
    let num = document.getElementsByTagName('input')[2];
    let big_range = 400;
    let degree = 0;
    let num_num = 8;
    range.addEventListener('input', function () {
        big_range = parseInt(range.value);

        draw();
    })
    deg_range.addEventListener('input', function () {
        degree = parseInt(deg_range.value);

        draw();
    })
    num.addEventListener('input', function () {
        num_num = parseInt(num.value);

        draw();
    })
    function draw() {
        context.beginPath();

        context.clearRect(-500, -400, canvas.width, canvas.height);
        for (let i = 0; i <= num_num; i++) {
            context.lineTo(100 * Math.cos(((360/num_num) * i+ degree) * tran), 100 * Math.sin(((360/num_num) * i + degree) * tran));
            context.lineTo(big_range * Math.cos((((360/num_num) * i+ degree) + (180/num_num)) * tran), big_range * Math.sin((((360/num_num) * i+ degree) + (180/num_num)) * tran));
            context.strokeStyle = 'black';
            context.stroke();
        }
    }
    draw();

}
window.addEventListener("load", doFirst)