/*
function placeholder() 
{
    var canvas = document.getElementById('body');
    if (canvas.getContext) 
    {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle   = 'black';
        ctx.strokeStyle = '#f00'; 
    }
}

*/
function endermanBody() 
{
    var canvas = document.getElementById('body');
    if (canvas.getContext) 
    {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle   = 'black';
        ctx.strokeStyle = '#f00';
        //long middle
        ctx.fillRect(500, 500, 175, 225)
        ctx.moveTo(580, 675)
        ctx.lineTo(580, 580)
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#1b1b1b"
        ctx.stroke();
        //lower middle
        ctx.moveTo(525, 650)
        ctx.lineTo(525, 700)
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#1b1b1b"
        ctx.stroke();
        //long middle right
        ctx.moveTo(645, 600)
        ctx.lineTo(645, 700)
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#1b1b1b"
        ctx.stroke();
        //middle horizontal
        ctx.moveTo(530, 600)
        ctx.lineTo(560, 600)
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#1b1b1b"
        ctx.stroke();
    }
}

function endermanArms()
{
    var canvas = document.getElementById('body');
    if (canvas.getContext) 
    {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle   = 'black';
        ctx.strokeStyle = '#f00'; 
        // left arm
        ctx.fillRect(475, 500, 25, 400)
        ctx.moveTo(480, 550)
        ctx.lineTo(480, 650)
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#1b1b1b"
        ctx.stroke();
        //details
        ctx.moveTo(490, 775)
        ctx.lineTo(490, 700)
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#1b1b1b"
        ctx.stroke();

        //right arm
        ctx.fillRect(675, 500, 25, 400)
        //details
        ctx.moveTo(690, 700)
        ctx.lineTo(690, 650)
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#1b1b1b"
        ctx.stroke();
    }
}

function endermanLegs() 
{
    var canvas = document.getElementById('body');
    if (canvas.getContext) 
    {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle   = 'black';
        ctx.strokeStyle = '#f00'; 

        //left leg
        ctx.fillRect(525, 725, 25, 320)
        ctx.moveTo(540, 800)
        ctx.lineTo(540, 950)
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#1b1b1b"
        ctx.stroke();

        //right leg
        ctx.fillRect(625, 725, 25, 320)
        ctx.moveTo(635, 750)
        ctx.lineTo(635, 835)
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#1b1b1b"
        ctx.stroke();
    }
}
function endermanHead() 
{
    var canvas = document.getElementById('body');
    if (canvas.getContext) 
    {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle   = 'black';
        ctx.strokeStyle = '#f00'; 
        ctx.fillRect(512, 380, 155, 120)
        //details
        ctx.moveTo(595, 400)
        ctx.lineTo(635, 400)
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#1b1b1b"
        ctx.stroke();
    }
}

function endermanEyes() 
{
    var canvas = document.getElementById('body');
    if (canvas.getContext) 
    {
        var ctx = canvas.getContext('2d');
        //left eye
        ctx.fillStyle   = '#fe9bd0';
        ctx.strokeStyle = '#f00'; 
        ctx.fillRect(512, 440, 60, 20)
        //pupil
        ctx.fillStyle   = 'magenta';
        ctx.strokeStyle = '#f00'; 
        ctx.fillRect(532, 440, 20, 20)

        //right eye
        ctx.fillStyle   = '#fe9bd0';
        ctx.strokeStyle = '#f00'; 
        ctx.fillRect(607, 440, 60, 20)
        //pupil
        ctx.fillStyle   = 'magenta';
        ctx.strokeStyle = '#f00'; 
        ctx.fillRect(628, 440, 20, 20)
    }
}