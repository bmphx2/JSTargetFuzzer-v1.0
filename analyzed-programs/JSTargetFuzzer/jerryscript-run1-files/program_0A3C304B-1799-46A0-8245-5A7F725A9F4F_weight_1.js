function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = this;
    this.a = f0;
    this.e = f0;
}
const v3 = new F1();
const v4 = new F1();
new F1();
const v7 = Symbol.iterator;
const o16 = {
    [v7]() {
        let v9 = 10;
        const o15 = {
            next() {
                v9--;
                const v13 = v9 == 0;
                const o14 = {
                    "done": v13,
                    "value": v9,
                };
                return o14;
            },
        };
        return o15;
    },
};
function F17(a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a19;
}
new F17(v4);
new F1(v4);
new F17(v3);
new WeakMap();
function F25() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 2147483647;
    this.a = 2147483647;
}
const o28 = {
};
new Proxy(F17, o28);
F25 >> o28;
new WeakMap();
const v33 = new F25();
new F25();
let v37 = -18699;
new WeakMap();
const v43 = v37++;
let v44;
try { v44 = v33.p(v43, v4); } catch (e) {}
[-1e-15,-1000000000.0,428.0824969867581,1.0,-2.220446049250313e-16,-1.0,-1000.0,0.12324916587929935,-1000000000.0,0.0];
const v46 = [Infinity,-1000000000.0,1000.0,1e-15,-352735.33367409173];
[-4.0,6.91763360867516,3.0,-1000000000000.0,1000000000000.0,-1e-15];
2n > v46 ? 2n : v43;
const v50 = v44;
const o54 = {
    "defineProperty": f0,
};
new Proxy(v3, o54);
