// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24 

function sumOfSmallestValues(arr) {
    arr.sort((first, second) => {
        return first - second;
    });
    let result = arr[0] + arr[1];
    return result;
}
const list1 = [19, 5, 42, 2, 77];
const list2 = [23, 15, 59, 4, 17];
  console.log(sumOfSmallestValues(list1)); // 印出 7
  console.log(sumOfSmallestValues(list2)); // 印出 19