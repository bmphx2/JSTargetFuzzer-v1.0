const v1 = new WeakMap();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    const o5 = {
    };
    const v7 = new Proxy(v1, o5);
    o5[v7];
    this.h = WeakMap;
}
const v9 = new F2(v1);
new F2(WeakMap);
const v11 = new F2(v9);
const v12 = [v11,v11,WeakMap];
[v1,v11,v11,v12,v12];
[v12,v11];
let v19 = 256;
v19 <<= 3;
const o22 = {
    ...v11,
};
gc(81);
const v25 = [2.5870964546644305e+306];
for (let v26 = 0; v26 < 32; v26++) {
    v25["p" + v26] = v26;
}
Array(3007);
