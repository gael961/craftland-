// Craftland Tools — backend completo em JavaScript para Cloudflare Workers
// (port do core.py + app.py, sem dependências)
const T = {
 "MAP_IDS": {
  "Bermuda": 1,
  "Bermuda_Antigo": 39,
  "Kalahari": 4,
  "Nova_Terra": 22,
  "Solara": 29,
  "Ilha_da_Vitoria_50x50": 25,
  "Local_de_Origem_100x100": 10,
  "Cena_Vazia_2000x2000": 32
 },
 "AREAS": {
  "Bermuda": [
   [
    0,
    "Mapa Completo"
   ],
   [
    1,
    "Shipyard"
   ],
   [
    2,
    "Mill"
   ],
   [
    3,
    "Observatory"
   ],
   [
    4,
    "Peak"
   ],
   [
    5,
    "Rim Nam Village"
   ],
   [
    6,
    "Clock Tower"
   ],
   [
    7,
    "Mars Electric"
   ],
   [
    8,
    "Sentosa"
   ]
  ],
  "Bermuda_Antigo": [
   [
    0,
    "Mapa Completo"
   ],
   [
    43,
    "Shipyard"
   ],
   [
    44,
    "Mill"
   ],
   [
    45,
    "Observatory"
   ],
   [
    46,
    "Peak"
   ],
   [
    47,
    "Rim Nam Village"
   ],
   [
    48,
    "Clock Tower"
   ],
   [
    49,
    "Mars Electric"
   ],
   [
    50,
    "Sentosa"
   ]
  ],
  "Nova_Terra": [
   [
    0,
    "Mapa Completo"
   ],
   [
    9,
    "Universidade"
   ],
   [
    10,
    "Museu"
   ],
   [
    11,
    "Fazenda"
   ],
   [
    12,
    "Cidade Velha"
   ],
   [
    13,
    "Planetario"
   ],
   [
    14,
    "Galeria Deca"
   ],
   [
    15,
    "Manguesal"
   ]
  ],
  "Kalahari": [
   [
    0,
    "Mapa Completo"
   ],
   [
    25,
    "Porto Seguro"
   ],
   [
    26,
    "Camara"
   ],
   [
    27,
    "Santuario"
   ],
   [
    28,
    "Labirinto"
   ],
   [
    29,
    "Cemiterio de Elefantes"
   ],
   [
    30,
    "Submarino"
   ],
   [
    31,
    "Posto de Comando"
   ],
   [
    32,
    "Playground"
   ],
   [
    33,
    "Refinaria"
   ]
  ],
  "Solara": [
   [
    0,
    "Mapa Completo"
   ],
   [
    34,
    "Piscinao"
   ],
   [
    35,
    "Enseada"
   ],
   [
    36,
    "Floresopolis"
   ],
   [
    37,
    "Roliude"
   ],
   [
    38,
    "Laboratorio"
   ],
   [
    39,
    "Parque"
   ],
   [
    40,
    "Resort"
   ],
   [
    41,
    "Clube da Cela"
   ],
   [
    42,
    "Torre de TV"
   ]
  ],
  "Ilha_da_Vitoria_50x50": [
   [
    0,
    "Full Map"
   ]
  ],
  "Local_de_Origem_100x100": [
   [
    0,
    "Full Map"
   ]
  ],
  "Cena_Vazia_2000x2000": [
   [
    0,
    "Full Map"
   ]
  ]
 },
 "MODOS": {
  "Parkour": 2,
  "Pontuacao": 1,
  "Aniquilacao": 3,
  "Personalizar": 0,
  "Competicao_de_Criadores": 11,
  "Contra_Squad": 12,
  "Esconde_Esconde": 10,
  "Primeira_Pessoa": 14,
  "Resistencia": 8,
  "Tiro_Perfeito": 13
 },
 "MODOS_LABEL": {
  "Parkour": "Parkour",
  "Pontuacao": "Pontuação",
  "Aniquilacao": "Aniquilação",
  "Personalizar": "Personalizar",
  "Competicao_de_Criadores": "Competição de Criadores",
  "Contra_Squad": "Contra Squad",
  "Esconde_Esconde": "Esconde-Esconde",
  "Primeira_Pessoa": "Primeira Pessoa",
  "Resistencia": "Resistência",
  "Tiro_Perfeito": "Tiro Perfeito"
 },
 "MESES": [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
 ],
 "MAPA_NOMES_PT": {
  "BERMUDA": "Bermuda",
  "OLD BERMUDA": "Bermuda Antigo",
  "BERMUDA REMASTERED": "Bermuda",
  "PURGATORY": "Kalahari",
  "KALAHARI": "Kalahari",
  "NEXTERRA": "Nova Terra",
  "SOLARA": "Solara",
  "VICTORY ISLAND": "Ilha da Vitória",
  "ORIGIN LAND": "Local de Origem",
  "EMPTY SCENE": "Cena Vazia"
 },
 "GAME_MODE_PT": {
  "CUSTOMIZE": "Personalizado",
  "SOLO": "Solo",
  "DUO": "Dupla",
  "SQUAD": "Esquadrão",
  "GUN GAME": "Gun Game",
  "TEAM DEATHMATCH": "Equipe Mata-Mata",
  "FREE FOR ALL": "Todos Contra Todos"
 },
 "TAGS_PT": {
  "SURVIVAL MODE": "Modo Sobreviver",
  "PERFECT SHOT": "Tiro Perfeito",
  "HEADSHOT ONLY": "Tiro Perfeito",
  "SNIPER ONLY": "Fuzil de Precisão",
  "TEAM DEATHMATCH": "Equipe Mata-Mata",
  "TRAINING": "Treinamento",
  "ZOMBIE MODE": "Modo Zumbi",
  "FAST ENERGY CONVERSION": "Conversão rápida de energia",
  "FAST EP CONVERSION": "Conversão rápida de energia",
  "FAST SHRINK": "Diminuição rápida",
  "EARLY SHRINK": "Diminuição rápida",
  "SLOW SHRINK": "Diminuição lenta",
  "LATE SHRINK": "Diminuição lenta",
  "UNLIMITED SKILL": "Habilidade ilimitada",
  "UNLIMITED ABILITY": "Habilidade ilimitada",
  "UNLIMITED GLOO WALLS": "Paredes de Gel ilimitadas",
  "UNLIMITED GLOO WALL": "Paredes de Gel ilimitadas",
  "UNLIMITED THROWABLES": "Arremessáveis ilimitados",
  "RESPAWN": "Ressurgir",
  "HIDE AND SEEK": "Esconde-esconde",
  "CASUAL": "Casual",
  "PUZZLE": "Quebra-cabeça",
  "PUZZLES": "Quebra-cabeças",
  "GROUP GAMES": "Jogos de grupo",
  "CREATIVE ZONE": "Zona Criativa",
  "SPORTS SIMULATION": "Simula esportes",
  "CHECK-IN": "Fazer check-in",
  "SOCIAL": "Social",
  "MEMES": "Memes",
  "FUN": "Divertido",
  "THRILL": "Emoção",
  "EXCITEMENT": "Emoção",
  "VACATION": "Férias",
  "HOLIDAY": "Férias",
  "SHOOTING": "Tiroteio",
  "RELAXING": "Relaxante",
  "CHALLENGE": "Desafio",
  "MELEE WEAPON": "Arma de contato",
  "SPECIAL WEAPON": "Arma Especial",
  "OPEN MIC": "Microfone aberto",
  "HORROR": "Terror",
  "MUSIC": "Música",
  "REALISTIC": "Realista",
  "CUTE": "Fofo",
  "FANTASY": "Fantasia",
  "NATURE": "Natureza",
  "CARTOON": "Cartunesco",
  "CARTOONISH": "Cartunesco",
  "PIXELATED": "Pixelado",
  "CRAZY": "Maluco",
  "FLASHY": "Chamativo",
  "EYE-CATCHING": "Chamativo",
  "SOLO": "Solo",
  "DUO": "Duo",
  "TRIO": "Trio",
  "SQUAD": "Squad",
  "X5": "x5",
  "X6": "x6",
  "SINGLE TEAM": "Equipe única",
  "CO-OP MISSION": "Missão Coop.",
  "EASY": "Fácil",
  "HARD": "Difícil",
  "FAST PACE": "Ritmo rápido",
  "SLOW PACE": "Ritmo lento",
  "UNLIMITED AMMO": "Munição Ilimitada"
 },
 "TAGS_IGNORAR": [
  "naruto",
  "collab",
  "colab",
  "sponsor",
  "patrocin"
 ],
 "MAPAS_ORDEM": [
  [
   "Bermuda",
   "Bermuda"
  ],
  [
   "Bermuda_Antigo",
   "Bermuda Antigo"
  ],
  [
   "Kalahari",
   "Kalahari"
  ],
  [
   "Nova_Terra",
   "Nova Terra"
  ],
  [
   "Solara",
   "Solara"
  ],
  [
   "Ilha_da_Vitoria_50x50",
   "Ilha da Vitória 50x50"
  ],
  [
   "Local_de_Origem_100x100",
   "Local de Origem 100x100"
  ],
  [
   "Cena_Vazia_2000x2000",
   "Cena Vazia 2000x2000"
  ]
 ]
};

// ============================================================
//  Utilitários de bytes (equivalentes ao bytes/bytearray do Python)
// ============================================================
class ErroUsuario extends Error { constructor(m) { super(m); this.name = "ErroUsuario"; } }
class ValueError extends Error { constructor(m) { super(m); this.name = "ValueError"; } }
class BadZip extends Error { constructor(m) { super(m); this.name = "BadZipFile"; } }

const U8 = (...a) => Uint8Array.from(a);
const EMPTY = new Uint8Array(0);

function concat(parts) {
  let n = 0;
  for (const p of parts) n += p.length;
  const o = new Uint8Array(n);
  let i = 0;
  for (const p of parts) { o.set(p, i); i += p.length; }
  return o;
}

// bytes.find(pat, from)
function find(buf, pat, from = 0) {
  const n = buf.length, m = pat.length;
  if (m === 0) return from <= n ? from : -1;
  const first = pat[0];
  let i = from;
  while (true) {
    i = buf.indexOf(first, i);
    if (i === -1 || i + m > n) return -1;
    let j = 1;
    while (j < m && buf[i + j] === pat[j]) j++;
    if (j === m) return i;
    i++;
  }
}
// bytes.rfind(pat)
function rfind(buf, pat) {
  const m = pat.length;
  for (let i = buf.length - m; i >= 0; i--) {
    let j = 0;
    while (j < m && buf[i + j] === pat[j]) j++;
    if (j === m) return i;
  }
  return -1;
}
// bytearray.replace(antigo, novo) -> substitui todas as ocorrências
function replaceAll(buf, antigo, novo) {
  const partes = [];
  let ini = 0, pos;
  while ((pos = find(buf, antigo, ini)) !== -1) {
    partes.push(buf.subarray(ini, pos), novo);
    ini = pos + antigo.length;
  }
  if (!partes.length) return buf.slice();
  partes.push(buf.subarray(ini));
  return concat(partes);
}
function eq(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}
const hex = (b) => Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
const fromHex = (h) => Uint8Array.from(h.match(/../g), (x) => parseInt(x, 16));
function latin1(b) {
  let s = "";
  for (let i = 0; i < b.length; i += 0x8000) s += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000));
  return s;
}
function b64(b) {
  let s = "";
  for (let i = 0; i < b.length; i += 0x8000) s += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000));
  return btoa(s);
}
const pyTruthy = (v) => !(v === null || v === undefined || v === false || v === 0 || v === "" ||
  (Array.isArray(v) && v.length === 0) || (typeof v === "object" && !Array.isArray(v) && Object.keys(v).length === 0));
const or = (...vs) => { for (const v of vs) if (pyTruthy(v)) return v; return vs[vs.length - 1]; };
const get = (o, k) => (o && o[k] !== undefined ? o[k] : null);

// ============================================================
//  MD5 (JS puro, funciona igual no Workers e no Node)
// ============================================================
const MD5_K = new Uint32Array(64);
for (let i = 0; i < 64; i++) MD5_K[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296);
const MD5_S = [7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,
  4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21];
