function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 10000;
    this.f = 10000;
    this.a = a5;
}
const v6 = new F3(0);
const v7 = new F3(9223372036854775807);
new F3(0);
function f9(a10, a11, a12, a13) {
    const o19 = {
        m(a15, a16) {
            this[Symbol.unscopables] = this;
            return v7;
        },
        __proto__: v6,
        ...v7,
        676: a10,
        "d": a11,
        [a13]: v7,
    };
    return o19;
}
f9(9223372036854775807, F3, v6, 9223372036854775807);
f9(10000, 10000, v7, 9223372036854775807);
f9(10000, 10000, v6, 10000);
let v24 = 44256;
new Uint8ClampedArray(255);
const v31 = new Uint32Array(858);
const v34 = new Uint16Array(7);
function f35(a36, a37, a38, a39) {
    const o73 = {
        m(a41, a42, a43) {
            v24 ^= a38;
            [-5.0,0.6176320614789462,2.4796066441118434,1.8010887102075852,-1.0,-4.0,-3.0,1.0];
            [-2.660624983254484e+307,4.0,-6.224343469236721e+307,-1.7976931348623157e+308,-7.781808913468946e+307,-569211.3075469795,-316.07372880244884,-847553.4946799515];
            [169.64171117192063,-609574.235028561,-9.613757066389756,758172.407755943,1.2851649532322922e+308,-7.705740903077952e+306,5.0,323000.4456514192,-575157.0949599417];
            this instanceof Uint16Array;
            return v7;
        },
        set f(a49) {
            v34[this] = this;
            let v50;
            try { v50 = this.m(this, 7); } catch (e) {}
            ({"a":v50,} = this);
            [257,536870888];
            [65536,9,1724,37005,-65535,-14,-14,2,4096,5];
            [2147483647,1163760765,58060,37249,470747050,9007199254740991,-1019824430,1,-268435456,256];
            const v55 = ([])[-1];
            Object.defineProperty([0.3963332363617482], "h", { enumerable: true, get: v55 });
            function f57() {
                return f57;
            }
            let v58 = -102741028;
            class C59 extends f57 {
                constructor(a61, a62, a63, a64) {
                    super();
                    for (let v65 = 0; v65 < 5; v65++) {
                        v65 % v65;
                    }
                }
            }
            new C59();
            let v68 = 0;
            while (v68 < 7) {
                for (let v71 = 0; v71 < 5; v71++) {
                    v58 = v71;
                }
                v68++;
            }
            return a49;
        },
    };
    return o73;
}
const v74 = f35(858, 255, 255, v7);
const v75 = f35(Uint8ClampedArray, 255, 858, v34);
f35(255, 255, -4096, v75);
v74[8] |= 7;
for (const v77 in v31) {
    const v79 = [v77,f35,255];
    Reflect.apply(v75.m, v34, v79);
    function f82() {
        return v77;
    }
}
