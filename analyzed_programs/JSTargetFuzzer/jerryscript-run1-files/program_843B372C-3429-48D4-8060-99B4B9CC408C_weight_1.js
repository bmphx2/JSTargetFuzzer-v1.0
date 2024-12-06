function f6() {
    return "toString";
}
const v7 = [2.0,"NEGATIVE_INFINITY",f6];
const v8 = [v7,-2.220446049250313e-16,f6,v7,"toString"];
const v13 = new Uint32Array([v8,v8,v8,-1000.0]);
let v15 = BigUint64Array;
let v16 = new v15(1);
let v17 = 253;
[v17,,v15,v16] = v13;
try { (2.0)["abs"](181, v17, v15); } catch (e) {}
new Uint16Array(v17);
for (let i30 = 0; i30 < 2; i30++) {
    const v36 = new Function("x");
    v36.name;
}
Function();
