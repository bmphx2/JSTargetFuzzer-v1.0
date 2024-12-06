const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v0;
    this.d = v0;
    this.g = v0;
}
const v3 = new F1();
const v4 = new F1();
new F1();
const v6 = [-6.430505049946281e+307,4.0,0.07715909859246661,-2.0454755309876753e+307,-725.114723708082,1.0,5.222551759705549e+307,110958.6231110082,0.541290428394771];
const v7 = [1.9432348484072808,-184.38836520605423,6.447543864735199e+307,-Infinity,-1e-15,-1.0,3.054939432486572e+307,0.0];
const v8 = [524458.5686511984,1.0];
function f9(a10, a11) {
    const o26 = {
        [a10]: v3,
        "a": a11,
        [v0]: v4,
        ...a11,
        n(a13, a14, a15, a16) {
            try {
                super.create(a10, a14, a16);
            } catch(e18) {
            }
            a16 = a15;
            let v20 = 14;
            Math.tan(a11);
            const v22 = a10 / F1;
            v20 >>> F1;
            Math.atan2(v22, a11);
            v20--;
            return a14;
        },
    };
    return o26;
}
const v27 = f9(v7, F1);
const o40 = {
    get a() {
        const v29 = (a30, a31, a32, a33) => {
            function F34(a36, a37, a38, a39) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = a32;
            }
            return a33;
        };
        return v29;
    },
};
const v41 = f9(v7, v8);
f9(v0, v41);
function F43(a45, a46, a47) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v8;
    this.g = a45;
}
new F43(v6, v27, v0);
new F43(v6, v41, v8);
new F43(v6, v3, v6);
const v53 = new Uint32Array(181);
let v55 = BigUint64Array;
let v56 = new v55(1);
let v57 = 253;
[v57,,v55,v56] = v53;
try { v55["abs"](181, v57, v55); } catch (e) {}
new Uint16Array(v57);
for (let i70 = 0; i70 < 2; i70++) {
    const v76 = new Function("x");
    v76.name;
}
Function();
