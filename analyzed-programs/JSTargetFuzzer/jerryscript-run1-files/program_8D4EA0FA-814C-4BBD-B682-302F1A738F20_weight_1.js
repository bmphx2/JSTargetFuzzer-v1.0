const v6 = [2147483647n,-11n,2147483647n,60991];
const v7 = [536870912,-11n,-536870912,60991,v6];
v7 && 2147483647n;
const v11 = [-536870912 in v7];
Reflect.apply(v7.lastIndexOf, v7, v11);
const v14 = [-536870912,536870912,2147483647n];
let v22 = new Set();
v22 += v22;
function F23(a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a25;
    this.c = a25;
}
const v28 = new F23(2147483647n, v6, v14);
const v29 = new F23(v14, v28, v6);
for (let v30 = 0; v30 < 32; v30++) {
    v29["p" + v30] = v30;
}
new F23(1000000000.0, 7.667665675837514e+307, v6);
2147483647n >> 5n;
