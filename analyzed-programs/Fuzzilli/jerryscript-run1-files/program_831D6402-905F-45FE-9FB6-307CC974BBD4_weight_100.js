let v2 = -36084;
let v3 = 6;
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 55909;
    this.h = a8;
    this.b = a8;
}
let v11 = new F6(v2, F6, 1892105337);
const v12 = new F6(7, 1892105337, 55909);
const v13 = new F6(7, F6, 7);
function f14() {
    return 7;
}
function f15(a16, a17) {
    const o28 = {
        __proto__: v11,
        [v2](a19, a20) {
            a19[a20];
            a16 || 7;
            try {
                super.n(v12, a16);
            } catch(e24) {
            }
            return 7;
        },
        set e(a26) {
            let v25 = this;
            arguments[3] = v25;
            [v25,v2,,...v11] = arguments;
            v13.b = 1892105337;
            Object.defineProperty(v2, 10, { writable: true, configurable: true, set: f14 });
        },
    };
    return o28;
}
const v29 = f15(1892105337, v11);
const v30 = f15(7, v13);
f15(v2, v2);
try { new F6(7, v12, ...v30, v2, 1892105337); } catch (e) {}
v3 |= 7;
const o36 = {
    "apply": f14,
    "call": f14,
    "set": f15,
    "setPrototypeOf": f15,
};
new Proxy(v29, o36);
