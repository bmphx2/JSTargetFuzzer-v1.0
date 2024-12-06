function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -536870912;
}
new F0();
const v4 = new F0();
new F0(v4, v4, v4);
const v14 = new Int8Array();
const v16 = new Int32Array(v14, 129, 129);
const v19 = new Uint8ClampedArray(3598);
v19["set"](...v14, 129);
const v23 = new Int16Array(v19);
v23["indexOf"](v16);
