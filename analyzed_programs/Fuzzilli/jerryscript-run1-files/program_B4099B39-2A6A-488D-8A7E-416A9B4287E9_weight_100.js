function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 49220;
    this.b = 49220;
    this.a = 49220;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
[v4,v4,F0,F0,F0];
const v7 = [v5];
[F0,v3,v5];
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.description = -5843;
    this.g = -5843;
}
new F15();
const v19 = new F15();
new F15();
new Uint8ClampedArray(127);
new BigInt64Array(3632);
const v29 = new RangeError(2);
function F33(a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a36;
    this.d = a35;
    this.growable = a36;
}
const v37 = new F33(-1e-15, -1e-15);
const v38 = new F33(-5.0, -4.583158314608302);
new F33(-1e-15, v37, v37, v7);
class C40 extends F33 {
    m(a42, a43, a44, a45) {
        let v46 = 0;
        do {
            try { v38.splice(a44, a45, F33); } catch (e) {}
            a45 /= -1e-15;
            v37.d &= v46;
            v46++;
        } while (v46 < 226575099)
        return a44;
    }
}
const v51 = new C40();
new C40();
const v53 = new C40();
const v57 = [1.7976931348623157e+308,-2.220446049250313e-16,0.948288470911577,-1000000.0,1.4010053787337967e+308,816.838645370811,301512.93256373657,-1.6107167851582282e+308];
const v58 = [-1000000.0,-4.0,783387.0176257626,1e-15,-165308.6515255369];
const v59 = [1.0,-715.8132265412853];
function f60(a61, a62) {
    const o93 = {
        "h": -4724,
        toString(a64) {
            function F66(a68, a69, a70, a71) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = a70;
                this.e = 1024;
                this.b = a64;
            }
            new F66(v53, -5.0, 1024, v57);
            new F66(v51, -1e-15, 1024, v58);
            new F66(v53, a64, 1024, a62);
            new Int8Array(1024);
            new BigUint64Array(1024);
            const o80 = {
            };
            v19.g = o80;
            v59[10000];
            const v86 = new Proxy(Proxy, o80);
            const v87 = v86.__proto__;
            const v89 = new BigInt64Array(8);
            new a64(589, 589, a61, v87, -4724);
            return v89;
        },
    };
    return o93;
}
f60(v57, v29);
f60(v59, v58);
f60(v59, v58) === -5;
for (let v104 = 0; v104 < 32; v104++) {
    v58["p" + v104] = v104;
}
Math.max(f60, -0.933478233565344, 1899015345, -22869);
~-158334104;
Math.sign(v57);
Math.sign(f60);
~f60;
