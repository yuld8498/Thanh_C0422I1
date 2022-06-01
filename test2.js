let arr = [1,3,5,7,9,11,13,15,17];
function checkValue(value){
    if (arr.includes(value)==true) {
        console.log(`${value} tồn tại trong mảng, tại vị trí số ${arr.indexOf(value)} của mảng`);
    } else {
        console.log(`${value} không tồn tại trong mảng`);
    }
}
checkValue(5);

function checkValuebyFor(value){
    let count =0;
    for(let i=0;i<arr.length;i++){
        if (arr[i]==value) {
            count+=1;
            console.log(`${value} tồn tại trong mảng, tại vị trí số ${i} của mảng`);
        } 
    }
    if(count ==0){
        console.log(`${value} không tồn tại trong mảng`);
    }
}
checkValuebyFor(11);
