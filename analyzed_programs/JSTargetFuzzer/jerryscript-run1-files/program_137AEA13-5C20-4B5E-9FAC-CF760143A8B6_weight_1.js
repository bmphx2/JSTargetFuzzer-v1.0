const v2 = new Uint8ClampedArray(13);
new Int32Array(v2);
new Uint8Array(258);
function f9(a10, a11, a12, a13) {
    function F14(a16, a17, a18) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F14();
    const v20 = [0.6977365069950624,78.03542615080664,-106.48849759874906,-2.220446049250313e-16,257102.5219188279,-5.0,1.7976931348623157e+308];
    function f21() {
        return v20;
    }
    const o35 = {
        __proto__: v2,
        [Int32Array]: a11,
        65535: f9,
        o(a23, a24, a25, a26) {
            function F27(a29, a30, a31) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = a29;
            }
            const v32 = new F27(a26, a13, 13);
            const v33 = new F27(a10, a25, a10);
            new F27(258, a12, v33);
            v32.h /= a10;
            return Uint8ClampedArray;
        },
    };
    return o35;
}
const v36 = f9(186, v2, 258, 186);
f9(258, v36, 186, 13);
f9(13, v2, 186, 186);
const v42 = [536870887n,0n,5n];
let v43 = [5n,5n,v42,v42,13,v2,v36];
const v44 = [v43,v43,v42,5n,0n];
const v45 = [536870887n,v43];
[v44,0n];
const v49 = new Float32Array();
("string").search(v49.sort);
const v52 = [v43];
([]).sort();
function f59() {
    return f59;
}
const t45 = "h";
t45[201] = 536870887n;
let v62;
try {
const t0 = "localeCompare";
v62 = new t0(v42, v52, v52, 58270);
} catch (e) {}
async function* f63(a64, a65, a66) {
    ({"length":a64,...v43} = a65);
    yield v42;
    yield await a64;
    return 0n;
}
f63(58270, v45, v62);
