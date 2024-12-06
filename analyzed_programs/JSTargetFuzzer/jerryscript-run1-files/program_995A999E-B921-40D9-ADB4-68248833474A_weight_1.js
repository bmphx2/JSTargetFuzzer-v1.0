function f3() {
    return 10n;
}
function f4() {
    return 1024n;
}
class C11 {
    valueOf(a13, a14) {
        function f18(a19) {
            const o20 = {
                "a": "setBigInt64",
            };
            return o20;
        }
        const v21 = f18("setBigInt64");
        const o22 = {
            "get": f18,
            "set": f18,
        };
        const v24 = new Proxy(v21, o22);
        v24.a *= -1000000000000.0;
        (-9n) ** 1579040446n;
    }
}
const v27 = new C11();
async function f28(a29, a30) {
    f3 /= C11;
    return f28;
}
f28(v27);
