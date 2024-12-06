const v1 = new Map();
const v2 = [Map,Map,Map,v1];
const v3 = [v2,Map];
const v4 = [Map,v3,v1];
for (let v5 = 0; v5 < 32; v5++) {
    v4[Map + v5] = v5;
}
function f8() {
    return v4;
}
const v9 = [v4,v3,v1,v3,v3];
const v10 = [v9,f8,Map,v4,v2];
const v11 = [v2,v10,v10,v9];
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a15;
    this.a = a15;
    this.e = v11;
}
new F12(v4, v11, v9);
new F12(v11, v1, v4);
new F12(v2, f8, v4);
let v21 = 44256;
new Uint8ClampedArray(255);
const v28 = new Uint32Array(858);
const v31 = new Uint16Array(7);
function f32(a33, a34, a35, a36) {
    const o51 = {
        m(a38, a39, a40) {
            v21 ^= a40;
            [-5.0,0.6176320614789462,2.4796066441118434,1.8010887102075852,-1.0,-4.0,-3.0,1.0];
            [-2.660624983254484e+307,4.0,-6.224343469236721e+307,-1.7976931348623157e+308,-7.781808913468946e+307,-569211.3075469795,-316.07372880244884,-847553.4946799515];
            [169.64171117192063,-609574.235028561,-9.613757066389756,758172.407755943,1.2851649532322922e+308,-7.705740903077952e+306,5.0,323000.4456514192,-575157.0949599417];
            this instanceof Uint16Array;
            return Uint16Array;
        },
        set f(a46) {
            v31[this] = a35;
            let v47;
            try { v47 = this.m(-4096, 7); } catch (e) {}
            ({"a":v47,} = this);
            [257,536870888];
            [65536,9,1724,37005,-65535,-14,-14,2,4096,5];
            [2147483647,1163760765,58060,37249,470747050,9007199254740991,-1019824430,1,-268435456,256];
            return a46;
        },
    };
    return o51;
}
const v52 = f32(858, 255, 255, v21);
const v53 = f32(-4096, 255, 858, v31);
f32(255, 255, v53, 255);
v52[8] |= 7;
for (const v55 in v28) {
    const o57 = {
        __proto__: Reflect,
        [v55]: v21,
    };
    try { Reflect.setPrototypeOf(v53, v53); } catch (e) {}
    const v59 = [v55,f32,255];
    Reflect.apply(v53.m, v31, v59);
    function f62() {
        return f62;
    }
}
