var num=String(prompt("Enter an index of a number you would like to find starting with 1"));
num=Number(num);

document.write("The Fibonacci number is:   ");

document.write(String(fibFunc(num)));

function fibFunc(n) {
    var i, ch1, ch2, chFib;
    chFib=0;
    ch1=1;
    
    for (i=0; i<=(n-1); i++)
        {
            ch2=ch1;
            ch1=chFib;
            
            chFib=ch1+ch2;
    }
    
    return chFib;
}
    
/*function fibFunc(n) {
var i, fibNum;
var array=[];
    array[0]=1;
    array[1]=1;
    if (n===1) {return 1} else
        if (n===2) {return 1} else
            for (i=2; i<=(n-1); i++)
             {
                array[i]=array[i-1]+array[i-2];
                fibNum=array[i];
         }    
            return fibNum;
}*/

    

