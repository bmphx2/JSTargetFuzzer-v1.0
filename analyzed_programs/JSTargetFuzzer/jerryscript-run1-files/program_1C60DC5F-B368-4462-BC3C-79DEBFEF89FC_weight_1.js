const v1 = [-9223372036854775808,-268435456,9007199254740992,257300284,13,5];
const v2 = [6,4294967295,3,-10,268435439,8,-754514755,-1,-2147483647];
const v3 = [0,-51907,-34225,-4294967297,1,4,9,-1369037481,-575766513,-2147483647];
/[^j[\c_]*]/sm;
const v5 = [v1];
[v5,null];
[v5,v2];
class C8 {
    toString(a10, a11) {
        (a10 = v3).length % a11;
        const v15 = Symbol.iterator;
        const o24 = {
            [v15]() {
                let v17 = 10;
                const o23 = {
                    next() {
                        v17--;
                        const v21 = v17 == 0;
                        const o22 = {
                            "done": v21,
                            "value": v17,
                        };
                        return o22;
                    },
                };
                return o23;
            },
        };
        for (let v25 = 0; v25 < 32; v25++) {
            o24["p" + v25] = v25;
        }
        return null;
    }
}
new C8();
for (let v30 = 0; v30 < 49; v30++) {
}
function F34(a36, a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
}
const v40 = new F34();
"function" == v40;
new C8();
new C8();
function F45(a47, a48, a49, a50) {
    if (!new.target) { throw 'must be called with new'; }
}
const v51 = new F45();
"function" == v51;
