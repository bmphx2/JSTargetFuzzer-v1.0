new Float32Array(724);
new Int16Array(724);
new Uint16Array(5);
new Int16Array(512);
new BigInt64Array(4096);
new BigUint64Array(3498);
const v25 = new Uint16Array();
const v27 = new Uint8Array(v25, v25);
v27.byteLength;
v27.byteOffset;
v27.__proto__;
with (Float32Array) {
    try { a(a, a); } catch (e) {}
}
const v34 = Symbol.iterator;
const o43 = {
    [v34]() {
        let v36 = 10;
        const o42 = {
            next() {
                v36--;
                const v40 = v36 == 0;
                const o41 = {
                    "done": v40,
                    "value": v36,
                };
                return o41;
            },
        };
        return o42;
    },
};
