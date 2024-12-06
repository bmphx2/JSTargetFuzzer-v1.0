function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 268435441;
    this.b = 268435441;
    this.a = 268435441;
}
new F0();
new F0();
const v6 = ([0.3963332363617482]).lastIndexOf();
const v7 = new F0();
const v16 = new WeakSet();
new Map();
[v7,F0,Map];
[4294967297,v7,F0,WeakSet,F0];
[v6,WeakSet];
try {
    new Date(4087n, v16);
} catch(e25) {
} finally {
}
const v30 = Symbol.iterator;
const o39 = {
    [v30]() {
        let v32 = 10;
        const o38 = {
            next() {
                v32--;
                const v36 = v32 == 0;
                const o37 = {
                    "done": v36,
                    "value": v32,
                };
                return o37;
            },
        };
        return o38;
    },
};
