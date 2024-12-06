const v9 = [737237518,-7,-1024,-18636,1024,-4294967296,4294967297,255,16,-1435709011];
const v10 = [127,4,1936409055,2147483649];
const v11 = [11,-65536,37973,-65535,1000];
function f12(a13, a14, a15, a16) {
    const o37 = {
        ...v10,
        [-1398595459](a18, a19, a20) {
            try { a16(a18, -112907150, -8, this); } catch (e) {}
            return "e";
        },
        o(a26, a27) {
            new Int16Array(9);
            new Uint32Array(6);
            new BigInt64Array(1);
            return v11;
        },
    };
    return o37;
}
const v39 = f12(v9, "o", v9, f12(v10, "1073741825", v10, v11));
f12(v10, "g", v11, v39);
const v41 = `
    let v42;
    try { v42 = v11.includes(v39, 4294967296); } catch (e) {}
    Object.defineProperty(v42, v42, { writable: true, enumerable: true, value: v42 });
    const v44 = Symbol.iterator;
    const o53 = {
        [v44]() {
            let v46 = 10;
            const o52 = {
                next() {
                    v46--;
                    const v50 = v46 == 0;
                    const o51 = {
                        "done": v50,
                        "value": v46,
                    };
                    return o51;
                },
            };
            return o52;
        },
    };
`;
eval(v41);
