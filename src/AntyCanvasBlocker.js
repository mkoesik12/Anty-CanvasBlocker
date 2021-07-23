const aCanvasBlocker = () => {
  const iframe = document.createElement("iframe");
  iframe.id = "acb";
  iframe.src = location.href + "/aCanvasBlocker";
  document.body.append(iframe);
  HTMLCanvasElement.prototype.toBlob = iframe.contentWindow.HTMLCanvasElement.prototype.toBlob;
  HTMLCanvasElement.prototype.toDataURL = iframe.contentWindow.HTMLCanvasElement.prototype.toDataURL;
  return document.getElementById("acb").remove();
};

const checkCanvasFP = () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const txt = "i9asdm..$#po((^@KbXrww!~cz";
  ctx.textBaseline = "top";
  ctx.font = "14px 'Arial'";
  ctx.textBaseline = "alphabetic";
  ctx.rotate(.05);
  ctx.fillStyle = "#f60";
  ctx.fillRect(125,1,62,20);
  ctx.fillStyle = "#069";
  ctx.fillText(txt, 2, 15);
  ctx.fillStyle = "rgba(102, 200, 0, 0.7)";
  ctx.fillText(txt, 4, 17);
  ctx.shadowBlur=10;
  ctx.shadowColor="blue";
  ctx.fillRect(-20,10,234,5);
  const b64Canvas = canvas.toDataURL();

  let hash=0;
  if (strng.length === 0) {
    return 'nothing!';
  };
  for (let i = 0; i < b64Canvas.length; i++) {
    const char = b64Canvas.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash;
  };
  return hash;
};

const tryIt = () => {
  const preBypass = [];
  const afterBypass = [];
  for(let i = 0; i < 5; i++) {
    preBypass.push(checkCanvasFP());
  };
  aCanvasBlocker();
  for(let i = 0; i < 5; i++) {
    afterBypass.push(checkCanvasFP());
  };
  console.log(`PreBlock: ${preBypass}`);
  console.log(`AfterBlock: ${afterBypass}`);
};

// PreBlock: 666275041,-177098260,1218456481,2117689308,-592154774
// AfterBlock: 613948961,613948961,613948961,613948961,613948961
