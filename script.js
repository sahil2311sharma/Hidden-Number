'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.guess').value=28);
console.log(document.querySelector('.guess').value);
for(var i=0;i<30;i++)
{
    document.querySelector('.message').textContent=i;
    if(document.querySelector('.message').textContent==='20')
    {
        document.querySelector('.message').textContent='Correct';
        //console.log(document.querySelector('.message').textContent='Correct');
        break;
    }
    else
    {
        document.querySelector('.message').textContent='Wrong guess';
        //console.log(document.querySelector('.message').textContent='Wrong guess');
    }
}
*/
let secretNum=Math.trunc(Math.random()*20)+1;
//document.querySelector('.number').textContent=secretNum;

var final=-1;
document.querySelector('.check').addEventListener('click',function()
{
    const guess=Number (document.querySelector('.guess').value);
    if(!guess)
    {
        document.querySelector('.message').textContent='Not Selected';
    }
    else if(guess===secretNum)
    {
        var score=Number(document.querySelector('.score').textContent);
        var prev_score=Number(document.querySelector('.highscore').textContent);
        final=score;
        if(guess>prev_score)
        {
            
            document.querySelector('.highscore').textContent=score;
        }
        document.querySelector('.message').textContent='You won';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').textContent=secretNum;
    }
    else{
        if(final!==-1)
        {
            document.querySelector('.highscore').textContent=final;
        }
        else
        {
            if(guess>secretNum)
            {
                document.querySelector('.message').textContent='Too High';
            }
            else if(guess<secretNum)
            {
                document.querySelector('.message').textContent='Too low';
            }
            var score=Number(document.querySelector('.score').textContent);
            if(score<1)
            {
                document.querySelector('.message').textContent='Practice Binary Search Tree';
                document.querySelector('.score').textContent='0';
                document.querySelector('body').style.backgroundColor='#ff0000';
                document.querySelector('.headiing_text').textContent='You Lost The Game';
            }
            else{
                score--;
                document.querySelector('.score').textContent=score;
            }
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    var next=0,score = 20;
    final=-1;
    secretNum = Math.trunc(Math.random() * 20) + 1;
    console.log(document.querySelector('.number').textContent=secretNum); 
    
    document.querySelector('.message').textContent='Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor='';

});



