const CONFIG = {
    container: document.getElementById('container'),
    list: document.getElementById('list'),
    itemHeight: 50,
    totalCount: 10000,
    visibleCount: 0 ,//稍后计算
    buffer: 5  //buffer（缓冲区）是一个优化滚动体验的关键参数，核心作用是提前渲染当前可视区域外的若干列表项，避免滚动时出现空白或闪烁的问题。
}

function init(){
    //计算能显示多少个
    CONFIG.visibleCount = Math.ceil(CONFIG.container.clientHeight / CONFIG.itemHeight)

    //设置总高度，让滚动条比例正确
    CONFIG.list.style.height = `${CONFIG.itemHeight * CONFIG.totalCount}px`

    //首次渲染
    updateList()

    //监听滚动
    CONFIG.container.addEventListener('scroll',updateList)
}
//计算该显示哪些
function getRenderRange(){
    const scrollTop = CONFIG.container.scrollTop

    //计算起始索引，第几个开始显示
    let startIndex = Math.floor(scrollTop / CONFIG.itemHeight)

    //应用缓冲区，让滚动更流畅
    startIndex = Math.max(0, startIndex - CONFIG.buffer)

    //计算结束索引
    let endIndex = startIndex + CONFIG.visibleCount + CONFIG.buffer * 2
}