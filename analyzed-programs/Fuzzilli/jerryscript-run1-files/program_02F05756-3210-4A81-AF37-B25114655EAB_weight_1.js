const v0 = /(?<a>(?<b>(?<c>(?<d>.).).).)/usid;
const v1 = /sh[\cZ]+/sid;
/a*/vmsd;
const v3 = [-4.0,5.0,188146.16172842192,5.0,-4.0,1.0462668230729086,-267725.2730426354,3.421767156680458e+307,-1000.0];
const v4 = [-1000000000000.0,-1.952255078501345,-3.0,-1000000.0,3.965083715318091,1.661848956506646e+308];
const v5 = [956819.6177237867,1.1830230121975147e+308,0.6616466586621362,2.0,-1.0,0.7841421520579172,4.0,881824.3672968354];
function f6(a7, a8) {
    const o20 = {
        set a(a10) {
            try { new a8(); } catch (e) {}
        },
        [a8]: v1,
        __proto__: a8,
        set f(a16) {
        },
        ...v0,
        ...v4,
    };
    return o20;
}
const v21 = f6(v3, v1);
const v22 = f6(v3, f6);
const v23 = f6(v4, f6);
const v24 = [v23,v23];
const v25 = [v24,v24,v24,v3];
[v0];
class C27 {
    constructor(a29, a30, a31, a32) {
        super.h = v22;
        v23 instanceof a32;
        const o36 = {
            "maxByteLength": 737,
        };
        const v38 = new ArrayBuffer(737, o36);
        new DataView(v38);
    }
    #f;
    e;
}
new C27(v5, v5, v24, v22);
new C27(v4, v25, v24, C27);
new C27(v25, v4, v5, v21);
let {"f":v44,"h":v45,"length":v46,...v47} = v3;
try { v47.setUint16(v23, v45, v3, v44, C27); } catch (e) {}
let v49;
try { v49 = new C27(v0, ...v24, v23, ...v45, ...v4); } catch (e) {}
const o50 = {
    "apply": f6,
    "getOwnPropertyDescriptor": f6,
    "set": f6,
    "setPrototypeOf": f6,
};
new Proxy(v49, o50);
