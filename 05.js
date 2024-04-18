// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起
function squareDigits(num) {
    const result = String(num);
    const chars = result.split("");
    const resultChars = chars.map((item) => {
    const turnNum = Number(item);
    return String(turnNum ** 2);
    });
    return Number(resultChars.join(""));
}
console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449