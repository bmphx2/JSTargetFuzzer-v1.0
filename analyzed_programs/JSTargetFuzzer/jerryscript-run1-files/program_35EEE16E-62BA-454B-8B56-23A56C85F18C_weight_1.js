function f0() {
    const o11 = {
        __proto__: "0UMeB",
        ["0UMeB"](a5, a6) {
            try { a6.setUint8(); } catch (e) {}
            super.b = a5;
            super.h = -1;
            return "0UMeB";
        },
        "a": "0UMeB",
        "f": "0UMeB",
        3421: -1,
    };
    return o11;
}
f0();
const v13 = f0();
const v14 = f0();
const v15 = [34303,13,-65537,128,-9007199254740992,-9223372036854775808,-2147483647];
const v16 = [30454,-4294967296,-536870912,-41821,0,1073741824];
const v17 = [2051565212,109087638,2147483648,1024,-911479956,248353086];
function f18(a19, a20, a21) {
    const o27 = {
        [v13]: v14,
        ...a21,
        "c": f0,
        [a19]: v17,
        "e": a20,
        get a() {
            [] = v16;
            const o23 = {
            };
            const v25 = new Proxy(a21, o23);
            o23[v25];
            return a21;
        },
    };
    return o27;
}
const v28 = f18(f18, v15, v13);
f18(v15, v16, v14);
let v30 = f18(v14, v17, v14);
const v33 = new BigUint64Array(0);
const v36 = new BigInt64Array(1024);
const v39 = new Int8Array(2692);
v39.length;
const o41 = {
    __proto__: v17,
    536870912: 2692,
};
let v42;
try { v42 = v15.pop(); } catch (e) {}
try { new v42(f18); } catch (e) {}
v36[v28] = v33;
v30 ^= v28;
