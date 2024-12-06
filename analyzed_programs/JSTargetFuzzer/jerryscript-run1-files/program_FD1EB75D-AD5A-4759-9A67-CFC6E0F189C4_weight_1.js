function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 26256;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a8;
}
new F6(v3, v4);
new F6(v3, v4);
new F6(v3, v5);
new Uint32Array(4);
new Float32Array(512);
Reflect.apply(("undefined").localeCompare, "undefined");
new Uint32Array(256);
new TypeError();
