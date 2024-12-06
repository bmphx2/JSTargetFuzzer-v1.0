class C6 {
    static {
        let v8;
        try { v8 = this.split(this); } catch (e) {}
        this[7] = v8;
    }
    p(a10, a11, a12, a13) {
        const o16 = {
            "maxByteLength": 2197,
        };
        const v18 = new ArrayBuffer(2197, o16);
        const v20 = new Uint8ClampedArray(v18);
        return v20;
    }
}
const v21 = new C6();
new C6();
new C6();
const v26 = new Uint8Array(1768);
new Float32Array(128);
const v32 = new Uint8ClampedArray(605);
for (let [,v33] of v32) {
    for (let i36 = 0, i37 = 10; i36 < i37; i36++, i37--) {
        try { v33(v33, v21, v26, v33, v33); } catch (e) {}
    }
}
