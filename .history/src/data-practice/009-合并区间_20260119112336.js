/*以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
intervals[i].length == 2
示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2：

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
示例 3：

输入：intervals = [[4,7],[1,4]]
输出：[[1,7]]
解释：区间 [1,4] 和 [4,7] 可被视为重叠区间。*/
function merge (intervals){
    intervals = intervals.sort((a, b) => a[0] - b[0])
    let result = []
    result.push(intervals[0])
    for (let i = 1; i < intervals.length; i++){
        let current = intervals[i]
        let last = result.length - 1
        if(current[0] <= last[1]){
            last[1] = Math.max(current[1],last[1])
        }else{
            result.push(current)
        }
    }
    return result
}