function f0() {
    let v2 = 1;
    const v3 = -Infinity;
    const o12 = {
        get d() {
            v2 = 268435456;
            this.valueOf = this;
            const v5 = this[214];
            this.valueOf = v5;
            function F6(a8) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a8;
                this.d = v2;
            }
            new F6(v5);
            new F6(v5);
            const v11 = new F6(this);
            return v11;
        },
        [v3]: 268435456,
    };
    return o12;
}
const v13 = f0();
const v14 = f0();
const v15 = f0();
function f16(a17) {
    const o28 = {
        __proto__: v15,
        "a": a17,
        "c": v13,
        "e": f0,
        ...v14,
        "b": v13,
        "f": v14,
        ...v13,
        get h() {
            [] = this;
            this.f;
            Object.defineProperty(BigInt, 268435441, { configurable: true, enumerable: true, get: BigInt });
            const o23 = {
                "maxByteLength": 138,
            };
            const v25 = new SharedArrayBuffer(138, o23);
            new Int16Array(v25);
            return BigInt;
        },
    };
    return o28;
}
f16(v14);
f16(v13);
f16(v13);
new WeakSet();
new Int16Array(1);
const v38 = new Float64Array();
v38.reduceRight(Int16Array, undefined);
[6,1];
[3,65634441,10,1,-9223372036854775807];
[637271230,4096,1073741824];
function f47() {
}
try { Reflect.preventExtensions(); } catch (e) {}
const v59 = new BigInt64Array([-6n]);
for (const v60 of v59) {
}
new Uint8Array(0);
let v68 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v70 = new Int32Array(127);
v68 /= v70;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
