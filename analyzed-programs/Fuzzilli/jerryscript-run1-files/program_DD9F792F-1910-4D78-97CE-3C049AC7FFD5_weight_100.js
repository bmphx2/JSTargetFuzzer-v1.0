function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
}
const v7 = new F3(1073741823, 429498559);
const v8 = new F3(16, 1073741823);
const v9 = new F3(F3, 16);
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a14;
    this.c = a12;
    this.h = v8;
}
const v16 = new F10(16, 16, v7, v7);
const v17 = new F10(16, 1073741823, v16, v16);
new F10(1073741823, 429498559, v17, v9);
let v22 = 64550n;
class C25 {
    set f(a27) {
        C25.length || "object";
    }
    o(a31, a32) {
        const o33 = {
        };
        new Proxy(this, o33);
        return a31;
    }
    [-1] = -468437650n;
}
new C25();
const v37 = new C25();
new C25();
function f39(a40, a41, a42) {
    const o57 = {
        o(a44, a45, a46, a47) {
            const t35 = "name";
            t35[a47] = this;
            a46.length = a41;
            const v50 = new BigUint64Array(1024);
            new Float64Array(7);
            new Uint8Array(1, Float64Array, 1024, Uint8Array);
            return v50;
        },
    };
    return o57;
}
f39("shift", f39("name", v37, -468437650n), v22);
f39("object", v37, -468437650n);
const v62 = [6,-1056678535,-55717,268435440];
const v63 = [55330,9223372036854775807,29585,42050,1175240318,-8,1073741823,5];
const v64 = [-2147483649,13,-941206072];
function F65(a67) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a67;
}
new F65(v64);
new F65(v63);
new F65(v63);
function F71(a73, a74, a75) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v62;
    this.g = null;
}
new F71(v62, v62, v64);
new F71(v64, v63, v64);
new F71(v63, v64, v64);
const v82 = [7,-65536,8,4294967296,9,536870887,10,2147483647,61971];
const v83 = [-5,-42608,1,-61785];
const v84 = [1694320064,1195474237,-22462];
const v85 = [v82,v84];
const v86 = [v63];
const v87 = [v85];
function f88(a89, a90, a91, a92) {
    const o140 = {
        __proto__: v83,
        "d": v86,
        toString(a94, a95, a96) {
            const v98 = v87[a95](a94, v84);
            const v100 = Symbol.iterator;
            function f104() {
                return -10;
            }
            const v110 = new BigUint64Array(158);
            const v113 = new Int32Array(6);
            let v115 = Uint32Array;
            new v115(2147483647);
            f104();
            try { v113.entries(); } catch (e) {}
            const v119 = ++v115;
            let v122 = v110[Symbol.match];
            v122 ^= v122;
            v113.byteLength;
            536870887 >> v115;
            const v125 = 536870887 !== v119;
            v125 ? v17 : v119;
            const o139 = {
                [v100]() {
                    let v128 = 10;
                    const o138 = {
                        next() {
                            const v130 = v128--;
                            v128 == 0;
                            v86[v130] = v125;
                            v128 >> this;
                            v22 = -7n;
                            const o137 = {
                                "done": v98,
                                "value": v128,
                            };
                            return o137;
                        },
                    };
                    return v98;
                },
            };
            return a94;
        },
    };
    return o140;
}
const v141 = f88(v87, v85, v86, v82);
const v142 = f88(v87, v85, v83, v86);
f88(v86, v87, v84, v82);
function F144(a146, a147) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a146;
}
new F144(v87, v141);
const v149 = new F144(v86, v142);
const v150 = new F144(v85, v142);
for (let v151 = 0; v151 < 81; v151++) {
    break;
    Object.defineProperty(v149, v151, { configurable: true, value: v150 });
    v86.length;
    break;
}
v83 instanceof f88;
