let v4;
try {
const t0 = "undefined";
v4 = t0("undefined", 0, 0, 5630);
} catch (e) {}
function f11() {
    return 0;
}
const o21 = {
    m(a13, a14, a15) {
        return this;
    },
    toString(a17) {
        let v18;
        try { v18 = a17(); } catch (e) {}
        const v19 = ~v18;
        function f20() {
            return v19;
        }
        return v4;
    },
};
new Proxy(Date, o21);
try { ("undefined").endsWith(v4, 5630); } catch (e) {}
function F28(a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    try { a31(F28); } catch (e) {}
}
async function f34(a35, a36) {
    await 512;
    return 129;
}
SyntaxError();
