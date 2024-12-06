let v0 = "prototype";
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
    return v10;
}
let v15 = "g";
new Uint32Array(128);
new Uint16Array(255);
let v25 = new Uint32Array(2);
function F26() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 4;
    this.f = 4;
}
const v29 = new F26();
const v30 = new F26();
const v31 = new F26();
({"b":v0,"h":v15,...v25} = v29);
let v33;
try { v33 = v0(f13, v6, -9335, v29, v6); } catch (e) {}
try { v33(v15, v33, v33, v25, -9335); } catch (e) {}
v31.f = v0;
const v35 = [-574.4685352419892,0.2812722313756687,1000000000000.0,-832.0964766140828,-936.6290924746295,-1.1597291123053001e+308,2.28751113533162,1000.0,-760.0821901644865,991770.3756157334];
const v36 = [-1.0,NaN,161.7880109369603,841834.7461066283,-4.0,-517942.661864127,0.458378288100444,4.0,1.7976931348623157e+308,-155.7207455433172];
const v37 = [1.0,348957.09613396716,180.892165148166,-73023.40397698816,-1.3281582245079644,2.220446049250313e-16,-179.69890765413004,758649.7305718027,2.220446049250313e-16,-1.7976931348623157e+308];
class C41 extends F26 {
    static set f(a43) {
        const v44 = `
            let {"h":v45,"length":v46,...v47} = v35;
        `;
        eval(v44);
    }
    c;
    536870887 = v36;
    static 5 = 257;
    [v35] = v35;
}
const v53 = new C41();
new C41();
new C41();
const v57 = new Map();
function f58(a59, a60) {
    const o61 = {
        [Map]: v57,
        "a": v37,
        "b": F26,
        [a60]: 2,
        "e": v15,
        __proto__: a59,
        65535: v57,
        "a": a60,
        "c": v57,
        "b": a59,
        "g": a60,
        ...a59,
        ...v30,
        "d": v53,
        ...v57,
        "NEGATIVE_INFINITY": a60,
        "f": Map,
        /*
        __proto__: v57,
        */
        ...v31,
        184: a59,
        2: "n",
        ...v53,
        "h": a60,
        [v36]: F26,
        "e": a59,
        [-1688933360]: a60,
        ...v37,
        4294967296: v35,
        6: a59,
        "species": a59,
    };
    return o61;
}
const v62 = f58(Map, v57);
let v63 = f58(v62, Map);
const v64 = f58(v57, f58);
v62.b;
v63 = v64;
for (const v72 in v57) {
    v63.a;
    for (let v74 = 0; v74 < 32; v74++) {
        v64["p" + v74] = v74;
    }
}
