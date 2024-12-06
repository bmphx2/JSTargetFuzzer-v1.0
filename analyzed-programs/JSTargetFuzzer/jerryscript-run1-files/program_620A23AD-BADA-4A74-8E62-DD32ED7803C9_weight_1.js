[];
function f1(a2, a3, a4) {
    return f1;
}
const v6 = new Uint32Array();
const o7 = {
};
const v9 = new Proxy(v6, o7);
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    v9.toString = f1;
}
const v16 = new F10();
new F10(Proxy, v16, v16, v6);
new F10();
new Int8Array(1000);
new Float64Array(2003);
new Uint8ClampedArray(255);
function f29() {
    let v30 = "message";
    const o34 = {
        get a() {
            v30 = this();
            return super.n();
        },
    };
    return o34;
}
f29();
