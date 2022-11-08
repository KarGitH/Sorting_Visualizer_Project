function swap(el1, el2) {
    //getting value of 'height' property from corresponding nodes
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
  
    var val1 = transform1.substring(0, transform1.length - 2);
    var val2 = transform2.substring(0, transform2.length - 2);
    var background1 = style1.getPropertyValue("background");
    var background2 = style2.getPropertyValue("background");
  
    console.log(val1, val2);
  
    if (Number(val1) > Number(val2)) {
      el1.style.height = transform2;
      el2.style.height = transform1;
      el1.style.background = background2;
      el2.style.background = background1;
      return 1;
    }
  
    return 0;
  }
async function insertionSort()
{
    const bars = document.getElementById("bars");
    const child = bars.children;
    let noOfBars = child.length;

    for(let i=1;i<noOfBars;i++)
    {
       let j = i;
       var ele1,ele2;
       while(true)
       {
        ele2 = children[j];
        ele2.style.background = "blue";
        await delay();
        if(!j)break;
        ele1 = children[j-1];
        if(swap(ele1,ele2))
        {
            j--;
        } 
        else
        {
            break;
        }
       }
       ele2.style.background = "green";
       await delay();
       ele2.style.background = "yellow";
    }
    for(let i = noOfBars-1;i>=0;i--)
    {
        await delay();
        child[i].style.backgorund = "green";
    }
}