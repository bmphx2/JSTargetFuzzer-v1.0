function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 13;
    this.g = a5;
}
const v7 = new F3(4, F3);
const v8 = new F3(4, F3);
const v9 = new F3(46977, 4);
[-1754593865,-7838,9007199254740991,4294967295,10,10];
const v12 = [-20052,7,-11,5,645172390,-2147483649,5700,8,9,12157];
[-4096,-9,-23878,-39610,1073741824,-1399573941,-1876,-97512441,-6];
const v14 = new F3(13, 1073741825);
v14[268435441] = v8;
if (v12 !== 4) {
    Object.defineProperty(v7, 10, { writable: true, enumerable: true, value: F3 });
} else {
    try { v9(1073741825, F3, 13); } catch (e) {}
}
const v19 = [13,13,46977,v8];
[4,4,[v9,4096,v19,46977,4096],1073741825];
for (let v22 = 0; v22 < 5; v22++) {
    const v23 = `
        function f24(a25, a26) {
            return a25;
        }
        f24(v22, v19);
        function F31(a33, a34) {
            if (!new.target) { throw 'must be called with new'; }
        }
    `;
    eval(v23);
}
