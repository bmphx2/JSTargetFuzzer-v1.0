function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
    this.f = f0;
}
new F1();
new F1();
new F1();
const v8 = new ArrayBuffer();
new DataView(v8);
let v12;
try { v12 = Float32Array(); } catch (e) {}
new WeakSet();
new WeakSet();
function f19() {
    let v22 = "message";
    const o38 = {
        "c": v12,
        [v12]: v12,
        set f(a24) {
            v12[this] = f0;
            let v25;
            try { v25 = this.m(10000, v12); } catch (e) {}
            ({"a":v25,} = this);
            [257,536870888];
            [65536,9,1724,37005,-65535,-14,-14,2,4096,5];
            const v29 = Date.__proto__;
            ("reverse").matchAll(v29);
            v29();
            [2147483647,1163760765,58060,37249,470747050,9007199254740991,-1019824430,1,-268435456,256];
            return a24;
        },
        get a() {
            let v35;
            try { v35 = this("223928331", this, 5.662791040550411e+307); } catch (e) {}
            v22 = v35;
            try {
                super.n();
            } catch(e37) {
            }
            return 5.662791040550411e+307;
        },
        3207: 5.662791040550411e+307,
        3681: v22,
    };
    return o38;
}
const v39 = f19();
f19();
const v41 = f19();
function F45(a47, a48, a49) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a47;
    this.d = 1073741825;
}
const v50 = new F45(v41, v41, 3);
const v51 = new F45(v50, v39, 3);
new F45(v39, v51, -31282);
new ArrayBuffer(10);
class C58 {
    constructor(a60, a61) {
    }
}
try { C58(C58, C58); } catch (e) {}
new Uint32Array(4050);
new Uint8ClampedArray(4055);
new Uint16Array(134);
