function f3() {
    return 40679;
}
class C4 extends f3 {
    set b(a6) {
        let v7;
        try {
        const t0 = 40679;
        v7 = t0(a6);
        } catch (e) {}
        v7 = v7;
        Symbol.iterator;
        const o18 = {
            [C4]() {
                let v11 = 10;
                const o17 = {
                    next() {
                        v11--;
                        const v15 = v11 == 0;
                        const o16 = {
                            "done": v15,
                            "value": v11,
                        };
                        return o16;
                    },
                };
                return o17;
            },
        };
    }
}
const v19 = new C4();
const v20 = new C4();
const v21 = new C4();
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v21;
    this.b = v19;
}
new F22(v21, -1203018010, v19, -1203018010);
new F22(C4, -29743, v20, -29743);
new F22(v20, -29743, v19, -1203018010);
([-2.4854739471653904,0.2907255806360177,-5.689185199837803,0.34431548197033923,1000000000.0,2.220446049250313e-16,7.9180446268630895,-1.7865780343190856e+307,38.014207864445325]).indexOf(2.220446049250313e-16);
