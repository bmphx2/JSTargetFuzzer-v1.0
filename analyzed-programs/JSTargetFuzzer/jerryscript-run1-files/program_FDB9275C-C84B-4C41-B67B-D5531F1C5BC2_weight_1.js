class C3 {
    static m(a5) {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a9;
            this.c = this;
            this.d = a9;
        }
        const v10 = new F6(a5, a5);
        const v11 = new F6(a5, a5);
        const v12 = new F6(-40444, -40444, v10);
        if (v11 === v12) {
            function F14(a16, a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.a = a16;
            }
            const v20 = new F14(F6, 16, -40444, v10);
            new F14(v20, C3, -1937823081, v12);
            new F14(-1937823081, C3, -40444, v10);
        } else {
            v10[-1937823081] |= -1937823081;
        }
        return a5;
    }
}
const v23 = new C3();
new C3();
new C3();
new Int16Array(65535);
new Uint8ClampedArray(16);
new Float32Array(6, Float32Array, C3);
print(v23);
