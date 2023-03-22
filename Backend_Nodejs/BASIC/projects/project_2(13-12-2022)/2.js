window.onload = function (){
    const t1=document.getElementById("t1")
    const b1=document.getElementById("b1")
    const t2=document.getElementById("t2")
    let couter=1;
    let object={}
    let arr= [{
        "key":1,
        "value":"ad",
    }];
    let b;
    b1.addEventListener('click',()=>{
        console.log("add")
        console.log("button clicks");
        // console.log(arr.push())
        b=t1.value;
        object.key=couter++;
        object.value=arr;
        arr.push(b);
        console.log(arr)
        t2.value=arr
    })
}

// methods of jquery-----------

// fetch
// 
// ajex
// 
// axios

