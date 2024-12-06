const v2 = new Uint8ClampedArray(96);
const v5 = new Int32Array(512);
const v8 = new Uint8Array(4096);
function f9(a10, a11, a12) {
    const o27 = {
        set g(a14) {
            v5 & a14;
            super.a;
            v8.__proto__;
            function F18(a20, a21, a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = a21;
                this.g = a20;
                this.a = a20;
            }
            new F18(a10, v2, a10, a12);
            new F18(a11, F18, 4096, a12);
            new F18(this, a11, 512, a11);
        },
    };
    return o27;
}
const v28 = f9(96, 96, 512);
const v29 = f9(96, 4096, 512);
f9(v29, 96, 4096);
const v31 = v2.byteLength;
v5.__proto__ = v28;
f9(v29, 512, 512);
f9 += f9;
v28[402] -= v31;
v2 & v2;
Math.fround(v2);
Math.log(-1000000000.0);