function md5(bytes) {
  bytes = bytes instanceof Uint8Array ? bytes : Uint8Array.from(bytes);
  let a0 = 0x67452301 | 0, b0 = 0xefcdab89 | 0, c0 = 0x98badcfe | 0, d0 = 0x10325476 | 0;
  const M = new Int32Array(16);
  function block(buf, off) {
    for (let j = 0; j < 16; j++) {
      const p = off + j * 4;
      M[j] = buf[p] | (buf[p + 1] << 8) | (buf[p + 2] << 16) | (buf[p + 3] << 24);
    }
    let A = a0, B = b0, C = c0, D = d0;
    for (let i = 0; i < 64; i++) {
      let F, g;
      if (i < 16) { F = (B & C) | (~B & D); g = i; }
      else if (i < 32) { F = (D & B) | (~D & C); g = (5 * i + 1) & 15; }
      else if (i < 48) { F = B ^ C ^ D; g = (3 * i + 5) & 15; }
      else { F = C ^ (B | ~D); g = (7 * i) & 15; }
      F = (F + A + MD5_K[i] + M[g]) | 0;
      A = D; D = C; C = B;
      B = (B + ((F << MD5_S[i]) | (F >>> (32 - MD5_S[i])))) | 0;
    }
    a0 = (a0 + A) | 0; b0 = (b0 + B) | 0; c0 = (c0 + C) | 0; d0 = (d0 + D) | 0;
  }
  const len = bytes.length, full = Math.floor(len / 64) * 64;
  for (let off = 0; off < full; off += 64) block(bytes, off);
  const rest = len - full;
  const tailLen = rest + 1 + 8 <= 64 ? 64 : 128;
  const tail = new Uint8Array(tailLen);
  tail.set(bytes.subarray(full), 0);
  tail[rest] = 0x80;
  const bits = len * 8;
  const lo = bits % 4294967296, hi = Math.floor(bits / 4294967296);
  for (let i = 0; i < 4; i++) { tail[tailLen - 8 + i] = (lo >>> (8 * i)) & 255; tail[tailLen - 4 + i] = (hi >>> (8 * i)) & 255; }
  for (let off = 0; off < tailLen; off += 64) block(tail, off);
  const out = new Uint8Array(16);
  [a0, b0, c0, d0].forEach((w, k) => { for (let i = 0; i < 4; i++) out[k * 4 + i] = (w >>> (8 * i)) & 255; });
  return hex(out);
}
// No Workers o MD5 nativo é bem mais rápido (gasta quase nada de CPU); fora dele cai no MD5 em JS.
async function _md5(b) {
  try {
    if (globalThis.crypto && crypto.subtle) return hex(new Uint8Array(await crypto.subtle.digest("MD5", b)));
  } catch { /* algoritmo não suportado neste ambiente */ }
  return md5(b);
}

// ============================================================
//  ZIP (leitura e escrita, sem dependências)
// ============================================================
const u16 = (b, o) => b[o] | (b[o + 1] << 8);
const u32 = (b, o) => (b[o] | (b[o + 1] << 8) | (b[o + 2] << 16) | (b[o + 3] << 24)) >>> 0;

async function runStream(data, stream) {
  const s = new Blob([data]).stream().pipeThrough(stream);
  return new Uint8Array(await new Response(s).arrayBuffer());
}
const inflateRaw = (d) => runStream(d, new DecompressionStream("deflate-raw"));
const deflateRaw = (d) => runStream(d, new CompressionStream("deflate-raw"));

