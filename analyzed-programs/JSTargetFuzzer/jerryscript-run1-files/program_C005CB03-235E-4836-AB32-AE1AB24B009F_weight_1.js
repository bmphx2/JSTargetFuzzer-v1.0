new WeakSet();
new Date();
const v5 = new Map();
const v9 = [v5,0.0];
const v10 = [v9,WeakSet,Map];
const v11 = [-5.400070212164981e+307,WeakSet,4.0,4.0];
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a15;
    this.h = a15;
    this.a = a15;
}
new F12(v11, v9, 4.0, v9);
new F12(v9, v9, 4.0, v9);
new F12(v10, v10, 4.0, v10);
function f21() {
}
function f22() {
    let v25 = -1992735215;
    function f26(a27, a28) {
        const o35 = {
            "d": a27,
            set b(a30) {
                let v31;
                try { v31 = a30(); } catch (e) {}
                v25 = a28;
                v31.valueOf = a30;
            },
            get c() {
                const v33 = [this];
                [545904634,a27,v33,this,v33];
                return 638957980;
            },
        };
        return o35;
    }
    f26(638957980, v25);
    const o42 = {
        get g() {
            new f21();
            return f21;
        },
        "h": f21,
        ...f21,
        "g": f21,
        "a": f21,
        ...f21,
    };
    return o42;
}
f22();
const v44 = f22();
f22();
const v50 = new Int8Array(12);
v50.byteLength *= 985;
let v52 = Int32Array;
let v53 = new v52(4096);
new Uint32Array(129);
let v59 = new Int16Array(512);
[,v52,v59,v53] = v59;
v44.g += 4096;
const v61 = Symbol.iterator;
const o74 = {
    [v61]() {
        let v63 = 10;
        const o73 = {
            next() {
                v63--;
                v63 == 0;
                for (let v68 = 0; v68 < 5; v68++) {
                    gc(10000);
                }
                const o72 = {
                    "done": f22,
                    "value": this,
                };
                return o72;
            },
        };
        return o73;
    },
};
