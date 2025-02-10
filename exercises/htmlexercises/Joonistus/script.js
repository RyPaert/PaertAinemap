function draw()
{
    var canvas = document.getElementById('louend');
    if (canvas.getContext) 
    {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle   = '#00f';
        ctx.strokeStyle = '#f00';
             
        ctx.strokeRect(30,  60, 150, 50);
        ctx.fillRect(10,  15, 150, 75);
        ctx.clearRect(45,  45, 15, 75);
    }
}
function line() 
{
    var canvas = document.getElementById('line');
    if (canvas.getContext) 
    {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle   = '#00f';
        ctx.strokeStyle = '#f00';
             
        ctx.moveTo(10,10);
        ctx.lineTo(100,100); 
        ctx.lineTo(100,150); 
        ctx.lineTo(120,150);
        ctx.lineTo(140,10); 
        ctx.lineWidth = 2;
        ctx.strokeStyle = "blue";
        ctx.stroke();
    }
}
function roundcap()
{
    var canvas = document.getElementById('round');
    if (canvas.getContext) 
    {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle   = '#00f';
        ctx.strokeStyle = '#f00';
        ctx.lineCap = "round";

        ctx.moveTo(10, 10);
        ctx.lineTo(10,100)
        ctx.lineWidth = 2;
        ctx.strokeStyle = "blue";
        ctx.stroke();
        ctx.lineJoin = "miter";
    }
}

function circle() 
{
    var canvas = document.getElementById('ring');
    if (canvas.getContext) 
    {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle   = '#00f';
        ctx.strokeStyle = '#f00';

        ctx.beginPath();
        ctx.arc(70,70,50,Math.PI*2,0,true);
        ctx.closePath();
        ctx.fillStyle="red";
        ctx.fill();
    }
}

function triangle() 
{
    var canvas = document.getElementById('tri');
    if (canvas.getContext) 
    {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle   = '#00f';
        ctx.strokeStyle = '#f00';

        ctx.beginPath();
        ctx.moveTo(10,10);
        ctx.lineTo(100,10);
        ctx.lineTo(10,100);
        ctx.lineTo(10,10);
        ctx.closePath();
        ctx.fillStyle="red";
        ctx.fill();
    }
}

function addtext() 
{
    var canvas = document.getElementById('text');
    if (canvas.getContext) 
    {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle   = '#00f';
        ctx.strokeStyle = '#f00';
        
        ctx.fillStyle = 'red'; //teksti värv
        ctx.font = 'bold 20px sans-serif'; //fondi määramine
        ctx.textBaseline = 'top'; //määrab põhijoone asukoha
        ctx.fillText('Hello canvas!',10,20); //tekst ja selle algukordinaadid
    }
}