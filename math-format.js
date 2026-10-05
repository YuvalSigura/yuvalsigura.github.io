(function(){
  "use strict";

  function esc(s){
    return String(s)
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;");
  }

  function prettyToken(raw){
    let s=esc(raw)
      .replace(/&gt;=/g,"≥")
      .replace(/&lt;=/g,"≤")
      .replace(/-&gt;/g,"→")
      .replace(/&lt;-&gt;/g,"↔")
      .replace(/\*\*/g,"^");

    // Common ASCII powers/subscripts used throughout the question banks.
    s=s.replace(/\^\(([^)]+)\)/g,"<sup>$1</sup>");
    s=s.replace(/\^([A-Za-z0-9+\-−]+)/g,"<sup>$1</sup>");
    s=s.replace(/_\(([^)]+)\)/g,"<sub>$1</sub>");
    s=s.replace(/_([A-Za-z0-9+\-−]+)/g,"<sub>$1</sub>");

    // Make common combinatorics notation visually consistent.
    s=s.replace(/\bC\(([^,]+),([^)]+)\)/g,"C($1,$2)");
    s=s.replace(/\bP\(([^,]+),([^)]+)\)/g,"P($1,$2)");
    return s;
  }

  // A deliberately conservative tokeniser: only Latin/math runs are isolated.
  // Hebrew stays RTL; every mathematical/Latin run gets its own LTR bidi island.
  const RUN=/[A-Za-z0-9φΦΘΣ∑π∞_{}()[\],.!^+\-−·×=<>≤≥|→↔∈∉⊆⊂∪∩\\/:]+(?:\s*[A-Za-z0-9φΦΘΣ∑π∞_{}()[\],.!^+\-−·×=<>≤≥|→↔∈∉⊆⊂∪∩\\/:]+)*/g;

  function mixed(raw){
    const text=String(raw??"");
    let out="",last=0,m;
    RUN.lastIndex=0;
    while((m=RUN.exec(text))){
      const token=m[0];
      // Ignore punctuation-only fragments.
      if(!/[A-Za-z0-9φΦΘΣ∑π∞]/.test(token)) continue;
      out+=esc(text.slice(last,m.index));
      out+='<bdi dir="ltr" class="math-token">'+prettyToken(token)+'</bdi>';
      last=m.index+token.length;
    }
    out+=esc(text.slice(last));
    return out;
  }

  function math(raw){
    return '<span dir="ltr" class="math-token math-only">'+prettyToken(String(raw??""))+'</span>';
  }

  function apply(root=document){
    root.querySelectorAll("[data-math-mixed]").forEach(el=>{
      el.innerHTML=mixed(el.textContent);
    });
  }

  window.ExamMath={escape:esc,prettyToken,mixed,math,apply};
})();