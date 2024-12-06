new WeakMap();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
}
const v6 = new F2(F2, F2);
new F2(WeakMap, WeakMap);
new F2(v6, WeakMap);
const v10 = [65535,8,-1130765156,39280];
[-9,-10];
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
}
new F12(F12, F12);
[-1.7976931348623157e+308,1000000.0,-1.0,-3.0,-1.7976931348623157e+308,-1000.0,-Infinity,-2.0,-0.12708546581147928] - 1.7976931348623157e+308;
const v20 = [127,-964434192,-4294967296,4096,-2147483649];
function f21() {
    return v20;
}
class C22 {
    m(a24, a25, a26, a27) {
        let v28;
        try { v28 = new a27(v10, v20, a26, this); } catch (e) {}
        function f29() {
            return v28;
        }
        [546.5677108633865];
        [0.16800021320158842,240.35756480304872,1e-15];
        [0.13146086706323512,1000.0,Infinity,725.2821755821817,-1000000000.0,2.0,1.3306399378635208e+308];
        return a25;
    }
    static [WeakMap];
    c;
}
new C22();
new C22();
new C22();
new Int32Array(6);
let v40 = Int16Array;
new v40(184);
const v44 = new Float64Array(65);
[v40] = v44;
const v52 = Symbol.iterator;
const o61 = {
    [v52]() {
        let v54 = 10;
        const o60 = {
            next() {
                v54--;
                const v58 = v54 == 0;
                const o59 = {
                    "done": v58,
                    "value": v54,
                };
                return o59;
            },
        };
        return o60;
    },
};
