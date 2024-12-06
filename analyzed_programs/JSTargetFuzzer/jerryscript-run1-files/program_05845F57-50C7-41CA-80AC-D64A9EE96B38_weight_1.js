function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 268435456;
    this.g = 268435456;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v4;
}
function f7() {
    return F0;
}
v5[v5.f] = 65535;
v3[906] = 14591;
const v12 = [v3,14591];
[[v4,f7,14591,f6,v5]];
function f15() {
    return f7;
}
new Float64Array(5);
if (f6 == f15) {
} else {
    v12["reduceRight"](f6);
}
new Uint16Array(172);
new Int32Array(67);
const v31 = new Int8Array(2783);
Array.from(v31);
