const formatPhone = (arr) => {
    const str = arr.join('')
    return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`
}
  
console.log(formatPhone([9, 7, 7, 5, 6, 3, 1, 2, 1, 2]))
