new Uint32Array(4083);
new Uint8ClampedArray(3708);
const v8 = new Float32Array(3);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 3708;
}
new F9(4083, 4083);
const v14 = new F9(3, 4083);
new F9(4083, 4083);
const v18 = new Int32Array(6);
let v20 = Int16Array;
new v20(184);
const v24 = new Float64Array(65);
[v20] = v24;
const v32 = Symbol.iterator;
const o41 = {
    [v32]() {
        let v34 = 10;
        const o40 = {
            next() {
                v34--;
                const v38 = v34 == 0;
                const o39 = {
                    "done": v38,
                    "value": v34,
                };
                return o39;
            },
            1206: this,
            "g": v34,
            [-1]: v14,
            __proto__: v8,
            ...v18,
        };
        return o40;
    },
};
