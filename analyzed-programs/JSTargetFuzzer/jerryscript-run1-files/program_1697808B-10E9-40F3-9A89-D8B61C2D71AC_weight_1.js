const v0 = [39363,1,6,-1073741824,-6019,268435456,9223372036854775807,-1024];
const v1 = [37499];
const v2 = [-28064,-53625,-7,16821,-4294967296,2];
class C3 {
    #g = v0;
    p(a5, a6) {
        new Array(3);
        try {
            Array.#g <<= this;
        } catch(e10) {
        }
        return v2;
    }
    static [v2];
    static #f = v0;
}
const v11 = new C3();
const v12 = new C3();
const v13 = new C3();
function f14(a15, a16, a17, a18) {
    const o30 = {
        ...C3,
        "f": v13,
        [a15]: a17,
        "d": v0,
        __proto__: a16,
        1: v11,
        get a() {
            const v20 = this.d;
            function F21(a23, a24, a25, a26) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a26;
            }
            new F21(v13, a15, a17, a17);
            new F21(this, a16, a17, v0);
            new F21(v13, v2, v2, a16);
            return v20;
        },
    };
    return o30;
}
const v31 = f14(v2, v1, v13, v12);
f14(v0, v2, v12, f14(v1, v2, v13, v13));
[-256,-2147483649,256,65535,2147483649,512,39528,9,45353];
[512,-5,12,-12,-44464,-65536,3,58695];
[9,512];
v1[1];
for (const v41 in v12) {
    f14 != v41 ? f14 : v41;
    v0 == v31;
}
v2["pop"]();
