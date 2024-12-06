function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 425943735;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a8;
}
const v10 = new F6(v5, v3);
new F6(v10, v3);
new F6(v3, v5);
function f20() {
}
const v23 = new Int32Array(false);
function f26() {
}
const v29 = new Uint8ClampedArray(5);
const v30 = [-14,-1731844252,7,-6,10,11,2147483649];
const v31 = [9,-65535];
function f32(a33, a34) {
    v31["keys"](...v30, a34, ...v29, 5, ..."keys");
}
const v38 = new Promise(f32);
v38["catch"](f26);
const v41 = new Uint16Array(1024);
const v44 = new Uint8ClampedArray(5);
const v45 = [-14,-1731844252,7,-6,10,11,2147483649];
[127,268435439,8,127,-1049439289];
const v47 = [9,-65535];
new BigUint64Array(3);
const v53 = new Int32Array(3499);
v53["copyWithin"](306, 3499);
v23.g = Uint16Array;
function f57(a58, a59) {
    v47["keys"](...v45, a59, ...v44, 5, ..."keys");
    try { Float32Array(Float32Array); } catch (e) {}
    new BigUint64Array(108);
}
const v68 = new Promise(f57);
let v70 = v68["catch"](f20);
v70 = v41;
