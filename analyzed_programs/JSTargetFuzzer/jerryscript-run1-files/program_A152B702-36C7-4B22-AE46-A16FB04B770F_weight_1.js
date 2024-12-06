function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -4294967297;
    this.d = -4294967297;
}
const v3 = new F0();
new F0();
new F0();
new Date();
new BigInt64Array(6);
const v13 = new Float64Array(2198);
const v16 = new Int32Array(2815);
function f17(a18, a19, a20, a21) {
    2815 >= a18;
    v13.f = 2815;
    const v23 = Date(2198);
    v23 ^ a20;
    return v23;
}
f17(2198, v3, 2815, 6);
Date[114902052] = v16;
Object.defineProperty(Date, "prototype", { configurable: true, value: v3 });
