function Armstrong() {
    let n, sum = 0,
        r, c, temp;
    n = Number(document.getElementById("put_number").value);

    temp = n;
    while (n > 0) {
        r = n % 10;
        c = r * r * r;
        sum = sum + c;
        n = parseInt(n / 10); // convert float into Integer
    }
    n = temp;
   
    if (n == sum) {

        document.getElementById("demo1").innerHTML = "Armstrong number";

    } else {
        document.getElementById("demo1").innerHTML = "Not Armstrong number";
    }

}

function Myclear() {

    document.getElementById("demo1").innerHTML = " ";
}

function Mystart() {
    document.getElementById("p1").innerHTML = " void main()";
    document.getElementById("p2").innerHTML = "{";
    document.getElementById("p3").innerHTML = "int n,r,c,sum=0,temp;";
    document.getElementById("p4").innerHTML = ' printf("Enter n value :");';
    document.getElementById("p5").innerHTML = ' scanf("%d, &n");';
    document.getElementById("p6").innerHTML = " temp=n;";
    document.getElementById("p7").innerHTML = "  while(n>0)";
    document.getElementById("p8").innerHTML = " {";
    document.getElementById("p9").innerHTML = " r=n%10;";
    document.getElementById("p10").innerHTML = "c = r*r*r;";
    document.getElementById("p11").innerHTML = " sum=sum+c;";
    document.getElementById("p12").innerHTML = " n=n/10;";
    document.getElementById("p13").innerHTML = " }";
    document.getElementById("p14").innerHTML = " n=temp;";
    document.getElementById("p15").innerHTML = " if(n==sum)";
    document.getElementById("p16").innerHTML = " {";
    document.getElementById("p17").innerHTML = 'printf("Armstrong Number");';
    document.getElementById("p18").innerHTML = " }";
    document.getElementById("p19").innerHTML = " else";
    document.getElementById("p20").innerHTML = " {";
    document.getElementById("p21").innerHTML = 'printf("Not Armstrong number");';
    document.getElementById("p22").innerHTML = " }";
    document.getElementById("p23").innerHTML = " }";

}

// function Mynext(){
  
//     document.getElementById("p1").style.color = "#ff0000";
//     document.getElementById("pp").innerHTML = "This is the main function of the Program.";
//     return Mynext();
// }

var i = 1;
function buttonClick() {
    if(i==1){
    document.getElementById("p1").style.color = "#ff0000";
    document.getElementById("pp").innerHTML = "This is the main function of the Program.";
    }
    else if (i==2){
    document.getElementById("p2").style.color = "#130f40";
    document.getElementById("pp").innerHTML = "Opening Braket .";
    }
    else if (i==3){
        document.getElementById("p3").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = " This is the variable .";
    }
    else if (i==4){
        document.getElementById("p4").style.color = "#130f40";
        document.getElementById("pp").innerHTML = " Printf is predefine function .";
    }
    else if (i==5){
        document.getElementById("p5").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = " Scanf is predefine function.";
    }
    else if (i==6){
        document.getElementById("p6").style.color = "#130f40";
        document.getElementById("pp").innerHTML = " Temp memory .";
    }
    else if (i==7){
        document.getElementById("p7").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = " While loop .";
    }
    else if (i==8){
        document.getElementById("p8").style.color = "#130f40";
        document.getElementById("pp").innerHTML = " bracket .";
    }
    else if (i==9){
        document.getElementById("p9").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = " This is the r variable .";
    }
    else if (i==10){
        document.getElementById("p10").style.color = "#130f40";
        document.getElementById("pp").innerHTML = " This is the c variable .";
    }
    else if (i==11){
        document.getElementById("p11").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = " This is the sum variable .";
    }
    else if (i==12){
        document.getElementById("p12").style.color = "#130f40";
        document.getElementById("pp").innerHTML = " This is the n variable .";
    }
    else if (i==13){
        document.getElementById("p13").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = " This is the bracket .";
    }
    else if (i==14){
        document.getElementById("p14").style.color = "#130f40";
        document.getElementById("pp").innerHTML = " This is the n variable .";
    }
    else if (i==15){
        document.getElementById("p15").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = " This is the if .";
    }
    else if (i==16){
        document.getElementById("p16").style.color = "#130f40";
        document.getElementById("pp").innerHTML = " This is the bracket .";
    }
    else if (i==17){
        document.getElementById("p17").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = " This is the printf .";
    }
    else if (i==18){
        document.getElementById("p18").style.color = "#130f40";
        document.getElementById("pp").innerHTML = " This is the bracket .";
    }
    else if (i==19){
        document.getElementById("p19").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = " This is the else .";
    }
    else if (i==20){
        document.getElementById("p20").style.color = "#130f40";
        document.getElementById("pp").innerHTML = " This is the bracket.";
    }
    else if (i==21){
        document.getElementById("p21").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = " This is the printf .";
    }
    else if (i==22){
        document.getElementById("p22").style.color = "#130f40";
        document.getElementById("pp").innerHTML = " This is the bracket .";
    }
    else if (i==23){
        document.getElementById("p23").style.color = "#ff0000";
        document.getElementById("pp").innerHTML = " This is the bracket .";
    }

    document.getElementById('next').value = ++i;
}