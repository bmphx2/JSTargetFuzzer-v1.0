function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 1000;
    this.f = 1000;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v7 = -F0;
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a10;
    this.b = v4;
    this.d = v3;
}
new F8(v3, v7, v3, F0);
const v15 = new F8(v4, v3, v5, F8);
const v16 = new F8(v4, v15, v5, v15);
const v18 = (a19, a20, a21) => {
    return v16;
};
const v26 = [v5,F0,4294967295,v4,F0];
const v27 = [v5,v4,64,4294967295,F0];
[4294967295,v27];
v3.valueOf = v27;
v3.__proto__ = v26;
let v41 = 0;
while (v41 < 4) {
    const v44 = v41 & v41;
    try { v27.includes(v44, 1000); } catch (e) {}
    v41++;
}
const v47 = new Uint8Array(1000);
let v48;
try { v48 = ("setTime").concat(v4); } catch (e) {}
("isSealed")["search"](v48);
for (let v51 = 0; v51 < 32; v51++) {
    v27["p" + v51] = v51;
}
const v56 = new Int16Array(211);
new Uint8ClampedArray(16);
new Float32Array(1);
const v65 = new Uint8Array(1);
new Uint8Array(2);
for (let v69 = 0; v69 < 32; v69++) {
    v56["p" + v69] = v69;
}
f = v65;
if (v48) {
    h = v56;
} else {
    try { v3.n(64, "seal", v47); } catch (e) {}
}
const t53 = "seal";
t53[-160122027] = v47;
