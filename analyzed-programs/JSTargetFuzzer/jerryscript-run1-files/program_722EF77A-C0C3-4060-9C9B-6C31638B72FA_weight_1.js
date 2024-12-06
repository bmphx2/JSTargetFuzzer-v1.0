const v2 = new Int16Array(1273);
let [] = v2;
try { Int16Array(1273); } catch (e) {}
[Infinity,-3.0];
[-1.5330695245155503,4.0,-2.087388208872869,-7.198244903129892,1.7976931348623157e+308];
const v7 = [-1.262865247097929e+308];
new Uint8ClampedArray(1024);
const v12 = new Float32Array(3759);
function f13(a14, a15, a16) {
    const o34 = {
        toString(a18, a19) {
            this[3484] = typeof 3759 === "function";
            let v25;
            try { v25 = a18(WeakRef, a15, a16); } catch (e) {}
            try { v12.reduceRight(v25, v25); } catch (e) {}
            return a16;
        },
        p(a28, a29, a30, a31) {
            const v33 = Symbol.toStringTag;
            v2[v33] = v33;
            return 3759;
        },
    };
    return o34;
}
const v35 = f13(1024, 1273, 1024);
f13(1273, 3759, 1024);
f13(3759, 3759, 3759);
class C39 {
    constructor(a41, a42, a43, a44) {
        super.e = f13;
        Reflect % this;
        Object.defineProperty(v35, v35, { configurable: true, enumerable: true, get: f13, set: f13 });
        v7[a42] >>= a43;
        super.d = "6";
        const v49 = [a41,"6"];
        Reflect.apply(("g").padEnd, "g", v49);
    }
}
const v52 = new C39(7, 7, C39, C39);
function F53(a55, a56) {
    if (!new.target) { throw 'must be called with new'; }
    new a56(7);
}
new F53(v52, C39);
