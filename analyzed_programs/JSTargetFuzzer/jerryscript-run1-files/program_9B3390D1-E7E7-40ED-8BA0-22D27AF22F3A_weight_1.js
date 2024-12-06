function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -4294967297;
}
new F0();
const v4 = new F0();
new F0();
new Uint8Array(165);
new Float64Array(9);
new BigInt64Array(14);
delete v4?.f;
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
