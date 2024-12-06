function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 2147483648;
    this.g = 2147483648;
    this.e = 2147483648;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o17 = {
        [-2]: v4,
        1459: f6,
        "g": v3,
        __proto__: a7,
        [a8]: a7,
        "a": a8,
        get g() {
            const v10 = v5 - this;
            const o11 = {
                "d": a8,
                __proto__: this,
                "a": f6,
                5: f6,
                "g": v10,
            };
            new Proxy(a8, o11);
            return o11;
        },
        "e": a8,
        valueOf() {
            try { this["replace"](); } catch (e) {}
            a7.__proto__ = a8;
            return a8;
        },
        3: a7,
        [v5]: v5,
        "a": F0,
    };
    return o17;
}
const v18 = f6(v5, v3);
const v19 = f6(v5, v4);
F0 ** v18;
Object.defineProperty(Math, "h", { configurable: true, get: f6, set: f6 });
let v22 = v19[-1];
v22++;
f6(v4, v5);
new Float64Array(6);
6 * 9007199254740990;
const v33 = [-9223372036854775807,-1572874415,268435440,9223372036854775807,-2147169615,7026,-14,127];
class C34 {
    constructor(a36, a37) {
        a36[65537] /= a37;
        4294967296 | v33;
    }
}
new BigUint64Array(2050);
new BigInt64Array(5);
const o56 = {
    valueOf() {
        const v46 = Symbol.iterator;
        const o55 = {
            [v46]() {
                let v48 = 10;
                const o54 = {
                    next() {
                        v48--;
                        const v52 = v48 == 0;
                        const o53 = {
                            "done": v52,
                            "value": v48,
                        };
                        return o53;
                    },
                };
                return o54;
            },
        };
        return 6;
    },
};
function f60() {
    return 2n;
}
const t85 = 16;
t85.toString = f60;
const t87 = f60();
const v68 = delete t87[f60];
function f69() {
    return f60;
}
function F70(a72, a73) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a73;
}
const o75 = {
    "a": "0UMeB",
};
128 >= [];
9007199254740990 + 536870912;
const v86 = new Uint8Array(2);
let v88 = Float32Array;
const v89 = new v88(127);
new Int32Array(243, 243, v68);
new gc();
new Number(127);
new BigInt64Array(6);
new Uint32Array(0);
v88 += v88;
let v104;
try { v104 = gc(v86); } catch (e) {}
const v106 = [v104];
Reflect.apply(v89.sort, v89, v106);
try { v106.flat(); } catch (e) {}
[498897049];
[-57150070,-2147483647,-11,-19440739,257,-65536,5,-1371366486,-5,-4294967296];
[-9007199254740990,-530113451,4,-14,-45856,2];
