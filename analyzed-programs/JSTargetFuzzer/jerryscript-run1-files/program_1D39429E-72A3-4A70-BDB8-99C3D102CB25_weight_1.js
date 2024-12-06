function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1073741824;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v9 = [-2,-2,2147483649,-2];
const v10 = [v4,v3,v3,v9];
[65536,v5,v10,F0,v3];
function f12(a13, a14) {
    const o23 = {
        "c": 65536,
        [a14]: a13,
        ...a14,
        ...v9,
        "unscopables": v10,
        __proto__: v4,
        valueOf(a16, a17, a18, a19) {
            let v20;
            try { v20 = a17.sin(v9, a13, this, F0, v3, a18, this, a17); } catch (e) {}
            try { v20(a13, a13, a14, 65536, a19); } catch (e) {}
            return a18;
        },
        [-1]: v9,
        [65536]: v3,
    };
    return o23;
}
f12(f12, F0, v4);
f12(v3, 2147483649);
f12(v3, -2);
const v30 = new ArrayBuffer(10);
new Int8Array(v30, 9);
