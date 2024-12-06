function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -4294967297;
}
new F0();
new F0();
new F0();
new Float64Array(5);
new BigUint64Array(3135);
new Uint16Array(0);
[256,-4294967297];
[-65535,5,2147483648,26599,-4096];
[13,1323141090,4294967296,-3,2091964498,268435439,65535,64];
const v19 = Symbol.iterator;
const o28 = {
    [v19]() {
        let v21 = 10;
        const o27 = {
            next() {
                v21--;
                const v25 = v21 == 0;
                const o26 = {
                    "done": v25,
                    "value": v21,
                };
                return o26;
            },
        };
        return o27;
    },
};
