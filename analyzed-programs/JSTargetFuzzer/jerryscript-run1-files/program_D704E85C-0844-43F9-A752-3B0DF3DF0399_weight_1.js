function f9(a10, a11) {
    const o32 = {
        get a() {
            const v13 = this == a10;
            if (v13) {
                v13 < 3 ? v13 : 3;
            } else {
                try {
                    super.getTimezoneOffset();
                } catch(e17) {
                }
                let v18;
                try { v18 = a10(15); } catch (e) {}
                const o19 = {
                };
                o19.g = Math.round(Math);
                const v22 = typeof v18;
                const v24 = v22 === "undefined";
                function F25(a27, a28) {
                    if (!new.target) { throw 'must be called with new'; }
                    this.c = v22;
                }
                new F25(268435440, v13);
                const v30 = new F25(268435440, v24);
                new F25(-9007199254740990, v30);
            }
            return v13;
        },
        "f": 536870889,
        "a": a10,
    };
    return o32;
}
f9(536870889, -2);
const v34 = f9(3, -2);
f9(-9007199254740990, 15);
Object.defineProperty(v34, "e", { enumerable: true, value: -2 * 15 });
new WeakSet();
function F42() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v45 = new F42();
const v46 = new F42();
const v47 = new F42();
let v49 = -937546.0274885385;
const v54 = [-1e-15,1000000.0,v49,v47];
const v55 = [1000000.0,-1e-15,v46,v54,-1e-15];
const v56 = [v47,v49,v47];
function f57(a58, a59) {
    const o82 = {
        "b": -1e-15,
        ...a59,
        [v56]: v46,
        __proto__: v46,
        "d": v47,
        "f": a59,
        [a58]: v54,
        set a(a61) {
            this.__proto__ = v55;
            v56[0.22410269410035233] = a58;
            for (let v63 = 0; v63 < 32; v63++) {
                a61["p" + v63] = v63;
            }
            const v66 = Symbol.iterator;
            const o81 = {
                [v66]() {
                    let v68 = 10;
                    const o80 = {
                        next() {
                            v68--;
                            const v72 = v68 == 0;
                            const o73 = {
                                ...v56,
                                "done": v72,
                                "value": v68,
                            };
                            return o73;
                        },
                        set h(a75) {
                            a59 = a75 && -1e-15;
                        },
                        set h(a78) {
                            with (Math) {
                            }
                        },
                    };
                    return o80;
                },
            };
        },
    };
    return o82;
}
f57(v56, v45);
f57(v56, v46);
const v85 = f57(v55, v56);
with (v47) {
    let v86 = a;
    let v88 = `rizPp${0.22410269410035233}number${v85}sticky${426.7417148362349}-29565${v86 || v86}atan2`;
    ({"length":v86,} = v88);
    v49 |= 426.7417148362349;
    let v91 = -9;
    Math.round(v91);
    const v94 = v88++;
    v91++;
    Math.fround(v94);
    Math.sign(v91);
    v91 || v88;
    const v99 = [];
    const o107 = {
        "apply": f57,
        "call": f9,
        "deleteProperty": f9,
        "getPrototypeOf": f9,
        "has": f57,
        "ownKeys": f57,
        set e(a101) {
            /\w|\d[\ca]/gisum;
            /M(x)(x)(x)\4*/yis;
        },
        valueOf() {
            try { this["replace"](); } catch (e) {}
            v94.__proto__ = v88;
            return v88;
        },
        "set": f9,
    };
    new Proxy(v99, o107);
}
