for (let v5 = 0; v5 < 32; v5++) {
    const t1 = 54993;
    t1["p" + v5] = v5;
}
function f10(a11, a12) {
    const o13 = {
        ...a11,
        "a": 811866439,
        "e": 9007199254740990,
        "d": a11,
        "b": 9007199254740991,
        "f": 811866439,
        ...a11,
        "c": 54993,
        "h": 811866439,
        ...a11,
    };
    return o13;
}
f10(54993, -2);
f10(f10, -2);
const v16 = f10(9007199254740990, -2);
const v20 = [65535n,0n,964329252n];
let v21 = [v20,964329252n,v20,v20];
const v22 = [v21,v21,v20,964329252n,f10];
const v23 = [65535n,v21];
[v22,0n];
f10(811866439, -9007199254740990, v16, -1946871203, -9007199254740990);
54993 ^ -39813;
const v30 = [v21];
const t30 = "fdNr";
t30[0] = 65535n;
switch (v20) {
    default:
        const v38 = Symbol.iterator;
        const o47 = {
            [v38]() {
                let v40 = 10;
                const o46 = {
                    next() {
                        v40--;
                        const v44 = v40 == 0;
                        const o45 = {
                            "done": v44,
                            "value": v40,
                        };
                        return o45;
                    },
                };
                return o46;
            },
        };
        break;
}
let v48;
try {
const t0 = "localeCompare";
v48 = new t0(v20, v30, v30, 58270);
} catch (e) {}
async function* f49(a50, a51, a52) {
    ({"length":a50,...v21} = a51);
    yield v20;
    await a50;
    yield "fdNr";
    return a50;
}
f49(58270, v23, v48);
