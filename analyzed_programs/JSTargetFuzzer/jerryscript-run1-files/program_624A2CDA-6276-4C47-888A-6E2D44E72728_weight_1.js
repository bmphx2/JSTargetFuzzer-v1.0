function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -536870912;
}
new F0();
const v4 = new F0();
new F0(v4, v4, v4);
[1.2637646877178796e+308,1.0,4.0,4.0,-2.5417773955676504,4.0,5.0];
[-1000000.0];
[1000000000.0,-2.2250738585072014e-308,-9.21737352648079e+307,1.7976931348623157e+308,-179.7560164992393,1.0];
const v20 = new Int8Array();
const v22 = new Int32Array(v20, 129, 129);
const v25 = new Uint8ClampedArray(3598);
v25["set"](...v20, 129);
const v29 = new Int16Array(v25);
v29["indexOf"](v22);
