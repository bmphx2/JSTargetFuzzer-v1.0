class C3 {
    o(a5) {
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
        return a5;
    }
}
const v17 = new C3();
new C3();
new C3();
class C20 extends C3 {
    static m(a22, a23) {
        2 >= C3;
        const o28 = {
        };
        new Proxy(a23, o28);
        return 1000000.0;
    }
}
const v31 = new C20();
new C20();
const v33 = new C20();
let v34 = v31[502670197];
v34 /= C20;
const v35 = [v33,v17,v33,v33,-19970.820004320005];
const v36 = [v35,v35,C20];
[v35];
v36.length = v34;
function f38() {
    return 1000000.0;
}
v33[8] = -19970.820004320005;
