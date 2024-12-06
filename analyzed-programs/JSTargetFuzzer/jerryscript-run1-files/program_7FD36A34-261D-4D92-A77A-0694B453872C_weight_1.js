const v3 = [536870887];
const v4 = [-9687,3,-4,8,-259142117,9,-31740,5];
const v5 = [2102949280,57572,-9223372036854775807,9,-668888762];
function f9() {
    return v3;
}
function f13(a14, a15, a16) {
    const o33 = {
        __proto__: a16,
        "e": 2.0,
        ...v3,
        valueOf(a18, a19, a20, a21) {
            const v23 = Symbol.iterator;
            const o32 = {
                [v23]() {
                    let v25 = 10;
                    const o31 = {
                        next() {
                            v25--;
                            const v29 = v25 == 0;
                            const o30 = {
                                "done": v29,
                                "value": v25,
                            };
                            return o30;
                        },
                    };
                    return o31;
                },
            };
            return a20;
        },
    };
    return o33;
}
const v34 = f13(-1000.0, 2.0, v5);
const v36 = f13(-1000.0, f13(-1000.0, f9, v5), v4);
function F37() {
    if (!new.target) { throw 'must be called with new'; }
    F37.c = -4294967297;
}
const v40 = new F37();
new F37();
new F37();
function f44() {
    const v47 = new Uint32Array(858);
    return v47;
}
function f50() {
    return v40;
}
const v53 = new BigUint64Array(BigUint64Array, BigUint64Array);
v53.copyWithin();
const v57 = RegExp.bind(2);
Math.fround();
Math.min(0.2148301603058278);
let v63 = 1073741824n;
v63 &= v63;
let v66;
try { v66 = Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C77 {
}
const v79 = new v57(1);
const v82 = new Int8Array(107);
for (let i85 = 0, i86 = 10; i85 < i86;) {
    v82[v79] = i85;
    ++i85;
    Math.max(-7);
    function F96(a98, a99, a100, a101) {
        if (!new.target) { throw 'must be called with new'; }
        this.e = a100;
    }
    new F96(-7, Math, v36, -1000.0);
    new F96(-7, i86, v34, v66);
    new F96(-2147483649, 5, v66, -1000.0);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v111 = new Int8Array(Int8Array, Int8Array, Int8Array);
v111.includes(v111, v111);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e118) {
} finally {
}
