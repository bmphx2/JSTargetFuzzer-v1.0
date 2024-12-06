function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -1;
    this.b = -1;
}
new F0();
new F0();
new F0();
function f12() {
}
const v15 = new Int32Array(3713);
const v18 = new Uint16Array(1024);
const v21 = new Uint8ClampedArray(5);
const v22 = [-14,-1731844252,7,-6,10,11,2147483649];
[127,268435439,8,127,-1049439289];
const v24 = [9,-65535];
v15.g = Uint16Array;
function f25(a26, a27) {
    v24["keys"](...v22, a27, ...v21, 5, ..."keys");
}
const v31 = new Promise(f25);
let v33 = v31["catch"](f12);
v33 = v18;
