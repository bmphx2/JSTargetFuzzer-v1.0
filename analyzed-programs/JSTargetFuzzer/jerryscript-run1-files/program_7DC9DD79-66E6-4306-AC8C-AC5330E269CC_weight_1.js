function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 4294967295;
    this.f = 4294967295;
}
new F0();
new F0();
new F0();
const v20 = new Uint8Array(1000);
const v23 = new Int16Array(211);
new Uint8ClampedArray(16);
new Float32Array(1, F0);
const v32 = new Uint8Array(1);
new Uint8Array(2);
for (let v36 = 0; v36 < 32; v36++) {
    v23["p" + v36] = v36;
}
f = v32;
const t18 = "seal";
t18[-160122027] = v20;
