new Float64Array(16);
const v9 = new WeakSet();
let v10;
try { v10 = v9.add(); } catch (e) {}
function f11(a12, a13) {
    for (let v14 = 0; v14 < 5; v14++) {
        const v15 = `
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        eval(v15);
    }
    return a12;
}
f11(f11, f11);
try {
    new WeakSet(v10);
} catch(e26) {
} finally {
}
new Uint16Array(255);
new Int16Array(3);
!v10;
let v32 = 3296n;
v32 <<= 55229n;
new Float32Array(198);
function f37() {
    return 3;
}
function f38(a39, a40) {
    ([2.5870964546644305e+306])["unshift"]();
    0 < 2;
    const v47 = a39();
    function F48(a50) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f51() {
        f38(arguments, f11);
        a39 = 2;
        arguments[2147483648];
        return arguments;
    }
    f51();
    return v47;
}
new Promise(f38);
