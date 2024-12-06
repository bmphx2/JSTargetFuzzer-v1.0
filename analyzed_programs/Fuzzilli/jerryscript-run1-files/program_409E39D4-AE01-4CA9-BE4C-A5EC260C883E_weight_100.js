const v2 = new Int16Array(1732);
new Float32Array(7);
const v8 = new Int32Array(1);
const v11 = new Uint16Array(1865);
const v14 = new Float64Array(2115);
const v17 = new BigUint64Array(3318);
v14[255] = 1;
let v18;
try { v18 = v2.includes(1865); } catch (e) {}
[Float32Array,v11,v8,v17["find"](v18)];
let v22 = [v14];
[Uint16Array,Float32Array];
v22 **= v18;
const v25 = Symbol.iterator;
const o34 = {
    [v25]() {
        let v27 = 10;
        const o33 = {
            next() {
                v27--;
                const v31 = v27 == 0;
                const o32 = {
                    "done": v31,
                    "value": v27,
                };
                return o32;
            },
        };
        return o33;
    },
};
