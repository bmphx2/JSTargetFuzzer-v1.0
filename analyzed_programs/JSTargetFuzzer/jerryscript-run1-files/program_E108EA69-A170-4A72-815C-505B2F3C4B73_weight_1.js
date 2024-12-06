function f0() {
    const v1 = -Infinity;
    let v3 = 8.867200380107594;
    const o12 = {
        p(a5, a6) {
            v3 = Infinity;
            try { a5["test"](v3, "test", a5); } catch (e) {}
            const v11 = Symbol.unscopables;
            a5[v11] = v1;
            return v11;
        },
    };
    return o12;
}
const v13 = f0();
const v14 = f0();
f0();
function F16(a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a18;
    this.d = v13;
    this.e = a18;
}
new F16(v14);
const v20 = new F16(v14);
new F16(v20);
new Int32Array(347);
new Uint8ClampedArray(257);
new Float32Array(1024);
5 - 4294967297;
const v35 = new Date();
v35.setMinutes();
