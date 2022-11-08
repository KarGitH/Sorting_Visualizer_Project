var arr_size = document.querySelector("#arr_sz");

function createArray()
{
//deleting all the past bars if we are taking again random values
deleteChild();

var array = [];
var noOfBars = arr_size.value;
for(let i=0;i<noOfBars;i++)
{
    let height = Math.ceil(Math.random()*100);
    if(height<5)
    {
        height = 5;
    }
    array.push(height);
}
console.log(array);

const bars = document.getElementById("bars");

for(let i = 0;i<noOfBars;i++)
{
    const bar = document.createElement("div");
    //adding a class in the bars using javascript 
    bar.style.height = (2 * array[i]) / 3 + "vh";
    bar.classList.add(`bar`);
    bar.classList.add(`div${i}`);
    bars.append(bar);
}
}
function deleteChild()
{
    const bars = document.getElementById("bars");
    bars.innerHTML='';
}
document.addEventListener("DOMContentLoaded",function()
{
createArray();
});

arr_size.addEventListener("input",()=>{
    createArray();
})

var delaySpeed = -200;

var sortSpeed = document.querySelector("#sort-speed");

sortSpeed.addEventListener("input",()=>{
    delaySpeed = sortSpeed.value;
})

let delay = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve();
        },-1*delaySpeed);
    });
};