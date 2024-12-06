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
const v26 = new Uint16Array(1024);
const v29 = new Uint8ClampedArray(5);
const v30 = [-14,-1731844252,7,-6,10,11,2147483649];
[127,268435439,8,127,-1049439289];
const v32 = [9,-65535];
v23.g = Uint16Array;
function f33(a34, a35) {
    v32["keys"](...v30, a35, ...v29, 5, ..."keys");
}
const v39 = new Promise(f33);
let v41 = v39["catch"](f20);
v41 = v26;
