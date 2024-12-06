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
        for (const v34 in o33) {
            new f6(v34, v34, v34, ArrayBuffer);
            const v36 = v34 % f6;
            f6(v36, v36, v36, ArrayBuffer);
        }
        const v39 = new ArrayBuffer(1, o33);
        new Int32Array(v39);
        v28++;
    }
    return 1073741825;
}
function F43(a45, a46, a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a46;
    F43.b = -348443835;
}
const v49 = new F43(1073741825, 9007199254740992, 1073741825, -64840);
const v50 = new F43(6, 6, 1073741825, -3);
new F43(-64840, 6, v50, v50);
try { v50["clear"](9007199254740990n); } catch (e) {}
function f59() {
    return v4;
}
const t48 = "d";
t48[5] = 268435456n;
("b")[v4];
const v64 = new Uint8Array(1);
const v67 = new Uint8Array(10);
const v70 = new RangeError(1024);
function f71() {
    return Uint8Array;
}
const v73 = [v70,[v67,RangeError,1024,1024,f71],Uint8Array];
switch (v64) {
    default:
        v70[DataView.isConcatSpreadable];
        break;
}
[v73,1073741825];
function f81() {
    return RangeError;
}
v73["clear" << v67];
let {"b":v85,} = v50;
let v89 = -43723;
const v90 = v49 ** v89;
const v91 = ++v89;
-v90;
-10;
Math.asin(v91);
