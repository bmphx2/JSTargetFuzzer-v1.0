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
    const o14 = {
        ...v3,
        127: v4,
        "g": a7,
        [a8]: a8,
        get h() {
            return v3 % this;
        },
        ...a7,
        1701385279: F1,
        __proto__: v5,
        "d": v3,
    };
    return o14;
}
const v15 = f6(v5, v4);
const v16 = f6(v4, v3);
const v17 = f6(v5, v5);
function f18(a19, a20, a21, a22) {
    const o48 = {
        __proto__: a20,
        m(a24, a25, a26, a27) {
            a24.valueOf = f6;
            a24[v15] = f0;
            let v28;
            try { v28 = new a26(a27, a26, a22, this); } catch (e) {}
            try { a20.p(a19, v17, this, v28, a22); } catch (e) {}
            return f6;
        },
        "f": v5,
        o(a31, a32) {
            a32.g;
            if (F1 == a22) {
            } else {
                let v40 = 5.0;
                const v41 = v40 % a19;
                const v42 = +v40;
                Math.clz32(v42);
                v40--;
                !v42;
                v41 >>> a19;
                Math.random();
            }
            return v15;
        },
    };
    return o48;
}
f18(v17, v4, v17, v5);
f18(v15, v4, v16, v5);
f18(v17, v3, v15, v3);
class C52 extends f6 {
    m(a54, a55, a56) {
        super.h = f6;
        return f6;
    }
    set f(a61) {
        [177.9848039254266,-3.883575177901544e+307,NaN,-1.2676055927733267e+307,0.482980991518569,1.0,0.10905287376051687,-3.892300026181279e+307,1.0645270486425257e+308,2.220446049250313e-16];
        [951.8004810531315,-163.93699252547572,-1000000.0,2.0,-1e-15,963.5740999344239,1000000.0,4.985994504863637];
        [-837.0070577019894,-2.220446049250313e-16];
    }
}
new C52();
new C52();
new C52();
const v71 = [65537,15,257,2147483649,9007199254740991,-10,1073741823,-1,1073741825];
function f72(a73, a74, a75, a76) {
    return a75;
}
v71.flatMap(f72);
