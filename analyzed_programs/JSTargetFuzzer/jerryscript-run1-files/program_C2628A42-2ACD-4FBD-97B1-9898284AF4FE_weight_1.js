const v9 = [0,59979,0,11];
const v10 = [-1,11,3,3,5];
const v11 = [11];
function f15() {
    const o16 = {
        9: v9,
        "g": -1,
        [1073741825]: f15,
        [-1]: v11,
        [v10]: v10,
        __proto__: f15,
    };
    return o16;
}
let v18 = [f15()];
let v19 = 0;
while (v19 < 9) {
    v18 = v10;
    v19++;
}
try { v18.toString(); } catch (e) {}
for (let v24 in v11) {
    v24--;
    v18["findIndex"](f15, v11);
}
