/**
題目：請寫一小段程式，印出連續陣列裡缺少的字元
*/
const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];
function missingChar(chars) {
    let result = "";
    for (let i = 0; i < chars.length - 1; i++) {
        let first = chars[i].charCodeAt();
        let second = chars[i + 1].charCodeAt();
        if (second - first > 1) {
            result = String.fromCharCode(first + 1);
        }
    }
    return result;
}
console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P