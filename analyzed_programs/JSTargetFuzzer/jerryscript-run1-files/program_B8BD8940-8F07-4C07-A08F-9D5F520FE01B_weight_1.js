function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 4294967295;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a8;
}
const v10 = new F6(v4, v5);
const v11 = new F6(v4, v10);
const v12 = new F6(v5, v11);
const v13 = -Infinity;
new F6(undefined, v3);
const v18 = v4 ^ F6;
const v19 = [v3,v10,v18];
[v3,[v19,v5,v4,v13,v19],v18,v12,v19];
function f22() {
    return v5;
}
[f22,v4,v12];
[-6.712102708012887e+307,0.9649319197091952];
[v4,0.9649319197091952,f22];
const v29 = new Int32Array(77);
function f30() {
    return 256;
}
v29.sort(f30);
