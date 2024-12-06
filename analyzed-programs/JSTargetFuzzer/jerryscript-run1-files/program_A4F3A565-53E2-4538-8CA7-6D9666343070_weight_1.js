function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 64345;
    const v3 = [0.4529136152632842,-1000000000.0,978798.0673008678,0.5378910680615573,Infinity,4.4588060981159203e+307,-3.688546247474309,-1.2999249255676081e+308,-254.07062639567982];
    const o4 = {
    };
    const o5 = {
    };
    const v7 = new Proxy(o4, o5);
    const o8 = {
        __proto__: v7,
    };
    v3[o8];
    this.f = 64345;
    F0.d = 64345;
}
const v10 = new F0();
const v11 = new F0(F0, F0);
const v12 = new F0();
const v13 = -Infinity;
function f16(a17, a18, a19, a20) {
    const o33 = {
        ...a19,
        ...a20,
        get a() {
            try {
            } catch(e22) {
                function f23(a24, a25, a26) {
                    return f23;
                }
            }
            return this;
        },
        get c() {
            try { a17(a19, v10, v13, v13, this); } catch (e) {}
            v12.d;
            return 9007199254740991;
        },
        "c": 1.0,
        ...v11,
    };
    return o33;
}
f16(F0, v11, f16, v12);
f16(1.0, v12, 1.0, v11);
f16(-2.220446049250313e-16, v12, v11, v10);
let v37 = -12n;
v37 >>= v37;
0.0 << 0.0;
const v42 = Array(128);
v42.copyWithin(v42);
