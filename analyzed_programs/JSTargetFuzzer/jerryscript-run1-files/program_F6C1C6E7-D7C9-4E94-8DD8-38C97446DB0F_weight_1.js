function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = F3;
    this.d = a5;
    this.g = a5;
}
const v7 = new F3(10, 1073741823);
new F3(v7, 1073741823);
const v9 = new F3(1073741823, 10);
function f10() {
    return v9;
}
new Float32Array(4);
new Uint8Array(257);
new Uint8ClampedArray(1451);
let v23 = 9007199254740991n;
v23++;
