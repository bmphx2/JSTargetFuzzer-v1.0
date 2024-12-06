for (let v8 = 0; v8 < 5; v8++) {
    const v9 = `
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
        }
    `;
    eval(v9);
}
new Int16Array(201);
new Float64Array(2164);
new Uint32Array(3);
function f23() {
}
try { Symbol.keyFor("function"); } catch (e) {}
("function").trim();
function F34(a36, a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
}
new Uint8Array(0);
function f45(a46, a47, a48, a49) {
    return a47;
}
let v50 = -1588633711n;
v50 += -2147483649n;
let v53 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v55 = new Int32Array(127);
v53 /= v55;
new WeakSet();
let v60 = 41365n;
-(v60--);
new BigUint64Array(7);
new BigInt64Array(2);
{
}
let v72 = 1000;
const v73 = ++v72;
!v72 * v73;
([5]).reverse();
