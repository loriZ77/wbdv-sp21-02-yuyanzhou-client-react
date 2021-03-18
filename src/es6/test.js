let gu = {
    si: 'da',
    cf: 'qe'
}
let uj = {
    cf: 'do',
    co: 'db',
    ...gu,
}
gu = {
    ...uj,
    cf: 'wh',
    co: 'nd'
}
console.log(gu.si)//da
console.log(uj.cf)//qe
console.log(gu.co)//nd