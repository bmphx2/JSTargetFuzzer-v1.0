new Float32Array(3);
const v5 = new Uint8ClampedArray(4);
const v8 = new Int8Array(82);
const v9 = [v8];
const v11 = [[4,v5,v5,3]];
4 != Int8Array ? 4 : Int8Array;
const v17 = ("-30525")[v9];
let v18;
try { v18 = v17(v17, Int8Array, 82); } catch (e) {}
let v19;
try { v19 = v18(v11, Int8Array, 3, "p"); } catch (e) {}
try { v19("-30525"); } catch (e) {}
