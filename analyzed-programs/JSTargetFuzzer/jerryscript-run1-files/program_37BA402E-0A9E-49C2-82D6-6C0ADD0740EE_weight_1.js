function f3() {
    return "f";
}
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a11;
}
new F7(-23356n, -23356n, "toPrimitive", -9007199254740992n);
new F7(-9007199254740992n, 4294967295n, "c", -9007199254740992n);
new F7(-23356n, -23356n, "toPrimitive", -23356n);
function f16(a17, a18) {
    const o30 = {
        "c": -9007199254740992n,
        "e": a18,
        "b": "c",
        set d(a20) {
            let v22 = 4;
            let v23 = -2.2250738585072014e-308;
            const v24 = --v23;
            let v25 = ~a20;
            ++v25;
            v22--;
            Math.tan(v22);
            v23 << v24;
        },
    };
    return o30;
}
f16("toPrimitive", 4294967295n);
f16("c", -9007199254740992n);
f16("f", -9007199254740992n);
let v35 = 44256;
new Uint8ClampedArray(255);
const v42 = new Uint32Array(858);
const v45 = new Uint16Array(7);
function f46(a47, a48, a49, a50) {
    const o76 = {
        m(a52, a53, a54) {
            v35 ^= a54;
            [-5.0,0.6176320614789462,2.4796066441118434,1.8010887102075852,-1.0,-4.0,-3.0,1.0];
            [-2.660624983254484e+307,4.0,-6.224343469236721e+307,-1.7976931348623157e+308,-7.781808913468946e+307,-569211.3075469795,-316.07372880244884,-847553.4946799515];
            [169.64171117192063,-609574.235028561,-9.613757066389756,758172.407755943,1.2851649532322922e+308,-7.705740903077952e+306,5.0,323000.4456514192,-575157.0949599417];
            this instanceof Uint16Array;
            return Uint16Array;
        },
        set f(a60) {
            v45[this] = a49;
            let v61;
            try { v61 = this.m(-4096, 7); } catch (e) {}
            ({"a":v61,} = this);
            [257,536870888];
            [65536,9,1724,37005,-65535,-14,-14,2,4096,5];
            const v66 = new BigInt64Array(64);
            const v69 = new BigUint64Array(4096);
            const v71 = new Float32Array();
            try { BigInt64Array(v71, 4096); } catch (e) {}
            v66.indexOf(v71);
            v69[8];
            [2147483647,1163760765,58060,37249,470747050,9007199254740991,-1019824430,1,-268435456,256];
            return a60;
        },
    };
    return o76;
}
const v77 = f46(858, 255, 255, v35);
const v78 = f46(-4096, 255, 858, v45);
f46(255, 255, -4096, 255);
v77[8] |= 7;
for (const v80 in v42) {
    const v82 = [v80,f46,255];
    Reflect.apply(v78.m, v45, v82);
    function f85() {
        return v80;
    }
}
