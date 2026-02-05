let target = {
    name: 'chun',
    age: 22
}
let handler = {
    get: function(target, key){
        console('getting '+key)
        return target[key]
    },
    set: function(target, key, value){
        console.log('getting '+key)
        target[key] = value
    }
}
let proxy = new Proxy(target,handler)
console.log(proxy.name)
proxy.age