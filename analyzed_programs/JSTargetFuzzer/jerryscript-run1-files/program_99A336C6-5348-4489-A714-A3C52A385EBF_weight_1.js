function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
    this.c = f0;
}
new F1();
new F1();
new F1();
new Int32Array(6);
let v19 = Int16Array;
new v19(184);
const v23 = new Float64Array(65);
[v19] = v23;
const v31 = Symbol.iterator;
const o42 = {
    [v31]() {
        let v33 = 10;
        const o41 = {
            next() {
                v33--;
                const v37 = v33 == 0;
                const o38 = {
                    "done": v37,
                    "value": v33,
                };
                Math.max();
                return o38;
            },
        };
        return o41;
    },
};
