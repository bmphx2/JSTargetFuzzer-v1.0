const v1 = [-9223372036854775808,-268435456,9007199254740992,257300284,13,5];
const v2 = [6,4294967295,3,-10,268435439,8,-754514755,-1,-2147483647];
const v3 = [0,-51907,-34225,-4294967297,1,4,9,-1369037481,-575766513,-2147483647];
const v4 = [v1];
[v4,null];
[v4,v2];
class C7 {
    toString(a9, a10) {
        (a9 = v3).length % a10;
        const v14 = Symbol.iterator;
        const o23 = {
            [v14]() {
                let v16 = 10;
                const o22 = {
                    next() {
                        v16--;
                        const v20 = v16 == 0;
                        const o21 = {
                            "done": v20,
                            "value": v16,
                        };
                        return o21;
                    },
                };
                return o22;
            },
        };
        return null;
    }
}
new C7();
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
}
const v32 = new F26();
"function" == v32;
new C7();
new C7();
function F37(a39, a40, a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
}
const v43 = new F37();
"function" == v43;
