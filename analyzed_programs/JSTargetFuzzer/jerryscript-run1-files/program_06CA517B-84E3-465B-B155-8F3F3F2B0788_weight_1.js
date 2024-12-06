function f3(a4) {
    const o19 = {
        set g(a6) {
            const v7 = this !== a6;
            if (v7) {
                const o10 = {
                    "maxByteLength": 257,
                    "g": this,
                    "h": a6,
                    "f": f3,
                    "e": this,
                    257: v7,
                };
                const v12 = new ArrayBuffer(22, o10);
                new Uint8ClampedArray(v12);
            } else {
                try { a6(2.220446049250313e-16, 5.0, this, 5.0); } catch (e) {}
            }
            const v16 = this.g;
            try {
                super.setUint32(v16, 2.220446049250313e-16, this);
            } catch(e18) {
            }
        },
    };
    return o19;
}
f3(2.220446049250313e-16);
f3(4.0);
f3(2.220446049250313e-16);
new Int16Array(129);
new BigUint64Array(512);
new Float32Array(1);
Promise.reject()["then"]();
