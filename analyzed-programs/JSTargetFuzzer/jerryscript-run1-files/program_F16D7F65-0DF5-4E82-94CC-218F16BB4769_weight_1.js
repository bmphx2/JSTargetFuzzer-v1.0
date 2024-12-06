function F0() {
    if (!new.target) { throw 'must be called with new'; }
    F0.b = 3;
    F0.c = 3;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a11;
}
new F9(v4, -2147483649, 17510, v4);
const v16 = new F9(v5, -2147483649, 17510, v5);
new F9(v3, 14, -2147483649, v3);
const v18 = [5];
Symbol.iterator;
const o32 = {
    [v16]() {
        let v25 = 10;
        const o31 = {
            next() {
                v25--;
                const v29 = v25 == 0;
                const o30 = {
                    "done": v29,
                    "value": v25,
                };
                return o30;
            },
        };
        return o31;
    },
};
try { v18.flatMap(v18); } catch (e) {}
