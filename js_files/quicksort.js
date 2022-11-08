//writing the swap function

var children;

function swap(ele1,ele2)
{
    var ele1value = unsortedArray[ele1];
    unsortedArray[ele1] = unsortedArray[ele2];
    unsortedArray[ele2] = ele1value;

    var el1 = children[ele1];
    var el2 = children[ele2];

    const style1 = window.getComputedStyle(ele1);
    const style2 = window.getComputedStyle(ele2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    ele1.style.height = transform2;
    ele2.style.height = transform1;
}
//writing code for main working of quick sort algorithm

async function partition(start,end)
{
    var pivot = end;
    var idx = start;

    children[pivot].style.backgroundColor = "rgb(24,190,255)";
    children[idx].style.backgroundColor = "blue";

    for(var i = start;i<end;i++)
    {
        children[i].style.backgroundColor = "red";
        if(unsortedArray[i] < unsortedArray[pivot])
        {
            await delay();
            swap(i,idx);
            children[i].style.backgroundColor = "yellow";
            children[idx].style.backgroundColor = "yellow";
            idx++;
            children[idx].style.backgroundColor = "blue";
        }else 
        {
            await delay();
            children[i].style.backgroundColor = "yellow";
            children[idx].style.backgroundColor = "blue";
        }
    }
    await delay();
    children[idx].style.backgroundColor = "yellow";
    children[pivot].style.backgroundColor = "yellow";

    swap(idx,pivot);
    children[idx].style.backgroundColor = "rgb(49,226,13)";
    return idx;
}

//writing main recursive function

async function quickSortArray(start,end)
{
    if(start>=end)
    {
        children[start].style.backgroundColor = "rgb(49,226,13)";
        return;
    }
    await Promise.all([
        quickSortArray(start,index-1),quickSortArray(index+1,end)
    ]);
}

async function quickSort()
{
    const bar = document.getElementsById("bars");
    children = bar.children;

    let n = children.length;

    await quickSortArray(0,n-1);
}