const v2 = new Int32Array(10);
const v5 = new Int16Array(1024);
const v8 = new Int16Array(2534);
class C9 extends Int32Array {
    static #g = v2;
    static #valueOf(a11, a12) {
        this >> a12;
        const t6 = v8[2720];
        t6[0] = 1024;
        return a11;
    }
    static #a = Int16Array;
    static 5 = 1024;
    a;
    h;
}
const v15 = new C9();
new C9();
new C9();
function f18(a19, a20) {
    function* f21(a22, a23, a24, a25) {
        let v27;
        try { v27 = a20["n"](10, a19, v5, a25, a20); } catch (e) {}
        yield 1024;
        return v27;
    }
    return f21(10, 2534, 1024, 1024);
}
f18(v15, v8);
