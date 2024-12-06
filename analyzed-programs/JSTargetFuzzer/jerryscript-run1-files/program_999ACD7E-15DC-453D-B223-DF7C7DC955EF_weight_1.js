function f1() {
    const o8 = {
        n() {
            Object.defineProperty(this, "h", { writable: true, configurable: true, value: undefined });
            return undefined;
        },
        7: undefined,
        "d": undefined,
        [undefined]() {
            this[10] += undefined;
            const v4 = undefined == undefined;
            const v6 = (undefined >> this) in this;
            const t12 = super.h;
            t12[9] = v4;
            return v6;
        },
    };
    return o8;
}
f1();
f1();
f1();
const v16 = new WeakMap();
function F17(a19) {
    if (!new.target) { throw 'must be called with new'; }
}
const v20 = new F17(WeakMap);
const v21 = new F17();
const v22 = [v16,v21];
const v23 = [v21];
const o28 = {
    [v20](a25, a26, a27) {
    },
    [v21]: v23,
};
v22.reverse();
const v40 = [3.0];
[-9.980181287646149];
[v40];
const v45 = new Int32Array(131);
const v48 = new BigInt64Array(2);
new Float64Array(3658);
v45 & true;
const t42 = "d";
t42[4] >>= 3.0;
Float64Array & -9.980181287646149;
v48[Symbol.replace];
let v61 = 18731;
const v64 = 3.0 % 4294967295;
const v65 = ++v61;
Math.imul(v61, v61);
v64 - 4294967295;
v65 >>> v64;
