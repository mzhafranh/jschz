let a = `/data?id=&string=&integer=&float=&date=&boolean=&display=3&sortBy=id&order=-1&page=1`

let b = a.split("&")
b[7] = "sortBy=string"
c = b.join("&")
console.log(c)