const CRC_T = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
  return t;
})();
function crc32(b) { let c = 0xffffffff; for (let i = 0; i < b.length; i++) c = CRC_T[(c ^ b[i]) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; }

// Devolve [{filename, isDir, read: async () => Uint8Array}] na ordem do diretório central
function abrirZip(buf) {
  let e = -1;
  for (let i = buf.length - 22; i >= Math.max(0, buf.length - 22 - 65535); i--) {
    if (u32(buf, i) === 0x06054b50) { e = i; break; }
  }
  if (e < 0) throw new BadZip("File is not a zip file");
  const total = u16(buf, e + 10);
  let p = u32(buf, e + 16);
  const dec8 = new TextDecoder("utf-8");
  const itens = [];
  for (let n = 0; n < total; n++) {
    if (p + 46 > buf.length || u32(buf, p) !== 0x02014b50) throw new BadZip("Bad central directory");
    const flags = u16(buf, p + 8), metodo = u16(buf, p + 10), csize = u32(buf, p + 20);
    const nl = u16(buf, p + 28), el = u16(buf, p + 30), cl = u16(buf, p + 32), off = u32(buf, p + 42);
    const nb = buf.subarray(p + 46, p + 46 + nl);
    const filename = flags & 0x800 ? dec8.decode(nb) : latin1(nb);
    itens.push({
      filename,
      isDir: filename.endsWith("/"),
      async read() {
        if (flags & 1) throw new Error("arquivo do ZIP está criptografado");
        if (u32(buf, off) !== 0x04034b50) throw new BadZip("Bad local header");
        const ini = off + 30 + u16(buf, off + 26) + u16(buf, off + 28);
        const dados = buf.subarray(ini, ini + csize);
        if (metodo === 0) return dados.slice();
        if (metodo === 8) return inflateRaw(dados);
        throw new Error("método de compressão do ZIP não suportado: " + metodo);
      },
    });
    p += 46 + nl + el + cl;
  }
  return itens;
}

async function montarZip(arquivos) {
  const agora = new Date();
  const dosT = (agora.getUTCHours() << 11) | (agora.getUTCMinutes() << 5) | (agora.getUTCSeconds() >> 1);
  const dosD = (Math.max(agora.getUTCFullYear(), 1980) - 1980) << 9 | ((agora.getUTCMonth() + 1) << 5) | agora.getUTCDate();
  const enc = new TextEncoder();
  const locais = [], centrais = [];
  let off = 0;
  for (const a of arquivos) {
    const dados = a.dados instanceof Uint8Array ? a.dados : Uint8Array.from(a.dados);
    const nome = enc.encode(a.nome);
    const crc = crc32(dados);
    let comp = await deflateRaw(dados), metodo = 8;
    if (comp.length >= dados.length) { comp = dados; metodo = 0; }
    const lh = new Uint8Array(30 + nome.length), lv = new DataView(lh.buffer);
    lv.setUint32(0, 0x04034b50, true); lv.setUint16(4, 20, true); lv.setUint16(6, 0x800, true);
    lv.setUint16(8, metodo, true); lv.setUint16(10, dosT, true); lv.setUint16(12, dosD, true);
    lv.setUint32(14, crc, true); lv.setUint32(18, comp.length, true); lv.setUint32(22, dados.length, true);
    lv.setUint16(26, nome.length, true); lv.setUint16(28, 0, true);
    lh.set(nome, 30);
    const ch = new Uint8Array(46 + nome.length), cv = new DataView(ch.buffer);
    cv.setUint32(0, 0x02014b50, true); cv.setUint16(4, 20, true); cv.setUint16(6, 20, true); cv.setUint16(8, 0x800, true);
    cv.setUint16(10, metodo, true); cv.setUint16(12, dosT, true); cv.setUint16(14, dosD, true);
    cv.setUint32(16, crc, true); cv.setUint32(20, comp.length, true); cv.setUint32(24, dados.length, true);
    cv.setUint16(28, nome.length, true); cv.setUint32(42, off, true);
    ch.set(nome, 46);
    locais.push(lh, comp); centrais.push(ch);
    off += lh.length + comp.length;
  }
  const cd = concat(centrais);
  const eocd = new Uint8Array(22), ev = new DataView(eocd.buffer);
  ev.setUint32(0, 0x06054b50, true); ev.setUint16(8, arquivos.length, true); ev.setUint16(10, arquivos.length, true);
  ev.setUint32(12, cd.length, true); ev.setUint32(16, off, true);
  return concat([...locais, cd, eocd]);
}

// ============================================================
//  ROUND (protobuf)
// ============================================================
function readVarint_(data, pos) {
  let result = 0, mult = 1;
  while (true) {
    if (pos >= data.length) throw new RangeError("index out of range");
    const b = data[pos++];
    result += (b & 0x7f) * mult;
    if (!(b & 0x80)) break;
    mult *= 128;
  }
  return [result, pos];
}
function writeVarint_(v) {
  const out = [];
  while (true) {
    const b = v % 128;
    v = Math.floor(v / 128);
    if (v > 0) out.push(b | 0x80); else { out.push(b); break; }
  }
  return Uint8Array.from(out);
}
function iterFields(data) {
  let i = 0;
  const n = data.length, fields = [];
  while (i < n) {
    const start = i;
    let tag; [tag, i] = readVarint_(data, i);
    const fieldNum = Math.floor(tag / 8), wire = tag % 8;
    let payload;
    if (wire === 0) { [payload, i] = readVarint_(data, i); }
    else if (wire === 1) { payload = data.subarray(i, i + 8); i += 8; }
    else if (wire === 2) { let len; [len, i] = readVarint_(data, i); payload = data.subarray(i, i + len); i += len; }
    else if (wire === 5) { payload = data.subarray(i, i + 4); i += 4; }
    else if (wire === 3) {
      let depth = 1;
      const gs = i;
      while (depth > 0) {
        if (i >= n) throw new ValueError("grupo protobuf sem fechamento (arquivo em formato diferente do esperado)");
        let gtag; [gtag, i] = readVarint_(data, i);
        const gw = gtag % 8;
        if (gw === 3) depth++;
        else if (gw === 4) depth--;
        else if (gw === 0) { [, i] = readVarint_(data, i); }
        else if (gw === 1) i += 8;
        else if (gw === 2) { let gl; [gl, i] = readVarint_(data, i); i += gl; }
        else if (gw === 5) i += 4;
        else throw new ValueError(`wire type ${gw} não suportado dentro de grupo`);
      }
      payload = data.subarray(gs, i);
    } else {
      throw new ValueError(`wire type ${wire} não suportado (offset ${start}) - este arquivo pode ter uma estrutura diferente`);
    }
    fields.push({ num: fieldNum, wire, payload, raw: data.subarray(start, i) });
  }
  return fields;
}
function buildField(fieldNum, wire, payload) {
  const tag = fieldNum * 8 + wire;
  let out = writeVarint_(tag);
  if (wire === 0) out = concat([out, writeVarint_(payload)]);
  else if (wire === 1) out = concat([out, payload]);
  else if (wire === 2) out = concat([out, writeVarint_(payload.length), payload]);
  else if (wire === 5) out = concat([out, payload]);
  return out;
}
function getSettingsValues(data, ids) {
  const result = new Map(ids.map((i) => [i, null]));
  const top = iterFields(data);
  const shah = top.find((f) => f.num === 6 && f.wire === 2);
  if (!shah) return result;
  const root = iterFields(shah.payload);
  const sw = root.find((f) => f.num === 1 && f.wire === 2);
  if (!sw) return result;
  for (const f of iterFields(sw.payload)) {
    if (f.num !== 1 || f.wire !== 2) continue;
    const sf = iterFields(f.payload);
    const sidF = sf.find((x) => x.num === 1 && x.wire === 0);
    const sid = sidF ? sidF.payload : null;
    if (sid !== null && result.has(sid)) {
      const v = sf.find((x) => x.num === 3 && x.wire === 0);
      result.set(sid, v ? v.payload : null);
    }
  }
  return result;
}
function setSettingsValue(data, idMap) {
  const top = iterFields(data);
  const shahIdx = top.findIndex((f) => f.num === 6 && f.wire === 2);
  const rootPayload = shahIdx !== -1 ? top[shahIdx].payload : EMPTY;
  const root = iterFields(rootPayload);
  const swIdx = root.findIndex((f) => f.num === 1 && f.wire === 2);
  const swPayload = swIdx !== -1 ? root[swIdx].payload : EMPTY;
  const sw = iterFields(swPayload);

  const handled = new Set();
  const newSw = [];
  for (const f of sw) {
    if (f.num === 1 && f.wire === 2) {
      const sf = iterFields(f.payload);
      const sidF = sf.find((x) => x.num === 1 && x.wire === 0);
      const sid = sidF ? sidF.payload : null;
      if (sid !== null && idMap.has(sid)) {
        const nsf = [];
        let valueSet = false;
        for (const s of sf) {
          if (s.num === 3 && s.wire === 0) { nsf.push(buildField(3, 0, idMap.get(sid))); valueSet = true; }
          else nsf.push(s.raw);
        }
        if (!valueSet) nsf.push(buildField(3, 0, idMap.get(sid)));
        newSw.push(buildField(1, 2, concat(nsf)));
        handled.add(sid);
      } else newSw.push(f.raw);
    } else newSw.push(f.raw);
  }
  for (const [sid, val] of idMap) {
    if (!handled.has(sid)) newSw.push(buildField(1, 2, concat([buildField(1, 0, sid), buildField(3, 0, val)])));
  }
  const newSwEntry = buildField(1, 2, concat(newSw));

  const newRoot = [];
  if (swIdx === -1) { newRoot.push(newSwEntry); for (const f of root) newRoot.push(f.raw); }
  else root.forEach((f, idx) => newRoot.push(idx === swIdx ? newSwEntry : f.raw));
  const newShah = buildField(6, 2, concat(newRoot));

  const newTop = [];
  if (shahIdx === -1) { newTop.push(newShah); for (const f of top) newTop.push(f.raw); }
  else top.forEach((f, idx) => newTop.push(idx === shahIdx ? newShah : f.raw));
  return concat(newTop);
}

// ============================================================
//  MAPA
// ============================================================
function detectSlot(filename) {
  const m = /ProjectData_slot_(\d+)/.exec(filename);
  return m ? parseInt(m[1], 10) : 0;
}
const MAP_IDS = T.MAP_IDS;
const AREAS = Object.fromEntries(Object.entries(T.AREAS).map(([k, v]) => [k, new Map(v)]));

function readVarint(data, offset) {
  let result = 0, mult = 1;
  while (offset < data.length) {
    const byte = data[offset];
    result += (byte & 0x7f) * mult;
    offset++; mult *= 128;
    if (!(byte & 0x80)) break;
  }
  return result;
}
const SIG_MAPID = U8(0x47, 0x55, 0x49, 0x44, 0x18, 0x01, 0x20);
function detectMapid(data) {
  const pos = find(data, SIG_MAPID);
  if (pos === -1) return [null, null];
  const valPos = pos + SIG_MAPID.length;
  return [valPos, readVarint(data, valPos)];
}
function getMapName(mid) {
  for (const [name, value] of Object.entries(MAP_IDS)) if (value === mid) return name;
  return String(mid);
}
const AREA_BASE = 0x2a;
const AREA_TAG = U8(0x80, 0x03);
function readArea(meta) {
  const pos = rfind(meta, AREA_TAG);
  if (pos === -1) return 0;
  if (pos + 2 >= meta.length) throw new RangeError("index out of range");
  return meta[pos + 2] - AREA_BASE;
}
function writeArea(meta, areaId) {
  const pos = rfind(meta, AREA_TAG);
  if (areaId === 0) {
    if (pos !== -1) return concat([meta.subarray(0, pos), meta.subarray(pos + 3)]);
    return meta.slice();
  }
  const bv = areaId + AREA_BASE;
  if (pos !== -1) {
    if (pos + 2 >= meta.length) throw new RangeError("index out of range");
    const o = meta.slice(); o[pos + 2] = bv; return o;
  }
  const anchor = rfind(meta, U8(0xba, 0x05));
  if (anchor !== -1) return concat([meta.subarray(0, anchor), U8(0x80, 0x03, bv), meta.subarray(anchor)]);
  return concat([meta, U8(0x80, 0x03, bv)]);
}
function writeMapid(bytes, mapPos, newMapid) {
  if (newMapid < 128) bytes[mapPos] = newMapid;
  else {
    const enc = [];
    let val = newMapid;
    while (val > 0x7f) { enc.push((val & 0x7f) | 0x80); val >>>= 7; }
    enc.push(val);
    enc.forEach((b, i) => { bytes[mapPos + i] = b; });
  }
}

// ============================================================
//  MODO
// ============================================================
const MODOS = T.MODOS, MODOS_LABEL = T.MODOS_LABEL;
const ANCHOR_MODO = U8(0x28, 0x35, 0x30);
const SIG_MODO = U8(0x08, 0x01, 0x18);
function readModo(data) {
  const pos = rfind(data, ANCHOR_MODO);
  if (pos === -1) return 0;
  const sub = data.subarray(pos, pos + 30);
  const idx = find(sub, SIG_MODO);
  if (idx === -1) return 0;
  if (idx + 3 >= sub.length) throw new RangeError("index out of range");
  return sub[idx + 3];
}
function getModoNome(mid) {
  for (const [k, v] of Object.entries(MODOS)) if (v === mid) return MODOS_LABEL[k];
  return String(mid);
}
// devolve [ok, novosBytes]
function writeModo(data, modoId) {
  const pos = rfind(data, ANCHOR_MODO);
  if (pos === -1) return [false, data];
  const sub = data.subarray(pos, pos + 30);
  const idx = find(sub, SIG_MODO);
  const absIdx = pos + idx;
  if (modoId === 0x00) {
    if (idx !== -1) return [true, concat([data.subarray(0, absIdx + 2), data.subarray(absIdx + 4)])];
    return [true, data];
  }
  if (idx !== -1) {
    const o = data.slice(); o[absIdx + 3] = modoId; return [true, o];
  }
  const idx2 = find(sub, U8(0x08, 0x01, 0x25));
  if (idx2 !== -1) {
    const a2 = pos + idx2;
    return [true, concat([data.subarray(0, a2 + 2), U8(0x18, modoId), data.subarray(a2 + 2)])];
  }
  return [true, data];
}

// ============================================================
//  SKINS
// ============================================================
const SIGNATURE = U8(0x88, 0x01, 0xef, 0xb1, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x01);
function findBlocks(buf) {
  const blocks = [];
  let offset = 0;
  while (true) {
    const pos = find(buf, SIGNATURE, offset);
    if (pos === -1) break;
    blocks.push(pos);
    offset = pos + 1;
  }
  return blocks;
}

function applyBlocks(buf, blocks) {
  const logs = [];
  let total = 0, blocosJaEditados = 0;
  const usados = new Set(), nomesEncontrados = new Set();
  const BASE = {
    ONESIE: "SetID", CONJUNTOS: "SetID", HEAD: "HairID", CABELO: "HairID",
    FACEPAINT: "HeadAdditiveID", ROSTO: "HeadAdditiveID", MASK: "FaceID", MASCARA: "FaceID",
    TOP: "ChestID", CAMISA: "ChestID", BOTTOM: "LegsID", "CALÇA": "LegsID",
    SHOE: "FeetID", "TÊNIS": "FeetID", PUNHOS: "WeaponSkinIDs", ARMAS: "WeaponSkinIDs", MOCHILAS: "BackpackSkinID",
  };
  const TENIS = ["T\xCANIS", "T\xC3\x8ANIS", "TENIS"];   // cp1252, utf-8, ascii
  const CALCA = ["CAL\xC7A", "CAL\xC3\x87A", "CALCA"];
  for (const pos of blocks) {
    const start = pos + 2;
    if (start + 3 > buf.length) continue;
    const area = latin1(buf.subarray(pos, pos + 138));
    const has = (w) => area.includes(w);
    const hasAny = (ws) => ws.some(has);
    let nome = null, novo = null, tamanho = 3;
    if (has("WeaponSkinIDs") || has("wSkinIDs") || has("WEAPON") || has("[ffff00][C]WEAPON") || has("PUNHOS") || has("ARMAS")) {
      if (has("WeaponSkinIDs") || has("wSkinIDs")) nome = "WeaponSkinIDs";
      else if (has("PUNHOS")) nome = "PUNHOS";
      else if (has("ARMAS")) nome = "ARMAS";
      else nome = "WEAPON";
      novo = U8(0x98, 0x92); tamanho = 2;
    } else if (has("BackpackSkinID") || has("bSkinID") || has("MOCHILAS")) {
      nome = has("BackpackSkinID") || has("bSkinID") ? "BackpackSkinID" : "MOCHILAS";
      novo = U8(0x85, 0x92); tamanho = 2;
    } else if (has("SetID") || has("ONESIE") || has("[ffff00][C]ONESIE") || has("CONJUNTOS")) {
      nome = has("SetID") ? "SetID" : has("ONESIE") ? "ONESIE" : "CONJUNTOS";
      novo = U8(0xb7, 0xca, 0xef);
    } else if (has("HairID") || has("HEAD") || has("[ffff00][C]HEAD") || has("CABELO")) {
      nome = has("HairID") ? "HairID" : has("HEAD") ? "HEAD" : "CABELO";
      novo = U8(0xb6, 0xca, 0xef);
    } else if (has("HeadAdditiveID") || has("FACEPAINT") || has("[ffff00][C]FACEPAINT") || has("ROSTO")) {
      nome = has("HeadAdditiveID") ? "HeadAdditiveID" : has("FACEPAINT") ? "FACEPAINT" : "ROSTO";
      novo = U8(0xb5, 0xca, 0xef);
    } else if (has("FaceID") || has("MASK") || has("[ffff00][C]MASK") || has("MASCARA")) {
      nome = has("FaceID") ? "FaceID" : has("MASK") ? "MASK" : "MASCARA";
      novo = U8(0xb4, 0xca, 0xef);
    } else if (has("ChestID") || has("TOP") || has("[ffff00][C]TOP") || has("CAMISA")) {
      nome = has("ChestID") ? "ChestID" : has("TOP") ? "TOP" : "CAMISA";
      novo = U8(0xb3, 0xca, 0xef);
    } else if (has("LegsID") || has("BOTTOM") || has("[ffff00][C]BOTTOM") || hasAny(CALCA)) {
      nome = has("LegsID") ? "LegsID" : has("BOTTOM") ? "BOTTOM" : "CALÇA";
      novo = U8(0xb2, 0xca, 0xef);
    } else if (has("FeetID") || has("SHOE") || has("[ffff00][C]SHOE") || hasAny(TENIS)) {
      nome = has("FeetID") ? "FeetID" : has("SHOE") ? "SHOE" : "TÊNIS";
      novo = U8(0xb1, 0xca, 0xef);
    }
    if (!nome) continue;
    nomesEncontrados.add(BASE[nome] !== undefined ? BASE[nome] : nome);
    if (usados.has(start)) continue;
    let old;
    if (tamanho === 2) {
      old = buf.slice(start, start + 2);
      if (eq(old, novo)) { blocosJaEditados++; continue; }
      if (!eq(old, U8(0xef, 0xb1))) continue;
      buf.set(novo, start);
    } else {
      old = buf.slice(start, start + 3);
      if (eq(old, novo)) { blocosJaEditados++; continue; }
      if (!eq(old, U8(0xef, 0xb1, 0xff))) continue;
      buf.set(novo, start);
    }
    usados.add(start);
    total++;
    logs.push(`✅ ${nome}\n${start}:${hex(old)}->${hex(novo)}`);
  }
  const TODOS = {
    SetID: ["SetID", "ONESIE", "CONJUNTOS"],
    HairID: ["HairID", "HEAD", "CABELO"],
    HeadAdditiveID: ["HeadAdditiveID", "FACEPAINT", "ROSTO"],
    FaceID: ["FaceID", "MASK", "MASCARA"],
    ChestID: ["ChestID", "TOP", "CAMISA"],
    LegsID: ["LegsID", "BOTTOM", "CALÇA"],
    FeetID: ["FeetID", "SHOE", "TÊNIS"],
    WeaponSkinIDs: ["WeaponSkinIDs", "WEAPON", "PUNHOS", "ARMAS"],
    BackpackSkinID: ["BackpackSkinID", "bSkinID", "MOCHILAS"],
  };
  const naoEncontrados = Object.keys(TODOS).filter((n) => !nomesEncontrados.has(n));
  if (naoEncontrados.length && blocosJaEditados > 0 && total === 0) {
    logs.push("\n⚠️ Arquivo já foi editado anteriormente!");
    logs.push(`  🔄 Blocos já modificados: ${blocosJaEditados}`);
  } else if (naoEncontrados.length) {
    logs.push("\n⚠️ NÃO ENCONTRADOS:");
    for (const n of naoEncontrados) logs.push(`  ❌ ${TODOS[n].join(" / ")}`);
  }
  return [logs, total];
}

const hasOwn = (o, k) => Object.prototype.hasOwnProperty.call(o, k);

// ============================================================
//  BUSCA POR CÓDIGO (API ffcl.vercel.app/go)
// ============================================================
const MESES_PT_INDEX = T.MESES, MAPA_NOMES_PT = T.MAPA_NOMES_PT, GAME_MODE_PT = T.GAME_MODE_PT;
const TAGS_PT = T.TAGS_PT, TAGS_IGNORAR = T.TAGS_IGNORAR;
// chaves mais longas primeiro, para "OLD BERMUDA" não cair em "BERMUDA"
const MAPA_CHAVES = Object.keys(MAPA_NOMES_PT).sort((a, b) => b.length - a.length);

function traduzirMapa(nome) {
  if (!pyTruthy(nome)) return "N/A";
  nome = String(nome);
  const up = nome.toUpperCase();
  for (const chave of MAPA_CHAVES) {
    if (up.includes(chave)) {
      const resto = /(\d+)\s*[xX×]\s*(\d+)/.exec(nome);
      return resto ? `${MAPA_NOMES_PT[chave]} ${resto[1]}x${resto[2]}` : MAPA_NOMES_PT[chave];
    }
  }
  return nome;
}
function traduzirGameMode(modo) {
  if (!pyTruthy(modo)) return "N/A";
  const k = String(modo).toUpperCase().trim();
  return hasOwn(GAME_MODE_PT, k) ? GAME_MODE_PT[k] : modo;
}
function traduzirTags(tags) {
  const r = [];
  for (const tag of (Array.isArray(tags) ? tags : [])) {
    const t = String(tag);
    const low = t.toLowerCase();
    if (TAGS_IGNORAR.some((ruim) => low.includes(ruim))) continue;
    const k = t.toUpperCase().trim();
    r.push(hasOwn(TAGS_PT, k) ? TAGS_PT[k] : tag);
  }
  return r;
}
function ffclFormatarTimestamp(ts) {
  if (!pyTruthy(ts)) return "N/A";
  const n = Math.trunc(Number(ts));
  const d = new Date(n * 1000);
  if (!Number.isFinite(n) || isNaN(d.getTime())) return "N/A";
  return `${d.getUTCDate()} ${MESES_PT_INDEX[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
const limparCores = (t) => String(t).replace(/\[[^\]]*\]/g, "").trim();

async function getJson(url, params) {
  const u = new URL(url);
  for (const [k, v] of Object.entries(params)) u.searchParams.set(k, v);
  const resp = await fetch(u.toString(), {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept": "application/json, text/plain, */*",
      "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8",
      "Referer": "https://ffcl.vercel.app/",
    },
    signal: AbortSignal.timeout(10000),
  });
  let data = null, jsonOk = true;
  try { data = await resp.json(); } catch { jsonOk = false; }
  return { status: resp.status, data, jsonOk };
}
const FFCL_BASE = "https://ffcl.vercel.app/go";


// procura, em qualquer resposta da API, listas de objetos que pareçam mapas (outros mapas do criador)
function acharMapas(fontes, atual) {
  const out = [], vistos = new Set();
  const temChave = (o) => Object.keys(o).some((k) => /code|title|cover/i.test(k));
  const ehMapa = (o) => o && typeof o === "object" && !Array.isArray(o) &&
    (temChave(o) || Object.values(o).some((x) => x && typeof x === "object" && !Array.isArray(x) && temChave(x)));
  const norm = (o) => {
    const flatO = {}; const achatar = (x, d) => { for (const [k, v] of Object.entries(x)) { if (v && typeof v === "object" && !Array.isArray(v) && d < 2) achatar(v, d + 1); else if (!(k in flatO)) flatO[k] = v; } };
    achatar(o, 0);
    const ks = Object.keys(flatO);
    const pick = (re, soStr) => { const k = ks.find((x) => re.test(x) && flatO[x] !== null && flatO[x] !== "" && (!soStr || typeof flatO[x] === "string")); return k ? flatO[k] : null; };
    return { codigo: String(pick(/code/i) ?? "").replace(/^#+/, ""), titulo: limparCores(pick(/title|name/i, true) ?? ""), capa: pick(/cover|image|icon|thumb|pic/i, true) || ks.map((k) => flatO[k]).find((x) => typeof x === "string" && /^https:\/\/\S+\.(png|jpe?g|webp|gif)(\?|$)/i.test(x)) || null, campos: o };
  };
  const walk = (v, nivel) => {
    if (nivel > 6 || v === null || typeof v !== "object") return;
    if (Array.isArray(v)) {
      if (v.length && v.every(ehMapa)) {
        for (const it of v) { const n = norm(it); const k = n.codigo || JSON.stringify(it); if (vistos.has(k) || (atual && n.codigo === atual)) continue; vistos.add(k); out.push(n); }
        return;
      }
      v.forEach((x) => walk(x, nivel + 1));
      return;
    }
    for (const x of Object.values(v)) walk(x, nivel + 1);
  };
  fontes.forEach((f) => walk(f, 0));
  return out;
}

async function buscarInfoMapaFfcl(codigo, region = "") {
  const codigoLimpo = String(codigo || "").replace(/[^0-9A-Za-z]/g, "").toUpperCase();
  if (!codigoLimpo) throw new ValueError("Código de mapa inválido.");
  const regioes = region ? [region.toLowerCase()] : ["pk", "ind", "br"];
  let mapData = null, regiaoCerta = null;
  const falhas = [];   // problemas técnicos (rede, bloqueio, resposta que não é JSON)
  for (const reg of regioes) {
    let r;
    try { r = await getJson(`${FFCL_BASE}/map`, { code: codigoLimpo, region: reg }); }
    catch (e) { falhas.push(`${reg.toUpperCase()}: ${e && e.name === "TimeoutError" ? "tempo esgotado" : (e && e.message) || "erro de rede"}`); continue; }
    if (!r.jsonOk) { falhas.push(`${reg.toUpperCase()}: HTTP ${r.status} sem resposta JSON`); continue; }
    const data = r.data;
    if (data && typeof data === "object" && data.status !== "failed" && data["Map Details"] && typeof data["Map Details"] === "object") {
      mapData = data; regiaoCerta = reg; break;
    }
  }
  if (!mapData) {
    if (falhas.length === regioes.length)
      throw new ValueError("Não consegui consultar a API do mapa (ffcl.vercel.app): " + falhas.join("; ") + ". O problema é na consulta, não no código do mapa.");
    throw new ValueError("Mapa não encontrado (código ou região incorretos)." + (falhas.length ? " Falhas técnicas em: " + falhas.join("; ") + "." : ""));
  }
  const d = mapData["Map Details"];
  const codigoFinal = String(or(d["Map Code"], mapData["Code"], codigoLimpo)).replace(/^#+/, "");
  const titulo = limparCores(or(d["Map Title"], ""));
  const resultado = {
    codigo: codigoFinal,
    titulo: titulo || "N/A",
    criador: or(d["Map Creator"], "Desconhecido"),
    criador_uid: or(d["Creator UID"], "N/A"),
    descricao: or(d["Map Description"], ""),
    capa: get(d, "Map Cover"),
    likes: get(d, "Likes"),
    likes_rate: get(d, "Likes Rate"),
    dislikes: get(d, "Dislikes"),
    subscribers: get(d, "Subscribers"),
    mapa: traduzirMapa(d["Map"]),
    criar_tempo: ffclFormatarTimestamp(d["Create Time"]),
    atualizar_tempo: ffclFormatarTimestamp(d["Update Time"]),
    min_play_time: get(d, "MinPlayTime"),
    max_play_time: get(d, "MaxPlayTime"),
    popularidade: get(d, "Popularity"),
    teams: get(d, "Teams"),
    game_mode: traduzirGameMode(d["Game Mode"]),
    tags: traduzirTags(d["Tags"]),
    regiao: regiaoCerta,
    perfil_criador: null,
    api_mapa: d,                                   // TODOS os campos de "Map Details", como a API enviou
    api_extra: Object.fromEntries(Object.entries(mapData).filter(([k]) => k !== "Map Details")),
    api_perfil: null,                              // resposta completa do perfil do criador
    outros_mapas: [],
  };
  if (pyTruthy(resultado.criador_uid) && resultado.criador_uid !== "N/A") {
    // o perfil do criador pode estar em outra região que a do mapa: tenta a do mapa primeiro e depois as outras
    for (const reg of [...new Set([regiaoCerta, "br", "pk", "ind"])]) {
      try {
        const r = await getJson(`${FFCL_BASE}/get`, { uid: resultado.criador_uid, region: reg });
        const p = r.data;
        if (p && p["Craftland Profile"]) { resultado.perfil_criador = p["Craftland Profile"]; resultado.api_perfil = p; resultado.regiao_perfil = reg; break; }
      } catch { /* tenta a próxima região */ }
    }
  }
  resultado.outros_mapas = acharMapas([resultado.api_perfil, resultado.api_extra], codigoFinal);
  return resultado;
}
async function versala(codigo, regiao = "") {
  const info = await buscarInfoMapaFfcl(codigo, regiao);
  info.descricao_limpa = info.descricao ? String(info.descricao).replace(/\[[^\]]*\]/g, "").trim() : "";
  return info;
}

// ============================================================
//  CAMADA DO SITE
// ============================================================
const RE_BYTES = /^UserLevelData_(\d+)\.bytes$/;
const RE_META = /^ProjectData_slot_(\d+)\.meta$/;
const RE_PROJ = /^ProjectData_slot_(\d+)\.bytes$/;
const baseName = (s) => s.replace(/\\/g, "/").split("/").pop();

function substituirMd5(meta, antigoHex, novoHex) {
  const antigo = fromHex(antigoHex), novo = fromHex(novoHex);
  if (find(meta, antigo) !== -1) return [replaceAll(meta, antigo, novo), true];
  return [meta.slice(), false];
}

async function processarRound(nome, dados, rounds, teams, players, meta = null) {
  if (rounds === null && teams === null && players === null) throw new ErroUsuario("Informe pelo menos um valor: rounds, teams ou players.");
  for (const [v, lo, hi, n] of [[rounds, 1, 20, "Rounds"], [teams, 1, 12, "Times"], [players, 1, 12, "Jogadores"]]) {
    if (v !== null && !(lo <= v && v <= hi)) throw new ErroUsuario(`${n} deve estar entre ${lo} e ${hi}.`);
  }
  const mapa = new Map();
  if (teams !== null) mapa.set(6, teams);
  if (players !== null) mapa.set(7, players);
  if (rounds !== null) mapa.set(8, rounds);
  const antigos = getSettingsValues(dados, [6, 7, 8]);
  const novo = setSettingsValue(dados, mapa);
  const campos = [];
  for (const [sid, label] of [[6, "Times"], [7, "Jogadores"], [8, "Rodadas"]]) {
    const a = antigos.get(sid);
    campos.push({ label, antes: a === null || a === undefined ? "não definido" : String(a), depois: mapa.has(sid) ? String(mapa.get(sid)) : null });
  }
  const avisos = [];
  const arquivos = [{ nome: pyTruthy(nome) ? nome : "ProjectData_slot.bytes", dados: novo }];
  if (meta !== null) {
    // mantém o MD5 do projeto no .meta em dia (para as mudanças poderem ser empilhadas)
    const [metaNovo, ok] = substituirMd5(meta[1], await _md5(dados), await _md5(novo));
    if (ok) {
      arquivos.push({ nome: meta[0], dados: metaNovo });
      campos.push({ label: ".meta atualizado", antes: null, depois: "Sim" });
    } else avisos.push("MD5 do projeto não encontrado no .meta: o .meta não foi alterado.");
  }
  return { titulo: "Editor de Configurações do Craftland", campos, avisos, arquivos };
}

function modoInfo(bytes) { return getModoNome(readModo(bytes)); }

async function processarModo(bNome, bDados, mNome, mDados, escolha) {
  if (!hasOwn(MODOS, escolha)) throw new ErroUsuario("Modo inválido.");
  let bd = bDados.slice();
  const md = mDados.slice();
  const oldId = readModo(bd);
  const antes = getModoNome(oldId);
  const md5Antes = await _md5(bd);
  const [ok0, novoBd] = writeModo(bd, MODOS[escolha]);
  if (!ok0) throw new ErroUsuario("Não encontrei o campo de modo neste .bytes (âncora ausente). Arquivo errado?");
  bd = novoBd;
  const md5Depois = await _md5(bd);
  if (md5Antes === md5Depois && oldId !== MODOS[escolha]) throw new ErroUsuario("Não consegui aplicar o modo neste arquivo (campo ausente).");
  const [metaNovo, ok] = substituirMd5(md, md5Antes, md5Depois);
  const avisos = [];
  if (!ok) avisos.push("MD5 não encontrado no .meta (o .meta foi devolvido sem alteração).");
  if (oldId === MODOS[escolha]) avisos.push("O arquivo já estava nesse modo.");
  return {
    titulo: "Modo Editado", slot: detectSlot(bNome),
    campos: [{ label: "Modo", antes, depois: MODOS_LABEL[escolha] },
      { label: ".meta atualizado", antes: null, depois: ok ? "Sim" : "Não" },
      { label: "MD5 .bytes", antes: md5Antes, depois: md5Depois }],
    avisos, arquivos: [{ nome: bNome, dados: bd }, { nome: mNome, dados: metaNovo }],
  };
}

const MAPAS_ORDEM = T.MAPAS_ORDEM;
function configSite() {
  return {
    modos: Object.keys(MODOS).map((k) => ({ id: k, label: MODOS_LABEL[k] })),
    mapas: MAPAS_ORDEM.map(([k, l]) => ({
      id: k, label: l,
      areas: [{ id: 0, label: "🌍 Mapa Completo" }].concat([...AREAS[k]].filter(([a]) => a !== 0).map(([a, n]) => ({ id: a, label: n }))),
    })),
  };
}
function estadoMapa(bd, md) {
  const [mapPos, oldId] = detectMapid(bd);
  const nome = oldId !== null ? getMapName(oldId) : "Desconhecido";
  const areaId = readArea(md);
  const areaNome = hasOwn(AREAS, nome) && AREAS[nome].has(areaId) ? AREAS[nome].get(areaId) : `Área ${areaId}`;
  return [mapPos, nome, areaNome];
}
function mapaInfo(bDados, mDados) {
  const [, nome, area] = estadoMapa(bDados.slice(), mDados.slice());
  return { mapa: nome, area };
}
async function processarMapa(bNome, bDados, mNome, mDados, mapa, area) {
  if (!hasOwn(AREAS, mapa) || !hasOwn(MAP_IDS, mapa)) throw new ErroUsuario("Mapa inválido.");
  if (!AREAS[mapa].has(area)) throw new ErroUsuario("Área inválida para esse mapa.");
  const bd = bDados.slice();
  let md = mDados.slice();
  const [mapPos, oldNome, oldArea] = estadoMapa(bd, md);
  const avisos = [];
  if (mapPos !== null) {
    writeMapid(bd, mapPos, MAP_IDS[mapa]);
    // mantém o MD5 do projeto no .meta em dia (para as mudanças poderem ser empilhadas)
    let ok;
    [md, ok] = substituirMd5(md, await _md5(bDados), await _md5(bd));
    if (!ok) avisos.push("MD5 do projeto não encontrado no .meta: ele não foi atualizado.");
  } else avisos.push("MapID não encontrado no .bytes: só a área foi alterada.");
  const md5Antes = await _md5(mDados);
  md = writeArea(md, area);
  const md5Depois = await _md5(md);
  const slot = detectSlot(bNome);
  let bOut, mOut;
  if (slot) { bOut = `ProjectData_slot_${slot}.bytes`; mOut = `ProjectData_slot_${slot}.meta`; } else { bOut = bNome; mOut = mNome; }
  return {
    titulo: "Mapa Editado", slot,
    campos: [{ label: "Mapa", antes: oldNome, depois: mapa },
      { label: "Área", antes: oldArea, depois: AREAS[mapa].has(area) ? AREAS[mapa].get(area) : String(area) },
      { label: "MD5 META", antes: md5Antes, depois: md5Depois }],
    avisos, arquivos: [{ nome: bOut, dados: bd }, { nome: mOut, dados: md }],
  };
}

async function resolverSkins(b, m, p, z) {
  if (z !== null) {
    if (!z[0].toLowerCase().endsWith(".zip")) throw new ErroUsuario("O arquivo enviado em ZIP não é um .zip.");
    let itens;
    try { itens = abrirZip(z[1]); } catch (e) { if (e instanceof BadZip) throw new ErroUsuario("O arquivo enviado não é um ZIP válido."); throw e; }
    const achados = { bytes: null, meta: null, proj: null };
    for (const info of itens) {
      if (info.isDir) continue;
      const nome = baseName(info.filename);
      if (!nome) continue;
      for (const [chave, rx] of [["bytes", RE_BYTES], ["meta", RE_META], ["proj", RE_PROJ]]) {
        if (achados[chave] === null && rx.test(nome)) { achados[chave] = [nome, await info.read()]; break; }
      }
    }
    if (!achados.bytes) throw new ErroUsuario("O ZIP não contém UserLevelData_X.bytes.");
    if (!achados.meta) throw new ErroUsuario("O ZIP não contém ProjectData_slot_X.meta.");
    if (!achados.proj) throw new ErroUsuario("O ZIP não contém ProjectData_slot_X.bytes.");
    b = achados.bytes; m = achados.meta; p = achados.proj;
  } else {
    if (b === null || m === null || p === null)
      throw new ErroUsuario("Envie os 3 arquivos (UserLevelData_X.bytes, ProjectData_slot_X.meta, ProjectData_slot_X.bytes) ou apenas um .zip contendo os 3.");
    for (const [arq, rx, esp, n] of [[b, RE_BYTES, "UserLevelData_N.bytes", ".bytes"], [m, RE_META, "ProjectData_slot_N.meta", ".meta"], [p, RE_PROJ, "ProjectData_slot_N.bytes", "ProjectData .bytes"]]) {
      if (!rx.test(arq[0])) throw new ErroUsuario(`Nome do ${n} inválido: ${arq[0]} — esperado: ${esp}`);
    }
  }
  const nb = RE_BYTES.exec(b[0])[1], nm = RE_META.exec(m[0])[1], np = RE_PROJ.exec(p[0])[1];
  if (!(nb === nm && nm === np))
    throw new ErroUsuario(`Os números dos slots não batem! UserLevelData → ${nb} | .meta → ${nm} | ProjectData.bytes → ${np}`);
  return [b, m, p, nb];
}

async function processarSkins(b, m, p, z = null) {
  const [[bNome, bDados], [mNome, mDados], [pNome, pDados], slot] = await resolverSkins(b, m, p, z);
  const data = bDados.slice();
  const oldMd5 = await _md5(data);
  const blocks = findBlocks(data);
  if (!blocks.length) throw new ErroUsuario("Nenhum bloco encontrado neste UserLevelData. Se ele já foi editado antes, envie o arquivo ORIGINAL; senão, confira se é o arquivo certo.");
  const [logs, total] = applyBlocks(data, blocks);
  const newMd5 = await _md5(data);
  if (oldMd5 === newMd5) throw new ErroUsuario("Este arquivo já foi editado anteriormente! Nenhuma alteração necessária.");
  const [metaNovo, ok] = substituirMd5(mDados, oldMd5, newMd5);
  const arquivos = [{ nome: bNome, dados: data }, { nome: pNome, dados: pDados }];
  const avisos = [];
  if (ok) arquivos.push({ nome: mNome, dados: metaNovo });
  else avisos.push("MD5 antigo não encontrado no .meta: o .meta NÃO foi gerado. Confira se o .meta é do mesmo slot/arquivo.");
  return {
    titulo: `Sistema Completo — Slot #${slot}`, slot: parseInt(slot, 10),
    campos: [{ label: "Blocos", antes: null, depois: String(blocks.length) },
      { label: "Alterações", antes: null, depois: String(total) },
      { label: "MD5 UserLevelData", antes: oldMd5, depois: newMd5 },
      { label: ".meta atualizado", antes: null, depois: ok ? "Sim" : "Não" }],
    avisos, logs, arquivos,
  };
}

