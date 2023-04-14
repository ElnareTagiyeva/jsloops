//ededin reqemleri cemini tapin
var n,m ;
var sum=0;
var n=prompt ("ededi daxil edin");
while (n>0)
{
    m=n%10
    sum+=m;
    n=((n-m)/10);
}
console.log (sum);