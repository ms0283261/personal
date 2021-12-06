function doFirst() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext('2d');
    let tran = Math.PI / 180
    context.beginPath();

    context.translate(500, 400);

    context.moveTo(100, 0);
    let range = document.getElementsByTagName('input');

    let big_range = 400;
    let degree = 0;
    let num_num = 8;
    let r = 0
    let g = 0
    let b = 0
    let a = 100
    range[0].addEventListener('input', function () {
        big_range = parseInt(range[0].value);

        draw();
    })
    range[1].addEventListener('input', function () {
        degree = parseInt(range[1].value);

        draw();
    })
    range[2].addEventListener('input', function () {
        num_num = parseInt(range[2].value);

        draw();
    })
    range[3].addEventListener('input', function () {
        r = parseInt(range[3].value);

        draw();
    })
    range[4].addEventListener('input', function () {
        g = parseInt(range[4].value);

        draw();
    })
    range[5].addEventListener('input', function () {
        b = parseInt(range[5].value);

        draw();
    })
    range[6].addEventListener('input', function () {
        a = parseInt(range[6].value);
        console.log(a)
        draw();
    })

    function draw() {
        context.beginPath();

        context.clearRect(-500, -400, canvas.width, canvas.height);
        for (let i = 0; i <= num_num-1; i++) {
            context.lineTo(100 * Math.cos(((360/num_num) * i+ degree) * tran), 100 * Math.sin(((360/num_num) * i + degree) * tran));
            context.lineTo(big_range * Math.cos((((360/num_num) * i+ degree) + (180/num_num)) * tran), big_range * Math.sin((((360/num_num) * i+ degree) + (180/num_num)) * tran));
 
        }
        context.closePath();
        
        context.strokeStyle = 'rgba('+ r +','+ g +','+ b +','+ (a/100) +')';
        context.stroke();
    }
    draw();

}
window.addEventListener("load", doFirst)