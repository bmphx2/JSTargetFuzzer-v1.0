const v0 = [];
function f7(a8, a9, a10) {
    const o32 = {
        __proto__: a10,
        "h": a10,
        valueOf(a12, a13) {
            a13[7] = a12;
            let v14;
            try { v14 = new a8("compile"); } catch (e) {}
            try { v14("7I2", v0, v14, a9, "function"); } catch (e) {}
            a10.valueOf = a13;
            function F16() {
                if (!new.target) { throw 'must be called with new'; }
            }
            let v18 = new F16();
            const v20 = new Int32Array(v18);
            v20.__proto__ = v18;
            v18 /= v20;
            const v22 = Symbol.iterator;
            const o31 = {
                [v22]() {
                    let v24 = 10;
                    const o30 = {
                        next() {
                            v24--;
                            const v28 = v24 == 0;
                            const o29 = {
                                "done": v28,
                                "value": v24,
                            };
                            return a13;
                        },
                    };
                    return o30;
                },
            };
            return a12;
        },
    };
    return o32;
}
const v33 = f7("compile", v0, "function");
f7("268435456", f7("function", v33, "function"), "9");
let v39 = Date;
new v39();
for (let i50 = 0; i50 < 5; i50++) {
    v33.__proto__;
    [-961.4110182010965];
    [-1.1081070533782128e+308];
    [1000000000000.0];
}
function F61() {
    if (!new.target) { throw 'must be called with new'; }
    F61.prototype = 1433387171;
}
const v64 = new F61();
new F61();
new F61();
function f68() {
    const v71 = new Uint32Array(858);
    return v71;
}
function f74() {
    return v64;
}
const v77 = new BigUint64Array(BigUint64Array, BigUint64Array);
v77.copyWithin();
const v81 = RegExp.bind(2);
Math.fround();
Math.min(NaN);
let v87 = 1073741824n;
v87 &= v87;
try { Float32Array(); } catch (e) {}
const v92 = (-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
let v100 = 26;
v87 || 477982.10319113405;
--v100;
-"compile";
Math.max(v39);
Math.random();
Math.tan(v92);
++v39;
class C112 {
}
const v114 = new v81(1);
const v117 = new Int8Array(107);
for (let i120 = 0, i121 = 10; i120 < i121;) {
    v117[v114] = i120;
    ++i120;
    Math.max(7);
}
new Int16Array(v100);
4 == [4,7,4294967297,-1,1000];
const v137 = new Int8Array(Int8Array, Int8Array, Int8Array);
v137.includes(v137, v137);
new Uint8ClampedArray(6);
try {
    new WeakSet(-13n);
} catch(e144) {
} finally {
}
