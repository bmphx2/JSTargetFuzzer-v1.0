[-9007199254740992,-2147483648,-9223372036854775807,5,0,2147483648,-188014269,536870912,-14,-3];
const v10 = [-13,-491749239,-564993740,24172,2];
const v11 = [51390,10000,-15,4,1024,-15,3568];
function f12() {
    return -947771734;
}
function f13(a14, a15, a16, a17) {
    const o34 = {
        "f": a16,
        valueOf(a19, a20, a21) {
            try { a19.matchAll(a17, a21, v11, a15); } catch (e) {}
            return 4294967296;
        },
        ...v11,
        [a17](a27, a28, a29, a30) {
            try {
                super.indexOf(a30);
            } catch(e32) {
            }
            this.f;
            return a16;
        },
    };
    return o34;
}
f13("m", "m", 1, v11);
f13("2", "2", -947771734, v11);
f13("m", "n0zUr", 4294967296, v10);
function F38() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v41 = new F38();
const v42 = new F38();
const v43 = new F38();
let v45 = -937546.0274885385;
const v50 = [-1e-15,1000000.0,v45,v43];
const v51 = [1000000.0,-1e-15,v42,v50,-1e-15];
const v52 = [v43,F38,v43];
function f53(a54, a55) {
    const o75 = {
        "b": -1e-15,
        ...a55,
        [v52]: v42,
        __proto__: v42,
        "d": v43,
        "f": a55,
        [a54]: v50,
        set a(a57) {
            this.__proto__ = v51;
            v52[0.22410269410035233] = a54;
            const v59 = Symbol.iterator;
            const o74 = {
                [v59]() {
                    let v61 = 10;
                    const o73 = {
                        next() {
                            const v63 = v61--;
                            const v65 = v61 == 0;
                            const o72 = {
                                n(a67, a68, a69) {
                                    new F38();
                                    const v71 = a68;
                                    return a69;
                                },
                                "done": v65,
                                "value": v61,
                                __proto__: "268435441",
                                10: this,
                                "g": v61,
                                6: v63,
                                ["268435441"]: 1000000.0,
                            };
                            return o72;
                        },
                    };
                    return o73;
                },
            };
        },
    };
    return o75;
}
const v76 = f53(v52, v41);
f53(v52, v42);
const v78 = f53(v51, v52);
with (v43) {
    let v79 = a;
    const v80 = v79 || v79;
    let v81 = `rizPp${0.22410269410035233}number${v78}sticky${426.7417148362349}-29565${v80}atan2`;
    ({"length":v79,} = v81);
    v45 |= 426.7417148362349;
    let v84 = -9;
    Math.round(v84);
    const v87 = v81++;
    v84++;
    Math.fround(v87);
    Math.sign(v84);
    Math.E;
    Math[v79] = f13;
    try { new v80(); } catch (e) {}
    const o93 = {
        "apply": f53,
        "call": f53,
        "construct": f12,
        "getPrototypeOf": f12,
        "preventExtensions": f12,
        "set": f53,
        "setPrototypeOf": f53,
    };
    new Proxy(v76, o93);
    v84 || v81;
}
