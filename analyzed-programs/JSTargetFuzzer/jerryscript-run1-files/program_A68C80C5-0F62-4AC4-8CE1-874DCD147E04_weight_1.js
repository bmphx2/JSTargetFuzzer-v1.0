function f0() {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1073741823;
}
f0();
[-35491,[1073741824,1073741823],-35491];
[-35491];
const v13 = Symbol.iterator;
const o22 = {
    [v13]() {
        let v15 = 10;
        const o21 = {
            next() {
                v15--;
                const v19 = v15 == 0;
                const o20 = {
                    "done": v19,
                    "value": v15,
                };
                return o20;
            },
        };
        return o21;
    },
};
new F4(F4, -35491);
new F4(1073741823, 1073741823);
new F4(1073741823, -35491);
resourceName(129);
