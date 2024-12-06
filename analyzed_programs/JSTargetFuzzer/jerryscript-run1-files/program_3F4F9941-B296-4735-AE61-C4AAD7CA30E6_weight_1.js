new Uint32Array(3196);
new Int8Array(6);
const v14 = new Int16Array(5);
const v16 = new Float64Array();
try {
    function F18(a20) {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C21 extends F18 {
        constructor(a23, a24, a25) {
        }
        /*
        constructor(a27, a28, a29) {
            let v30 = 2110820557n;
            v30 /= 11n;
        }
        */
    }
    const v32 = new Proxy(v16);
    class C33 {
    }
    const v34 = new C33();
    const v36 = new Uint32Array(v34, v32, v14);
    v36.includes(Uint32Array);
} catch(e38) {
}
