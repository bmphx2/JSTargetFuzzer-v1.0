function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = this;
    this.d = f0;
}
new F1();
const v4 = new F1();
const v5 = new F1();
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a14;
    this.c = v5;
    this.f = 268435439;
}
new F10(-65535, -65535, -65535);
new F10(f0, 268435439, 1024);
new F10(v4, -65535, -65535);
new Uint16Array(1462);
new BigInt64Array(16);
new Uint16Array(1024);
new WeakMap();
function f32() {
    const o49 = {
        __proto__: "-536870912",
        "d": "-536870912",
        "g": "-536870912",
        ..."-536870912",
        "c": f32,
        9: WeakMap,
        "h": -24152,
        get f() {
            this[7] = -24152;
            let v37;
            try { v37 = this.n(this); } catch (e) {}
            let [v38,v39] = v37;
            new Int8Array(3);
            new Int8Array(8);
            new Int8Array(3692);
            return "-536870912";
        },
    };
    for (let i51 = 0;
        (() => {
            const o52 = {
            };
            return i51 < 7;
        })();
        i51++) {
    }
    return o49;
}
const v58 = f32();
const v59 = f32(Uint16Array, 12206);
const v60 = f32();
class C67 extends f32 {
    constructor(a69, a70, a71, a72) {
        super();
        const o73 = {
            "call": f32,
            "construct": f32,
            "defineProperty": f32,
            "get": f32,
            "getOwnPropertyDescriptor": f32,
            "has": f32,
            "isExtensible": f32,
            "set": f32,
            "d": f32,
        };
        new Proxy(this, o73);
    }
}
const v76 = new C67(-19870386, -341266709, v59, 9007199254740990);
let v77 = new C67(v76, -1957950668, v76, 9007199254740990);
let v78 = new C67(v60, v77, v58, -341266709);
v59 <= v78;
if (F10) {
    v78 = C67;
} else {
    let {"b":v81,"d":v82,} = C67;
    C67[-4096] += -4096;
}
v77 <<= v76;
16 <= v58 ? 9007199254740990 : v58;
