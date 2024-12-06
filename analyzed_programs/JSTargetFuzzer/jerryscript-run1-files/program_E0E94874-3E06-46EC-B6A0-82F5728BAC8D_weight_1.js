function f3() {
    return -4096;
}
const v4 = [536870887,-4096,127];
const v5 = [127,127];
const v6 = [-4096,-4096];
[v5,v4,v4,127,[v6]];
[v4];
function f10(a11, a12) {
    for (let v13 = 0; v13 < 5; v13++) {
        const v14 = `
            function F15(a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        a11(v14);
    }
    return v6;
}
f3(f10, f10);
