function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = this;
    this.c = a5;
    this.b = a5;
}
const v6 = new F3(-2);
new F3(-2);
new F3(-2, -3, F3);
let v10 = Int32Array;
new v10(0);
const v14 = new BigUint64Array(87, v6);
const v17 = new BigInt64Array(257);
let v21 = 0.6529468707428481;
const v22 = ++v10;
Math.cos(v10);
const v24 = v10 && v10;
Math.random();
v24 + v22;
Math.log(v21++);
const v29 = new ArrayBuffer();
const o31 = {
    __proto__: v17,
    ...v14,
};
v29 % v21;
const v33 = new Float32Array();
const v36 = new RegExp(87);
v33[v36];
