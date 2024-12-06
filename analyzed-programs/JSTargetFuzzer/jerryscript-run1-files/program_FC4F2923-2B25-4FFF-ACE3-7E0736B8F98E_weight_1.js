function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -4294967295;
    this.e = -4294967295;
    this.a = -4294967295;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = "quz";
    this.c = "p";
    this.d = F0;
}
new F12(v5, "string");
new F12(v3, "string");
new F12(v5, "global");
new F0(4096);
new Uint32Array(1935);
new Uint8ClampedArray(1531);
const v28 = [13,9,-12559,-8,-4294967297];
[3,-28987,536870889,1073741825,15];
let v30 = [65535,-1139741600];
new Uint8Array(54);
new Float32Array(Uint8Array);
new Float64Array(1024);
new Uint8Array(v28, 256, 1531);
let v42 = -41990;
const v44 = v30++;
let v45 = --v42;
const v46 = --v45;
v42--;
v46 * (v44 << v42);
