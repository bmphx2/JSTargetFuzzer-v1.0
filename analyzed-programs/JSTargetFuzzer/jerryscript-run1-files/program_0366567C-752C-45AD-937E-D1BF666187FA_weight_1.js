new Set();
new WeakSet();
const v5 = [-987518.5482117643,411.74251786914215,-1.2641815943692702e+308,-480227.98477506946,0.8935879717221591];
const t3 = [2.599905263199421,-1000.0,-267994.85962117277,-5.0,4.0,-2.2250738585072014e-308];
t3[268435456] = v5;
new Uint8Array();
new ArrayBuffer(10);
new WeakMap();
let v20 = -9007199254740990n;
v20 /= -536870912n;
const v22 = [];
class C23 {
    valueOf(a25, a26) {
        const v27 = `
            const v28 = v22.__proto__;
            const v29 = [9007199254740992,2986,-2132228841,-2];
            function f30(a31, a32, a33) {
                const v35 = arguments.callee;
                let v36;
                try { v36 = v35.call(v29); } catch (e) {}
                return v36;
            }
            f30();
            delete v28?.d;
        `;
        eval(v27);
    }
}
async function f41(a42, a43) {
    a42 /= C23;
    return v22;
}
new Int32Array(10);
new Int16Array(9);
new Uint32Array(0);
class C52 {
}
const v53 = new C52();
function F54(a56, a57, a58, a59) {
    if (!new.target) { throw 'must be called with new'; }
}
const v60 = new F54(F54, F54, v53, C52);
new Date(1, v60, v53, "n");
