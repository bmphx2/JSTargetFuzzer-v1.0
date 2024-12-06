function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 9007199254740991;
}
new F3(4294967297);
new F3(4294967297);
new F3(9007199254740991);
new Date();
new WeakSet();
new Int16Array(6);
new Uint8Array(7);
new Float64Array(1);
const v31 = [2147483649,5,-1,4096,16];
const v32 = [65536,255,5,-16,-12,6,-27000,11,-343778386,10];
const v33 = [65535,-9007199254740990,281649175,3,33748,9007199254740990,9,28465,50753];
const v40 = [v33,-982.4990494199388];
const v41 = [-982.4990494199388,65537n,v31,5.462381943735222];
const v42 = [v40];
const v43 = v41;
let v44;
try { v44 = v33(v43, -1465399077n, v43, v41); } catch (e) {}
for (let i46 = 0; i46 < 9; i46++) {
    function f55(a56) {
        const o60 = {
            "f": 4n,
            "e": 4n,
            "h": a56,
            "b": 536870888n,
            ...v40,
            [-1]: a56,
            127: a56,
            ...v42,
            get c() {
                let v58;
                try { v58 = this.o(536870888n, 10n, a56, this); } catch (e) {}
                let v59;
                try { v59 = new v58(this, v58); } catch (e) {}
                return v59;
            },
            ...v42,
            "a": v40,
            __proto__: v44,
            ...v41,
            ...v32,
            "a": 4n,
            /*
            __proto__: 536870888n,
            */
            ...536870888n,
            ...a56,
            "g": a56,
        };
        return o60;
    }
    f55(10n);
    f55(4n);
    const v63 = f55(4n);
    [10n,10n];
    const v65 = [-1000000000.0,1000000000.0,1.0,NaN,NaN,-3.650883429328882,3.4939116716666203e+307,0.9250747980809987,1.0];
    const v68 = [[-2,-9007199254740992,1726940612,65535,30936,3,175721459,-9007199254740990,65536,13],v65,[-22938,128,-14785,-45958,5,268435439,-563026776,9007199254740990,-1073741824,3]];
    function F75() {
        if (!new.target) { throw 'must be called with new'; }
        this.b = 10;
        this.d = 10;
    }
    const v78 = new F75();
    const v79 = new F75();
    const v80 = new F75();
    new Set();
    const v87 = [[2.2250738585072014e-308],v79,F75,2.2250738585072014e-308];
    new Array(8, f55, [v87,9.71930421164078e+307,0.8419953574531973,v78,v80,60558n,v68,v63]);
    const v99 = [65536];
    [v99,1073741824,false,24654];
    const v101 = [v99,65536,false,v68];
    const v105 = -v80;
    const o117 = {
        valueOf() {
            let {"h":v107,} = this;
            try {
                super.setMonth();
            } catch(e109) {
            }
            const o110 = {
                "apply": Array,
                "call": Array,
                "d": Array,
                "defineProperty": 2.2250738585072014e-308,
                "deleteProperty": v87,
                "getPrototypeOf": Array,
                "preventExtensions": F75,
                "set": v101,
                "a": this,
                "f": v79,
                ...v40,
                "b": v33,
                [this]: v105,
            };
            new Uint16Array(this, v79);
            try { v107(); } catch (e) {}
            return false;
        },
    };
    const v119 = v31["push"](i46, "push", v41, v32, v43);
    try { ("push").includes(v119); } catch (e) {}
    v41.a = v40;
}
