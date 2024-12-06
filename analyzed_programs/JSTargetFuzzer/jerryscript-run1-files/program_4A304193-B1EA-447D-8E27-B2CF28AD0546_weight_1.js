function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
    for (const v7 in a5) {
        this[v7] = 9077;
    }
    let v10 = --a6;
    ++v10;
    -v10;
    this && -1;
    this.f = a6;
}
const v14 = new F3(16, 9077);
const v15 = new F3(v14, 16);
const v16 = new F3(-1, 9077);
function F17(a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a20;
    this.h = a20;
    this.f = 16;
}
new F17(v16, v14, -1);
new F17(v14, v15, 16);
new F17(v15, v15, 16);
const v28 = [46082,2147483647,-2147483647,9007199254740991];
class C29 {
    constructor(a31, a32) {
        switch (a31) {
            case 2147483648:
                break;
            case v28:
                break;
        }
    }
}
new C29();
