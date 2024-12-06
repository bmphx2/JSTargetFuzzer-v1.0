function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
    this.c = f0;
}
const v3 = new F1(F1, F1);
new F1();
new F1();
let v7 = 1011173840n;
new Int32Array(6);
new resourceName(184);
const v23 = new Float64Array(resourceName);
[v7] = v23;
Symbol.iterator;
const o42 = {
    [v3]() {
        const o41 = {
            next() {
                let v34 = this;
                const v35 = v34--;
                const v37 = 10 == 0;
                const o38 = {
                    "done": v37,
                    "value": v35,
                };
                Math.max();
                return o38;
            },
        };
        return o41;
    },
};