async function classificarImportacao(arquivos) {
  const achados = {}, ignorados = [];
  const tratar = (nome, dados) => {
    for (const [papel, rx] of [["user", RE_BYTES], ["meta", RE_META], ["projeto", RE_PROJ]]) {
      if (rx.test(nome)) { if (!(papel in achados)) achados[papel] = [nome, dados]; return; }
    }
    ignorados.push(nome);
  };
  for (const [nome, dados] of arquivos) {
    if (nome.toLowerCase().endsWith(".zip")) {
      let itens;
      try { itens = abrirZip(dados); } catch (e) { if (e instanceof BadZip) throw new ErroUsuario(`${nome} não é um ZIP válido.`); throw e; }
      for (const info of itens) {
        const n = baseName(info.filename);
        if (info.isDir || !n || n.startsWith("._")) continue;
        tratar(n, await info.read());
      }
    } else tratar(nome, dados);
  }
  return [achados, ignorados];
}

const tam = (b) => `${b.length.toLocaleString("en-US")} bytes`.replace(/,/g, ".");

async function caracteristicas(projeto = null, meta = null, user = null) {
  if (!(projeto || meta || user)) throw new ErroUsuario("Importe ao menos um arquivo para ver as características.");
  const grupos = [];
  let mapaNome = null;
  if (projeto) {
    const [nome, dados] = projeto;
    const bd = dados.slice();
    const it = [["Arquivo", `${nome} (${tam(dados)})`], ["Slot", detectSlot(nome) ? String(detectSlot(nome)) : "não identificado"]];
    const [, mid] = detectMapid(bd);
    if (mid === null) it.push(["Mapa", "não encontrado neste arquivo"]);
    else { mapaNome = getMapName(mid); it.push(["Mapa", `${mapaNome} (ID ${mid})`]); }
    it.push(["Modo de jogo", rfind(bd, ANCHOR_MODO) !== -1 ? getModoNome(readModo(bd)) : "não encontrado neste arquivo"]);
    try {
      const v = getSettingsValues(dados, [6, 7, 8]);
      for (const [sid, lab] of [[6, "Times"], [7, "Jogadores por time"], [8, "Rodadas"]]) it.push([lab, v.get(sid) === null ? "não definido" : String(v.get(sid))]);
    } catch { it.push(["Times / Jogadores / Rodadas", "não consegui ler (formato diferente do esperado)"]); }
    it.push(["MD5", await _md5(dados)]);
    grupos.push({ titulo: "📦 Projeto (.bytes)", itens: it });
  }
  if (meta) {
    const [nome, dados] = meta;
    const it = [["Arquivo", `${nome} (${tam(dados)})`]];
    try {
      const aid = readArea(dados.slice());
      const mp = mapaNome !== null && hasOwn(AREAS, mapaNome) ? AREAS[mapaNome] : null;
      it.push(["Área", mp && mp.has(aid) ? mp.get(aid) : `Área ${aid}`]);
    } catch { it.push(["Área", "não consegui ler"]); }
    for (const [rot, par] of [["MD5 do projeto confere no .meta", projeto], ["MD5 do UserLevelData confere no .meta", user]]) {
      if (par) it.push([rot, find(dados, fromHex(await _md5(par[1]))) !== -1 ? "Sim" : "Não"]);
    }
    grupos.push({ titulo: "📄 Meta (.meta)", itens: it });
  }
  if (user) {
    const [nome, dados] = user;
    const blocos = findBlocks(dados);
    const it = [["Arquivo", `${nome} (${tam(dados)})`], ["Slot", String(detectSlot(nome.replace("UserLevelData_", "ProjectData_slot_")))], ["Blocos de skin", String(blocos.length)]];
    if (blocos.length) { const [, pend] = applyBlocks(dados.slice(), blocos); it.push(["Skins ainda por ativar", String(pend)]); }
    else it.push(["Skins", "nenhum bloco (já ativadas antes ou arquivo errado)"]);
    it.push(["MD5", await _md5(dados)]);
    grupos.push({ titulo: "🎨 UserLevelData (skins)", itens: it });
  }
  const nums = [projeto, meta].filter((n) => n && detectSlot(n[0])).map((n) => String(detectSlot(n[0])));
  if (user) { const m = RE_BYTES.exec(user[0]); if (m) nums.push(m[1]); }
  const avisos = [];
  if (new Set(nums).size > 1) avisos.push("Os números de slot dos arquivos importados não batem: " + nums.join(" / "));
  return { grupos, avisos };
}

