function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -5843;
    this.g = -5843;
}
new F0();
const v4 = new F0();
new F0();
new Uint8Array(127);
new BigInt64Array(3632);
const v14 = new RangeError(2);
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a21;
    this.d = a20;
    this.c = a21;
}
const v22 = new F18(-167816.6976996807, -167816.6976996807);
const v23 = new F18(-5.0, -650912.0091858777);
new F18(-167816.6976996807, v22);
class C25 extends F18 {
    m(a27, a28, a29, a30) {
        let v31 = 0;
        do {
            try { v23.splice(a29, a30, F18); } catch (e) {}
            a30 /= -167816.6976996807;
            v22.d &= v31;
            v31++;
        } while (v31 < 1)
        return a29;
    }
}
const v36 = new C25();
new C25();
const v38 = new C25();
const v42 = [1.7976931348623157e+308,-2.220446049250313e-16,0.948288470911577,-1000000.0,1.4010053787337967e+308,816.838645370811,301512.93256373657,-1.6107167851582282e+308];
const v43 = [-1000000.0,-4.0,783387.0176257626,1e-15,-165308.6515255369];
const v44 = [1.0,-715.8132265412853];
function f45(a46, a47) {
    const o78 = {
        "c": -15,
        toString(a49) {
            function F51(a53, a54, a55, a56) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = a55;
                this.e = 1024;
                this.b = a49;
            }
            new F51(v38, -5.0, 1024, v42);
            new F51(v36, -167816.6976996807, 1024, v43);
            new F51(v38, a49, 1024, a47);
            new Int8Array(1024);
            new BigUint64Array();
            const o65 = {
            };
            v4.g = o65;
            v44[10000];
            const v71 = new Proxy(Proxy, o65);
            const v72 = v71.__proto__;
            const v74 = new BigInt64Array(8);
            new a49(589, 589, a46, v72);
            return v74;
        },
    };
    return o78;
}
f45(v42, v14);
f45(v44, v43);
f45(v44, v43) === -5;
for (let v89 = 0; v89 < 32; v89++) {
    v43["p" + v89] = v89;
}
Math.max(f45, -0.933478233565344, 1899015345, -22869);
~-158334104;
Math.sign(v42);
Math.sign(f45);
~f45;
