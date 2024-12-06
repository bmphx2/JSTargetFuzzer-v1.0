let v0 = "number";
let v1 = "valueOf";
class C3 {
    constructor(a5, a6) {
        function F7(a9, a10, a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = a12;
        }
        const v13 = new F7(a5, this, a6, v0);
        const v14 = new F7(v0, v13, "NaN", a5);
        new F7("NaN", v0, a6, v14);
    }
    set d(a17) {
        function f18(a19, a20) {
            v1 = a20;
            function f22(a23, a24) {
                try { a23(a23); } catch (e) {}
                const v26 = [-9223372036854775807,2,268435439,0,0,55990];
                const o27 = {
                };
                const v29 = new Proxy(v26, o27);
                v29 % 1000000000000.0;
                return a24;
            }
            v0 = v1;
            v1 ** a20;
            const t24 = "NaN";
            return delete t24[a19];
        }
        f18(a17, v0);
    }
}
const v34 = new C3("NaN", "NaN");
new C3(v1, v1);
new C3("NaN", v0);
[1023841039,-128,6,38750,16,64];
const v38 = [-5925,0,-2,-8258,-6,256,10,-1524383325,14];
[-47229,841056567];
const v43 = [v38,v1];
try { v38.keys(); } catch (e) {}
const o45 = {
};
new Proxy(v34, o45);
try { v43.values(); } catch (e) {}
Object.isFrozen(Object);
function f52() {
    return 202.6772913109303;
}
function f55(a56) {
    const o64 = {
        "a": "setBigInt64",
        [v0](a58, a59, a60) {
            this.a;
            new f55(a58);
            return Infinity;
        },
    };
    new Int8Array(512);
    ("p")["split"]();
    return o64;
}
const v71 = f55("setBigInt64");
const o72 = {
    "get": f55,
    "set": f55,
};
const v74 = new Proxy(v71, o72);
v74.a *= -1000000000000.0;
