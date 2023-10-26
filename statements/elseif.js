let x=50;
if(x<=33)
{
    console.log("failed");
}
else if ((x>33)&&(x<40))
{
    console.log("dgrade");
}
else if((x>41)&&(x<=50))
{
    console.log("cgrade");
}
else if((x>51)&&(x<=60))
{
    console.log("bgrade");
}
else if ((x>70)&&(x<=80))
{
    console.log("agrade");
}
else if((x>80)&&(x<100))
{
    console.log("a+grade");
}
else if(x==100)
{
    console.log("golden");
}

else{
    console.log("incorrect input");
}