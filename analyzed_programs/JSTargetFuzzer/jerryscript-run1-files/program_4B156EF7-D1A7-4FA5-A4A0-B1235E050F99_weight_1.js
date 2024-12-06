function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1520435289;
    this.f = 1520435289;
}
new F0();
new F0();
new F0();
new Int16Array(2);
new Int16Array(7);
new Uint16Array(13);
const v18 = [-1009314961,-2147483648,-24,257,-281449773];
const t11 = "h";
t11.length *= -15;
const v23 = Symbol.iterator;
const o32 = {
    [v23]() {
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
function F34() {
    if (!new.target) { throw 'must be called with new'; }
    const v36 = `
        class C37 {
        }
    `;
    eval(v36);
    v18.copyWithin(-3);
}
new F34();
