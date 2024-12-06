let v1 = 5;
let v6 = [1000,563618426,-2147483648,-128,4294967297,610465277,2085191715,1394241372,4294967296];
const v7 = [129,10000,-35665,-55393,65537,1047760558];
const v8 = [-55167,-4294967295,648409815];
function f9(a10, a11, a12, a13) {
    const o30 = {
        set a(a15) {
            try { new a13(a10, a11, a10); } catch (e) {}
            a12[Symbol.isConcatSpreadable] = a11;
        },
        valueOf(a23, a24) {
            let v26 = -65536;
            const v27 = v1--;
            v26--;
            v27 && a24;
            return a12;
        },
    };
    return o30;
}
f9("98nA", 65537, "i", v7);
let v32 = f9("-29379", v1, "i", v1);
const v33 = f9("i", 65537, "i", 65537);
class C34 {
    valueOf(a36, a37) {
        "-29379" % v7;
        const v40 = Symbol.iterator;
        const o49 = {
            [v40]() {
                let v42 = 10;
                const o48 = {
                    next() {
                        v42--;
                        const v46 = v42 == 0;
                        const o47 = {
                            "done": v46,
                            "value": v42,
                        };
                        return o47;
                    },
                };
                return o48;
            },
        };
        return o49;
    }
}
const v50 = new C34();
new C34();
new C34();
v50[v50];
({"a":v6,"b":v32,} = v33);
switch (65537) {
    case "98nA":
        try { ("-29379").matchAll(v32); } catch (e) {}
        break;
}
Object.defineProperty(v8, 2844, { configurable: true, enumerable: true, get: f9 });
throw v1;
