new Date();
this << Float32Array;
new Int32Array(6);
let v21 = Int16Array;
new v21(184);
const v25 = new Float64Array(65);
[v21] = v25;
const v32 = new Uint16Array(3560);
v32[8]["valueOf"]();
const v39 = Symbol.iterator;
const o48 = {
    [v39]() {
        let v41 = 10;
        const o47 = {
            next() {
                v41--;
                const v45 = v41 == 0;
                const o46 = {
                    "done": v45,
                    "value": v41,
                };
                return o46;
            },
        };
        return o47;
    },
};
