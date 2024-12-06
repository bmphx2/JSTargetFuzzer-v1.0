function F0() {
    if (!new.target) { throw 'must be called with new'; }
    Array.apply();
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F5();
    this.b = -9007199254740991;
}
new F0();
new F0();
new F0();
[982129.0090801832];
for (let i14 = 0, i15 = 10; i14 < i15; i14++, i15--) {
}
[0.8617495678665331,2.2250738585072014e-308,-33658.49267153861,0.7970723098908078];
[-8.162300729344825e+307,1.7976931348623157e+308,327.3818769552629,1000.0];
function f27() {
    return f27;
}
function F28() {
    if (!new.target) { throw 'must be called with new'; }
}
const v30 = new F28();
const v33 = new Array(3565);
const v35 = new WeakSet();
function f39(a40, a41, a42, a43) {
    const o50 = {
        "g": v33,
        ["e"]: a40,
        __proto__: a40,
        valueOf(a45, a46) {
            const v47 = this != a45;
            try { a43(v47); } catch (e) {}
            a46.length += 6.387594296892118;
            return a40;
        },
        "c": a42,
    };
    return o50;
}
const v51 = f39("1176243804", v30, v30);
f39("1176243804", v35, f39("d", v30, v30), v51);
v35[256];
function f56() {
}
const v59 = new Int32Array(3713);
try { Float64Array(Float64Array, Float64Array); } catch (e) {}
([-5.0,1000000000.0,-1000.0,488.27073138489004,-3.0,-Infinity,293.1919086306507,-1000000.0,708.7041237902058,0.8900144891864099]).shift();
const o65 = {
};
const v67 = new Uint16Array(1024);
const v70 = new Uint8ClampedArray(5);
const v71 = [-14,-1731844252,7,-6,10,11,2147483649];
[127,268435439,8,127,-1049439289];
const v73 = [9,-65535];
v59.g = Uint16Array;
function f74(a75, a76) {
    v73["keys"](...v71, a76, ...v70, 5, ..."keys");
}
const v79 = [9,-65535];
function f80(a81, a82) {
    return v79[a82]();
}
new Promise(f80);
const v87 = new Promise(f74);
let v89 = v87["catch"](f56);
v89 = v67;
