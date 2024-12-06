function f9(a10, a11) {
    const o22 = {
        "d": a11,
        __proto__: "string",
        valueOf(a13, a14, a15, a16) {
            let v17;
            try { v17 = this.toString(this, 1073741824, a13); } catch (e) {}
            let v18;
            try { v18 = v17(); } catch (e) {}
            const o19 = {
            };
            new Proxy(v18, o19);
            return "o";
        },
    };
    const v23 = async (a24, a25, a26) => {
        const v27 = [a11,a24,a25];
        [v27];
        [v27,a25,a24];
        await a11;
        return "bigint";
    };
    return o22;
}
f9("o", 268435456);
f9("o", -52089);
f9("bigint", 5);
new BigInt64Array(37070);
const v42 = new Uint32Array(227);
new Uint16Array(129);
function F46(a48, a49) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a49;
}
new F46(256, 129);
new F46(v42, 227);
new F46(v42, 129);
function f53() {
}
("string").replaceAll(2.2250738585072014e-308, ...v42, ..."o", 268435456, 4.0);
new Uint8Array(227);
let v74 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v74);
v74 /= v74;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
