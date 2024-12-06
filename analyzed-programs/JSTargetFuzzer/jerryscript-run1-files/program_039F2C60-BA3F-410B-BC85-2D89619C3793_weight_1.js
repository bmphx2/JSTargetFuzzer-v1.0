const v1 = new WeakMap();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = WeakMap;
}
const v5 = new F2(v1);
new F2(WeakMap);
const v7 = new F2(v5);
const v8 = [v7,v7,WeakMap];
[v1,v7,v7,v8,v8];
[v8,v7];
let v15 = 256;
v15 <<= 3;
const o18 = {
    ...undefined,
};
gc(81);
const v21 = [2.5870964546644305e+306];
for (let v22 = 0; v22 < 32; v22++) {
    v21["p" + v22] = v22;
}
Array(3007);
