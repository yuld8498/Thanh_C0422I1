let text = "Hello Worlds!"
let result =0;
for(let i=0;i<text.length;i++){
    text[i]=="a"?result+=1: text[i]=="o"? result+=1: text[i]=="e"? result+=1:  text[i]=="u"? result+=1: text[i]=="i"?result+=1: result = result;
}
console.log(`Số các kí tự nguyên âm là ${result}`);