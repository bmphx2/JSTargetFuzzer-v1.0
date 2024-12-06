function f0() {
    let v2 = -1000000000000.0;
    const o27 = {
        [-1e-15](a5, a6) {
            const v9 = new Int32Array(512);
            for (const v10 of v9) {
                const v13 = new ArrayBuffer(10);
                new Int8Array(v13);
            }
            return this;
        },
        get g() {
            return this;
        },
        p(a21, a22) {
            return f0;
        },
        [-3.0](a24, a25) {
            v2 >>= a24;
            var c = -1e-15;
            a25[-3.0] = a24;
            this.length = 1073741824;
            return this;
        },
    };
    return o27;
}
const v28 = f0();
let v29 = f0();
const v30 = f0();
function f31(a32, a33) {
    const o54 = {
        ...v30,
        get c() {
            let v38;
            try { v38 = a32(a33, -65536n, f0); } catch (e) {}
            function F39(a41, a42, a43, a44) {
                if (!new.target) { throw 'must be called with new'; }
                this.c = a43;
                this.f = a32;
                this.h = a43;
            }
            new F39(this, 1073741824n, -65536n, f0);
            return arguments;
            function F47() {
                if (!new.target) { throw 'must be called with new'; }
            }
            9n > 268435441n;
            new F39(v38, -65536n, a32, -65536n);
            new F39(v28, v38, 1073741824n, v30);
            return a32;
        },
    };
    return o54;
}
const v55 = f31(v29, v29);
const v56 = f31(v28, v55);
const v57 = f31(v56, v56);
function f58(a59, a60, a61) {
    const o63 = {
        ...a59,
        [a60]: f0,
        "a": a60,
        get b() {
            a60.c -= a61;
            v29 = this;
            return this;
        },
        "b": v57,
        ...a60,
        [v30]: f0,
    };
    return o63;
}
f58(v29, v55, v57);
f58(v30, v30, f31);
f58(v55, v57, v57);
let v68 = 44256;
new Uint8ClampedArray(255);
const v75 = new Uint32Array(858);
const v78 = new Uint16Array(7);
function f79(a80, a81, a82, a83) {
    const o120 = {
        m(a85, a86, a87) {
            v68 ^= a87;
            [-5.0,0.6176320614789462,2.4796066441118434,1.8010887102075852,-1.0,-4.0,-3.0,1.0];
            const v90 = new BigUint64Array();
            const v92 = new BigInt64Array(v90, BigUint64Array, v90);
            try { v90.sort(v92); } catch (e) {}
            [-2.660624983254484e+307,4.0,-6.224343469236721e+307,-1.7976931348623157e+308,-7.781808913468946e+307,-569211.3075469795,-316.07372880244884,-847553.4946799515];
            [169.64171117192063,-609574.235028561,-9.613757066389756,758172.407755943,1.2851649532322922e+308,-7.705740903077952e+306,5.0,323000.4456514192,-575157.0949599417];
            this instanceof Uint16Array;
            return Uint16Array;
        },
        get b() {
            return this;
        },
        p(a99) {
            let v98 = this;
            ~(v98 = v29);
            return f0;
        },
        set f(a102) {
            v78[this] = a82;
            let v103;
            try { v103 = this.m(-4096, 7); } catch (e) {}
            ({"a":v103,} = this);
            [257,536870888];
            const o106 = {
                ...undefined,
            };
            const v110 = ~-4096 | -2147483647;
            Math.pow(v110, v110);
            [65536,9,1724,37005,-65535,-14,-14,2,4096,5];
            [2147483647,1163760765,58060,37249,470747050,9007199254740991,-1019824430,1,-268435456,256];
            return a102;
        },
        p(a115, a116) {
            return a80;
        },
        ...v29,
        o(a118, a119) {
            v29 = a119;
            return v29;
        },
    };
    return o120;
}
const v121 = f79(858, 255, 255, v68);
const v122 = f79(-4096, 255, 858, v78);
f79(255, 255, -4096, 255);
v121[8] |= 7;
for (const v124 in v75) {
    const v126 = [v124,f79,255];
    Reflect.apply(v122.m, v78, v126);
    function f129() {
        return v124;
    }
}
