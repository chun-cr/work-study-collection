// 原数组
const originalArr = [1, 2, 3, 4, 5, 6];

// 使用filter筛选偶数，返回新数组
const filteredArr = originalArr.filter(num => num % 2 === 0);

console.log("原数组：", originalArr); // [1,2,3,4,5,6]（原数组无变化）
console.log("筛选后的新数组：", filteredArr); // [2,4,6]（新数组）

// 验证是不同的数组（内存地址不同）
console.log(originalArr === filteredArr); // false（证明不是同一个数组）

const originalUsers = [
    { name: '小', age: 20 },
    { name: '春', age: 21 },
]
// 筛选age>20的用户，返回新数组
const filterUsers = originalUsers.filter(u => u.age > 20)
filterUsers[0].age = 22