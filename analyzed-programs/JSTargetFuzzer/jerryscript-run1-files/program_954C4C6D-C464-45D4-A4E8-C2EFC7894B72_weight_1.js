function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -65536;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function f6() {
    return F0;
}
function f7(a8, a9) {
    const o24 = {
        toString(a11, a12, a13, a14) {
            try { a14(this, f6, a12, a11, a11); } catch (e) {}
            const v19 = ~0.5994753182837421;
            Math.cosh(F0);
            449718922 || v19;
            return F0 >>> (F0 >> v19);
        },
    };
    return o24;
}
const v25 = f7(v5, v5);
f7(v3, v5);
f7(v5, v25);
function f31() {
}
const v35 = [-1000000.0,f31,-807.6596022618603,-1000000.0];
const v36 = [v35,-1000000.0,0.014069366437978514,v35];
const v37 = [v36,f31,-807.6596022618603,f7,v25];
function* f41(a42, a43, a44, a45) {
    try { a44.padStart(a42, "object"); } catch (e) {}
    const o47 = {
        "construct": f31,
        "ownKeys": f31,
        "preventExtensions": f31,
    };
    new Proxy(v37, o47);
    yield* "object";
    return a42;
}
f41(-807.6596022618603, "U7O", "U7O", v36, 4294967295);
