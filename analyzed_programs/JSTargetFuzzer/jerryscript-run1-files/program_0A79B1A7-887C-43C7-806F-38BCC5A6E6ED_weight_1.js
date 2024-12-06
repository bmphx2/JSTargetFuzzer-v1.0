const v0 = [65131,8,3,-23658,3,10000,-1024,-7];
const v1 = [-14590,45834,-8,-685339599,9223372036854775807,6714,41056,-12];
const v6 = [-8,[1],v1,v1,7];
let v8 = [[v6,v0,v0,v0],v0,v0,-8];
const v11 = new BigUint64Array(3578);
new Int8Array(38);
const v17 = new Int32Array(2170);
async function f18(a19, a20) {
    class C21 extends a20 {
    }
    try { a19.o(v1, 7); } catch (e) {}
    C21[Int8Array] = v11;
    let v23;
    try { v23 = C21.o(Int32Array, a19, C21, v8, C21); } catch (e) {}
    const v24 = --v8;
    try { v6.keys(...v17, v23, ...v11, ...v0, ...v24); } catch (e) {}
    return C21;
}
f18();
