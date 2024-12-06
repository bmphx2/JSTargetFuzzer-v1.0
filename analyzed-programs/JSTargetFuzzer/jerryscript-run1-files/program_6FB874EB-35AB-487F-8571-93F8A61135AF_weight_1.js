function f0() {
}
const v1 = [1618917037];
const v2 = [257,-8899,30703,268435439,16,1073741823,1531245410,-280700768];
const v3 = [8,65537,2,65536];
const v4 = [-0.0,1.7976931348623157e+308,4.0,-2.2250738585072014e-308,4.0,1000000000000.0,-4.0,-452.9005540981517];
const v5 = [-1000000000.0,-1.5192459360942218e+308,-0.4135471140319602];
const v6 = [0.23524966504708533,0.15524296834565188,-1000.0,-2.2250738585072014e-308,4.0,-5.0,Infinity,-1000000000000.0];
class C7 extends f0 {
    static #c = v1;
    constructor(a9, a10, a11) {
        super();
        this * v2;
        v5 == this;
        try {
            v3.#c /= this;
        } catch(e14) {
        }
    }
    #g = v5;
    [f0] = v4;
    static #e;
    #d;
}
const v15 = new C7(v1, v1, v4);
const v16 = new C7(v5, v1, v15);
const v17 = new C7(v4, v2, v16);
function f18() {
    return v15;
}
function F19(a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a22;
    this.g = a23;
}
const v24 = new F19(v5, v15, v2);
const v25 = new F19(v24, v1, v6);
let v26 = new F19(v16, v25, v25);
v26 = v16;
const v27 = new F19(v17, v4, v1);
let v28;
try { v28 = v5.toLocaleString(v27, v3); } catch (e) {}
v5.c = v28;
let v29 = v1 % v5;
v3.length = v29;
v29 -= v29;
v2[5] = v2;
try { v28(v27, v29, v1); } catch (e) {}
new f0();
