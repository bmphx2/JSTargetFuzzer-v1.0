function f0() {
    const o15 = {
        268435456: -3.531734038640801e+307,
        ..."join",
        "c": 1000,
        toString(a5) {
            new Int32Array(172);
            new Float64Array(443);
            new Uint8Array(1024);
            return 1024;
        },
    };
    const v17 = [-9223372036854775807,2,268435439,0,0,55990];
    const o18 = {
    };
    const v20 = new Proxy(v17, o18);
    v20 % 1000000000000.0;
    return o15;
}
f0();
const v23 = f0();
const v24 = f0();
const v25 = [v24,f0,v24,v24,v24];
const v26 = [v25,v25,f0,f0,v25];
const v27 = [v26,v26,v25];
function F28(a30, a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a30;
}
const v34 = new F28(v26, v24, f0, v27);
const v35 = new F28(F28, f0, v23, v27);
const v36 = new F28(v26, v35, v25, v27);
function f37(a38, a39, a40, a41) {
    const o49 = {
        "d": v23,
        __proto__: v23,
        valueOf(a43, a44, a45) {
            Object.defineProperty("MIN_SAFE_INTEGER", "MIN_SAFE_INTEGER", { configurable: true, value: "MIN_SAFE_INTEGER" });
            return f0;
        },
        "h": v34,
        [v36]: v26,
        "f": a38,
    };
    return o49;
}
f37(F28, v23, v27, v24);
f37(v27, v23, v27, v23);
f37(v23, v23, v27, v35);
const v58 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
try { v58(RegExp, 128, 0); } catch (e) {}
