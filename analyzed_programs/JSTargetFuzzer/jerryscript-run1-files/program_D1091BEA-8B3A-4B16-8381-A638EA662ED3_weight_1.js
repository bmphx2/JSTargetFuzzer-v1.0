const v2 = new Array(2947);
const o4 = {
    "deleteProperty": Array,
};
const v6 = new Proxy(v2, o4);
new Float32Array(1116);
new Float64Array(64);
const v13 = Symbol.iterator;
let o22 = {
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
new Int16Array(1116);
function f27() {
    return 2947;
}
o22 >>= o4;
~v6;
Symbol().valueOf();
