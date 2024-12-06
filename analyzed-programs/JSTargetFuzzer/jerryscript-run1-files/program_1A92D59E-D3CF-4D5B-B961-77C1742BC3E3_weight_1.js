function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 2.2250738585072014e-308;
    this.f = a5;
    this.e = a5;
}
new F3(2.2250738585072014e-308);
const v7 = new F3(3.0);
new F3(3.0);
new Int8Array(5);
new Uint32Array(512);
new Uint16Array(1169);
function f24() {
}
const v27 = new Int32Array(3713);
const v30 = new Uint16Array(1024);
const v33 = new Uint8ClampedArray(5);
try {
    v7.g = -12;
} catch(e34) {
    new f24();
}
const v36 = [-14,-1731844252,7,-6,10,11,2147483649];
[127,268435439,8,127,-1049439289];
const v38 = [9,-65535];
v27.g = Uint16Array;
function f39(a40, a41) {
    v38["keys"](...v36, a41, ...v33, 5, ..."keys");
}
const v45 = new Promise(f39);
let v47 = v45["catch"](f24);
v47 = v30;
