let v1 = -15;
class C3 {
    static get d() {
        function f5(a6) {
            const o7 = {
                "E": a6,
                ...a6,
                ...this,
            };
            return o7;
        }
        f5(this);
        f5(v1);
        f5(41.326951114327585);
        return f5;
    }
}
new C3(2.0, 41.326951114327585);
new C3();
const v13 = new C3();
try { C3(); } catch (e) {}
const v16 = C3[0];
v13.g = C3;
v13[1345];
Math.tanh(10 & v16);
const v23 = Math.atan(56547);
const v24 = Math.tanh(41.326951114327585);
v16 || 41.326951114327585;
C3.d;
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
const v44 = new Int8Array();
v1 >>= v23;
10 > v24 ? 10 : v24;
v44.copyWithin();
