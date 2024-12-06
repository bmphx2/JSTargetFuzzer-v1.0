function f3(a4, a5) {
    const o24 = {
        "f": a5,
        "b": a4,
        __proto__: a4,
        "e": a5,
        [-128n]: a5,
        "d": -128n,
        "b": -794881655n,
        /*
        __proto__: a5,
        */
        "g": a5,
        "h": a5,
        set d(a7) {
            a7[5] = a5;
            super.b = this;
            a5[this] /= a5;
            this.h = 8n;
            const o10 = {
                "maxByteLength": 4096,
            };
            function F12(a14, a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = SharedArrayBuffer;
                a16.e = -794881655n;
                this.g = a16;
            }
            new F12(4096, 4096, this, a4);
            new F12(a7, 4096, 8n, a4);
            new F12(this, this, a7, 8n);
            const v21 = new SharedArrayBuffer(4096, o10);
            new Int8Array(v21);
        },
    };
    return o24;
}
f3(-128n, -794881655n);
f3(-794881655n, f3);
let v29 = (-2n) ** 1000n;
v29 += -12n;
let v31 = 44256;
const v34 = new Uint32Array(858);
const v36 = new Uint16Array();
function f37(a38, a39, a40, a41) {
    const o46 = {
        m(a43, a44, a45) {
            v31 ^= a45;
            return 858;
        },
    };
    return o46;
}
const v47 = f37();
for (const v48 in v34) {
    const v50 = [v48,f37,Reflect];
    Reflect.apply(v47.m, v36, v50);
}
f3(-128n, f3);
("-67331502").match(([2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308]).copyWithin());
