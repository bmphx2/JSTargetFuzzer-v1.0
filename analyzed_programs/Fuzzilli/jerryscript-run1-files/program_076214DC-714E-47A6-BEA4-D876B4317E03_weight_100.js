function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 128;
}
const v3 = new F0();
const v4 = new F0();
let v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a8;
}
const v10 = new F6(v5, v3);
const v11 = new F6(v3, v3);
const v12 = new F6(v5, v3);
const v15 = new Int8Array(16);
let v18 = new Int16Array(7);
const v21 = new Int16Array(7);
v15.valueOf = v4;
v4[v12] >>= 7;
({"byteLength":v5,"valueOf":v18,} = v15);
try { v18(v21, v12, v18, v4); } catch (e) {}
v11.f = v18;
for (let v23 = 0; v23 < 32; v23++) {
    v10["p" + v23] = v23;
}
