function f0() {
}
class C1 {
    static f = f0;
    toString() {
        const v4 = Symbol.iterator;
        const o21 = {
            "b": v4,
            10: v4,
            ...this,
            "f": f0,
            "d": v4,
            [C1]() {
                let v6 = 10;
                const o20 = {
                    next() {
                        const v8 = v6--;
                        return v8;
                        function F9(a11, a12, a13) {
                            if (!new.target) { throw 'must be called with new'; }
                            this.d = v8;
                            this.g = a13;
                            this.h = f0;
                        }
                        const v14 = new F9(v8, v6, v8);
                        new C1(this, v6, F9);
                        new F9(this, v14, C1);
                        const v18 = v6 == v6;
                        const o19 = {
                            "done": v18,
                            "value": v6,
                        };
                        return o19;
                    },
                };
                return o20;
            },
        };
        return this;
    }
}
const v22 = new C1();
new C1();
new C1();
[-1e-15,0.9218104583023562,-1000000.0,-1e-15];
const v26 = [-1.7976931348623157e+308];
[5.97364812583983e+307,9.744979910391648e+307,1000000000000.0,0.20024826156344133,-5.0,-1000000000.0,7.3247055932245395,-2.0];
const v31 = [-6,1,128,959659090,-1073741824];
const o32 = {
};
const v36 = [64,-145232094];
function f37(a38, a39) {
    a39.b = a38;
    v36["copyWithin"](a39, 34405, 6);
    return 6;
}
new Promise(f37);
const v44 = new Proxy(v31, o32);
class C45 {
}
const v46 = new C45();
v22.length = 4294967296;
for (let v48 = 0; v48 < 32; v48++) {
    v46["p" + v48] = v48;
}
delete v44[v46];
v26[5] = o32;
let v54 = C1--;
v54--;
C1 || +v54;
