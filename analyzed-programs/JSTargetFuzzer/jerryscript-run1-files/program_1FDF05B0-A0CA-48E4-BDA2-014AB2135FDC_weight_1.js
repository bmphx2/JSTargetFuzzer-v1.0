function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -17721;
    this.f = 12;
    const v11 = [1000000.0];
    for (let v12 = 0; v12 < 32; v12++) {
        v11["p" + v12] = v12;
    }
}
const v15 = new F6(15n, 41223n, 41223n);
new F6(15n, v15, -165375681n);
new F6(15n, v15, 41223n);
let v19 = new Set();
[NaN,-1000000000000.0,-5.0,1000000.0,9.886978311014694,-1e-15,-2.2250738585072014e-308,-4.387752325408359e+307,-2.0];
[-2.0,128039.47024574829];
[5.0,0.017459154149654377,29175.29433152266,-352.4312036001345,-854.7576037442244,5.0,-7.718970895953845e+307];
new Int16Array(255);
const v28 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f32(a33, a34) {
    const o47 = {
        174: a33,
        "c": v28,
        65536: a33,
        "e": v28,
        set f(a36) {
            try { a36(Int16Array, a36, a36, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o47;
}
f32(5, 255);
const v49 = f32(255, 257);
const v50 = -Infinity;
v19++;
try { v28.values(); } catch (e) {}
const v55 = Symbol.iterator;
const o64 = {
    [v55]() {
        let v57 = 10;
        const o63 = {
            [f32]: Symbol,
            __proto__: v55,
            [-165375681n]: this,
            "f": v19,
            ...Symbol,
            next() {
                v57--;
                const v61 = v57 == 0;
                const o62 = {
                    "done": v61,
                    "value": v57,
                };
                return o62;
            },
        };
        return o63;
    },
};
const o69 = {
    "g": 255,
    valueOf(a67) {
        super.getOwnPropertyDescriptors(this, -1033928124, 255, v50);
        return a67;
    },
};
let v73 = f32(3.0, v55);
v73 >>= v73;
f32(257, 255);
const v75 = new Uint8Array(257, 257, 255);
let v76;
try { v76 = v75.includes(v75); } catch (e) {}
Object.defineProperty(v49, 257, { enumerable: true, get: f32 });
for (let v77 = 0; v77 < 32; v77++) {
    v28["p" + v77] = v77;
}
v28[3];
try { v76["p"](Int16Array); } catch (e) {}
