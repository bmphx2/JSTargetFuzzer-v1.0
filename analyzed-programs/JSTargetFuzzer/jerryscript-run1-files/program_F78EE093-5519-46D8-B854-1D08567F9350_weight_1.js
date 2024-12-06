let v6 = 44256;
new Uint8ClampedArray();
const v11 = new Uint32Array(858);
const v14 = new Uint16Array();
function f15(a16, a17, a18, a19) {
    const o28 = {
        m(a21, a22, a23) {
            v6 ^= a23;
            this instanceof Uint16Array;
            return v11;
        },
        set f(a26) {
            let v27 = this.m();
            ({"a":v27,} = this);
        },
    };
    return o28;
}
const v29 = f15(f15, Uint16Array, 7, 858);
const v30 = f15(v11, Uint16Array, v29, v29);
v29[8] |= 7;
for (const v31 in v11) {
    const v33 = [v31,f15,255];
    Reflect.apply(v30.m, v14, v33);
    function f36() {
        return v33;
    }
}
const v38 = [1000000.0,Infinity,NaN,-719556.352550864,-1000000000.0,0.9096924972971052,6.003446933178595e+307];
const v39 = [78750.05475981813,1000.0,0.8257332276603928,1e-15,1000000000.0,5.915022490262913,-1000000000000.0];
[-736.4859617103865,-343883.1150256754,1000.0];
function f44(a45, a46, a47, a48) {
    const o61 = {
        __proto__: a47,
        "c": -9007199254740991,
        [-2]: v39,
        ...a47,
        get b() {
            const v51 = Symbol.iterator;
            const o60 = {
                [v51]() {
                    let v53 = 10;
                    const o59 = {
                        next() {
                            v53--;
                            const v57 = v53 == 0;
                            const o58 = {
                                "done": v57,
                                "value": v53,
                            };
                            return o58;
                        },
                    };
                    return o59;
                },
            };
            return 2;
        },
    };
    return o61;
}
f44(-1.1576325189203733e+308, -4.0, v38, -4.0);
f44(-7.978547332498191e+307, -4.0, v39, -1.1576325189203733e+308);
f44(-1.1576325189203733e+308, -7.978547332498191e+307, v38, v39);
const v67 = new Array(10);
let v69 = 4096;
function f71(a72, a73, a74, a75) {
    const o85 = {
        "g": v69,
        ...a75,
        "e": a73,
        set b(a77) {
            function F78(a80, a81) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a80;
            }
            new F78(a75, 129);
            new F78(a74, a74);
            new F78(F78, 481111932);
        },
    };
    return o85;
}
let v86 = f71(v69, 481111932, 129, v67);
f71(10, 481111932, 10, f71);
f71(v86, v69, 481111932, v69);
v86.g;
try {
    let v90;
    try { v90 = v86.isSealed(); } catch (e) {}
    v86 = v90;
    v69 = v90;
} catch(e91) {
    e91[0] = e91;
    try { e91(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
