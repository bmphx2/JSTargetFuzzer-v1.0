function f0() {
}
const v3 = new Float32Array(11);
const v6 = new Int16Array(129);
const v9 = new Uint8Array(127);
for (let v12 = 0; v12 < 95; v12++) {
    try { v6.some(v12, ...v3, ...f0, v12); } catch (e) {}
}
delete v9[268435441];
const o15 = {
    "apply": f0,
    "construct": f0,
    "deleteProperty": f0,
    "getOwnPropertyDescriptor": f0,
    "ownKeys": f0,
};
const v17 = new Proxy(v9, o15);
const v18 = new Uint16Array(978);
new Uint8Array(3113);
new Int32Array(3281);
let v26 = 411.6748089872142;
const o27 = {
    __proto__: v18,
    "f": f0,
    ...v9,
};
const v28 = v26++;
try { f0(Uint16Array, v28, f0, v17, ...v28); } catch (e) {}
const v31 = Symbol.iterator;
const o40 = {
    [v31]() {
        let v33 = 10;
        const o39 = {
            next() {
                v33--;
                const v37 = v33 == 0;
                const o38 = {
                    "done": v37,
                    "value": v33,
                };
                return o38;
            },
        };
        return o39;
    },
};
Math.hypot(Uint32Array, v26 - ~-10, -Infinity, v28);
