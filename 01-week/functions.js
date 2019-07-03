// The takeaway: Function expressions are best for object methods. Arrow functions are best for callbacks or methods like map, reduce, or forEach.
const data = {
    name: "Emily",
    location: "Austin",
    isCoder: true,
    doSomething: () => {
        console.log("Arrow: ", this)
    },
    doSomethingOG: function() {
        console.log("OG: ", this)
    }
}
// data.doSomething()
// data.doSomethingOG()

const evenArr = [2, 4, 6, 8]
const oddArr = evenArr.map(n => n -1)
// console.log(oddArr) // [1, 3, 5, 7]

function itsThis() {
    console.log(this)
}
// itsThis()