const HTML = "<!doctype html>\n<html lang=\"pt-BR\"><head><meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n<title>Craftland Tools</title>\n<style>\n:root{color-scheme:dark;--bg:#0f1117;--card:#1a1d27;--line:#2b3040;--tx:#e8eaf2;--mu:#9aa1b5;--ac:#5b7cfa;--ok:#2fbf71;--er:#ef5b5b;--wn:#e6b422}\n*{box-sizing:border-box}body{margin:0;font:16px/1.45 system-ui,sans-serif;background:var(--bg);color:var(--tx)}\nheader{padding:16px;text-align:center;font-weight:700;font-size:20px}\nnav{display:flex;gap:6px;overflow-x:auto;padding:0 12px 10px;scrollbar-width:none}\nnav button{flex:0 0 auto;padding:9px 14px;border-radius:999px;border:1px solid var(--line);background:var(--card);color:var(--tx);font:inherit;cursor:pointer}\nnav button.on{background:var(--ac);border-color:var(--ac)}\nmain{max-width:640px;margin:0 auto;padding:0 12px 40px}\nsection{display:none;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px}\nsection.on{display:block}\nh2{margin:0 0 4px;font-size:18px}p.d{margin:0 0 14px;color:var(--mu);font-size:14px}\nlabel{display:block;margin:12px 0 4px;font-size:14px;color:var(--mu)}\ninput,select{width:100%;padding:11px;border-radius:10px;border:1px solid var(--line);background:#12151d;color:var(--tx);font:inherit}\ninput[type=file]{padding:9px}\n.row{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}\n.btn{margin-top:16px;width:100%;padding:13px;border:0;border-radius:10px;background:var(--ac);color:#fff;font:inherit;font-weight:700;cursor:pointer}\n.btn:disabled{opacity:.5}.btn.alt{background:#2b3040;margin-top:8px}\n.info{margin-top:10px;padding:10px;border-radius:10px;background:#12151d;border:1px solid var(--line);font-size:14px}\n.res{margin-top:16px}.msg{padding:11px;border-radius:10px;margin-top:10px;font-size:14px;white-space:pre-wrap;word-break:break-word}\n.msg.er{background:#3a1d1f;border:1px solid var(--er)}.msg.wn{background:#37300f;border:1px solid var(--wn)}.msg.ok{background:#14301f;border:1px solid var(--ok)}\n.kv{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;margin:10px 0;font-size:14px}.kv b{color:var(--mu);font-weight:600}\ncode{font:13px ui-monospace,monospace;word-break:break-all}\n.logs{margin-top:10px;padding:10px;background:#12151d;border-radius:10px;font:12px ui-monospace,monospace;white-space:pre-wrap;max-height:260px;overflow:auto}\nimg.cover{width:100%;border-radius:10px;margin-bottom:10px}\n.pic{max-width:120px;max-height:120px;border-radius:8px;display:block;background:#262b3a}.raw{margin:8px 0}.raw summary{cursor:pointer;color:var(--ac);font-size:14px}.card h3{margin:4px 0}.tags span{display:inline-block;margin:2px 4px 2px 0;padding:3px 9px;border-radius:999px;background:#12151d;border:1px solid var(--line);font-size:13px}\n.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px;margin-bottom:12px}\n.slot{display:grid;grid-template-columns:1fr auto;gap:2px 8px;align-items:center;margin-top:10px}.slot small{color:var(--mu);grid-column:1/-1;font-size:13px;word-break:break-all}\n.slot small.ok{color:var(--ok)}.slot small.ed{color:var(--wn)}\nnav{padding:0 0 10px}.grp{margin-top:12px}.grp h3{margin:0 0 2px;font-size:15px}\n.mmc{display:block;width:150px;height:150px;margin-top:8px;image-rendering:pixelated;background:#262b3a;border:1px solid var(--line);border-radius:8px}\n</style></head><body>\n<header>🛠️ Craftland Tools</header>\n<main>\n<div class=\"card\"><h2>📂 Seus arquivos</h2>\n<p class=\"d\">Importe uma vez: todas as abas usam estes arquivos e guardam o resultado aqui. Ficam salvos neste aparelho até você limpar.</p>\n<label>Vários de uma vez ou .zip (reconhece pelo nome)</label><input type=\"file\" id=\"im_multi\" multiple>\n<div class=\"slot\"><label style=\"margin:0\">📦 Projeto: ProjectData_slot_X.bytes</label><span></span><input type=\"file\" id=\"im_projeto\"><span></span><small id=\"st_projeto\"></small></div>\n<div class=\"slot\"><label style=\"margin:0\">📄 Meta: ProjectData_slot_X.meta</label><span></span><input type=\"file\" id=\"im_meta\"><span></span><small id=\"st_meta\"></small></div>\n<div class=\"slot\"><label style=\"margin:0\">🎨 Skins: UserLevelData_X.bytes</label><span></span><input type=\"file\" id=\"im_user\"><span></span><small id=\"st_user\"></small></div>\n<div id=\"im_msg\"></div>\n<div id=\"im_dl\"></div>\n<button class=\"btn alt\" id=\"im_rest\" hidden>↩️ Restaurar arquivos originais</button>\n<button class=\"btn alt\" id=\"im_clear\">🗑️ Limpar arquivos salvos</button></div>\n<nav id=\"nav\"></nav>\n\n<section id=\"skins\"><h2>🎨 Ativar Skins</h2>\n<p class=\"d\">Usa: Skins (UserLevelData), Meta e Projeto.</p>\n<button class=\"btn\" id=\"sk_go\">Processar</button><div class=\"res\" id=\"sk_r\"></div></section>\n\n<section id=\"modo\"><h2>🕹️ Mudar Modo</h2>\n<p class=\"d\">Usa: Projeto e Meta. Atualiza o MD5 no .meta.</p>\n<div class=\"info\" id=\"mo_i\" hidden></div>\n<label>Novo modo</label><select id=\"mo_s\"></select>\n<button class=\"btn\" id=\"mo_go\">Aplicar</button><div class=\"res\" id=\"mo_r\"></div></section>\n\n<section id=\"mapa\"><h2>🗺️ Mudar Mapa</h2>\n<p class=\"d\">Usa: Projeto (mapa) e Meta (área).</p>\n<div class=\"info\" id=\"ma_i\" hidden></div>\n<label>Mapa</label><select id=\"ma_s\"></select>\n<label>Área</label><select id=\"ma_a\"></select>\n<button class=\"btn\" id=\"ma_go\">Aplicar</button><div class=\"res\" id=\"ma_r\"></div></section>\n\n<section id=\"minimapa\"><h2>🧭 Mini mapa</h2>\n<p class=\"d\">Usa: Meta. Só funciona em mapas <b>50x50</b> e <b>100x100</b>. A imagem PNG precisa ter exatamente o tamanho do mapa (50x50 ou 100x100) e conter APENAS branco e transparente.</p>\n<div class=\"info\" id=\"mm_i\" hidden></div>\n<div id=\"mm_prev\" hidden><label>Mini mapa que está no .meta agora</label><canvas class=\"mmc\" id=\"mm_c1\"></canvas></div>\n<label>Orientação (se o desenho acima aparecer de cabeça para baixo ou espelhado, troque)</label>\n<select id=\"mm_o\"><option value=\"0\">Normal</option><option value=\"1\">Inverter vertical</option><option value=\"2\">Inverter horizontal</option><option value=\"3\">Girar 180°</option></select>\n<label>Imagem PNG (branco e transparente)</label><input type=\"file\" id=\"mm_f\" accept=\"image/png\">\n<button class=\"btn\" id=\"mm_go\">Aplicar</button><div class=\"res\" id=\"mm_r\"></div></section>\n\n<section id=\"round\"><h2>🎯 Rounds, Times e Jogadores</h2>\n<p class=\"d\">Usa: Projeto. Preencha só o que quiser mudar. Créditos: LyphezYT.</p>\n<div class=\"row\"><div><label>Rounds (1-20)</label><input type=\"number\" id=\"ro_r\" min=\"1\" max=\"20\" inputmode=\"numeric\"></div>\n<div><label>Times (1-12)</label><input type=\"number\" id=\"ro_t\" min=\"1\" max=\"12\" inputmode=\"numeric\"></div>\n<div><label>Jogadores (1-12)</label><input type=\"number\" id=\"ro_p\" min=\"1\" max=\"12\" inputmode=\"numeric\"></div></div>\n<button class=\"btn\" id=\"ro_go\">Aplicar</button><div class=\"res\" id=\"ro_r2\"></div></section>\n\n<section id=\"versala\"><h2>🔎 Ver sala</h2>\n<p class=\"d\">Características lidas dos seus arquivos importados.</p>\n<div id=\"vs_files\"><div class=\"info\">Importe os arquivos acima para ver.</div></div>\n<h2 style=\"margin-top:22px\">🌐 Buscar por código</h2>\n<p class=\"d\">Dados públicos do mapa (ffcl.vercel.app).</p>\n<label>Código do mapa</label><input id=\"vs_c\" placeholder=\"Ex: H00C79\" autocapitalize=\"characters\">\n<label>Região (opcional: br, pk, ind)</label><input id=\"vs_r\" placeholder=\"vazio = tenta pk, ind, br\">\n<button class=\"btn\" id=\"vs_go\">Buscar</button><div class=\"res\" id=\"vs_res\"></div>\n</section>\n</main>\n<script>\nconst $=id=>document.getElementById(id);\nconst TABS=[[\"skins\",\"🎨 Ativar\"],[\"modo\",\"🕹️ Modo\"],[\"mapa\",\"🗺️ Mapa\"],[\"minimapa\",\"🧭 Mini mapa\"],[\"round\",\"🎯 Round\"],[\"versala\",\"🔎 Ver sala\"]];\nTABS.forEach(([id,t])=>{const b=document.createElement(\"button\");b.textContent=t;b.onclick=()=>show(id);b.dataset.t=id;$(\"nav\").append(b)});\nfunction show(id){document.querySelectorAll(\"section\").forEach(s=>s.classList.toggle(\"on\",s.id===id));\n document.querySelectorAll(\"nav button\").forEach(b=>b.classList.toggle(\"on\",b.dataset.t===id));history.replaceState(null,\"\",\"#\"+id)}\nshow(TABS.some(t=>t[0]===location.hash.slice(1))?location.hash.slice(1):\"skins\");\n\nfunction el(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e}\nasync function call(url,opt){const r=await fetch(url,opt);let j;try{j=await r.json()}catch{throw new Error(\"Resposta inválida do servidor (\"+r.status+\")\")}\n if(!r.ok||j.erro)throw new Error(j.erro||\"Erro \"+r.status);return j}\nfunction fd(o){const f=new FormData();for(const[k,v]of Object.entries(o)){if(v===null||v===undefined||v===\"\")continue;\n if(typeof v===\"object\"&&v.blob)f.append(k,v.blob,v.nome);else f.append(k,v)}return f}\nfunction b64blob(b64){const bin=atob(b64),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return new Blob([u])}\nfunction dl(nome,b64,mime){const a=el(\"a\");a.href=URL.createObjectURL(new Blob([b64blob(b64)],{type:mime||\"application/octet-stream\"}));a.download=nome;document.body.append(a);a.click();a.remove()}\nfunction erro(box,e){box.replaceChildren(el(\"div\",\"msg er\",\"❌ \"+e.message))}\nasync function run(btn,box,fn){btn.disabled=true;box.replaceChildren(el(\"div\",\"msg\",\"⏳ Processando...\"));\n try{await fn()}catch(e){erro(box,e)}finally{btn.disabled=false}}\n\n// ---- ARQUIVOS IMPORTADOS (uma vez só)\nconst ROLES={projeto:\"Projeto (ProjectData_slot_X.bytes)\",meta:\"Meta (.meta)\",user:\"Skins (UserLevelData_X.bytes)\"};\nconst ST={projeto:null,meta:null,user:null};let ORIG={};\nconst roleOf=n=>/\\.meta$/i.test(n)?\"meta\":/^UserLevelData/i.test(n)?\"user\":\"projeto\";\nconst get=r=>ST[r]?{blob:ST[r].blob,nome:ST[r].nome}:null;\nfunction need(...rs){const f=rs.filter(r=>!ST[r]).map(r=>ROLES[r]);if(f.length)throw new Error(\"Importe primeiro, no topo da página: \"+f.join(\", \")+\".\")}\nfunction setSlot(r,nome,blob,ed){ST[r]={nome,blob,ed:!!ed};if(!ed)ORIG[r]={nome,blob}}\nfunction renderImport(){let alg=false;\n for(const r of Object.keys(ST)){const s=$(\"st_\"+r);const x=ST[r];s.className=x?(x.ed?\"ed\":\"ok\"):\"\";\n  s.textContent=x?(x.ed?\"✏️ \"+x.nome+\" (editado)\":\"✔ \"+x.nome):\"nenhum arquivo\";if(x&&x.ed)alg=true}\n $(\"im_rest\").hidden=!alg;renderDl()}\nlet tm=null;function refresh(){renderImport();mmAtualizar();dbSalvar();clearTimeout(tm);tm=setTimeout(async()=>{\n const mi=$(\"mo_i\"),ai=$(\"ma_i\");mi.hidden=ai.hidden=true;\n if(ST.projeto)try{const r=await call(\"/api/modo/info\",{method:\"POST\",body:fd({bytes:get(\"projeto\")})});mi.textContent=\"🕹️ Modo atual: \"+r.modo;mi.hidden=false}catch(e){mi.textContent=\"⚠️ \"+e.message;mi.hidden=false}\n if(ST.projeto&&ST.meta)try{const r=await call(\"/api/mapa/info\",{method:\"POST\",body:fd({bytes:get(\"projeto\"),meta:get(\"meta\")})});ai.textContent=\"🗺️ Atual: \"+r.mapa+\" | Área: \"+r.area;ai.hidden=false}catch(e){ai.textContent=\"⚠️ \"+e.message;ai.hidden=false}\n const box=$(\"vs_files\");\n if(!ST.projeto&&!ST.meta&&!ST.user){box.replaceChildren(el(\"div\",\"info\",\"Importe os arquivos acima para ver.\"));return}\n try{const r=await call(\"/api/caracteristicas\",{method:\"POST\",body:fd({projeto:get(\"projeto\"),meta:get(\"meta\"),user:get(\"user\")})});box.replaceChildren();\n  (r.avisos||[]).forEach(a=>box.append(el(\"div\",\"msg wn\",\"⚠️ \"+a)));\n  r.grupos.forEach(g=>{const d=el(\"div\",\"grp\");d.append(el(\"h3\",null,g.titulo));const kv=el(\"div\",\"kv\");g.itens.forEach(([l,v])=>{kv.append(el(\"b\",null,l));kv.append(el(\"code\",null,v))});d.append(kv);box.append(d)})\n }catch(e){erro(box,e)}},150)}\n[\"projeto\",\"meta\",\"user\"].forEach(r=>$(\"im_\"+r).onchange=e=>{const f=e.target.files[0];if(f){setSlot(r,f.name,f,false);refresh()}});\n$(\"im_multi\").onchange=async e=>{const fs=[...e.target.files];if(!fs.length)return;const m=$(\"im_msg\");m.replaceChildren(el(\"div\",\"msg\",\"⏳ Lendo arquivos...\"));\n try{const f=new FormData();fs.forEach(x=>f.append(\"arquivos\",x,x.name));const r=await call(\"/api/importar\",{method:\"POST\",body:f});\n  for(const[k,v]of Object.entries(r.arquivos))setSlot(k,v.nome,b64blob(v.b64),false);\n  m.replaceChildren();if(r.ignorados&&r.ignorados.length)m.append(el(\"div\",\"msg wn\",\"⚠️ Ignorados (nome não reconhecido): \"+r.ignorados.join(\", \")+\". Use os campos abaixo para escolher à mão.\"));\n  refresh()}catch(x){erro(m,x)}e.target.value=\"\"};\n$(\"im_rest\").onclick=()=>{for(const r of Object.keys(ST))ST[r]=ORIG[r]?{...ORIG[r],ed:false}:null;refresh()};\nfunction aplicarSaidas(r){for(const a of r.arquivos)setSlot(roleOf(a.nome),a.nome,b64blob(a.b64),true);refresh()}\n\n// ---- SALVAR NO APARELHO (IndexedDB; se o navegador bloquear, segue sem salvar)\nconst DB_NOME=\"craftland-tools\",DB_STORE=\"arquivos\";\nfunction dbAbrir(){return new Promise((ok,no)=>{try{const q=indexedDB.open(DB_NOME,1);q.onupgradeneeded=()=>q.result.createObjectStore(DB_STORE);q.onsuccess=()=>ok(q.result);q.onerror=()=>no(q.error)}catch(e){no(e)}})}\nasync function dbSalvar(){try{const db=await dbAbrir();const tx=db.transaction(DB_STORE,\"readwrite\"),s=tx.objectStore(DB_STORE);s.clear();\n for(const r of Object.keys(ST)){if(ST[r])s.put({nome:ST[r].nome,blob:ST[r].blob,ed:ST[r].ed,orig:ORIG[r]||null},r)}\n await new Promise((ok,no)=>{tx.oncomplete=ok;tx.onerror=()=>no(tx.error);tx.onabort=()=>no(tx.error)});db.close()}catch(e){}}\nasync function dbCarregar(){try{const db=await dbAbrir();const s=db.transaction(DB_STORE).objectStore(DB_STORE);\n const keys=await new Promise((ok,no)=>{const q=s.getAllKeys();q.onsuccess=()=>ok(q.result);q.onerror=()=>no(q.error)});\n const vals=await new Promise((ok,no)=>{const q=s.getAll();q.onsuccess=()=>ok(q.result);q.onerror=()=>no(q.error)});\n db.close();let n=0;keys.forEach((k,i)=>{const v=vals[i];if(k in ST&&v&&v.blob){ST[k]={nome:v.nome,blob:v.blob,ed:!!v.ed};if(v.orig)ORIG[k]=v.orig;n++}});return n>0}catch(e){return false}}\nasync function dbLimpar(){try{const db=await dbAbrir();const tx=db.transaction(DB_STORE,\"readwrite\");tx.objectStore(DB_STORE).clear();await new Promise(ok=>{tx.oncomplete=ok;tx.onerror=ok;tx.onabort=ok});db.close()}catch(e){}}\n$(\"im_clear\").onclick=async()=>{for(const r of Object.keys(ST))ST[r]=null;ORIG={};await dbLimpar();\n [\"im_multi\",\"im_projeto\",\"im_meta\",\"im_user\"].forEach(i=>$(i).value=\"\");$(\"im_msg\").replaceChildren(el(\"div\",\"msg ok\",\"🗑️ Arquivos salvos apagados deste aparelho.\"));refresh()};\ndbCarregar().then(ok=>{if(ok){$(\"im_msg\").replaceChildren(el(\"div\",\"msg ok\",\"💾 Arquivos recuperados da última vez neste aparelho.\"));refresh()}});\n\n\nfunction resultado(box,r){\n box.replaceChildren(el(\"div\",\"msg ok\",\"✅ \"+r.titulo));\n const kv=el(\"div\",\"kv\");\n r.campos.forEach(c=>{kv.append(el(\"b\",null,c.label));const v=el(\"code\");\n  v.textContent=c.antes!=null&&c.depois!=null?c.antes+\" → \"+c.depois:(c.depois??c.antes??\"\");kv.append(v)});\n box.append(kv);\n (r.avisos||[]).forEach(a=>box.append(el(\"div\",\"msg wn\",\"⚠️ \"+a)));\n if(r.logs&&r.logs.length)box.append(el(\"div\",\"logs\",r.logs.join(\"\\n\")));\n box.append(el(\"div\",\"msg ok\",\"📂 Os arquivos importados foram atualizados com o resultado. Pode continuar em outra aba: as mudanças se acumulam.\"));\n r.arquivos.forEach(a=>{const b=el(\"button\",\"btn\",null);b.textContent=\"⬇️ \"+a.nome;b.onclick=()=>dl(a.nome,a.b64);box.append(b)});\n box.append(btnTudo());\n aplicarSaidas(r)}\n\n// ---- CONFIG\nlet CFG=null;\ncall(\"/api/config\").then(c=>{CFG=c;\n c.modos.forEach(m=>$(\"mo_s\").append(new Option(m.label,m.id)));\n c.mapas.forEach(m=>$(\"ma_s\").append(new Option(m.label,m.id)));fillAreas()}).catch(e=>erro($(\"mo_r\"),e));\nfunction fillAreas(){const m=CFG.mapas.find(x=>x.id===$(\"ma_s\").value);$(\"ma_a\").replaceChildren();m.areas.forEach(a=>$(\"ma_a\").append(new Option(a.label,a.id)))}\n$(\"ma_s\").onchange=fillAreas;\n\n$(\"sk_go\").onclick=()=>run($(\"sk_go\"),$(\"sk_r\"),async()=>{need(\"user\",\"meta\",\"projeto\");\n resultado($(\"sk_r\"),await call(\"/api/skins\",{method:\"POST\",body:fd({bytes:get(\"user\"),meta:get(\"meta\"),projeto:get(\"projeto\")})}))});\n$(\"mo_go\").onclick=()=>run($(\"mo_go\"),$(\"mo_r\"),async()=>{need(\"projeto\",\"meta\");\n resultado($(\"mo_r\"),await call(\"/api/modo\",{method:\"POST\",body:fd({bytes:get(\"projeto\"),meta:get(\"meta\"),modo:$(\"mo_s\").value})}))});\n$(\"ma_go\").onclick=()=>run($(\"ma_go\"),$(\"ma_r\"),async()=>{need(\"projeto\",\"meta\");\n resultado($(\"ma_r\"),await call(\"/api/mapa\",{method:\"POST\",body:fd({bytes:get(\"projeto\"),meta:get(\"meta\"),mapa:$(\"ma_s\").value,area:$(\"ma_a\").value})}))});\n$(\"ro_go\").onclick=()=>run($(\"ro_go\"),$(\"ro_r2\"),async()=>{need(\"projeto\");\n const r=await call(\"/api/round\",{method:\"POST\",body:fd({arquivo:get(\"projeto\"),rounds:$(\"ro_r\").value,teams:$(\"ro_t\").value,players:$(\"ro_p\").value,meta:get(\"meta\")})});\n resultado($(\"ro_r2\"),{...r,campos:r.campos.map(c=>c.depois===null?{label:c.label,antes:null,depois:c.antes+\" (sem alteração)\"}:c)})});\n\n\n// ---- BAIXAR TUDO (todos os arquivos importados, já com as mudanças acumuladas)\nconst CRC=(()=>{const t=new Uint32Array(256);for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xedb88320^(c>>>1):c>>>1;t[n]=c>>>0}return t})();\nfunction crc32(u){let c=-1;for(let i=0;i<u.length;i++)c=CRC[(c^u[i])&255]^(c>>>8);return(c^-1)>>>0}\nasync function zipBlob(fs){const enc=new TextEncoder(),parts=[],cen=[];let off=0;const d=new Date();\n const t=(d.getHours()<<11)|(d.getMinutes()<<5)|(d.getSeconds()>>1),dt=((d.getFullYear()-1980)<<9)|((d.getMonth()+1)<<5)|d.getDate();\n for(const f of fs){const u=new Uint8Array(await f.blob.arrayBuffer()),n=enc.encode(f.nome),c=crc32(u);\n  const lh=new DataView(new ArrayBuffer(30));lh.setUint32(0,0x04034b50,true);lh.setUint16(4,20,true);lh.setUint16(6,0x800,true);lh.setUint16(10,t,true);lh.setUint16(12,dt,true);lh.setUint32(14,c,true);lh.setUint32(18,u.length,true);lh.setUint32(22,u.length,true);lh.setUint16(26,n.length,true);\n  parts.push(lh.buffer,n,u);\n  const ch=new DataView(new ArrayBuffer(46));ch.setUint32(0,0x02014b50,true);ch.setUint16(4,20,true);ch.setUint16(6,20,true);ch.setUint16(8,0x800,true);ch.setUint16(12,t,true);ch.setUint16(14,dt,true);ch.setUint32(16,c,true);ch.setUint32(20,u.length,true);ch.setUint32(24,u.length,true);ch.setUint16(28,n.length,true);ch.setUint32(42,off,true);\n  cen.push(ch.buffer,n);off+=30+n.length+u.length}\n let cl=0;for(const x of cen)cl+=x.byteLength;\n const e=new DataView(new ArrayBuffer(22));e.setUint32(0,0x06054b50,true);e.setUint16(8,fs.length,true);e.setUint16(10,fs.length,true);e.setUint32(12,cl,true);e.setUint32(16,off,true);\n return new Blob([...parts,...cen,e.buffer],{type:\"application/zip\"})}\nfunction btnTudo(){const b=el(\"button\",\"btn alt\");b.textContent=\"📦 Baixar tudo com as mudanças acumuladas (.zip)\";\n b.onclick=async()=>{const fs=Object.keys(ST).filter(r=>ST[r]).map(r=>({nome:ST[r].nome,blob:ST[r].blob}));\n  if(!fs.length)return;dlBlob(\"craftland_editado.zip\",await zipBlob(fs))};return b}\nfunction renderDl(){const box=$(\"im_dl\");box.replaceChildren();const rs=Object.keys(ST).filter(r=>ST[r]);if(!rs.length)return;\n box.append(el(\"label\",null,rs.some(r=>ST[r].ed)?\"⬇️ Baixar com todas as mudanças feitas\":\"⬇️ Baixar arquivos\"));\n rs.forEach(r=>{const x=ST[r],b=el(\"button\",\"btn alt\");b.textContent=(x.ed?\"✏️ \":\"\")+x.nome;b.onclick=()=>dlBlob(x.nome,x.blob);box.append(b)});\n if(rs.length>1)box.append(btnTudo())}\n\n// ---- MINI MAPA (tudo no navegador; só 50x50 e 100x100)\nconst MM_LADOS={10:100,25:50};let MM_ATUAL=null;\nfunction mmLer(u){let i=0,id=null,ini=-1,len=0;\n const vi=()=>{let r=0,m=1;for(;;){if(i>=u.length)throw new Error(\"Arquivo .meta incompleto (formato inesperado).\");const b=u[i++];r+=(b&127)*m;if(!(b&128))return r;m*=128}};\n while(i<u.length){const t=vi(),f=Math.floor(t/8),w=t%8;\n  if(w===0){const v=vi();if(f===17&&id===null)id=v}\n  else if(w===2){const l=vi();if(f===11&&ini<0){ini=i;len=l}i+=l}\n  else if(w===1)i+=8;else if(w===5)i+=4;else throw new Error(\"Formato do .meta inesperado (tipo \"+w+\").\")}\n return{id,ini,len}}\nfunction mmChecar(u){const m=mmLer(u);\n if(m.id===null)throw new Error(\"Este .meta não informa o tamanho do mapa. Mini mapa só funciona em 50x50 e 100x100.\");\n const lado=MM_LADOS[m.id];\n if(!lado)throw new Error(\"Mini mapa só funciona em mapas 50x50 e 100x100. Este .meta é de outro mapa (ID \"+m.id+\").\");\n if(m.ini<0)throw new Error(\"Não encontrei o mini mapa dentro deste .meta.\");\n const esp=Math.ceil(lado*lado/8);\n if(m.len!==esp||m.ini+m.len>u.length)throw new Error(\"O mini mapa deste .meta tem \"+m.len+\" bytes, mas o esperado para \"+lado+\"x\"+lado+\" é \"+esp+\". Não vou alterar para não corromper o arquivo.\");\n return{lado,ini:m.ini,len:m.len}}\nfunction mmPos(x,y,l,o){return o===1?[x,l-1-y]:o===2?[l-1-x,y]:o===3?[l-1-x,l-1-y]:[x,y]}\nfunction mmDecodificar(u,m,o){const l=m.lado,px=new Uint8Array(l*l);\n for(let y=0;y<l;y++)for(let x=0;x<l;x++){const[sx,sy]=mmPos(x,y,l,o),k=sy*l+sx;px[y*l+x]=(u[m.ini+(k>>3)]>>(k&7))&1}\n return px}\nfunction mmCodificar(px,m,o,u){const l=m.lado,out=u.slice();out.fill(0,m.ini,m.ini+m.len);\n for(let y=0;y<l;y++)for(let x=0;x<l;x++)if(px[y*l+x]){const[sx,sy]=mmPos(x,y,l,o),k=sy*l+sx;out[m.ini+(k>>3)]|=1<<(k&7)}\n return out}\nasync function mmLerPng(file,l){let bmp;\n try{bmp=await createImageBitmap(file,{colorSpaceConversion:\"none\",premultiplyAlpha:\"none\"})}\n catch(e){try{bmp=await createImageBitmap(file)}catch(e2){throw new Error(\"Não consegui ler a imagem. Use um arquivo PNG.\")}}\n if(bmp.width!==l||bmp.height!==l)throw new Error(\"A imagem tem \"+bmp.width+\"x\"+bmp.height+\" e precisa ter exatamente \"+l+\"x\"+l+\".\");\n const c=el(\"canvas\");c.width=c.height=l;const g=c.getContext(\"2d\",{willReadFrequently:true});g.drawImage(bmp,0,0);\n const d=g.getImageData(0,0,l,l).data,px=new Uint8Array(l*l);let ruim=0;\n for(let i=0;i<l*l;i++){const r=d[i*4],gg=d[i*4+1],b=d[i*4+2],a=d[i*4+3];\n  if(a===0)px[i]=0;else if(a===255&&r===255&&gg===255&&b===255)px[i]=1;else ruim++}\n if(ruim)throw new Error(ruim+\" pixel(s) não são branco puro nem transparente. A imagem deve ter APENAS branco e transparente (sem bordas suavizadas nem outras cores).\");\n return px}\nfunction mmDesenhar(cv,px,l){cv.width=cv.height=l;const g=cv.getContext(\"2d\"),im=g.createImageData(l,l);\n for(let i=0;i<l*l;i++){const v=px[i]?255:0;im.data[i*4]=im.data[i*4+1]=im.data[i*4+2]=v;im.data[i*4+3]=px[i]?255:0}g.putImageData(im,0,0)}\nfunction mmPrevia(){if(!MM_ATUAL)return;const{u,m}=MM_ATUAL;mmDesenhar($(\"mm_c1\"),mmDecodificar(u,m,+$(\"mm_o\").value),m.lado);$(\"mm_prev\").hidden=false}\nasync function mmAtualizar(){const i=$(\"mm_i\");MM_ATUAL=null;$(\"mm_prev\").hidden=true;\n if(!ST.meta){i.textContent=\"Importe o .meta no topo da página.\";i.hidden=false;return}\n try{const u=new Uint8Array(await ST.meta.blob.arrayBuffer()),m=mmChecar(u);MM_ATUAL={u,m};\n  i.textContent=\"🧭 Mapa \"+m.lado+\"x\"+m.lado+\" — mini mapa encontrado (\"+m.len+\" bytes).\";i.hidden=false;mmPrevia()}\n catch(e){i.textContent=\"⚠️ \"+e.message;i.hidden=false}}\n$(\"mm_o\").onchange=mmPrevia;\nfunction dlBlob(nome,blob){const a=el(\"a\");a.href=URL.createObjectURL(blob);a.download=nome;document.body.append(a);a.click();a.remove()}\n$(\"mm_go\").onclick=()=>run($(\"mm_go\"),$(\"mm_r\"),async()=>{need(\"meta\");\n const f=$(\"mm_f\").files[0];if(!f)throw new Error(\"Escolha a imagem PNG.\");\n const u=new Uint8Array(await ST.meta.blob.arrayBuffer()),m=mmChecar(u),o=+$(\"mm_o\").value;\n const px=await mmLerPng(f,m.lado),out=mmCodificar(px,m,o,u),nome=ST.meta.nome,blob=new Blob([out]),box=$(\"mm_r\");\n box.replaceChildren(el(\"div\",\"msg ok\",\"✅ Mini mapa \"+m.lado+\"x\"+m.lado+\" aplicado (\"+px.reduce((a,b)=>a+b,0)+\" pixels brancos).\"));\n const b=el(\"button\",\"btn\");b.textContent=\"⬇️ \"+nome;b.onclick=()=>dlBlob(nome,blob);box.append(b);\n box.append(el(\"div\",\"msg ok\",\"📂 O .meta importado foi atualizado com o mini mapa novo.\"));box.append(btnTudo());\n setSlot(\"meta\",nome,blob,true);refresh()});\n\n// ---- ACHATA UM JSON EM LINHAS [caminho, valor] (mostra todos os campos da API)\nfunction celula(v,k){if(/^https:\\/\\/\\S+$/.test(v)&&(/\\.(png|jpe?g|webp|gif|svg)(\\?|$)/i.test(v)||/cover|icon|badge|image|pic|thumb|avatar|banner/i.test(k||\"\"))){const im=el(\"img\",\"pic\");im.src=v;im.alt=k||\"\";im.loading=\"lazy\";return im}return el(\"code\",null,v)}\nfunction flat(o,p){const r=[];p=p||\"\";if(o===null||o===undefined)return r;\n if(Array.isArray(o)){if(!o.length){r.push([p,\"[]\"]);return r}if(o.every(x=>x===null||typeof x!==\"object\")){r.push([p,o.join(\", \")]);return r}o.forEach((x,n)=>r.push(...flat(x,p+\"[\"+(n+1)+\"]\")));return r}\n if(typeof o===\"object\"){for(const[k,v]of Object.entries(o))r.push(...flat(v,p?p+\".\"+k:k));return r}\n r.push([p,String(o)]);return r}\nfunction kvDe(obj,max){const kv=el(\"div\",\"kv\");flat(obj).slice(0,max||1e4).forEach(([k,v])=>{kv.append(el(\"b\",null,k));kv.append(celula(v,k))});return kv}\nfunction brutos(titulo,obj){if(obj===null||obj===undefined||(typeof obj===\"object\"&&!Object.keys(obj).length))return null;\n const d=el(\"details\",\"raw\");d.append(el(\"summary\",null,titulo+\" (\"+flat(obj).length+\" campos)\"));d.append(kvDe(obj));return d}\n\n// ---- BUSCA POR CÓDIGO\n$(\"vs_go\").onclick=()=>run($(\"vs_go\"),$(\"vs_res\"),async()=>{\n const q=new URLSearchParams({codigo:$(\"vs_c\").value,regiao:$(\"vs_r\").value});\n const i=await call(\"/api/versala?\"+q);const box=$(\"vs_res\");box.replaceChildren();\n if(i.capa&&/^https:\\/\\//.test(i.capa)){const im=el(\"img\",\"cover\");im.src=i.capa;im.alt=\"\";box.append(im)}\n box.append(el(\"h2\",null,\"🗺️ \"+i.titulo));\n if(i.descricao_limpa)box.append(el(\"div\",\"logs\",i.descricao_limpa));\n const kv=el(\"div\",\"kv\");const add=(k,v)=>{if(v===null||v===undefined||v===\"\")return;kv.append(el(\"b\",null,k));kv.append(el(\"code\",null,String(v)))};\n add(\"👤 Criador\",i.criador);add(\"🆔 UID\",i.criador_uid);add(\"🔑 Código\",\"#\"+i.codigo);\n if(i.likes!=null)add(\"👍 Curtidas\",i.likes+(i.likes_rate?\" (\"+i.likes_rate+\")\":\"\"));\n if(i.dislikes!=null)add(\"👎 Não curtidas\",i.dislikes);if(i.subscribers!=null)add(\"⭐ Inscritos\",i.subscribers);\n add(\"🗺️ Mapa\",i.mapa);add(\"🤝 Times\",i.teams);add(\"🎮 Modo\",i.game_mode);\n if(i.min_play_time){let t=i.min_play_time+\" min\";if(i.max_play_time&&i.max_play_time!==i.min_play_time)t+=\" - \"+i.max_play_time+\" min\";add(\"⏱️ Tempo\",t)}\n add(\"🔥 Popularidade\",i.popularidade);add(\"📅 Criado em\",i.criar_tempo);add(\"🔄 Atualizado em\",i.atualizar_tempo);add(\"🌎 Região\",(i.regiao||\"N/A\").toUpperCase());\n box.append(kv);\n if(i.tags&&i.tags.length){const t=el(\"div\",\"tags\");i.tags.forEach(x=>t.append(el(\"span\",null,x)));box.append(t)}\n const p=i.perfil_criador;if(p){box.append(el(\"h2\",null,\"🎨 Perfil do Criador\"));const k2=el(\"div\",\"kv\");\n  const LB={\"Creator Level\":\"Nível\",\"Craftland EXP\":\"EXP Craftland\",\"Total Create Maps\":\"Mapas criados\",\"Maps Create\":\"Mapas criados\",\"Public Maps\":\"Mapas públicos\",\"Likes\":\"Curtidas\",\"Subscribers\":\"Inscritos\",\"Followers\":\"Seguidores\",\"About\":\"Sobre\"};\n  Object.entries(p).forEach(([f,v])=>{if(v===undefined||v===null||v===\"\"||typeof v===\"object\")return;k2.append(el(\"b\",null,LB[f]||f));k2.append(celula(String(v),f))});box.append(k2)}\n const om=i.outros_mapas||[];\n if(om.length){box.append(el(\"h2\",null,\"🗺️ Outros mapas do criador (\"+om.length+\")\"));\n  om.forEach(m=>{const c=el(\"div\",\"card\");if(m.capa&&/^https:\\/\\//.test(m.capa)){const im=el(\"img\",\"cover\");im.src=m.capa;im.alt=\"\";c.append(im)}\n   c.append(el(\"h3\",null,m.titulo||\"(sem título)\"));if(m.codigo)c.append(el(\"code\",null,\"#\"+m.codigo));\n   if(m.codigo){const b=el(\"button\",\"btn alt\",\"🔎 Ver este mapa\");b.onclick=()=>{$(\"vs_c\").value=m.codigo;$(\"vs_r\").value=i.regiao||\"\";$(\"vs_go\").click();window.scrollTo(0,0)};c.append(b)}\n   const d=brutos(\"Campos deste mapa\",m.campos);if(d)c.append(d);box.append(c)})}\n box.append(el(\"h2\",null,\"📋 Todos os campos da API\"));\n [[\"Map Details (mapa)\",i.api_mapa],[\"Outros dados da resposta do mapa\",i.api_extra],[\"Resposta completa do perfil do criador\",i.api_perfil]].forEach(([t,o])=>{const d=brutos(t,o);if(d)box.append(d)});\n});\n</script></body></html>\n";

