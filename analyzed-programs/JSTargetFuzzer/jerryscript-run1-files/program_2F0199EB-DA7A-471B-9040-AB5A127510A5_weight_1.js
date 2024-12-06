const v1 = new WeakSet();
function f2(a3) {
    const o8 = {
        get e() {
            ("Fn1Y8").normalize("NFC");
            return this;
        },
        ...f2,
        [a3]: v1,
        [WeakSet]: a3,
        "c": a3,
        [v1]: WeakSet,
        "f": v1,
    };
    return o8;
}
const v9 = f2(v1);
f2(v9);
f2(v9);
const v23 = new Float32Array(538);
new Float64Array(14);
new Float32Array(257);
Float64Array instanceof Float32Array;
const o34 = {
    valueOf() {
        let v33 = super.d;
        v33 |= Boolean;
        return 257;
    },
};
try { v23.entries(); } catch (e) {}
