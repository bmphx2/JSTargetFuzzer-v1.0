function f0() {
    const o8 = {
        "d": 4294967297,
        __proto__: 0.339479133266568,
        [0.339479133266568](a5) {
            try {
                super.sort(a5);
            } catch(e7) {
            }
            return 62579;
        },
        ...62579,
        [4294967297]: 0.339479133266568,
        64: 0.339479133266568,
        "a": 62579,
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
f0();
function F12(a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a14;
}
new f0(v10);
new F12(v9);
new F12(v10);
new Int16Array(10);
new Float32Array(5);
new Uint8Array(0);
function F27() {
    if (!new.target) { throw 'must be called with new'; }
    function f29(a30) {
        try { new a30(); } catch (e) {}
        return a30;
    }
    f29(F27);
}
new F27();
