new WeakSet();
function f5() {
    return WeakSet;
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a9;
    this.a = "257";
    this.e = "MAX_SAFE_INTEGER";
}
new F6("257", "257");
new F6("maxByteLength", "257");
new F6("maxByteLength", "MAX_SAFE_INTEGER");
new Uint8ClampedArray(2);
new Uint8ClampedArray(256);
new Uint32Array(256);
const v23 = Function();
const v26 = new Float32Array(127);
v26["filter"](v23);
let v31 = (-2n) ** 63703n;
v31 += -12n;
