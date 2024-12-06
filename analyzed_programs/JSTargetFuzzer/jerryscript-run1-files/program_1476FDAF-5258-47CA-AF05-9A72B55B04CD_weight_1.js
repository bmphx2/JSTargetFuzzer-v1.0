function f6() {
    return 64;
}
const v8 = [64,,];
const v9 = [,];
const v10 = [v9,-4096];
function f11() {
}
function f12() {
    const o25 = {
        get g() {
            new f11();
            function F17(a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = 594861409;
                this.a = a19;
            }
            new F17(2, v8);
            new F17(2133356126, v9);
            new F17(64, v10);
            return f11;
        },
        "h": f11,
        ...f11,
        "g": -16620,
        "a": f11,
        ...f11,
    };
    return o25;
}
f12();
const v27 = f12();
f12();
let v31 = Int32Array;
v8[undefined] = f11;
const v32 = v27.h;
f12 = v32;
const o33 = {
    "deleteProperty": f11,
};
const v35 = new Proxy(v32, o33);
let v36 = new v31(4096);
new Uint32Array(129);
let v42 = new Int16Array(512);
[,v31,v42,v36] = v42;
v27.g += 4096;
const v44 = Symbol.iterator;
const o56 = {
    [v44]() {
        const o55 = {
            next() {
                let v47 = this;
                v47--;
                const v50 = 10 == 0;
                const o54 = {
                    "done": v50,
                    get a() {
                        v42 = v35;
                        try {
                            super.m();
                        } catch(e53) {
                        }
                        return 64;
                    },
                    "value": 10,
                };
                return o54;
            },
        };
        return this;
    },
};
