function f0() {
}
function f1() {
    const o9 = {
        [f0]() {
            try {
                super.m(this, f0, this, this, this);
            } catch(e4) {
            }
            return this;
        },
        set e(a6) {
            this[a6] = this;
            let v7;
            try { v7 = a6.sin(f1, a6); } catch (e) {}
            try { new v7(a6, f0, f0, a6); } catch (e) {}
        },
        "f": f0,
    };
    return o9;
}
f1();
f0();
f1();
const o21 = {
    "maxByteLength": 128,
};
const v23 = new ArrayBuffer(128, o21);
new Float32Array(v23);
class C31 {
    [65537] = 65537;
    [-9007199254740992];
}
