new Map();
function f8(a9, a10) {
    const o23 = {
        ...a10,
        set c(a12) {
            const v13 = this;
            a9 /= this;
            const t6 = "toPrimitive";
            t6.toString = a12;
            new Int16Array(-11);
            new Uint16Array(16);
            new BigInt64Array(13);
        },
    };
    return o23;
}
const v24 = f8(f8, 1073741823);
const v25 = f8(v24, 57992);
const v26 = f8(v25, 1073741823);
const v28 = new Map();
let v29 = "a";
const v31 = [-4,129,42716,-15055,23707];
("toPrimitive").__proto__;
for (let v33 = 0; v33 < 5; v33++) {
    v29 + v33;
    v28[v29] = v33;
}
const v36 = v31.length;
function f37(a38, a39, a40) {
    const o41 = {
        "b": Map,
    };
    return o41;
}
f37(v25, v29, v24);
f37(v26, "toPrimitive", v24);
f37(v26, "unicode", v25);
"unicode" ** "toPrimitive";
const v48 = ~v36;
1.6682907010585947e+308 & "splice";
v29--;
v48 + 7;
!"1024";
