function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -256;
    this.f = -256;
}
const v3 = new F0();
const v4 = new F0();
new F0();
class C6 extends F0 {
    static [v3];
    static o(a8, a9) {
        const v11 = Symbol.iterator;
        const o20 = {
            [v11]() {
                let v13 = 10;
                const o19 = {
                    next() {
                        v13--;
                        const v17 = v13 == 0;
                        const o18 = {
                            "done": v17,
                            "value": v13,
                        };
                        return o18;
                    },
                };
                return o19;
            },
        };
        return a8;
    }
}
new C6();
const v22 = new C6();
const v23 = new C6();
[v4,C6];
class C25 {
    constructor(a27) {
        const o28 = {
        };
        o28 > a27;
        try { new C25(); } catch (e) {}
    }
}
new C25(C25);
const v32 = [v23,v22];
[v22,v4,v32,v32,v32];
parseFloat(8.270788417075302);
