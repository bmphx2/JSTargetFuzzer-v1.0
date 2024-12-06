[-38516,-2,-46824,-555182309];
[64,-33224,-8,-20915,4,46404,-2147483647,8,1842322313];
[1073741823,1304023869,64,-4,-1024,-4096,536870887,-15,49518,-65323];
new WeakSet();
let v12 = Uint16Array;
[8,512];
for (const v16 in "valueOf") {
    Array.from(v16);
}
v12 = v12;
function f18(a19, a20, a21) {
    const t11 = "valueOf";
    t11["valueOf"] = a21;
    for (let v22 = 0; v22 < 5; v22++) {
        const v23 = `
            function F24(a26, a27) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        eval(v23);
    }
    const v30 = a20--;
    let v31;
    try { v31 = a21(a20, a21, v30); } catch (e) {}
    return v31;
}
f18(0.6146762465894854);
