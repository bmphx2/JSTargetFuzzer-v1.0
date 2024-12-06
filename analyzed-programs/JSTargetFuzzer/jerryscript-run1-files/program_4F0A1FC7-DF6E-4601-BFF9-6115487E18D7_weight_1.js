function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
    this.e = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f6(a7, a8) {
    const o17 = {
        ...v3,
        127: v4,
        "g": a7,
        [a8]: a8,
        get h() {
            const v10 = v3 % this;
            let v14 = 10;
            for ([-3.0,1.7182266648454853e+308,331.02351975919237,-1e-15,-4.0,-3.0,-Infinity]; v14--;) {
            }
            return v10;
        },
        ...a7,
        1701385279: F1,
        __proto__: v5,
        "d": v3,
    };
    0.0 ** 11;
    ([128,1073741823,900989269,-1024,9007199254740990,-9007199254740991])[9007199254740990n];
    return o17;
}
const v24 = f6(v5, v4);
const v25 = f6(v4, v3);
const v26 = f6(v5, v5);
function f27(a28, a29, a30, a31) {
    const o69 = {
        __proto__: a29,
        m(a33, a34, a35, a36) {
            a33.valueOf = f6;
            a33[v24] = f0;
            -2n ^ a33;
            const o46 = {
                toString(a40, a41, a42, a43) {
                    return Proxy();
                },
            };
            1073741823 * o46;
            let v49;
            try { v49 = new a35(a36, a35, a31, this); } catch (e) {}
            try { a29.p(a28, v26, this, v49, a31); } catch (e) {}
            return f6;
        },
        "f": v5,
        o(a52, a53) {
            a53.g;
            if (F1 == a31) {
            } else {
                let v61 = 5.0;
                const v62 = v61 % a28;
                const v63 = +v61;
                Math.clz32(v63);
                v61--;
                !v63;
                v62 >>> a28;
                Math.random();
            }
            return v24;
        },
    };
    return o69;
}
f27(v26, v4, v26, v5);
f27(v24, v4, v25, v5);
f27(v26, v3, v24, v3);
class C73 extends f6 {
    m(a75, a76, a77) {
        super.h = f6;
        for (const v80 in C73) {
        }
        +-65537;
        new ArrayBuffer();
        return f6;
    }
    set f(a87) {
        [177.9848039254266,-3.883575177901544e+307,NaN,-1.2676055927733267e+307,0.482980991518569,1.0,0.10905287376051687,-3.892300026181279e+307,1.0645270486425257e+308,2.220446049250313e-16];
        [951.8004810531315,-163.93699252547572,-1000000.0,2.0,-1e-15,963.5740999344239,1000000.0,4.985994504863637];
        [-837.0070577019894,-2.220446049250313e-16];
    }
}
new C73();
new C73();
new C73();
const v97 = [65537,15,257,2147483649,9007199254740991,-10,1073741823,-1,1073741825];
function f98(a99, a100, a101, a102) {
    return a101;
}
v97.flatMap(f98);
