class C3 {
    static m(a5) {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a9;
            this.c = this;
            this.d = a9;
        }
        const v10 = new F6(a5, a5);
        new F6(a5, a5);
        new F6(-40444, -40444, v10);
        return a5;
    }
}
const v13 = new C3();
new C3();
new C3();
new Int16Array(65535);
new Uint8ClampedArray(16);
new Float32Array(6, Float32Array, C3);
print(v13);
