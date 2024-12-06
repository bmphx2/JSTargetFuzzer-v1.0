function f3(a4, a5) {
    const o24 = {
        "f": a5,
        "b": a4,
        __proto__: a4,
        "e": a4,
        [-128n]: a5,
        "d": a5,
        "b": -128n,
        /*
        __proto__: a5,
        */
        "g": a5,
        "h": 8n,
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
                this.e = -794881655n;
                this.g = a16;
            }
            new F12(4096, 4096, this, a4);
            const v19 = new F12(a7, 4096, 8n, a4);
            new F12(v19, this, a7, 8n);
            const v21 = new SharedArrayBuffer(4096, o10);
            new Int8Array(v21);
        },
    };
    return o24;
}
f3(-128n, -794881655n);
f3(-794881655n, f3);
f3(-128n, f3);
("-67331502").match(([2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308]).copyWithin());
