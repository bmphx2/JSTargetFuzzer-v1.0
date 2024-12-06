let v0 = "prototype";
let v3 = -5;
const v6 = [10,-4294967295,-45857,64745,10,41573,-2147483647,5];
const v7 = [2147483648,14,9007199254740992];
const v8 = [16192,-536870912,-31819];
const o9 = {
    __proto__: v8,
    "g": -9335,
    ["n"]: v7,
};
const v10 = ["construct","construct"];
const v11 = [v10,"construct",v10,"construct"];
[v11,v11,"construct","construct"];
function f13() {
    const t14 = "n";
    t14[5] = v0;
    const v14 = v7;
    v14.length = v3;
    function F15(a17, a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        this.a = f13;
    }
    const v20 = new F15(F15, -15656, v14);
    new F15(v20, -15656, v7);
    new F15(-9335, v3, v14);
    return v10;
}
let v24 = "g";
new Uint32Array(128);
new Uint16Array(255);
let v34 = new Uint32Array(2);
function F35() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 4;
    this.f = 4;
}
const v38 = new F35();
const v39 = new F35();
const v40 = new F35();
({"b":v0,"h":v24,...v34} = v38);
let v42;
try { v42 = v0(f13, v6, -9335, v38, v6); } catch (e) {}
async function f43(a44, a45, a46) {
    v3 *= 2;
    await a44;
    return a44;
}
f43(v38, -15656, v42);
try { v42(v24, v42, v42, v34, -9335); } catch (e) {}
v40.f = v0;
const v50 = [-574.4685352419892,0.2812722313756687,1000000000000.0,-832.0964766140828,-936.6290924746295,-1.1597291123053001e+308,2.28751113533162,1000.0,-760.0821901644865,991770.3756157334];
const v51 = [-1.0,NaN,161.7880109369603,841834.7461066283,-4.0,-517942.661864127,0.458378288100444,4.0,1.7976931348623157e+308,-155.7207455433172];
const v52 = [1.0,348957.09613396716,180.892165148166,-73023.40397698816,-1.3281582245079644,2.220446049250313e-16,-179.69890765413004,758649.7305718027,2.220446049250313e-16,-1.7976931348623157e+308];
class C56 extends F35 {
    static set f(a58) {
        const v59 = `
            let {"h":v60,"length":v61,...v62} = v50;
        `;
        eval(v59);
    }
    c;
    536870887 = v51;
    static 5 = 257;
    [v50] = v50;
}
const v68 = new C56();
new C56();
new C56();
const v72 = new Map();
function f73(a74, a75) {
    const o76 = {
        [Map]: v72,
        "a": v52,
        "b": F35,
        [a75]: 2,
        "e": v24,
        __proto__: a74,
        65535: v72,
        "a": a75,
        "c": v72,
        "b": a74,
        "g": a75,
        ...a74,
        ...v39,
        "d": v68,
        ...v72,
        "NEGATIVE_INFINITY": a75,
        "f": Map,
        /*
        __proto__: v72,
        */
        ...v40,
        184: a74,
        2: "n",
        ...v68,
        "h": a75,
        [v51]: F35,
        "e": a74,
        [-1688933360]: a75,
        ...v52,
        4294967296: v50,
        6: a74,
        "species": a74,
    };
    return o76;
}
const v77 = f73(Map, v72);
let v78 = f73(v77, Map);
const v79 = f73(v72, f73);
v77.b;
v78 = v79;
for (const v87 in v72) {
    v78.a;
    for (let v89 = 0; v89 < 32; v89++) {
        v79["p" + v89] = v89;
    }
}
