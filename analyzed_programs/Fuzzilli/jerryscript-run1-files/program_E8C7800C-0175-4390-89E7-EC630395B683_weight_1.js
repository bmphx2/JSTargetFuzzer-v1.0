new Set();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a4;
}
let v5 = new F2(F2);
const v6 = new F2(F2);
const v7 = new F2(v6);
new Map();
const t9 = 536870912;
t9[7] = 7;
v7[8] = F2;
v5 <<= v7;
delete v7?.g;
