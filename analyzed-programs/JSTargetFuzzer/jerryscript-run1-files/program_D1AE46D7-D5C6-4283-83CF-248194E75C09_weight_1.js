function f0() {
}
function f4(a5, a6) {
    const o8 = {
        "c": 4294967296n,
    };
    const o17 = {
        __proto__: a6,
        "a": a6,
        get h() {
            this[this] = a6;
            return 10n == a6;
        },
        "d": 10n,
        set c(a12) {
            this[10n] = this;
            const v13 = this[10n];
            for (let v14 = 0; v14 < 32; v14++) {
                v13["p" + v14] = v14;
            }
        },
    };
    return o17;
}
const v18 = f4(12639n, 3n);
const v19 = f4(3n, v18);
const v20 = f4(3n, 12639n);
function f21(a22, a23) {
    const o29 = {
        "c": v19,
        "a": a23,
        get d() {
            return this.__proto__;
        },
        ...v18,
        __proto__: a22,
        "d": 10n,
        ...v19,
        "f": f4,
    };
    return o29;
}
const v30 = f21(v18, v18);
f21(v20, v18);
f21(v19, v18);
function f33() {
    return v30;
}
new WeakSet();
const v53 = new URIError(512);
const v56 = new Int16Array(447);
new Uint32Array(2438);
function f63() {
}
v53.description <<= 2006448021;
const v71 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v71.copyWithin(v71, v71));
new Uint8Array(0);
let v82 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v84 = new BigUint64Array(127);
v82 /= v84;
new WeakSet();
new BigInt64Array(2, -14, v56);
([5]).reverse();
