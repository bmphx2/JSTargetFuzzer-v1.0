new Uint32Array(127, Uint32Array);
new Uint16Array(4096);
new BigInt64Array(256);
function f12(a13, a14, a15, a16) {
    const o23 = {
        m(a18, a19, a20) {
            try {
                super.deref(a20, a16);
            } catch(e22) {
            }
            return a14;
        },
    };
    return o23;
}
Reflect.apply(f12().m);
