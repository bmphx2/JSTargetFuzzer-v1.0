function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -10;
    this.b = -10;
    this.h = -10;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F0;
}
const v9 = new F6(v3);
v3 < F6;
let v13 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
let v14 = BigUint64Array;
const o15 = {
};
const v17 = new Proxy(F0, o15);
v9[2] = v17;
const v18 = new v14(12, 12, 12);
const v19 = new BigInt64Array(v18);
let v20;
try { v20 = v13(v18, BigInt64Array); } catch (e) {}
({"buffer":v13,"d":v14,"g":v20,...v20} = v18);
for (let v21 = 0; v21 < 5; v21++) {
    v19["copyWithin"](v21, 12, v14);
}
new F6(v4);
new F6(F0);
const v26 = [256,-14,536870912,1073741824,-9007199254740990,536870889,9,4294967296];
const v28 = "p" + v14;
v26[v28] = v14;
Date.parse(v28);
const v35 = +-2;
~-2 * v35;
