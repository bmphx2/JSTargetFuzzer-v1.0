function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 536870889;
}
new F0();
new F0();
const v5 = new F0();
const v11 = new Float64Array(2);
new Float64Array(4);
new Int32Array(76);
const o21 = {
    "maxByteLength": 0,
};
const v23 = new ArrayBuffer(0, o21);
new BigInt64Array(v23);
new WeakSet();
const v41 = new URIError(512);
const v44 = new Int16Array(447);
let [] = v11;
v11[-65536] = v23;
new Set();
const v49 = Symbol.iterator;
const o58 = {
    [v49]() {
        let v51 = 10;
        const o57 = {
            next() {
                v51--;
                const v55 = v51 == 0;
                const o56 = {
                    "done": v55,
                    "value": v51,
                };
                return o56;
            },
        };
        return o57;
    },
};
new Uint32Array(2438);
function f64() {
}
let v70 = -9.720861708692185;
v41.description <<= 2006448021;
const v72 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
const v75 = ("1073741824").match(v72.copyWithin(v72, v72));
let v76 = 0;
new Uint8Array(v76);
let v83 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v85 = new BigUint64Array(127);
v83 /= v85;
new WeakSet();
if (Int16Array) {
    function f90() {
        return "v";
    }
} else {
    const v92 = Symbol.iterator;
    const o101 = {
        [v92]() {
            let v94 = 10;
            const o100 = {
                next() {
                    v94--;
                    const v98 = v94 == 0;
                    const o99 = {
                        "done": v98,
                        "value": v94,
                    };
                    return o99;
                },
            };
            return o100;
        },
    };
}
new BigInt64Array(2, -14, v44);
const v112 = [5];
if (v112 >= -11) {
    ({"a":v76,} = v5);
} else {
    const v115 = Symbol.iterator;
    const o129 = {
        [v115]() {
            let v117 = 10;
            const o124 = {
                next() {
                    v117--;
                    let v120 = new RegExp("1");
                    Object.defineProperty(v120, "a", { writable: true, set: f64 });
                    ({"ignoreCase":v120,...v70} = v120);
                    const t91 = "function";
                    t91.length = v117;
                    this.__proto__ = this;
                    const v122 = v117 == 0;
                    const o123 = {
                        "done": v122,
                        "value": v117,
                    };
                    return o123;
                },
            };
            return o124;
        },
        [v75](a126, a127, a128) {
            v44[this] = F0;
            a128.valueOf = Symbol;
            return v75;
        },
    };
}
v112.reverse();
