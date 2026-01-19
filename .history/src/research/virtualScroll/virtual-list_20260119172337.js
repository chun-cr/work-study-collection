const CONFIG = {
    container: document.getElementById('container'),
    list: document.getElementById('list'),
    itemHeight: 50,
    totalCount: 10000,
    visibleCount: 0 ,//稍后计算
    buffer: 5
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
}