function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.d = a5;
    this.b = a5;
}
const v7 = new F3(5, 37950);
const v8 = new F3(5, 268435440);
let v9 = new F3(268435440, 37950);
const v16 = new Date();
const t9 = Date("toString");
t9[v7] = 512;
v9 += v16;
Object.defineProperty(v16, "b", { get: Date, set: Date });
const v19 = Symbol.iterator;
const o28 = {
    [v19]() {
        let v21 = 10;
        const o27 = {
            next() {
                v21--;
                const v25 = v21 == 0;
                const o26 = {
                    "done": v25,
                    "value": v21,
                };
                return o26;
            },
        };
        return o27;
    },
};
let v29 = 0;
for (let i = 0; i < 5; i++) {
    const v30 = v16.setMonth(v29);
    v29++;
    v30 instanceof Date;
    new F3(v9, v8);
    try { v30.toJSON(); } catch (e) {}
    new Uint8Array(0);
    new Int16Array(9);
    new Float32Array(4096);
}
new BigInt64Array(512);
new Float32Array(257);
new BigInt64Array(255);
const v53 = new Uint32Array(181);
let v55 = BigUint64Array;
let v56 = new v55(1);
let v57 = 253;
[v57,,v55,v56] = v53;
try { v55["abs"](181, v57, v55); } catch (e) {}
new Uint16Array(v57);
for (let i70 = 0; i70 < 2; i70++) {
    const v76 = new Function("x");
    Math.hypot(v76);
    const v81 = !i70;
    const v82 = v81 ** v76;
    let v83 = v81 / v76;
    --v83;
    v82 || 5.178937884576388e+307;
    v76.name;
}
Function();
