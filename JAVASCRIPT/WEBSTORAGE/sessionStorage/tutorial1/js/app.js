//sessionStorage

//name-value pairs

console.log(typeof sessionStorage)
sessionStorage.setItem()
sessionStorage.setItem('intec','brussel')

//GetItem
let name = sessionStorage.getItem('PHPSESSID')
name = sessionStorage.getItem('intec')

console.log(name)

//removeItem
sessionStorage.removeItem('PHPSESSID')

//clear method