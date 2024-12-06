const v0 = [-4.0,-1.0783963594460728e+308,1e-15,-720415.8472030207,Infinity,8.848478199916904,-6.89484089635203e+307];
const v1 = [-104.24027928477699,-2.0,-1.0,-1.2318459874674659,-323221.3657412828,0.3505706869184523];
const v2 = [2.2250738585072014e-308,-1.0,0.0,4.364040831980045];
const v3 = [v0];
const v4 = [v0,v3,v3,v3];
[v2,v4,v2,v4];
for (let i11 = 0, i12 = 10; i11 < i12; i11++, i12--) {
    v1.h = v0;
}
const v27 = new Map();
function f28(a29) {
    const o40 = {
        "a": v27,
        __proto__: v27,
        "e": a29,
        o(a31, a32) {
            let v33 = a29.__proto__;
            let v34 = Date;
            ({"e":v34,"prototype":v33,...a29} = v34);
            for (let v35 = 0; v35 < 32; v35++) {
                a29["p" + v35] = v35;
            }
            const v38 = new v34();
            try { a31(this, v34, v38, v38, Map, a29); } catch (e) {}
            return a32;
        },
        "d": v27,
        "b": a29,
        [v27]: v27,
        "g": Map,
        ...a29,
    };
    return o40;
}
f28(Map);
f28(f28(f28));
new Int16Array(4096);
new Int16Array(5);
const v52 = new BigUint64Array(2);
try { v52.reduceRight(f28, Int16Array); } catch (e) {}
new BigInt64Array(1024);
new Uint8ClampedArray(255);
new Int16Array(14);
