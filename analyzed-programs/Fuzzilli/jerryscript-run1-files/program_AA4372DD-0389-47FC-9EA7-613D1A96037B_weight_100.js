function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 1000;
    this.h = a6;
    this.f = a5;
}
const v7 = new F3(268435439, 1000);
const v8 = new F3(268435439, 14);
new F3(v8, 14);
[14,268435439,v8];
[1000,v7];
[v7,v7,v8];
class C13 {
    static [v8];
    static {
        delete v8?.f;
        const o18 = {
            "maxByteLength": 268435440,
        };
        const v20 = new ArrayBuffer(4090, o18);
        new Uint16Array(v20);
    }
    6;
}
new C13();
new C13();
new C13();
new WeakMap();
const v32 = Symbol.iterator;
const o41 = {
    [v32]() {
        let v34 = 10;
        const o40 = {
            next() {
                v34--;
                const v38 = v34 == 0;
                const o39 = {
                    "done": v38,
                    "value": v34,
                };
                return o39;
            },
        };
        return o40;
    },
};
