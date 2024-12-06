function f0() {
}
class C1 {
    static f = f0;
    toString() {
        const v4 = Symbol.iterator;
        const o13 = {
            [v4]() {
                let v6 = 10;
                const o12 = {
                    next() {
                        v6--;
                        const v10 = v6 == 0;
                        const o11 = {
                            "done": v10,
                            "value": v6,
                        };
                        return o11;
                    },
                };
                return o12;
            },
        };
        return this;
    }
}
new C1();
new C1();
new C1();
[-1e-15,0.9218104583023562,-1000000.0,-1e-15];
const v18 = [-1.7976931348623157e+308];
[5.97364812583983e+307,9.744979910391648e+307,1000000000000.0,0.20024826156344133,-5.0,-1000000000.0,7.3247055932245395,-2.0];
const v23 = [-6,1,128,959659090,-1073741824];
const o24 = {
};
const v26 = new Proxy(v23, o24);
class C27 {
}
const v28 = new C27();
delete v26[v28];
v18[5] = o24;
let v32 = C1--;
v32--;
C1 || +v32;
