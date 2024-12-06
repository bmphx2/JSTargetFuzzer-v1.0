function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 1000;
    this.f = 1000;
}
new F0();
const v4 = new F0();
const v5 = new F0();
[v5,F0,4294967295,v4,F0];
const v10 = [v5,v4,64,4294967295,F0];
[4294967295,v10];
let v20 = 0;
while (v20 < 4) {
    const v23 = v20 & v20;
    try { v10.includes(v23, 1000); } catch (e) {}
    v20++;
}
const v26 = new Uint8Array(1000);
let v27;
try { v27 = ("setTime").concat(v4); } catch (e) {}
("isSealed")["search"](v27);
for (let v30 = 0; v30 < 32; v30++) {
    v10["p" + v30] = v30;
}
const v35 = new Int16Array(211);
new Uint8ClampedArray(16);
new Float32Array(1);
const v44 = new Uint8Array(1);
new Uint8Array(2);
for (let v48 = 0; v48 < 32; v48++) {
    v35["p" + v48] = v48;
}
f = v44;
const t33 = "seal";
t33[-160122027] = v26;
