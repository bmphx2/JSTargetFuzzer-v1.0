const v2 = new Uint8ClampedArray(198);
const v5 = new Uint8Array(10);
new BigInt64Array(10);
function f9() {
    /[^123]?/gsum;
    /a{12,\1111/gi;
    return 198;
}
function f12() {
    return f9;
}
const v13 = [9007199254740992,2986,-2132228841,-2];
function f14(a15, a16, a17) {
    const v19 = arguments.callee;
    let v20;
    try { v20 = v19.call(v13); } catch (e) {}
    try { v19.bind(v2, v5, arguments); } catch (e) {}
    arguments[1] = v19;
    function F22(a24, a25) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a25;
        this.a = a15;
        this.f = 198;
    }
    new F22(a16, f12);
    new F22(v20, Uint8Array);
    new F22(v20, a15);
    return a16;
}
f14();
