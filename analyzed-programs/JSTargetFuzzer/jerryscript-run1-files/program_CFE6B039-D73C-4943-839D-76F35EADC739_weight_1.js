function f3() {
    return 1024;
}
const v5 = new Set();
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a11;
}
const v12 = new F6(-9007199254740992, -16, -9007199254740992, -16);
new F6(-9007199254740992, 1024, -9007199254740992, -16);
const v14 = new F6(1024, -16, -9007199254740992, -16);
function f15() {
    return v12;
}
v12.toString = f15;
const v20 = Symbol.iterator;
const o29 = {
    [v20]() {
        let v22 = 10;
        const o28 = {
            next() {
                v22--;
                const v26 = v22 == 0;
                const o27 = {
                    "done": v26,
                    "value": v22,
                };
                return o27;
            },
        };
        return o28;
    },
};
let v39 = Uint16Array;
for (let v40 = 0; v40 < 54; v40++) {
    f15();
    f3();
    v14[v40];
}
v39 = v39;
-9007199254740992 * 2.0;
const o46 = {
    "call": Symbol,
    "construct": f3,
};
new Proxy(v5, o46);
function f49(a50, a51, a52) {
    const t47 = "valueOf";
    t47["valueOf"] = a52;
    const v53 = a50--;
    let v54;
    try { v54 = a52(a51, a52, v53); } catch (e) {}
    return v54;
}
f49(0.6146762465894854);
let v59 = 536870888n;
const v70 = [3.0];
function f71(a72, a73) {
    a72 instanceof a72;
}
new Promise(f71);
[-9.980181287646149];
Object.defineProperty(v70, -9.980181287646149, { configurable: true, get: f71, set: f71 });
v59 /= 2331n;
[v70];
const v84 = new Int32Array(131);
const v87 = new BigInt64Array(2);
new Float64Array(3658);
const v94 = v84 & true;
const t69 = "d";
t69[4] >>= 3.0;
Float64Array & -9.980181287646149;
v87[Symbol.replace];
const t71 = "d";
t71[-2] = 2.0;
let v102 = 4.0;
v94 ^ v94;
--v102;
Math.abs(v102);
let v106 = 18731;
const v109 = 3.0 % 4294967295;
const v110 = ++v106;
Math.imul(v106, v106);
v109 - 4294967295;
v110 >>> v109;
