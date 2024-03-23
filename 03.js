// 題目：完成函數的內容，把陣列裡的 0 都移到最後面 
let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];
function moveZerosToEnd(arr) {
    const findZero = arr.filter((num) => {
        return num === 0;
    });
    const notZero = arr.filter((num) => {
        return num !== 0;
    });
    return findZero.concat(notZero);
}
let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]