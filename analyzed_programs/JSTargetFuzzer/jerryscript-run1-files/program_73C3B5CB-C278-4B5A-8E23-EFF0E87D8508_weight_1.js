const v7 = Date();
const v8 = new Date();
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
}
new F9(11, 2, -3, v7);
new F9(2, 2, 2, v8);
const v17 = [4294967297,-4294967295,65535,9,127,1327271026,0,257,2051462270];
class C18 {
    static 8 = 2;
    static h = v17;
}
let v19 = Date(-3);
const v22 = v19--;
const v23 = !1;
v22 * v17;
-5.0 >> v23;
const v30 = new WeakMap();
const v32 = new Date();
function f33(a34, a35, a36) {
    const o37 = {
        120: v30,
        "d": v32,
        [v30]: a34,
        "e": a34,
        ...v30,
        "g": 1073741824,
        "f": v32,
        "c": a34,
        131306414: a35,
        ...Date,
        [WeakMap]: WeakMap,
    };
    return o37;
}
f33(4096, 512, 4);
f33(1073741824, 4, 58402);
f33(-7, 58402, -7);
try { BigInt(); } catch (e) {}
