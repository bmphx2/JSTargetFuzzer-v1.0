const v3 = new Uint32Array(0);
const v6 = new Uint16Array(255);
const v9 = false || v3;
try { new Uint32Array(...Uint16Array, Uint16Array, v9, false, Uint16Array, v9); } catch (e) {}
let {"byteLength":v11,} = v6;
const v13 = Symbol.iterator;
const o22 = {
    [v13]() {
        let v15 = 10;
        const o21 = {
            next() {
                v15--;
                const v19 = v15 == 0;
                const o20 = {
                    "done": v19,
                    "value": v15,
                };
                return o20;
            },
        };
        return o21;
    },
};
new Int16Array(7);
new Uint32Array(19);
const v29 = `
    o22.length = 255;
    o22[4294967296] = 255;
`;
eval(v29);
new Int8Array(127);
new Uint8ClampedArray(4);
new ArrayBuffer();
const v40 = new Float32Array();
const v43 = new RegExp(3);
v40[v43];
