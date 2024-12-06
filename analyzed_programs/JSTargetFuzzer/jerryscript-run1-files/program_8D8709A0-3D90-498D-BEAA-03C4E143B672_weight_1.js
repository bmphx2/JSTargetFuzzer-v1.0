function f0() {
}
function f1() {
    const o4 = {
        [f0]() {
            Object.defineProperty(this, 7, { writable: true, enumerable: true, set: f0 });
            return f0();
        },
        [f0]: f0,
        __proto__: f0,
        "g": f0,
        ...f0,
        "a": f0,
        9: f0,
        "c": f0,
        "h": f0,
        "e": f0,
        "b": f0,
    };
    return o4;
}
f1();
f1();
f1();
new Map();
[-4294967295,1073741825,2147483647,12,-1024];
[4096,-65535,-19076,-9007199254740991,-4096,1024,6];
[-391080975];
const o17 = {
};
[];
const v21 = new Uint8Array(129);
Math.cosh();
Math.sinh();
v21 >>> v21;
Math.asin();
class C28 extends o17.constructor {
}
function f34() {
    return 10000;
}
const v41 = -5534n >= -5534n;
const t41 = 10000;
t41[16] = 10000;
const v42 = 12n && v41;
try { v42.n(); } catch (e) {}
new Int16Array();
const v48 = [2.5870964546644305e+306];
for (let v49 = 0; v49 < 32; v49++) {
    v48["p" + v49] = v49;
}
const v53 = -4294967295;
f34();
1 == 1 ? 1 : 1;
