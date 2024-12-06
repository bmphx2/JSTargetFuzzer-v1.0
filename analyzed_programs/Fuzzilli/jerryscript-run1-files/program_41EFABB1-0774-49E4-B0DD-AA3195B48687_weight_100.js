function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 2;
    this.a = 2;
    this.h = 2;
}
const v3 = new F0();
new F0();
const v5 = new F0();
new Uint32Array(10);
new Uint16Array(863);
new Uint16Array(4095);
v5 | v3;
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
