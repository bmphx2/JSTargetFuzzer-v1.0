const v6 = [1073741824,-58708];
const v9 = new Array(10);
let v11 = 4096;
function f13(a14, a15, a16, a17) {
    const o18 = {
        ...a17,
    };
    return v6;
}
let v19 = f13(v11, 481111932, 129, v9);
f13(10, 481111932, 10, f13);
f13(v19, v11, 481111932, v11);
v19.g;
try {
    let v23;
    try { v23 = v19.isSealed(); } catch (e) {}
    v19 = v23;
    v11 = v23;
} catch(e24) {
    e24[0] = e24;
    try { e24(Array); } catch (e) {}
}
const v26 = [v6,6,-15];
const v27 = [1073741824,1073741824,v26,6];
function F28(a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    v6.g = a31;
}
new F28(v27, v26);
new F28(v27, v26);
new F28(v6, v6);
("valueOf").split("trimLeft");
