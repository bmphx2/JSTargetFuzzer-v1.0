function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -57420n;
}
const v7 = new F3(-57420n, 385986419n);
const v8 = new F3(515630486n, -57420n);
const v9 = new F3(385986419n, 385986419n);
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v8;
    this.a = a15;
}
new F10(515630486n, v9, v9, v7);
const v17 = new F10(515630486n, v7, v8, v8);
new F10(-57420n, v7, v8, v9);
v8[v17];
const v21 = Symbol.iterator;
const o30 = {
    [v21]() {
        let v23 = 10;
        const o29 = {
            next() {
                v23--;
                const v27 = v23 == 0;
                const o28 = {
                    "done": v27,
                    "value": v23,
                };
                return o28;
            },
        };
        return o29;
    },
};
