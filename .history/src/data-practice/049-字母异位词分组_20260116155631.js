function groupAngrams(strs){
    const map = new Map()
    //遍历字符串数组的每一个字符串
    for(const str of strs){
        const key = str.split('').sort().join('')
        if(!map.has(key)){
            map.set(key,[])
        }
        map.get(key).push(str)
    }
    return Array.from(map.values())
}

console.log(groupAngrams(["eat","tea","tan","ate","nat"]))