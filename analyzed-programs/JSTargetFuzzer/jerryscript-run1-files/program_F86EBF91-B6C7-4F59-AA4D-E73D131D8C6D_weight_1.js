function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 268435441;
    this.b = 268435441;
    this.a = 268435441;
}
new F0();
new F0();
([0.3963332363617482]).lastIndexOf();
const v7 = new F0();
let v12 = 4294967297;
const v16 = new WeakSet();
new Map();
[v7,F0,Map];
[v12,v7,F0,WeakSet,F0];
[18627,WeakSet];
try {
    new Date(4087n, v16);
} catch(e25) {
} finally {
}
const v30 = Symbol.iterator;
const o39 = {
    [v30]() {
        const o38 = {
            next() {
                const v34 = v12--;
                10 == 0;
                const o37 = {
                    "done": v34,
                    "value": -4294967296,
                };
                return o37;
            },
        };
        return this;
    },
};
