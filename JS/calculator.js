
var answ=document.getElementById("Answer");


function EnterNumber(val)
{
    answ.value+=val;
    return answ;

}

function EnterOperator(val)
{
    answ.value+=val;
    return answ;
}

function EnterClear()
{
    if(answ !="")
    {
        answ.value="";
    }
}

function EnterEqual()
{  
    var operatorPlus=(answ.value).indexOf("+");
    var operatorMinus=(answ.value).indexOf("-");
    var operatorTimes=(answ.value).indexOf("*");
    var operatorDivided=(answ.value).indexOf("/");

    if((answ.value).includes('+'))
    { 
        var num1=(answ.value).substring(0,operatorPlus);
        var num2=(answ.value).substring(operatorPlus+1);
        answ.value=parseFloat(num1)+parseFloat(num2);
    }
    if((answ.value).includes('-'))
    {
        var num1=(answ.value).substring(0,operatorMinus);
        var num2=(answ.value).substring(operatorMinus+1);
        answ.value=parseFloat(num1)-parseFloat(num2);
    }
    if((answ.value).includes('*'))
    {
        var num1=(answ.value).substring(0,operatorTimes);
        var num2=(answ.value).substring(operatorTimes+1);
        answ.value=parseFloat(num1)*parseFloat(num2);
    }
    if((answ.value).includes('/'))
    {
        var num1=(answ.value).substring(0,operatorDivided);
        var num2=(answ.value).substring(operatorDivided+1);
        answ.value=parseFloat(num1)/parseFloat(num2);
    }
}
