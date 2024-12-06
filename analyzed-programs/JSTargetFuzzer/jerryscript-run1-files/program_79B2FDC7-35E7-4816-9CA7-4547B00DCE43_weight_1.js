const v0 = [0.42463286357920205,NaN,9.234755451670477e+307,8.603394934578265,1000.0,872.6470372805716,-78.17750394647055,2.220446049250313e-16,1000000000000.0,-1.7893189874358697];
const v1 = [-1.1179553589103526e+308,-2.2250738585072014e-308,-3.0,8.168787424891114,4.0,-5.7822758231386135];
const v2 = [0.5984216003613468,6.723866358602814e+307,1e-15,-5.850585640052031,-3.0,1e-15];
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v1;
    this.a = v1;
    this.e = a5;
}
const v6 = new F3(v0);
const v7 = new F3(v2);
const v8 = new F3(v1);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a11;
    this.a = v1;
    this.c = v1;
}
new F9(v8, v2, v2);
new F9(v8, v0, v2);
new F9(v6, v0, v1);
new Array(3356);
new Int16Array(255);
const v28 = new Uint8Array(5);
new Uint8ClampedArray(v7);
function f32(a33, a34) {
    const o47 = {
        174: a33,
        "c": f32,
        65536: a33,
        "e": v28,
        set f(a36) {
            try { a36(Int16Array, a36, a36, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new a34(341);
            new Int16Array(16);
        },
    };
    return o47;
}
f32(5, 255);
const v49 = f32(255, 257);
f32(257, 255);
const v51 = new Uint8Array(257, 257, 255);
let v52;
try { v52 = (5).includes(v51); } catch (e) {}
Object.defineProperty(v49, 257, { enumerable: true, get: f32 });
for (let v53 = 0; v53 < 32; v53++) {
    v28["p" + v53] = v53;
}
v28[3];
try { v52["p"](Int16Array); } catch (e) {}
