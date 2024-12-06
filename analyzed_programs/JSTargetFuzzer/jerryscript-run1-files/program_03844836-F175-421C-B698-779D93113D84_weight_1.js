function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
}
const v7 = new F3("o", "getUTCDay");
const v8 = new F3("number", "getUTCDay");
const v9 = new F3("o", "getUTCDay");
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a15;
    for (let v16 = 0; v16 < 32; v16++) {
        a13["p" + v16] = v16;
    }
}
new F10(v7, F3, "getUTCDay", v8);
const v20 = new F10(v8, "o", "getUTCDay", v9);
new F10(v9, v20, "number", v8);
new BigUint64Array(512);
new Float64Array(256);
new Uint8ClampedArray(204);
const v34 = new Float64Array(5);
v34.lastIndexOf(1603874941);
