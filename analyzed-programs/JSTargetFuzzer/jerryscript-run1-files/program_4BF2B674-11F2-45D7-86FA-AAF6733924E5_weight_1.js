function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -19974;
    this.b = -19974;
}
new F0();
new F0();
new F0();
function f9() {
    return F0;
}
const t11 = "JwA8w";
t11[268435439] = F0;
const v15 = Symbol.iterator;
const o24 = {
    [v15]() {
        let v17 = 10;
        const o23 = {
            next() {
                v17--;
                const v21 = v17 == 0;
                const o22 = {
                    "done": v21,
                    "value": v17,
                };
                return o22;
            },
        };
        return o23;
    },
};
/((\xed\xa0\x80))\x02/gyisum;
