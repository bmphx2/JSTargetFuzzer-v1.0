function f0() {
    const o9 = {
        [-2]: 1,
        "h": "AWbNl",
        6: 340310292,
        "b": 340310292,
        __proto__: 340310292,
        p(a5, a6) {
            this.h = a6;
            const v8 = new WeakMap();
            return v8;
        },
        ..."AWbNl",
        "c": "AWbNl",
        "d": 1,
    };
    return 1;
}
let v10 = f0();
const v11 = f0();
const v12 = f0();
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v12;
}
new F13(v10, v10);
new F13(v11, v10);
new F13(v10, v11);
new Float32Array(16);
new F13(257);
new Int16Array(512);
new Uint8ClampedArray(16);
new Uint32Array(Int16Array);
const v40 = new Uint16Array(7);
function f41(a42, a43, a44, a45) {
    const o60 = {
        m(a47, a48, a49) {
            v10 ^= a49;
            [-5.0,0.6176320614789462,2.4796066441118434,1.8010887102075852,-1.0,-4.0,-3.0,1.0];
            [-2.660624983254484e+307,4.0,-6.224343469236721e+307,-1.7976931348623157e+308,-7.781808913468946e+307,-569211.3075469795,-316.07372880244884,-847553.4946799515];
            [169.64171117192063,-609574.235028561,-9.613757066389756,758172.407755943,1.2851649532322922e+308,-7.705740903077952e+306,5.0,323000.4456514192,-575157.0949599417];
            this instanceof Uint16Array;
            return Uint16Array;
        },
        set f(a55) {
            v40[this] = a44;
            let v56;
            try { v56 = this.m(-4096, 7); } catch (e) {}
            ({"a":v56,} = this);
            [257,536870888];
            [65536,9,1724,37005,-65535,-14,-14,2,4096,5];
            [2147483647,1163760765,58060,37249,470747050,9007199254740991,-1019824430,1,-268435456,256];
            return a55;
        },
    };
    return o60;
}
const v61 = f41(Uint8ClampedArray, 255, 255, 44256);
const v62 = f41(-4096, 255, 858, v40);
f41(257, 255, -4096, 255);
v61[8] |= 7;
for (const v64 in F13) {
    const v66 = [v64,f41,255];
    const v67 = v62.m;
    v67.apply(v67, v40, v66);
    function f69() {
        return v64;
    }
}
