function f0() {
}
[268435440,59267];
[-1,298729062,1073741825,2625,9007199254740990,-8,-36000];
[-2147483647,10,129,-9595,45497,1073741824,10319,-8,-128,-9007199254740990];
new Uint8Array(5);
new Int32Array(3441);
new Int32Array(1052);
function f16() {
    try {
        class C17 {
        }
        const v18 = new C17();
        function F19(a21, a22, a23, a24) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v25 = new F19(F19, F19, v18, C17);
        new Date(1, v25, v18, "n");
    } finally {
        function F30() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v32 = new F30();
        return v32;
    }
    return f16;
}
f16();
