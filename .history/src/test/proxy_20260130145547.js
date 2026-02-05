let target = {
    name: 'chun',
    age: 22
}
let handler = {
    get: function(target, key){
        console.log('getting '+key)
        return target[key]
    },
    set: function(target, key, value){
        console.log('getting '+key)
        target[key] = value
    }
}
let proxy = new Proxy(target,handler)
console.log(proxy.name)
console.log(proxy.age)

const Person = {name : 'chun'}
function introduce(){
    console.log(`姓名${this.name},爱好1${hobby1},爱好2${hobby2}`);
    
}
const hobbies= ['看书', '学习']
const introduceWithThis = (...args) => introduce.apply(Person,args)
introduceWithThis(hobbies)