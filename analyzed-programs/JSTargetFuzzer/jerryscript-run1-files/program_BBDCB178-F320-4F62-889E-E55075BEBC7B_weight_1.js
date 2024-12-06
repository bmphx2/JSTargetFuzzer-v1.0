const v1 = new Set();
function f5(a6) {
    for (const v7 of v1) {
        const o10 = {
            "maxByteLength": 128,
        };
        const v12 = new SharedArrayBuffer(128, o10);
        new Int8Array(v12);
    }
    const o29 = {
        "a": 65536,
        __proto__: v1,
        [a6]: a6,
        get c() {
            const v16 = super.c;
            try { this.toString(v16, v16, a6); } catch (e) {}
            const v19 = Symbol.iterator;
            const o28 = {
                [v19]() {
                    let v21 = 10;
                    const o27 = {
                        next() {
                            v21--;
                            const v25 = v21 == 0;
                            const o26 = {
                                "done": v25,
                                "value": v21,
                            };
                            return o26;
                        },
                    };
                    return o27;
                },
            };
            return a6;
        },
    };
    return o29;
}
f5(1923060764);
const v31 = f5(1923060764);
f5(65536);
const v36 = [15,-4096,536870887,-2147483648,54771,-25263,-65535,42506,127];
const v37 = [39065,-12,-525557863];
[127,-65537,5195,28216,10000,9007199254740991,9,16373,-6];
function F39() {
    if (!new.target) { throw 'must be called with new'; }
    F39.c = -4294967297;
}
const v42 = new F39();
new F39();
new F39();
function f52() {
    const v55 = new Uint32Array(858);
    return v55;
}
function f58() {
    return v42;
}
const v61 = new BigUint64Array(BigUint64Array, BigUint64Array);
v61.copyWithin();
const v65 = RegExp.bind(2);
Math.fround();
Math.min(0.2148301603058278);
let v71 = 1073741824n;
v71 &= v71;
try { Float32Array(); } catch (e) {}
(-12n).toString();
const v80 = ([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
class C85 {
}
const v87 = new v65(1);
const v90 = new Int8Array(107);
for (let i93 = 0, i94 = 10; i93 < i94;) {
    v90[v87] = i93;
    ++i93;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v110 = new Int8Array(Int8Array, Int8Array, Int8Array);
v110.includes(v110, v110);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e117) {
    function f118(a119, a120, a121) {
        const o122 = {
            3: e117,
            "h": 1923060764,
            ...v31,
        };
        return o122;
    }
    const v123 = f118(v80, v36, f52);
    f118(e117, v37, v123);
    f118(v1, v36, v123);
} finally {
    Error(Error);
    const v128 = [-16,-4294967295,29519,536870888,-5];
    const o129 = {
    };
    Reflect.apply(v128.reverse, o129);
}