// ============================================================
//  ROTAS (equivalente ao app.py do Flask)
// ============================================================
const MAX_BODY = 64 * 1024 * 1024;

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });
}

async function arq(form, campo) {
  const f = form.get(campo);
  if (!f || typeof f === "string" || !f.name) return null;
  return [baseName(f.name), new Uint8Array(await f.arrayBuffer())];
}
async function obrig(form, campo, rotulo) {
  const a = await arq(form, campo);
  if (a === null) throw new ErroUsuario(`Envie o arquivo: ${rotulo}.`);
  return a;
}
function inteiro(form, campo) {
  const raw = form.get(campo);
  const v = (typeof raw === "string" ? raw : "").trim();
  if (v === "") return null;
  if (!/^[+-]?\d+$/.test(v)) throw new ErroUsuario(`Valor inválido em ${campo}.`);
  return parseInt(v, 10);
}
const txt = (form, campo, padrao = "") => { const v = form.get(campo); return typeof v === "string" ? v : padrao; };

async function pack(res) {
  const arqs = res.arquivos;
  const zip = arqs.length > 1 ? b64(await montarZip(arqs)) : null;
  res.arquivos = arqs.map((a) => ({ nome: a.nome, b64: b64(a.dados) }));
  res.zip = zip;
  return res;
}

