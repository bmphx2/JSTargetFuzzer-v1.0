function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
}
new F1();
const v4 = new F1();
const v5 = new F1();
const v11 = -1000000000000.0 && -9007199254740991;
Math.sign(v11);
-1000000000000.0 % v11;
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a18;
    this.b = this;
}
const v19 = new F15(v4, v5);
const v20 = new F15(v19, -65535);
const v21 = new F15(v5, v20);
const v22 = [v11,v21,-65535];
const v25 = new Uint8ClampedArray(0);
const v28 = new Uint8Array(199, 199);
let v29 = 1445;
const v31 = new Uint8ClampedArray(v29);
let v32 = 16773;
v31.copyWithin(199, ...v22, 199, v29);
const v38 = -Infinity;
v32 ^= 607782562;
v28.buffer ^= v38;
let v39;
try { v39 = v21.includes(...v29, ...v25, Uint8ClampedArray, 0); } catch (e) {}
v29--;
const v41 = [0.47865727098631905,0.6458362546114582,18.304166961066585,4.0];
[0.7563949812688459,1.7976931348623157e+308,-510668.9741876469,-9.768075787435415e+307];
[-41.588626761891646,8.279389303840148,-6.277844143931556e+306,-2.220446049250313e-16];
v28[v4];
--v29;
v29 && v41;
(+v39 >> 6) % v41;
