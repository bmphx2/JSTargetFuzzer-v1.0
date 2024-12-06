let v0 = "global";
class C3 {
    static {
        super.g = this;
        try { this(..."15", ...v0, ...v0, this, ...v0, 1); } catch (e) {}
        this.__proto__ = this;
    }
    m(a10) {
        let v9 = this;
        v9 = "15";
        v0 = a10;
        [-3.0,-4.0,3.4549663090628945e+307,-1000.0,-1000000.0,-1.0976439299263347,-1e-15,-4.700455801315181e+307,1e-15];
        [Infinity,-201095.14305738977,477.2372748045798,1000000.0,-3.0,-1.47684531389292e+308];
        return [-2.0,1e-15,1000000000000.0,-5.401650926267953e+307,5.0,-130999.74477159209,-1000.0,0.0];
    }
}
const v14 = new C3();
const v15 = new C3();
let v16 = new C3();
function F17(a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = "15";
    this.c = a20;
    this.g = "15";
}
const v22 = new F17(v14, v16, v0);
const v23 = new F17(v14, 1, v16);
const v24 = new F17(v22, v15, v0);
function F28(a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a30;
    this.d = 11009;
}
new F28(v15, v22);
const v33 = new F28(v23, v22);
new F28(v15, v24);
[v0,F17,30363,C3];
[30363,30363,1];
[v22];
try { v33.m(v23, v15, 30363); } catch (e) {}
for (let v39 = 0; v39 < 32; v39++) {
    v23["p" + v39] = v39;
}
v16 = v33;
