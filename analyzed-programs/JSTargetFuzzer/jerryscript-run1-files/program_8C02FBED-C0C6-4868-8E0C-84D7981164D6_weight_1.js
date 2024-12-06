const v3 = [2.2250738585072014e-308,809.91972746943,3.0,-2.2250738585072014e-308];
const v4 = [1.7976931348623157e+308,0.9169793679529767,3.0];
const v5 = [-1.0,942332.6716896617,7.891466217035685,1000000000000.0,5.0];
function f6(a7, a8, a9, a10) {
    const o17 = {
        "f": a10,
        "c": a8,
        set g(a12) {
            const v14 = [a12];
            Reflect.apply(a9.match, a10, v14);
        },
        [a7]: a8,
        "b": a10,
    };
    return o17;
}
f6("536870889", v3, "b", v4);
f6("b", v5, "d", v5);
f6("d", v4, "d", v3);
function f27() {
    let v28 = 0;
    while (v28 < 3) {
        const o33 = {
            "maxByteLength": 5,
        };
        const v35 = new ArrayBuffer(1, o33);
        new Int32Array(v35);
        v28++;
    }
    return 1073741825;
}
function F39(a41, a42, a43, a44) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a42;
    F39.b = -348443835;
}
const v45 = new F39(1073741825, 9007199254740992, 1073741825, -64840);
const v46 = new F39(6, 6, 1073741825, -3);
new F39(-64840, 6, v46, v46);
try { v46["clear"](9007199254740990n); } catch (e) {}
const v58 = new Uint8Array(1);
const v61 = new Uint8Array(10);
const v64 = new RangeError(1024);
function f65() {
    return Uint8Array;
}
const v67 = [v64,[v61,RangeError,1024,1024,f65],Uint8Array];
switch (v58) {
    default:
        v64[DataView.isConcatSpreadable];
        break;
}
[v67,1073741825];
function f75() {
    return RangeError;
}
v67["clear" << v61];
let {"b":v79,} = v46;
let v83 = -43723;
const v84 = v45 ** v83;
const v85 = ++v83;
-v84;
-10;
Math.asin(v85);
