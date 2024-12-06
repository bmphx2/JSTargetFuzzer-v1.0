function f0() {
}
const v3 = new Float32Array(11);
const v6 = new Int16Array(129);
const v9 = new Uint8Array(127);
for (let v12 = 0; v12 < 95; v12++) {
    try { v6.some(v12, ...v3, ...f0, v12); } catch (e) {}
}
delete v9[268435441];
let o15 = {
    "apply": f0,
    "construct": f0,
    "deleteProperty": f0,
    "getOwnPropertyDescriptor": f0,
    "ownKeys": f0,
};
const v17 = new Proxy(v9, o15);
const v18 = new Uint16Array(978);
([[]]).includes();
new Uint8Array(3113);
new Int32Array(3281);
const o30 = {
    __proto__: v18,
    "f": f0,
    ...v9,
};
const v31 = o15++;
try { f0(Uint16Array, v31, f0, v17, ...v31); } catch (e) {}
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
Math.hypot(Uint32Array, 411.6748089872142 - ~-10, -Infinity, v31);
