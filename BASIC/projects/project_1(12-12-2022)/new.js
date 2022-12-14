window.onload = function () {
const t1=document.getElementById("t1")
const t2=document.getElementById("t2")
const b1=document.getElementById("b1")
const t3=document.getElementById("t3")
// console.log(t1)

b1.addEventListener('click',() => {
    console.log("button clicks");
    console.log(`${t1} and ${t2}`);
    // console.log(+t1.value + +t2.value);
    console.log(t3.value=(+t1.value + +t2.value))
})
}