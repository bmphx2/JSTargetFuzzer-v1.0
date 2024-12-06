function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -2147483647;
    this.h = -2147483647;
    this.a = -2147483647;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a8;
}
let v9 = new F6(v3);
new F6(v4);
new F6(v3);
let v15 = "seal";
const v20 = new Uint8Array(1000);
let v21 = 211;
const v23 = new Int16Array(v21);
const v26 = new Uint8ClampedArray(16);
let v27 = 0;
do {
    [v15,,v21,v9] = v26;
    v27++;
} while (v27 < 5)
new Float32Array(1);
const v39 = new Uint8Array(1);
new Uint8Array(2);
for (let v43 = 0; v43 < 32; v43++) {
    v23["p" + v43] = v43;
}
f = v39;
v15[-160122027] = v20;
