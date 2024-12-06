const v1 = [null,null,null,null];
const v2 = [v1,null,v1];
const v3 = [v1,null,null];
try { Int8Array(Int8Array, Int8Array, Int8Array); } catch (e) {}
const v7 = [-65537,-1201537790,9,-3,16,-383550289,536870887,-9223372036854775808,-543695968];
for (let v8 = 0; v8 < 5; v8++) {
    Object.defineProperty(v7, "length", { value: v8 });
}
function f11(a12, a13, a14) {
    const o21 = {
        ...v3,
        set d(a16) {
            v1[Symbol.iterator] = a14;
            v3.__proto__;
            super.b;
        },
        [v2]: a13,
        "g": a14,
        64: -6n,
        ...v2,
        "c": a13,
        [a14]: a12,
        6: null,
        ...v1,
        __proto__: a14,
    };
    return o21;
}
const v22 = f11(v2, -6n, 1846331332n);
const v23 = f11(v3, -6n, -6n);
const v24 = f11(v1, -6n, 1846331332n);
let v27 = 4096;
function f28(a29, a30, a31) {
    const o45 = {
        [null]: v24,
        ...v3,
        13: a29,
        __proto__: v22,
        "f": -8,
        "b": 1846331332n,
        [v24](a33, a34) {
            const v35 = new f11(a33, -6n, a31);
            const v36 = new f11(a33, 1846331332n, -6n);
            const v37 = ~v36;
            try {
                function f39() {
                    new Int32Array(1432);
                    return arguments;
                }
                super.m(a29, v35, null, a33, v37);
            } catch(e44) {
            }
            return 1846331332n;
        },
    };
    return o45;
}
f28(v27, v22, -6n);
f28(v27, v24, 1846331332n);
f28(v27, v23, 1846331332n);
const v49 = [];
function f53(a54) {
    const o64 = {
        ...v49,
        set b(a56) {
            const o59 = {
                "maxByteLength": 2306,
            };
            const v61 = new ArrayBuffer(9, o59);
            new Int16Array(v61);
        },
        "f": -2147483649n,
        ...v49,
    };
    return o64;
}
("pUE").charAt(..."-21530");
v27++;
function f72(a73, a74, a75, a76) {
    const o86 = {
        "g": 4096,
        ...a76,
        "e": a74,
        set b(a78) {
            function F79(a81, a82) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a81;
            }
            new F79(a76, 129);
            new F79(a75, a75);
            new F79(F79, 481111932);
        },
    };
    return o86;
}
const v87 = f53(5n);
f53(-2147483649n);
f53(8n);
const v92 = new Uint8Array(633);
const v95 = new Float64Array(128);
const o102 = {
    get a() {
        try {
        } catch(e97) {
            function f98(a99, a100, a101) {
                return f98;
            }
        }
        return this;
    },
};
new Int16Array(3027);
const v106 = v92[12];
v87[v106];
v92.byteOffset >>= 128;
function f108(a109, a110, a111) {
    let [v112,v113,v114] = v95;
    try { v106(a110, a110, v92, v112, 5n); } catch (e) {}
    3027 ** a110;
    v113.__proto__;
    return a109;
}
f108(128, 3027, 5n);
