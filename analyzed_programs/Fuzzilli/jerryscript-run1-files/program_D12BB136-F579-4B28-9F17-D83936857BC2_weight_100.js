let v0 = 13;
let v1 = -11;
class C3 {
    [v1];
    static {
        v0 = v1;
        const v6 = Symbol.unscopables;
        this[v6] = v6;
        try { new v0(v6, v0, v6); } catch (e) {}
    }
    p(a9) {
        this[Symbol.unscopables];
        return 4294967297;
    }
}
const v16 = new C3();
const v17 = new C3();
const v18 = new C3();
new Uint32Array(127);
const v24 = new Int16Array(12);
const v27 = new BigUint64Array(1116);
v18.g += 12;
v1 &&= v0;
let v28;
try { v28 = v24.findIndex(v1, v17); } catch (e) {}
v16.b = v27;
const v29 = v28;
try { v17.p(); } catch (e) {}
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
