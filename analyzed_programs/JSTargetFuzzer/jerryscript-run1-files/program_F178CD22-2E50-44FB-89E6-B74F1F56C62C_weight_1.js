function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1073741823;
    if (this) {
        let {"g":v3,"h":v4,...v5} = this;
    } else {
        let [] = F0;
    }
    const v7 = new Map();
    for (let v8 = 0; v8 < 5; v8++) {
        v7["set"](v8);
    }
    this.e = 1073741823;
    this.g = 1073741823;
}
const v11 = new F0();
const v12 = new F0();
const v13 = new F0();
const v14 = [v13,v12,v13,v11];
const v15 = [v12,F0];
const v16 = [v12,v15,v15,v13,v13];
function f17() {
    return v16;
}
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a21;
    this.d = a20;
}
new F18(v16, v15);
new F18(v12, v15);
new F18(v16, v14);
function F26(a28) {
    if (!new.target) { throw 'must be called with new'; }
    const v31 = new Uint8ClampedArray(2634);
    v31.reverse();
    let v33 = 59;
    --v33 * 4096;
}
("undefined")["endsWith"](F26);
