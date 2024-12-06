const v2 = new Array(7);
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a8;
    this.a = Array;
    this.c = "multiline";
}
new F6("m", "multiline", "m");
new F6("m", v2, "m");
new F6("toString", "toString", "multiline");
new Int16Array(127);
new Float64Array(1);
new Int32Array(256);
const o25 = {
    "maxByteLength": 2639511717,
};
const v27 = new SharedArrayBuffer(5, o25);
new Int32Array(v27);
