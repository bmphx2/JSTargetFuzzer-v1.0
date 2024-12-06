class C3 {
    static get b() {
        const v6 = this[this] - 0;
        const v8 = Symbol.iterator;
        const o17 = {
            [v8]() {
                let v10 = 10;
                const o16 = {
                    next() {
                        v10--;
                        const v14 = v10 == 0;
                        const o15 = {
                            "done": v14,
                            "value": v10,
                        };
                        return o15;
                    },
                };
                return o16;
            },
        };
        return v6;
    }
}
new C3();
new C3();
new C3();
function f30() {
    return 2n;
}
let v32 = 16;
v32.toString = f30;
const t32 = f30();
const v38 = delete t32[f30];
function f39() {
    return f30;
}
const v45 = new Uint8Array(2);
v32 = -2147483647;
function F46(a48, a49) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a49;
}
new F46(536870912, 65537n);
new F46(9007199254740992, v38);
new F46(2, 942768285n);
let v54 = Float32Array;
const v55 = new v54(127);
new Int32Array(243, 243, v38);
new gc();
new Number(127);
new BigInt64Array(3886);
new Uint32Array(0);
v54 += v54;
let v70;
try { v70 = gc(v45); } catch (e) {}
const v72 = [v70];
Reflect.apply(v55.sort, v55, v72);
try { v72.flat(); } catch (e) {}
[498897049];
[-57150070,-2147483647,-11,-19440739,257,-65536,5,-1371366486,-5,-4294967296];
[-9007199254740990,-530113451,4,-14,-45856,2];
