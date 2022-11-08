
function swap(ele1,ele2)
{
    const style1=window.getComputedStyle(ele1);
    const style2=window.getComputedStyle(ele2);

    const transform1=style1.getPropertyValue("height");
    const transform2=style2.getPropertyValue("height");

    var var1=transform1.substring(0,transform1.length - 2); //coverting the full units - last (if its px or em) -2 reduces last two letters 
    var var2=transform2.substring(0,transform2.length - 2);

    if(Number(var1)>Number(var2))
    {
      ele1.style.height=transform2;
    ele2.style.height=transform1;
    return 1;
    }
    return 0;
}

async function BubbleSort()
{
    const bars=document.getElementById("bars");
    var child=bars.children;

    var n=child.length;

    for(var i=0;i<n;i++)
    {
        for(var j=0;j<n-i-1;j++)
        {
            var ele1=child[j];
            var ele2=child[j+1];
            ele1.style.background="red";
            ele2.style.background="red";
            await delay();
            swap(ele1,ele2);
            ele1.style.background="yellow";
            ele2.style.background="yellow";
        }
        child[n - i - 1].style.background = "rgb(49, 226, 13)";
    }
}