const ROTAS_POST = {
  "/api/round": async (f) => {
    const [nome, dados] = await obrig(f, "arquivo", "projeto (.bytes/.bin/.dat)");
    return pack(await processarRound(nome, dados, inteiro(f, "rounds"), inteiro(f, "teams"), inteiro(f, "players"), await arq(f, "meta")));
  },
  "/api/modo/info": async (f) => ({ modo: modoInfo((await obrig(f, "bytes", ".bytes"))[1]) }),
  "/api/modo": async (f) => {
    const b = await obrig(f, "bytes", ".bytes"), m = await obrig(f, "meta", ".meta");
    return pack(await processarModo(b[0], b[1], m[0], m[1], txt(f, "modo")));
  },
  "/api/mapa/info": async (f) => {
    const b = await obrig(f, "bytes", ".bytes"), m = await obrig(f, "meta", ".meta");
    return mapaInfo(b[1], m[1]);
  },
  "/api/mapa": async (f) => {
    const b = await obrig(f, "bytes", ".bytes"), m = await obrig(f, "meta", ".meta");
    const area = inteiro(f, "area");
    if (area === null) throw new ErroUsuario("Escolha a área.");
    return pack(await processarMapa(b[0], b[1], m[0], m[1], txt(f, "mapa"), area));
  },
  "/api/skins": async (f) => pack(await processarSkins(await arq(f, "bytes"), await arq(f, "meta"), await arq(f, "projeto"), await arq(f, "zip"))),
  "/api/importar": async (f) => {
    const lista = [];
    for (const v of f.getAll("arquivos")) {
      if (v && typeof v !== "string" && v.name) lista.push([baseName(v.name), new Uint8Array(await v.arrayBuffer())]);
    }
    if (!lista.length) throw new ErroUsuario("Nenhum arquivo enviado.");
    const [achados, ign] = await classificarImportacao(lista);
    if (!Object.keys(achados).length)
      throw new ErroUsuario("Não reconheci nenhum arquivo (esperado: UserLevelData_N.bytes, ProjectData_slot_N.meta, ProjectData_slot_N.bytes ou um .zip com eles).");
    return { arquivos: Object.fromEntries(Object.entries(achados).map(([k, [n, d]]) => [k, { nome: n, b64: b64(d) }])), ignorados: ign };
  },
  "/api/caracteristicas": async (f) => caracteristicas(await arq(f, "projeto"), await arq(f, "meta"), await arq(f, "user")),
};

