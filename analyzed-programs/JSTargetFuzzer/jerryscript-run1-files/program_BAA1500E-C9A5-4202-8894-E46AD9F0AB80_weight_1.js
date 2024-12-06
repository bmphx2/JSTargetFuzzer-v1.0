function f3(a4) {
    const o14 = {
        ...a4,
        [-4294967297](a6, a7) {
            const v11 = this[2038678033];
            try { a7.getUTCSeconds(v11, -14, v11); } catch (e) {}
            try { a7(); } catch (e) {}
            var h = v11;
            return v11;
        },
        69: a4,
        ...2038678033,
        "f": a4,
        __proto__: a4,
    };
    return o14;
}
const v15 = f3(-268435456);
const v16 = f3(-4294967297);
const v17 = f3(-268435456);
new Date();
function F23(a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v15;
    this.d = a26;
    this.e = -268435456;
}
new F23(v15, v17, v15);
const v29 = new F23(v16, v17, v15);
new F23(v17, v29, v15);
const v33 = new Uint16Array(16);
v33[5] = v33;
