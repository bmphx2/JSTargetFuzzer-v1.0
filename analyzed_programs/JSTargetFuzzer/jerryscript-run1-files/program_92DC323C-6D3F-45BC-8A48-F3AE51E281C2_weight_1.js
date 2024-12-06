function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this.h = f0;
    this.g = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f9(a10, a11) {
    const o20 = {
        get g() {
            Object.defineProperty(v4, 5, { configurable: true, enumerable: true, get: f0, set: f0 });
            const v13 = f0(a10, a10, ..."m", f0, a10, this);
            [v13,[v13],a10,v13,a10];
            [v13,v13];
            return F1;
        },
        "d": a11,
        10: a11,
        __proto__: "toString",
        ["n"]: v5,
    };
    return o20;
}
const v21 = f9(v5, v5);
f9(v3, v4);
f9(v4, v4);
new Set();
new Uint8Array(1);
new Date("a");
const v34 = new Uint16Array();
const o35 = {
};
new Proxy(v34, o35);
new Uint8Array(v21);
Array.isArray(1808021206);
class C43 {
    constructor(a45, a46) {
        function f47() {
            const o51 = {
                p(a49, a50) {
                    return f47;
                },
            };
            return f47;
        }
    }
    /*
    constructor(a53, a54) {
    }
    */
}
new Int16Array(512);
const v62 = [[4,536870889,536870889],-4096];
const v63 = [v62,4];
for (const v64 in o35) {
    break;
}
{
}
new BigInt64Array(0);
new Float32Array(4);
new BigUint64Array(129);
let v74 = 10;
for (; v74--;) {
    v62[252] = v62;
    -4096 << v74;
}
try { v63.values(); } catch (e) {}
