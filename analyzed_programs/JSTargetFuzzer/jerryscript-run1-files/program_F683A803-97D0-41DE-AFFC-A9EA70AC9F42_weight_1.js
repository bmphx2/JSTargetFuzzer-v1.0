function f0() {
}
function f1() {
    return f0;
}
const v2 = [f0,f1,f0,f0];
const v3 = [f0,f1,v2,v2,f1];
const v4 = [v2,f1,v3,f1];
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a18;
    this.f = a18;
    this.h = a19;
}
new F15(v2, v3, v3, 5);
new F15("W", v4, v2, f1);
new F15("n", v4, v2, 2.2250738585072014e-308);
const v24 = Symbol.iterator;
const o33 = {
    [v24]() {
        let v26 = 10;
        const o32 = {
            next() {
                v26--;
                const v30 = v26 == 0;
                const o31 = {
                    "done": v30,
                    "value": v26,
                };
                return o31;
            },
        };
        return o32;
    },
};
new BigInt64Array(256);
-128n >> 5n;
-2147483647n - 4294967295n;
const v45 = new Uint32Array(227);
let v47;
try { v47 = new f1(f1, Uint32Array, 129, 129, ...f0); } catch (e) {}
let v51 = -491463358 ^ v47;
v51++;
-v51;
-491463358 && v47;
Math.max(-1.0);
new Uint16Array(129);
function F58(a60, a61) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a61;
}
new F58(256, 129);
new F58(v45, 227);
new F58(v45, 129);
function f65() {
}
new Uint8Array(227);
let v79 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v79);
v79 /= v79;
new WeakSet();
new BigInt64Array(2);
([2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308]).copyWithin();
const o98 = {
};
Reflect.apply(("e").endsWith, o98);
const v103 = [5];
const v105 = new Uint8Array();
v105 instanceof RegExp.bind(RegExp, Uint8Array, Uint8Array, v105, Uint8Array);
v103.reverse();
