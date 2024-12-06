function f6() {
    function f7(a8, a9, a10) {
        return f7;
    }
    const v12 = new Uint32Array(Uint32Array, 64, "h");
    const o13 = {
    };
    const v15 = new Proxy(v12, o13);
    function F16(a18, a19, a20, a21) {
        if (!new.target) { throw 'must be called with new'; }
        v15.toString = f7;
    }
    const v22 = new F16();
    new F16(Proxy, v22, v22, v12, v22);
    return 2147483649;
}
const o37 = {
    m(a34, a35, a36) {
        return a34;
    },
};
const v38 = o37.m;
v38.apply(v38);
