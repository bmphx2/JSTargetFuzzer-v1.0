new Int8Array(5);
new Uint16Array(5);
new Uint32Array(3);
class C10 {
}
Array.from(C10);
function f13(a14, a15) {
    a14();
    return a15;
}
const v19 = new Uint8Array(8);
try { v19.reduce(f13); } catch (e) {}
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    (1000n).toString(7);
}
try { ("description").padEnd(9007199254740992); } catch (e) {}
new Uint32Array([6,17590]);
