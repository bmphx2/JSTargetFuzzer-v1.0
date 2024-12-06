function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = f0;
    this.b = f0;
    this.c = f0;
}
new F1();
new F1();
new F1();
new Array(8);
[f0,F1,-4294967296,-4294967296,-4294967296];
[F1,f0,-2];
[f0,8,f0];
const v16 = [536870912];
const v17 = [55330,9223372036854775807,29585,42050,1175240318,-8,1073741823,5];
const v18 = [-2147483649,13,-941206072];
function F19(a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v18;
}
new F19(v17);
new F19(v17);
new F19(v18);
function F25(a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v16;
    this.g = null;
}
new F25(v16, v16, v18);
new F25(v18, v17, v18);
new F25(v17, v18, v17);
const v36 = [7,-65536,8,4294967296,9,536870887,10,2147483647,61971];
const v37 = [-5,-42608,1,-61785];
const v38 = [1694320064,1195474237,-22462];
const v39 = [v38,v38];
const v40 = [v17];
const v41 = [v40];
function f42(a43, a44, a45, a46) {
    const o83 = {
        __proto__: v37,
        "d": v40,
        toString(a48, a49, a50) {
            const v52 = v41[a49](F19, v38);
            const v54 = Symbol.iterator;
            const o82 = {
                "f": -4294967296,
                "getPrototypeOf": v52,
                1024: a46,
                ...a49,
                get f() {
                    new Float32Array(1);
                    new BigInt64Array(6);
                    new Uint8Array(603);
                    new Set();
                    function F67(a69, a70) {
                        if (!new.target) { throw 'must be called with new'; }
                        this.d = a69;
                        this.b = Set;
                    }
                    const v71 = new F67(16n, this);
                    const v72 = new F67(a45, v71);
                    new F67(Symbol, v72);
                    return Symbol;
                },
                [v54]() {
                    let v75 = 10;
                    const o81 = {
                        next() {
                            v75--;
                            const v79 = a43 == 0;
                            const o80 = {
                                "done": v52,
                                "value": v79,
                            };
                            return o80;
                        },
                    };
                    return v52;
                },
            };
            return a48;
        },
    };
    return o83;
}
const v84 = f42(v41, v39, v40, v36);
const v85 = f42(v41, v39, v37, v40);
f42(v40, v41, v18, v36);
function F87(a89, a90) {
    if (!new.target) { throw 'must be called with new'; }
    for (const v92 of [874925.9932308295,-1000000.0,5.0,-2.220446049250313e-16,0.46534771058701496,4.75896173685579e+307,-2.220446049250313e-16,2.1845493803247624,0.4594452685130429,-1.0]) {
        break;
    }
    new Int32Array(2);
    this.e = this;
}
new F87(v41, v84);
const v97 = new F87(v18, v85);
const v98 = new F87(v41, v85);
for (let v99 = 0; v99 < 81; v99++) {
    break;
    Object.defineProperty(v97, v85, { configurable: true, value: v98 });
    v16.length;
    break;
}
v37 instanceof f42;
