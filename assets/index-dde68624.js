(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = t(i);
    fetch(i.href, r);
  }
})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Kr = "151",
  Cn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  Ln = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  xo = 0,
  ss = 1,
  Mo = 2,
  Ta = 1,
  So = 2,
  hi = 3,
  ln = 0,
  pt = 1,
  kt = 2,
  an = 0,
  Yn = 1,
  as = 2,
  os = 3,
  ls = 4,
  yo = 5,
  qn = 100,
  bo = 101,
  wo = 102,
  cs = 103,
  hs = 104,
  Eo = 200,
  Ao = 201,
  To = 202,
  Co = 203,
  Ca = 204,
  La = 205,
  Lo = 206,
  Po = 207,
  Ro = 208,
  Do = 209,
  Io = 210,
  Uo = 0,
  No = 1,
  Fo = 2,
  Vr = 3,
  Oo = 4,
  zo = 5,
  Bo = 6,
  ko = 7,
  Pa = 0,
  Go = 1,
  Vo = 2,
  Kt = 0,
  Ho = 1,
  Wo = 2,
  Xo = 3,
  qo = 4,
  $o = 5,
  Ra = 300,
  Zn = 301,
  Jn = 302,
  Hr = 303,
  Wr = 304,
  ji = 306,
  Xr = 1e3,
  It = 1001,
  fi = 1002,
  ut = 1003,
  us = 1004,
  cr = 1005,
  bt = 1006,
  Yo = 1007,
  pi = 1008,
  yn = 1009,
  jo = 1010,
  Ko = 1011,
  Da = 1012,
  Zo = 1013,
  xn = 1014,
  Mn = 1015,
  mi = 1016,
  Jo = 1017,
  Qo = 1018,
  jn = 1020,
  el = 1021,
  Ut = 1023,
  tl = 1024,
  nl = 1025,
  Sn = 1026,
  Qn = 1027,
  il = 1028,
  rl = 1029,
  sl = 1030,
  al = 1031,
  ol = 1033,
  hr = 33776,
  ur = 33777,
  dr = 33778,
  fr = 33779,
  ds = 35840,
  fs = 35841,
  ps = 35842,
  ms = 35843,
  ll = 36196,
  gs = 37492,
  _s = 37496,
  vs = 37808,
  xs = 37809,
  Ms = 37810,
  Ss = 37811,
  ys = 37812,
  bs = 37813,
  ws = 37814,
  Es = 37815,
  As = 37816,
  Ts = 37817,
  Cs = 37818,
  Ls = 37819,
  Ps = 37820,
  Rs = 37821,
  pr = 36492,
  cl = 36283,
  Ds = 36284,
  Is = 36285,
  Us = 36286,
  bn = 3e3,
  Ge = 3001,
  hl = 3200,
  ul = 3201,
  Ia = 0,
  dl = 1,
  Ot = "srgb",
  gi = "srgb-linear",
  Ua = "display-p3",
  mr = 7680,
  fl = 519,
  Ns = 35044,
  Fs = "300 es",
  qr = 1035;
class Tn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, o = i.length; r < o; r++) i[r].call(this, e);
      e.target = null;
    }
  }
}
const at = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  gr = Math.PI / 180,
  $r = 180 / Math.PI;
function Mi() {
  const s = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    at[s & 255] +
    at[(s >> 8) & 255] +
    at[(s >> 16) & 255] +
    at[(s >> 24) & 255] +
    "-" +
    at[e & 255] +
    at[(e >> 8) & 255] +
    "-" +
    at[((e >> 16) & 15) | 64] +
    at[(e >> 24) & 255] +
    "-" +
    at[(t & 63) | 128] +
    at[(t >> 8) & 255] +
    "-" +
    at[(t >> 16) & 255] +
    at[(t >> 24) & 255] +
    at[n & 255] +
    at[(n >> 8) & 255] +
    at[(n >> 16) & 255] +
    at[(n >> 24) & 255]
  ).toLowerCase();
}
function dt(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function pl(s, e) {
  return ((s % e) + e) % e;
}
function _r(s, e, t) {
  return (1 - t) * s + t * e;
}
function Os(s) {
  return (s & (s - 1)) === 0 && s !== 0;
}
function ml(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function Ti(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function _t(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Ce {
  constructor(e = 0, t = 0) {
    (Ce.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(dt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = this.x - e.x,
      o = this.y - e.y;
    return (this.x = r * n - o * i + e.x), (this.y = r * i + o * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ie {
  constructor() {
    (Ie.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }
  set(e, t, n, i, r, o, a, h, c) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = i),
      (u[2] = a),
      (u[3] = t),
      (u[4] = r),
      (u[5] = h),
      (u[6] = n),
      (u[7] = o),
      (u[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      o = n[0],
      a = n[3],
      h = n[6],
      c = n[1],
      u = n[4],
      d = n[7],
      f = n[2],
      m = n[5],
      g = n[8],
      v = i[0],
      p = i[3],
      l = i[6],
      A = i[1],
      E = i[4],
      M = i[7],
      y = i[2],
      L = i[5],
      D = i[8];
    return (
      (r[0] = o * v + a * A + h * y),
      (r[3] = o * p + a * E + h * L),
      (r[6] = o * l + a * M + h * D),
      (r[1] = c * v + u * A + d * y),
      (r[4] = c * p + u * E + d * L),
      (r[7] = c * l + u * M + d * D),
      (r[2] = f * v + m * A + g * y),
      (r[5] = f * p + m * E + g * L),
      (r[8] = f * l + m * M + g * D),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      o = e[4],
      a = e[5],
      h = e[6],
      c = e[7],
      u = e[8];
    return (
      t * o * u - t * a * c - n * r * u + n * a * h + i * r * c - i * o * h
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      o = e[4],
      a = e[5],
      h = e[6],
      c = e[7],
      u = e[8],
      d = u * o - a * c,
      f = a * h - u * r,
      m = c * r - o * h,
      g = t * d + n * f + i * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / g;
    return (
      (e[0] = d * v),
      (e[1] = (i * c - u * n) * v),
      (e[2] = (a * n - i * o) * v),
      (e[3] = f * v),
      (e[4] = (u * t - i * h) * v),
      (e[5] = (i * r - a * t) * v),
      (e[6] = m * v),
      (e[7] = (n * h - c * t) * v),
      (e[8] = (o * t - n * r) * v),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, r, o, a) {
    const h = Math.cos(r),
      c = Math.sin(r);
    return (
      this.set(
        n * h,
        n * c,
        -n * (h * o + c * a) + o + e,
        -i * c,
        i * h,
        -i * (-c * o + h * a) + a + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(vr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(vr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(vr.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const vr = new Ie();
function Na(s) {
  for (let e = s.length - 1; e >= 0; --e) if (s[e] >= 65535) return !0;
  return !1;
}
function _i(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function Kn(s) {
  return s < 0.04045
    ? s * 0.0773993808
    : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function xr(s) {
  return s < 0.0031308 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
const gl = new Ie().fromArray([
    0.8224621, 0.0331941, 0.0170827, 0.177538, 0.9668058, 0.0723974, -1e-7,
    1e-7, 0.9105199,
  ]),
  _l = new Ie().fromArray([
    1.2249401, -0.0420569, -0.0196376, -0.2249404, 1.0420571, -0.0786361, 1e-7,
    0, 1.0982735,
  ]);
function vl(s) {
  return s.convertSRGBToLinear().applyMatrix3(_l);
}
function xl(s) {
  return s.applyMatrix3(gl).convertLinearToSRGB();
}
const Ml = { [gi]: (s) => s, [Ot]: (s) => s.convertSRGBToLinear(), [Ua]: vl },
  Sl = { [gi]: (s) => s, [Ot]: (s) => s.convertLinearToSRGB(), [Ua]: xl },
  vt = {
    enabled: !1,
    get legacyMode() {
      return (
        console.warn(
          "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
        ),
        !this.enabled
      );
    },
    set legacyMode(s) {
      console.warn(
        "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
      ),
        (this.enabled = !s);
    },
    get workingColorSpace() {
      return gi;
    },
    set workingColorSpace(s) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (s, e, t) {
      if (this.enabled === !1 || e === t || !e || !t) return s;
      const n = Ml[e],
        i = Sl[t];
      if (n === void 0 || i === void 0)
        throw new Error(
          `Unsupported color space conversion, "${e}" to "${t}".`
        );
      return i(n(s));
    },
    fromWorkingColorSpace: function (s, e) {
      return this.convert(s, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (s, e) {
      return this.convert(s, e, this.workingColorSpace);
    },
  };
let Pn;
class Fa {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Pn === void 0 && (Pn = _i("canvas")),
        (Pn.width = e.width),
        (Pn.height = e.height);
      const n = Pn.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = Pn);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = _i("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        r = i.data;
      for (let o = 0; o < r.length; o++) r[o] = Kn(r[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(Kn(t[n] / 255) * 255))
          : (t[n] = Kn(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
class Oa {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = Mi()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let o = 0, a = i.length; o < a; o++)
          i[o].isDataTexture ? r.push(Mr(i[o].image)) : r.push(Mr(i[o]));
      } else r = Mr(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Mr(s) {
  return (typeof HTMLImageElement < "u" && s instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && s instanceof ImageBitmap)
    ? Fa.getDataURL(s)
    : s.data
    ? {
        data: Array.from(s.data),
        width: s.width,
        height: s.height,
        type: s.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let yl = 0;
class mt extends Tn {
  constructor(
    e = mt.DEFAULT_IMAGE,
    t = mt.DEFAULT_MAPPING,
    n = It,
    i = It,
    r = bt,
    o = pi,
    a = Ut,
    h = yn,
    c = mt.DEFAULT_ANISOTROPY,
    u = bn
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: yl++ }),
      (this.uuid = Mi()),
      (this.name = ""),
      (this.source = new Oa(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = r),
      (this.minFilter = o),
      (this.anisotropy = c),
      (this.format = a),
      (this.internalFormat = null),
      (this.type = h),
      (this.offset = new Ce(0, 0)),
      (this.repeat = new Ce(1, 1)),
      (this.center = new Ce(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Ie()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = u),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.encoding = e.encoding),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Ra) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Xr:
          e.x = e.x - Math.floor(e.x);
          break;
        case It:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case fi:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Xr:
          e.y = e.y - Math.floor(e.y);
          break;
        case It:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case fi:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
}
mt.DEFAULT_IMAGE = null;
mt.DEFAULT_MAPPING = Ra;
mt.DEFAULT_ANISOTROPY = 1;
class nt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (nt.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = this.w,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * r),
      (this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * r),
      (this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * r),
      (this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * r),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const h = e.elements,
      c = h[0],
      u = h[4],
      d = h[8],
      f = h[1],
      m = h[5],
      g = h[9],
      v = h[2],
      p = h[6],
      l = h[10];
    if (
      Math.abs(u - f) < 0.01 &&
      Math.abs(d - v) < 0.01 &&
      Math.abs(g - p) < 0.01
    ) {
      if (
        Math.abs(u + f) < 0.1 &&
        Math.abs(d + v) < 0.1 &&
        Math.abs(g + p) < 0.1 &&
        Math.abs(c + m + l - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const E = (c + 1) / 2,
        M = (m + 1) / 2,
        y = (l + 1) / 2,
        L = (u + f) / 4,
        D = (d + v) / 4,
        I = (g + p) / 4;
      return (
        E > M && E > y
          ? E < 0.01
            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(E)), (i = L / n), (r = D / n))
          : M > y
          ? M < 0.01
            ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
            : ((i = Math.sqrt(M)), (n = L / i), (r = I / i))
          : y < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
          : ((r = Math.sqrt(y)), (n = D / r), (i = I / r)),
        this.set(n, i, r, t),
        this
      );
    }
    let A = Math.sqrt(
      (p - g) * (p - g) + (d - v) * (d - v) + (f - u) * (f - u)
    );
    return (
      Math.abs(A) < 0.001 && (A = 1),
      (this.x = (p - g) / A),
      (this.y = (d - v) / A),
      (this.z = (f - u) / A),
      (this.w = Math.acos((c + m + l - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class wn extends Tn {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new nt(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new nt(0, 0, e, t));
    const i = { width: e, height: t, depth: 1 };
    (this.texture = new mt(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.internalFormat =
        n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : bt),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
      (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new Oa(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class za extends mt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = ut),
      (this.minFilter = ut),
      (this.wrapR = It),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class bl extends mt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = ut),
      (this.minFilter = ut),
      (this.wrapR = It),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class En {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(e, t, n, i, r, o, a) {
    let h = n[i + 0],
      c = n[i + 1],
      u = n[i + 2],
      d = n[i + 3];
    const f = r[o + 0],
      m = r[o + 1],
      g = r[o + 2],
      v = r[o + 3];
    if (a === 0) {
      (e[t + 0] = h), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = d);
      return;
    }
    if (a === 1) {
      (e[t + 0] = f), (e[t + 1] = m), (e[t + 2] = g), (e[t + 3] = v);
      return;
    }
    if (d !== v || h !== f || c !== m || u !== g) {
      let p = 1 - a;
      const l = h * f + c * m + u * g + d * v,
        A = l >= 0 ? 1 : -1,
        E = 1 - l * l;
      if (E > Number.EPSILON) {
        const y = Math.sqrt(E),
          L = Math.atan2(y, l * A);
        (p = Math.sin(p * L) / y), (a = Math.sin(a * L) / y);
      }
      const M = a * A;
      if (
        ((h = h * p + f * M),
        (c = c * p + m * M),
        (u = u * p + g * M),
        (d = d * p + v * M),
        p === 1 - a)
      ) {
        const y = 1 / Math.sqrt(h * h + c * c + u * u + d * d);
        (h *= y), (c *= y), (u *= y), (d *= y);
      }
    }
    (e[t] = h), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = d);
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, o) {
    const a = n[i],
      h = n[i + 1],
      c = n[i + 2],
      u = n[i + 3],
      d = r[o],
      f = r[o + 1],
      m = r[o + 2],
      g = r[o + 3];
    return (
      (e[t] = a * g + u * d + h * m - c * f),
      (e[t + 1] = h * g + u * f + c * d - a * m),
      (e[t + 2] = c * g + u * m + a * f - h * d),
      (e[t + 3] = u * g - a * d - h * f - c * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    const n = e._x,
      i = e._y,
      r = e._z,
      o = e._order,
      a = Math.cos,
      h = Math.sin,
      c = a(n / 2),
      u = a(i / 2),
      d = a(r / 2),
      f = h(n / 2),
      m = h(i / 2),
      g = h(r / 2);
    switch (o) {
      case "XYZ":
        (this._x = f * u * d + c * m * g),
          (this._y = c * m * d - f * u * g),
          (this._z = c * u * g + f * m * d),
          (this._w = c * u * d - f * m * g);
        break;
      case "YXZ":
        (this._x = f * u * d + c * m * g),
          (this._y = c * m * d - f * u * g),
          (this._z = c * u * g - f * m * d),
          (this._w = c * u * d + f * m * g);
        break;
      case "ZXY":
        (this._x = f * u * d - c * m * g),
          (this._y = c * m * d + f * u * g),
          (this._z = c * u * g + f * m * d),
          (this._w = c * u * d - f * m * g);
        break;
      case "ZYX":
        (this._x = f * u * d - c * m * g),
          (this._y = c * m * d + f * u * g),
          (this._z = c * u * g - f * m * d),
          (this._w = c * u * d + f * m * g);
        break;
      case "YZX":
        (this._x = f * u * d + c * m * g),
          (this._y = c * m * d + f * u * g),
          (this._z = c * u * g - f * m * d),
          (this._w = c * u * d - f * m * g);
        break;
      case "XZY":
        (this._x = f * u * d - c * m * g),
          (this._y = c * m * d - f * u * g),
          (this._z = c * u * g + f * m * d),
          (this._w = c * u * d + f * m * g);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      r = t[8],
      o = t[1],
      a = t[5],
      h = t[9],
      c = t[2],
      u = t[6],
      d = t[10],
      f = n + a + d;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      (this._w = 0.25 / m),
        (this._x = (u - h) * m),
        (this._y = (r - c) * m),
        (this._z = (o - i) * m);
    } else if (n > a && n > d) {
      const m = 2 * Math.sqrt(1 + n - a - d);
      (this._w = (u - h) / m),
        (this._x = 0.25 * m),
        (this._y = (i + o) / m),
        (this._z = (r + c) / m);
    } else if (a > d) {
      const m = 2 * Math.sqrt(1 + a - n - d);
      (this._w = (r - c) / m),
        (this._x = (i + o) / m),
        (this._y = 0.25 * m),
        (this._z = (h + u) / m);
    } else {
      const m = 2 * Math.sqrt(1 + d - n - a);
      (this._w = (o - i) / m),
        (this._x = (r + c) / m),
        (this._y = (h + u) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(dt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      r = e._z,
      o = e._w,
      a = t._x,
      h = t._y,
      c = t._z,
      u = t._w;
    return (
      (this._x = n * u + o * a + i * c - r * h),
      (this._y = i * u + o * h + r * a - n * c),
      (this._z = r * u + o * c + n * h - i * a),
      (this._w = o * u - n * a - i * h - r * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      r = this._z,
      o = this._w;
    let a = o * e._w + n * e._x + i * e._y + r * e._z;
    if (
      (a < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (a = -a))
        : this.copy(e),
      a >= 1)
    )
      return (this._w = o), (this._x = n), (this._y = i), (this._z = r), this;
    const h = 1 - a * a;
    if (h <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * o + t * this._w),
        (this._x = m * n + t * this._x),
        (this._y = m * i + t * this._y),
        (this._z = m * r + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const c = Math.sqrt(h),
      u = Math.atan2(c, a),
      d = Math.sin((1 - t) * u) / c,
      f = Math.sin(t * u) / c;
    return (
      (this._w = o * d + this._w * f),
      (this._x = n * d + this._x * f),
      (this._y = i * d + this._y * f),
      (this._z = r * d + this._z * f),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      i = 2 * Math.PI * Math.random(),
      r = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(r),
      n * Math.cos(r),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class U {
  constructor(e = 0, t = 0, n = 0) {
    (U.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(zs.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(zs.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6] * i),
      (this.y = r[1] * t + r[4] * n + r[7] * i),
      (this.z = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements,
      o = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return (
      (this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * o),
      (this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * o),
      (this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * o),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.x,
      o = e.y,
      a = e.z,
      h = e.w,
      c = h * t + o * i - a * n,
      u = h * n + a * t - r * i,
      d = h * i + r * n - o * t,
      f = -r * t - o * n - a * i;
    return (
      (this.x = c * h + f * -r + u * -a - d * -o),
      (this.y = u * h + f * -o + d * -r - c * -a),
      (this.z = d * h + f * -a + c * -o - u * -r),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[4] * n + r[8] * i),
      (this.y = r[1] * t + r[5] * n + r[9] * i),
      (this.z = r[2] * t + r[6] * n + r[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      r = e.z,
      o = t.x,
      a = t.y,
      h = t.z;
    return (
      (this.x = i * h - r * a),
      (this.y = r * o - n * h),
      (this.z = n * a - i * o),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Sr.copy(this).projectOnVector(e), this.sub(Sr);
  }
  reflect(e) {
    return this.sub(Sr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(dt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Sr = new U(),
  zs = new En();
class Si {
  constructor(
    e = new U(1 / 0, 1 / 0, 1 / 0),
    t = new U(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Xt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Xt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Xt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    if ((e.updateWorldMatrix(!1, !1), e.boundingBox !== void 0))
      e.boundingBox === null && e.computeBoundingBox(),
        Rn.copy(e.boundingBox),
        Rn.applyMatrix4(e.matrixWorld),
        this.union(Rn);
    else {
      const i = e.geometry;
      if (i !== void 0)
        if (t && i.attributes !== void 0 && i.attributes.position !== void 0) {
          const r = i.attributes.position;
          for (let o = 0, a = r.count; o < a; o++)
            Xt.fromBufferAttribute(r, o).applyMatrix4(e.matrixWorld),
              this.expandByPoint(Xt);
        } else
          i.boundingBox === null && i.computeBoundingBox(),
            Rn.copy(i.boundingBox),
            Rn.applyMatrix4(e.matrixWorld),
            this.union(Rn);
    }
    const n = e.children;
    for (let i = 0, r = n.length; i < r; i++) this.expandByObject(n[i], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Xt),
      Xt.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(ai),
      Ci.subVectors(this.max, ai),
      Dn.subVectors(e.a, ai),
      In.subVectors(e.b, ai),
      Un.subVectors(e.c, ai),
      tn.subVectors(In, Dn),
      nn.subVectors(Un, In),
      fn.subVectors(Dn, Un);
    let t = [
      0,
      -tn.z,
      tn.y,
      0,
      -nn.z,
      nn.y,
      0,
      -fn.z,
      fn.y,
      tn.z,
      0,
      -tn.x,
      nn.z,
      0,
      -nn.x,
      fn.z,
      0,
      -fn.x,
      -tn.y,
      tn.x,
      0,
      -nn.y,
      nn.x,
      0,
      -fn.y,
      fn.x,
      0,
    ];
    return !yr(t, Dn, In, Un, Ci) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !yr(t, Dn, In, Un, Ci))
      ? !1
      : (Li.crossVectors(tn, nn),
        (t = [Li.x, Li.y, Li.z]),
        yr(t, Dn, In, Un, Ci));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Xt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(Xt).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (Wt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Wt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Wt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Wt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Wt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Wt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Wt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Wt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Wt),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Wt = [
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
    new U(),
  ],
  Xt = new U(),
  Rn = new Si(),
  Dn = new U(),
  In = new U(),
  Un = new U(),
  tn = new U(),
  nn = new U(),
  fn = new U(),
  ai = new U(),
  Ci = new U(),
  Li = new U(),
  pn = new U();
function yr(s, e, t, n, i) {
  for (let r = 0, o = s.length - 3; r <= o; r += 3) {
    pn.fromArray(s, r);
    const a =
        i.x * Math.abs(pn.x) + i.y * Math.abs(pn.y) + i.z * Math.abs(pn.z),
      h = e.dot(pn),
      c = t.dot(pn),
      u = n.dot(pn);
    if (Math.max(-Math.max(h, c, u), Math.min(h, c, u)) > a) return !1;
  }
  return !0;
}
const wl = new Si(),
  oi = new U(),
  br = new U();
class Zr {
  constructor(e = new U(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : wl.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, o = e.length; r < o; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    oi.subVectors(e, this.center);
    const t = oi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.addScaledVector(oi, i / n), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (br.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(oi.copy(e.center).add(br)),
            this.expandByPoint(oi.copy(e.center).sub(br))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const qt = new U(),
  wr = new U(),
  Pi = new U(),
  rn = new U(),
  Er = new U(),
  Ri = new U(),
  Ar = new U();
class El {
  constructor(e = new U(), t = new U(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, qt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = qt.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (qt.copy(this.origin).addScaledVector(this.direction, t),
        qt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    wr.copy(e).add(t).multiplyScalar(0.5),
      Pi.copy(t).sub(e).normalize(),
      rn.copy(this.origin).sub(wr);
    const r = e.distanceTo(t) * 0.5,
      o = -this.direction.dot(Pi),
      a = rn.dot(this.direction),
      h = -rn.dot(Pi),
      c = rn.lengthSq(),
      u = Math.abs(1 - o * o);
    let d, f, m, g;
    if (u > 0)
      if (((d = o * h - a), (f = o * a - h), (g = r * u), d >= 0))
        if (f >= -g)
          if (f <= g) {
            const v = 1 / u;
            (d *= v),
              (f *= v),
              (m = d * (d + o * f + 2 * a) + f * (o * d + f + 2 * h) + c);
          } else
            (f = r),
              (d = Math.max(0, -(o * f + a))),
              (m = -d * d + f * (f + 2 * h) + c);
        else
          (f = -r),
            (d = Math.max(0, -(o * f + a))),
            (m = -d * d + f * (f + 2 * h) + c);
      else
        f <= -g
          ? ((d = Math.max(0, -(-o * r + a))),
            (f = d > 0 ? -r : Math.min(Math.max(-r, -h), r)),
            (m = -d * d + f * (f + 2 * h) + c))
          : f <= g
          ? ((d = 0),
            (f = Math.min(Math.max(-r, -h), r)),
            (m = f * (f + 2 * h) + c))
          : ((d = Math.max(0, -(o * r + a))),
            (f = d > 0 ? r : Math.min(Math.max(-r, -h), r)),
            (m = -d * d + f * (f + 2 * h) + c));
    else
      (f = o > 0 ? -r : r),
        (d = Math.max(0, -(o * f + a))),
        (m = -d * d + f * (f + 2 * h) + c);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, d),
      i && i.copy(wr).addScaledVector(Pi, f),
      m
    );
  }
  intersectSphere(e, t) {
    qt.subVectors(e.center, this.origin);
    const n = qt.dot(this.direction),
      i = qt.dot(qt) - n * n,
      r = e.radius * e.radius;
    if (i > r) return null;
    const o = Math.sqrt(r - i),
      a = n - o,
      h = n + o;
    return h < 0 ? null : a < 0 ? this.at(h, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, o, a, h;
    const c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      d = 1 / this.direction.z,
      f = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - f.x) * c), (i = (e.max.x - f.x) * c))
        : ((n = (e.max.x - f.x) * c), (i = (e.min.x - f.x) * c)),
      u >= 0
        ? ((r = (e.min.y - f.y) * u), (o = (e.max.y - f.y) * u))
        : ((r = (e.max.y - f.y) * u), (o = (e.min.y - f.y) * u)),
      n > o ||
      r > i ||
      ((r > n || isNaN(n)) && (n = r),
      (o < i || isNaN(i)) && (i = o),
      d >= 0
        ? ((a = (e.min.z - f.z) * d), (h = (e.max.z - f.z) * d))
        : ((a = (e.max.z - f.z) * d), (h = (e.min.z - f.z) * d)),
      n > h || a > i) ||
      ((a > n || n !== n) && (n = a), (h < i || i !== i) && (i = h), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, qt) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    Er.subVectors(t, e), Ri.subVectors(n, e), Ar.crossVectors(Er, Ri);
    let o = this.direction.dot(Ar),
      a;
    if (o > 0) {
      if (i) return null;
      a = 1;
    } else if (o < 0) (a = -1), (o = -o);
    else return null;
    rn.subVectors(this.origin, e);
    const h = a * this.direction.dot(Ri.crossVectors(rn, Ri));
    if (h < 0) return null;
    const c = a * this.direction.dot(Er.cross(rn));
    if (c < 0 || h + c > o) return null;
    const u = -a * rn.dot(Ar);
    return u < 0 ? null : this.at(u / o, r);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ze {
  constructor() {
    (Ze.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  set(e, t, n, i, r, o, a, h, c, u, d, f, m, g, v, p) {
    const l = this.elements;
    return (
      (l[0] = e),
      (l[4] = t),
      (l[8] = n),
      (l[12] = i),
      (l[1] = r),
      (l[5] = o),
      (l[9] = a),
      (l[13] = h),
      (l[2] = c),
      (l[6] = u),
      (l[10] = d),
      (l[14] = f),
      (l[3] = m),
      (l[7] = g),
      (l[11] = v),
      (l[15] = p),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Ze().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / Nn.setFromMatrixColumn(e, 0).length(),
      r = 1 / Nn.setFromMatrixColumn(e, 1).length(),
      o = 1 / Nn.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * r),
      (t[5] = n[5] * r),
      (t[6] = n[6] * r),
      (t[7] = 0),
      (t[8] = n[8] * o),
      (t[9] = n[9] * o),
      (t[10] = n[10] * o),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z,
      o = Math.cos(n),
      a = Math.sin(n),
      h = Math.cos(i),
      c = Math.sin(i),
      u = Math.cos(r),
      d = Math.sin(r);
    if (e.order === "XYZ") {
      const f = o * u,
        m = o * d,
        g = a * u,
        v = a * d;
      (t[0] = h * u),
        (t[4] = -h * d),
        (t[8] = c),
        (t[1] = m + g * c),
        (t[5] = f - v * c),
        (t[9] = -a * h),
        (t[2] = v - f * c),
        (t[6] = g + m * c),
        (t[10] = o * h);
    } else if (e.order === "YXZ") {
      const f = h * u,
        m = h * d,
        g = c * u,
        v = c * d;
      (t[0] = f + v * a),
        (t[4] = g * a - m),
        (t[8] = o * c),
        (t[1] = o * d),
        (t[5] = o * u),
        (t[9] = -a),
        (t[2] = m * a - g),
        (t[6] = v + f * a),
        (t[10] = o * h);
    } else if (e.order === "ZXY") {
      const f = h * u,
        m = h * d,
        g = c * u,
        v = c * d;
      (t[0] = f - v * a),
        (t[4] = -o * d),
        (t[8] = g + m * a),
        (t[1] = m + g * a),
        (t[5] = o * u),
        (t[9] = v - f * a),
        (t[2] = -o * c),
        (t[6] = a),
        (t[10] = o * h);
    } else if (e.order === "ZYX") {
      const f = o * u,
        m = o * d,
        g = a * u,
        v = a * d;
      (t[0] = h * u),
        (t[4] = g * c - m),
        (t[8] = f * c + v),
        (t[1] = h * d),
        (t[5] = v * c + f),
        (t[9] = m * c - g),
        (t[2] = -c),
        (t[6] = a * h),
        (t[10] = o * h);
    } else if (e.order === "YZX") {
      const f = o * h,
        m = o * c,
        g = a * h,
        v = a * c;
      (t[0] = h * u),
        (t[4] = v - f * d),
        (t[8] = g * d + m),
        (t[1] = d),
        (t[5] = o * u),
        (t[9] = -a * u),
        (t[2] = -c * u),
        (t[6] = m * d + g),
        (t[10] = f - v * d);
    } else if (e.order === "XZY") {
      const f = o * h,
        m = o * c,
        g = a * h,
        v = a * c;
      (t[0] = h * u),
        (t[4] = -d),
        (t[8] = c * u),
        (t[1] = f * d + v),
        (t[5] = o * u),
        (t[9] = m * d - g),
        (t[2] = g * d - m),
        (t[6] = a * u),
        (t[10] = v * d + f);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Al, e, Tl);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      xt.subVectors(e, t),
      xt.lengthSq() === 0 && (xt.z = 1),
      xt.normalize(),
      sn.crossVectors(n, xt),
      sn.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (xt.x += 1e-4) : (xt.z += 1e-4),
        xt.normalize(),
        sn.crossVectors(n, xt)),
      sn.normalize(),
      Di.crossVectors(xt, sn),
      (i[0] = sn.x),
      (i[4] = Di.x),
      (i[8] = xt.x),
      (i[1] = sn.y),
      (i[5] = Di.y),
      (i[9] = xt.y),
      (i[2] = sn.z),
      (i[6] = Di.z),
      (i[10] = xt.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      o = n[0],
      a = n[4],
      h = n[8],
      c = n[12],
      u = n[1],
      d = n[5],
      f = n[9],
      m = n[13],
      g = n[2],
      v = n[6],
      p = n[10],
      l = n[14],
      A = n[3],
      E = n[7],
      M = n[11],
      y = n[15],
      L = i[0],
      D = i[4],
      I = i[8],
      x = i[12],
      w = i[1],
      Y = i[5],
      k = i[9],
      P = i[13],
      F = i[2],
      G = i[6],
      K = i[10],
      ee = i[14],
      $ = i[3],
      ne = i[7],
      Q = i[11],
      Me = i[15];
    return (
      (r[0] = o * L + a * w + h * F + c * $),
      (r[4] = o * D + a * Y + h * G + c * ne),
      (r[8] = o * I + a * k + h * K + c * Q),
      (r[12] = o * x + a * P + h * ee + c * Me),
      (r[1] = u * L + d * w + f * F + m * $),
      (r[5] = u * D + d * Y + f * G + m * ne),
      (r[9] = u * I + d * k + f * K + m * Q),
      (r[13] = u * x + d * P + f * ee + m * Me),
      (r[2] = g * L + v * w + p * F + l * $),
      (r[6] = g * D + v * Y + p * G + l * ne),
      (r[10] = g * I + v * k + p * K + l * Q),
      (r[14] = g * x + v * P + p * ee + l * Me),
      (r[3] = A * L + E * w + M * F + y * $),
      (r[7] = A * D + E * Y + M * G + y * ne),
      (r[11] = A * I + E * k + M * K + y * Q),
      (r[15] = A * x + E * P + M * ee + y * Me),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      r = e[12],
      o = e[1],
      a = e[5],
      h = e[9],
      c = e[13],
      u = e[2],
      d = e[6],
      f = e[10],
      m = e[14],
      g = e[3],
      v = e[7],
      p = e[11],
      l = e[15];
    return (
      g *
        (+r * h * d -
          i * c * d -
          r * a * f +
          n * c * f +
          i * a * m -
          n * h * m) +
      v *
        (+t * h * m -
          t * c * f +
          r * o * f -
          i * o * m +
          i * c * u -
          r * h * u) +
      p *
        (+t * c * d -
          t * a * m -
          r * o * d +
          n * o * m +
          r * a * u -
          n * c * u) +
      l *
        (-i * a * u - t * h * d + t * a * f + i * o * d - n * o * f + n * h * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      o = e[4],
      a = e[5],
      h = e[6],
      c = e[7],
      u = e[8],
      d = e[9],
      f = e[10],
      m = e[11],
      g = e[12],
      v = e[13],
      p = e[14],
      l = e[15],
      A = d * p * c - v * f * c + v * h * m - a * p * m - d * h * l + a * f * l,
      E = g * f * c - u * p * c - g * h * m + o * p * m + u * h * l - o * f * l,
      M = u * v * c - g * d * c + g * a * m - o * v * m - u * a * l + o * d * l,
      y = g * d * h - u * v * h - g * a * f + o * v * f + u * a * p - o * d * p,
      L = t * A + n * E + i * M + r * y;
    if (L === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const D = 1 / L;
    return (
      (e[0] = A * D),
      (e[1] =
        (v * f * r -
          d * p * r -
          v * i * m +
          n * p * m +
          d * i * l -
          n * f * l) *
        D),
      (e[2] =
        (a * p * r -
          v * h * r +
          v * i * c -
          n * p * c -
          a * i * l +
          n * h * l) *
        D),
      (e[3] =
        (d * h * r -
          a * f * r -
          d * i * c +
          n * f * c +
          a * i * m -
          n * h * m) *
        D),
      (e[4] = E * D),
      (e[5] =
        (u * p * r -
          g * f * r +
          g * i * m -
          t * p * m -
          u * i * l +
          t * f * l) *
        D),
      (e[6] =
        (g * h * r -
          o * p * r -
          g * i * c +
          t * p * c +
          o * i * l -
          t * h * l) *
        D),
      (e[7] =
        (o * f * r -
          u * h * r +
          u * i * c -
          t * f * c -
          o * i * m +
          t * h * m) *
        D),
      (e[8] = M * D),
      (e[9] =
        (g * d * r -
          u * v * r -
          g * n * m +
          t * v * m +
          u * n * l -
          t * d * l) *
        D),
      (e[10] =
        (o * v * r -
          g * a * r +
          g * n * c -
          t * v * c -
          o * n * l +
          t * a * l) *
        D),
      (e[11] =
        (u * a * r -
          o * d * r -
          u * n * c +
          t * d * c +
          o * n * m -
          t * a * m) *
        D),
      (e[12] = y * D),
      (e[13] =
        (u * v * i -
          g * d * i +
          g * n * f -
          t * v * f -
          u * n * p +
          t * d * p) *
        D),
      (e[14] =
        (g * a * i -
          o * v * i -
          g * n * h +
          t * v * h +
          o * n * p -
          t * a * p) *
        D),
      (e[15] =
        (o * d * i -
          u * a * i +
          u * n * h -
          t * d * h -
          o * n * f +
          t * a * f) *
        D),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= r),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= r),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= r),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = 1 - n,
      o = e.x,
      a = e.y,
      h = e.z,
      c = r * o,
      u = r * a;
    return (
      this.set(
        c * o + n,
        c * a - i * h,
        c * h + i * a,
        0,
        c * a + i * h,
        u * a + n,
        u * h - i * o,
        0,
        c * h - i * a,
        u * h + i * o,
        r * h * h + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, r, o) {
    return this.set(1, n, r, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      r = t._x,
      o = t._y,
      a = t._z,
      h = t._w,
      c = r + r,
      u = o + o,
      d = a + a,
      f = r * c,
      m = r * u,
      g = r * d,
      v = o * u,
      p = o * d,
      l = a * d,
      A = h * c,
      E = h * u,
      M = h * d,
      y = n.x,
      L = n.y,
      D = n.z;
    return (
      (i[0] = (1 - (v + l)) * y),
      (i[1] = (m + M) * y),
      (i[2] = (g - E) * y),
      (i[3] = 0),
      (i[4] = (m - M) * L),
      (i[5] = (1 - (f + l)) * L),
      (i[6] = (p + A) * L),
      (i[7] = 0),
      (i[8] = (g + E) * D),
      (i[9] = (p - A) * D),
      (i[10] = (1 - (f + v)) * D),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = Nn.set(i[0], i[1], i[2]).length();
    const o = Nn.set(i[4], i[5], i[6]).length(),
      a = Nn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      Lt.copy(this);
    const c = 1 / r,
      u = 1 / o,
      d = 1 / a;
    return (
      (Lt.elements[0] *= c),
      (Lt.elements[1] *= c),
      (Lt.elements[2] *= c),
      (Lt.elements[4] *= u),
      (Lt.elements[5] *= u),
      (Lt.elements[6] *= u),
      (Lt.elements[8] *= d),
      (Lt.elements[9] *= d),
      (Lt.elements[10] *= d),
      t.setFromRotationMatrix(Lt),
      (n.x = r),
      (n.y = o),
      (n.z = a),
      this
    );
  }
  makePerspective(e, t, n, i, r, o) {
    const a = this.elements,
      h = (2 * r) / (t - e),
      c = (2 * r) / (n - i),
      u = (t + e) / (t - e),
      d = (n + i) / (n - i),
      f = -(o + r) / (o - r),
      m = (-2 * o * r) / (o - r);
    return (
      (a[0] = h),
      (a[4] = 0),
      (a[8] = u),
      (a[12] = 0),
      (a[1] = 0),
      (a[5] = c),
      (a[9] = d),
      (a[13] = 0),
      (a[2] = 0),
      (a[6] = 0),
      (a[10] = f),
      (a[14] = m),
      (a[3] = 0),
      (a[7] = 0),
      (a[11] = -1),
      (a[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, r, o) {
    const a = this.elements,
      h = 1 / (t - e),
      c = 1 / (n - i),
      u = 1 / (o - r),
      d = (t + e) * h,
      f = (n + i) * c,
      m = (o + r) * u;
    return (
      (a[0] = 2 * h),
      (a[4] = 0),
      (a[8] = 0),
      (a[12] = -d),
      (a[1] = 0),
      (a[5] = 2 * c),
      (a[9] = 0),
      (a[13] = -f),
      (a[2] = 0),
      (a[6] = 0),
      (a[10] = -2 * u),
      (a[14] = -m),
      (a[3] = 0),
      (a[7] = 0),
      (a[11] = 0),
      (a[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Nn = new U(),
  Lt = new Ze(),
  Al = new U(0, 0, 0),
  Tl = new U(1, 1, 1),
  sn = new U(),
  Di = new U(),
  xt = new U(),
  Bs = new Ze(),
  ks = new En();
class Ki {
  constructor(e = 0, t = 0, n = 0, i = Ki.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      r = i[0],
      o = i[4],
      a = i[8],
      h = i[1],
      c = i[5],
      u = i[9],
      d = i[2],
      f = i[6],
      m = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(dt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(-u, m)), (this._z = Math.atan2(-o, r)))
            : ((this._x = Math.atan2(f, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-dt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(a, m)), (this._z = Math.atan2(h, c)))
            : ((this._y = Math.atan2(-d, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(dt(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(-d, m)), (this._z = Math.atan2(-o, c)))
            : ((this._y = 0), (this._z = Math.atan2(h, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-dt(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._x = Math.atan2(f, m)), (this._z = Math.atan2(h, r)))
            : ((this._x = 0), (this._z = Math.atan2(-o, c)));
        break;
      case "YZX":
        (this._z = Math.asin(dt(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-d, r)))
            : ((this._x = 0), (this._y = Math.atan2(a, m)));
        break;
      case "XZY":
        (this._z = Math.asin(-dt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(f, c)), (this._y = Math.atan2(a, r)))
            : ((this._x = Math.atan2(-u, m)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Bs.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Bs, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return ks.setFromEuler(this), this.setFromQuaternion(ks, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Ki.DEFAULT_ORDER = "XYZ";
class Ba {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Cl = 0;
const Gs = new U(),
  Fn = new En(),
  $t = new Ze(),
  Ii = new U(),
  li = new U(),
  Ll = new U(),
  Pl = new En(),
  Vs = new U(1, 0, 0),
  Hs = new U(0, 1, 0),
  Ws = new U(0, 0, 1),
  Rl = { type: "added" },
  Xs = { type: "removed" };
class it extends Tn {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Cl++ }),
      (this.uuid = Mi()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = it.DEFAULT_UP.clone());
    const e = new U(),
      t = new Ki(),
      n = new En(),
      i = new U(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r),
      n._onChange(o),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new Ze() },
        normalMatrix: { value: new Ie() },
      }),
      (this.matrix = new Ze()),
      (this.matrixWorld = new Ze()),
      (this.matrixAutoUpdate = it.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.layers = new Ba()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Fn.setFromAxisAngle(e, t), this.quaternion.multiply(Fn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Fn.setFromAxisAngle(e, t), this.quaternion.premultiply(Fn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Vs, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Hs, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Ws, e);
  }
  translateOnAxis(e, t) {
    return (
      Gs.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Gs.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Vs, e);
  }
  translateY(e) {
    return this.translateOnAxis(Hs, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Ws, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4($t.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ii.copy(e) : Ii.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      li.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? $t.lookAt(li, Ii, this.up)
        : $t.lookAt(Ii, li, this.up),
      this.quaternion.setFromRotationMatrix($t),
      i &&
        ($t.extractRotation(i.matrixWorld),
        Fn.setFromRotationMatrix($t),
        this.quaternion.premultiply(Fn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Rl))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(Xs)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(Xs);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      $t.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), $t.multiply(e.parent.matrixWorld)),
      e.applyMatrix4($t),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, r = this.children.length; i < r; i++) {
      const o = this.children[i].getObjectsByProperty(e, t);
      o.length > 0 && (n = n.concat(o));
    }
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(li, e, Ll), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(li, Pl, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      (r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 &&
        n !== null &&
        n.matrixWorldAutoUpdate === !0 &&
        n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const i = this.children;
      for (let r = 0, o = i.length; r < o; r++) {
        const a = i[r];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      (i.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON()));
    function r(a, h) {
      return a[h.uuid] === void 0 && (a[h.uuid] = h.toJSON(e)), h.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const h = a.shapes;
        if (Array.isArray(h))
          for (let c = 0, u = h.length; c < u; c++) {
            const d = h[c];
            r(e.shapes, d);
          }
        else r(e.shapes, h);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (r(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const a = [];
        for (let h = 0, c = this.material.length; h < c; h++)
          a.push(r(e.materials, this.material[h]));
        i.material = a;
      } else i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++)
        i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const h = this.animations[a];
        i.animations.push(r(e.animations, h));
      }
    }
    if (t) {
      const a = o(e.geometries),
        h = o(e.materials),
        c = o(e.textures),
        u = o(e.images),
        d = o(e.shapes),
        f = o(e.skeletons),
        m = o(e.animations),
        g = o(e.nodes);
      a.length > 0 && (n.geometries = a),
        h.length > 0 && (n.materials = h),
        c.length > 0 && (n.textures = c),
        u.length > 0 && (n.images = u),
        d.length > 0 && (n.shapes = d),
        f.length > 0 && (n.skeletons = f),
        m.length > 0 && (n.animations = m),
        g.length > 0 && (n.nodes = g);
    }
    return (n.object = i), n;
    function o(a) {
      const h = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, h.push(u);
      }
      return h;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
it.DEFAULT_UP = new U(0, 1, 0);
it.DEFAULT_MATRIX_AUTO_UPDATE = !0;
it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Pt = new U(),
  Yt = new U(),
  Tr = new U(),
  jt = new U(),
  On = new U(),
  zn = new U(),
  qs = new U(),
  Cr = new U(),
  Lr = new U(),
  Pr = new U();
let Ui = !1;
class Dt {
  constructor(e = new U(), t = new U(), n = new U()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Pt.subVectors(e, t), i.cross(Pt);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    Pt.subVectors(i, t), Yt.subVectors(n, t), Tr.subVectors(e, t);
    const o = Pt.dot(Pt),
      a = Pt.dot(Yt),
      h = Pt.dot(Tr),
      c = Yt.dot(Yt),
      u = Yt.dot(Tr),
      d = o * c - a * a;
    if (d === 0) return r.set(-2, -1, -1);
    const f = 1 / d,
      m = (c * h - a * u) * f,
      g = (o * u - a * h) * f;
    return r.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return (
      this.getBarycoord(e, t, n, i, jt),
      jt.x >= 0 && jt.y >= 0 && jt.x + jt.y <= 1
    );
  }
  static getUV(e, t, n, i, r, o, a, h) {
    return (
      Ui === !1 &&
        (console.warn(
          "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."
        ),
        (Ui = !0)),
      this.getInterpolation(e, t, n, i, r, o, a, h)
    );
  }
  static getInterpolation(e, t, n, i, r, o, a, h) {
    return (
      this.getBarycoord(e, t, n, i, jt),
      h.setScalar(0),
      h.addScaledVector(r, jt.x),
      h.addScaledVector(o, jt.y),
      h.addScaledVector(a, jt.z),
      h
    );
  }
  static isFrontFacing(e, t, n, i) {
    return Pt.subVectors(n, t), Yt.subVectors(e, t), Pt.cross(Yt).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      Pt.subVectors(this.c, this.b),
      Yt.subVectors(this.a, this.b),
      Pt.cross(Yt).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Dt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Dt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, r) {
    return (
      Ui === !1 &&
        (console.warn(
          "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."
        ),
        (Ui = !0)),
      Dt.getInterpolation(e, this.a, this.b, this.c, t, n, i, r)
    );
  }
  getInterpolation(e, t, n, i, r) {
    return Dt.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return Dt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Dt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      r = this.c;
    let o, a;
    On.subVectors(i, n), zn.subVectors(r, n), Cr.subVectors(e, n);
    const h = On.dot(Cr),
      c = zn.dot(Cr);
    if (h <= 0 && c <= 0) return t.copy(n);
    Lr.subVectors(e, i);
    const u = On.dot(Lr),
      d = zn.dot(Lr);
    if (u >= 0 && d <= u) return t.copy(i);
    const f = h * d - u * c;
    if (f <= 0 && h >= 0 && u <= 0)
      return (o = h / (h - u)), t.copy(n).addScaledVector(On, o);
    Pr.subVectors(e, r);
    const m = On.dot(Pr),
      g = zn.dot(Pr);
    if (g >= 0 && m <= g) return t.copy(r);
    const v = m * c - h * g;
    if (v <= 0 && c >= 0 && g <= 0)
      return (a = c / (c - g)), t.copy(n).addScaledVector(zn, a);
    const p = u * g - m * d;
    if (p <= 0 && d - u >= 0 && m - g >= 0)
      return (
        qs.subVectors(r, i),
        (a = (d - u) / (d - u + (m - g))),
        t.copy(i).addScaledVector(qs, a)
      );
    const l = 1 / (p + v + f);
    return (
      (o = v * l),
      (a = f * l),
      t.copy(n).addScaledVector(On, o).addScaledVector(zn, a)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Dl = 0;
class yi extends Tn {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: Dl++ }),
      (this.uuid = Mi()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = Yn),
      (this.side = ln),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = Ca),
      (this.blendDst = La),
      (this.blendEquation = qn),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = Vr),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = fl),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = mr),
      (this.stencilZFail = mr),
      (this.stencilZPass = mr),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`
          );
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Yn && (n.blending = this.blending),
      this.side !== ln && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (n.premultipliedAlpha = this.premultipliedAlpha),
      this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const o = [];
      for (const a in r) {
        const h = r[a];
        delete h.metadata, o.push(h);
      }
      return o;
    }
    if (t) {
      const r = i(e.textures),
        o = i(e.images);
      r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = t[r].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const ka = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Rt = { h: 0, s: 0, l: 0 },
  Ni = { h: 0, s: 0, l: 0 };
function Rr(s, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? s + (e - s) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? s + (e - s) * 6 * (2 / 3 - t)
      : s
  );
}
class ze {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
    );
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : typeof e == "number"
        ? this.setHex(e)
        : typeof e == "string" && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Ot) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      vt.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = vt.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      vt.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = vt.workingColorSpace) {
    if (((e = pl(e, 1)), (t = dt(t, 0, 1)), (n = dt(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        o = 2 * n - r;
      (this.r = Rr(o, r, e + 1 / 3)),
        (this.g = Rr(o, r, e)),
        (this.b = Rr(o, r, e - 1 / 3));
    }
    return vt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Ot) {
    function n(r) {
      r !== void 0 &&
        parseFloat(r) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let i;
    if ((i = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let r;
      const o = i[1],
        a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (
            (r =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(r[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(r[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(r[3], 10)) / 255),
              vt.toWorkingColorSpace(this, t),
              n(r[4]),
              this
            );
          if (
            (r =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(r[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(r[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(r[3], 10)) / 100),
              vt.toWorkingColorSpace(this, t),
              n(r[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (r =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          ) {
            const h = parseFloat(r[1]) / 360,
              c = parseFloat(r[2]) / 100,
              u = parseFloat(r[3]) / 100;
            return n(r[4]), this.setHSL(h, c, u, t);
          }
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const r = i[1],
        o = r.length;
      if (o === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          t
        );
      if (o === 6) return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Ot) {
    const n = ka[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = Kn(e.r)), (this.g = Kn(e.g)), (this.b = Kn(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = xr(e.r)), (this.g = xr(e.g)), (this.b = xr(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ot) {
    return (
      vt.fromWorkingColorSpace(ot.copy(this), e),
      (dt(ot.r * 255, 0, 255) << 16) ^
        (dt(ot.g * 255, 0, 255) << 8) ^
        (dt(ot.b * 255, 0, 255) << 0)
    );
  }
  getHexString(e = Ot) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = vt.workingColorSpace) {
    vt.fromWorkingColorSpace(ot.copy(this), t);
    const n = ot.r,
      i = ot.g,
      r = ot.b,
      o = Math.max(n, i, r),
      a = Math.min(n, i, r);
    let h, c;
    const u = (a + o) / 2;
    if (a === o) (h = 0), (c = 0);
    else {
      const d = o - a;
      switch (((c = u <= 0.5 ? d / (o + a) : d / (2 - o - a)), o)) {
        case n:
          h = (i - r) / d + (i < r ? 6 : 0);
          break;
        case i:
          h = (r - n) / d + 2;
          break;
        case r:
          h = (n - i) / d + 4;
          break;
      }
      h /= 6;
    }
    return (e.h = h), (e.s = c), (e.l = u), e;
  }
  getRGB(e, t = vt.workingColorSpace) {
    return (
      vt.fromWorkingColorSpace(ot.copy(this), t),
      (e.r = ot.r),
      (e.g = ot.g),
      (e.b = ot.b),
      e
    );
  }
  getStyle(e = Ot) {
    vt.fromWorkingColorSpace(ot.copy(this), e);
    const t = ot.r,
      n = ot.g,
      i = ot.b;
    return e !== Ot
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
      : `rgb(${(t * 255) | 0},${(n * 255) | 0},${(i * 255) | 0})`;
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(Rt),
      (Rt.h += e),
      (Rt.s += t),
      (Rt.l += n),
      this.setHSL(Rt.h, Rt.s, Rt.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(Rt), e.getHSL(Ni);
    const n = _r(Rt.h, Ni.h, t),
      i = _r(Rt.s, Ni.s, t),
      r = _r(Rt.l, Ni.l, t);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      i = this.b,
      r = e.elements;
    return (
      (this.r = r[0] * t + r[3] * n + r[6] * i),
      (this.g = r[1] * t + r[4] * n + r[7] * i),
      (this.b = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const ot = new ze();
ze.NAMES = ka;
class Ga extends yi {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new ze(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Pa),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Ke = new U(),
  Fi = new Ce();
class Et {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = Ns),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Fi.fromBufferAttribute(this, t),
          Fi.applyMatrix3(e),
          this.setXY(t, Fi.x, Fi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Ke.fromBufferAttribute(this, t),
          Ke.applyMatrix3(e),
          this.setXYZ(t, Ke.x, Ke.y, Ke.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ke.fromBufferAttribute(this, t),
        Ke.applyMatrix4(e),
        this.setXYZ(t, Ke.x, Ke.y, Ke.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ke.fromBufferAttribute(this, t),
        Ke.applyNormalMatrix(e),
        this.setXYZ(t, Ke.x, Ke.y, Ke.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ke.fromBufferAttribute(this, t),
        Ke.transformDirection(e),
        this.setXYZ(t, Ke.x, Ke.y, Ke.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Ti(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = _t(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Ti(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = _t(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Ti(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = _t(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Ti(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = _t(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = _t(t, this.array)), (n = _t(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = _t(t, this.array)),
        (n = _t(n, this.array)),
        (i = _t(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = _t(t, this.array)),
        (n = _t(n, this.array)),
        (i = _t(i, this.array)),
        (r = _t(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = r),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== Ns && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
  copyColorsArray() {
    console.error(
      "THREE.BufferAttribute: copyColorsArray() was removed in r144."
    );
  }
  copyVector2sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector2sArray() was removed in r144."
    );
  }
  copyVector3sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector3sArray() was removed in r144."
    );
  }
  copyVector4sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector4sArray() was removed in r144."
    );
  }
}
class Va extends Et {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Ha extends Et {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Gt extends Et {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Il = 0;
const yt = new Ze(),
  Dr = new it(),
  Bn = new U(),
  Mt = new Si(),
  ci = new Si(),
  tt = new U();
class cn extends Tn {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Il++ }),
      (this.uuid = Mi()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Na(e) ? Ha : Va)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Ie().getNormalMatrix(e);
      n.applyNormalMatrix(r), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return yt.makeRotationFromQuaternion(e), this.applyMatrix4(yt), this;
  }
  rotateX(e) {
    return yt.makeRotationX(e), this.applyMatrix4(yt), this;
  }
  rotateY(e) {
    return yt.makeRotationY(e), this.applyMatrix4(yt), this;
  }
  rotateZ(e) {
    return yt.makeRotationZ(e), this.applyMatrix4(yt), this;
  }
  translate(e, t, n) {
    return yt.makeTranslation(e, t, n), this.applyMatrix4(yt), this;
  }
  scale(e, t, n) {
    return yt.makeScale(e, t, n), this.applyMatrix4(yt), this;
  }
  lookAt(e) {
    return Dr.lookAt(e), Dr.updateMatrix(), this.applyMatrix4(Dr.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Bn).negate(),
      this.translate(Bn.x, Bn.y, Bn.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new Gt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Si());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new U(-1 / 0, -1 / 0, -1 / 0),
          new U(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          Mt.setFromBufferAttribute(r),
            this.morphTargetsRelative
              ? (tt.addVectors(this.boundingBox.min, Mt.min),
                this.boundingBox.expandByPoint(tt),
                tt.addVectors(this.boundingBox.max, Mt.max),
                this.boundingBox.expandByPoint(tt))
              : (this.boundingBox.expandByPoint(Mt.min),
                this.boundingBox.expandByPoint(Mt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Zr());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new U(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((Mt.setFromBufferAttribute(e), t))
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r];
          ci.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (tt.addVectors(Mt.min, ci.min),
                Mt.expandByPoint(tt),
                tt.addVectors(Mt.max, ci.max),
                Mt.expandByPoint(tt))
              : (Mt.expandByPoint(ci.min), Mt.expandByPoint(ci.max));
        }
      Mt.getCenter(n);
      let i = 0;
      for (let r = 0, o = e.count; r < o; r++)
        tt.fromBufferAttribute(e, r),
          (i = Math.max(i, n.distanceToSquared(tt)));
      if (t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r],
            h = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            tt.fromBufferAttribute(a, c),
              h && (Bn.fromBufferAttribute(e, c), tt.add(Bn)),
              (i = Math.max(i, n.distanceToSquared(tt)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = e.array,
      i = t.position.array,
      r = t.normal.array,
      o = t.uv.array,
      a = i.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Et(new Float32Array(4 * a), 4));
    const h = this.getAttribute("tangent").array,
      c = [],
      u = [];
    for (let w = 0; w < a; w++) (c[w] = new U()), (u[w] = new U());
    const d = new U(),
      f = new U(),
      m = new U(),
      g = new Ce(),
      v = new Ce(),
      p = new Ce(),
      l = new U(),
      A = new U();
    function E(w, Y, k) {
      d.fromArray(i, w * 3),
        f.fromArray(i, Y * 3),
        m.fromArray(i, k * 3),
        g.fromArray(o, w * 2),
        v.fromArray(o, Y * 2),
        p.fromArray(o, k * 2),
        f.sub(d),
        m.sub(d),
        v.sub(g),
        p.sub(g);
      const P = 1 / (v.x * p.y - p.x * v.y);
      isFinite(P) &&
        (l
          .copy(f)
          .multiplyScalar(p.y)
          .addScaledVector(m, -v.y)
          .multiplyScalar(P),
        A.copy(m)
          .multiplyScalar(v.x)
          .addScaledVector(f, -p.x)
          .multiplyScalar(P),
        c[w].add(l),
        c[Y].add(l),
        c[k].add(l),
        u[w].add(A),
        u[Y].add(A),
        u[k].add(A));
    }
    let M = this.groups;
    M.length === 0 && (M = [{ start: 0, count: n.length }]);
    for (let w = 0, Y = M.length; w < Y; ++w) {
      const k = M[w],
        P = k.start,
        F = k.count;
      for (let G = P, K = P + F; G < K; G += 3) E(n[G + 0], n[G + 1], n[G + 2]);
    }
    const y = new U(),
      L = new U(),
      D = new U(),
      I = new U();
    function x(w) {
      D.fromArray(r, w * 3), I.copy(D);
      const Y = c[w];
      y.copy(Y),
        y.sub(D.multiplyScalar(D.dot(Y))).normalize(),
        L.crossVectors(I, Y);
      const P = L.dot(u[w]) < 0 ? -1 : 1;
      (h[w * 4] = y.x),
        (h[w * 4 + 1] = y.y),
        (h[w * 4 + 2] = y.z),
        (h[w * 4 + 3] = P);
    }
    for (let w = 0, Y = M.length; w < Y; ++w) {
      const k = M[w],
        P = k.start,
        F = k.count;
      for (let G = P, K = P + F; G < K; G += 3)
        x(n[G + 0]), x(n[G + 1]), x(n[G + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new Et(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let f = 0, m = n.count; f < m; f++) n.setXYZ(f, 0, 0, 0);
      const i = new U(),
        r = new U(),
        o = new U(),
        a = new U(),
        h = new U(),
        c = new U(),
        u = new U(),
        d = new U();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const g = e.getX(f + 0),
            v = e.getX(f + 1),
            p = e.getX(f + 2);
          i.fromBufferAttribute(t, g),
            r.fromBufferAttribute(t, v),
            o.fromBufferAttribute(t, p),
            u.subVectors(o, r),
            d.subVectors(i, r),
            u.cross(d),
            a.fromBufferAttribute(n, g),
            h.fromBufferAttribute(n, v),
            c.fromBufferAttribute(n, p),
            a.add(u),
            h.add(u),
            c.add(u),
            n.setXYZ(g, a.x, a.y, a.z),
            n.setXYZ(v, h.x, h.y, h.z),
            n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          i.fromBufferAttribute(t, f + 0),
            r.fromBufferAttribute(t, f + 1),
            o.fromBufferAttribute(t, f + 2),
            u.subVectors(o, r),
            d.subVectors(i, r),
            u.cross(d),
            n.setXYZ(f + 0, u.x, u.y, u.z),
            n.setXYZ(f + 1, u.x, u.y, u.z),
            n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge() {
    return (
      console.error(
        "THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."
      ),
      this
    );
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      tt.fromBufferAttribute(e, t),
        tt.normalize(),
        e.setXYZ(t, tt.x, tt.y, tt.z);
  }
  toNonIndexed() {
    function e(a, h) {
      const c = a.array,
        u = a.itemSize,
        d = a.normalized,
        f = new c.constructor(h.length * u);
      let m = 0,
        g = 0;
      for (let v = 0, p = h.length; v < p; v++) {
        a.isInterleavedBufferAttribute
          ? (m = h[v] * a.data.stride + a.offset)
          : (m = h[v] * u);
        for (let l = 0; l < u; l++) f[g++] = c[m++];
      }
      return new Et(f, u, d);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new cn(),
      n = this.index.array,
      i = this.attributes;
    for (const a in i) {
      const h = i[a],
        c = e(h, n);
      t.setAttribute(a, c);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const h = [],
        c = r[a];
      for (let u = 0, d = c.length; u < d; u++) {
        const f = c[u],
          m = e(f, n);
        h.push(m);
      }
      t.morphAttributes[a] = h;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, h = o.length; a < h; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const h = this.parameters;
      for (const c in h) h[c] !== void 0 && (e[c] = h[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const h in n) {
      const c = n[h];
      e.data.attributes[h] = c.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const h in this.morphAttributes) {
      const c = this.morphAttributes[h],
        u = [];
      for (let d = 0, f = c.length; d < f; d++) {
        const m = c[d];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && ((i[h] = u), (r = !0));
    }
    r &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return (
      a !== null &&
        (e.data.boundingSphere = {
          center: a.center.toArray(),
          radius: a.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const u = i[c];
      this.setAttribute(c, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const u = [],
        d = r[c];
      for (let f = 0, m = d.length; f < m; f++) u.push(d[f].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const d = o[c];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const h = e.boundingSphere;
    return (
      h !== null && (this.boundingSphere = h.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const $s = new Ze(),
  Ft = new El(),
  Oi = new Zr(),
  Ys = new U(),
  kn = new U(),
  Gn = new U(),
  Vn = new U(),
  Ir = new U(),
  zi = new U(),
  Bi = new Ce(),
  ki = new Ce(),
  Gi = new Ce(),
  js = new U(),
  Ks = new U(),
  Zs = new U(),
  Vi = new U(),
  Hi = new U();
class ft extends it {
  constructor(e = new cn(), t = new Ga()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[a] = r);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      i = n.attributes.position,
      r = n.morphAttributes.position,
      o = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const a = this.morphTargetInfluences;
    if (r && a) {
      zi.set(0, 0, 0);
      for (let h = 0, c = r.length; h < c; h++) {
        const u = a[h],
          d = r[h];
        u !== 0 &&
          (Ir.fromBufferAttribute(d, e),
          o ? zi.addScaledVector(Ir, u) : zi.addScaledVector(Ir.sub(t), u));
      }
      t.add(zi);
    }
    return this.isSkinnedMesh && this.applyBoneTransform(e, t), t;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      r = this.matrixWorld;
    if (
      i === void 0 ||
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Oi.copy(n.boundingSphere),
      Oi.applyMatrix4(r),
      Ft.copy(e.ray).recast(e.near),
      Oi.containsPoint(Ft.origin) === !1 &&
        (Ft.intersectSphere(Oi, Ys) === null ||
          Ft.origin.distanceToSquared(Ys) > (e.far - e.near) ** 2)) ||
      ($s.copy(r).invert(),
      Ft.copy(e.ray).applyMatrix4($s),
      n.boundingBox !== null && Ft.intersectsBox(n.boundingBox) === !1)
    )
      return;
    let o;
    const a = n.index,
      h = n.attributes.position,
      c = n.attributes.uv,
      u = n.attributes.uv2,
      d = n.attributes.normal,
      f = n.groups,
      m = n.drawRange;
    if (a !== null)
      if (Array.isArray(i))
        for (let g = 0, v = f.length; g < v; g++) {
          const p = f[g],
            l = i[p.materialIndex],
            A = Math.max(p.start, m.start),
            E = Math.min(
              a.count,
              Math.min(p.start + p.count, m.start + m.count)
            );
          for (let M = A, y = E; M < y; M += 3) {
            const L = a.getX(M),
              D = a.getX(M + 1),
              I = a.getX(M + 2);
            (o = Wi(this, l, e, Ft, c, u, d, L, D, I)),
              o &&
                ((o.faceIndex = Math.floor(M / 3)),
                (o.face.materialIndex = p.materialIndex),
                t.push(o));
          }
        }
      else {
        const g = Math.max(0, m.start),
          v = Math.min(a.count, m.start + m.count);
        for (let p = g, l = v; p < l; p += 3) {
          const A = a.getX(p),
            E = a.getX(p + 1),
            M = a.getX(p + 2);
          (o = Wi(this, i, e, Ft, c, u, d, A, E, M)),
            o && ((o.faceIndex = Math.floor(p / 3)), t.push(o));
        }
      }
    else if (h !== void 0)
      if (Array.isArray(i))
        for (let g = 0, v = f.length; g < v; g++) {
          const p = f[g],
            l = i[p.materialIndex],
            A = Math.max(p.start, m.start),
            E = Math.min(
              h.count,
              Math.min(p.start + p.count, m.start + m.count)
            );
          for (let M = A, y = E; M < y; M += 3) {
            const L = M,
              D = M + 1,
              I = M + 2;
            (o = Wi(this, l, e, Ft, c, u, d, L, D, I)),
              o &&
                ((o.faceIndex = Math.floor(M / 3)),
                (o.face.materialIndex = p.materialIndex),
                t.push(o));
          }
        }
      else {
        const g = Math.max(0, m.start),
          v = Math.min(h.count, m.start + m.count);
        for (let p = g, l = v; p < l; p += 3) {
          const A = p,
            E = p + 1,
            M = p + 2;
          (o = Wi(this, i, e, Ft, c, u, d, A, E, M)),
            o && ((o.faceIndex = Math.floor(p / 3)), t.push(o));
        }
      }
  }
}
function Ul(s, e, t, n, i, r, o, a) {
  let h;
  if (
    (e.side === pt
      ? (h = n.intersectTriangle(o, r, i, !0, a))
      : (h = n.intersectTriangle(i, r, o, e.side === ln, a)),
    h === null)
  )
    return null;
  Hi.copy(a), Hi.applyMatrix4(s.matrixWorld);
  const c = t.ray.origin.distanceTo(Hi);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: Hi.clone(), object: s };
}
function Wi(s, e, t, n, i, r, o, a, h, c) {
  s.getVertexPosition(a, kn),
    s.getVertexPosition(h, Gn),
    s.getVertexPosition(c, Vn);
  const u = Ul(s, e, t, n, kn, Gn, Vn, Vi);
  if (u) {
    i &&
      (Bi.fromBufferAttribute(i, a),
      ki.fromBufferAttribute(i, h),
      Gi.fromBufferAttribute(i, c),
      (u.uv = Dt.getInterpolation(Vi, kn, Gn, Vn, Bi, ki, Gi, new Ce()))),
      r &&
        (Bi.fromBufferAttribute(r, a),
        ki.fromBufferAttribute(r, h),
        Gi.fromBufferAttribute(r, c),
        (u.uv2 = Dt.getInterpolation(Vi, kn, Gn, Vn, Bi, ki, Gi, new Ce()))),
      o &&
        (js.fromBufferAttribute(o, a),
        Ks.fromBufferAttribute(o, h),
        Zs.fromBufferAttribute(o, c),
        (u.normal = Dt.getInterpolation(Vi, kn, Gn, Vn, js, Ks, Zs, new U())),
        u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const d = { a, b: h, c, normal: new U(), materialIndex: 0 };
    Dt.getNormal(kn, Gn, Vn, d.normal), (u.face = d);
  }
  return u;
}
class ii extends cn {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, o = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: o,
      });
    const a = this;
    (i = Math.floor(i)), (r = Math.floor(r)), (o = Math.floor(o));
    const h = [],
      c = [],
      u = [],
      d = [];
    let f = 0,
      m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, r, 0),
      g("z", "y", "x", 1, -1, n, t, -e, o, r, 1),
      g("x", "z", "y", 1, 1, e, n, t, i, o, 2),
      g("x", "z", "y", 1, -1, e, n, -t, i, o, 3),
      g("x", "y", "z", 1, -1, e, t, n, i, r, 4),
      g("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
      this.setIndex(h),
      this.setAttribute("position", new Gt(c, 3)),
      this.setAttribute("normal", new Gt(u, 3)),
      this.setAttribute("uv", new Gt(d, 2));
    function g(v, p, l, A, E, M, y, L, D, I, x) {
      const w = M / D,
        Y = y / I,
        k = M / 2,
        P = y / 2,
        F = L / 2,
        G = D + 1,
        K = I + 1;
      let ee = 0,
        $ = 0;
      const ne = new U();
      for (let Q = 0; Q < K; Q++) {
        const Me = Q * Y - P;
        for (let ie = 0; ie < G; ie++) {
          const V = ie * w - k;
          (ne[v] = V * A),
            (ne[p] = Me * E),
            (ne[l] = F),
            c.push(ne.x, ne.y, ne.z),
            (ne[v] = 0),
            (ne[p] = 0),
            (ne[l] = L > 0 ? 1 : -1),
            u.push(ne.x, ne.y, ne.z),
            d.push(ie / D),
            d.push(1 - Q / I),
            (ee += 1);
        }
      }
      for (let Q = 0; Q < I; Q++)
        for (let Me = 0; Me < D; Me++) {
          const ie = f + Me + G * Q,
            V = f + Me + G * (Q + 1),
            j = f + (Me + 1) + G * (Q + 1),
            ae = f + (Me + 1) + G * Q;
          h.push(ie, V, ae), h.push(V, j, ae), ($ += 6);
        }
      a.addGroup(m, $, x), (m += $), (f += ee);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new ii(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function ei(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? i.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (e[t][n] = null))
          : (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}
function ht(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = ei(s[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function Nl(s) {
  const e = [];
  for (let t = 0; t < s.length; t++) e.push(s[t].clone());
  return e;
}
function Wa(s) {
  return s.getRenderTarget() === null && s.outputEncoding === Ge ? Ot : gi;
}
const Fl = { clone: ei, merge: ht };
var Ol = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  zl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class An extends yi {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Ol),
      (this.fragmentShader = zl),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = ei(e.uniforms)),
      (this.uniformsGroups = Nl(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture
        ? (t.uniforms[i] = { type: "t", value: o.toJSON(e).uuid })
        : o && o.isColor
        ? (t.uniforms[i] = { type: "c", value: o.getHex() })
        : o && o.isVector2
        ? (t.uniforms[i] = { type: "v2", value: o.toArray() })
        : o && o.isVector3
        ? (t.uniforms[i] = { type: "v3", value: o.toArray() })
        : o && o.isVector4
        ? (t.uniforms[i] = { type: "v4", value: o.toArray() })
        : o && o.isMatrix3
        ? (t.uniforms[i] = { type: "m3", value: o.toArray() })
        : o && o.isMatrix4
        ? (t.uniforms[i] = { type: "m4", value: o.toArray() })
        : (t.uniforms[i] = { value: o });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Xa extends it {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Ze()),
      (this.projectionMatrix = new Ze()),
      (this.projectionMatrixInverse = new Ze());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class wt extends Xa {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = $r * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(gr * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return $r * 2 * Math.atan(Math.tan(gr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, r, o) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(gr * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      r = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const h = o.fullWidth,
        c = o.fullHeight;
      (r += (o.offsetX * i) / h),
        (t -= (o.offsetY * n) / c),
        (i *= o.width / h),
        (n *= o.height / c);
    }
    const a = this.filmOffset;
    a !== 0 && (r += (e * a) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Hn = -90,
  Wn = 1;
class Bl extends it {
  constructor(e, t, n) {
    super(), (this.type = "CubeCamera"), (this.renderTarget = n);
    const i = new wt(Hn, Wn, e, t);
    (i.layers = this.layers), i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const r = new wt(Hn, Wn, e, t);
    (r.layers = this.layers),
      r.up.set(0, 1, 0),
      r.lookAt(-1, 0, 0),
      this.add(r);
    const o = new wt(Hn, Wn, e, t);
    (o.layers = this.layers),
      o.up.set(0, 0, -1),
      o.lookAt(0, 1, 0),
      this.add(o);
    const a = new wt(Hn, Wn, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, 1),
      a.lookAt(0, -1, 0),
      this.add(a);
    const h = new wt(Hn, Wn, e, t);
    (h.layers = this.layers), h.up.set(0, 1, 0), h.lookAt(0, 0, 1), this.add(h);
    const c = new wt(Hn, Wn, e, t);
    (c.layers = this.layers),
      c.up.set(0, 1, 0),
      c.lookAt(0, 0, -1),
      this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget,
      [i, r, o, a, h, c] = this.children,
      u = e.getRenderTarget(),
      d = e.toneMapping,
      f = e.xr.enabled;
    (e.toneMapping = Kt), (e.xr.enabled = !1);
    const m = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, i),
      e.setRenderTarget(n, 1),
      e.render(t, r),
      e.setRenderTarget(n, 2),
      e.render(t, o),
      e.setRenderTarget(n, 3),
      e.render(t, a),
      e.setRenderTarget(n, 4),
      e.render(t, h),
      (n.texture.generateMipmaps = m),
      e.setRenderTarget(n, 5),
      e.render(t, c),
      e.setRenderTarget(u),
      (e.toneMapping = d),
      (e.xr.enabled = f),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class qa extends mt {
  constructor(e, t, n, i, r, o, a, h, c, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Zn),
      super(e, t, n, i, r, o, a, h, c, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class kl extends wn {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new qa(
      i,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : bt);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new ii(5, 5, 5),
      r = new An({
        name: "CubemapFromEquirect",
        uniforms: ei(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: pt,
        blending: an,
      });
    r.uniforms.tEquirect.value = t;
    const o = new ft(i, r),
      a = t.minFilter;
    return (
      t.minFilter === pi && (t.minFilter = bt),
      new Bl(1, 10, this).update(e, o),
      (t.minFilter = a),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const Ur = new U(),
  Gl = new U(),
  Vl = new Ie();
class gn {
  constructor(e = new U(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Ur.subVectors(n, t).cross(Gl.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Ur),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Vl.getNormalMatrix(e),
      i = this.coplanarPoint(Ur).applyMatrix4(e),
      r = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(r)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const mn = new Zr(),
  Xi = new U();
class Jr {
  constructor(
    e = new gn(),
    t = new gn(),
    n = new gn(),
    i = new gn(),
    r = new gn(),
    o = new gn()
  ) {
    this.planes = [e, t, n, i, r, o];
  }
  set(e, t, n, i, r, o) {
    const a = this.planes;
    return (
      a[0].copy(e),
      a[1].copy(t),
      a[2].copy(n),
      a[3].copy(i),
      a[4].copy(r),
      a[5].copy(o),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      n = e.elements,
      i = n[0],
      r = n[1],
      o = n[2],
      a = n[3],
      h = n[4],
      c = n[5],
      u = n[6],
      d = n[7],
      f = n[8],
      m = n[9],
      g = n[10],
      v = n[11],
      p = n[12],
      l = n[13],
      A = n[14],
      E = n[15];
    return (
      t[0].setComponents(a - i, d - h, v - f, E - p).normalize(),
      t[1].setComponents(a + i, d + h, v + f, E + p).normalize(),
      t[2].setComponents(a + r, d + c, v + m, E + l).normalize(),
      t[3].setComponents(a - r, d - c, v - m, E - l).normalize(),
      t[4].setComponents(a - o, d - u, v - g, E - A).normalize(),
      t[5].setComponents(a + o, d + u, v + g, E + A).normalize(),
      this
    );
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(),
        mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(mn);
  }
  intersectsSprite(e) {
    return (
      mn.center.set(0, 0, 0),
      (mn.radius = 0.7071067811865476),
      mn.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(mn)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((Xi.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (Xi.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (Xi.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(Xi) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function $a() {
  let s = null,
    e = !1,
    t = null,
    n = null;
  function i(r, o) {
    t(r, o), (n = s.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = s.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      s.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (r) {
      t = r;
    },
    setContext: function (r) {
      s = r;
    },
  };
}
function Hl(s, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function i(c, u) {
    const d = c.array,
      f = c.usage,
      m = s.createBuffer();
    s.bindBuffer(u, m), s.bufferData(u, d, f), c.onUploadCallback();
    let g;
    if (d instanceof Float32Array) g = 5126;
    else if (d instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) g = 5131;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
          );
      else g = 5123;
    else if (d instanceof Int16Array) g = 5122;
    else if (d instanceof Uint32Array) g = 5125;
    else if (d instanceof Int32Array) g = 5124;
    else if (d instanceof Int8Array) g = 5120;
    else if (d instanceof Uint8Array) g = 5121;
    else if (d instanceof Uint8ClampedArray) g = 5121;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + d
      );
    return {
      buffer: m,
      type: g,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: c.version,
    };
  }
  function r(c, u, d) {
    const f = u.array,
      m = u.updateRange;
    s.bindBuffer(d, c),
      m.count === -1
        ? s.bufferSubData(d, 0, f)
        : (t
            ? s.bufferSubData(
                d,
                m.offset * f.BYTES_PER_ELEMENT,
                f,
                m.offset,
                m.count
              )
            : s.bufferSubData(
                d,
                m.offset * f.BYTES_PER_ELEMENT,
                f.subarray(m.offset, m.offset + m.count)
              ),
          (m.count = -1)),
      u.onUploadCallback();
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (s.deleteBuffer(u.buffer), n.delete(c));
  }
  function h(c, u) {
    if (c.isGLBufferAttribute) {
      const f = n.get(c);
      (!f || f.version < c.version) &&
        n.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const d = n.get(c);
    d === void 0
      ? n.set(c, i(c, u))
      : d.version < c.version && (r(d.buffer, c, u), (d.version = c.version));
  }
  return { get: o, remove: a, update: h };
}
class Zi extends cn {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const r = e / 2,
      o = t / 2,
      a = Math.floor(n),
      h = Math.floor(i),
      c = a + 1,
      u = h + 1,
      d = e / a,
      f = t / h,
      m = [],
      g = [],
      v = [],
      p = [];
    for (let l = 0; l < u; l++) {
      const A = l * f - o;
      for (let E = 0; E < c; E++) {
        const M = E * d - r;
        g.push(M, -A, 0), v.push(0, 0, 1), p.push(E / a), p.push(1 - l / h);
      }
    }
    for (let l = 0; l < h; l++)
      for (let A = 0; A < a; A++) {
        const E = A + c * l,
          M = A + c * (l + 1),
          y = A + 1 + c * (l + 1),
          L = A + 1 + c * l;
        m.push(E, M, L), m.push(M, y, L);
      }
    this.setIndex(m),
      this.setAttribute("position", new Gt(g, 3)),
      this.setAttribute("normal", new Gt(v, 3)),
      this.setAttribute("uv", new Gt(p, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Zi(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Wl = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Xl = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  ql = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  $l = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Yl = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  jl = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Kl = "vec3 transformed = vec3( position );",
  Zl = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Jl = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  Ql = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  ec = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  tc = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  nc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  ic = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  rc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  sc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  ac = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  oc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  lc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  cc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  hc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  uc = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  dc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  fc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  pc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  mc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  gc = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  _c = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  vc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  xc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  Mc = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  Sc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  yc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  bc = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  wc = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Ec = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Ac = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Tc = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  Cc = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Lc = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Pc = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Rc = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  Dc = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  Ic = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
  Uc = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Nc = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Fc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Oc = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  zc = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,
  Bc = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  kc = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Gc = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Vc = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  Hc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Wc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Xc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  qc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  $c = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Yc = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  jc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Kc = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Zc = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Jc = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Qc = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  eh = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  th = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  nh = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  ih = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,
  rh = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  sh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  ah = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  oh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  lh = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  ch = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  hh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  uh = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  dh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  fh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  ph = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  mh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  gh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  _h = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  vh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  xh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Mh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Sh = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  yh = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  bh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  wh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Eh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Ah = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  Th = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Ch = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Lh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Ph = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Rh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Dh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Ih = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,
  Uh = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
  Nh = `#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Fh = `#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Oh = `#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  zh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Bh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  kh = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Gh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Vh = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Hh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Wh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Xh = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  qh = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  $h = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  Yh = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  jh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Kh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Zh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Jh = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Qh = `#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  eu = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  tu = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  nu = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  iu = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  ru = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  su = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  au = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  ou = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  lu = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  cu = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  hu = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  uu = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  du = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  fu = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  pu = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  mu = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  gu = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  _u = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  vu = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  Te = {
    alphamap_fragment: Wl,
    alphamap_pars_fragment: Xl,
    alphatest_fragment: ql,
    alphatest_pars_fragment: $l,
    aomap_fragment: Yl,
    aomap_pars_fragment: jl,
    begin_vertex: Kl,
    beginnormal_vertex: Zl,
    bsdfs: Jl,
    iridescence_fragment: Ql,
    bumpmap_pars_fragment: ec,
    clipping_planes_fragment: tc,
    clipping_planes_pars_fragment: nc,
    clipping_planes_pars_vertex: ic,
    clipping_planes_vertex: rc,
    color_fragment: sc,
    color_pars_fragment: ac,
    color_pars_vertex: oc,
    color_vertex: lc,
    common: cc,
    cube_uv_reflection_fragment: hc,
    defaultnormal_vertex: uc,
    displacementmap_pars_vertex: dc,
    displacementmap_vertex: fc,
    emissivemap_fragment: pc,
    emissivemap_pars_fragment: mc,
    encodings_fragment: gc,
    encodings_pars_fragment: _c,
    envmap_fragment: vc,
    envmap_common_pars_fragment: xc,
    envmap_pars_fragment: Mc,
    envmap_pars_vertex: Sc,
    envmap_physical_pars_fragment: Ic,
    envmap_vertex: yc,
    fog_vertex: bc,
    fog_pars_vertex: wc,
    fog_fragment: Ec,
    fog_pars_fragment: Ac,
    gradientmap_pars_fragment: Tc,
    lightmap_fragment: Cc,
    lightmap_pars_fragment: Lc,
    lights_lambert_fragment: Pc,
    lights_lambert_pars_fragment: Rc,
    lights_pars_begin: Dc,
    lights_toon_fragment: Uc,
    lights_toon_pars_fragment: Nc,
    lights_phong_fragment: Fc,
    lights_phong_pars_fragment: Oc,
    lights_physical_fragment: zc,
    lights_physical_pars_fragment: Bc,
    lights_fragment_begin: kc,
    lights_fragment_maps: Gc,
    lights_fragment_end: Vc,
    logdepthbuf_fragment: Hc,
    logdepthbuf_pars_fragment: Wc,
    logdepthbuf_pars_vertex: Xc,
    logdepthbuf_vertex: qc,
    map_fragment: $c,
    map_pars_fragment: Yc,
    map_particle_fragment: jc,
    map_particle_pars_fragment: Kc,
    metalnessmap_fragment: Zc,
    metalnessmap_pars_fragment: Jc,
    morphcolor_vertex: Qc,
    morphnormal_vertex: eh,
    morphtarget_pars_vertex: th,
    morphtarget_vertex: nh,
    normal_fragment_begin: ih,
    normal_fragment_maps: rh,
    normal_pars_fragment: sh,
    normal_pars_vertex: ah,
    normal_vertex: oh,
    normalmap_pars_fragment: lh,
    clearcoat_normal_fragment_begin: ch,
    clearcoat_normal_fragment_maps: hh,
    clearcoat_pars_fragment: uh,
    iridescence_pars_fragment: dh,
    output_fragment: fh,
    packing: ph,
    premultiplied_alpha_fragment: mh,
    project_vertex: gh,
    dithering_fragment: _h,
    dithering_pars_fragment: vh,
    roughnessmap_fragment: xh,
    roughnessmap_pars_fragment: Mh,
    shadowmap_pars_fragment: Sh,
    shadowmap_pars_vertex: yh,
    shadowmap_vertex: bh,
    shadowmask_pars_fragment: wh,
    skinbase_vertex: Eh,
    skinning_pars_vertex: Ah,
    skinning_vertex: Th,
    skinnormal_vertex: Ch,
    specularmap_fragment: Lh,
    specularmap_pars_fragment: Ph,
    tonemapping_fragment: Rh,
    tonemapping_pars_fragment: Dh,
    transmission_fragment: Ih,
    transmission_pars_fragment: Uh,
    uv_pars_fragment: Nh,
    uv_pars_vertex: Fh,
    uv_vertex: Oh,
    worldpos_vertex: zh,
    background_vert: Bh,
    background_frag: kh,
    backgroundCube_vert: Gh,
    backgroundCube_frag: Vh,
    cube_vert: Hh,
    cube_frag: Wh,
    depth_vert: Xh,
    depth_frag: qh,
    distanceRGBA_vert: $h,
    distanceRGBA_frag: Yh,
    equirect_vert: jh,
    equirect_frag: Kh,
    linedashed_vert: Zh,
    linedashed_frag: Jh,
    meshbasic_vert: Qh,
    meshbasic_frag: eu,
    meshlambert_vert: tu,
    meshlambert_frag: nu,
    meshmatcap_vert: iu,
    meshmatcap_frag: ru,
    meshnormal_vert: su,
    meshnormal_frag: au,
    meshphong_vert: ou,
    meshphong_frag: lu,
    meshphysical_vert: cu,
    meshphysical_frag: hu,
    meshtoon_vert: uu,
    meshtoon_frag: du,
    points_vert: fu,
    points_frag: pu,
    shadow_vert: mu,
    shadow_frag: gu,
    sprite_vert: _u,
    sprite_frag: vu,
  },
  se = {
    common: {
      diffuse: { value: new ze(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Ie() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ie() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Ie() },
    },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Ie() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Ie() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Ie() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Ie() },
      normalScale: { value: new Ce(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Ie() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Ie() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Ie() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Ie() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new ze(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new ze(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new Ie() },
    },
    sprite: {
      diffuse: { value: new ze(16777215) },
      opacity: { value: 1 },
      center: { value: new Ce(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Ie() },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
    },
  },
  zt = {
    basic: {
      uniforms: ht([
        se.common,
        se.specularmap,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.fog,
      ]),
      vertexShader: Te.meshbasic_vert,
      fragmentShader: Te.meshbasic_frag,
    },
    lambert: {
      uniforms: ht([
        se.common,
        se.specularmap,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.fog,
        se.lights,
        { emissive: { value: new ze(0) } },
      ]),
      vertexShader: Te.meshlambert_vert,
      fragmentShader: Te.meshlambert_frag,
    },
    phong: {
      uniforms: ht([
        se.common,
        se.specularmap,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.fog,
        se.lights,
        {
          emissive: { value: new ze(0) },
          specular: { value: new ze(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Te.meshphong_vert,
      fragmentShader: Te.meshphong_frag,
    },
    standard: {
      uniforms: ht([
        se.common,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.roughnessmap,
        se.metalnessmap,
        se.fog,
        se.lights,
        {
          emissive: { value: new ze(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Te.meshphysical_vert,
      fragmentShader: Te.meshphysical_frag,
    },
    toon: {
      uniforms: ht([
        se.common,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.gradientmap,
        se.fog,
        se.lights,
        { emissive: { value: new ze(0) } },
      ]),
      vertexShader: Te.meshtoon_vert,
      fragmentShader: Te.meshtoon_frag,
    },
    matcap: {
      uniforms: ht([
        se.common,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Te.meshmatcap_vert,
      fragmentShader: Te.meshmatcap_frag,
    },
    points: {
      uniforms: ht([se.points, se.fog]),
      vertexShader: Te.points_vert,
      fragmentShader: Te.points_frag,
    },
    dashed: {
      uniforms: ht([
        se.common,
        se.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Te.linedashed_vert,
      fragmentShader: Te.linedashed_frag,
    },
    depth: {
      uniforms: ht([se.common, se.displacementmap]),
      vertexShader: Te.depth_vert,
      fragmentShader: Te.depth_frag,
    },
    normal: {
      uniforms: ht([
        se.common,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Te.meshnormal_vert,
      fragmentShader: Te.meshnormal_frag,
    },
    sprite: {
      uniforms: ht([se.sprite, se.fog]),
      vertexShader: Te.sprite_vert,
      fragmentShader: Te.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Ie() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Te.background_vert,
      fragmentShader: Te.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Te.backgroundCube_vert,
      fragmentShader: Te.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Te.cube_vert,
      fragmentShader: Te.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Te.equirect_vert,
      fragmentShader: Te.equirect_frag,
    },
    distanceRGBA: {
      uniforms: ht([
        se.common,
        se.displacementmap,
        {
          referencePosition: { value: new U() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Te.distanceRGBA_vert,
      fragmentShader: Te.distanceRGBA_frag,
    },
    shadow: {
      uniforms: ht([
        se.lights,
        se.fog,
        { color: { value: new ze(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Te.shadow_vert,
      fragmentShader: Te.shadow_frag,
    },
  };
zt.physical = {
  uniforms: ht([
    zt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Ie() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Ie() },
      clearcoatNormalScale: { value: new Ce(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Ie() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Ie() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Ie() },
      sheen: { value: 0 },
      sheenColor: { value: new ze(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Ie() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Ie() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Ie() },
      transmissionSamplerSize: { value: new Ce() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Ie() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new ze(0) },
      specularColor: { value: new ze(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Ie() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Ie() },
    },
  ]),
  vertexShader: Te.meshphysical_vert,
  fragmentShader: Te.meshphysical_frag,
};
const qi = { r: 0, b: 0, g: 0 };
function xu(s, e, t, n, i, r, o) {
  const a = new ze(0);
  let h = r === !0 ? 0 : 1,
    c,
    u,
    d = null,
    f = 0,
    m = null;
  function g(p, l) {
    let A = !1,
      E = l.isScene === !0 ? l.background : null;
    E && E.isTexture && (E = (l.backgroundBlurriness > 0 ? t : e).get(E));
    const M = s.xr,
      y = M.getSession && M.getSession();
    y && y.environmentBlendMode === "additive" && (E = null),
      E === null ? v(a, h) : E && E.isColor && (v(E, 1), (A = !0)),
      (s.autoClear || A) &&
        s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil),
      E && (E.isCubeTexture || E.mapping === ji)
        ? (u === void 0 &&
            ((u = new ft(
              new ii(1, 1, 1),
              new An({
                name: "BackgroundCubeMaterial",
                uniforms: ei(zt.backgroundCube.uniforms),
                vertexShader: zt.backgroundCube.vertexShader,
                fragmentShader: zt.backgroundCube.fragmentShader,
                side: pt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            u.geometry.deleteAttribute("normal"),
            u.geometry.deleteAttribute("uv"),
            (u.onBeforeRender = function (L, D, I) {
              this.matrixWorld.copyPosition(I.matrixWorld);
            }),
            Object.defineProperty(u.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            i.update(u)),
          (u.material.uniforms.envMap.value = E),
          (u.material.uniforms.flipEnvMap.value =
            E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1),
          (u.material.uniforms.backgroundBlurriness.value =
            l.backgroundBlurriness),
          (u.material.uniforms.backgroundIntensity.value =
            l.backgroundIntensity),
          (u.material.toneMapped = E.encoding !== Ge),
          (d !== E || f !== E.version || m !== s.toneMapping) &&
            ((u.material.needsUpdate = !0),
            (d = E),
            (f = E.version),
            (m = s.toneMapping)),
          u.layers.enableAll(),
          p.unshift(u, u.geometry, u.material, 0, 0, null))
        : E &&
          E.isTexture &&
          (c === void 0 &&
            ((c = new ft(
              new Zi(2, 2),
              new An({
                name: "BackgroundMaterial",
                uniforms: ei(zt.background.uniforms),
                vertexShader: zt.background.vertexShader,
                fragmentShader: zt.background.fragmentShader,
                side: ln,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            Object.defineProperty(c.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            i.update(c)),
          (c.material.uniforms.t2D.value = E),
          (c.material.uniforms.backgroundIntensity.value =
            l.backgroundIntensity),
          (c.material.toneMapped = E.encoding !== Ge),
          E.matrixAutoUpdate === !0 && E.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(E.matrix),
          (d !== E || f !== E.version || m !== s.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (d = E),
            (f = E.version),
            (m = s.toneMapping)),
          c.layers.enableAll(),
          p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function v(p, l) {
    p.getRGB(qi, Wa(s)), n.buffers.color.setClear(qi.r, qi.g, qi.b, l, o);
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (p, l = 1) {
      a.set(p), (h = l), v(a, h);
    },
    getClearAlpha: function () {
      return h;
    },
    setClearAlpha: function (p) {
      (h = p), v(a, h);
    },
    render: g,
  };
}
function Mu(s, e, t, n) {
  const i = s.getParameter(34921),
    r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    o = n.isWebGL2 || r !== null,
    a = {},
    h = p(null);
  let c = h,
    u = !1;
  function d(F, G, K, ee, $) {
    let ne = !1;
    if (o) {
      const Q = v(ee, K, G);
      c !== Q && ((c = Q), m(c.object)),
        (ne = l(F, ee, K, $)),
        ne && A(F, ee, K, $);
    } else {
      const Q = G.wireframe === !0;
      (c.geometry !== ee.id || c.program !== K.id || c.wireframe !== Q) &&
        ((c.geometry = ee.id),
        (c.program = K.id),
        (c.wireframe = Q),
        (ne = !0));
    }
    $ !== null && t.update($, 34963),
      (ne || u) &&
        ((u = !1),
        I(F, G, K, ee),
        $ !== null && s.bindBuffer(34963, t.get($).buffer));
  }
  function f() {
    return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES();
  }
  function m(F) {
    return n.isWebGL2 ? s.bindVertexArray(F) : r.bindVertexArrayOES(F);
  }
  function g(F) {
    return n.isWebGL2 ? s.deleteVertexArray(F) : r.deleteVertexArrayOES(F);
  }
  function v(F, G, K) {
    const ee = K.wireframe === !0;
    let $ = a[F.id];
    $ === void 0 && (($ = {}), (a[F.id] = $));
    let ne = $[G.id];
    ne === void 0 && ((ne = {}), ($[G.id] = ne));
    let Q = ne[ee];
    return Q === void 0 && ((Q = p(f())), (ne[ee] = Q)), Q;
  }
  function p(F) {
    const G = [],
      K = [],
      ee = [];
    for (let $ = 0; $ < i; $++) (G[$] = 0), (K[$] = 0), (ee[$] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: G,
      enabledAttributes: K,
      attributeDivisors: ee,
      object: F,
      attributes: {},
      index: null,
    };
  }
  function l(F, G, K, ee) {
    const $ = c.attributes,
      ne = G.attributes;
    let Q = 0;
    const Me = K.getAttributes();
    for (const ie in Me)
      if (Me[ie].location >= 0) {
        const j = $[ie];
        let ae = ne[ie];
        if (
          (ae === void 0 &&
            (ie === "instanceMatrix" &&
              F.instanceMatrix &&
              (ae = F.instanceMatrix),
            ie === "instanceColor" &&
              F.instanceColor &&
              (ae = F.instanceColor)),
          j === void 0 || j.attribute !== ae || (ae && j.data !== ae.data))
        )
          return !0;
        Q++;
      }
    return c.attributesNum !== Q || c.index !== ee;
  }
  function A(F, G, K, ee) {
    const $ = {},
      ne = G.attributes;
    let Q = 0;
    const Me = K.getAttributes();
    for (const ie in Me)
      if (Me[ie].location >= 0) {
        let j = ne[ie];
        j === void 0 &&
          (ie === "instanceMatrix" &&
            F.instanceMatrix &&
            (j = F.instanceMatrix),
          ie === "instanceColor" && F.instanceColor && (j = F.instanceColor));
        const ae = {};
        (ae.attribute = j),
          j && j.data && (ae.data = j.data),
          ($[ie] = ae),
          Q++;
      }
    (c.attributes = $), (c.attributesNum = Q), (c.index = ee);
  }
  function E() {
    const F = c.newAttributes;
    for (let G = 0, K = F.length; G < K; G++) F[G] = 0;
  }
  function M(F) {
    y(F, 0);
  }
  function y(F, G) {
    const K = c.newAttributes,
      ee = c.enabledAttributes,
      $ = c.attributeDivisors;
    (K[F] = 1),
      ee[F] === 0 && (s.enableVertexAttribArray(F), (ee[F] = 1)),
      $[F] !== G &&
        ((n.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](F, G),
        ($[F] = G));
  }
  function L() {
    const F = c.newAttributes,
      G = c.enabledAttributes;
    for (let K = 0, ee = G.length; K < ee; K++)
      G[K] !== F[K] && (s.disableVertexAttribArray(K), (G[K] = 0));
  }
  function D(F, G, K, ee, $, ne) {
    n.isWebGL2 === !0 && (K === 5124 || K === 5125)
      ? s.vertexAttribIPointer(F, G, K, $, ne)
      : s.vertexAttribPointer(F, G, K, ee, $, ne);
  }
  function I(F, G, K, ee) {
    if (
      n.isWebGL2 === !1 &&
      (F.isInstancedMesh || ee.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    E();
    const $ = ee.attributes,
      ne = K.getAttributes(),
      Q = G.defaultAttributeValues;
    for (const Me in ne) {
      const ie = ne[Me];
      if (ie.location >= 0) {
        let V = $[Me];
        if (
          (V === void 0 &&
            (Me === "instanceMatrix" &&
              F.instanceMatrix &&
              (V = F.instanceMatrix),
            Me === "instanceColor" && F.instanceColor && (V = F.instanceColor)),
          V !== void 0)
        ) {
          const j = V.normalized,
            ae = V.itemSize,
            ce = t.get(V);
          if (ce === void 0) continue;
          const z = ce.buffer,
            ye = ce.type,
            xe = ce.bytesPerElement;
          if (V.isInterleavedBufferAttribute) {
            const re = V.data,
              ve = re.stride,
              Fe = V.offset;
            if (re.isInstancedInterleavedBuffer) {
              for (let me = 0; me < ie.locationSize; me++)
                y(ie.location + me, re.meshPerAttribute);
              F.isInstancedMesh !== !0 &&
                ee._maxInstanceCount === void 0 &&
                (ee._maxInstanceCount = re.meshPerAttribute * re.count);
            } else
              for (let me = 0; me < ie.locationSize; me++) M(ie.location + me);
            s.bindBuffer(34962, z);
            for (let me = 0; me < ie.locationSize; me++)
              D(
                ie.location + me,
                ae / ie.locationSize,
                ye,
                j,
                ve * xe,
                (Fe + (ae / ie.locationSize) * me) * xe
              );
          } else {
            if (V.isInstancedBufferAttribute) {
              for (let re = 0; re < ie.locationSize; re++)
                y(ie.location + re, V.meshPerAttribute);
              F.isInstancedMesh !== !0 &&
                ee._maxInstanceCount === void 0 &&
                (ee._maxInstanceCount = V.meshPerAttribute * V.count);
            } else
              for (let re = 0; re < ie.locationSize; re++) M(ie.location + re);
            s.bindBuffer(34962, z);
            for (let re = 0; re < ie.locationSize; re++)
              D(
                ie.location + re,
                ae / ie.locationSize,
                ye,
                j,
                ae * xe,
                (ae / ie.locationSize) * re * xe
              );
          }
        } else if (Q !== void 0) {
          const j = Q[Me];
          if (j !== void 0)
            switch (j.length) {
              case 2:
                s.vertexAttrib2fv(ie.location, j);
                break;
              case 3:
                s.vertexAttrib3fv(ie.location, j);
                break;
              case 4:
                s.vertexAttrib4fv(ie.location, j);
                break;
              default:
                s.vertexAttrib1fv(ie.location, j);
            }
        }
      }
    }
    L();
  }
  function x() {
    k();
    for (const F in a) {
      const G = a[F];
      for (const K in G) {
        const ee = G[K];
        for (const $ in ee) g(ee[$].object), delete ee[$];
        delete G[K];
      }
      delete a[F];
    }
  }
  function w(F) {
    if (a[F.id] === void 0) return;
    const G = a[F.id];
    for (const K in G) {
      const ee = G[K];
      for (const $ in ee) g(ee[$].object), delete ee[$];
      delete G[K];
    }
    delete a[F.id];
  }
  function Y(F) {
    for (const G in a) {
      const K = a[G];
      if (K[F.id] === void 0) continue;
      const ee = K[F.id];
      for (const $ in ee) g(ee[$].object), delete ee[$];
      delete K[F.id];
    }
  }
  function k() {
    P(), (u = !0), c !== h && ((c = h), m(c.object));
  }
  function P() {
    (h.geometry = null), (h.program = null), (h.wireframe = !1);
  }
  return {
    setup: d,
    reset: k,
    resetDefaultState: P,
    dispose: x,
    releaseStatesOfGeometry: w,
    releaseStatesOfProgram: Y,
    initAttributes: E,
    enableAttribute: M,
    disableUnusedAttributes: L,
  };
}
function Su(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function o(c) {
    r = c;
  }
  function a(c, u) {
    s.drawArrays(r, c, u), t.update(u, r, 1);
  }
  function h(c, u, d) {
    if (d === 0) return;
    let f, m;
    if (i) (f = s), (m = "drawArraysInstanced");
    else if (
      ((f = e.get("ANGLE_instanced_arrays")),
      (m = "drawArraysInstancedANGLE"),
      f === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    f[m](r, c, u, d), t.update(u, r, d);
  }
  (this.setMode = o), (this.render = a), (this.renderInstances = h);
}
function yu(s, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const D = e.get("EXT_texture_filter_anisotropic");
      n = s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function r(D) {
    if (D === "highp") {
      if (
        s.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        s.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      D = "mediump";
    }
    return D === "mediump" &&
      s.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      s.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  const o =
    typeof WebGL2RenderingContext < "u" &&
    s.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const h = r(a);
  h !== a &&
    (console.warn(
      "THREE.WebGLRenderer:",
      a,
      "not supported, using",
      h,
      "instead."
    ),
    (a = h));
  const c = o || e.has("WEBGL_draw_buffers"),
    u = t.logarithmicDepthBuffer === !0,
    d = s.getParameter(34930),
    f = s.getParameter(35660),
    m = s.getParameter(3379),
    g = s.getParameter(34076),
    v = s.getParameter(34921),
    p = s.getParameter(36347),
    l = s.getParameter(36348),
    A = s.getParameter(36349),
    E = f > 0,
    M = o || e.has("OES_texture_float"),
    y = E && M,
    L = o ? s.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: d,
    maxVertexTextures: f,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: v,
    maxVertexUniforms: p,
    maxVaryings: l,
    maxFragmentUniforms: A,
    vertexTextures: E,
    floatFragmentTextures: M,
    floatVertexTextures: y,
    maxSamples: L,
  };
}
function bu(s) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    r = !1;
  const o = new gn(),
    a = new Ie(),
    h = { value: null, needsUpdate: !1 };
  (this.uniform = h),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (d, f) {
      const m = d.length !== 0 || f || n !== 0 || i;
      return (i = f), (n = d.length), m;
    }),
    (this.beginShadows = function () {
      (r = !0), u(null);
    }),
    (this.endShadows = function () {
      r = !1;
    }),
    (this.setGlobalState = function (d, f) {
      t = u(d, f, 0);
    }),
    (this.setState = function (d, f, m) {
      const g = d.clippingPlanes,
        v = d.clipIntersection,
        p = d.clipShadows,
        l = s.get(d);
      if (!i || g === null || g.length === 0 || (r && !p)) r ? u(null) : c();
      else {
        const A = r ? 0 : n,
          E = A * 4;
        let M = l.clippingState || null;
        (h.value = M), (M = u(g, f, E, m));
        for (let y = 0; y !== E; ++y) M[y] = t[y];
        (l.clippingState = M),
          (this.numIntersection = v ? this.numPlanes : 0),
          (this.numPlanes += A);
      }
    });
  function c() {
    h.value !== t && ((h.value = t), (h.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function u(d, f, m, g) {
    const v = d !== null ? d.length : 0;
    let p = null;
    if (v !== 0) {
      if (((p = h.value), g !== !0 || p === null)) {
        const l = m + v * 4,
          A = f.matrixWorldInverse;
        a.getNormalMatrix(A),
          (p === null || p.length < l) && (p = new Float32Array(l));
        for (let E = 0, M = m; E !== v; ++E, M += 4)
          o.copy(d[E]).applyMatrix4(A, a),
            o.normal.toArray(p, M),
            (p[M + 3] = o.constant);
      }
      (h.value = p), (h.needsUpdate = !0);
    }
    return (e.numPlanes = v), (e.numIntersection = 0), p;
  }
}
function wu(s) {
  let e = new WeakMap();
  function t(o, a) {
    return a === Hr ? (o.mapping = Zn) : a === Wr && (o.mapping = Jn), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === Hr || a === Wr)
        if (e.has(o)) {
          const h = e.get(o).texture;
          return t(h, o.mapping);
        } else {
          const h = o.image;
          if (h && h.height > 0) {
            const c = new kl(h.height / 2);
            return (
              c.fromEquirectangularTexture(s, o),
              e.set(o, c),
              o.addEventListener("dispose", i),
              t(c.texture, o.mapping)
            );
          } else return null;
        }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const h = e.get(a);
    h !== void 0 && (e.delete(a), h.dispose());
  }
  function r() {
    e = new WeakMap();
  }
  return { get: n, dispose: r };
}
class Ya extends Xa {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, o = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = r),
      (this.far = o),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, r, o) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let r = n - e,
      o = n + e,
      a = i + t,
      h = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += c * this.view.offsetX),
        (o = r + c * this.view.width),
        (a -= u * this.view.offsetY),
        (h = a - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(r, o, a, h, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const $n = 4,
  Js = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  vn = 20,
  Nr = new Ya(),
  Qs = new ze();
let Fr = null;
const _n = (1 + Math.sqrt(5)) / 2,
  Xn = 1 / _n,
  ea = [
    new U(1, 1, 1),
    new U(-1, 1, 1),
    new U(1, 1, -1),
    new U(-1, 1, -1),
    new U(0, _n, Xn),
    new U(0, _n, -Xn),
    new U(Xn, 0, _n),
    new U(-Xn, 0, _n),
    new U(_n, Xn, 0),
    new U(-_n, Xn, 0),
  ];
class ta {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (Fr = this._renderer.getRenderTarget()), this._setSize(256);
    const r = this._allocateTargets();
    return (
      (r.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, r),
      t > 0 && this._blur(r, 0, 0, t),
      this._applyPMREM(r),
      this._cleanup(r),
      r
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = ra()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = ia()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Fr),
      (e.scissorTest = !1),
      $i(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Zn || e.mapping === Jn
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (Fr = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: bt,
        minFilter: bt,
        generateMipmaps: !1,
        type: mi,
        format: Ut,
        encoding: bn,
        depthBuffer: !1,
      },
      i = na(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = na(e, t, n));
      const { _lodMax: r } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = Eu(r)),
        (this._blurMaterial = Au(r, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new ft(this._lodPlanes[0], e);
    this._renderer.compile(t, Nr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new wt(90, 1, t, n),
      h = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      d = u.autoClear,
      f = u.toneMapping;
    u.getClearColor(Qs), (u.toneMapping = Kt), (u.autoClear = !1);
    const m = new Ga({
        name: "PMREM.Background",
        side: pt,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new ft(new ii(), m);
    let v = !1;
    const p = e.background;
    p
      ? p.isColor && (m.color.copy(p), (e.background = null), (v = !0))
      : (m.color.copy(Qs), (v = !0));
    for (let l = 0; l < 6; l++) {
      const A = l % 3;
      A === 0
        ? (a.up.set(0, h[l], 0), a.lookAt(c[l], 0, 0))
        : A === 1
        ? (a.up.set(0, 0, h[l]), a.lookAt(0, c[l], 0))
        : (a.up.set(0, h[l], 0), a.lookAt(0, 0, c[l]));
      const E = this._cubeSize;
      $i(i, A * E, l > 2 ? E : 0, E, E),
        u.setRenderTarget(i),
        v && u.render(g, a),
        u.render(e, a);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (u.toneMapping = f),
      (u.autoClear = d),
      (e.background = p);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === Zn || e.mapping === Jn;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = ra()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = ia());
    const r = i ? this._cubemapMaterial : this._equirectMaterial,
      o = new ft(this._lodPlanes[0], r),
      a = r.uniforms;
    a.envMap.value = e;
    const h = this._cubeSize;
    $i(t, 0, 0, 3 * h, 2 * h), n.setRenderTarget(t), n.render(o, Nr);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(
          this._sigmas[i] * this._sigmas[i] -
            this._sigmas[i - 1] * this._sigmas[i - 1]
        ),
        o = ea[(i - 1) % ea.length];
      this._blur(e, i - 1, i, r, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, i, "latitudinal", r),
      this._halfBlur(o, e, n, n, i, "longitudinal", r);
  }
  _halfBlur(e, t, n, i, r, o, a) {
    const h = this._renderer,
      c = this._blurMaterial;
    o !== "latitudinal" &&
      o !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const u = 3,
      d = new ft(this._lodPlanes[i], c),
      f = c.uniforms,
      m = this._sizeLods[n] - 1,
      g = isFinite(r) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * vn - 1),
      v = r / g,
      p = isFinite(r) ? 1 + Math.floor(u * v) : vn;
    p > vn &&
      console.warn(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vn}`
      );
    const l = [];
    let A = 0;
    for (let D = 0; D < vn; ++D) {
      const I = D / v,
        x = Math.exp((-I * I) / 2);
      l.push(x), D === 0 ? (A += x) : D < p && (A += 2 * x);
    }
    for (let D = 0; D < l.length; D++) l[D] = l[D] / A;
    (f.envMap.value = e.texture),
      (f.samples.value = p),
      (f.weights.value = l),
      (f.latitudinal.value = o === "latitudinal"),
      a && (f.poleAxis.value = a);
    const { _lodMax: E } = this;
    (f.dTheta.value = g), (f.mipInt.value = E - n);
    const M = this._sizeLods[i],
      y = 3 * M * (i > E - $n ? i - E + $n : 0),
      L = 4 * (this._cubeSize - M);
    $i(t, y, L, 3 * M, 2 * M), h.setRenderTarget(t), h.render(d, Nr);
  }
}
function Eu(s) {
  const e = [],
    t = [],
    n = [];
  let i = s;
  const r = s - $n + 1 + Js.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let h = 1 / a;
    o > s - $n ? (h = Js[o - s + $n - 1]) : o === 0 && (h = 0), n.push(h);
    const c = 1 / (a - 2),
      u = -c,
      d = 1 + c,
      f = [u, u, d, u, d, d, u, u, d, d, u, d],
      m = 6,
      g = 6,
      v = 3,
      p = 2,
      l = 1,
      A = new Float32Array(v * g * m),
      E = new Float32Array(p * g * m),
      M = new Float32Array(l * g * m);
    for (let L = 0; L < m; L++) {
      const D = ((L % 3) * 2) / 3 - 1,
        I = L > 2 ? 0 : -1,
        x = [
          D,
          I,
          0,
          D + 2 / 3,
          I,
          0,
          D + 2 / 3,
          I + 1,
          0,
          D,
          I,
          0,
          D + 2 / 3,
          I + 1,
          0,
          D,
          I + 1,
          0,
        ];
      A.set(x, v * g * L), E.set(f, p * g * L);
      const w = [L, L, L, L, L, L];
      M.set(w, l * g * L);
    }
    const y = new cn();
    y.setAttribute("position", new Et(A, v)),
      y.setAttribute("uv", new Et(E, p)),
      y.setAttribute("faceIndex", new Et(M, l)),
      e.push(y),
      i > $n && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function na(s, e, t) {
  const n = new wn(s, e, t);
  return (
    (n.texture.mapping = ji),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function $i(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function Au(s, e, t) {
  const n = new Float32Array(vn),
    i = new U(0, 1, 0);
  return new An({
    name: "SphericalGaussianBlur",
    defines: {
      n: vn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: Qr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: an,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ia() {
  return new An({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Qr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: an,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ra() {
  return new An({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Qr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: an,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Qr() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Tu(s) {
  let e = new WeakMap(),
    t = null;
  function n(a) {
    if (a && a.isTexture) {
      const h = a.mapping,
        c = h === Hr || h === Wr,
        u = h === Zn || h === Jn;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let d = e.get(a);
          return (
            t === null && (t = new ta(s)),
            (d = c ? t.fromEquirectangular(a, d) : t.fromCubemap(a, d)),
            e.set(a, d),
            d.texture
          );
        } else {
          if (e.has(a)) return e.get(a).texture;
          {
            const d = a.image;
            if ((c && d && d.height > 0) || (u && d && i(d))) {
              t === null && (t = new ta(s));
              const f = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, f), a.addEventListener("dispose", r), f.texture;
            } else return null;
          }
        }
    }
    return a;
  }
  function i(a) {
    let h = 0;
    const c = 6;
    for (let u = 0; u < c; u++) a[u] !== void 0 && h++;
    return h === c;
  }
  function r(a) {
    const h = a.target;
    h.removeEventListener("dispose", r);
    const c = e.get(h);
    c !== void 0 && (e.delete(h), c.dispose());
  }
  function o() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: o };
}
function Cu(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          s.getExtension("WEBGL_depth_texture") ||
          s.getExtension("MOZ_WEBGL_depth_texture") ||
          s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          s.getExtension("EXT_texture_filter_anisotropic") ||
          s.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          s.getExtension("WEBGL_compressed_texture_s3tc") ||
          s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          s.getExtension("WEBGL_compressed_texture_pvrtc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t("EXT_color_buffer_float")
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        i
      );
    },
  };
}
function Lu(s, e, t, n) {
  const i = {},
    r = new WeakMap();
  function o(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes) e.remove(f.attributes[g]);
    f.removeEventListener("dispose", o), delete i[f.id];
    const m = r.get(f);
    m && (e.remove(m), r.delete(f)),
      n.releaseStatesOfGeometry(f),
      f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
      t.memory.geometries--;
  }
  function a(d, f) {
    return (
      i[f.id] === !0 ||
        (f.addEventListener("dispose", o),
        (i[f.id] = !0),
        t.memory.geometries++),
      f
    );
  }
  function h(d) {
    const f = d.attributes;
    for (const g in f) e.update(f[g], 34962);
    const m = d.morphAttributes;
    for (const g in m) {
      const v = m[g];
      for (let p = 0, l = v.length; p < l; p++) e.update(v[p], 34962);
    }
  }
  function c(d) {
    const f = [],
      m = d.index,
      g = d.attributes.position;
    let v = 0;
    if (m !== null) {
      const A = m.array;
      v = m.version;
      for (let E = 0, M = A.length; E < M; E += 3) {
        const y = A[E + 0],
          L = A[E + 1],
          D = A[E + 2];
        f.push(y, L, L, D, D, y);
      }
    } else {
      const A = g.array;
      v = g.version;
      for (let E = 0, M = A.length / 3 - 1; E < M; E += 3) {
        const y = E + 0,
          L = E + 1,
          D = E + 2;
        f.push(y, L, L, D, D, y);
      }
    }
    const p = new (Na(f) ? Ha : Va)(f, 1);
    p.version = v;
    const l = r.get(d);
    l && e.remove(l), r.set(d, p);
  }
  function u(d) {
    const f = r.get(d);
    if (f) {
      const m = d.index;
      m !== null && f.version < m.version && c(d);
    } else c(d);
    return r.get(d);
  }
  return { get: a, update: h, getWireframeAttribute: u };
}
function Pu(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function o(f) {
    r = f;
  }
  let a, h;
  function c(f) {
    (a = f.type), (h = f.bytesPerElement);
  }
  function u(f, m) {
    s.drawElements(r, m, a, f * h), t.update(m, r, 1);
  }
  function d(f, m, g) {
    if (g === 0) return;
    let v, p;
    if (i) (v = s), (p = "drawElementsInstanced");
    else if (
      ((v = e.get("ANGLE_instanced_arrays")),
      (p = "drawElementsInstancedANGLE"),
      v === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    v[p](r, m, a, f * h, g), t.update(m, r, g);
  }
  (this.setMode = o),
    (this.setIndex = c),
    (this.render = u),
    (this.renderInstances = d);
}
function Ru(s) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, o, a) {
    switch ((t.calls++, o)) {
      case 4:
        t.triangles += a * (r / 3);
        break;
      case 1:
        t.lines += a * (r / 2);
        break;
      case 3:
        t.lines += a * (r - 1);
        break;
      case 2:
        t.lines += a * r;
        break;
      case 0:
        t.points += a * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function Du(s, e) {
  return s[0] - e[0];
}
function Iu(s, e) {
  return Math.abs(e[1]) - Math.abs(s[1]);
}
function Uu(s, e, t) {
  const n = {},
    i = new Float32Array(8),
    r = new WeakMap(),
    o = new nt(),
    a = [];
  for (let c = 0; c < 8; c++) a[c] = [c, 0];
  function h(c, u, d) {
    const f = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g =
          u.morphAttributes.position ||
          u.morphAttributes.normal ||
          u.morphAttributes.color,
        v = g !== void 0 ? g.length : 0;
      let p = r.get(u);
      if (p === void 0 || p.count !== v) {
        let G = function () {
          P.dispose(), r.delete(u), u.removeEventListener("dispose", G);
        };
        var m = G;
        p !== void 0 && p.texture.dispose();
        const E = u.morphAttributes.position !== void 0,
          M = u.morphAttributes.normal !== void 0,
          y = u.morphAttributes.color !== void 0,
          L = u.morphAttributes.position || [],
          D = u.morphAttributes.normal || [],
          I = u.morphAttributes.color || [];
        let x = 0;
        E === !0 && (x = 1), M === !0 && (x = 2), y === !0 && (x = 3);
        let w = u.attributes.position.count * x,
          Y = 1;
        w > e.maxTextureSize &&
          ((Y = Math.ceil(w / e.maxTextureSize)), (w = e.maxTextureSize));
        const k = new Float32Array(w * Y * 4 * v),
          P = new za(k, w, Y, v);
        (P.type = Mn), (P.needsUpdate = !0);
        const F = x * 4;
        for (let K = 0; K < v; K++) {
          const ee = L[K],
            $ = D[K],
            ne = I[K],
            Q = w * Y * 4 * K;
          for (let Me = 0; Me < ee.count; Me++) {
            const ie = Me * F;
            E === !0 &&
              (o.fromBufferAttribute(ee, Me),
              (k[Q + ie + 0] = o.x),
              (k[Q + ie + 1] = o.y),
              (k[Q + ie + 2] = o.z),
              (k[Q + ie + 3] = 0)),
              M === !0 &&
                (o.fromBufferAttribute($, Me),
                (k[Q + ie + 4] = o.x),
                (k[Q + ie + 5] = o.y),
                (k[Q + ie + 6] = o.z),
                (k[Q + ie + 7] = 0)),
              y === !0 &&
                (o.fromBufferAttribute(ne, Me),
                (k[Q + ie + 8] = o.x),
                (k[Q + ie + 9] = o.y),
                (k[Q + ie + 10] = o.z),
                (k[Q + ie + 11] = ne.itemSize === 4 ? o.w : 1));
          }
        }
        (p = { count: v, texture: P, size: new Ce(w, Y) }),
          r.set(u, p),
          u.addEventListener("dispose", G);
      }
      let l = 0;
      for (let E = 0; E < f.length; E++) l += f[E];
      const A = u.morphTargetsRelative ? 1 : 1 - l;
      d.getUniforms().setValue(s, "morphTargetBaseInfluence", A),
        d.getUniforms().setValue(s, "morphTargetInfluences", f),
        d.getUniforms().setValue(s, "morphTargetsTexture", p.texture, t),
        d.getUniforms().setValue(s, "morphTargetsTextureSize", p.size);
    } else {
      const g = f === void 0 ? 0 : f.length;
      let v = n[u.id];
      if (v === void 0 || v.length !== g) {
        v = [];
        for (let M = 0; M < g; M++) v[M] = [M, 0];
        n[u.id] = v;
      }
      for (let M = 0; M < g; M++) {
        const y = v[M];
        (y[0] = M), (y[1] = f[M]);
      }
      v.sort(Iu);
      for (let M = 0; M < 8; M++)
        M < g && v[M][1]
          ? ((a[M][0] = v[M][0]), (a[M][1] = v[M][1]))
          : ((a[M][0] = Number.MAX_SAFE_INTEGER), (a[M][1] = 0));
      a.sort(Du);
      const p = u.morphAttributes.position,
        l = u.morphAttributes.normal;
      let A = 0;
      for (let M = 0; M < 8; M++) {
        const y = a[M],
          L = y[0],
          D = y[1];
        L !== Number.MAX_SAFE_INTEGER && D
          ? (p &&
              u.getAttribute("morphTarget" + M) !== p[L] &&
              u.setAttribute("morphTarget" + M, p[L]),
            l &&
              u.getAttribute("morphNormal" + M) !== l[L] &&
              u.setAttribute("morphNormal" + M, l[L]),
            (i[M] = D),
            (A += D))
          : (p &&
              u.hasAttribute("morphTarget" + M) === !0 &&
              u.deleteAttribute("morphTarget" + M),
            l &&
              u.hasAttribute("morphNormal" + M) === !0 &&
              u.deleteAttribute("morphNormal" + M),
            (i[M] = 0));
      }
      const E = u.morphTargetsRelative ? 1 : 1 - A;
      d.getUniforms().setValue(s, "morphTargetBaseInfluence", E),
        d.getUniforms().setValue(s, "morphTargetInfluences", i);
    }
  }
  return { update: h };
}
function Nu(s, e, t, n) {
  let i = new WeakMap();
  function r(h) {
    const c = n.render.frame,
      u = h.geometry,
      d = e.get(h, u);
    return (
      i.get(d) !== c && (e.update(d), i.set(d, c)),
      h.isInstancedMesh &&
        (h.hasEventListener("dispose", a) === !1 &&
          h.addEventListener("dispose", a),
        t.update(h.instanceMatrix, 34962),
        h.instanceColor !== null && t.update(h.instanceColor, 34962)),
      d
    );
  }
  function o() {
    i = new WeakMap();
  }
  function a(h) {
    const c = h.target;
    c.removeEventListener("dispose", a),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: r, dispose: o };
}
const ja = new mt(),
  Ka = new za(),
  Za = new bl(),
  Ja = new qa(),
  sa = [],
  aa = [],
  oa = new Float32Array(16),
  la = new Float32Array(9),
  ca = new Float32Array(4);
function ri(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = sa[i];
  if ((r === void 0 && ((r = new Float32Array(i)), (sa[i] = r)), e !== 0)) {
    n.toArray(r, 0);
    for (let o = 1, a = 0; o !== e; ++o) (a += t), s[o].toArray(r, a);
  }
  return r;
}
function Je(s, e) {
  if (s.length !== e.length) return !1;
  for (let t = 0, n = s.length; t < n; t++) if (s[t] !== e[t]) return !1;
  return !0;
}
function Qe(s, e) {
  for (let t = 0, n = e.length; t < n; t++) s[t] = e[t];
}
function Ji(s, e) {
  let t = aa[e];
  t === void 0 && ((t = new Int32Array(e)), (aa[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = s.allocateTextureUnit();
  return t;
}
function Fu(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), (t[0] = e));
}
function Ou(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Je(t, e)) return;
    s.uniform2fv(this.addr, e), Qe(t, e);
  }
}
function zu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (s.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (Je(t, e)) return;
    s.uniform3fv(this.addr, e), Qe(t, e);
  }
}
function Bu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Je(t, e)) return;
    s.uniform4fv(this.addr, e), Qe(t, e);
  }
}
function ku(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Je(t, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), Qe(t, e);
  } else {
    if (Je(t, n)) return;
    ca.set(n), s.uniformMatrix2fv(this.addr, !1, ca), Qe(t, n);
  }
}
function Gu(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Je(t, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), Qe(t, e);
  } else {
    if (Je(t, n)) return;
    la.set(n), s.uniformMatrix3fv(this.addr, !1, la), Qe(t, n);
  }
}
function Vu(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Je(t, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), Qe(t, e);
  } else {
    if (Je(t, n)) return;
    oa.set(n), s.uniformMatrix4fv(this.addr, !1, oa), Qe(t, n);
  }
}
function Hu(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), (t[0] = e));
}
function Wu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Je(t, e)) return;
    s.uniform2iv(this.addr, e), Qe(t, e);
  }
}
function Xu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (Je(t, e)) return;
    s.uniform3iv(this.addr, e), Qe(t, e);
  }
}
function qu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Je(t, e)) return;
    s.uniform4iv(this.addr, e), Qe(t, e);
  }
}
function $u(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), (t[0] = e));
}
function Yu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Je(t, e)) return;
    s.uniform2uiv(this.addr, e), Qe(t, e);
  }
}
function ju(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (Je(t, e)) return;
    s.uniform3uiv(this.addr, e), Qe(t, e);
  }
}
function Ku(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Je(t, e)) return;
    s.uniform4uiv(this.addr, e), Qe(t, e);
  }
}
function Zu(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2D(e || ja, i);
}
function Ju(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || Za, i);
}
function Qu(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || Ja, i);
}
function ed(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || Ka, i);
}
function td(s) {
  switch (s) {
    case 5126:
      return Fu;
    case 35664:
      return Ou;
    case 35665:
      return zu;
    case 35666:
      return Bu;
    case 35674:
      return ku;
    case 35675:
      return Gu;
    case 35676:
      return Vu;
    case 5124:
    case 35670:
      return Hu;
    case 35667:
    case 35671:
      return Wu;
    case 35668:
    case 35672:
      return Xu;
    case 35669:
    case 35673:
      return qu;
    case 5125:
      return $u;
    case 36294:
      return Yu;
    case 36295:
      return ju;
    case 36296:
      return Ku;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Zu;
    case 35679:
    case 36299:
    case 36307:
      return Ju;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Qu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ed;
  }
}
function nd(s, e) {
  s.uniform1fv(this.addr, e);
}
function id(s, e) {
  const t = ri(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function rd(s, e) {
  const t = ri(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function sd(s, e) {
  const t = ri(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function ad(s, e) {
  const t = ri(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function od(s, e) {
  const t = ri(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function ld(s, e) {
  const t = ri(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function cd(s, e) {
  s.uniform1iv(this.addr, e);
}
function hd(s, e) {
  s.uniform2iv(this.addr, e);
}
function ud(s, e) {
  s.uniform3iv(this.addr, e);
}
function dd(s, e) {
  s.uniform4iv(this.addr, e);
}
function fd(s, e) {
  s.uniform1uiv(this.addr, e);
}
function pd(s, e) {
  s.uniform2uiv(this.addr, e);
}
function md(s, e) {
  s.uniform3uiv(this.addr, e);
}
function gd(s, e) {
  s.uniform4uiv(this.addr, e);
}
function _d(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = Ji(t, i);
  Je(n, r) || (s.uniform1iv(this.addr, r), Qe(n, r));
  for (let o = 0; o !== i; ++o) t.setTexture2D(e[o] || ja, r[o]);
}
function vd(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = Ji(t, i);
  Je(n, r) || (s.uniform1iv(this.addr, r), Qe(n, r));
  for (let o = 0; o !== i; ++o) t.setTexture3D(e[o] || Za, r[o]);
}
function xd(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = Ji(t, i);
  Je(n, r) || (s.uniform1iv(this.addr, r), Qe(n, r));
  for (let o = 0; o !== i; ++o) t.setTextureCube(e[o] || Ja, r[o]);
}
function Md(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = Ji(t, i);
  Je(n, r) || (s.uniform1iv(this.addr, r), Qe(n, r));
  for (let o = 0; o !== i; ++o) t.setTexture2DArray(e[o] || Ka, r[o]);
}
function Sd(s) {
  switch (s) {
    case 5126:
      return nd;
    case 35664:
      return id;
    case 35665:
      return rd;
    case 35666:
      return sd;
    case 35674:
      return ad;
    case 35675:
      return od;
    case 35676:
      return ld;
    case 5124:
    case 35670:
      return cd;
    case 35667:
    case 35671:
      return hd;
    case 35668:
    case 35672:
      return ud;
    case 35669:
    case 35673:
      return dd;
    case 5125:
      return fd;
    case 36294:
      return pd;
    case 36295:
      return md;
    case 36296:
      return gd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return _d;
    case 35679:
    case 36299:
    case 36307:
      return vd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return xd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Md;
  }
}
class yd {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = td(t.type));
  }
}
class bd {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = Sd(t.type));
  }
}
class wd {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, o = i.length; r !== o; ++r) {
      const a = i[r];
      a.setValue(e, t[a.id], n);
    }
  }
}
const Or = /(\w+)(\])?(\[|\.)?/g;
function ha(s, e) {
  s.seq.push(e), (s.map[e.id] = e);
}
function Ed(s, e, t) {
  const n = s.name,
    i = n.length;
  for (Or.lastIndex = 0; ; ) {
    const r = Or.exec(n),
      o = Or.lastIndex;
    let a = r[1];
    const h = r[2] === "]",
      c = r[3];
    if ((h && (a = a | 0), c === void 0 || (c === "[" && o + 2 === i))) {
      ha(t, c === void 0 ? new yd(a, s, e) : new bd(a, s, e));
      break;
    } else {
      let d = t.map[a];
      d === void 0 && ((d = new wd(a)), ha(t, d)), (t = d);
    }
  }
}
class Yi {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i),
        o = e.getUniformLocation(t, r.name);
      Ed(r, o, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, o = t.length; r !== o; ++r) {
      const a = t[r],
        h = n[a.id];
      h.needsUpdate !== !1 && a.setValue(e, h.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function ua(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
let Ad = 0;
function Td(s, e) {
  const t = s.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    r = Math.min(e + 6, t.length);
  for (let o = i; o < r; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Cd(s) {
  switch (s) {
    case bn:
      return ["Linear", "( value )"];
    case Ge:
      return ["sRGB", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported encoding:", s),
        ["Linear", "( value )"]
      );
  }
}
function da(s, e, t) {
  const n = s.getShaderParameter(e, 35713),
    i = s.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const o = parseInt(r[1]);
    return (
      t.toUpperCase() +
      `

` +
      i +
      `

` +
      Td(s.getShaderSource(e), o)
    );
  } else return i;
}
function Ld(s, e) {
  const t = Cd(e);
  return "vec4 " + s + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Pd(s, e) {
  let t;
  switch (e) {
    case Ho:
      t = "Linear";
      break;
    case Wo:
      t = "Reinhard";
      break;
    case Xo:
      t = "OptimizedCineon";
      break;
    case qo:
      t = "ACESFilmic";
      break;
    case $o:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function Rd(s) {
  return [
    s.extensionDerivatives ||
    s.envMapCubeUVHeight ||
    s.bumpMap ||
    s.normalMapTangentSpace ||
    s.clearcoatNormalMap ||
    s.flatShading ||
    s.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (s.extensionFragDepth || s.logarithmicDepthBuffer) &&
    s.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    s.extensionDrawBuffers && s.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (s.extensionShaderTextureLOD || s.envMap || s.transmission) &&
    s.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(ui).join(`
`);
}
function Dd(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Id(s, e) {
  const t = {},
    n = s.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i),
      o = r.name;
    let a = 1;
    r.type === 35674 && (a = 2),
      r.type === 35675 && (a = 3),
      r.type === 35676 && (a = 4),
      (t[o] = {
        type: r.type,
        location: s.getAttribLocation(e, o),
        locationSize: a,
      });
  }
  return t;
}
function ui(s) {
  return s !== "";
}
function fa(s, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function pa(s, e) {
  return s
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const Ud = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Yr(s) {
  return s.replace(Ud, Nd);
}
function Nd(s, e) {
  const t = Te[e];
  if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
  return Yr(t);
}
const Fd =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ma(s) {
  return s.replace(Fd, Od);
}
function Od(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + r + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function ga(s) {
  let e =
    "precision " +
    s.precision +
    ` float;
precision ` +
    s.precision +
    " int;";
  return (
    s.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : s.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : s.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function zd(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    s.shadowMapType === Ta
      ? (e = "SHADOWMAP_TYPE_PCF")
      : s.shadowMapType === So
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : s.shadowMapType === hi && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function Bd(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case Zn:
      case Jn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case ji:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function kd(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case Jn:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Gd(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case Pa:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Go:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Vo:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Vd(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function Hd(s, e, t, n) {
  const i = s.getContext(),
    r = t.defines;
  let o = t.vertexShader,
    a = t.fragmentShader;
  const h = zd(t),
    c = Bd(t),
    u = kd(t),
    d = Gd(t),
    f = Vd(t),
    m = t.isWebGL2 ? "" : Rd(t),
    g = Dd(r),
    v = i.createProgram();
  let p,
    l,
    A = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((p = [g].filter(ui).join(`
`)),
      p.length > 0 &&
        (p += `
`),
      (l = [m, g].filter(ui).join(`
`)),
      l.length > 0 &&
        (l += `
`))
    : ((p = [
        ga(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + u : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs2 ? "#define USE_UV2" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + h : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(ui).join(`
`)),
      (l = [
        m,
        ga(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + u : "",
        t.envMap ? "#define " + d : "",
        f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
        f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
        f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs2 ? "#define USE_UV2" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + h : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Kt ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Kt ? Te.tonemapping_pars_fragment : "",
        t.toneMapping !== Kt ? Pd("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Te.encodings_pars_fragment,
        Ld("linearToOutputTexel", t.outputEncoding),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(ui).join(`
`))),
    (o = Yr(o)),
    (o = fa(o, t)),
    (o = pa(o, t)),
    (a = Yr(a)),
    (a = fa(a, t)),
    (a = pa(a, t)),
    (o = ma(o)),
    (a = ma(a)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((A = `#version 300 es
`),
      (p =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        p),
      (l =
        [
          "#define varying in",
          t.glslVersion === Fs
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Fs ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        l));
  const E = A + p + o,
    M = A + l + a,
    y = ua(i, 35633, E),
    L = ua(i, 35632, M);
  if (
    (i.attachShader(v, y),
    i.attachShader(v, L),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(v, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(v, 0, "position"),
    i.linkProgram(v),
    s.debug.checkShaderErrors)
  ) {
    const x = i.getProgramInfoLog(v).trim(),
      w = i.getShaderInfoLog(y).trim(),
      Y = i.getShaderInfoLog(L).trim();
    let k = !0,
      P = !0;
    if (i.getProgramParameter(v, 35714) === !1)
      if (((k = !1), typeof s.debug.onShaderError == "function"))
        s.debug.onShaderError(i, v, y, L);
      else {
        const F = da(i, y, "vertex"),
          G = da(i, L, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " +
            i.getError() +
            " - VALIDATE_STATUS " +
            i.getProgramParameter(v, 35715) +
            `

Program Info Log: ` +
            x +
            `
` +
            F +
            `
` +
            G
        );
      }
    else
      x !== ""
        ? console.warn("THREE.WebGLProgram: Program Info Log:", x)
        : (w === "" || Y === "") && (P = !1);
    P &&
      (this.diagnostics = {
        runnable: k,
        programLog: x,
        vertexShader: { log: w, prefix: p },
        fragmentShader: { log: Y, prefix: l },
      });
  }
  i.deleteShader(y), i.deleteShader(L);
  let D;
  this.getUniforms = function () {
    return D === void 0 && (D = new Yi(i, v)), D;
  };
  let I;
  return (
    (this.getAttributes = function () {
      return I === void 0 && (I = Id(i, v)), I;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(v),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = Ad++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = v),
    (this.vertexShader = y),
    (this.fragmentShader = L),
    this
  );
}
let Wd = 0;
class Xd {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      r = this._getShaderStage(n),
      o = this._getShaderCacheForMaterial(e);
    return (
      o.has(i) === !1 && (o.add(i), i.usedTimes++),
      o.has(r) === !1 && (o.add(r), r.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new qd(e)), t.set(e, n)), n;
  }
}
class qd {
  constructor(e) {
    (this.id = Wd++), (this.code = e), (this.usedTimes = 0);
  }
}
function $d(s, e, t, n, i, r, o) {
  const a = new Ba(),
    h = new Xd(),
    c = [],
    u = i.isWebGL2,
    d = i.logarithmicDepthBuffer,
    f = i.vertexTextures;
  let m = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function v(x) {
    return x === 1 ? "uv2" : "uv";
  }
  function p(x, w, Y, k, P) {
    const F = k.fog,
      G = P.geometry,
      K = x.isMeshStandardMaterial ? k.environment : null,
      ee = (x.isMeshStandardMaterial ? t : e).get(x.envMap || K),
      $ = ee && ee.mapping === ji ? ee.image.height : null,
      ne = g[x.type];
    x.precision !== null &&
      ((m = i.getMaxPrecision(x.precision)),
      m !== x.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          x.precision,
          "not supported, using",
          m,
          "instead."
        ));
    const Q =
        G.morphAttributes.position ||
        G.morphAttributes.normal ||
        G.morphAttributes.color,
      Me = Q !== void 0 ? Q.length : 0;
    let ie = 0;
    G.morphAttributes.position !== void 0 && (ie = 1),
      G.morphAttributes.normal !== void 0 && (ie = 2),
      G.morphAttributes.color !== void 0 && (ie = 3);
    let V, j, ae, ce;
    if (ne) {
      const ue = zt[ne];
      (V = ue.vertexShader), (j = ue.fragmentShader);
    } else
      (V = x.vertexShader),
        (j = x.fragmentShader),
        h.update(x),
        (ae = h.getVertexShaderID(x)),
        (ce = h.getFragmentShaderID(x));
    const z = s.getRenderTarget(),
      ye = P.isInstancedMesh === !0,
      xe = !!x.map,
      re = !!x.matcap,
      ve = !!ee,
      Fe = !!x.aoMap,
      me = !!x.lightMap,
      Ee = !!x.bumpMap,
      We = !!x.normalMap,
      Ve = !!x.displacementMap,
      Ye = !!x.emissiveMap,
      Xe = !!x.metalnessMap,
      Ne = !!x.roughnessMap,
      Be = x.clearcoat > 0,
      rt = x.iridescence > 0,
      b = x.sheen > 0,
      _ = x.transmission > 0,
      B = Be && !!x.clearcoatMap,
      Z = Be && !!x.clearcoatNormalMap,
      te = Be && !!x.clearcoatRoughnessMap,
      oe = rt && !!x.iridescenceMap,
      T = rt && !!x.iridescenceThicknessMap,
      q = b && !!x.sheenColorMap,
      O = b && !!x.sheenRoughnessMap,
      le = !!x.specularMap,
      de = !!x.specularColorMap,
      pe = !!x.specularIntensityMap,
      he = _ && !!x.transmissionMap,
      fe = _ && !!x.thicknessMap,
      be = !!x.gradientMap,
      Le = !!x.alphaMap,
      qe = x.alphaTest > 0,
      C = !!x.extensions,
      W = !!G.attributes.uv2;
    return {
      isWebGL2: u,
      shaderID: ne,
      shaderName: x.type,
      vertexShader: V,
      fragmentShader: j,
      defines: x.defines,
      customVertexShaderID: ae,
      customFragmentShaderID: ce,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: m,
      instancing: ye,
      instancingColor: ye && P.instanceColor !== null,
      supportsVertexTextures: f,
      outputEncoding:
        z === null
          ? s.outputEncoding
          : z.isXRRenderTarget === !0
          ? z.texture.encoding
          : bn,
      map: xe,
      matcap: re,
      envMap: ve,
      envMapMode: ve && ee.mapping,
      envMapCubeUVHeight: $,
      aoMap: Fe,
      lightMap: me,
      bumpMap: Ee,
      normalMap: We,
      displacementMap: f && Ve,
      emissiveMap: Ye,
      normalMapObjectSpace: We && x.normalMapType === dl,
      normalMapTangentSpace: We && x.normalMapType === Ia,
      decodeVideoTexture:
        xe && x.map.isVideoTexture === !0 && x.map.encoding === Ge,
      metalnessMap: Xe,
      roughnessMap: Ne,
      clearcoat: Be,
      clearcoatMap: B,
      clearcoatNormalMap: Z,
      clearcoatRoughnessMap: te,
      iridescence: rt,
      iridescenceMap: oe,
      iridescenceThicknessMap: T,
      sheen: b,
      sheenColorMap: q,
      sheenRoughnessMap: O,
      specularMap: le,
      specularColorMap: de,
      specularIntensityMap: pe,
      transmission: _,
      transmissionMap: he,
      thicknessMap: fe,
      gradientMap: be,
      opaque: x.transparent === !1 && x.blending === Yn,
      alphaMap: Le,
      alphaTest: qe,
      combine: x.combine,
      mapUv: xe && v(x.map.channel),
      aoMapUv: Fe && v(x.aoMap.channel),
      lightMapUv: me && v(x.lightMap.channel),
      bumpMapUv: Ee && v(x.bumpMap.channel),
      normalMapUv: We && v(x.normalMap.channel),
      displacementMapUv: Ve && v(x.displacementMap.channel),
      emissiveMapUv: Ye && v(x.emissiveMap.channel),
      metalnessMapUv: Xe && v(x.metalnessMap.channel),
      roughnessMapUv: Ne && v(x.roughnessMap.channel),
      clearcoatMapUv: B && v(x.clearcoatMap.channel),
      clearcoatNormalMapUv: Z && v(x.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: te && v(x.clearcoatRoughnessMap.channel),
      iridescenceMapUv: oe && v(x.iridescenceMap.channel),
      iridescenceThicknessMapUv: T && v(x.iridescenceThicknessMap.channel),
      sheenColorMapUv: q && v(x.sheenColorMap.channel),
      sheenRoughnessMapUv: O && v(x.sheenRoughnessMap.channel),
      specularMapUv: le && v(x.specularMap.channel),
      specularColorMapUv: de && v(x.specularColorMap.channel),
      specularIntensityMapUv: pe && v(x.specularIntensityMap.channel),
      transmissionMapUv: he && v(x.transmissionMap.channel),
      thicknessMapUv: fe && v(x.thicknessMap.channel),
      alphaMapUv: Le && v(x.alphaMap.channel),
      vertexTangents: We && !!G.attributes.tangent,
      vertexColors: x.vertexColors,
      vertexAlphas:
        x.vertexColors === !0 &&
        !!G.attributes.color &&
        G.attributes.color.itemSize === 4,
      vertexUvs2: W,
      pointsUvs: P.isPoints === !0 && !!G.attributes.uv && (xe || Le),
      fog: !!F,
      useFog: x.fog === !0,
      fogExp2: F && F.isFogExp2,
      flatShading: x.flatShading === !0,
      sizeAttenuation: x.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      skinning: P.isSkinnedMesh === !0,
      morphTargets: G.morphAttributes.position !== void 0,
      morphNormals: G.morphAttributes.normal !== void 0,
      morphColors: G.morphAttributes.color !== void 0,
      morphTargetsCount: Me,
      morphTextureStride: ie,
      numDirLights: w.directional.length,
      numPointLights: w.point.length,
      numSpotLights: w.spot.length,
      numSpotLightMaps: w.spotLightMap.length,
      numRectAreaLights: w.rectArea.length,
      numHemiLights: w.hemi.length,
      numDirLightShadows: w.directionalShadowMap.length,
      numPointLightShadows: w.pointShadowMap.length,
      numSpotLightShadows: w.spotShadowMap.length,
      numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: s.shadowMap.enabled && Y.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: x.toneMapped ? s.toneMapping : Kt,
      useLegacyLights: s.useLegacyLights,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === kt,
      flipSided: x.side === pt,
      useDepthPacking: x.depthPacking >= 0,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionDerivatives: C && x.extensions.derivatives === !0,
      extensionFragDepth: C && x.extensions.fragDepth === !0,
      extensionDrawBuffers: C && x.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: C && x.extensions.shaderTextureLOD === !0,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: x.customProgramCacheKey(),
    };
  }
  function l(x) {
    const w = [];
    if (
      (x.shaderID
        ? w.push(x.shaderID)
        : (w.push(x.customVertexShaderID), w.push(x.customFragmentShaderID)),
      x.defines !== void 0)
    )
      for (const Y in x.defines) w.push(Y), w.push(x.defines[Y]);
    return (
      x.isRawShaderMaterial === !1 &&
        (A(w, x), E(w, x), w.push(s.outputEncoding)),
      w.push(x.customProgramCacheKey),
      w.join()
    );
  }
  function A(x, w) {
    x.push(w.precision),
      x.push(w.outputEncoding),
      x.push(w.envMapMode),
      x.push(w.envMapCubeUVHeight),
      x.push(w.mapUv),
      x.push(w.alphaMapUv),
      x.push(w.lightMapUv),
      x.push(w.aoMapUv),
      x.push(w.bumpMapUv),
      x.push(w.normalMapUv),
      x.push(w.displacementMapUv),
      x.push(w.emissiveMapUv),
      x.push(w.metalnessMapUv),
      x.push(w.roughnessMapUv),
      x.push(w.clearcoatMapUv),
      x.push(w.clearcoatNormalMapUv),
      x.push(w.clearcoatRoughnessMapUv),
      x.push(w.iridescenceMapUv),
      x.push(w.iridescenceThicknessMapUv),
      x.push(w.sheenColorMapUv),
      x.push(w.sheenRoughnessMapUv),
      x.push(w.specularMapUv),
      x.push(w.specularColorMapUv),
      x.push(w.specularIntensityMapUv),
      x.push(w.transmissionMapUv),
      x.push(w.thicknessMapUv),
      x.push(w.combine),
      x.push(w.fogExp2),
      x.push(w.sizeAttenuation),
      x.push(w.morphTargetsCount),
      x.push(w.morphAttributeCount),
      x.push(w.numDirLights),
      x.push(w.numPointLights),
      x.push(w.numSpotLights),
      x.push(w.numSpotLightMaps),
      x.push(w.numHemiLights),
      x.push(w.numRectAreaLights),
      x.push(w.numDirLightShadows),
      x.push(w.numPointLightShadows),
      x.push(w.numSpotLightShadows),
      x.push(w.numSpotLightShadowsWithMaps),
      x.push(w.shadowMapType),
      x.push(w.toneMapping),
      x.push(w.numClippingPlanes),
      x.push(w.numClipIntersection),
      x.push(w.depthPacking);
  }
  function E(x, w) {
    a.disableAll(),
      w.isWebGL2 && a.enable(0),
      w.supportsVertexTextures && a.enable(1),
      w.instancing && a.enable(2),
      w.instancingColor && a.enable(3),
      w.matcap && a.enable(4),
      w.envMap && a.enable(5),
      w.normalMapObjectSpace && a.enable(6),
      w.normalMapTangentSpace && a.enable(7),
      w.clearcoat && a.enable(8),
      w.iridescence && a.enable(9),
      w.alphaTest && a.enable(10),
      w.vertexColors && a.enable(11),
      w.vertexAlphas && a.enable(12),
      w.vertexUvs2 && a.enable(13),
      w.vertexTangents && a.enable(14),
      x.push(a.mask),
      a.disableAll(),
      w.fog && a.enable(0),
      w.useFog && a.enable(1),
      w.flatShading && a.enable(2),
      w.logarithmicDepthBuffer && a.enable(3),
      w.skinning && a.enable(4),
      w.morphTargets && a.enable(5),
      w.morphNormals && a.enable(6),
      w.morphColors && a.enable(7),
      w.premultipliedAlpha && a.enable(8),
      w.shadowMapEnabled && a.enable(9),
      w.useLegacyLights && a.enable(10),
      w.doubleSided && a.enable(11),
      w.flipSided && a.enable(12),
      w.useDepthPacking && a.enable(13),
      w.dithering && a.enable(14),
      w.transmission && a.enable(15),
      w.sheen && a.enable(16),
      w.decodeVideoTexture && a.enable(17),
      w.opaque && a.enable(18),
      w.pointsUvs && a.enable(19),
      x.push(a.mask);
  }
  function M(x) {
    const w = g[x.type];
    let Y;
    if (w) {
      const k = zt[w];
      Y = Fl.clone(k.uniforms);
    } else Y = x.uniforms;
    return Y;
  }
  function y(x, w) {
    let Y;
    for (let k = 0, P = c.length; k < P; k++) {
      const F = c[k];
      if (F.cacheKey === w) {
        (Y = F), ++Y.usedTimes;
        break;
      }
    }
    return Y === void 0 && ((Y = new Hd(s, w, x, r)), c.push(Y)), Y;
  }
  function L(x) {
    if (--x.usedTimes === 0) {
      const w = c.indexOf(x);
      (c[w] = c[c.length - 1]), c.pop(), x.destroy();
    }
  }
  function D(x) {
    h.remove(x);
  }
  function I() {
    h.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: l,
    getUniforms: M,
    acquireProgram: y,
    releaseProgram: L,
    releaseShaderCache: D,
    programs: c,
    dispose: I,
  };
}
function Yd() {
  let s = new WeakMap();
  function e(r) {
    let o = s.get(r);
    return o === void 0 && ((o = {}), s.set(r, o)), o;
  }
  function t(r) {
    s.delete(r);
  }
  function n(r, o, a) {
    s.get(r)[o] = a;
  }
  function i() {
    s = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: i };
}
function jd(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
    ? s.renderOrder - e.renderOrder
    : s.material.id !== e.material.id
    ? s.material.id - e.material.id
    : s.z !== e.z
    ? s.z - e.z
    : s.id - e.id;
}
function _a(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
    ? s.renderOrder - e.renderOrder
    : s.z !== e.z
    ? e.z - s.z
    : s.id - e.id;
}
function va() {
  const s = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function r() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function o(d, f, m, g, v, p) {
    let l = s[e];
    return (
      l === void 0
        ? ((l = {
            id: d.id,
            object: d,
            geometry: f,
            material: m,
            groupOrder: g,
            renderOrder: d.renderOrder,
            z: v,
            group: p,
          }),
          (s[e] = l))
        : ((l.id = d.id),
          (l.object = d),
          (l.geometry = f),
          (l.material = m),
          (l.groupOrder = g),
          (l.renderOrder = d.renderOrder),
          (l.z = v),
          (l.group = p)),
      e++,
      l
    );
  }
  function a(d, f, m, g, v, p) {
    const l = o(d, f, m, g, v, p);
    m.transmission > 0
      ? n.push(l)
      : m.transparent === !0
      ? i.push(l)
      : t.push(l);
  }
  function h(d, f, m, g, v, p) {
    const l = o(d, f, m, g, v, p);
    m.transmission > 0
      ? n.unshift(l)
      : m.transparent === !0
      ? i.unshift(l)
      : t.unshift(l);
  }
  function c(d, f) {
    t.length > 1 && t.sort(d || jd),
      n.length > 1 && n.sort(f || _a),
      i.length > 1 && i.sort(f || _a);
  }
  function u() {
    for (let d = e, f = s.length; d < f; d++) {
      const m = s[d];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: a,
    unshift: h,
    finish: u,
    sort: c,
  };
}
function Kd() {
  let s = new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let o;
    return (
      r === void 0
        ? ((o = new va()), s.set(n, [o]))
        : i >= r.length
        ? ((o = new va()), r.push(o))
        : (o = r[i]),
      o
    );
  }
  function t() {
    s = new WeakMap();
  }
  return { get: e, dispose: t };
}
function Zd() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new U(), color: new ze() };
          break;
        case "SpotLight":
          t = {
            position: new U(),
            direction: new U(),
            color: new ze(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new U(), color: new ze(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new U(), skyColor: new ze(), groundColor: new ze() };
          break;
        case "RectAreaLight":
          t = {
            color: new ze(),
            position: new U(),
            halfWidth: new U(),
            halfHeight: new U(),
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
function Jd() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
let Qd = 0;
function ef(s, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (s.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (s.map ? 1 : 0)
  );
}
function tf(s, e) {
  const t = new Zd(),
    n = Jd(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
    };
  for (let u = 0; u < 9; u++) i.probe.push(new U());
  const r = new U(),
    o = new Ze(),
    a = new Ze();
  function h(u, d) {
    let f = 0,
      m = 0,
      g = 0;
    for (let Y = 0; Y < 9; Y++) i.probe[Y].set(0, 0, 0);
    let v = 0,
      p = 0,
      l = 0,
      A = 0,
      E = 0,
      M = 0,
      y = 0,
      L = 0,
      D = 0,
      I = 0;
    u.sort(ef);
    const x = d === !0 ? Math.PI : 1;
    for (let Y = 0, k = u.length; Y < k; Y++) {
      const P = u[Y],
        F = P.color,
        G = P.intensity,
        K = P.distance,
        ee = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight)
        (f += F.r * G * x), (m += F.g * G * x), (g += F.b * G * x);
      else if (P.isLightProbe)
        for (let $ = 0; $ < 9; $++)
          i.probe[$].addScaledVector(P.sh.coefficients[$], G);
      else if (P.isDirectionalLight) {
        const $ = t.get(P);
        if (
          ($.color.copy(P.color).multiplyScalar(P.intensity * x), P.castShadow)
        ) {
          const ne = P.shadow,
            Q = n.get(P);
          (Q.shadowBias = ne.bias),
            (Q.shadowNormalBias = ne.normalBias),
            (Q.shadowRadius = ne.radius),
            (Q.shadowMapSize = ne.mapSize),
            (i.directionalShadow[v] = Q),
            (i.directionalShadowMap[v] = ee),
            (i.directionalShadowMatrix[v] = P.shadow.matrix),
            M++;
        }
        (i.directional[v] = $), v++;
      } else if (P.isSpotLight) {
        const $ = t.get(P);
        $.position.setFromMatrixPosition(P.matrixWorld),
          $.color.copy(F).multiplyScalar(G * x),
          ($.distance = K),
          ($.coneCos = Math.cos(P.angle)),
          ($.penumbraCos = Math.cos(P.angle * (1 - P.penumbra))),
          ($.decay = P.decay),
          (i.spot[l] = $);
        const ne = P.shadow;
        if (
          (P.map &&
            ((i.spotLightMap[D] = P.map),
            D++,
            ne.updateMatrices(P),
            P.castShadow && I++),
          (i.spotLightMatrix[l] = ne.matrix),
          P.castShadow)
        ) {
          const Q = n.get(P);
          (Q.shadowBias = ne.bias),
            (Q.shadowNormalBias = ne.normalBias),
            (Q.shadowRadius = ne.radius),
            (Q.shadowMapSize = ne.mapSize),
            (i.spotShadow[l] = Q),
            (i.spotShadowMap[l] = ee),
            L++;
        }
        l++;
      } else if (P.isRectAreaLight) {
        const $ = t.get(P);
        $.color.copy(F).multiplyScalar(G),
          $.halfWidth.set(P.width * 0.5, 0, 0),
          $.halfHeight.set(0, P.height * 0.5, 0),
          (i.rectArea[A] = $),
          A++;
      } else if (P.isPointLight) {
        const $ = t.get(P);
        if (
          ($.color.copy(P.color).multiplyScalar(P.intensity * x),
          ($.distance = P.distance),
          ($.decay = P.decay),
          P.castShadow)
        ) {
          const ne = P.shadow,
            Q = n.get(P);
          (Q.shadowBias = ne.bias),
            (Q.shadowNormalBias = ne.normalBias),
            (Q.shadowRadius = ne.radius),
            (Q.shadowMapSize = ne.mapSize),
            (Q.shadowCameraNear = ne.camera.near),
            (Q.shadowCameraFar = ne.camera.far),
            (i.pointShadow[p] = Q),
            (i.pointShadowMap[p] = ee),
            (i.pointShadowMatrix[p] = P.shadow.matrix),
            y++;
        }
        (i.point[p] = $), p++;
      } else if (P.isHemisphereLight) {
        const $ = t.get(P);
        $.skyColor.copy(P.color).multiplyScalar(G * x),
          $.groundColor.copy(P.groundColor).multiplyScalar(G * x),
          (i.hemi[E] = $),
          E++;
      }
    }
    A > 0 &&
      (e.isWebGL2 || s.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = se.LTC_FLOAT_1), (i.rectAreaLTC2 = se.LTC_FLOAT_2))
        : s.has("OES_texture_half_float_linear") === !0
        ? ((i.rectAreaLTC1 = se.LTC_HALF_1), (i.rectAreaLTC2 = se.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (i.ambient[0] = f),
      (i.ambient[1] = m),
      (i.ambient[2] = g);
    const w = i.hash;
    (w.directionalLength !== v ||
      w.pointLength !== p ||
      w.spotLength !== l ||
      w.rectAreaLength !== A ||
      w.hemiLength !== E ||
      w.numDirectionalShadows !== M ||
      w.numPointShadows !== y ||
      w.numSpotShadows !== L ||
      w.numSpotMaps !== D) &&
      ((i.directional.length = v),
      (i.spot.length = l),
      (i.rectArea.length = A),
      (i.point.length = p),
      (i.hemi.length = E),
      (i.directionalShadow.length = M),
      (i.directionalShadowMap.length = M),
      (i.pointShadow.length = y),
      (i.pointShadowMap.length = y),
      (i.spotShadow.length = L),
      (i.spotShadowMap.length = L),
      (i.directionalShadowMatrix.length = M),
      (i.pointShadowMatrix.length = y),
      (i.spotLightMatrix.length = L + D - I),
      (i.spotLightMap.length = D),
      (i.numSpotLightShadowsWithMaps = I),
      (w.directionalLength = v),
      (w.pointLength = p),
      (w.spotLength = l),
      (w.rectAreaLength = A),
      (w.hemiLength = E),
      (w.numDirectionalShadows = M),
      (w.numPointShadows = y),
      (w.numSpotShadows = L),
      (w.numSpotMaps = D),
      (i.version = Qd++));
  }
  function c(u, d) {
    let f = 0,
      m = 0,
      g = 0,
      v = 0,
      p = 0;
    const l = d.matrixWorldInverse;
    for (let A = 0, E = u.length; A < E; A++) {
      const M = u[A];
      if (M.isDirectionalLight) {
        const y = i.directional[f];
        y.direction.setFromMatrixPosition(M.matrixWorld),
          r.setFromMatrixPosition(M.target.matrixWorld),
          y.direction.sub(r),
          y.direction.transformDirection(l),
          f++;
      } else if (M.isSpotLight) {
        const y = i.spot[g];
        y.position.setFromMatrixPosition(M.matrixWorld),
          y.position.applyMatrix4(l),
          y.direction.setFromMatrixPosition(M.matrixWorld),
          r.setFromMatrixPosition(M.target.matrixWorld),
          y.direction.sub(r),
          y.direction.transformDirection(l),
          g++;
      } else if (M.isRectAreaLight) {
        const y = i.rectArea[v];
        y.position.setFromMatrixPosition(M.matrixWorld),
          y.position.applyMatrix4(l),
          a.identity(),
          o.copy(M.matrixWorld),
          o.premultiply(l),
          a.extractRotation(o),
          y.halfWidth.set(M.width * 0.5, 0, 0),
          y.halfHeight.set(0, M.height * 0.5, 0),
          y.halfWidth.applyMatrix4(a),
          y.halfHeight.applyMatrix4(a),
          v++;
      } else if (M.isPointLight) {
        const y = i.point[m];
        y.position.setFromMatrixPosition(M.matrixWorld),
          y.position.applyMatrix4(l),
          m++;
      } else if (M.isHemisphereLight) {
        const y = i.hemi[p];
        y.direction.setFromMatrixPosition(M.matrixWorld),
          y.direction.transformDirection(l),
          p++;
      }
    }
  }
  return { setup: h, setupView: c, state: i };
}
function xa(s, e) {
  const t = new tf(s, e),
    n = [],
    i = [];
  function r() {
    (n.length = 0), (i.length = 0);
  }
  function o(d) {
    n.push(d);
  }
  function a(d) {
    i.push(d);
  }
  function h(d) {
    t.setup(n, d);
  }
  function c(d) {
    t.setupView(n, d);
  }
  return {
    init: r,
    state: { lightsArray: n, shadowsArray: i, lights: t },
    setupLights: h,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a,
  };
}
function nf(s, e) {
  let t = new WeakMap();
  function n(r, o = 0) {
    const a = t.get(r);
    let h;
    return (
      a === void 0
        ? ((h = new xa(s, e)), t.set(r, [h]))
        : o >= a.length
        ? ((h = new xa(s, e)), a.push(h))
        : (h = a[o]),
      h
    );
  }
  function i() {
    t = new WeakMap();
  }
  return { get: n, dispose: i };
}
class rf extends yi {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = hl),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class sf extends yi {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const af = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  of = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function lf(s, e, t) {
  let n = new Jr();
  const i = new Ce(),
    r = new Ce(),
    o = new nt(),
    a = new rf({ depthPacking: ul }),
    h = new sf(),
    c = {},
    u = t.maxTextureSize,
    d = { [ln]: pt, [pt]: ln, [kt]: kt },
    f = new An({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Ce() },
        radius: { value: 4 },
      },
      vertexShader: af,
      fragmentShader: of,
    }),
    m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new cn();
  g.setAttribute(
    "position",
    new Et(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const v = new ft(g, f),
    p = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Ta),
    (this.render = function (M, y, L) {
      if (
        p.enabled === !1 ||
        (p.autoUpdate === !1 && p.needsUpdate === !1) ||
        M.length === 0
      )
        return;
      const D = s.getRenderTarget(),
        I = s.getActiveCubeFace(),
        x = s.getActiveMipmapLevel(),
        w = s.state;
      w.setBlending(an),
        w.buffers.color.setClear(1, 1, 1, 1),
        w.buffers.depth.setTest(!0),
        w.setScissorTest(!1);
      for (let Y = 0, k = M.length; Y < k; Y++) {
        const P = M[Y],
          F = P.shadow;
        if (F === void 0) {
          console.warn("THREE.WebGLShadowMap:", P, "has no shadow.");
          continue;
        }
        if (F.autoUpdate === !1 && F.needsUpdate === !1) continue;
        i.copy(F.mapSize);
        const G = F.getFrameExtents();
        if (
          (i.multiply(G),
          r.copy(F.mapSize),
          (i.x > u || i.y > u) &&
            (i.x > u &&
              ((r.x = Math.floor(u / G.x)),
              (i.x = r.x * G.x),
              (F.mapSize.x = r.x)),
            i.y > u &&
              ((r.y = Math.floor(u / G.y)),
              (i.y = r.y * G.y),
              (F.mapSize.y = r.y))),
          F.map === null)
        ) {
          const ee = this.type !== hi ? { minFilter: ut, magFilter: ut } : {};
          (F.map = new wn(i.x, i.y, ee)),
            (F.map.texture.name = P.name + ".shadowMap"),
            F.camera.updateProjectionMatrix();
        }
        s.setRenderTarget(F.map), s.clear();
        const K = F.getViewportCount();
        for (let ee = 0; ee < K; ee++) {
          const $ = F.getViewport(ee);
          o.set(r.x * $.x, r.y * $.y, r.x * $.z, r.y * $.w),
            w.viewport(o),
            F.updateMatrices(P, ee),
            (n = F.getFrustum()),
            E(y, L, F.camera, P, this.type);
        }
        F.isPointLightShadow !== !0 && this.type === hi && l(F, L),
          (F.needsUpdate = !1);
      }
      (p.needsUpdate = !1), s.setRenderTarget(D, I, x);
    });
  function l(M, y) {
    const L = e.update(v);
    f.defines.VSM_SAMPLES !== M.blurSamples &&
      ((f.defines.VSM_SAMPLES = M.blurSamples),
      (m.defines.VSM_SAMPLES = M.blurSamples),
      (f.needsUpdate = !0),
      (m.needsUpdate = !0)),
      M.mapPass === null && (M.mapPass = new wn(i.x, i.y)),
      (f.uniforms.shadow_pass.value = M.map.texture),
      (f.uniforms.resolution.value = M.mapSize),
      (f.uniforms.radius.value = M.radius),
      s.setRenderTarget(M.mapPass),
      s.clear(),
      s.renderBufferDirect(y, null, L, f, v, null),
      (m.uniforms.shadow_pass.value = M.mapPass.texture),
      (m.uniforms.resolution.value = M.mapSize),
      (m.uniforms.radius.value = M.radius),
      s.setRenderTarget(M.map),
      s.clear(),
      s.renderBufferDirect(y, null, L, m, v, null);
  }
  function A(M, y, L, D) {
    let I = null;
    const x =
      L.isPointLight === !0 ? M.customDistanceMaterial : M.customDepthMaterial;
    if (x !== void 0) I = x;
    else if (
      ((I = L.isPointLight === !0 ? h : a),
      (s.localClippingEnabled &&
        y.clipShadows === !0 &&
        Array.isArray(y.clippingPlanes) &&
        y.clippingPlanes.length !== 0) ||
        (y.displacementMap && y.displacementScale !== 0) ||
        (y.alphaMap && y.alphaTest > 0) ||
        (y.map && y.alphaTest > 0))
    ) {
      const w = I.uuid,
        Y = y.uuid;
      let k = c[w];
      k === void 0 && ((k = {}), (c[w] = k));
      let P = k[Y];
      P === void 0 && ((P = I.clone()), (k[Y] = P)), (I = P);
    }
    if (
      ((I.visible = y.visible),
      (I.wireframe = y.wireframe),
      D === hi
        ? (I.side = y.shadowSide !== null ? y.shadowSide : y.side)
        : (I.side = y.shadowSide !== null ? y.shadowSide : d[y.side]),
      (I.alphaMap = y.alphaMap),
      (I.alphaTest = y.alphaTest),
      (I.map = y.map),
      (I.clipShadows = y.clipShadows),
      (I.clippingPlanes = y.clippingPlanes),
      (I.clipIntersection = y.clipIntersection),
      (I.displacementMap = y.displacementMap),
      (I.displacementScale = y.displacementScale),
      (I.displacementBias = y.displacementBias),
      (I.wireframeLinewidth = y.wireframeLinewidth),
      (I.linewidth = y.linewidth),
      L.isPointLight === !0 && I.isMeshDistanceMaterial === !0)
    ) {
      const w = s.properties.get(I);
      w.light = L;
    }
    return I;
  }
  function E(M, y, L, D, I) {
    if (M.visible === !1) return;
    if (
      M.layers.test(y.layers) &&
      (M.isMesh || M.isLine || M.isPoints) &&
      (M.castShadow || (M.receiveShadow && I === hi)) &&
      (!M.frustumCulled || n.intersectsObject(M))
    ) {
      M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse, M.matrixWorld);
      const Y = e.update(M),
        k = M.material;
      if (Array.isArray(k)) {
        const P = Y.groups;
        for (let F = 0, G = P.length; F < G; F++) {
          const K = P[F],
            ee = k[K.materialIndex];
          if (ee && ee.visible) {
            const $ = A(M, ee, D, I);
            s.renderBufferDirect(L, null, Y, $, M, K);
          }
        }
      } else if (k.visible) {
        const P = A(M, k, D, I);
        s.renderBufferDirect(L, null, Y, P, M, null);
      }
    }
    const w = M.children;
    for (let Y = 0, k = w.length; Y < k; Y++) E(w[Y], y, L, D, I);
  }
}
function cf(s, e, t) {
  const n = t.isWebGL2;
  function i() {
    let C = !1;
    const W = new nt();
    let J = null;
    const ue = new nt(0, 0, 0, 0);
    return {
      setMask: function (ge) {
        J !== ge && !C && (s.colorMask(ge, ge, ge, ge), (J = ge));
      },
      setLocked: function (ge) {
        C = ge;
      },
      setClear: function (ge, ke, He, st, en) {
        en === !0 && ((ge *= st), (ke *= st), (He *= st)),
          W.set(ge, ke, He, st),
          ue.equals(W) === !1 && (s.clearColor(ge, ke, He, st), ue.copy(W));
      },
      reset: function () {
        (C = !1), (J = null), ue.set(-1, 0, 0, 0);
      },
    };
  }
  function r() {
    let C = !1,
      W = null,
      J = null,
      ue = null;
    return {
      setTest: function (ge) {
        ge ? z(2929) : ye(2929);
      },
      setMask: function (ge) {
        W !== ge && !C && (s.depthMask(ge), (W = ge));
      },
      setFunc: function (ge) {
        if (J !== ge) {
          switch (ge) {
            case Uo:
              s.depthFunc(512);
              break;
            case No:
              s.depthFunc(519);
              break;
            case Fo:
              s.depthFunc(513);
              break;
            case Vr:
              s.depthFunc(515);
              break;
            case Oo:
              s.depthFunc(514);
              break;
            case zo:
              s.depthFunc(518);
              break;
            case Bo:
              s.depthFunc(516);
              break;
            case ko:
              s.depthFunc(517);
              break;
            default:
              s.depthFunc(515);
          }
          J = ge;
        }
      },
      setLocked: function (ge) {
        C = ge;
      },
      setClear: function (ge) {
        ue !== ge && (s.clearDepth(ge), (ue = ge));
      },
      reset: function () {
        (C = !1), (W = null), (J = null), (ue = null);
      },
    };
  }
  function o() {
    let C = !1,
      W = null,
      J = null,
      ue = null,
      ge = null,
      ke = null,
      He = null,
      st = null,
      en = null;
    return {
      setTest: function ($e) {
        C || ($e ? z(2960) : ye(2960));
      },
      setMask: function ($e) {
        W !== $e && !C && (s.stencilMask($e), (W = $e));
      },
      setFunc: function ($e, St, Nt) {
        (J !== $e || ue !== St || ge !== Nt) &&
          (s.stencilFunc($e, St, Nt), (J = $e), (ue = St), (ge = Nt));
      },
      setOp: function ($e, St, Nt) {
        (ke !== $e || He !== St || st !== Nt) &&
          (s.stencilOp($e, St, Nt), (ke = $e), (He = St), (st = Nt));
      },
      setLocked: function ($e) {
        C = $e;
      },
      setClear: function ($e) {
        en !== $e && (s.clearStencil($e), (en = $e));
      },
      reset: function () {
        (C = !1),
          (W = null),
          (J = null),
          (ue = null),
          (ge = null),
          (ke = null),
          (He = null),
          (st = null),
          (en = null);
      },
    };
  }
  const a = new i(),
    h = new r(),
    c = new o(),
    u = new WeakMap(),
    d = new WeakMap();
  let f = {},
    m = {},
    g = new WeakMap(),
    v = [],
    p = null,
    l = !1,
    A = null,
    E = null,
    M = null,
    y = null,
    L = null,
    D = null,
    I = null,
    x = !1,
    w = null,
    Y = null,
    k = null,
    P = null,
    F = null;
  const G = s.getParameter(35661);
  let K = !1,
    ee = 0;
  const $ = s.getParameter(7938);
  $.indexOf("WebGL") !== -1
    ? ((ee = parseFloat(/^WebGL (\d)/.exec($)[1])), (K = ee >= 1))
    : $.indexOf("OpenGL ES") !== -1 &&
      ((ee = parseFloat(/^OpenGL ES (\d)/.exec($)[1])), (K = ee >= 2));
  let ne = null,
    Q = {};
  const Me = s.getParameter(3088),
    ie = s.getParameter(2978),
    V = new nt().fromArray(Me),
    j = new nt().fromArray(ie);
  function ae(C, W, J) {
    const ue = new Uint8Array(4),
      ge = s.createTexture();
    s.bindTexture(C, ge),
      s.texParameteri(C, 10241, 9728),
      s.texParameteri(C, 10240, 9728);
    for (let ke = 0; ke < J; ke++)
      s.texImage2D(W + ke, 0, 6408, 1, 1, 0, 6408, 5121, ue);
    return ge;
  }
  const ce = {};
  (ce[3553] = ae(3553, 3553, 1)),
    (ce[34067] = ae(34067, 34069, 6)),
    a.setClear(0, 0, 0, 1),
    h.setClear(1),
    c.setClear(0),
    z(2929),
    h.setFunc(Vr),
    Ve(!1),
    Ye(ss),
    z(2884),
    Ee(an);
  function z(C) {
    f[C] !== !0 && (s.enable(C), (f[C] = !0));
  }
  function ye(C) {
    f[C] !== !1 && (s.disable(C), (f[C] = !1));
  }
  function xe(C, W) {
    return m[C] !== W
      ? (s.bindFramebuffer(C, W),
        (m[C] = W),
        n && (C === 36009 && (m[36160] = W), C === 36160 && (m[36009] = W)),
        !0)
      : !1;
  }
  function re(C, W) {
    let J = v,
      ue = !1;
    if (C)
      if (
        ((J = g.get(W)),
        J === void 0 && ((J = []), g.set(W, J)),
        C.isWebGLMultipleRenderTargets)
      ) {
        const ge = C.texture;
        if (J.length !== ge.length || J[0] !== 36064) {
          for (let ke = 0, He = ge.length; ke < He; ke++) J[ke] = 36064 + ke;
          (J.length = ge.length), (ue = !0);
        }
      } else J[0] !== 36064 && ((J[0] = 36064), (ue = !0));
    else J[0] !== 1029 && ((J[0] = 1029), (ue = !0));
    ue &&
      (t.isWebGL2
        ? s.drawBuffers(J)
        : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J));
  }
  function ve(C) {
    return p !== C ? (s.useProgram(C), (p = C), !0) : !1;
  }
  const Fe = { [qn]: 32774, [bo]: 32778, [wo]: 32779 };
  if (n) (Fe[cs] = 32775), (Fe[hs] = 32776);
  else {
    const C = e.get("EXT_blend_minmax");
    C !== null && ((Fe[cs] = C.MIN_EXT), (Fe[hs] = C.MAX_EXT));
  }
  const me = {
    [Eo]: 0,
    [Ao]: 1,
    [To]: 768,
    [Ca]: 770,
    [Io]: 776,
    [Ro]: 774,
    [Lo]: 772,
    [Co]: 769,
    [La]: 771,
    [Do]: 775,
    [Po]: 773,
  };
  function Ee(C, W, J, ue, ge, ke, He, st) {
    if (C === an) {
      l === !0 && (ye(3042), (l = !1));
      return;
    }
    if ((l === !1 && (z(3042), (l = !0)), C !== yo)) {
      if (C !== A || st !== x) {
        if (
          ((E !== qn || L !== qn) &&
            (s.blendEquation(32774), (E = qn), (L = qn)),
          st)
        )
          switch (C) {
            case Yn:
              s.blendFuncSeparate(1, 771, 1, 771);
              break;
            case as:
              s.blendFunc(1, 1);
              break;
            case os:
              s.blendFuncSeparate(0, 769, 0, 1);
              break;
            case ls:
              s.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case Yn:
              s.blendFuncSeparate(770, 771, 1, 771);
              break;
            case as:
              s.blendFunc(770, 1);
              break;
            case os:
              s.blendFuncSeparate(0, 769, 0, 1);
              break;
            case ls:
              s.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        (M = null), (y = null), (D = null), (I = null), (A = C), (x = st);
      }
      return;
    }
    (ge = ge || W),
      (ke = ke || J),
      (He = He || ue),
      (W !== E || ge !== L) &&
        (s.blendEquationSeparate(Fe[W], Fe[ge]), (E = W), (L = ge)),
      (J !== M || ue !== y || ke !== D || He !== I) &&
        (s.blendFuncSeparate(me[J], me[ue], me[ke], me[He]),
        (M = J),
        (y = ue),
        (D = ke),
        (I = He)),
      (A = C),
      (x = !1);
  }
  function We(C, W) {
    C.side === kt ? ye(2884) : z(2884);
    let J = C.side === pt;
    W && (J = !J),
      Ve(J),
      C.blending === Yn && C.transparent === !1
        ? Ee(an)
        : Ee(
            C.blending,
            C.blendEquation,
            C.blendSrc,
            C.blendDst,
            C.blendEquationAlpha,
            C.blendSrcAlpha,
            C.blendDstAlpha,
            C.premultipliedAlpha
          ),
      h.setFunc(C.depthFunc),
      h.setTest(C.depthTest),
      h.setMask(C.depthWrite),
      a.setMask(C.colorWrite);
    const ue = C.stencilWrite;
    c.setTest(ue),
      ue &&
        (c.setMask(C.stencilWriteMask),
        c.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask),
        c.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)),
      Ne(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits),
      C.alphaToCoverage === !0 ? z(32926) : ye(32926);
  }
  function Ve(C) {
    w !== C && (C ? s.frontFace(2304) : s.frontFace(2305), (w = C));
  }
  function Ye(C) {
    C !== xo
      ? (z(2884),
        C !== Y &&
          (C === ss
            ? s.cullFace(1029)
            : C === Mo
            ? s.cullFace(1028)
            : s.cullFace(1032)))
      : ye(2884),
      (Y = C);
  }
  function Xe(C) {
    C !== k && (K && s.lineWidth(C), (k = C));
  }
  function Ne(C, W, J) {
    C
      ? (z(32823),
        (P !== W || F !== J) && (s.polygonOffset(W, J), (P = W), (F = J)))
      : ye(32823);
  }
  function Be(C) {
    C ? z(3089) : ye(3089);
  }
  function rt(C) {
    C === void 0 && (C = 33984 + G - 1),
      ne !== C && (s.activeTexture(C), (ne = C));
  }
  function b(C, W, J) {
    J === void 0 && (ne === null ? (J = 33984 + G - 1) : (J = ne));
    let ue = Q[J];
    ue === void 0 && ((ue = { type: void 0, texture: void 0 }), (Q[J] = ue)),
      (ue.type !== C || ue.texture !== W) &&
        (ne !== J && (s.activeTexture(J), (ne = J)),
        s.bindTexture(C, W || ce[C]),
        (ue.type = C),
        (ue.texture = W));
  }
  function _() {
    const C = Q[ne];
    C !== void 0 &&
      C.type !== void 0 &&
      (s.bindTexture(C.type, null), (C.type = void 0), (C.texture = void 0));
  }
  function B() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Z() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function te() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function oe() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function T() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function q() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function O() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function le() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function de() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function pe() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function he(C) {
    V.equals(C) === !1 && (s.scissor(C.x, C.y, C.z, C.w), V.copy(C));
  }
  function fe(C) {
    j.equals(C) === !1 && (s.viewport(C.x, C.y, C.z, C.w), j.copy(C));
  }
  function be(C, W) {
    let J = d.get(W);
    J === void 0 && ((J = new WeakMap()), d.set(W, J));
    let ue = J.get(C);
    ue === void 0 && ((ue = s.getUniformBlockIndex(W, C.name)), J.set(C, ue));
  }
  function Le(C, W) {
    const ue = d.get(W).get(C);
    u.get(W) !== ue &&
      (s.uniformBlockBinding(W, ue, C.__bindingPointIndex), u.set(W, ue));
  }
  function qe() {
    s.disable(3042),
      s.disable(2884),
      s.disable(2929),
      s.disable(32823),
      s.disable(3089),
      s.disable(2960),
      s.disable(32926),
      s.blendEquation(32774),
      s.blendFunc(1, 0),
      s.blendFuncSeparate(1, 0, 1, 0),
      s.colorMask(!0, !0, !0, !0),
      s.clearColor(0, 0, 0, 0),
      s.depthMask(!0),
      s.depthFunc(513),
      s.clearDepth(1),
      s.stencilMask(4294967295),
      s.stencilFunc(519, 0, 4294967295),
      s.stencilOp(7680, 7680, 7680),
      s.clearStencil(0),
      s.cullFace(1029),
      s.frontFace(2305),
      s.polygonOffset(0, 0),
      s.activeTexture(33984),
      s.bindFramebuffer(36160, null),
      n === !0 &&
        (s.bindFramebuffer(36009, null), s.bindFramebuffer(36008, null)),
      s.useProgram(null),
      s.lineWidth(1),
      s.scissor(0, 0, s.canvas.width, s.canvas.height),
      s.viewport(0, 0, s.canvas.width, s.canvas.height),
      (f = {}),
      (ne = null),
      (Q = {}),
      (m = {}),
      (g = new WeakMap()),
      (v = []),
      (p = null),
      (l = !1),
      (A = null),
      (E = null),
      (M = null),
      (y = null),
      (L = null),
      (D = null),
      (I = null),
      (x = !1),
      (w = null),
      (Y = null),
      (k = null),
      (P = null),
      (F = null),
      V.set(0, 0, s.canvas.width, s.canvas.height),
      j.set(0, 0, s.canvas.width, s.canvas.height),
      a.reset(),
      h.reset(),
      c.reset();
  }
  return {
    buffers: { color: a, depth: h, stencil: c },
    enable: z,
    disable: ye,
    bindFramebuffer: xe,
    drawBuffers: re,
    useProgram: ve,
    setBlending: Ee,
    setMaterial: We,
    setFlipSided: Ve,
    setCullFace: Ye,
    setLineWidth: Xe,
    setPolygonOffset: Ne,
    setScissorTest: Be,
    activeTexture: rt,
    bindTexture: b,
    unbindTexture: _,
    compressedTexImage2D: B,
    compressedTexImage3D: Z,
    texImage2D: de,
    texImage3D: pe,
    updateUBOMapping: be,
    uniformBlockBinding: Le,
    texStorage2D: O,
    texStorage3D: le,
    texSubImage2D: te,
    texSubImage3D: oe,
    compressedTexSubImage2D: T,
    compressedTexSubImage3D: q,
    scissor: he,
    viewport: fe,
    reset: qe,
  };
}
function hf(s, e, t, n, i, r, o) {
  const a = i.isWebGL2,
    h = i.maxTextures,
    c = i.maxCubemapSize,
    u = i.maxTextureSize,
    d = i.maxSamples,
    f = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    m =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    g = new WeakMap();
  let v;
  const p = new WeakMap();
  let l = !1;
  try {
    l =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function A(b, _) {
    return l ? new OffscreenCanvas(b, _) : _i("canvas");
  }
  function E(b, _, B, Z) {
    let te = 1;
    if (
      ((b.width > Z || b.height > Z) && (te = Z / Math.max(b.width, b.height)),
      te < 1 || _ === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && b instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && b instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && b instanceof ImageBitmap)
      ) {
        const oe = _ ? ml : Math.floor,
          T = oe(te * b.width),
          q = oe(te * b.height);
        v === void 0 && (v = A(T, q));
        const O = B ? A(T, q) : v;
        return (
          (O.width = T),
          (O.height = q),
          O.getContext("2d").drawImage(b, 0, 0, T, q),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              b.width +
              "x" +
              b.height +
              ") to (" +
              T +
              "x" +
              q +
              ")."
          ),
          O
        );
      } else
        return (
          "data" in b &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                b.width +
                "x" +
                b.height +
                ")."
            ),
          b
        );
    return b;
  }
  function M(b) {
    return Os(b.width) && Os(b.height);
  }
  function y(b) {
    return a
      ? !1
      : b.wrapS !== It ||
          b.wrapT !== It ||
          (b.minFilter !== ut && b.minFilter !== bt);
  }
  function L(b, _) {
    return b.generateMipmaps && _ && b.minFilter !== ut && b.minFilter !== bt;
  }
  function D(b) {
    s.generateMipmap(b);
  }
  function I(b, _, B, Z, te = !1) {
    if (a === !1) return _;
    if (b !== null) {
      if (s[b] !== void 0) return s[b];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          b +
          "'"
      );
    }
    let oe = _;
    return (
      _ === 6403 &&
        (B === 5126 && (oe = 33326),
        B === 5131 && (oe = 33325),
        B === 5121 && (oe = 33321)),
      _ === 33319 &&
        (B === 5126 && (oe = 33328),
        B === 5131 && (oe = 33327),
        B === 5121 && (oe = 33323)),
      _ === 6408 &&
        (B === 5126 && (oe = 34836),
        B === 5131 && (oe = 34842),
        B === 5121 && (oe = Z === Ge && te === !1 ? 35907 : 32856),
        B === 32819 && (oe = 32854),
        B === 32820 && (oe = 32855)),
      (oe === 33325 ||
        oe === 33326 ||
        oe === 33327 ||
        oe === 33328 ||
        oe === 34842 ||
        oe === 34836) &&
        e.get("EXT_color_buffer_float"),
      oe
    );
  }
  function x(b, _, B) {
    return L(b, B) === !0 ||
      (b.isFramebufferTexture && b.minFilter !== ut && b.minFilter !== bt)
      ? Math.log2(Math.max(_.width, _.height)) + 1
      : b.mipmaps !== void 0 && b.mipmaps.length > 0
      ? b.mipmaps.length
      : b.isCompressedTexture && Array.isArray(b.image)
      ? _.mipmaps.length
      : 1;
  }
  function w(b) {
    return b === ut || b === us || b === cr ? 9728 : 9729;
  }
  function Y(b) {
    const _ = b.target;
    _.removeEventListener("dispose", Y), P(_), _.isVideoTexture && g.delete(_);
  }
  function k(b) {
    const _ = b.target;
    _.removeEventListener("dispose", k), G(_);
  }
  function P(b) {
    const _ = n.get(b);
    if (_.__webglInit === void 0) return;
    const B = b.source,
      Z = p.get(B);
    if (Z) {
      const te = Z[_.__cacheKey];
      te.usedTimes--,
        te.usedTimes === 0 && F(b),
        Object.keys(Z).length === 0 && p.delete(B);
    }
    n.remove(b);
  }
  function F(b) {
    const _ = n.get(b);
    s.deleteTexture(_.__webglTexture);
    const B = b.source,
      Z = p.get(B);
    delete Z[_.__cacheKey], o.memory.textures--;
  }
  function G(b) {
    const _ = b.texture,
      B = n.get(b),
      Z = n.get(_);
    if (
      (Z.__webglTexture !== void 0 &&
        (s.deleteTexture(Z.__webglTexture), o.memory.textures--),
      b.depthTexture && b.depthTexture.dispose(),
      b.isWebGLCubeRenderTarget)
    )
      for (let te = 0; te < 6; te++)
        s.deleteFramebuffer(B.__webglFramebuffer[te]),
          B.__webglDepthbuffer &&
            s.deleteRenderbuffer(B.__webglDepthbuffer[te]);
    else {
      if (
        (s.deleteFramebuffer(B.__webglFramebuffer),
        B.__webglDepthbuffer && s.deleteRenderbuffer(B.__webglDepthbuffer),
        B.__webglMultisampledFramebuffer &&
          s.deleteFramebuffer(B.__webglMultisampledFramebuffer),
        B.__webglColorRenderbuffer)
      )
        for (let te = 0; te < B.__webglColorRenderbuffer.length; te++)
          B.__webglColorRenderbuffer[te] &&
            s.deleteRenderbuffer(B.__webglColorRenderbuffer[te]);
      B.__webglDepthRenderbuffer &&
        s.deleteRenderbuffer(B.__webglDepthRenderbuffer);
    }
    if (b.isWebGLMultipleRenderTargets)
      for (let te = 0, oe = _.length; te < oe; te++) {
        const T = n.get(_[te]);
        T.__webglTexture &&
          (s.deleteTexture(T.__webglTexture), o.memory.textures--),
          n.remove(_[te]);
      }
    n.remove(_), n.remove(b);
  }
  let K = 0;
  function ee() {
    K = 0;
  }
  function $() {
    const b = K;
    return (
      b >= h &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            b +
            " texture units while this GPU supports only " +
            h
        ),
      (K += 1),
      b
    );
  }
  function ne(b) {
    const _ = [];
    return (
      _.push(b.wrapS),
      _.push(b.wrapT),
      _.push(b.wrapR || 0),
      _.push(b.magFilter),
      _.push(b.minFilter),
      _.push(b.anisotropy),
      _.push(b.internalFormat),
      _.push(b.format),
      _.push(b.type),
      _.push(b.generateMipmaps),
      _.push(b.premultiplyAlpha),
      _.push(b.flipY),
      _.push(b.unpackAlignment),
      _.push(b.encoding),
      _.join()
    );
  }
  function Q(b, _) {
    const B = n.get(b);
    if (
      (b.isVideoTexture && Be(b),
      b.isRenderTargetTexture === !1 &&
        b.version > 0 &&
        B.__version !== b.version)
    ) {
      const Z = b.image;
      if (Z === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (Z.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        ye(B, b, _);
        return;
      }
    }
    t.bindTexture(3553, B.__webglTexture, 33984 + _);
  }
  function Me(b, _) {
    const B = n.get(b);
    if (b.version > 0 && B.__version !== b.version) {
      ye(B, b, _);
      return;
    }
    t.bindTexture(35866, B.__webglTexture, 33984 + _);
  }
  function ie(b, _) {
    const B = n.get(b);
    if (b.version > 0 && B.__version !== b.version) {
      ye(B, b, _);
      return;
    }
    t.bindTexture(32879, B.__webglTexture, 33984 + _);
  }
  function V(b, _) {
    const B = n.get(b);
    if (b.version > 0 && B.__version !== b.version) {
      xe(B, b, _);
      return;
    }
    t.bindTexture(34067, B.__webglTexture, 33984 + _);
  }
  const j = { [Xr]: 10497, [It]: 33071, [fi]: 33648 },
    ae = {
      [ut]: 9728,
      [us]: 9984,
      [cr]: 9986,
      [bt]: 9729,
      [Yo]: 9985,
      [pi]: 9987,
    };
  function ce(b, _, B) {
    if (
      (B
        ? (s.texParameteri(b, 10242, j[_.wrapS]),
          s.texParameteri(b, 10243, j[_.wrapT]),
          (b === 32879 || b === 35866) && s.texParameteri(b, 32882, j[_.wrapR]),
          s.texParameteri(b, 10240, ae[_.magFilter]),
          s.texParameteri(b, 10241, ae[_.minFilter]))
        : (s.texParameteri(b, 10242, 33071),
          s.texParameteri(b, 10243, 33071),
          (b === 32879 || b === 35866) && s.texParameteri(b, 32882, 33071),
          (_.wrapS !== It || _.wrapT !== It) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          s.texParameteri(b, 10240, w(_.magFilter)),
          s.texParameteri(b, 10241, w(_.minFilter)),
          _.minFilter !== ut &&
            _.minFilter !== bt &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const Z = e.get("EXT_texture_filter_anisotropic");
      if (
        _.magFilter === ut ||
        (_.minFilter !== cr && _.minFilter !== pi) ||
        (_.type === Mn && e.has("OES_texture_float_linear") === !1) ||
        (a === !1 &&
          _.type === mi &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (_.anisotropy > 1 || n.get(_).__currentAnisotropy) &&
        (s.texParameterf(
          b,
          Z.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(_.anisotropy, i.getMaxAnisotropy())
        ),
        (n.get(_).__currentAnisotropy = _.anisotropy));
    }
  }
  function z(b, _) {
    let B = !1;
    b.__webglInit === void 0 &&
      ((b.__webglInit = !0), _.addEventListener("dispose", Y));
    const Z = _.source;
    let te = p.get(Z);
    te === void 0 && ((te = {}), p.set(Z, te));
    const oe = ne(_);
    if (oe !== b.__cacheKey) {
      te[oe] === void 0 &&
        ((te[oe] = { texture: s.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (B = !0)),
        te[oe].usedTimes++;
      const T = te[b.__cacheKey];
      T !== void 0 && (te[b.__cacheKey].usedTimes--, T.usedTimes === 0 && F(_)),
        (b.__cacheKey = oe),
        (b.__webglTexture = te[oe].texture);
    }
    return B;
  }
  function ye(b, _, B) {
    let Z = 3553;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (Z = 35866),
      _.isData3DTexture && (Z = 32879);
    const te = z(b, _),
      oe = _.source;
    t.bindTexture(Z, b.__webglTexture, 33984 + B);
    const T = n.get(oe);
    if (oe.version !== T.__version || te === !0) {
      t.activeTexture(33984 + B),
        s.pixelStorei(37440, _.flipY),
        s.pixelStorei(37441, _.premultiplyAlpha),
        s.pixelStorei(3317, _.unpackAlignment),
        s.pixelStorei(37443, 0);
      const q = y(_) && M(_.image) === !1;
      let O = E(_.image, q, !1, u);
      O = rt(_, O);
      const le = M(O) || a,
        de = r.convert(_.format, _.encoding);
      let pe = r.convert(_.type),
        he = I(_.internalFormat, de, pe, _.encoding, _.isVideoTexture);
      ce(Z, _, le);
      let fe;
      const be = _.mipmaps,
        Le = a && _.isVideoTexture !== !0,
        qe = T.__version === void 0 || te === !0,
        C = x(_, O, le);
      if (_.isDepthTexture)
        (he = 6402),
          a
            ? _.type === Mn
              ? (he = 36012)
              : _.type === xn
              ? (he = 33190)
              : _.type === jn
              ? (he = 35056)
              : (he = 33189)
            : _.type === Mn &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          _.format === Sn &&
            he === 6402 &&
            _.type !== Da &&
            _.type !== xn &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (_.type = xn),
            (pe = r.convert(_.type))),
          _.format === Qn &&
            he === 6402 &&
            ((he = 34041),
            _.type !== jn &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (_.type = jn),
              (pe = r.convert(_.type)))),
          qe &&
            (Le
              ? t.texStorage2D(3553, 1, he, O.width, O.height)
              : t.texImage2D(3553, 0, he, O.width, O.height, 0, de, pe, null));
      else if (_.isDataTexture)
        if (be.length > 0 && le) {
          Le && qe && t.texStorage2D(3553, C, he, be[0].width, be[0].height);
          for (let W = 0, J = be.length; W < J; W++)
            (fe = be[W]),
              Le
                ? t.texSubImage2D(
                    3553,
                    W,
                    0,
                    0,
                    fe.width,
                    fe.height,
                    de,
                    pe,
                    fe.data
                  )
                : t.texImage2D(
                    3553,
                    W,
                    he,
                    fe.width,
                    fe.height,
                    0,
                    de,
                    pe,
                    fe.data
                  );
          _.generateMipmaps = !1;
        } else
          Le
            ? (qe && t.texStorage2D(3553, C, he, O.width, O.height),
              t.texSubImage2D(3553, 0, 0, 0, O.width, O.height, de, pe, O.data))
            : t.texImage2D(3553, 0, he, O.width, O.height, 0, de, pe, O.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          Le &&
            qe &&
            t.texStorage3D(35866, C, he, be[0].width, be[0].height, O.depth);
          for (let W = 0, J = be.length; W < J; W++)
            (fe = be[W]),
              _.format !== Ut
                ? de !== null
                  ? Le
                    ? t.compressedTexSubImage3D(
                        35866,
                        W,
                        0,
                        0,
                        0,
                        fe.width,
                        fe.height,
                        O.depth,
                        de,
                        fe.data,
                        0,
                        0
                      )
                    : t.compressedTexImage3D(
                        35866,
                        W,
                        he,
                        fe.width,
                        fe.height,
                        O.depth,
                        0,
                        fe.data,
                        0,
                        0
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : Le
                ? t.texSubImage3D(
                    35866,
                    W,
                    0,
                    0,
                    0,
                    fe.width,
                    fe.height,
                    O.depth,
                    de,
                    pe,
                    fe.data
                  )
                : t.texImage3D(
                    35866,
                    W,
                    he,
                    fe.width,
                    fe.height,
                    O.depth,
                    0,
                    de,
                    pe,
                    fe.data
                  );
        } else {
          Le && qe && t.texStorage2D(3553, C, he, be[0].width, be[0].height);
          for (let W = 0, J = be.length; W < J; W++)
            (fe = be[W]),
              _.format !== Ut
                ? de !== null
                  ? Le
                    ? t.compressedTexSubImage2D(
                        3553,
                        W,
                        0,
                        0,
                        fe.width,
                        fe.height,
                        de,
                        fe.data
                      )
                    : t.compressedTexImage2D(
                        3553,
                        W,
                        he,
                        fe.width,
                        fe.height,
                        0,
                        fe.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : Le
                ? t.texSubImage2D(
                    3553,
                    W,
                    0,
                    0,
                    fe.width,
                    fe.height,
                    de,
                    pe,
                    fe.data
                  )
                : t.texImage2D(
                    3553,
                    W,
                    he,
                    fe.width,
                    fe.height,
                    0,
                    de,
                    pe,
                    fe.data
                  );
        }
      else if (_.isDataArrayTexture)
        Le
          ? (qe && t.texStorage3D(35866, C, he, O.width, O.height, O.depth),
            t.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              O.width,
              O.height,
              O.depth,
              de,
              pe,
              O.data
            ))
          : t.texImage3D(
              35866,
              0,
              he,
              O.width,
              O.height,
              O.depth,
              0,
              de,
              pe,
              O.data
            );
      else if (_.isData3DTexture)
        Le
          ? (qe && t.texStorage3D(32879, C, he, O.width, O.height, O.depth),
            t.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              O.width,
              O.height,
              O.depth,
              de,
              pe,
              O.data
            ))
          : t.texImage3D(
              32879,
              0,
              he,
              O.width,
              O.height,
              O.depth,
              0,
              de,
              pe,
              O.data
            );
      else if (_.isFramebufferTexture) {
        if (qe)
          if (Le) t.texStorage2D(3553, C, he, O.width, O.height);
          else {
            let W = O.width,
              J = O.height;
            for (let ue = 0; ue < C; ue++)
              t.texImage2D(3553, ue, he, W, J, 0, de, pe, null),
                (W >>= 1),
                (J >>= 1);
          }
      } else if (be.length > 0 && le) {
        Le && qe && t.texStorage2D(3553, C, he, be[0].width, be[0].height);
        for (let W = 0, J = be.length; W < J; W++)
          (fe = be[W]),
            Le
              ? t.texSubImage2D(3553, W, 0, 0, de, pe, fe)
              : t.texImage2D(3553, W, he, de, pe, fe);
        _.generateMipmaps = !1;
      } else
        Le
          ? (qe && t.texStorage2D(3553, C, he, O.width, O.height),
            t.texSubImage2D(3553, 0, 0, 0, de, pe, O))
          : t.texImage2D(3553, 0, he, de, pe, O);
      L(_, le) && D(Z), (T.__version = oe.version), _.onUpdate && _.onUpdate(_);
    }
    b.__version = _.version;
  }
  function xe(b, _, B) {
    if (_.image.length !== 6) return;
    const Z = z(b, _),
      te = _.source;
    t.bindTexture(34067, b.__webglTexture, 33984 + B);
    const oe = n.get(te);
    if (te.version !== oe.__version || Z === !0) {
      t.activeTexture(33984 + B),
        s.pixelStorei(37440, _.flipY),
        s.pixelStorei(37441, _.premultiplyAlpha),
        s.pixelStorei(3317, _.unpackAlignment),
        s.pixelStorei(37443, 0);
      const T = _.isCompressedTexture || _.image[0].isCompressedTexture,
        q = _.image[0] && _.image[0].isDataTexture,
        O = [];
      for (let W = 0; W < 6; W++)
        !T && !q
          ? (O[W] = E(_.image[W], !1, !0, c))
          : (O[W] = q ? _.image[W].image : _.image[W]),
          (O[W] = rt(_, O[W]));
      const le = O[0],
        de = M(le) || a,
        pe = r.convert(_.format, _.encoding),
        he = r.convert(_.type),
        fe = I(_.internalFormat, pe, he, _.encoding),
        be = a && _.isVideoTexture !== !0,
        Le = oe.__version === void 0 || Z === !0;
      let qe = x(_, le, de);
      ce(34067, _, de);
      let C;
      if (T) {
        be && Le && t.texStorage2D(34067, qe, fe, le.width, le.height);
        for (let W = 0; W < 6; W++) {
          C = O[W].mipmaps;
          for (let J = 0; J < C.length; J++) {
            const ue = C[J];
            _.format !== Ut
              ? pe !== null
                ? be
                  ? t.compressedTexSubImage2D(
                      34069 + W,
                      J,
                      0,
                      0,
                      ue.width,
                      ue.height,
                      pe,
                      ue.data
                    )
                  : t.compressedTexImage2D(
                      34069 + W,
                      J,
                      fe,
                      ue.width,
                      ue.height,
                      0,
                      ue.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : be
              ? t.texSubImage2D(
                  34069 + W,
                  J,
                  0,
                  0,
                  ue.width,
                  ue.height,
                  pe,
                  he,
                  ue.data
                )
              : t.texImage2D(
                  34069 + W,
                  J,
                  fe,
                  ue.width,
                  ue.height,
                  0,
                  pe,
                  he,
                  ue.data
                );
          }
        }
      } else {
        (C = _.mipmaps),
          be &&
            Le &&
            (C.length > 0 && qe++,
            t.texStorage2D(34067, qe, fe, O[0].width, O[0].height));
        for (let W = 0; W < 6; W++)
          if (q) {
            be
              ? t.texSubImage2D(
                  34069 + W,
                  0,
                  0,
                  0,
                  O[W].width,
                  O[W].height,
                  pe,
                  he,
                  O[W].data
                )
              : t.texImage2D(
                  34069 + W,
                  0,
                  fe,
                  O[W].width,
                  O[W].height,
                  0,
                  pe,
                  he,
                  O[W].data
                );
            for (let J = 0; J < C.length; J++) {
              const ge = C[J].image[W].image;
              be
                ? t.texSubImage2D(
                    34069 + W,
                    J + 1,
                    0,
                    0,
                    ge.width,
                    ge.height,
                    pe,
                    he,
                    ge.data
                  )
                : t.texImage2D(
                    34069 + W,
                    J + 1,
                    fe,
                    ge.width,
                    ge.height,
                    0,
                    pe,
                    he,
                    ge.data
                  );
            }
          } else {
            be
              ? t.texSubImage2D(34069 + W, 0, 0, 0, pe, he, O[W])
              : t.texImage2D(34069 + W, 0, fe, pe, he, O[W]);
            for (let J = 0; J < C.length; J++) {
              const ue = C[J];
              be
                ? t.texSubImage2D(34069 + W, J + 1, 0, 0, pe, he, ue.image[W])
                : t.texImage2D(34069 + W, J + 1, fe, pe, he, ue.image[W]);
            }
          }
      }
      L(_, de) && D(34067),
        (oe.__version = te.version),
        _.onUpdate && _.onUpdate(_);
    }
    b.__version = _.version;
  }
  function re(b, _, B, Z, te) {
    const oe = r.convert(B.format, B.encoding),
      T = r.convert(B.type),
      q = I(B.internalFormat, oe, T, B.encoding);
    n.get(_).__hasExternalTextures ||
      (te === 32879 || te === 35866
        ? t.texImage3D(te, 0, q, _.width, _.height, _.depth, 0, oe, T, null)
        : t.texImage2D(te, 0, q, _.width, _.height, 0, oe, T, null)),
      t.bindFramebuffer(36160, b),
      Ne(_)
        ? f.framebufferTexture2DMultisampleEXT(
            36160,
            Z,
            te,
            n.get(B).__webglTexture,
            0,
            Xe(_)
          )
        : (te === 3553 || (te >= 34069 && te <= 34074)) &&
          s.framebufferTexture2D(36160, Z, te, n.get(B).__webglTexture, 0),
      t.bindFramebuffer(36160, null);
  }
  function ve(b, _, B) {
    if ((s.bindRenderbuffer(36161, b), _.depthBuffer && !_.stencilBuffer)) {
      let Z = 33189;
      if (B || Ne(_)) {
        const te = _.depthTexture;
        te &&
          te.isDepthTexture &&
          (te.type === Mn ? (Z = 36012) : te.type === xn && (Z = 33190));
        const oe = Xe(_);
        Ne(_)
          ? f.renderbufferStorageMultisampleEXT(36161, oe, Z, _.width, _.height)
          : s.renderbufferStorageMultisample(36161, oe, Z, _.width, _.height);
      } else s.renderbufferStorage(36161, Z, _.width, _.height);
      s.framebufferRenderbuffer(36160, 36096, 36161, b);
    } else if (_.depthBuffer && _.stencilBuffer) {
      const Z = Xe(_);
      B && Ne(_) === !1
        ? s.renderbufferStorageMultisample(36161, Z, 35056, _.width, _.height)
        : Ne(_)
        ? f.renderbufferStorageMultisampleEXT(
            36161,
            Z,
            35056,
            _.width,
            _.height
          )
        : s.renderbufferStorage(36161, 34041, _.width, _.height),
        s.framebufferRenderbuffer(36160, 33306, 36161, b);
    } else {
      const Z = _.isWebGLMultipleRenderTargets === !0 ? _.texture : [_.texture];
      for (let te = 0; te < Z.length; te++) {
        const oe = Z[te],
          T = r.convert(oe.format, oe.encoding),
          q = r.convert(oe.type),
          O = I(oe.internalFormat, T, q, oe.encoding),
          le = Xe(_);
        B && Ne(_) === !1
          ? s.renderbufferStorageMultisample(36161, le, O, _.width, _.height)
          : Ne(_)
          ? f.renderbufferStorageMultisampleEXT(36161, le, O, _.width, _.height)
          : s.renderbufferStorage(36161, O, _.width, _.height);
      }
    }
    s.bindRenderbuffer(36161, null);
  }
  function Fe(b, _) {
    if (_ && _.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(36160, b),
      !(_.depthTexture && _.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(_.depthTexture).__webglTexture ||
      _.depthTexture.image.width !== _.width ||
      _.depthTexture.image.height !== _.height) &&
      ((_.depthTexture.image.width = _.width),
      (_.depthTexture.image.height = _.height),
      (_.depthTexture.needsUpdate = !0)),
      Q(_.depthTexture, 0);
    const Z = n.get(_.depthTexture).__webglTexture,
      te = Xe(_);
    if (_.depthTexture.format === Sn)
      Ne(_)
        ? f.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, Z, 0, te)
        : s.framebufferTexture2D(36160, 36096, 3553, Z, 0);
    else if (_.depthTexture.format === Qn)
      Ne(_)
        ? f.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, Z, 0, te)
        : s.framebufferTexture2D(36160, 33306, 3553, Z, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function me(b) {
    const _ = n.get(b),
      B = b.isWebGLCubeRenderTarget === !0;
    if (b.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (B)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      Fe(_.__webglFramebuffer, b);
    } else if (B) {
      _.__webglDepthbuffer = [];
      for (let Z = 0; Z < 6; Z++)
        t.bindFramebuffer(36160, _.__webglFramebuffer[Z]),
          (_.__webglDepthbuffer[Z] = s.createRenderbuffer()),
          ve(_.__webglDepthbuffer[Z], b, !1);
    } else
      t.bindFramebuffer(36160, _.__webglFramebuffer),
        (_.__webglDepthbuffer = s.createRenderbuffer()),
        ve(_.__webglDepthbuffer, b, !1);
    t.bindFramebuffer(36160, null);
  }
  function Ee(b, _, B) {
    const Z = n.get(b);
    _ !== void 0 && re(Z.__webglFramebuffer, b, b.texture, 36064, 3553),
      B !== void 0 && me(b);
  }
  function We(b) {
    const _ = b.texture,
      B = n.get(b),
      Z = n.get(_);
    b.addEventListener("dispose", k),
      b.isWebGLMultipleRenderTargets !== !0 &&
        (Z.__webglTexture === void 0 && (Z.__webglTexture = s.createTexture()),
        (Z.__version = _.version),
        o.memory.textures++);
    const te = b.isWebGLCubeRenderTarget === !0,
      oe = b.isWebGLMultipleRenderTargets === !0,
      T = M(b) || a;
    if (te) {
      B.__webglFramebuffer = [];
      for (let q = 0; q < 6; q++)
        B.__webglFramebuffer[q] = s.createFramebuffer();
    } else {
      if (((B.__webglFramebuffer = s.createFramebuffer()), oe))
        if (i.drawBuffers) {
          const q = b.texture;
          for (let O = 0, le = q.length; O < le; O++) {
            const de = n.get(q[O]);
            de.__webglTexture === void 0 &&
              ((de.__webglTexture = s.createTexture()), o.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      if (a && b.samples > 0 && Ne(b) === !1) {
        const q = oe ? _ : [_];
        (B.__webglMultisampledFramebuffer = s.createFramebuffer()),
          (B.__webglColorRenderbuffer = []),
          t.bindFramebuffer(36160, B.__webglMultisampledFramebuffer);
        for (let O = 0; O < q.length; O++) {
          const le = q[O];
          (B.__webglColorRenderbuffer[O] = s.createRenderbuffer()),
            s.bindRenderbuffer(36161, B.__webglColorRenderbuffer[O]);
          const de = r.convert(le.format, le.encoding),
            pe = r.convert(le.type),
            he = I(
              le.internalFormat,
              de,
              pe,
              le.encoding,
              b.isXRRenderTarget === !0
            ),
            fe = Xe(b);
          s.renderbufferStorageMultisample(36161, fe, he, b.width, b.height),
            s.framebufferRenderbuffer(
              36160,
              36064 + O,
              36161,
              B.__webglColorRenderbuffer[O]
            );
        }
        s.bindRenderbuffer(36161, null),
          b.depthBuffer &&
            ((B.__webglDepthRenderbuffer = s.createRenderbuffer()),
            ve(B.__webglDepthRenderbuffer, b, !0)),
          t.bindFramebuffer(36160, null);
      }
    }
    if (te) {
      t.bindTexture(34067, Z.__webglTexture), ce(34067, _, T);
      for (let q = 0; q < 6; q++)
        re(B.__webglFramebuffer[q], b, _, 36064, 34069 + q);
      L(_, T) && D(34067), t.unbindTexture();
    } else if (oe) {
      const q = b.texture;
      for (let O = 0, le = q.length; O < le; O++) {
        const de = q[O],
          pe = n.get(de);
        t.bindTexture(3553, pe.__webglTexture),
          ce(3553, de, T),
          re(B.__webglFramebuffer, b, de, 36064 + O, 3553),
          L(de, T) && D(3553);
      }
      t.unbindTexture();
    } else {
      let q = 3553;
      (b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) &&
        (a
          ? (q = b.isWebGL3DRenderTarget ? 32879 : 35866)
          : console.error(
              "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
            )),
        t.bindTexture(q, Z.__webglTexture),
        ce(q, _, T),
        re(B.__webglFramebuffer, b, _, 36064, q),
        L(_, T) && D(q),
        t.unbindTexture();
    }
    b.depthBuffer && me(b);
  }
  function Ve(b) {
    const _ = M(b) || a,
      B = b.isWebGLMultipleRenderTargets === !0 ? b.texture : [b.texture];
    for (let Z = 0, te = B.length; Z < te; Z++) {
      const oe = B[Z];
      if (L(oe, _)) {
        const T = b.isWebGLCubeRenderTarget ? 34067 : 3553,
          q = n.get(oe).__webglTexture;
        t.bindTexture(T, q), D(T), t.unbindTexture();
      }
    }
  }
  function Ye(b) {
    if (a && b.samples > 0 && Ne(b) === !1) {
      const _ = b.isWebGLMultipleRenderTargets ? b.texture : [b.texture],
        B = b.width,
        Z = b.height;
      let te = 16384;
      const oe = [],
        T = b.stencilBuffer ? 33306 : 36096,
        q = n.get(b),
        O = b.isWebGLMultipleRenderTargets === !0;
      if (O)
        for (let le = 0; le < _.length; le++)
          t.bindFramebuffer(36160, q.__webglMultisampledFramebuffer),
            s.framebufferRenderbuffer(36160, 36064 + le, 36161, null),
            t.bindFramebuffer(36160, q.__webglFramebuffer),
            s.framebufferTexture2D(36009, 36064 + le, 3553, null, 0);
      t.bindFramebuffer(36008, q.__webglMultisampledFramebuffer),
        t.bindFramebuffer(36009, q.__webglFramebuffer);
      for (let le = 0; le < _.length; le++) {
        oe.push(36064 + le), b.depthBuffer && oe.push(T);
        const de =
          q.__ignoreDepthValues !== void 0 ? q.__ignoreDepthValues : !1;
        if (
          (de === !1 &&
            (b.depthBuffer && (te |= 256), b.stencilBuffer && (te |= 1024)),
          O &&
            s.framebufferRenderbuffer(
              36008,
              36064,
              36161,
              q.__webglColorRenderbuffer[le]
            ),
          de === !0 &&
            (s.invalidateFramebuffer(36008, [T]),
            s.invalidateFramebuffer(36009, [T])),
          O)
        ) {
          const pe = n.get(_[le]).__webglTexture;
          s.framebufferTexture2D(36009, 36064, 3553, pe, 0);
        }
        s.blitFramebuffer(0, 0, B, Z, 0, 0, B, Z, te, 9728),
          m && s.invalidateFramebuffer(36008, oe);
      }
      if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), O))
        for (let le = 0; le < _.length; le++) {
          t.bindFramebuffer(36160, q.__webglMultisampledFramebuffer),
            s.framebufferRenderbuffer(
              36160,
              36064 + le,
              36161,
              q.__webglColorRenderbuffer[le]
            );
          const de = n.get(_[le]).__webglTexture;
          t.bindFramebuffer(36160, q.__webglFramebuffer),
            s.framebufferTexture2D(36009, 36064 + le, 3553, de, 0);
        }
      t.bindFramebuffer(36009, q.__webglMultisampledFramebuffer);
    }
  }
  function Xe(b) {
    return Math.min(d, b.samples);
  }
  function Ne(b) {
    const _ = n.get(b);
    return (
      a &&
      b.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      _.__useRenderToTexture !== !1
    );
  }
  function Be(b) {
    const _ = o.render.frame;
    g.get(b) !== _ && (g.set(b, _), b.update());
  }
  function rt(b, _) {
    const B = b.encoding,
      Z = b.format,
      te = b.type;
    return (
      b.isCompressedTexture === !0 ||
        b.isVideoTexture === !0 ||
        b.format === qr ||
        (B !== bn &&
          (B === Ge
            ? a === !1
              ? e.has("EXT_sRGB") === !0 && Z === Ut
                ? ((b.format = qr),
                  (b.minFilter = bt),
                  (b.generateMipmaps = !1))
                : (_ = Fa.sRGBToLinear(_))
              : (Z !== Ut || te !== yn) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture encoding:",
                B
              ))),
      _
    );
  }
  (this.allocateTextureUnit = $),
    (this.resetTextureUnits = ee),
    (this.setTexture2D = Q),
    (this.setTexture2DArray = Me),
    (this.setTexture3D = ie),
    (this.setTextureCube = V),
    (this.rebindTextures = Ee),
    (this.setupRenderTarget = We),
    (this.updateRenderTargetMipmap = Ve),
    (this.updateMultisampleRenderTarget = Ye),
    (this.setupDepthRenderbuffer = me),
    (this.setupFrameBufferTexture = re),
    (this.useMultisampledRTT = Ne);
}
function uf(s, e, t) {
  const n = t.isWebGL2;
  function i(r, o = null) {
    let a;
    if (r === yn) return 5121;
    if (r === Jo) return 32819;
    if (r === Qo) return 32820;
    if (r === jo) return 5120;
    if (r === Ko) return 5122;
    if (r === Da) return 5123;
    if (r === Zo) return 5124;
    if (r === xn) return 5125;
    if (r === Mn) return 5126;
    if (r === mi)
      return n
        ? 5131
        : ((a = e.get("OES_texture_half_float")),
          a !== null ? a.HALF_FLOAT_OES : null);
    if (r === el) return 6406;
    if (r === Ut) return 6408;
    if (r === tl) return 6409;
    if (r === nl) return 6410;
    if (r === Sn) return 6402;
    if (r === Qn) return 34041;
    if (r === qr)
      return (a = e.get("EXT_sRGB")), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (r === il) return 6403;
    if (r === rl) return 36244;
    if (r === sl) return 33319;
    if (r === al) return 33320;
    if (r === ol) return 36249;
    if (r === hr || r === ur || r === dr || r === fr)
      if (o === Ge)
        if (((a = e.get("WEBGL_compressed_texture_s3tc_srgb")), a !== null)) {
          if (r === hr) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === ur) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === dr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === fr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((a = e.get("WEBGL_compressed_texture_s3tc")), a !== null)) {
        if (r === hr) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === ur) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === dr) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === fr) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (r === ds || r === fs || r === ps || r === ms)
      if (((a = e.get("WEBGL_compressed_texture_pvrtc")), a !== null)) {
        if (r === ds) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === fs) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === ps) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === ms) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (r === ll)
      return (
        (a = e.get("WEBGL_compressed_texture_etc1")),
        a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (r === gs || r === _s)
      if (((a = e.get("WEBGL_compressed_texture_etc")), a !== null)) {
        if (r === gs)
          return o === Ge ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (r === _s)
          return o === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      r === vs ||
      r === xs ||
      r === Ms ||
      r === Ss ||
      r === ys ||
      r === bs ||
      r === ws ||
      r === Es ||
      r === As ||
      r === Ts ||
      r === Cs ||
      r === Ls ||
      r === Ps ||
      r === Rs
    )
      if (((a = e.get("WEBGL_compressed_texture_astc")), a !== null)) {
        if (r === vs)
          return o === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === xs)
          return o === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === Ms)
          return o === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === Ss)
          return o === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === ys)
          return o === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === bs)
          return o === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === ws)
          return o === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === Es)
          return o === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === As)
          return o === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === Ts)
          return o === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === Cs)
          return o === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === Ls)
          return o === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === Ps)
          return o === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === Rs)
          return o === Ge
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (r === pr)
      if (((a = e.get("EXT_texture_compression_bptc")), a !== null)) {
        if (r === pr)
          return o === Ge
            ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    if (r === cl || r === Ds || r === Is || r === Us)
      if (((a = e.get("EXT_texture_compression_rgtc")), a !== null)) {
        if (r === pr) return a.COMPRESSED_RED_RGTC1_EXT;
        if (r === Ds) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (r === Is) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (r === Us) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return r === jn
      ? n
        ? 34042
        : ((a = e.get("WEBGL_depth_texture")),
          a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)
      : s[r] !== void 0
      ? s[r]
      : null;
  }
  return { convert: i };
}
class df extends wt {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class di extends it {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const ff = { type: "move" };
class zr {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new di()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new di()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new U()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new U())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new di()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new U()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new U())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      r = null,
      o = null;
    const a = this._targetRay,
      h = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const v of e.hand.values()) {
          const p = t.getJointPose(v, n),
            l = this._getHandJoint(c, v);
          p !== null &&
            (l.matrix.fromArray(p.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.jointRadius = p.radius)),
            (l.visible = p !== null);
        }
        const u = c.joints["index-finger-tip"],
          d = c.joints["thumb-tip"],
          f = u.position.distanceTo(d.position),
          m = 0.02,
          g = 0.005;
        c.inputState.pinching && f > m + g
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            f <= m - g &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        h !== null &&
          e.gripSpace &&
          ((r = t.getPose(e.gripSpace, n)),
          r !== null &&
            (h.matrix.fromArray(r.transform.matrix),
            h.matrix.decompose(h.position, h.rotation, h.scale),
            r.linearVelocity
              ? ((h.hasLinearVelocity = !0),
                h.linearVelocity.copy(r.linearVelocity))
              : (h.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((h.hasAngularVelocity = !0),
                h.angularVelocity.copy(r.angularVelocity))
              : (h.hasAngularVelocity = !1)));
      a !== null &&
        ((i = t.getPose(e.targetRaySpace, n)),
        i === null && r !== null && (i = r),
        i !== null &&
          (a.matrix.fromArray(i.transform.matrix),
          a.matrix.decompose(a.position, a.rotation, a.scale),
          i.linearVelocity
            ? ((a.hasLinearVelocity = !0),
              a.linearVelocity.copy(i.linearVelocity))
            : (a.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((a.hasAngularVelocity = !0),
              a.angularVelocity.copy(i.angularVelocity))
            : (a.hasAngularVelocity = !1),
          this.dispatchEvent(ff)));
    }
    return (
      a !== null && (a.visible = i !== null),
      h !== null && (h.visible = r !== null),
      c !== null && (c.visible = o !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new di();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class pf extends mt {
  constructor(e, t, n, i, r, o, a, h, c, u) {
    if (((u = u !== void 0 ? u : Sn), u !== Sn && u !== Qn))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && u === Sn && (n = xn),
      n === void 0 && u === Qn && (n = jn),
      super(null, i, r, o, a, h, u, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = a !== void 0 ? a : ut),
      (this.minFilter = h !== void 0 ? h : ut),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class mf extends Tn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      r = 1,
      o = null,
      a = "local-floor",
      h = 1,
      c = null,
      u = null,
      d = null,
      f = null,
      m = null,
      g = null;
    const v = t.getContextAttributes();
    let p = null,
      l = null;
    const A = [],
      E = [],
      M = new Set(),
      y = new Map(),
      L = new wt();
    L.layers.enable(1), (L.viewport = new nt());
    const D = new wt();
    D.layers.enable(2), (D.viewport = new nt());
    const I = [L, D],
      x = new df();
    x.layers.enable(1), x.layers.enable(2);
    let w = null,
      Y = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (V) {
        let j = A[V];
        return (
          j === void 0 && ((j = new zr()), (A[V] = j)), j.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (V) {
        let j = A[V];
        return j === void 0 && ((j = new zr()), (A[V] = j)), j.getGripSpace();
      }),
      (this.getHand = function (V) {
        let j = A[V];
        return j === void 0 && ((j = new zr()), (A[V] = j)), j.getHandSpace();
      });
    function k(V) {
      const j = E.indexOf(V.inputSource);
      if (j === -1) return;
      const ae = A[j];
      ae !== void 0 && ae.dispatchEvent({ type: V.type, data: V.inputSource });
    }
    function P() {
      i.removeEventListener("select", k),
        i.removeEventListener("selectstart", k),
        i.removeEventListener("selectend", k),
        i.removeEventListener("squeeze", k),
        i.removeEventListener("squeezestart", k),
        i.removeEventListener("squeezeend", k),
        i.removeEventListener("end", P),
        i.removeEventListener("inputsourceschange", F);
      for (let V = 0; V < A.length; V++) {
        const j = E[V];
        j !== null && ((E[V] = null), A[V].disconnect(j));
      }
      (w = null),
        (Y = null),
        e.setRenderTarget(p),
        (m = null),
        (f = null),
        (d = null),
        (i = null),
        (l = null),
        ie.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (V) {
      (r = V),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (V) {
        (a = V),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return c || o;
      }),
      (this.setReferenceSpace = function (V) {
        c = V;
      }),
      (this.getBaseLayer = function () {
        return f !== null ? f : m;
      }),
      (this.getBinding = function () {
        return d;
      }),
      (this.getFrame = function () {
        return g;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (V) {
        if (((i = V), i !== null)) {
          if (
            ((p = e.getRenderTarget()),
            i.addEventListener("select", k),
            i.addEventListener("selectstart", k),
            i.addEventListener("selectend", k),
            i.addEventListener("squeeze", k),
            i.addEventListener("squeezestart", k),
            i.addEventListener("squeezeend", k),
            i.addEventListener("end", P),
            i.addEventListener("inputsourceschange", F),
            v.xrCompatible !== !0 && (await t.makeXRCompatible()),
            i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const j = {
              antialias: i.renderState.layers === void 0 ? v.antialias : !0,
              alpha: v.alpha,
              depth: v.depth,
              stencil: v.stencil,
              framebufferScaleFactor: r,
            };
            (m = new XRWebGLLayer(i, t, j)),
              i.updateRenderState({ baseLayer: m }),
              (l = new wn(m.framebufferWidth, m.framebufferHeight, {
                format: Ut,
                type: yn,
                encoding: e.outputEncoding,
                stencilBuffer: v.stencil,
              }));
          } else {
            let j = null,
              ae = null,
              ce = null;
            v.depth &&
              ((ce = v.stencil ? 35056 : 33190),
              (j = v.stencil ? Qn : Sn),
              (ae = v.stencil ? jn : xn));
            const z = { colorFormat: 32856, depthFormat: ce, scaleFactor: r };
            (d = new XRWebGLBinding(i, t)),
              (f = d.createProjectionLayer(z)),
              i.updateRenderState({ layers: [f] }),
              (l = new wn(f.textureWidth, f.textureHeight, {
                format: Ut,
                type: yn,
                depthTexture: new pf(
                  f.textureWidth,
                  f.textureHeight,
                  ae,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  j
                ),
                stencilBuffer: v.stencil,
                encoding: e.outputEncoding,
                samples: v.antialias ? 4 : 0,
              }));
            const ye = e.properties.get(l);
            ye.__ignoreDepthValues = f.ignoreDepthValues;
          }
          (l.isXRRenderTarget = !0),
            this.setFoveation(h),
            (c = null),
            (o = await i.requestReferenceSpace(a)),
            ie.setContext(i),
            ie.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      });
    function F(V) {
      for (let j = 0; j < V.removed.length; j++) {
        const ae = V.removed[j],
          ce = E.indexOf(ae);
        ce >= 0 && ((E[ce] = null), A[ce].disconnect(ae));
      }
      for (let j = 0; j < V.added.length; j++) {
        const ae = V.added[j];
        let ce = E.indexOf(ae);
        if (ce === -1) {
          for (let ye = 0; ye < A.length; ye++)
            if (ye >= E.length) {
              E.push(ae), (ce = ye);
              break;
            } else if (E[ye] === null) {
              (E[ye] = ae), (ce = ye);
              break;
            }
          if (ce === -1) break;
        }
        const z = A[ce];
        z && z.connect(ae);
      }
    }
    const G = new U(),
      K = new U();
    function ee(V, j, ae) {
      G.setFromMatrixPosition(j.matrixWorld),
        K.setFromMatrixPosition(ae.matrixWorld);
      const ce = G.distanceTo(K),
        z = j.projectionMatrix.elements,
        ye = ae.projectionMatrix.elements,
        xe = z[14] / (z[10] - 1),
        re = z[14] / (z[10] + 1),
        ve = (z[9] + 1) / z[5],
        Fe = (z[9] - 1) / z[5],
        me = (z[8] - 1) / z[0],
        Ee = (ye[8] + 1) / ye[0],
        We = xe * me,
        Ve = xe * Ee,
        Ye = ce / (-me + Ee),
        Xe = Ye * -me;
      j.matrixWorld.decompose(V.position, V.quaternion, V.scale),
        V.translateX(Xe),
        V.translateZ(Ye),
        V.matrixWorld.compose(V.position, V.quaternion, V.scale),
        V.matrixWorldInverse.copy(V.matrixWorld).invert();
      const Ne = xe + Ye,
        Be = re + Ye,
        rt = We - Xe,
        b = Ve + (ce - Xe),
        _ = ((ve * re) / Be) * Ne,
        B = ((Fe * re) / Be) * Ne;
      V.projectionMatrix.makePerspective(rt, b, _, B, Ne, Be),
        V.projectionMatrixInverse.copy(V.projectionMatrix).invert();
    }
    function $(V, j) {
      j === null
        ? V.matrixWorld.copy(V.matrix)
        : V.matrixWorld.multiplyMatrices(j.matrixWorld, V.matrix),
        V.matrixWorldInverse.copy(V.matrixWorld).invert();
    }
    this.updateCamera = function (V) {
      if (i === null) return;
      (x.near = D.near = L.near = V.near),
        (x.far = D.far = L.far = V.far),
        (w !== x.near || Y !== x.far) &&
          (i.updateRenderState({ depthNear: x.near, depthFar: x.far }),
          (w = x.near),
          (Y = x.far));
      const j = V.parent,
        ae = x.cameras;
      $(x, j);
      for (let ce = 0; ce < ae.length; ce++) $(ae[ce], j);
      ae.length === 2
        ? ee(x, L, D)
        : x.projectionMatrix.copy(L.projectionMatrix),
        ne(V, x, j);
    };
    function ne(V, j, ae) {
      ae === null
        ? V.matrix.copy(j.matrixWorld)
        : (V.matrix.copy(ae.matrixWorld),
          V.matrix.invert(),
          V.matrix.multiply(j.matrixWorld)),
        V.matrix.decompose(V.position, V.quaternion, V.scale),
        V.updateMatrixWorld(!0);
      const ce = V.children;
      for (let z = 0, ye = ce.length; z < ye; z++) ce[z].updateMatrixWorld(!0);
      V.projectionMatrix.copy(j.projectionMatrix),
        V.projectionMatrixInverse.copy(j.projectionMatrixInverse),
        V.isPerspectiveCamera &&
          ((V.fov = $r * 2 * Math.atan(1 / V.projectionMatrix.elements[5])),
          (V.zoom = 1));
    }
    (this.getCamera = function () {
      return x;
    }),
      (this.getFoveation = function () {
        if (!(f === null && m === null)) return h;
      }),
      (this.setFoveation = function (V) {
        (h = V),
          f !== null && (f.fixedFoveation = V),
          m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = V);
      }),
      (this.getPlanes = function () {
        return M;
      });
    let Q = null;
    function Me(V, j) {
      if (((u = j.getViewerPose(c || o)), (g = j), u !== null)) {
        const ae = u.views;
        m !== null &&
          (e.setRenderTargetFramebuffer(l, m.framebuffer),
          e.setRenderTarget(l));
        let ce = !1;
        ae.length !== x.cameras.length && ((x.cameras.length = 0), (ce = !0));
        for (let z = 0; z < ae.length; z++) {
          const ye = ae[z];
          let xe = null;
          if (m !== null) xe = m.getViewport(ye);
          else {
            const ve = d.getViewSubImage(f, ye);
            (xe = ve.viewport),
              z === 0 &&
                (e.setRenderTargetTextures(
                  l,
                  ve.colorTexture,
                  f.ignoreDepthValues ? void 0 : ve.depthStencilTexture
                ),
                e.setRenderTarget(l));
          }
          let re = I[z];
          re === void 0 &&
            ((re = new wt()),
            re.layers.enable(z),
            (re.viewport = new nt()),
            (I[z] = re)),
            re.matrix.fromArray(ye.transform.matrix),
            re.matrix.decompose(re.position, re.quaternion, re.scale),
            re.projectionMatrix.fromArray(ye.projectionMatrix),
            re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),
            re.viewport.set(xe.x, xe.y, xe.width, xe.height),
            z === 0 &&
              (x.matrix.copy(re.matrix),
              x.matrix.decompose(x.position, x.quaternion, x.scale)),
            ce === !0 && x.cameras.push(re);
        }
      }
      for (let ae = 0; ae < A.length; ae++) {
        const ce = E[ae],
          z = A[ae];
        ce !== null && z !== void 0 && z.update(ce, j, c || o);
      }
      if ((Q && Q(V, j), j.detectedPlanes)) {
        n.dispatchEvent({ type: "planesdetected", data: j.detectedPlanes });
        let ae = null;
        for (const ce of M)
          j.detectedPlanes.has(ce) || (ae === null && (ae = []), ae.push(ce));
        if (ae !== null)
          for (const ce of ae)
            M.delete(ce),
              y.delete(ce),
              n.dispatchEvent({ type: "planeremoved", data: ce });
        for (const ce of j.detectedPlanes)
          if (!M.has(ce))
            M.add(ce),
              y.set(ce, j.lastChangedTime),
              n.dispatchEvent({ type: "planeadded", data: ce });
          else {
            const z = y.get(ce);
            ce.lastChangedTime > z &&
              (y.set(ce, ce.lastChangedTime),
              n.dispatchEvent({ type: "planechanged", data: ce }));
          }
      }
      g = null;
    }
    const ie = new $a();
    ie.setAnimationLoop(Me),
      (this.setAnimationLoop = function (V) {
        Q = V;
      }),
      (this.dispose = function () {});
  }
}
function gf(s, e) {
  function t(p, l) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), l.value.copy(p.matrix);
  }
  function n(p, l) {
    l.color.getRGB(p.fogColor.value, Wa(s)),
      l.isFog
        ? ((p.fogNear.value = l.near), (p.fogFar.value = l.far))
        : l.isFogExp2 && (p.fogDensity.value = l.density);
  }
  function i(p, l, A, E, M) {
    l.isMeshBasicMaterial || l.isMeshLambertMaterial
      ? r(p, l)
      : l.isMeshToonMaterial
      ? (r(p, l), d(p, l))
      : l.isMeshPhongMaterial
      ? (r(p, l), u(p, l))
      : l.isMeshStandardMaterial
      ? (r(p, l), f(p, l), l.isMeshPhysicalMaterial && m(p, l, M))
      : l.isMeshMatcapMaterial
      ? (r(p, l), g(p, l))
      : l.isMeshDepthMaterial
      ? r(p, l)
      : l.isMeshDistanceMaterial
      ? (r(p, l), v(p, l))
      : l.isMeshNormalMaterial
      ? r(p, l)
      : l.isLineBasicMaterial
      ? (o(p, l), l.isLineDashedMaterial && a(p, l))
      : l.isPointsMaterial
      ? h(p, l, A, E)
      : l.isSpriteMaterial
      ? c(p, l)
      : l.isShadowMaterial
      ? (p.color.value.copy(l.color), (p.opacity.value = l.opacity))
      : l.isShaderMaterial && (l.uniformsNeedUpdate = !1);
  }
  function r(p, l) {
    (p.opacity.value = l.opacity),
      l.color && p.diffuse.value.copy(l.color),
      l.emissive &&
        p.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),
      l.map && ((p.map.value = l.map), t(l.map, p.mapTransform)),
      l.alphaMap &&
        ((p.alphaMap.value = l.alphaMap), t(l.alphaMap, p.alphaMapTransform)),
      l.bumpMap &&
        ((p.bumpMap.value = l.bumpMap),
        t(l.bumpMap, p.bumpMapTransform),
        (p.bumpScale.value = l.bumpScale),
        l.side === pt && (p.bumpScale.value *= -1)),
      l.normalMap &&
        ((p.normalMap.value = l.normalMap),
        t(l.normalMap, p.normalMapTransform),
        p.normalScale.value.copy(l.normalScale),
        l.side === pt && p.normalScale.value.negate()),
      l.displacementMap &&
        ((p.displacementMap.value = l.displacementMap),
        t(l.displacementMap, p.displacementMapTransform),
        (p.displacementScale.value = l.displacementScale),
        (p.displacementBias.value = l.displacementBias)),
      l.emissiveMap &&
        ((p.emissiveMap.value = l.emissiveMap),
        t(l.emissiveMap, p.emissiveMapTransform)),
      l.specularMap &&
        ((p.specularMap.value = l.specularMap),
        t(l.specularMap, p.specularMapTransform)),
      l.alphaTest > 0 && (p.alphaTest.value = l.alphaTest);
    const A = e.get(l).envMap;
    if (
      (A &&
        ((p.envMap.value = A),
        (p.flipEnvMap.value =
          A.isCubeTexture && A.isRenderTargetTexture === !1 ? -1 : 1),
        (p.reflectivity.value = l.reflectivity),
        (p.ior.value = l.ior),
        (p.refractionRatio.value = l.refractionRatio)),
      l.lightMap)
    ) {
      p.lightMap.value = l.lightMap;
      const E = s.useLegacyLights === !0 ? Math.PI : 1;
      (p.lightMapIntensity.value = l.lightMapIntensity * E),
        t(l.lightMap, p.lightMapTransform);
    }
    l.aoMap &&
      ((p.aoMap.value = l.aoMap),
      (p.aoMapIntensity.value = l.aoMapIntensity),
      t(l.aoMap, p.aoMapTransform));
  }
  function o(p, l) {
    p.diffuse.value.copy(l.color),
      (p.opacity.value = l.opacity),
      l.map && ((p.map.value = l.map), t(l.map, p.mapTransform));
  }
  function a(p, l) {
    (p.dashSize.value = l.dashSize),
      (p.totalSize.value = l.dashSize + l.gapSize),
      (p.scale.value = l.scale);
  }
  function h(p, l, A, E) {
    p.diffuse.value.copy(l.color),
      (p.opacity.value = l.opacity),
      (p.size.value = l.size * A),
      (p.scale.value = E * 0.5),
      l.map && ((p.map.value = l.map), t(l.map, p.uvTransform)),
      l.alphaMap && (p.alphaMap.value = l.alphaMap),
      l.alphaTest > 0 && (p.alphaTest.value = l.alphaTest);
  }
  function c(p, l) {
    p.diffuse.value.copy(l.color),
      (p.opacity.value = l.opacity),
      (p.rotation.value = l.rotation),
      l.map && ((p.map.value = l.map), t(l.map, p.mapTransform)),
      l.alphaMap && (p.alphaMap.value = l.alphaMap),
      l.alphaTest > 0 && (p.alphaTest.value = l.alphaTest);
  }
  function u(p, l) {
    p.specular.value.copy(l.specular),
      (p.shininess.value = Math.max(l.shininess, 1e-4));
  }
  function d(p, l) {
    l.gradientMap && (p.gradientMap.value = l.gradientMap);
  }
  function f(p, l) {
    (p.metalness.value = l.metalness),
      l.metalnessMap &&
        ((p.metalnessMap.value = l.metalnessMap),
        t(l.metalnessMap, p.metalnessMapTransform)),
      (p.roughness.value = l.roughness),
      l.roughnessMap &&
        ((p.roughnessMap.value = l.roughnessMap),
        t(l.roughnessMap, p.roughnessMapTransform)),
      e.get(l).envMap && (p.envMapIntensity.value = l.envMapIntensity);
  }
  function m(p, l, A) {
    (p.ior.value = l.ior),
      l.sheen > 0 &&
        (p.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),
        (p.sheenRoughness.value = l.sheenRoughness),
        l.sheenColorMap &&
          ((p.sheenColorMap.value = l.sheenColorMap),
          t(l.sheenColorMap, p.sheenColorMapTransform)),
        l.sheenRoughnessMap &&
          ((p.sheenRoughnessMap.value = l.sheenRoughnessMap),
          t(l.sheenRoughnessMap, p.sheenRoughnessMapTransform))),
      l.clearcoat > 0 &&
        ((p.clearcoat.value = l.clearcoat),
        (p.clearcoatRoughness.value = l.clearcoatRoughness),
        l.clearcoatMap &&
          ((p.clearcoatMap.value = l.clearcoatMap),
          t(l.clearcoatMap, p.clearcoatMapTransform)),
        l.clearcoatRoughnessMap &&
          ((p.clearcoatRoughnessMap.value = l.clearcoatRoughnessMap),
          t(l.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)),
        l.clearcoatNormalMap &&
          ((p.clearcoatNormalMap.value = l.clearcoatNormalMap),
          t(l.clearcoatNormalMap, p.clearcoatNormalMapTransform),
          p.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),
          l.side === pt && p.clearcoatNormalScale.value.negate())),
      l.iridescence > 0 &&
        ((p.iridescence.value = l.iridescence),
        (p.iridescenceIOR.value = l.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = l.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = l.iridescenceThicknessRange[1]),
        l.iridescenceMap &&
          ((p.iridescenceMap.value = l.iridescenceMap),
          t(l.iridescenceMap, p.iridescenceMapTransform)),
        l.iridescenceThicknessMap &&
          ((p.iridescenceThicknessMap.value = l.iridescenceThicknessMap),
          t(l.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))),
      l.transmission > 0 &&
        ((p.transmission.value = l.transmission),
        (p.transmissionSamplerMap.value = A.texture),
        p.transmissionSamplerSize.value.set(A.width, A.height),
        l.transmissionMap &&
          ((p.transmissionMap.value = l.transmissionMap),
          t(l.transmissionMap, p.transmissionMapTransform)),
        (p.thickness.value = l.thickness),
        l.thicknessMap &&
          ((p.thicknessMap.value = l.thicknessMap),
          t(l.thicknessMap, p.thicknessMapTransform)),
        (p.attenuationDistance.value = l.attenuationDistance),
        p.attenuationColor.value.copy(l.attenuationColor)),
      (p.specularIntensity.value = l.specularIntensity),
      p.specularColor.value.copy(l.specularColor),
      l.specularColorMap &&
        ((p.specularColorMap.value = l.specularColorMap),
        t(l.specularColorMap, p.specularColorMapTransform)),
      l.specularIntensityMap &&
        ((p.specularIntensityMap.value = l.specularIntensityMap),
        t(l.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, l) {
    l.matcap && (p.matcap.value = l.matcap);
  }
  function v(p, l) {
    const A = e.get(l).light;
    p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),
      (p.nearDistance.value = A.shadow.camera.near),
      (p.farDistance.value = A.shadow.camera.far);
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function _f(s, e, t, n) {
  let i = {},
    r = {},
    o = [];
  const a = t.isWebGL2 ? s.getParameter(35375) : 0;
  function h(A, E) {
    const M = E.program;
    n.uniformBlockBinding(A, M);
  }
  function c(A, E) {
    let M = i[A.id];
    M === void 0 &&
      (g(A), (M = u(A)), (i[A.id] = M), A.addEventListener("dispose", p));
    const y = E.program;
    n.updateUBOMapping(A, y);
    const L = e.render.frame;
    r[A.id] !== L && (f(A), (r[A.id] = L));
  }
  function u(A) {
    const E = d();
    A.__bindingPointIndex = E;
    const M = s.createBuffer(),
      y = A.__size,
      L = A.usage;
    return (
      s.bindBuffer(35345, M),
      s.bufferData(35345, y, L),
      s.bindBuffer(35345, null),
      s.bindBufferBase(35345, E, M),
      M
    );
  }
  function d() {
    for (let A = 0; A < a; A++) if (o.indexOf(A) === -1) return o.push(A), A;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function f(A) {
    const E = i[A.id],
      M = A.uniforms,
      y = A.__cache;
    s.bindBuffer(35345, E);
    for (let L = 0, D = M.length; L < D; L++) {
      const I = M[L];
      if (m(I, L, y) === !0) {
        const x = I.__offset,
          w = Array.isArray(I.value) ? I.value : [I.value];
        let Y = 0;
        for (let k = 0; k < w.length; k++) {
          const P = w[k],
            F = v(P);
          typeof P == "number"
            ? ((I.__data[0] = P), s.bufferSubData(35345, x + Y, I.__data))
            : P.isMatrix3
            ? ((I.__data[0] = P.elements[0]),
              (I.__data[1] = P.elements[1]),
              (I.__data[2] = P.elements[2]),
              (I.__data[3] = P.elements[0]),
              (I.__data[4] = P.elements[3]),
              (I.__data[5] = P.elements[4]),
              (I.__data[6] = P.elements[5]),
              (I.__data[7] = P.elements[0]),
              (I.__data[8] = P.elements[6]),
              (I.__data[9] = P.elements[7]),
              (I.__data[10] = P.elements[8]),
              (I.__data[11] = P.elements[0]))
            : (P.toArray(I.__data, Y),
              (Y += F.storage / Float32Array.BYTES_PER_ELEMENT));
        }
        s.bufferSubData(35345, x, I.__data);
      }
    }
    s.bindBuffer(35345, null);
  }
  function m(A, E, M) {
    const y = A.value;
    if (M[E] === void 0) {
      if (typeof y == "number") M[E] = y;
      else {
        const L = Array.isArray(y) ? y : [y],
          D = [];
        for (let I = 0; I < L.length; I++) D.push(L[I].clone());
        M[E] = D;
      }
      return !0;
    } else if (typeof y == "number") {
      if (M[E] !== y) return (M[E] = y), !0;
    } else {
      const L = Array.isArray(M[E]) ? M[E] : [M[E]],
        D = Array.isArray(y) ? y : [y];
      for (let I = 0; I < L.length; I++) {
        const x = L[I];
        if (x.equals(D[I]) === !1) return x.copy(D[I]), !0;
      }
    }
    return !1;
  }
  function g(A) {
    const E = A.uniforms;
    let M = 0;
    const y = 16;
    let L = 0;
    for (let D = 0, I = E.length; D < I; D++) {
      const x = E[D],
        w = { boundary: 0, storage: 0 },
        Y = Array.isArray(x.value) ? x.value : [x.value];
      for (let k = 0, P = Y.length; k < P; k++) {
        const F = Y[k],
          G = v(F);
        (w.boundary += G.boundary), (w.storage += G.storage);
      }
      if (
        ((x.__data = new Float32Array(
          w.storage / Float32Array.BYTES_PER_ELEMENT
        )),
        (x.__offset = M),
        D > 0)
      ) {
        L = M % y;
        const k = y - L;
        L !== 0 && k - w.boundary < 0 && ((M += y - L), (x.__offset = M));
      }
      M += w.storage;
    }
    return (
      (L = M % y), L > 0 && (M += y - L), (A.__size = M), (A.__cache = {}), this
    );
  }
  function v(A) {
    const E = { boundary: 0, storage: 0 };
    return (
      typeof A == "number"
        ? ((E.boundary = 4), (E.storage = 4))
        : A.isVector2
        ? ((E.boundary = 8), (E.storage = 8))
        : A.isVector3 || A.isColor
        ? ((E.boundary = 16), (E.storage = 12))
        : A.isVector4
        ? ((E.boundary = 16), (E.storage = 16))
        : A.isMatrix3
        ? ((E.boundary = 48), (E.storage = 48))
        : A.isMatrix4
        ? ((E.boundary = 64), (E.storage = 64))
        : A.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            A
          ),
      E
    );
  }
  function p(A) {
    const E = A.target;
    E.removeEventListener("dispose", p);
    const M = o.indexOf(E.__bindingPointIndex);
    o.splice(M, 1), s.deleteBuffer(i[E.id]), delete i[E.id], delete r[E.id];
  }
  function l() {
    for (const A in i) s.deleteBuffer(i[A]);
    (o = []), (i = {}), (r = {});
  }
  return { bind: h, update: c, dispose: l };
}
function vf() {
  const s = _i("canvas");
  return (s.style.display = "block"), s;
}
class Qa {
  constructor(e = {}) {
    const {
      canvas: t = vf(),
      context: n = null,
      depth: i = !0,
      stencil: r = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: h = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: d = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let f;
    n !== null ? (f = n.getContextAttributes().alpha) : (f = o);
    let m = null,
      g = null;
    const v = [],
      p = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.outputEncoding = bn),
      (this.useLegacyLights = !0),
      (this.toneMapping = Kt),
      (this.toneMappingExposure = 1);
    const l = this;
    let A = !1,
      E = 0,
      M = 0,
      y = null,
      L = -1,
      D = null;
    const I = new nt(),
      x = new nt();
    let w = null,
      Y = t.width,
      k = t.height,
      P = 1,
      F = null,
      G = null;
    const K = new nt(0, 0, Y, k),
      ee = new nt(0, 0, Y, k);
    let $ = !1;
    const ne = new Jr();
    let Q = !1,
      Me = !1,
      ie = null;
    const V = new Ze(),
      j = new U(),
      ae = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    function ce() {
      return y === null ? P : 1;
    }
    let z = n;
    function ye(S, N) {
      for (let H = 0; H < S.length; H++) {
        const R = S[H],
          X = t.getContext(R, N);
        if (X !== null) return X;
      }
      return null;
    }
    try {
      const S = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: a,
        premultipliedAlpha: h,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: d,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${Kr}`),
        t.addEventListener("webglcontextlost", fe, !1),
        t.addEventListener("webglcontextrestored", be, !1),
        t.addEventListener("webglcontextcreationerror", Le, !1),
        z === null)
      ) {
        const N = ["webgl2", "webgl", "experimental-webgl"];
        if (
          (l.isWebGL1Renderer === !0 && N.shift(), (z = ye(N, S)), z === null)
        )
          throw ye(N)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
      z.getShaderPrecisionFormat === void 0 &&
        (z.getShaderPrecisionFormat = function () {
          return { rangeMin: 1, rangeMax: 1, precision: 1 };
        });
    } catch (S) {
      throw (console.error("THREE.WebGLRenderer: " + S.message), S);
    }
    let xe,
      re,
      ve,
      Fe,
      me,
      Ee,
      We,
      Ve,
      Ye,
      Xe,
      Ne,
      Be,
      rt,
      b,
      _,
      B,
      Z,
      te,
      oe,
      T,
      q,
      O,
      le,
      de;
    function pe() {
      (xe = new Cu(z)),
        (re = new yu(z, xe, e)),
        xe.init(re),
        (O = new uf(z, xe, re)),
        (ve = new cf(z, xe, re)),
        (Fe = new Ru()),
        (me = new Yd()),
        (Ee = new hf(z, xe, ve, me, re, O, Fe)),
        (We = new wu(l)),
        (Ve = new Tu(l)),
        (Ye = new Hl(z, re)),
        (le = new Mu(z, xe, Ye, re)),
        (Xe = new Lu(z, Ye, Fe, le)),
        (Ne = new Nu(z, Xe, Ye, Fe)),
        (oe = new Uu(z, re, Ee)),
        (B = new bu(me)),
        (Be = new $d(l, We, Ve, xe, re, le, B)),
        (rt = new gf(l, me)),
        (b = new Kd()),
        (_ = new nf(xe, re)),
        (te = new xu(l, We, Ve, ve, Ne, f, h)),
        (Z = new lf(l, Ne, re)),
        (de = new _f(z, Fe, re, ve)),
        (T = new Su(z, xe, Fe, re)),
        (q = new Pu(z, xe, Fe, re)),
        (Fe.programs = Be.programs),
        (l.capabilities = re),
        (l.extensions = xe),
        (l.properties = me),
        (l.renderLists = b),
        (l.shadowMap = Z),
        (l.state = ve),
        (l.info = Fe);
    }
    pe();
    const he = new mf(l, z);
    (this.xr = he),
      (this.getContext = function () {
        return z;
      }),
      (this.getContextAttributes = function () {
        return z.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const S = xe.get("WEBGL_lose_context");
        S && S.loseContext();
      }),
      (this.forceContextRestore = function () {
        const S = xe.get("WEBGL_lose_context");
        S && S.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return P;
      }),
      (this.setPixelRatio = function (S) {
        S !== void 0 && ((P = S), this.setSize(Y, k, !1));
      }),
      (this.getSize = function (S) {
        return S.set(Y, k);
      }),
      (this.setSize = function (S, N, H = !0) {
        if (he.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting."
          );
          return;
        }
        (Y = S),
          (k = N),
          (t.width = Math.floor(S * P)),
          (t.height = Math.floor(N * P)),
          H === !0 && ((t.style.width = S + "px"), (t.style.height = N + "px")),
          this.setViewport(0, 0, S, N);
      }),
      (this.getDrawingBufferSize = function (S) {
        return S.set(Y * P, k * P).floor();
      }),
      (this.setDrawingBufferSize = function (S, N, H) {
        (Y = S),
          (k = N),
          (P = H),
          (t.width = Math.floor(S * H)),
          (t.height = Math.floor(N * H)),
          this.setViewport(0, 0, S, N);
      }),
      (this.getCurrentViewport = function (S) {
        return S.copy(I);
      }),
      (this.getViewport = function (S) {
        return S.copy(K);
      }),
      (this.setViewport = function (S, N, H, R) {
        S.isVector4 ? K.set(S.x, S.y, S.z, S.w) : K.set(S, N, H, R),
          ve.viewport(I.copy(K).multiplyScalar(P).floor());
      }),
      (this.getScissor = function (S) {
        return S.copy(ee);
      }),
      (this.setScissor = function (S, N, H, R) {
        S.isVector4 ? ee.set(S.x, S.y, S.z, S.w) : ee.set(S, N, H, R),
          ve.scissor(x.copy(ee).multiplyScalar(P).floor());
      }),
      (this.getScissorTest = function () {
        return $;
      }),
      (this.setScissorTest = function (S) {
        ve.setScissorTest(($ = S));
      }),
      (this.setOpaqueSort = function (S) {
        F = S;
      }),
      (this.setTransparentSort = function (S) {
        G = S;
      }),
      (this.getClearColor = function (S) {
        return S.copy(te.getClearColor());
      }),
      (this.setClearColor = function () {
        te.setClearColor.apply(te, arguments);
      }),
      (this.getClearAlpha = function () {
        return te.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        te.setClearAlpha.apply(te, arguments);
      }),
      (this.clear = function (S = !0, N = !0, H = !0) {
        let R = 0;
        S && (R |= 16384), N && (R |= 256), H && (R |= 1024), z.clear(R);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", fe, !1),
          t.removeEventListener("webglcontextrestored", be, !1),
          t.removeEventListener("webglcontextcreationerror", Le, !1),
          b.dispose(),
          _.dispose(),
          me.dispose(),
          We.dispose(),
          Ve.dispose(),
          Ne.dispose(),
          le.dispose(),
          de.dispose(),
          Be.dispose(),
          he.dispose(),
          he.removeEventListener("sessionstart", ge),
          he.removeEventListener("sessionend", ke),
          ie && (ie.dispose(), (ie = null)),
          He.stop();
      });
    function fe(S) {
      S.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (A = !0);
    }
    function be() {
      console.log("THREE.WebGLRenderer: Context Restored."), (A = !1);
      const S = Fe.autoReset,
        N = Z.enabled,
        H = Z.autoUpdate,
        R = Z.needsUpdate,
        X = Z.type;
      pe(),
        (Fe.autoReset = S),
        (Z.enabled = N),
        (Z.autoUpdate = H),
        (Z.needsUpdate = R),
        (Z.type = X);
    }
    function Le(S) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        S.statusMessage
      );
    }
    function qe(S) {
      const N = S.target;
      N.removeEventListener("dispose", qe), C(N);
    }
    function C(S) {
      W(S), me.remove(S);
    }
    function W(S) {
      const N = me.get(S).programs;
      N !== void 0 &&
        (N.forEach(function (H) {
          Be.releaseProgram(H);
        }),
        S.isShaderMaterial && Be.releaseShaderCache(S));
    }
    (this.renderBufferDirect = function (S, N, H, R, X, _e) {
      N === null && (N = ae);
      const Se = X.isMesh && X.matrixWorld.determinant() < 0,
        we = mo(S, N, H, R, X);
      ve.setMaterial(R, Se);
      let Ae = H.index,
        Pe = 1;
      R.wireframe === !0 && ((Ae = Xe.getWireframeAttribute(H)), (Pe = 2));
      const Re = H.drawRange,
        De = H.attributes.position;
      let Oe = Re.start * Pe,
        lt = (Re.start + Re.count) * Pe;
      _e !== null &&
        ((Oe = Math.max(Oe, _e.start * Pe)),
        (lt = Math.min(lt, (_e.start + _e.count) * Pe))),
        Ae !== null
          ? ((Oe = Math.max(Oe, 0)), (lt = Math.min(lt, Ae.count)))
          : De != null &&
            ((Oe = Math.max(Oe, 0)), (lt = Math.min(lt, De.count)));
      const Ct = lt - Oe;
      if (Ct < 0 || Ct === 1 / 0) return;
      le.setup(X, R, we, H, Ae);
      let hn,
        je = T;
      if (
        (Ae !== null && ((hn = Ye.get(Ae)), (je = q), je.setIndex(hn)),
        X.isMesh)
      )
        R.wireframe === !0
          ? (ve.setLineWidth(R.wireframeLinewidth * ce()), je.setMode(1))
          : je.setMode(4);
      else if (X.isLine) {
        let Ue = R.linewidth;
        Ue === void 0 && (Ue = 1),
          ve.setLineWidth(Ue * ce()),
          X.isLineSegments
            ? je.setMode(1)
            : X.isLineLoop
            ? je.setMode(2)
            : je.setMode(3);
      } else X.isPoints ? je.setMode(0) : X.isSprite && je.setMode(4);
      if (X.isInstancedMesh) je.renderInstances(Oe, Ct, X.count);
      else if (H.isInstancedBufferGeometry) {
        const Ue = H._maxInstanceCount !== void 0 ? H._maxInstanceCount : 1 / 0,
          sr = Math.min(H.instanceCount, Ue);
        je.renderInstances(Oe, Ct, sr);
      } else je.render(Oe, Ct);
    }),
      (this.compile = function (S, N) {
        function H(R, X, _e) {
          R.transparent === !0 && R.side === kt && R.forceSinglePass === !1
            ? ((R.side = pt),
              (R.needsUpdate = !0),
              Ai(R, X, _e),
              (R.side = ln),
              (R.needsUpdate = !0),
              Ai(R, X, _e),
              (R.side = kt))
            : Ai(R, X, _e);
        }
        (g = _.get(S)),
          g.init(),
          p.push(g),
          S.traverseVisible(function (R) {
            R.isLight &&
              R.layers.test(N.layers) &&
              (g.pushLight(R), R.castShadow && g.pushShadow(R));
          }),
          g.setupLights(l.useLegacyLights),
          S.traverse(function (R) {
            const X = R.material;
            if (X)
              if (Array.isArray(X))
                for (let _e = 0; _e < X.length; _e++) {
                  const Se = X[_e];
                  H(Se, S, R);
                }
              else H(X, S, R);
          }),
          p.pop(),
          (g = null);
      });
    let J = null;
    function ue(S) {
      J && J(S);
    }
    function ge() {
      He.stop();
    }
    function ke() {
      He.start();
    }
    const He = new $a();
    He.setAnimationLoop(ue),
      typeof self < "u" && He.setContext(self),
      (this.setAnimationLoop = function (S) {
        (J = S), he.setAnimationLoop(S), S === null ? He.stop() : He.start();
      }),
      he.addEventListener("sessionstart", ge),
      he.addEventListener("sessionend", ke),
      (this.render = function (S, N) {
        if (N !== void 0 && N.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
          return;
        }
        if (A === !0) return;
        S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(),
          N.parent === null &&
            N.matrixWorldAutoUpdate === !0 &&
            N.updateMatrixWorld(),
          he.enabled === !0 &&
            he.isPresenting === !0 &&
            (he.cameraAutoUpdate === !0 && he.updateCamera(N),
            (N = he.getCamera())),
          S.isScene === !0 && S.onBeforeRender(l, S, N, y),
          (g = _.get(S, p.length)),
          g.init(),
          p.push(g),
          V.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse),
          ne.setFromProjectionMatrix(V),
          (Me = this.localClippingEnabled),
          (Q = B.init(this.clippingPlanes, Me)),
          (m = b.get(S, v.length)),
          m.init(),
          v.push(m),
          st(S, N, 0, l.sortObjects),
          m.finish(),
          l.sortObjects === !0 && m.sort(F, G),
          Q === !0 && B.beginShadows();
        const H = g.state.shadowsArray;
        if (
          (Z.render(H, S, N),
          Q === !0 && B.endShadows(),
          this.info.autoReset === !0 && this.info.reset(),
          te.render(m, S),
          g.setupLights(l.useLegacyLights),
          N.isArrayCamera)
        ) {
          const R = N.cameras;
          for (let X = 0, _e = R.length; X < _e; X++) {
            const Se = R[X];
            en(m, S, Se, Se.viewport);
          }
        } else en(m, S, N);
        y !== null &&
          (Ee.updateMultisampleRenderTarget(y), Ee.updateRenderTargetMipmap(y)),
          S.isScene === !0 && S.onAfterRender(l, S, N),
          le.resetDefaultState(),
          (L = -1),
          (D = null),
          p.pop(),
          p.length > 0 ? (g = p[p.length - 1]) : (g = null),
          v.pop(),
          v.length > 0 ? (m = v[v.length - 1]) : (m = null);
      });
    function st(S, N, H, R) {
      if (S.visible === !1) return;
      if (S.layers.test(N.layers)) {
        if (S.isGroup) H = S.renderOrder;
        else if (S.isLOD) S.autoUpdate === !0 && S.update(N);
        else if (S.isLight) g.pushLight(S), S.castShadow && g.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || ne.intersectsSprite(S)) {
            R && j.setFromMatrixPosition(S.matrixWorld).applyMatrix4(V);
            const Se = Ne.update(S),
              we = S.material;
            we.visible && m.push(S, Se, we, H, j.z, null);
          }
        } else if (
          (S.isMesh || S.isLine || S.isPoints) &&
          (S.isSkinnedMesh &&
            S.skeleton.frame !== Fe.render.frame &&
            (S.skeleton.update(), (S.skeleton.frame = Fe.render.frame)),
          !S.frustumCulled || ne.intersectsObject(S))
        ) {
          R && j.setFromMatrixPosition(S.matrixWorld).applyMatrix4(V);
          const Se = Ne.update(S),
            we = S.material;
          if (Array.isArray(we)) {
            const Ae = Se.groups;
            for (let Pe = 0, Re = Ae.length; Pe < Re; Pe++) {
              const De = Ae[Pe],
                Oe = we[De.materialIndex];
              Oe && Oe.visible && m.push(S, Se, Oe, H, j.z, De);
            }
          } else we.visible && m.push(S, Se, we, H, j.z, null);
        }
      }
      const _e = S.children;
      for (let Se = 0, we = _e.length; Se < we; Se++) st(_e[Se], N, H, R);
    }
    function en(S, N, H, R) {
      const X = S.opaque,
        _e = S.transmissive,
        Se = S.transparent;
      g.setupLightsView(H),
        Q === !0 && B.setGlobalState(l.clippingPlanes, H),
        _e.length > 0 && $e(X, _e, N, H),
        R && ve.viewport(I.copy(R)),
        X.length > 0 && St(X, N, H),
        _e.length > 0 && St(_e, N, H),
        Se.length > 0 && St(Se, N, H),
        ve.buffers.depth.setTest(!0),
        ve.buffers.depth.setMask(!0),
        ve.buffers.color.setMask(!0),
        ve.setPolygonOffset(!1);
    }
    function $e(S, N, H, R) {
      if (ie === null) {
        const we = re.isWebGL2;
        ie = new wn(1024, 1024, {
          generateMipmaps: !0,
          type: xe.has("EXT_color_buffer_half_float") ? mi : yn,
          minFilter: pi,
          samples: we && a === !0 ? 4 : 0,
        });
      }
      const X = l.getRenderTarget();
      l.setRenderTarget(ie), l.clear();
      const _e = l.toneMapping;
      (l.toneMapping = Kt),
        St(S, H, R),
        Ee.updateMultisampleRenderTarget(ie),
        Ee.updateRenderTargetMipmap(ie);
      let Se = !1;
      for (let we = 0, Ae = N.length; we < Ae; we++) {
        const Pe = N[we],
          Re = Pe.object,
          De = Pe.geometry,
          Oe = Pe.material,
          lt = Pe.group;
        if (Oe.side === kt && Re.layers.test(R.layers)) {
          const Ct = Oe.side;
          (Oe.side = pt),
            (Oe.needsUpdate = !0),
            Nt(Re, H, R, De, Oe, lt),
            (Oe.side = Ct),
            (Oe.needsUpdate = !0),
            (Se = !0);
        }
      }
      Se === !0 &&
        (Ee.updateMultisampleRenderTarget(ie), Ee.updateRenderTargetMipmap(ie)),
        l.setRenderTarget(X),
        (l.toneMapping = _e);
    }
    function St(S, N, H) {
      const R = N.isScene === !0 ? N.overrideMaterial : null;
      for (let X = 0, _e = S.length; X < _e; X++) {
        const Se = S[X],
          we = Se.object,
          Ae = Se.geometry,
          Pe = R === null ? Se.material : R,
          Re = Se.group;
        we.layers.test(H.layers) && Nt(we, N, H, Ae, Pe, Re);
      }
    }
    function Nt(S, N, H, R, X, _e) {
      S.onBeforeRender(l, N, H, R, X, _e),
        S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse, S.matrixWorld),
        S.normalMatrix.getNormalMatrix(S.modelViewMatrix),
        X.onBeforeRender(l, N, H, R, S, _e),
        X.transparent === !0 && X.side === kt && X.forceSinglePass === !1
          ? ((X.side = pt),
            (X.needsUpdate = !0),
            l.renderBufferDirect(H, N, R, X, S, _e),
            (X.side = ln),
            (X.needsUpdate = !0),
            l.renderBufferDirect(H, N, R, X, S, _e),
            (X.side = kt))
          : l.renderBufferDirect(H, N, R, X, S, _e),
        S.onAfterRender(l, N, H, R, X, _e);
    }
    function Ai(S, N, H) {
      N.isScene !== !0 && (N = ae);
      const R = me.get(S),
        X = g.state.lights,
        _e = g.state.shadowsArray,
        Se = X.state.version,
        we = Be.getParameters(S, X.state, _e, N, H),
        Ae = Be.getProgramCacheKey(we);
      let Pe = R.programs;
      (R.environment = S.isMeshStandardMaterial ? N.environment : null),
        (R.fog = N.fog),
        (R.envMap = (S.isMeshStandardMaterial ? Ve : We).get(
          S.envMap || R.environment
        )),
        Pe === void 0 &&
          (S.addEventListener("dispose", qe),
          (Pe = new Map()),
          (R.programs = Pe));
      let Re = Pe.get(Ae);
      if (Re !== void 0) {
        if (R.currentProgram === Re && R.lightsStateVersion === Se)
          return ns(S, we), Re;
      } else
        (we.uniforms = Be.getUniforms(S)),
          S.onBuild(H, we, l),
          S.onBeforeCompile(we, l),
          (Re = Be.acquireProgram(we, Ae)),
          Pe.set(Ae, Re),
          (R.uniforms = we.uniforms);
      const De = R.uniforms;
      ((!S.isShaderMaterial && !S.isRawShaderMaterial) || S.clipping === !0) &&
        (De.clippingPlanes = B.uniform),
        ns(S, we),
        (R.needsLights = _o(S)),
        (R.lightsStateVersion = Se),
        R.needsLights &&
          ((De.ambientLightColor.value = X.state.ambient),
          (De.lightProbe.value = X.state.probe),
          (De.directionalLights.value = X.state.directional),
          (De.directionalLightShadows.value = X.state.directionalShadow),
          (De.spotLights.value = X.state.spot),
          (De.spotLightShadows.value = X.state.spotShadow),
          (De.rectAreaLights.value = X.state.rectArea),
          (De.ltc_1.value = X.state.rectAreaLTC1),
          (De.ltc_2.value = X.state.rectAreaLTC2),
          (De.pointLights.value = X.state.point),
          (De.pointLightShadows.value = X.state.pointShadow),
          (De.hemisphereLights.value = X.state.hemi),
          (De.directionalShadowMap.value = X.state.directionalShadowMap),
          (De.directionalShadowMatrix.value = X.state.directionalShadowMatrix),
          (De.spotShadowMap.value = X.state.spotShadowMap),
          (De.spotLightMatrix.value = X.state.spotLightMatrix),
          (De.spotLightMap.value = X.state.spotLightMap),
          (De.pointShadowMap.value = X.state.pointShadowMap),
          (De.pointShadowMatrix.value = X.state.pointShadowMatrix));
      const Oe = Re.getUniforms(),
        lt = Yi.seqWithValue(Oe.seq, De);
      return (R.currentProgram = Re), (R.uniformsList = lt), Re;
    }
    function ns(S, N) {
      const H = me.get(S);
      (H.outputEncoding = N.outputEncoding),
        (H.instancing = N.instancing),
        (H.skinning = N.skinning),
        (H.morphTargets = N.morphTargets),
        (H.morphNormals = N.morphNormals),
        (H.morphColors = N.morphColors),
        (H.morphTargetsCount = N.morphTargetsCount),
        (H.numClippingPlanes = N.numClippingPlanes),
        (H.numIntersection = N.numClipIntersection),
        (H.vertexAlphas = N.vertexAlphas),
        (H.vertexTangents = N.vertexTangents),
        (H.toneMapping = N.toneMapping);
    }
    function mo(S, N, H, R, X) {
      N.isScene !== !0 && (N = ae), Ee.resetTextureUnits();
      const _e = N.fog,
        Se = R.isMeshStandardMaterial ? N.environment : null,
        we =
          y === null
            ? l.outputEncoding
            : y.isXRRenderTarget === !0
            ? y.texture.encoding
            : bn,
        Ae = (R.isMeshStandardMaterial ? Ve : We).get(R.envMap || Se),
        Pe =
          R.vertexColors === !0 &&
          !!H.attributes.color &&
          H.attributes.color.itemSize === 4,
        Re = !!R.normalMap && !!H.attributes.tangent,
        De = !!H.morphAttributes.position,
        Oe = !!H.morphAttributes.normal,
        lt = !!H.morphAttributes.color,
        Ct = R.toneMapped ? l.toneMapping : Kt,
        hn =
          H.morphAttributes.position ||
          H.morphAttributes.normal ||
          H.morphAttributes.color,
        je = hn !== void 0 ? hn.length : 0,
        Ue = me.get(R),
        sr = g.state.lights;
      if (Q === !0 && (Me === !0 || S !== D)) {
        const gt = S === D && R.id === L;
        B.setState(R, S, gt);
      }
      let et = !1;
      R.version === Ue.__version
        ? ((Ue.needsLights && Ue.lightsStateVersion !== sr.state.version) ||
            Ue.outputEncoding !== we ||
            (X.isInstancedMesh && Ue.instancing === !1) ||
            (!X.isInstancedMesh && Ue.instancing === !0) ||
            (X.isSkinnedMesh && Ue.skinning === !1) ||
            (!X.isSkinnedMesh && Ue.skinning === !0) ||
            Ue.envMap !== Ae ||
            (R.fog === !0 && Ue.fog !== _e) ||
            (Ue.numClippingPlanes !== void 0 &&
              (Ue.numClippingPlanes !== B.numPlanes ||
                Ue.numIntersection !== B.numIntersection)) ||
            Ue.vertexAlphas !== Pe ||
            Ue.vertexTangents !== Re ||
            Ue.morphTargets !== De ||
            Ue.morphNormals !== Oe ||
            Ue.morphColors !== lt ||
            Ue.toneMapping !== Ct ||
            (re.isWebGL2 === !0 && Ue.morphTargetsCount !== je)) &&
          (et = !0)
        : ((et = !0), (Ue.__version = R.version));
      let un = Ue.currentProgram;
      et === !0 && (un = Ai(R, N, X));
      let is = !1,
        si = !1,
        ar = !1;
      const ct = un.getUniforms(),
        dn = Ue.uniforms;
      if (
        (ve.useProgram(un.program) && ((is = !0), (si = !0), (ar = !0)),
        R.id !== L && ((L = R.id), (si = !0)),
        is || D !== S)
      ) {
        if (
          (ct.setValue(z, "projectionMatrix", S.projectionMatrix),
          re.logarithmicDepthBuffer &&
            ct.setValue(
              z,
              "logDepthBufFC",
              2 / (Math.log(S.far + 1) / Math.LN2)
            ),
          D !== S && ((D = S), (si = !0), (ar = !0)),
          R.isShaderMaterial ||
            R.isMeshPhongMaterial ||
            R.isMeshToonMaterial ||
            R.isMeshStandardMaterial ||
            R.envMap)
        ) {
          const gt = ct.map.cameraPosition;
          gt !== void 0 &&
            gt.setValue(z, j.setFromMatrixPosition(S.matrixWorld));
        }
        (R.isMeshPhongMaterial ||
          R.isMeshToonMaterial ||
          R.isMeshLambertMaterial ||
          R.isMeshBasicMaterial ||
          R.isMeshStandardMaterial ||
          R.isShaderMaterial) &&
          ct.setValue(z, "isOrthographic", S.isOrthographicCamera === !0),
          (R.isMeshPhongMaterial ||
            R.isMeshToonMaterial ||
            R.isMeshLambertMaterial ||
            R.isMeshBasicMaterial ||
            R.isMeshStandardMaterial ||
            R.isShaderMaterial ||
            R.isShadowMaterial ||
            X.isSkinnedMesh) &&
            ct.setValue(z, "viewMatrix", S.matrixWorldInverse);
      }
      if (X.isSkinnedMesh) {
        ct.setOptional(z, X, "bindMatrix"),
          ct.setOptional(z, X, "bindMatrixInverse");
        const gt = X.skeleton;
        gt &&
          (re.floatVertexTextures
            ? (gt.boneTexture === null && gt.computeBoneTexture(),
              ct.setValue(z, "boneTexture", gt.boneTexture, Ee),
              ct.setValue(z, "boneTextureSize", gt.boneTextureSize))
            : console.warn(
                "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
              ));
      }
      const or = H.morphAttributes;
      if (
        ((or.position !== void 0 ||
          or.normal !== void 0 ||
          (or.color !== void 0 && re.isWebGL2 === !0)) &&
          oe.update(X, H, un),
        (si || Ue.receiveShadow !== X.receiveShadow) &&
          ((Ue.receiveShadow = X.receiveShadow),
          ct.setValue(z, "receiveShadow", X.receiveShadow)),
        R.isMeshGouraudMaterial &&
          R.envMap !== null &&
          ((dn.envMap.value = Ae),
          (dn.flipEnvMap.value =
            Ae.isCubeTexture && Ae.isRenderTargetTexture === !1 ? -1 : 1)),
        si &&
          (ct.setValue(z, "toneMappingExposure", l.toneMappingExposure),
          Ue.needsLights && go(dn, ar),
          _e && R.fog === !0 && rt.refreshFogUniforms(dn, _e),
          rt.refreshMaterialUniforms(dn, R, P, k, ie),
          Yi.upload(z, Ue.uniformsList, dn, Ee)),
        R.isShaderMaterial &&
          R.uniformsNeedUpdate === !0 &&
          (Yi.upload(z, Ue.uniformsList, dn, Ee), (R.uniformsNeedUpdate = !1)),
        R.isSpriteMaterial && ct.setValue(z, "center", X.center),
        ct.setValue(z, "modelViewMatrix", X.modelViewMatrix),
        ct.setValue(z, "normalMatrix", X.normalMatrix),
        ct.setValue(z, "modelMatrix", X.matrixWorld),
        R.isShaderMaterial || R.isRawShaderMaterial)
      ) {
        const gt = R.uniformsGroups;
        for (let lr = 0, vo = gt.length; lr < vo; lr++)
          if (re.isWebGL2) {
            const rs = gt[lr];
            de.update(rs, un), de.bind(rs, un);
          } else
            console.warn(
              "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
            );
      }
      return un;
    }
    function go(S, N) {
      (S.ambientLightColor.needsUpdate = N),
        (S.lightProbe.needsUpdate = N),
        (S.directionalLights.needsUpdate = N),
        (S.directionalLightShadows.needsUpdate = N),
        (S.pointLights.needsUpdate = N),
        (S.pointLightShadows.needsUpdate = N),
        (S.spotLights.needsUpdate = N),
        (S.spotLightShadows.needsUpdate = N),
        (S.rectAreaLights.needsUpdate = N),
        (S.hemisphereLights.needsUpdate = N);
    }
    function _o(S) {
      return (
        S.isMeshLambertMaterial ||
        S.isMeshToonMaterial ||
        S.isMeshPhongMaterial ||
        S.isMeshStandardMaterial ||
        S.isShadowMaterial ||
        (S.isShaderMaterial && S.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return E;
    }),
      (this.getActiveMipmapLevel = function () {
        return M;
      }),
      (this.getRenderTarget = function () {
        return y;
      }),
      (this.setRenderTargetTextures = function (S, N, H) {
        (me.get(S.texture).__webglTexture = N),
          (me.get(S.depthTexture).__webglTexture = H);
        const R = me.get(S);
        (R.__hasExternalTextures = !0),
          R.__hasExternalTextures &&
            ((R.__autoAllocateDepthBuffer = H === void 0),
            R.__autoAllocateDepthBuffer ||
              (xe.has("WEBGL_multisampled_render_to_texture") === !0 &&
                (console.warn(
                  "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
                ),
                (R.__useRenderToTexture = !1))));
      }),
      (this.setRenderTargetFramebuffer = function (S, N) {
        const H = me.get(S);
        (H.__webglFramebuffer = N), (H.__useDefaultFramebuffer = N === void 0);
      }),
      (this.setRenderTarget = function (S, N = 0, H = 0) {
        (y = S), (E = N), (M = H);
        let R = !0,
          X = null,
          _e = !1,
          Se = !1;
        if (S) {
          const Ae = me.get(S);
          Ae.__useDefaultFramebuffer !== void 0
            ? (ve.bindFramebuffer(36160, null), (R = !1))
            : Ae.__webglFramebuffer === void 0
            ? Ee.setupRenderTarget(S)
            : Ae.__hasExternalTextures &&
              Ee.rebindTextures(
                S,
                me.get(S.texture).__webglTexture,
                me.get(S.depthTexture).__webglTexture
              );
          const Pe = S.texture;
          (Pe.isData3DTexture ||
            Pe.isDataArrayTexture ||
            Pe.isCompressedArrayTexture) &&
            (Se = !0);
          const Re = me.get(S).__webglFramebuffer;
          S.isWebGLCubeRenderTarget
            ? ((X = Re[N]), (_e = !0))
            : re.isWebGL2 && S.samples > 0 && Ee.useMultisampledRTT(S) === !1
            ? (X = me.get(S).__webglMultisampledFramebuffer)
            : (X = Re),
            I.copy(S.viewport),
            x.copy(S.scissor),
            (w = S.scissorTest);
        } else
          I.copy(K).multiplyScalar(P).floor(),
            x.copy(ee).multiplyScalar(P).floor(),
            (w = $);
        if (
          (ve.bindFramebuffer(36160, X) &&
            re.drawBuffers &&
            R &&
            ve.drawBuffers(S, X),
          ve.viewport(I),
          ve.scissor(x),
          ve.setScissorTest(w),
          _e)
        ) {
          const Ae = me.get(S.texture);
          z.framebufferTexture2D(36160, 36064, 34069 + N, Ae.__webglTexture, H);
        } else if (Se) {
          const Ae = me.get(S.texture),
            Pe = N || 0;
          z.framebufferTextureLayer(
            36160,
            36064,
            Ae.__webglTexture,
            H || 0,
            Pe
          );
        }
        L = -1;
      }),
      (this.readRenderTargetPixels = function (S, N, H, R, X, _e, Se) {
        if (!(S && S.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
          return;
        }
        let we = me.get(S).__webglFramebuffer;
        if ((S.isWebGLCubeRenderTarget && Se !== void 0 && (we = we[Se]), we)) {
          ve.bindFramebuffer(36160, we);
          try {
            const Ae = S.texture,
              Pe = Ae.format,
              Re = Ae.type;
            if (Pe !== Ut && O.convert(Pe) !== z.getParameter(35739)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
              return;
            }
            const De =
              Re === mi &&
              (xe.has("EXT_color_buffer_half_float") ||
                (re.isWebGL2 && xe.has("EXT_color_buffer_float")));
            if (
              Re !== yn &&
              O.convert(Re) !== z.getParameter(35738) &&
              !(
                Re === Mn &&
                (re.isWebGL2 ||
                  xe.has("OES_texture_float") ||
                  xe.has("WEBGL_color_buffer_float"))
              ) &&
              !De
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
              return;
            }
            N >= 0 &&
              N <= S.width - R &&
              H >= 0 &&
              H <= S.height - X &&
              z.readPixels(N, H, R, X, O.convert(Pe), O.convert(Re), _e);
          } finally {
            const Ae = y !== null ? me.get(y).__webglFramebuffer : null;
            ve.bindFramebuffer(36160, Ae);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (S, N, H = 0) {
        const R = Math.pow(2, -H),
          X = Math.floor(N.image.width * R),
          _e = Math.floor(N.image.height * R);
        Ee.setTexture2D(N, 0),
          z.copyTexSubImage2D(3553, H, 0, 0, S.x, S.y, X, _e),
          ve.unbindTexture();
      }),
      (this.copyTextureToTexture = function (S, N, H, R = 0) {
        const X = N.image.width,
          _e = N.image.height,
          Se = O.convert(H.format),
          we = O.convert(H.type);
        Ee.setTexture2D(H, 0),
          z.pixelStorei(37440, H.flipY),
          z.pixelStorei(37441, H.premultiplyAlpha),
          z.pixelStorei(3317, H.unpackAlignment),
          N.isDataTexture
            ? z.texSubImage2D(3553, R, S.x, S.y, X, _e, Se, we, N.image.data)
            : N.isCompressedTexture
            ? z.compressedTexSubImage2D(
                3553,
                R,
                S.x,
                S.y,
                N.mipmaps[0].width,
                N.mipmaps[0].height,
                Se,
                N.mipmaps[0].data
              )
            : z.texSubImage2D(3553, R, S.x, S.y, Se, we, N.image),
          R === 0 && H.generateMipmaps && z.generateMipmap(3553),
          ve.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (S, N, H, R, X = 0) {
        if (l.isWebGL1Renderer) {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
          );
          return;
        }
        const _e = S.max.x - S.min.x + 1,
          Se = S.max.y - S.min.y + 1,
          we = S.max.z - S.min.z + 1,
          Ae = O.convert(R.format),
          Pe = O.convert(R.type);
        let Re;
        if (R.isData3DTexture) Ee.setTexture3D(R, 0), (Re = 32879);
        else if (R.isDataArrayTexture) Ee.setTexture2DArray(R, 0), (Re = 35866);
        else {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
          );
          return;
        }
        z.pixelStorei(37440, R.flipY),
          z.pixelStorei(37441, R.premultiplyAlpha),
          z.pixelStorei(3317, R.unpackAlignment);
        const De = z.getParameter(3314),
          Oe = z.getParameter(32878),
          lt = z.getParameter(3316),
          Ct = z.getParameter(3315),
          hn = z.getParameter(32877),
          je = H.isCompressedTexture ? H.mipmaps[0] : H.image;
        z.pixelStorei(3314, je.width),
          z.pixelStorei(32878, je.height),
          z.pixelStorei(3316, S.min.x),
          z.pixelStorei(3315, S.min.y),
          z.pixelStorei(32877, S.min.z),
          H.isDataTexture || H.isData3DTexture
            ? z.texSubImage3D(Re, X, N.x, N.y, N.z, _e, Se, we, Ae, Pe, je.data)
            : H.isCompressedArrayTexture
            ? (console.warn(
                "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
              ),
              z.compressedTexSubImage3D(
                Re,
                X,
                N.x,
                N.y,
                N.z,
                _e,
                Se,
                we,
                Ae,
                je.data
              ))
            : z.texSubImage3D(Re, X, N.x, N.y, N.z, _e, Se, we, Ae, Pe, je),
          z.pixelStorei(3314, De),
          z.pixelStorei(32878, Oe),
          z.pixelStorei(3316, lt),
          z.pixelStorei(3315, Ct),
          z.pixelStorei(32877, hn),
          X === 0 && R.generateMipmaps && z.generateMipmap(Re),
          ve.unbindTexture();
      }),
      (this.initTexture = function (S) {
        S.isCubeTexture
          ? Ee.setTextureCube(S, 0)
          : S.isData3DTexture
          ? Ee.setTexture3D(S, 0)
          : S.isDataArrayTexture || S.isCompressedArrayTexture
          ? Ee.setTexture2DArray(S, 0)
          : Ee.setTexture2D(S, 0),
          ve.unbindTexture();
      }),
      (this.resetState = function () {
        (E = 0), (M = 0), (y = null), ve.reset(), le.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get physicallyCorrectLights() {
    return (
      console.warn(
        "THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
      ),
      !this.useLegacyLights
    );
  }
  set physicallyCorrectLights(e) {
    console.warn(
      "THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
    ),
      (this.useLegacyLights = !e);
  }
}
class xf extends Qa {}
xf.prototype.isWebGL1Renderer = !0;
class Mf extends it {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      t
    );
  }
  get autoUpdate() {
    return (
      console.warn(
        "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
      ),
      this.matrixWorldAutoUpdate
    );
  }
  set autoUpdate(e) {
    console.warn(
      "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
    ),
      (this.matrixWorldAutoUpdate = e);
  }
}
class es extends cn {
  constructor(
    e = 1,
    t = 1,
    n = 1,
    i = 32,
    r = 1,
    o = !1,
    a = 0,
    h = Math.PI * 2
  ) {
    super(),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: n,
        radialSegments: i,
        heightSegments: r,
        openEnded: o,
        thetaStart: a,
        thetaLength: h,
      });
    const c = this;
    (i = Math.floor(i)), (r = Math.floor(r));
    const u = [],
      d = [],
      f = [],
      m = [];
    let g = 0;
    const v = [],
      p = n / 2;
    let l = 0;
    A(),
      o === !1 && (e > 0 && E(!0), t > 0 && E(!1)),
      this.setIndex(u),
      this.setAttribute("position", new Gt(d, 3)),
      this.setAttribute("normal", new Gt(f, 3)),
      this.setAttribute("uv", new Gt(m, 2));
    function A() {
      const M = new U(),
        y = new U();
      let L = 0;
      const D = (t - e) / n;
      for (let I = 0; I <= r; I++) {
        const x = [],
          w = I / r,
          Y = w * (t - e) + e;
        for (let k = 0; k <= i; k++) {
          const P = k / i,
            F = P * h + a,
            G = Math.sin(F),
            K = Math.cos(F);
          (y.x = Y * G),
            (y.y = -w * n + p),
            (y.z = Y * K),
            d.push(y.x, y.y, y.z),
            M.set(G, D, K).normalize(),
            f.push(M.x, M.y, M.z),
            m.push(P, 1 - w),
            x.push(g++);
        }
        v.push(x);
      }
      for (let I = 0; I < i; I++)
        for (let x = 0; x < r; x++) {
          const w = v[x][I],
            Y = v[x + 1][I],
            k = v[x + 1][I + 1],
            P = v[x][I + 1];
          u.push(w, Y, P), u.push(Y, k, P), (L += 6);
        }
      c.addGroup(l, L, 0), (l += L);
    }
    function E(M) {
      const y = g,
        L = new Ce(),
        D = new U();
      let I = 0;
      const x = M === !0 ? e : t,
        w = M === !0 ? 1 : -1;
      for (let k = 1; k <= i; k++)
        d.push(0, p * w, 0), f.push(0, w, 0), m.push(0.5, 0.5), g++;
      const Y = g;
      for (let k = 0; k <= i; k++) {
        const F = (k / i) * h + a,
          G = Math.cos(F),
          K = Math.sin(F);
        (D.x = x * K),
          (D.y = p * w),
          (D.z = x * G),
          d.push(D.x, D.y, D.z),
          f.push(0, w, 0),
          (L.x = G * 0.5 + 0.5),
          (L.y = K * 0.5 * w + 0.5),
          m.push(L.x, L.y),
          g++;
      }
      for (let k = 0; k < i; k++) {
        const P = y + k,
          F = Y + k;
        M === !0 ? u.push(F, F + 1, P) : u.push(F + 1, F, P), (I += 3);
      }
      c.addGroup(l, I, M === !0 ? 1 : 2), (l += I);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new es(
      e.radiusTop,
      e.radiusBottom,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class eo extends yi {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new ze(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new ze(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Ia),
      (this.normalScale = new Ce(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
const Ma = {
  enabled: !1,
  files: {},
  add: function (s, e) {
    this.enabled !== !1 && (this.files[s] = e);
  },
  get: function (s) {
    if (this.enabled !== !1) return this.files[s];
  },
  remove: function (s) {
    delete this.files[s];
  },
  clear: function () {
    this.files = {};
  },
};
class Sf {
  constructor(e, t, n) {
    const i = this;
    let r = !1,
      o = 0,
      a = 0,
      h;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (u) {
        a++, r === !1 && i.onStart !== void 0 && i.onStart(u, o, a), (r = !0);
      }),
      (this.itemEnd = function (u) {
        o++,
          i.onProgress !== void 0 && i.onProgress(u, o, a),
          o === a && ((r = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (u) {
        i.onError !== void 0 && i.onError(u);
      }),
      (this.resolveURL = function (u) {
        return h ? h(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return (h = u), this;
      }),
      (this.addHandler = function (u, d) {
        return c.push(u, d), this;
      }),
      (this.removeHandler = function (u) {
        const d = c.indexOf(u);
        return d !== -1 && c.splice(d, 2), this;
      }),
      (this.getHandler = function (u) {
        for (let d = 0, f = c.length; d < f; d += 2) {
          const m = c[d],
            g = c[d + 1];
          if ((m.global && (m.lastIndex = 0), m.test(u))) return g;
        }
        return null;
      });
  }
}
const yf = new Sf();
class to {
  constructor(e) {
    (this.manager = e !== void 0 ? e : yf),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
class bf extends to {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = this,
      o = Ma.get(e);
    if (o !== void 0)
      return (
        r.manager.itemStart(e),
        setTimeout(function () {
          t && t(o), r.manager.itemEnd(e);
        }, 0),
        o
      );
    const a = _i("img");
    function h() {
      u(), Ma.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(d) {
      u(), i && i(d), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function u() {
      a.removeEventListener("load", h, !1),
        a.removeEventListener("error", c, !1);
    }
    return (
      a.addEventListener("load", h, !1),
      a.addEventListener("error", c, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (a.crossOrigin = this.crossOrigin),
      r.manager.itemStart(e),
      (a.src = e),
      a
    );
  }
}
class no extends to {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new mt(),
      o = new bf(this.manager);
    return (
      o.setCrossOrigin(this.crossOrigin),
      o.setPath(this.path),
      o.load(
        e,
        function (a) {
          (r.image = a), (r.needsUpdate = !0), t !== void 0 && t(r);
        },
        n,
        i
      ),
      r
    );
  }
}
class io extends it {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new ze(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
const Br = new Ze(),
  Sa = new U(),
  ya = new U();
class wf {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Ce(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Ze()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Jr()),
      (this._frameExtents = new Ce(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new nt(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    Sa.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(Sa),
      ya.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(ya),
      t.updateMatrixWorld(),
      Br.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Br),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(Br);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class Ef extends wf {
  constructor() {
    super(new Ya(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class ro extends io {
  constructor(e, t) {
    super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(it.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new it()),
      (this.shadow = new Ef());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class Af extends io {
  constructor(e, t) {
    super(e, t), (this.isAmbientLight = !0), (this.type = "AmbientLight");
  }
}
class ba {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(dt(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: Kr } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = Kr));
const wa = { type: "change" },
  kr = { type: "start" },
  Ea = { type: "end" };
class Tf extends Tn {
  constructor(e, t) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = "none"),
      (this.enabled = !0),
      (this.target = new U()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: Cn.ROTATE,
        MIDDLE: Cn.DOLLY,
        RIGHT: Cn.PAN,
      }),
      (this.touches = { ONE: Ln.ROTATE, TWO: Ln.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return a.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return a.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (T) {
        T.addEventListener("keydown", Be), (this._domElementKeyEvents = T);
      }),
      (this.stopListenToKeyEvents = function () {
        this._domElementKeyEvents.removeEventListener("keydown", Be),
          (this._domElementKeyEvents = null);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(wa),
          n.update(),
          (r = i.NONE);
      }),
      (this.update = (function () {
        const T = new U(),
          q = new En().setFromUnitVectors(e.up, new U(0, 1, 0)),
          O = q.clone().invert(),
          le = new U(),
          de = new En(),
          pe = 2 * Math.PI;
        return function () {
          const fe = n.object.position;
          T.copy(fe).sub(n.target),
            T.applyQuaternion(q),
            a.setFromVector3(T),
            n.autoRotate && r === i.NONE && x(D()),
            n.enableDamping
              ? ((a.theta += h.theta * n.dampingFactor),
                (a.phi += h.phi * n.dampingFactor))
              : ((a.theta += h.theta), (a.phi += h.phi));
          let be = n.minAzimuthAngle,
            Le = n.maxAzimuthAngle;
          return (
            isFinite(be) &&
              isFinite(Le) &&
              (be < -Math.PI ? (be += pe) : be > Math.PI && (be -= pe),
              Le < -Math.PI ? (Le += pe) : Le > Math.PI && (Le -= pe),
              be <= Le
                ? (a.theta = Math.max(be, Math.min(Le, a.theta)))
                : (a.theta =
                    a.theta > (be + Le) / 2
                      ? Math.max(be, a.theta)
                      : Math.min(Le, a.theta))),
            (a.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, a.phi)
            )),
            a.makeSafe(),
            (a.radius *= c),
            (a.radius = Math.max(
              n.minDistance,
              Math.min(n.maxDistance, a.radius)
            )),
            n.enableDamping === !0
              ? n.target.addScaledVector(u, n.dampingFactor)
              : n.target.add(u),
            T.setFromSpherical(a),
            T.applyQuaternion(O),
            fe.copy(n.target).add(T),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((h.theta *= 1 - n.dampingFactor),
                (h.phi *= 1 - n.dampingFactor),
                u.multiplyScalar(1 - n.dampingFactor))
              : (h.set(0, 0, 0), u.set(0, 0, 0)),
            (c = 1),
            d ||
            le.distanceToSquared(n.object.position) > o ||
            8 * (1 - de.dot(n.object.quaternion)) > o
              ? (n.dispatchEvent(wa),
                le.copy(n.object.position),
                de.copy(n.object.quaternion),
                (d = !1),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", _),
          n.domElement.removeEventListener("pointerdown", Ee),
          n.domElement.removeEventListener("pointercancel", Ve),
          n.domElement.removeEventListener("wheel", Ne),
          n.domElement.removeEventListener("pointermove", We),
          n.domElement.removeEventListener("pointerup", Ve),
          n._domElementKeyEvents !== null &&
            (n._domElementKeyEvents.removeEventListener("keydown", Be),
            (n._domElementKeyEvents = null));
      });
    const n = this,
      i = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let r = i.NONE;
    const o = 1e-6,
      a = new ba(),
      h = new ba();
    let c = 1;
    const u = new U();
    let d = !1;
    const f = new Ce(),
      m = new Ce(),
      g = new Ce(),
      v = new Ce(),
      p = new Ce(),
      l = new Ce(),
      A = new Ce(),
      E = new Ce(),
      M = new Ce(),
      y = [],
      L = {};
    function D() {
      return ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function I() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function x(T) {
      h.theta -= T;
    }
    function w(T) {
      h.phi -= T;
    }
    const Y = (function () {
        const T = new U();
        return function (O, le) {
          T.setFromMatrixColumn(le, 0), T.multiplyScalar(-O), u.add(T);
        };
      })(),
      k = (function () {
        const T = new U();
        return function (O, le) {
          n.screenSpacePanning === !0
            ? T.setFromMatrixColumn(le, 1)
            : (T.setFromMatrixColumn(le, 0), T.crossVectors(n.object.up, T)),
            T.multiplyScalar(O),
            u.add(T);
        };
      })(),
      P = (function () {
        const T = new U();
        return function (O, le) {
          const de = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const pe = n.object.position;
            T.copy(pe).sub(n.target);
            let he = T.length();
            (he *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              Y((2 * O * he) / de.clientHeight, n.object.matrix),
              k((2 * le * he) / de.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? (Y(
                  (O * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    de.clientWidth,
                  n.object.matrix
                ),
                k(
                  (le * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    de.clientHeight,
                  n.object.matrix
                ))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                ),
                (n.enablePan = !1));
        };
      })();
    function F(T) {
      n.object.isPerspectiveCamera
        ? (c /= T)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom * T)
          )),
          n.object.updateProjectionMatrix(),
          (d = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function G(T) {
      n.object.isPerspectiveCamera
        ? (c *= T)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom / T)
          )),
          n.object.updateProjectionMatrix(),
          (d = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function K(T) {
      f.set(T.clientX, T.clientY);
    }
    function ee(T) {
      A.set(T.clientX, T.clientY);
    }
    function $(T) {
      v.set(T.clientX, T.clientY);
    }
    function ne(T) {
      m.set(T.clientX, T.clientY),
        g.subVectors(m, f).multiplyScalar(n.rotateSpeed);
      const q = n.domElement;
      x((2 * Math.PI * g.x) / q.clientHeight),
        w((2 * Math.PI * g.y) / q.clientHeight),
        f.copy(m),
        n.update();
    }
    function Q(T) {
      E.set(T.clientX, T.clientY),
        M.subVectors(E, A),
        M.y > 0 ? F(I()) : M.y < 0 && G(I()),
        A.copy(E),
        n.update();
    }
    function Me(T) {
      p.set(T.clientX, T.clientY),
        l.subVectors(p, v).multiplyScalar(n.panSpeed),
        P(l.x, l.y),
        v.copy(p),
        n.update();
    }
    function ie(T) {
      T.deltaY < 0 ? G(I()) : T.deltaY > 0 && F(I()), n.update();
    }
    function V(T) {
      let q = !1;
      switch (T.code) {
        case n.keys.UP:
          T.ctrlKey || T.metaKey || T.shiftKey
            ? w((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : P(0, n.keyPanSpeed),
            (q = !0);
          break;
        case n.keys.BOTTOM:
          T.ctrlKey || T.metaKey || T.shiftKey
            ? w((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : P(0, -n.keyPanSpeed),
            (q = !0);
          break;
        case n.keys.LEFT:
          T.ctrlKey || T.metaKey || T.shiftKey
            ? x((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : P(n.keyPanSpeed, 0),
            (q = !0);
          break;
        case n.keys.RIGHT:
          T.ctrlKey || T.metaKey || T.shiftKey
            ? x((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : P(-n.keyPanSpeed, 0),
            (q = !0);
          break;
      }
      q && (T.preventDefault(), n.update());
    }
    function j() {
      if (y.length === 1) f.set(y[0].pageX, y[0].pageY);
      else {
        const T = 0.5 * (y[0].pageX + y[1].pageX),
          q = 0.5 * (y[0].pageY + y[1].pageY);
        f.set(T, q);
      }
    }
    function ae() {
      if (y.length === 1) v.set(y[0].pageX, y[0].pageY);
      else {
        const T = 0.5 * (y[0].pageX + y[1].pageX),
          q = 0.5 * (y[0].pageY + y[1].pageY);
        v.set(T, q);
      }
    }
    function ce() {
      const T = y[0].pageX - y[1].pageX,
        q = y[0].pageY - y[1].pageY,
        O = Math.sqrt(T * T + q * q);
      A.set(0, O);
    }
    function z() {
      n.enableZoom && ce(), n.enablePan && ae();
    }
    function ye() {
      n.enableZoom && ce(), n.enableRotate && j();
    }
    function xe(T) {
      if (y.length == 1) m.set(T.pageX, T.pageY);
      else {
        const O = oe(T),
          le = 0.5 * (T.pageX + O.x),
          de = 0.5 * (T.pageY + O.y);
        m.set(le, de);
      }
      g.subVectors(m, f).multiplyScalar(n.rotateSpeed);
      const q = n.domElement;
      x((2 * Math.PI * g.x) / q.clientHeight),
        w((2 * Math.PI * g.y) / q.clientHeight),
        f.copy(m);
    }
    function re(T) {
      if (y.length === 1) p.set(T.pageX, T.pageY);
      else {
        const q = oe(T),
          O = 0.5 * (T.pageX + q.x),
          le = 0.5 * (T.pageY + q.y);
        p.set(O, le);
      }
      l.subVectors(p, v).multiplyScalar(n.panSpeed), P(l.x, l.y), v.copy(p);
    }
    function ve(T) {
      const q = oe(T),
        O = T.pageX - q.x,
        le = T.pageY - q.y,
        de = Math.sqrt(O * O + le * le);
      E.set(0, de),
        M.set(0, Math.pow(E.y / A.y, n.zoomSpeed)),
        F(M.y),
        A.copy(E);
    }
    function Fe(T) {
      n.enableZoom && ve(T), n.enablePan && re(T);
    }
    function me(T) {
      n.enableZoom && ve(T), n.enableRotate && xe(T);
    }
    function Ee(T) {
      n.enabled !== !1 &&
        (y.length === 0 &&
          (n.domElement.setPointerCapture(T.pointerId),
          n.domElement.addEventListener("pointermove", We),
          n.domElement.addEventListener("pointerup", Ve)),
        B(T),
        T.pointerType === "touch" ? rt(T) : Ye(T));
    }
    function We(T) {
      n.enabled !== !1 && (T.pointerType === "touch" ? b(T) : Xe(T));
    }
    function Ve(T) {
      Z(T),
        y.length === 0 &&
          (n.domElement.releasePointerCapture(T.pointerId),
          n.domElement.removeEventListener("pointermove", We),
          n.domElement.removeEventListener("pointerup", Ve)),
        n.dispatchEvent(Ea),
        (r = i.NONE);
    }
    function Ye(T) {
      let q;
      switch (T.button) {
        case 0:
          q = n.mouseButtons.LEFT;
          break;
        case 1:
          q = n.mouseButtons.MIDDLE;
          break;
        case 2:
          q = n.mouseButtons.RIGHT;
          break;
        default:
          q = -1;
      }
      switch (q) {
        case Cn.DOLLY:
          if (n.enableZoom === !1) return;
          ee(T), (r = i.DOLLY);
          break;
        case Cn.ROTATE:
          if (T.ctrlKey || T.metaKey || T.shiftKey) {
            if (n.enablePan === !1) return;
            $(T), (r = i.PAN);
          } else {
            if (n.enableRotate === !1) return;
            K(T), (r = i.ROTATE);
          }
          break;
        case Cn.PAN:
          if (T.ctrlKey || T.metaKey || T.shiftKey) {
            if (n.enableRotate === !1) return;
            K(T), (r = i.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            $(T), (r = i.PAN);
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(kr);
    }
    function Xe(T) {
      switch (r) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          ne(T);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          Q(T);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          Me(T);
          break;
      }
    }
    function Ne(T) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        r !== i.NONE ||
        (T.preventDefault(), n.dispatchEvent(kr), ie(T), n.dispatchEvent(Ea));
    }
    function Be(T) {
      n.enabled === !1 || n.enablePan === !1 || V(T);
    }
    function rt(T) {
      switch ((te(T), y.length)) {
        case 1:
          switch (n.touches.ONE) {
            case Ln.ROTATE:
              if (n.enableRotate === !1) return;
              j(), (r = i.TOUCH_ROTATE);
              break;
            case Ln.PAN:
              if (n.enablePan === !1) return;
              ae(), (r = i.TOUCH_PAN);
              break;
            default:
              r = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Ln.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              z(), (r = i.TOUCH_DOLLY_PAN);
              break;
            case Ln.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              ye(), (r = i.TOUCH_DOLLY_ROTATE);
              break;
            default:
              r = i.NONE;
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(kr);
    }
    function b(T) {
      switch ((te(T), r)) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          xe(T), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          re(T), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          Fe(T), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          me(T), n.update();
          break;
        default:
          r = i.NONE;
      }
    }
    function _(T) {
      n.enabled !== !1 && T.preventDefault();
    }
    function B(T) {
      y.push(T);
    }
    function Z(T) {
      delete L[T.pointerId];
      for (let q = 0; q < y.length; q++)
        if (y[q].pointerId == T.pointerId) {
          y.splice(q, 1);
          return;
        }
    }
    function te(T) {
      let q = L[T.pointerId];
      q === void 0 && ((q = new Ce()), (L[T.pointerId] = q)),
        q.set(T.pageX, T.pageY);
    }
    function oe(T) {
      const q = T.pointerId === y[0].pointerId ? y[1] : y[0];
      return L[q.pointerId];
    }
    n.domElement.addEventListener("contextmenu", _),
      n.domElement.addEventListener("pointerdown", Ee),
      n.domElement.addEventListener("pointercancel", Ve),
      n.domElement.addEventListener("wheel", Ne, { passive: !1 }),
      this.update();
  }
}
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */ class Vt {
  constructor(e, t, n, i, r = "div") {
    (this.parent = e),
      (this.object = t),
      (this.property = n),
      (this._disabled = !1),
      (this._hidden = !1),
      (this.initialValue = this.getValue()),
      (this.domElement = document.createElement("div")),
      this.domElement.classList.add("controller"),
      this.domElement.classList.add(i),
      (this.$name = document.createElement("div")),
      this.$name.classList.add("name"),
      (Vt.nextNameID = Vt.nextNameID || 0),
      (this.$name.id = `lil-gui-name-${++Vt.nextNameID}`),
      (this.$widget = document.createElement(r)),
      this.$widget.classList.add("widget"),
      (this.$disable = this.$widget),
      this.domElement.appendChild(this.$name),
      this.domElement.appendChild(this.$widget),
      this.parent.children.push(this),
      this.parent.controllers.push(this),
      this.parent.$children.appendChild(this.domElement),
      (this._listenCallback = this._listenCallback.bind(this)),
      this.name(n);
  }
  name(e) {
    return (this._name = e), (this.$name.innerHTML = e), this;
  }
  onChange(e) {
    return (this._onChange = e), this;
  }
  _callOnChange() {
    this.parent._callOnChange(this),
      this._onChange !== void 0 && this._onChange.call(this, this.getValue()),
      (this._changed = !0);
  }
  onFinishChange(e) {
    return (this._onFinishChange = e), this;
  }
  _callOnFinishChange() {
    this._changed &&
      (this.parent._callOnFinishChange(this),
      this._onFinishChange !== void 0 &&
        this._onFinishChange.call(this, this.getValue())),
      (this._changed = !1);
  }
  reset() {
    return this.setValue(this.initialValue), this._callOnFinishChange(), this;
  }
  enable(e = !0) {
    return this.disable(!e);
  }
  disable(e = !0) {
    return e === this._disabled
      ? this
      : ((this._disabled = e),
        this.domElement.classList.toggle("disabled", e),
        this.$disable.toggleAttribute("disabled", e),
        this);
  }
  show(e = !0) {
    return (
      (this._hidden = !e),
      (this.domElement.style.display = this._hidden ? "none" : ""),
      this
    );
  }
  hide() {
    return this.show(!1);
  }
  options(e) {
    const t = this.parent.add(this.object, this.property, e);
    return t.name(this._name), this.destroy(), t;
  }
  min(e) {
    return this;
  }
  max(e) {
    return this;
  }
  step(e) {
    return this;
  }
  decimals(e) {
    return this;
  }
  listen(e = !0) {
    return (
      (this._listening = e),
      this._listenCallbackID !== void 0 &&
        (cancelAnimationFrame(this._listenCallbackID),
        (this._listenCallbackID = void 0)),
      this._listening && this._listenCallback(),
      this
    );
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    const e = this.save();
    e !== this._listenPrevValue && this.updateDisplay(),
      (this._listenPrevValue = e);
  }
  getValue() {
    return this.object[this.property];
  }
  setValue(e) {
    return (
      (this.object[this.property] = e),
      this._callOnChange(),
      this.updateDisplay(),
      this
    );
  }
  updateDisplay() {
    return this;
  }
  load(e) {
    return this.setValue(e), this._callOnFinishChange(), this;
  }
  save() {
    return this.getValue();
  }
  destroy() {
    this.listen(!1),
      this.parent.children.splice(this.parent.children.indexOf(this), 1),
      this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1),
      this.parent.$children.removeChild(this.domElement);
  }
}
class Cf extends Vt {
  constructor(e, t, n) {
    super(e, t, n, "boolean", "label"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "checkbox"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      this.$widget.appendChild(this.$input),
      this.$input.addEventListener("change", () => {
        this.setValue(this.$input.checked), this._callOnFinishChange();
      }),
      (this.$disable = this.$input),
      this.updateDisplay();
  }
  updateDisplay() {
    return (this.$input.checked = this.getValue()), this;
  }
}
function jr(s) {
  let e, t;
  return (
    (e = s.match(/(#|0x)?([a-f0-9]{6})/i))
      ? (t = e[2])
      : (e = s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))
      ? (t =
          parseInt(e[1]).toString(16).padStart(2, 0) +
          parseInt(e[2]).toString(16).padStart(2, 0) +
          parseInt(e[3]).toString(16).padStart(2, 0))
      : (e = s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) &&
        (t = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]),
    t ? "#" + t : !1
  );
}
const Lf = {
    isPrimitive: !0,
    match: (s) => typeof s == "string",
    fromHexString: jr,
    toHexString: jr,
  },
  vi = {
    isPrimitive: !0,
    match: (s) => typeof s == "number",
    fromHexString: (s) => parseInt(s.substring(1), 16),
    toHexString: (s) => "#" + s.toString(16).padStart(6, 0),
  },
  Pf = {
    isPrimitive: !1,
    match: (s) => Array.isArray(s),
    fromHexString(s, e, t = 1) {
      const n = vi.fromHexString(s);
      (e[0] = (((n >> 16) & 255) / 255) * t),
        (e[1] = (((n >> 8) & 255) / 255) * t),
        (e[2] = ((n & 255) / 255) * t);
    },
    toHexString([s, e, t], n = 1) {
      n = 255 / n;
      const i = ((s * n) << 16) ^ ((e * n) << 8) ^ ((t * n) << 0);
      return vi.toHexString(i);
    },
  },
  Rf = {
    isPrimitive: !1,
    match: (s) => Object(s) === s,
    fromHexString(s, e, t = 1) {
      const n = vi.fromHexString(s);
      (e.r = (((n >> 16) & 255) / 255) * t),
        (e.g = (((n >> 8) & 255) / 255) * t),
        (e.b = ((n & 255) / 255) * t);
    },
    toHexString({ r: s, g: e, b: t }, n = 1) {
      n = 255 / n;
      const i = ((s * n) << 16) ^ ((e * n) << 8) ^ ((t * n) << 0);
      return vi.toHexString(i);
    },
  },
  Df = [Lf, vi, Pf, Rf];
function If(s) {
  return Df.find((e) => e.match(s));
}
class Uf extends Vt {
  constructor(e, t, n, i) {
    super(e, t, n, "color"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "color"),
      this.$input.setAttribute("tabindex", -1),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      (this.$text = document.createElement("input")),
      this.$text.setAttribute("type", "text"),
      this.$text.setAttribute("spellcheck", "false"),
      this.$text.setAttribute("aria-labelledby", this.$name.id),
      (this.$display = document.createElement("div")),
      this.$display.classList.add("display"),
      this.$display.appendChild(this.$input),
      this.$widget.appendChild(this.$display),
      this.$widget.appendChild(this.$text),
      (this._format = If(this.initialValue)),
      (this._rgbScale = i),
      (this._initialValueHexString = this.save()),
      (this._textFocused = !1),
      this.$input.addEventListener("input", () => {
        this._setValueFromHexString(this.$input.value);
      }),
      this.$input.addEventListener("blur", () => {
        this._callOnFinishChange();
      }),
      this.$text.addEventListener("input", () => {
        const r = jr(this.$text.value);
        r && this._setValueFromHexString(r);
      }),
      this.$text.addEventListener("focus", () => {
        (this._textFocused = !0), this.$text.select();
      }),
      this.$text.addEventListener("blur", () => {
        (this._textFocused = !1),
          this.updateDisplay(),
          this._callOnFinishChange();
      }),
      (this.$disable = this.$text),
      this.updateDisplay();
  }
  reset() {
    return this._setValueFromHexString(this._initialValueHexString), this;
  }
  _setValueFromHexString(e) {
    if (this._format.isPrimitive) {
      const t = this._format.fromHexString(e);
      this.setValue(t);
    } else
      this._format.fromHexString(e, this.getValue(), this._rgbScale),
        this._callOnChange(),
        this.updateDisplay();
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(e) {
    return this._setValueFromHexString(e), this._callOnFinishChange(), this;
  }
  updateDisplay() {
    return (
      (this.$input.value = this._format.toHexString(
        this.getValue(),
        this._rgbScale
      )),
      this._textFocused || (this.$text.value = this.$input.value.substring(1)),
      (this.$display.style.backgroundColor = this.$input.value),
      this
    );
  }
}
class Gr extends Vt {
  constructor(e, t, n) {
    super(e, t, n, "function"),
      (this.$button = document.createElement("button")),
      this.$button.appendChild(this.$name),
      this.$widget.appendChild(this.$button),
      this.$button.addEventListener("click", (i) => {
        i.preventDefault(),
          this.getValue().call(this.object),
          this._callOnChange();
      }),
      this.$button.addEventListener("touchstart", () => {}, { passive: !0 }),
      (this.$disable = this.$button);
  }
}
class Nf extends Vt {
  constructor(e, t, n, i, r, o) {
    super(e, t, n, "number"), this._initInput(), this.min(i), this.max(r);
    const a = o !== void 0;
    this.step(a ? o : this._getImplicitStep(), a), this.updateDisplay();
  }
  decimals(e) {
    return (this._decimals = e), this.updateDisplay(), this;
  }
  min(e) {
    return (this._min = e), this._onUpdateMinMax(), this;
  }
  max(e) {
    return (this._max = e), this._onUpdateMinMax(), this;
  }
  step(e, t = !0) {
    return (this._step = e), (this._stepExplicit = t), this;
  }
  updateDisplay() {
    const e = this.getValue();
    if (this._hasSlider) {
      let t = (e - this._min) / (this._max - this._min);
      (t = Math.max(0, Math.min(t, 1))),
        (this.$fill.style.width = t * 100 + "%");
    }
    return (
      this._inputFocused ||
        (this.$input.value =
          this._decimals === void 0 ? e : e.toFixed(this._decimals)),
      this
    );
  }
  _initInput() {
    (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "number"),
      this.$input.setAttribute("step", "any"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      this.$widget.appendChild(this.$input),
      (this.$disable = this.$input);
    const e = () => {
        let l = parseFloat(this.$input.value);
        isNaN(l) ||
          (this._stepExplicit && (l = this._snap(l)),
          this.setValue(this._clamp(l)));
      },
      t = (l) => {
        const A = parseFloat(this.$input.value);
        isNaN(A) ||
          (this._snapClampSetValue(A + l),
          (this.$input.value = this.getValue()));
      },
      n = (l) => {
        l.code === "Enter" && this.$input.blur(),
          l.code === "ArrowUp" &&
            (l.preventDefault(), t(this._step * this._arrowKeyMultiplier(l))),
          l.code === "ArrowDown" &&
            (l.preventDefault(),
            t(this._step * this._arrowKeyMultiplier(l) * -1));
      },
      i = (l) => {
        this._inputFocused &&
          (l.preventDefault(), t(this._step * this._normalizeMouseWheel(l)));
      };
    let r = !1,
      o,
      a,
      h,
      c,
      u;
    const d = 5,
      f = (l) => {
        (o = l.clientX),
          (a = h = l.clientY),
          (r = !0),
          (c = this.getValue()),
          (u = 0),
          window.addEventListener("mousemove", m),
          window.addEventListener("mouseup", g);
      },
      m = (l) => {
        if (r) {
          const A = l.clientX - o,
            E = l.clientY - a;
          Math.abs(E) > d
            ? (l.preventDefault(),
              this.$input.blur(),
              (r = !1),
              this._setDraggingStyle(!0, "vertical"))
            : Math.abs(A) > d && g();
        }
        if (!r) {
          const A = l.clientY - h;
          (u -= A * this._step * this._arrowKeyMultiplier(l)),
            c + u > this._max
              ? (u = this._max - c)
              : c + u < this._min && (u = this._min - c),
            this._snapClampSetValue(c + u);
        }
        h = l.clientY;
      },
      g = () => {
        this._setDraggingStyle(!1, "vertical"),
          this._callOnFinishChange(),
          window.removeEventListener("mousemove", m),
          window.removeEventListener("mouseup", g);
      },
      v = () => {
        this._inputFocused = !0;
      },
      p = () => {
        (this._inputFocused = !1),
          this.updateDisplay(),
          this._callOnFinishChange();
      };
    this.$input.addEventListener("input", e),
      this.$input.addEventListener("keydown", n),
      this.$input.addEventListener("wheel", i, { passive: !1 }),
      this.$input.addEventListener("mousedown", f),
      this.$input.addEventListener("focus", v),
      this.$input.addEventListener("blur", p);
  }
  _initSlider() {
    (this._hasSlider = !0),
      (this.$slider = document.createElement("div")),
      this.$slider.classList.add("slider"),
      (this.$fill = document.createElement("div")),
      this.$fill.classList.add("fill"),
      this.$slider.appendChild(this.$fill),
      this.$widget.insertBefore(this.$slider, this.$input),
      this.domElement.classList.add("hasSlider");
    const e = (l, A, E, M, y) => ((l - A) / (E - A)) * (y - M) + M,
      t = (l) => {
        const A = this.$slider.getBoundingClientRect();
        let E = e(l, A.left, A.right, this._min, this._max);
        this._snapClampSetValue(E);
      },
      n = (l) => {
        this._setDraggingStyle(!0),
          t(l.clientX),
          window.addEventListener("mousemove", i),
          window.addEventListener("mouseup", r);
      },
      i = (l) => {
        t(l.clientX);
      },
      r = () => {
        this._callOnFinishChange(),
          this._setDraggingStyle(!1),
          window.removeEventListener("mousemove", i),
          window.removeEventListener("mouseup", r);
      };
    let o = !1,
      a,
      h;
    const c = (l) => {
        l.preventDefault(),
          this._setDraggingStyle(!0),
          t(l.touches[0].clientX),
          (o = !1);
      },
      u = (l) => {
        l.touches.length > 1 ||
          (this._hasScrollBar
            ? ((a = l.touches[0].clientX), (h = l.touches[0].clientY), (o = !0))
            : c(l),
          window.addEventListener("touchmove", d, { passive: !1 }),
          window.addEventListener("touchend", f));
      },
      d = (l) => {
        if (o) {
          const A = l.touches[0].clientX - a,
            E = l.touches[0].clientY - h;
          Math.abs(A) > Math.abs(E)
            ? c(l)
            : (window.removeEventListener("touchmove", d),
              window.removeEventListener("touchend", f));
        } else l.preventDefault(), t(l.touches[0].clientX);
      },
      f = () => {
        this._callOnFinishChange(),
          this._setDraggingStyle(!1),
          window.removeEventListener("touchmove", d),
          window.removeEventListener("touchend", f);
      },
      m = this._callOnFinishChange.bind(this),
      g = 400;
    let v;
    const p = (l) => {
      if (Math.abs(l.deltaX) < Math.abs(l.deltaY) && this._hasScrollBar) return;
      l.preventDefault();
      const E = this._normalizeMouseWheel(l) * this._step;
      this._snapClampSetValue(this.getValue() + E),
        (this.$input.value = this.getValue()),
        clearTimeout(v),
        (v = setTimeout(m, g));
    };
    this.$slider.addEventListener("mousedown", n),
      this.$slider.addEventListener("touchstart", u, { passive: !1 }),
      this.$slider.addEventListener("wheel", p, { passive: !1 });
  }
  _setDraggingStyle(e, t = "horizontal") {
    this.$slider && this.$slider.classList.toggle("active", e),
      document.body.classList.toggle("lil-gui-dragging", e),
      document.body.classList.toggle(`lil-gui-${t}`, e);
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
  }
  _onUpdateMinMax() {
    !this._hasSlider &&
      this._hasMin &&
      this._hasMax &&
      (this._stepExplicit || this.step(this._getImplicitStep(), !1),
      this._initSlider(),
      this.updateDisplay());
  }
  _normalizeMouseWheel(e) {
    let { deltaX: t, deltaY: n } = e;
    return (
      Math.floor(e.deltaY) !== e.deltaY &&
        e.wheelDelta &&
        ((t = 0),
        (n = -e.wheelDelta / 120),
        (n *= this._stepExplicit ? 1 : 10)),
      t + -n
    );
  }
  _arrowKeyMultiplier(e) {
    let t = this._stepExplicit ? 1 : 10;
    return e.shiftKey ? (t *= 10) : e.altKey && (t /= 10), t;
  }
  _snap(e) {
    const t = Math.round(e / this._step) * this._step;
    return parseFloat(t.toPrecision(15));
  }
  _clamp(e) {
    return (
      e < this._min && (e = this._min), e > this._max && (e = this._max), e
    );
  }
  _snapClampSetValue(e) {
    this.setValue(this._clamp(this._snap(e)));
  }
  get _hasScrollBar() {
    const e = this.parent.root.$children;
    return e.scrollHeight > e.clientHeight;
  }
  get _hasMin() {
    return this._min !== void 0;
  }
  get _hasMax() {
    return this._max !== void 0;
  }
}
class Ff extends Vt {
  constructor(e, t, n, i) {
    super(e, t, n, "option"),
      (this.$select = document.createElement("select")),
      this.$select.setAttribute("aria-labelledby", this.$name.id),
      (this.$display = document.createElement("div")),
      this.$display.classList.add("display"),
      (this._values = Array.isArray(i) ? i : Object.values(i)),
      (this._names = Array.isArray(i) ? i : Object.keys(i)),
      this._names.forEach((r) => {
        const o = document.createElement("option");
        (o.innerHTML = r), this.$select.appendChild(o);
      }),
      this.$select.addEventListener("change", () => {
        this.setValue(this._values[this.$select.selectedIndex]),
          this._callOnFinishChange();
      }),
      this.$select.addEventListener("focus", () => {
        this.$display.classList.add("focus");
      }),
      this.$select.addEventListener("blur", () => {
        this.$display.classList.remove("focus");
      }),
      this.$widget.appendChild(this.$select),
      this.$widget.appendChild(this.$display),
      (this.$disable = this.$select),
      this.updateDisplay();
  }
  updateDisplay() {
    const e = this.getValue(),
      t = this._values.indexOf(e);
    return (
      (this.$select.selectedIndex = t),
      (this.$display.innerHTML = t === -1 ? e : this._names[t]),
      this
    );
  }
}
class Of extends Vt {
  constructor(e, t, n) {
    super(e, t, n, "string"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "text"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      this.$input.addEventListener("input", () => {
        this.setValue(this.$input.value);
      }),
      this.$input.addEventListener("keydown", (i) => {
        i.code === "Enter" && this.$input.blur();
      }),
      this.$input.addEventListener("blur", () => {
        this._callOnFinishChange();
      }),
      this.$widget.appendChild(this.$input),
      (this.$disable = this.$input),
      this.updateDisplay();
  }
  updateDisplay() {
    return (this.$input.value = this.getValue()), this;
  }
}
const zf = `.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;
function Bf(s) {
  const e = document.createElement("style");
  e.innerHTML = s;
  const t = document.querySelector("head link[rel=stylesheet], head style");
  t ? document.head.insertBefore(e, t) : document.head.appendChild(e);
}
let Aa = !1;
class ts {
  constructor({
    parent: e,
    autoPlace: t = e === void 0,
    container: n,
    width: i,
    title: r = "Controls",
    closeFolders: o = !1,
    injectStyles: a = !0,
    touchStyles: h = !0,
  } = {}) {
    if (
      ((this.parent = e),
      (this.root = e ? e.root : this),
      (this.children = []),
      (this.controllers = []),
      (this.folders = []),
      (this._closed = !1),
      (this._hidden = !1),
      (this.domElement = document.createElement("div")),
      this.domElement.classList.add("lil-gui"),
      (this.$title = document.createElement("div")),
      this.$title.classList.add("title"),
      this.$title.setAttribute("role", "button"),
      this.$title.setAttribute("aria-expanded", !0),
      this.$title.setAttribute("tabindex", 0),
      this.$title.addEventListener("click", () =>
        this.openAnimated(this._closed)
      ),
      this.$title.addEventListener("keydown", (c) => {
        (c.code === "Enter" || c.code === "Space") &&
          (c.preventDefault(), this.$title.click());
      }),
      this.$title.addEventListener("touchstart", () => {}, { passive: !0 }),
      (this.$children = document.createElement("div")),
      this.$children.classList.add("children"),
      this.domElement.appendChild(this.$title),
      this.domElement.appendChild(this.$children),
      this.title(r),
      h && this.domElement.classList.add("allow-touch-styles"),
      this.parent)
    ) {
      this.parent.children.push(this),
        this.parent.folders.push(this),
        this.parent.$children.appendChild(this.domElement);
      return;
    }
    this.domElement.classList.add("root"),
      !Aa && a && (Bf(zf), (Aa = !0)),
      n
        ? n.appendChild(this.domElement)
        : t &&
          (this.domElement.classList.add("autoPlace"),
          document.body.appendChild(this.domElement)),
      i && this.domElement.style.setProperty("--width", i + "px"),
      (this._closeFolders = o),
      this.domElement.addEventListener("keydown", (c) => c.stopPropagation()),
      this.domElement.addEventListener("keyup", (c) => c.stopPropagation());
  }
  add(e, t, n, i, r) {
    if (Object(n) === n) return new Ff(this, e, t, n);
    const o = e[t];
    switch (typeof o) {
      case "number":
        return new Nf(this, e, t, n, i, r);
      case "boolean":
        return new Cf(this, e, t);
      case "string":
        return new Of(this, e, t);
      case "function":
        return new Gr(this, e, t);
    }
    console.error(
      `gui.add failed
	property:`,
      t,
      `
	object:`,
      e,
      `
	value:`,
      o
    );
  }
  addColor(e, t, n = 1) {
    return new Uf(this, e, t, n);
  }
  addFolder(e) {
    const t = new ts({ parent: this, title: e });
    return this.root._closeFolders && t.close(), t;
  }
  load(e, t = !0) {
    return (
      e.controllers &&
        this.controllers.forEach((n) => {
          n instanceof Gr ||
            (n._name in e.controllers && n.load(e.controllers[n._name]));
        }),
      t &&
        e.folders &&
        this.folders.forEach((n) => {
          n._title in e.folders && n.load(e.folders[n._title]);
        }),
      this
    );
  }
  save(e = !0) {
    const t = { controllers: {}, folders: {} };
    return (
      this.controllers.forEach((n) => {
        if (!(n instanceof Gr)) {
          if (n._name in t.controllers)
            throw new Error(
              `Cannot save GUI with duplicate property "${n._name}"`
            );
          t.controllers[n._name] = n.save();
        }
      }),
      e &&
        this.folders.forEach((n) => {
          if (n._title in t.folders)
            throw new Error(
              `Cannot save GUI with duplicate folder "${n._title}"`
            );
          t.folders[n._title] = n.save();
        }),
      t
    );
  }
  open(e = !0) {
    return (
      this._setClosed(!e),
      this.$title.setAttribute("aria-expanded", !this._closed),
      this.domElement.classList.toggle("closed", this._closed),
      this
    );
  }
  close() {
    return this.open(!1);
  }
  _setClosed(e) {
    this._closed !== e && ((this._closed = e), this._callOnOpenClose(this));
  }
  show(e = !0) {
    return (
      (this._hidden = !e),
      (this.domElement.style.display = this._hidden ? "none" : ""),
      this
    );
  }
  hide() {
    return this.show(!1);
  }
  openAnimated(e = !0) {
    return (
      this._setClosed(!e),
      this.$title.setAttribute("aria-expanded", !this._closed),
      requestAnimationFrame(() => {
        const t = this.$children.clientHeight;
        (this.$children.style.height = t + "px"),
          this.domElement.classList.add("transition");
        const n = (r) => {
          r.target === this.$children &&
            ((this.$children.style.height = ""),
            this.domElement.classList.remove("transition"),
            this.$children.removeEventListener("transitionend", n));
        };
        this.$children.addEventListener("transitionend", n);
        const i = e ? this.$children.scrollHeight : 0;
        this.domElement.classList.toggle("closed", !e),
          requestAnimationFrame(() => {
            this.$children.style.height = i + "px";
          });
      }),
      this
    );
  }
  title(e) {
    return (this._title = e), (this.$title.innerHTML = e), this;
  }
  reset(e = !0) {
    return (
      (e ? this.controllersRecursive() : this.controllers).forEach((n) =>
        n.reset()
      ),
      this
    );
  }
  onChange(e) {
    return (this._onChange = e), this;
  }
  _callOnChange(e) {
    this.parent && this.parent._callOnChange(e),
      this._onChange !== void 0 &&
        this._onChange.call(this, {
          object: e.object,
          property: e.property,
          value: e.getValue(),
          controller: e,
        });
  }
  onFinishChange(e) {
    return (this._onFinishChange = e), this;
  }
  _callOnFinishChange(e) {
    this.parent && this.parent._callOnFinishChange(e),
      this._onFinishChange !== void 0 &&
        this._onFinishChange.call(this, {
          object: e.object,
          property: e.property,
          value: e.getValue(),
          controller: e,
        });
  }
  onOpenClose(e) {
    return (this._onOpenClose = e), this;
  }
  _callOnOpenClose(e) {
    this.parent && this.parent._callOnOpenClose(e),
      this._onOpenClose !== void 0 && this._onOpenClose.call(this, e);
  }
  destroy() {
    this.parent &&
      (this.parent.children.splice(this.parent.children.indexOf(this), 1),
      this.parent.folders.splice(this.parent.folders.indexOf(this), 1)),
      this.domElement.parentElement &&
        this.domElement.parentElement.removeChild(this.domElement),
      Array.from(this.children).forEach((e) => e.destroy());
  }
  controllersRecursive() {
    let e = Array.from(this.controllers);
    return (
      this.folders.forEach((t) => {
        e = e.concat(t.controllersRecursive());
      }),
      e
    );
  }
  foldersRecursive() {
    let e = Array.from(this.folders);
    return (
      this.folders.forEach((t) => {
        e = e.concat(t.foldersRecursive());
      }),
      e
    );
  }
}
const kf = ts,
  Jt = new Mf(),
  Bt = { height: window.innerHeight, width: window.innerWidth },
  Ht = new wt(75, Bt.width / Bt.height);
Ht.name = "Main Camera";
Ht.position.x = 3.5115682455992854;
Ht.position.y = 2.5851319394986523;
Ht.position.z = 1.161308555846568;
Jt.add(Ht);
const Qi = new ro();
Qi.intensity = 0.9;
const er = new ro(),
  so = new Af();
so.intensity = 0.6;
console.log(Qi.position);
Qi.position.set(-2, 2, 0);
er.position.set(1, 1, 0);
er.target = new it(new U(3, -0.1, 0));
Jt.add(so);
Jt.add(Qi);
Jt.add(er);
Jt.add(er.target);
const bi = new no(),
  ao = bi.load(
    "/the_mysterious_table/table_textures/Stone_Path_007_basecolor.jpg"
  ),
  oo = bi.load(
    "/the_mysterious_table/table_textures/Stone_Path_007_normal.jpg"
  ),
  Gf = bi.load("/table_textures/Stone_Path_007_height.png"),
  lo = bi.load(
    "/the_mysterious_table/table_textures/Stone_Path_007_roughness.jpg"
  ),
  co = bi.load(
    "/the_mysterious_table/table_textures/Stone_Path_007_ambientOcclusion.jpg"
  ),
  Vf = [ao, oo, Gf, lo, co];
Vf.forEach((s) => {
  (s.wrapS = fi),
    (s.wrapT = fi),
    (s.offset.x = 0.68),
    (s.offset.y = 0.3),
    (s.repeat.x = 10),
    (s.repeat.y = 4);
});
const At = new eo();
At.map = ao;
At.metalness = 0.5;
At.roughness = 0.7;
At.normalMap = oo;
At.roughnessMap = lo;
const on = { x: 2, y: 0.2, z: 1.5 },
  Zt = { radius: 0.1, height: 0.5 },
  Hf = new ii(on.x, on.y, on.z),
  xi = new ft(Hf, At);
xi.geometry.setAttribute("uv2", new Et(xi.geometry.attributes.uv.array, 2));
xi.aoMap = co;
xi.aoMapIntensity = 5;
const tr = new es(Zt.radius, Zt.radius, Zt.height, 30),
  Qt = new ft(tr, At);
Qt.position.x = on.x / 2 - Zt.radius;
Qt.position.y = -(Zt.height / 2);
Qt.position.z = on.z / 2 - Zt.radius;
const wi = new ft(tr, At);
wi.position.x = -(on.x / 2) + Zt.radius;
wi.position.y = Qt.position.y;
wi.position.z = Qt.position.z;
const nr = new ft(tr, At);
nr.position.x = Qt.position.x;
nr.position.y = Qt.position.y;
nr.position.z = -(on.z / 2) + Zt.radius;
const ir = new ft(tr, At);
ir.position.x = wi.position.x;
ir.position.y = Qt.position.y;
ir.position.z = -(on.z / 2) + Zt.radius;
const ho = new di();
ho.add(xi, Qt, wi, nr, ir);
Jt.add(ho);
const Wf = new Zi(5, 5),
  rr = new no(),
  Xf = rr.load(
    "/the_mysterious_table/floor_textures/Concrete_Muddy_001_BaseColor.jpg"
  ),
  qf = rr.load(
    "/the_mysterious_table/floor_textures/Concrete_Muddy_001_Normal.jpg"
  ),
  $f = rr.load(
    "/the_mysterious_table/floor_textures/Concrete_Muddy_001_AmbientOcclusion.jpg"
  ),
  Yf = rr.load(
    "/the_mysterious_table/floor_textures/Concrete_Muddy_001_Roughness.jpg"
  );
console.time("floor update");
const Tt = new eo();
Tt.map = Xf;
Tt.roughness = 0.78;
Tt.metalness = 0.7;
Tt.side = kt;
Tt.normalMap = qf;
Tt.roughnessMap = Yf;
const ti = new ft(Wf, Tt);
ti.rotation.x = Math.PI / 2;
ti.position.y = -0.5;
ti.geometry.setAttribute("uv2", new Et(ti.geometry.attributes.uv.array, 2));
Tt.aoMap = $f;
Tt.aoMapIntensity = 5;
console.log(ti);
Jt.add(ti);
console.timeEnd("floor update");
const uo = document.querySelector("canvas.render"),
  fo = new Tf(Ht, uo);
fo.enableDamping = !0;
const ni = new Qa({ canvas: uo });
ni.setSize(Bt.width, Bt.height);
ni.render(Jt, Ht);
ni.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const po = () => {
  fo.update(), ni.render(Jt, Ht), window.requestAnimationFrame(po);
};
po();
window.addEventListener("resize", () => {
  (Bt.height = window.innerHeight),
    (Bt.width = window.innerWidth),
    (Ht.aspect = Bt.width / Bt.height),
    Ht.updateProjectionMatrix(),
    ni.setSize(Bt.width, Bt.height),
    ni.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
const Ei = new kf();
Ei.add(At, "metalness", 0, 10, 0.02).name("Table Metalness");
Ei.add(At, "roughness", 0, 1, 0.02).name("Table Roughness");
Ei.add(Tt, "metalness", 0, 10, 0.02).name("Floor Metalness");
Ei.add(Tt, "roughness", 0, 1, 0.02).name("Floor Roughness");
Ei.add(Tt, "aoMapIntensity", 0, 10, 0.01);
//# sourceMappingURL=index-dde68624.js.map
