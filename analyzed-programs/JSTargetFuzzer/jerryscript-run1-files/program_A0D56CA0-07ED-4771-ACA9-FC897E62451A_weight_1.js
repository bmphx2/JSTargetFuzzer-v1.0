class C3 {
    c = "MAX_SAFE_INTEGER";
    constructor(a5, a6) {
        function f7(a8, a9, a10, a11) {
            const o12 = {
                __proto__: f7,
                "f": a5,
            };
            return o12;
        }
        f7(a6, this, "MAX_SAFE_INTEGER", -1.0);
        f7(this, f7, -1.0, 257);
        f7(a5, -1.0, a6, 257);
    }
    e = 257;
}
const v16 = new C3("MAX_SAFE_INTEGER", "MAX_SAFE_INTEGER");
new C3(v16, v16);
new C3("MAX_SAFE_INTEGER", v16);
new Uint8ClampedArray(1);
new Uint8Array(110);
new Uint8ClampedArray(1);
const v30 = new Uint8Array();
delete v30[-2];
