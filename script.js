const BANK=[{"id":"d1","course":"discrete","topic":"עקרונות ספירה","term":"עקרון הסכום","def":"כאשר אפשר לבחור באחד ממקרים זרים זה לזה, מספר האפשרויות הכולל הוא סכום מספרי האפשרויות בכל מקרה."},{"id":"d2","course":"discrete","topic":"עקרונות ספירה","term":"עקרון הכפל","def":"כאשר תהליך מורכב משלבים עוקבים, מספר התוצאות הכולל הוא מכפלת מספר האפשרויות בכל שלב."},{"id":"d3","course":"discrete","topic":"קומבינטוריקה","term":"חליפה","def":"סדרה של k איברים שונים מתוך קבוצה בת n איברים; אין חזרות והסדר חשוב."},{"id":"d4","course":"discrete","topic":"קומבינטוריקה","term":"תמורה","def":"חליפה של כל איברי הקבוצה; כלומר סידור של כל n איברי הקבוצה."},{"id":"d5","course":"discrete","topic":"קומבינטוריקה","term":"תמורת אי־סדר מלא","def":"תמורה שבה אף איבר אינו נמצא במקום המקורי שלו."},{"id":"d6","course":"discrete","topic":"קומבינטוריקה","term":"צירוף בלי חזרות","def":"בחירה של k איברים שונים מתוך n כאשר הסדר אינו חשוב; תת־קבוצה בגודל k."},{"id":"d7","course":"discrete","topic":"קומבינטוריקה","term":"צירוף עם חזרות","def":"בחירה של k איברים מתוך n סוגים, עם חזרות וללא חשיבות לסדר; מולטי־קבוצה בגודל k."},{"id":"d8","course":"discrete","topic":"תורת המספרים","term":"מספר ראשוני","def":"מספר טבעי גדול מ־1 שהמחלקים החיוביים היחידים שלו הם 1 והמספר עצמו."},{"id":"d9","course":"discrete","topic":"Euler φ","term":"פונקציית Euler","def":"φ(n) היא מספר ה־k המקיימים 1≤k≤n ו־gcd(k,n)=1."},{"id":"d10","course":"discrete","topic":"פונקציות","term":"פונקציה חד־חד־ערכית","def":"פונקציה שבה איברים שונים בתחום מקבלים תמונות שונות; שקול: f(x)=f(y) גורר x=y."},{"id":"d11","course":"discrete","topic":"פונקציות","term":"פונקציה על","def":"פונקציה שבה לכל איבר בטווח קיים לפחות איבר אחד בתחום שנשלח אליו."},{"id":"d12","course":"discrete","topic":"שובך היונים","term":"עקרון שובך היונים","def":"אם מכניסים יותר עצמים מתאים, לפחות תא אחד יכיל יותר מעצם אחד; בפרט n+1 עצמים ב־n תאים מבטיחים תא עם לפחות 2."},{"id":"d13","course":"discrete","topic":"גרפים","term":"גרף לא מכוון","def":"G=(V,E) שבו V קבוצת הצמתים וכל קשת ב־E מחברת זוג צמתים ללא כיוון."},{"id":"d14","course":"discrete","topic":"גרפים","term":"גרף שלם","def":"גרף לא מכוון שבו כל שני צמתים שונים סמוכים."},{"id":"d15","course":"discrete","topic":"גרפים","term":"גרף דו־צדדי","def":"גרף שניתן לחלק את צמתיו לשתי קבוצות זרות A,B כך שכל קשת מחברת צומת מ־A לצומת מ־B."},{"id":"d16","course":"discrete","topic":"גרפים","term":"גרף דו־צדדי שלם","def":"גרף דו־צדדי שבו כל צומת בצד אחד מחובר לכל צומת בצד השני."},{"id":"d17","course":"discrete","topic":"גרפים","term":"המספר הכרומטי χ(G)","def":"המספר המינימלי של צבעים הדרוש לצביעת הצמתים כך שלשני צמתים סמוכים יהיו צבעים שונים."},{"id":"d18","course":"discrete","topic":"גרפים","term":"משלים של גרף","def":"גרף בעל אותה קבוצת צמתים; שני צמתים שונים סמוכים במשלים אם ורק אם אינם סמוכים בגרף המקורי."},{"id":"d19","course":"discrete","topic":"גרפים","term":"גרפים איזומורפיים","def":"גרפים שקיימת ביניהם התאמה חד־חד־ערכית ועל בין הצמתים השומרת על שכנות."},{"id":"d20","course":"discrete","topic":"גרפים","term":"שכן של צומת","def":"u הוא שכן של v אם קיימת קשת המחברת את u ואת v."},{"id":"d21","course":"discrete","topic":"גרפים","term":"שכנות N(v)","def":"קבוצת כל הצמתים השכנים של v."},{"id":"d22","course":"discrete","topic":"גרפים","term":"דרגה deg(v)","def":"מספר הקשתות הנוגעות בצומת v; בגרף פשוט זהו מספר שכניו."},{"id":"d23","course":"discrete","topic":"גרפים","term":"טיול","def":"סדרת צמתים שבה כל שני צמתים עוקבים סמוכים; מותר לחזור על צמתים ועל קשתות."},{"id":"d24","course":"discrete","topic":"גרפים","term":"טיול סגור","def":"טיול שמתחיל ומסתיים באותו צומת."},{"id":"d25","course":"discrete","topic":"גרפים","term":"מסלול","def":"טיול שבו אין חזרה על קשת."},{"id":"d26","course":"discrete","topic":"גרפים","term":"מסלול פשוט","def":"מסלול שבו אין חזרה על צומת."},{"id":"d27","course":"discrete","topic":"גרפים","term":"מעגל","def":"מסלול סגור — מתחיל ומסתיים באותו צומת."},{"id":"d28","course":"discrete","topic":"גרפים","term":"מעגל פשוט","def":"מעגל שבו אין חזרה על צמתים פרט לכך שהראשון הוא גם האחרון."},{"id":"d29","course":"discrete","topic":"גרפים","term":"גרף פורש","def":"תת־גרף המכיל את כל צמתי הגרף המקורי."},{"id":"d30","course":"discrete","topic":"גרפים","term":"תת־גרף","def":"H=(V',E') הוא תת־גרף של G=(V,E) אם V'⊆V ו־E'⊆E וכל קשת ב־E' מחברת צמתים מ־V'."},{"id":"d31","course":"discrete","topic":"גרפים","term":"תת־גרף מושרה","def":"תת־גרף הנקבע על ידי V' וכולל את כל קשתות G ששני קצותיהן ב־V'."},{"id":"d32","course":"discrete","topic":"גרפים","term":"מטריצת שכנות","def":"מטריצה שבה aᵢⱼ=1 אם vᵢ,vⱼ סמוכים ו־0 אחרת."},{"id":"d33","course":"discrete","topic":"גרפים","term":"גרף קשיר","def":"גרף שבו לכל שני צמתים קיים מסלול המחבר ביניהם."},{"id":"d34","course":"discrete","topic":"גרפים","term":"מרחק","def":"אורך המסלול הקצר ביותר בין שני צמתים."},{"id":"d35","course":"discrete","topic":"גרפים","term":"קוטר","def":"המרחק המקסימלי בין זוג צמתים בגרף קשיר."},{"id":"d36","course":"discrete","topic":"גרפים","term":"עלה","def":"צומת שדרגתו 1."},{"id":"d37","course":"discrete","topic":"גרפים","term":"גשר","def":"קשת שמחיקתה מגדילה את מספר רכיבי הקשירות של הגרף."},{"id":"d38","course":"discrete","topic":"גרפים","term":"צומת הפרדה","def":"צומת שמחיקתו יחד עם הקשתות הנוגעות בו מגדילה את מספר רכיבי הקשירות."},{"id":"d39","course":"discrete","topic":"גרפים","term":"עץ","def":"גרף לא מכוון, קשיר וללא מעגלים."},{"id":"d40","course":"discrete","topic":"גרפים","term":"יער","def":"גרף לא מכוון ללא מעגלים; כל רכיב קשירות שלו הוא עץ."},{"id":"d41","course":"discrete","topic":"גרפים","term":"עץ פורש","def":"תת־גרף פורש שהוא עץ: מכיל את כל הצמתים, קשיר וללא מעגלים."},{"id":"d42","course":"discrete","topic":"גרפים","term":"מסלול Euler","def":"מסלול העובר בכל קשת של הגרף בדיוק פעם אחת."},{"id":"d43","course":"discrete","topic":"גרפים","term":"גרף Euler","def":"גרף המכיל מעגל Euler, כלומר מסלול Euler סגור."},{"id":"d44","course":"discrete","topic":"גרפים","term":"מסלול Hamilton","def":"מסלול פשוט העובר בכל צמתי הגרף בדיוק פעם אחת."},{"id":"d45","course":"discrete","topic":"גרפים","term":"גרף Hamilton","def":"גרף המכיל מעגל Hamilton — מעגל פשוט העובר בכל צמתי הגרף בדיוק פעם אחת."},{"id":"d46","course":"systems","topic":"ייצוג מספרים","term":"Two's Complement","def":"ייצוג signed שבו המשקל של הביט המשמעותי ביותר שלילי; להפיכת מספר חיובי לשלילי ברוחב קבוע מהפכים ביטים ומוסיפים 1."},{"id":"d47","course":"systems","topic":"ייצוג מספרים","term":"Overflow","def":"מצב שבו תוצאת פעולה signed אינה ניתנת לייצוג במספר הביטים הנתון."},{"id":"d48","course":"systems","topic":"ייצוג מספרים","term":"Carry","def":"נשיאה שיוצאת מעבר לביט המשמעותי ביותר בפעולה בינארית."},{"id":"d49","course":"systems","topic":"Boolean","term":"De Morgan","def":"חוקים שמאפשרים להעביר שלילה דרך AND/OR תוך החלפת הפעולה: ¬(A∧B)=¬A∨¬B ו־¬(A∨B)=¬A∧¬B."},{"id":"d50","course":"systems","topic":"מעגלים צירופיים","term":"מעגל צירופי","def":"מעגל שהפלט שלו תלוי רק בקלט הנוכחי וללא מצב פנימי."},{"id":"d51","course":"systems","topic":"MUX","term":"MUX","def":"בורר אחת מכמה כניסות מידע ומעביר אותה ליציאה לפי קווי Select."},{"id":"d52","course":"systems","topic":"Decoder","term":"Decoder","def":"מקבל קוד בינארי ומפעיל בדרך כלל יציאה אחת מתוך 2^n יציאות בהתאם לערך הקלט."},{"id":"d53","course":"systems","topic":"Adders/ALU","term":"Half Adder","def":"מעגל שמחבר שני ביטים ומוציא Sum ו־Carry ללא Carry-in."},{"id":"d54","course":"systems","topic":"Adders/ALU","term":"Full Adder","def":"מעגל שמחבר A,B ו־Cin ומוציא Sum ו־Cout."},{"id":"d55","course":"systems","topic":"Adders/ALU","term":"ALU","def":"יחידה המבצעת פעולות אריתמטיות ולוגיות על operands לפי אותות בקרה."},{"id":"d56","course":"systems","topic":"לוגיקה סדרתית","term":"מעגל סדרתי","def":"מעגל שהפלט או המצב הבא שלו תלויים גם בקלט הנוכחי וגם במצב קודם."},{"id":"d57","course":"systems","topic":"לוגיקה סדרתית","term":"Clock","def":"אות תזמון שקובע מתי רכיבי מצב מתעדכנים."},{"id":"d58","course":"systems","topic":"לוגיקה סדרתית","term":"Register","def":"רכיב אחסון שמחזיק אוסף ביטים ומתעדכן לפי clock ואותות בקרה."},{"id":"d59","course":"systems","topic":"Datapath","term":"PC","def":"Program Counter — רגיסטר שמחזיק את כתובת ההוראה הנוכחית/הבאה."},{"id":"d60","course":"systems","topic":"Datapath","term":"Register File","def":"מערך רגיסטרים שמאפשר לקרוא operands ולכתוב תוצאה לפי מספרי registers ואותות בקרה."},{"id":"d61","course":"systems","topic":"Datapath","term":"Control Unit","def":"יחידה שמפענחת את ההוראה ומפיקה אותות בקרה שמחליטים אילו רכיבים ונתיבים פעילים."}];
const $=id=>document.getElementById(id);
const courseNames={discrete:"בדידה 2",systems:"מבוא למערכות מחשב"};
let state=JSON.parse(localStorage.getItem("examRecallEasy")||'{"correct":0,"wrong":0,"streak":0,"items":{}}');
let current=null, locked=false, last=[];

