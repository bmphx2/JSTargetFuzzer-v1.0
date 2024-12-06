function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 1;
    this.a = 1;
}
new F0();
new F0();
new F0();
new Float64Array(64);
new Uint16Array(3);
new Float32Array(1);
class C21 {
    throw(a23, a24) {
        let v25;
        try { v25 = new a23(a23, a23, a23, this, "f"); } catch (e) {}
        v25[Symbol.toPrimitive] = -2.2250738585072014e-308;
        return a24;
    }
    c;
    constructor(a29) {
        function* f30(a31, a32) {
            let v33;
            try { v33 = new a32(); } catch (e) {}
            yield* a29;
            return v33;
        }
        const v34 = f30(-1.0, this);
        try { new a29(this, a29, this, f30, v34); } catch (e) {}
    }
}
const v36 = new C21(-2.2250738585072014e-308);
new C21(-1.0);
new C21(v36);
[2147483647,22698,-56014,-1];
[29070];
[4096,5,65536,2,-9007199254740990,48648,256];
[4294967297];
const v49 = [-4745,-2147483648,3,20655,-128,257];
[536870887,15,65536,4,-1580605575,1];
const v52 = new Date();
const v53 = Date(v52);
const v55 = [v53];
Reflect.apply(Date.parse, Date, v55);
v53.__proto__ = v49;
v53.__proto__ = v55;
[-65302,45954,-3,65535];
[-1256837775,-1024,6,-1024,255,-2045438122,64,2147483648,3];
[4294967296];
const v69 = new Date();
const v73 = [268435439,-21661,-21661];
const v74 = [268435439,-21661,v73,268435439,59351];
const v75 = [v74,v74];
function f79(a80, a81, a82) {
    const o94 = {
        ["d"]: "d",
        ["VNP9"]: "VNP9",
        __proto__: v75,
        [-1]: v74,
        "b": "d",
        "c": v73,
        ...a80,
        9: 59351,
        [268435439]: -9007199254740992,
        get a() {
            v69.__proto__ = v74;
            super.f;
            return this;
        },
        "d": a80,
        "d": a80,
        valueOf(a86, a87, a88) {
            try { new a88(this, "VNP9", a88, a86); } catch (e) {}
            const v91 = new Date();
            Date.d = "d";
            delete this[268435439];
            return v91 instanceof Date;
        },
    };
    return o94;
}
f79(v73, 59351, "VNP9");
f79(v74, 59351, "VNP9");
f79(v73, -21661, "d");
function f98() {
    const o139 = {
        set a(a103) {
            const v106 = f98 + this;
            v106 + v106;
            const t87 = "POSITIVE_INFINITY";
            t87[0] *= a103;
            Math.pow(3, -4294967295);
            Math.ceil(-2.2250738585072014e-308);
            const v113 = Math.trunc(-3437);
            Math.round(-2.2250738585072014e-308);
            Math.random();
            ("d")[Symbol.species];
            v74[-2.2250738585072014e-308] = Math;
            const o122 = {
                "maxByteLength": this,
            };
            const v124 = new ArrayBuffer(v113, o122);
            new Int16Array(3692);
            new Uint32Array(257);
            new Float32Array(101);
            new a103(v124);
        },
        "a": 1024,
        "h": -2.2250738585072014e-308,
        "d": -2.2250738585072014e-308,
    };
    return Date;
}
const v140 = f98();
f98();
f98();
const v144 = [false,f98];
[false,v144,false,v144,false];
[v140,false];
new Float32Array(0);
new Int8Array(256);
new Int32Array(1000);
new Function(512);
new URIError(0);
