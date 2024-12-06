const v2 = new Int16Array(1);
new Uint32Array(9);
new Float32Array(2099);
const v12 = Symbol.iterator;
const o21 = {
    [v12]() {
        let v14 = 10;
        const o20 = {
            next() {
                v14--;
                const v18 = v14 == 0;
                const o19 = {
                    "done": v18,
                    "value": v14,
                };
                return o19;
            },
        };
        return o20;
    },
};
new Float32Array(257);
const v28 = new Float32Array(1302);
new Int8Array(129);
new Uint8Array();
const v35 = v2.__proto__;
const o36 = {
    6: Int16Array,
    "d": Float32Array,
    "a": v28,
};
try { Math.imul(v35); } catch (e) {}
