function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 2;
    this.h = 2;
}
new F0();
new F0();
new F0();
let v10 = Uint8Array;
new v10(1);
const v14 = new Uint32Array(127);
const v17 = new Int8Array(1);
new Int8Array(v17, 1);
const v20 = Symbol.iterator;
new Int32Array(RegExp.bind("2147483647", [-8,4294967295,148900462]));
const o41 = {
    [v20]() {
        let v28 = 10;
        const o40 = {
            next() {
                v28--;
                const v32 = v28 == 0;
                const o39 = {
                    "done": v32,
                    "value": v28,
                    ...v14,
                    m(a34, a35, a36) {
                        try {
                            super.deref(a36, this);
                        } catch(e38) {
                        }
                        return v28;
                    },
                };
                return o39;
            },
        };
        return o40;
    },
};
function f42() {
}
new Uint8Array(0);
+null;
new Uint8Array(1311);
("-65537").indexOf(9007199254740991, 9007199254740991);
const v62 = [];
v62.toLocaleString(v62, v62);
RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v68 = new Int32Array(127);
v10 /= v68;
new WeakSet();
-354821398 % (1 | 1);
-1 < -4294967297n;
new BigInt64Array(2);
new Int8Array(16);
new Uint16Array(2262);
new Uint32Array(1000);
new Int16Array(4096);
new Uint16Array(257);
const v106 = new WeakSet();
try { v106.add(); } catch (e) {}
const o108 = {
};
new Uint16Array(2817);
([5]).reverse();