function save(){localStorage.setItem("examRecallEasy",JSON.stringify(state));}
function itemState(id){return state.items[id]||{right:0,wrong:0};}
function weakness(q){const s=itemState(q.id);return s.wrong-s.right;}
function filtered(){
 const c=$("course").value,t=$("topic").value,m=$("mode").value;
 return BANK.filter(q=>(c==="all"||q.course===c)&&(t==="all"||q.topic===t)&&(m==="all"||(m==="weak"&&weakness(q)>0)||(m==="unseen"&&!state.items[q.id])));
}
function topicOptions(){
 const c=$("course").value,old=$("topic").value;
 const ts=[...new Set(BANK.filter(q=>c==="all"||q.course===c).map(q=>q.topic))].sort();
 $("topic").innerHTML='<option value="all">🎲 ערבוב — כל הנושאים</option>'+ts.map(x=>'<option value="'+x+'">'+x+'</option>').join('');
 if(ts.includes(old))$("topic").value=old;
}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function distractors(q){
 let same=BANK.filter(x=>x.id!==q.id&&x.course===q.course&&x.topic===q.topic);
 let wider=BANK.filter(x=>x.id!==q.id&&x.course===q.course&&!same.some(s=>s.id===x.id));
 let picks=shuffle(same).slice(0,3);
 if(picks.length<3)picks=picks.concat(shuffle(wider).slice(0,3-picks.length));
 if(picks.length<3)picks=picks.concat(shuffle(BANK.filter(x=>x.id!==q.id&&!picks.some(p=>p.id===x.id))).slice(0,3-picks.length));
 return picks;
}
function renderStats(){
 $("score").textContent=state.correct||0;$("wrong").textContent=state.wrong||0;$("streak").textContent=state.streak||0;
 $("mastered").textContent=BANK.filter(q=>{const s=itemState(q.id);return s.right>=2&&s.right>s.wrong}).length;
}
function choose(){
 locked=false;$("feedback").className="feedback hidden";$("nextBtn").classList.add("hidden");
 const p=filtered();
 if(!p.length){$("term").textContent="אין כרגע שאלות במסנן הזה";$("options").innerHTML="";$("progressText").textContent="";return;}
 let cand=p.filter(q=>!last.includes(q.id));if(!cand.length)cand=p;
 current=cand[Math.floor(Math.random()*cand.length)];
 last=[current.id,...last].slice(0,7);
 $("term").textContent=current.term;$("courseBadge").textContent=courseNames[current.course];$("topicBadge").textContent=current.topic;
 $("progressText").textContent=p.length+" מושגים במאגר";
 const opts=shuffle([current,...distractors(current)]);
 $("options").innerHTML=opts.map(o=>'<button class="option" data-id="'+o.id+'">'+o.def+'</button>').join('');
 [...$("options").children].forEach(b=>b.onclick=()=>answer(b,b.dataset.id));
}
function answer(btn,id){
 if(locked)return;locked=true;
 const correct=id===current.id;
 state.items[current.id]??={right:0,wrong:0};
 if(correct){state.correct++;state.streak++;state.items[current.id].right++;}
 else{state.wrong++;state.streak=0;state.items[current.id].wrong++;}
 save();renderStats();
 [...$("options").children].forEach(b=>{
   b.disabled=true;
   if(b.dataset.id===current.id)b.classList.add("correct");
   else if(b===btn&&!correct)b.classList.add("wrong");
   else b.classList.add("dim");
 });
 const f=$("feedback");f.className="feedback "+(correct?"good":"bad");
 $("feedbackTitle").textContent=correct?"✓ נכון":"✗ לא בדיוק";
 $("feedbackText").textContent=correct?"מעולה. המטרה כרגע היא זיהוי מהיר.":"ההגדרה הנכונה מסומנת בירוק. קרא אותה פעם אחת והמשך — היא תחזור שוב.";
 $("nextBtn").classList.remove("hidden");
}
$("nextBtn").onclick=choose;
$("course").onchange=()=>{topicOptions();choose()};
$("topic").onchange=choose;$("mode").onchange=choose;
$("resetBtn").onclick=()=>{if(confirm("לאפס את ההתקדמות ברמה הקלה?")){state={correct:0,wrong:0,streak:0,items:{}};save();renderStats();choose()}};
topicOptions();renderStats();choose();