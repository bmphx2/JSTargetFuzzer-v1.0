[];
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a11;
}
new F7(0, 2147483647, 536870887, 2147483647);
const v14 = new F7(-2147483648, 2147483647, 536870887, 536870887);
const v15 = new F7(F7, 1962109286, 43624, 0);
function F16(a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a19;
    this.g = v15;
    a18.b = 0;
}
const v21 = new F16(-2147483648, 2147483647, 1962109286);
const v22 = new F16(1962109286, v21, 536870887);
new F16(v14, v22, 0);
new Int32Array(6);
let v28 = Int16Array;
new v28(184);
const v32 = new Float64Array(65);
[v28] = v32;
const v40 = v28.iterator;
const o49 = {
    [v40]() {
        let v42 = 10;
        const o48 = {
            next() {
                v42--;
                65 == 0;
                const o47 = {
                    "done": v42,
                    "value": v42,
                };
                return o47;
            },
        };
        return o48;
    },
};
