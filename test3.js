let text = "Hello Worlds!"
let result =0;
function vowel(){
    for(let i=0;i<text.length;i++){
        text[i] == "a" ? result += 1
            : text[i] == "o" ? result += 1
                : text[i] == "e" ? result += 1 
                    :  text[i] == "u" ? result += 1
                        : text[i] == "i" ? result += 1 
                            : result = result;
    }
    if (result==0) {
        console.log("Chuỗi vừa nhập không có kí tự nguyên âm nào");
    } else {
        console.log(`Số các kí tự nguyên âm là ${result}`);
    }
}