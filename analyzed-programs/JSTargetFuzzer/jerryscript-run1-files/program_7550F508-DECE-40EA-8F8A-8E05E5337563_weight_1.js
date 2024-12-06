try {
const t0 = -1024;
t0(10000);
} catch (e) {}
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
function f30(a31, a32) {
    const o41 = {
        ...a32,
        __proto__: a32,
        valueOf() {
            super.f = this;
            return this;
        },
        "c": a32,
        "b": 1073741824,
        "e": a32,
        /*
        __proto__: a32,
        */
        [3](a35, a36, a37) {
            try {
                super.m(a32, a35, a37, a35);
            } catch(e39) {
            }
            const v40 = this[8];
            a31 **= -33749;
            return v40;
        },
    };
    return o41;
}
f30(10000, 512);
f30(-33749, f30);
f30(3, f30);
function F45(a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a48;
}
new F45(10000, 3);
const v50 = new F45(512, 22165);
new F45(1073741824, 3);
delete v50[1509295508];
Math.sinh(F45);
Math.sinh(10000);
const v62 = 127 * 3;
10000 >> -1000000000.0;
const v65 = new Uint32Array();
function f66() {
    return f66;
}
v65.reduce(f66, 16n);
Math.atan(v62);
