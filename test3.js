let text = "HEllo Worlds!"
let result =0;
function vowel(){
    for(let i=0;i<text.length;i++){
        text[i] == "a"|| text[i] == "A" ? result += 1
            : text[i] == "o" || text[i] == "O" ? result += 1
                : text[i] == "e"||text[i] == "E" ? result += 1 
                    :  text[i] == "u"||text[i] == "U" ? result += 1
                        : text[i] == "i"|| text[i] == "I" ? result += 1 
                            : result = result;
    }
    if (result==0) {
        console.log(false);
    } else {
        console.log(`Số các kí tự nguyên âm là ${result}`);
    }
}
vowel();