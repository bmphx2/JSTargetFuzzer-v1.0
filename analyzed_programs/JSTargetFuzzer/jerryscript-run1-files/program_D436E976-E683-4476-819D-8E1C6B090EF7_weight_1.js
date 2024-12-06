const v11 = new Uint32Array(1);
const v14 = new BigUint64Array(2327);
new Float64Array(512);
for (let v18 = 0; v18 < 32; v18++) {
    v14["p" + v18] = v18;
}
const v21 = `
    let v22;
    try { v22 = new Uint32Array(...1, ...v11, ...-9007199254740991n, 9n); } catch (e) {}
    let v23 = v14.length;
    v22--;
    const v29 = +v22;
    const v30 = v23--;
    Math.cos(v29);
    v30 << 9007199254740990;
`;
eval(v21);
