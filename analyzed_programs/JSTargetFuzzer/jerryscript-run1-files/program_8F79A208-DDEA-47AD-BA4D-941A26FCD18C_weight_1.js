function f0() {
    const o13 = {
        valueOf(a5) {
            const o8 = {
                "maxByteLength": 1650,
            };
            const v10 = new SharedArrayBuffer(9, o8);
            const v12 = new Float32Array(v10);
            return v12;
        },
        "f": -2.3707251799923575e+307,
        "c": -2.3707251799923575e+307,
    };
    return o13;
}
const v14 = f0();
f0();
const v16 = f0();
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a19;
}
const v22 = (-11n).toString;
try { v22(); } catch (e) {}
new F17(v16, v14);
new F17(v16, v16);
new F17(v14, v16);
new Int16Array(4);
new Int16Array(205);
new Uint32Array(201);
function f37() {
    return f37;
}
class C38 extends f37 {
    static [true] = true;
}