async function executar(fn) {
  try {
    return json(await fn());
  } catch (e) {
    if (e instanceof ErroUsuario) return json({ erro: e.message }, 400);
    return json({ erro: `Erro ao processar o arquivo: ${e && e.name ? e.name : "Error"}: ${e && e.message ? e.message : e}` }, 400);
  }
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, "") : url.pathname;
    const metodo = request.method;

    if (path === "/" && (metodo === "GET" || metodo === "HEAD")) {
      return new Response(HTML, { headers: { "content-type": "text/html; charset=utf-8" } });
    }
    if (path === "/api/config" && metodo === "GET") return json(configSite());
    if (path === "/api/versala" && metodo === "GET") {
      return executar(async () => {
        try {
          return await versala(url.searchParams.get("codigo") || "", (url.searchParams.get("regiao") || "").trim());
        } catch (e) {
          if (e instanceof ValueError) throw new ErroUsuario(e.message);
          throw e;
        }
      });
    }
    if (hasOwn(ROTAS_POST, path)) {
      if (metodo !== "POST") return json({ erro: "Método não permitido." }, 405);
      const tamanho = parseInt(request.headers.get("content-length") || "0", 10);
      if (tamanho > MAX_BODY) return json({ erro: "Arquivo(s) grande(s) demais (limite 64 MB)." }, 413);
      return executar(async () => {
        let form;
        try { form = await request.formData(); } catch { throw new ErroUsuario("Envio inválido (esperado multipart/form-data)."); }
        return ROTAS_POST[path](form);
      });
    }
    return json({ erro: "Não encontrado." }, 404);
  },
};
