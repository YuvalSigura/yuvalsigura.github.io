const DEF_BANK=[{"id":"def1","course":"discrete","topic":"עקרונות ספירה","type":"definition","prompt":"איזו הגדרה מתאימה למושג: עקרון הסכום?","answer":"כאשר אפשר לבחור באחד ממקרים זרים זה לזה, מספר האפשרויות הכולל הוא סכום מספרי האפשרויות בכל מקרה.","term":"עקרון הסכום"},{"id":"def2","course":"discrete","topic":"עקרונות ספירה","type":"definition","prompt":"איזו הגדרה מתאימה למושג: עקרון הכפל?","answer":"כאשר תהליך מורכב משלבים עוקבים, מספר התוצאות הכולל הוא מכפלת מספר האפשרויות בכל שלב.","term":"עקרון הכפל"},{"id":"def3","course":"discrete","topic":"קומבינטוריקה","type":"definition","prompt":"איזו הגדרה מתאימה למושג: חליפה?","answer":"סדרה של k איברים שונים מתוך n; הסדר חשוב ואין חזרות.","term":"חליפה"},{"id":"def4","course":"discrete","topic":"קומבינטוריקה","type":"definition","prompt":"איזו הגדרה מתאימה למושג: תמורה?","answer":"סידור של כל איברי הקבוצה.","term":"תמורה"},{"id":"def5","course":"discrete","topic":"קומבינטוריקה","type":"definition","prompt":"איזו הגדרה מתאימה למושג: תמורת אי־סדר מלא?","answer":"תמורה שבה אף איבר אינו נמצא במקום המקורי שלו.","term":"תמורת אי־סדר מלא"},{"id":"def6","course":"discrete","topic":"קומבינטוריקה","type":"definition","prompt":"איזו הגדרה מתאימה למושג: צירוף בלי חזרות?","answer":"בחירה של k איברים שונים מתוך n כאשר הסדר אינו חשוב.","term":"צירוף בלי חזרות"},{"id":"def7","course":"discrete","topic":"קומבינטוריקה","type":"definition","prompt":"איזו הגדרה מתאימה למושג: צירוף עם חזרות?","answer":"בחירה של k איברים מתוך n סוגים, עם חזרות וללא חשיבות לסדר.","term":"צירוף עם חזרות"},{"id":"def8","course":"discrete","topic":"פונקציות","type":"definition","prompt":"איזו הגדרה מתאימה למושג: פונקציה חד־חד־ערכית?","answer":"איברים שונים בתחום מקבלים תמונות שונות.","term":"פונקציה חד־חד־ערכית"},{"id":"def9","course":"discrete","topic":"פונקציות","type":"definition","prompt":"איזו הגדרה מתאימה למושג: פונקציה על?","answer":"לכל איבר בטווח קיים לפחות איבר תחום אחד שנשלח אליו.","term":"פונקציה על"},{"id":"def10","course":"discrete","topic":"שובך היונים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: עקרון שובך היונים?","answer":"אם יש יותר עצמים מתאים, לפחות תא אחד מכיל יותר מעצם אחד.","term":"עקרון שובך היונים"},{"id":"def11","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: גרף לא מכוון?","answer":"גרף שבו הקשתות מחברות זוגות צמתים ללא כיוון.","term":"גרף לא מכוון"},{"id":"def12","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: גרף שלם?","answer":"גרף שבו כל שני צמתים שונים סמוכים.","term":"גרף שלם"},{"id":"def13","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: גרף דו־צדדי?","answer":"גרף שאפשר לחלק את צמתיו לשתי קבוצות כך שכל קשת מחברת בין הקבוצות.","term":"גרף דו־צדדי"},{"id":"def14","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: המספר הכרומטי?","answer":"המספר המינימלי של צבעים הדרוש לצביעת הצמתים כך שסמוכים יקבלו צבעים שונים.","term":"המספר הכרומטי"},{"id":"def15","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: משלים של גרף?","answer":"גרף על אותם צמתים שבו זוג מחובר אם ורק אם אינו מחובר במקור.","term":"משלים של גרף"},{"id":"def16","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: גרפים איזומורפיים?","answer":"גרפים שקיימת ביניהם התאמה בין הצמתים השומרת על שכנות.","term":"גרפים איזומורפיים"},{"id":"def17","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: דרגה?","answer":"מספר הקשתות הנוגעות בצומת.","term":"דרגה"},{"id":"def18","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: טיול?","answer":"סדרת צמתים עוקבים סמוכים; מותר לחזור על צמתים וקשתות.","term":"טיול"},{"id":"def19","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: מסלול?","answer":"טיול ללא חזרה על קשת.","term":"מסלול"},{"id":"def20","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: מסלול פשוט?","answer":"מסלול ללא חזרה על צומת.","term":"מסלול פשוט"},{"id":"def21","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: מעגל?","answer":"מסלול סגור.","term":"מעגל"},{"id":"def22","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: תת־גרף מושרה?","answer":"תת־גרף על קבוצת צמתים שנבחרה הכולל את כל קשתות המקור בין הצמתים האלה.","term":"תת־גרף מושרה"},{"id":"def23","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: גרף קשיר?","answer":"לכל שני צמתים יש מסלול המחבר ביניהם.","term":"גרף קשיר"},{"id":"def24","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: מרחק?","answer":"אורך המסלול הקצר ביותר בין שני צמתים.","term":"מרחק"},{"id":"def25","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: קוטר?","answer":"המרחק המקסימלי בין זוג צמתים בגרף קשיר.","term":"קוטר"},{"id":"def26","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: עלה?","answer":"צומת מדרגה 1.","term":"עלה"},{"id":"def27","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: גשר?","answer":"קשת שמחיקתה מגדילה את מספר רכיבי הקשירות.","term":"גשר"},{"id":"def28","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: צומת הפרדה?","answer":"צומת שמחיקתו מגדילה את מספר רכיבי הקשירות.","term":"צומת הפרדה"},{"id":"def29","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: עץ?","answer":"גרף לא מכוון קשיר וללא מעגלים.","term":"עץ"},{"id":"def30","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: יער?","answer":"גרף לא מכוון ללא מעגלים.","term":"יער"},{"id":"def31","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: עץ פורש?","answer":"תת־גרף פורש שהוא עץ.","term":"עץ פורש"},{"id":"def32","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: מסלול Euler?","answer":"מסלול העובר בכל קשת בדיוק פעם אחת.","term":"מסלול Euler"},{"id":"def33","course":"discrete","topic":"גרפים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: מסלול Hamilton?","answer":"מסלול פשוט העובר בכל צומת בדיוק פעם אחת.","term":"מסלול Hamilton"},{"id":"def34","course":"systems","topic":"ייצוג מספרים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: Two's Complement?","answer":"ייצוג signed שבו שלילה ברוחב קבוע מתקבלת מהיפוך הביטים והוספת 1.","term":"Two's Complement"},{"id":"def35","course":"systems","topic":"ייצוג מספרים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: Overflow?","answer":"תוצאת פעולה signed שאינה ניתנת לייצוג ברוחב הביטים הנתון.","term":"Overflow"},{"id":"def36","course":"systems","topic":"ייצוג מספרים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: Carry?","answer":"נשיאה שיוצאת מעבר לביט המשמעותי ביותר.","term":"Carry"},{"id":"def37","course":"systems","topic":"Boolean","type":"definition","prompt":"איזו הגדרה מתאימה למושג: De Morgan?","answer":"שלילה של AND הופכת ל-OR של השלילות ולהפך.","term":"De Morgan"},{"id":"def38","course":"systems","topic":"מעגלים","type":"definition","prompt":"איזו הגדרה מתאימה למושג: מעגל צירופי?","answer":"מעגל שהפלט שלו תלוי רק בקלט הנוכחי.","term":"מעגל צירופי"},{"id":"def39","course":"systems","topic":"MUX","type":"definition","prompt":"איזו הגדרה מתאימה למושג: MUX?","answer":"בורר אחת מכמה כניסות ומעביר אותה ליציאה לפי Select.","term":"MUX"},{"id":"def40","course":"systems","topic":"Decoder","type":"definition","prompt":"איזו הגדרה מתאימה למושג: Decoder?","answer":"מפענח קוד בינארי ומפעיל בדרך כלל יציאה אחת מתוך 2^n.","term":"Decoder"},{"id":"def41","course":"systems","topic":"Adders/ALU","type":"definition","prompt":"איזו הגדרה מתאימה למושג: Half Adder?","answer":"מחבר שני ביטים ומוציא Sum ו-Carry ללא Carry-in.","term":"Half Adder"},{"id":"def42","course":"systems","topic":"Adders/ALU","type":"definition","prompt":"איזו הגדרה מתאימה למושג: Full Adder?","answer":"מחבר A,B ו-Cin ומוציא Sum ו-Cout.","term":"Full Adder"},{"id":"def43","course":"systems","topic":"Adders/ALU","type":"definition","prompt":"איזו הגדרה מתאימה למושג: ALU?","answer":"יחידה המבצעת פעולות אריתמטיות ולוגיות לפי אותות בקרה.","term":"ALU"},{"id":"def44","course":"systems","topic":"לוגיקה סדרתית","type":"definition","prompt":"איזו הגדרה מתאימה למושג: Register?","answer":"רכיב אחסון המחזיק אוסף ביטים ומתעדכן לפי clock/control.","term":"Register"},{"id":"def45","course":"systems","topic":"Datapath","type":"definition","prompt":"איזו הגדרה מתאימה למושג: PC?","answer":"רגיסטר המחזיק את כתובת ההוראה הנוכחית/הבאה.","term":"PC"},{"id":"def46","course":"systems","topic":"Datapath","type":"definition","prompt":"איזו הגדרה מתאימה למושג: Register File?","answer":"מערך רגיסטרים לקריאת operands ולכתיבת תוצאות.","term":"Register File"},{"id":"def47","course":"systems","topic":"Datapath","type":"definition","prompt":"איזו הגדרה מתאימה למושג: Control Unit?","answer":"יחידה שמפענחת הוראה ומפיקה אותות בקרה.","term":"Control Unit"}];

const EASY_EXTRA=[{"id":"e1","course":"discrete","topic":"קומבינטוריקה","type":"classification","prompt":"סדר חשוב + חזרות מותרות. איזו נוסחה?","answer":"n^k","wrong":["P(n,k)","C(n,k)","D(n,k)"],"why":"לכל אחד מ-k המקומות יש n אפשרויות."},{"id":"e2","course":"discrete","topic":"קומבינטוריקה","type":"classification","prompt":"סדר חשוב + אין חזרות. איזו נוסחה?","answer":"P(n,k)","wrong":["n^k","C(n,k)","D(n,k)"],"why":"זו בחירה מסודרת ללא חזרות."},{"id":"e3","course":"discrete","topic":"קומבינטוריקה","type":"classification","prompt":"סדר לא חשוב + אין חזרות. איזו נוסחה?","answer":"C(n,k)","wrong":["P(n,k)","n^k","D(n,k)"],"why":"רק מי נבחר חשוב."},{"id":"e4","course":"discrete","topic":"קומבינטוריקה","type":"classification","prompt":"סדר לא חשוב + חזרות מותרות. איזו נוסחה?","answer":"D(n,k) / C(n+k-1,k)","wrong":["P(n,k)","n^k","C(n,k)"],"why":"זו בחירת מולטי־קבוצה / Stars and Bars."},{"id":"e5","course":"discrete","topic":"הכלה והדחה","type":"recognition","prompt":"רוצים לספור 'לפחות אחד' משני תנאים חופפים. מה הכלי?","answer":"הכלה והדחה","wrong":["Stars and Bars","אי־סדר מלא","רקורסיה"],"why":"החיתוך עלול להיספר פעמיים."},{"id":"e6","course":"discrete","topic":"Stars and Bars","type":"first_step","prompt":"נתון x_i≥r. מה הצעד הראשון?","answer":"מקצים r לכל משתנה ומחסירים את המינימום מהסכום","wrong":["מכפילים ב-r!","מחשבים φ","עושים משלים"],"why":"מזיזים את המשתנים לאי־שליליים."},{"id":"e7","course":"discrete","topic":"שובך היונים","type":"recognition","prompt":"מה מבדיל שובך היונים מ-Stars and Bars?","answer":"שובך מוכיח שמשהו חייב לקרות; Stars and Bars סופר חלוקות","wrong":["שניהם סופרים חלוקות","שובך רק לגרפים","אין הבדל"],"why":"שובך הוא עקרון קיום."},{"id":"e8","course":"discrete","topic":"שובך היונים","type":"first_step","prompt":"בשאלת שובך היונים, מה מזהים קודם?","answer":"מי היונים ומהם השובכים","wrong":["את D_n","את φ(n)","את המשוואה האופיינית"],"why":"זה המודל שמאפשר להשתמש בעקרון."},{"id":"e9","course":"discrete","topic":"גרפים","type":"formula","prompt":"לעץ עם n צמתים כמה קשתות?","answer":"n-1","wrong":["n","n+1","C(n,2)"],"why":"כל עץ על n צמתים מכיל n-1 קשתות."},{"id":"e10","course":"discrete","topic":"גרפים","type":"recognition","prompt":"Euler מול Hamilton — מה ההבדל המרכזי?","answer":"Euler עובר בכל קשת; Hamilton בכל צומת","wrong":["Euler בצמתים; Hamilton בקשתות","שניהם רק עצים","אין הבדל"],"why":"קשתות מול צמתים."},{"id":"e11","course":"discrete","topic":"גרפים","type":"formula","prompt":"מה אומר משפט סכום הדרגות?","answer":"Σ deg(v)=2|E|","wrong":["Σ deg(v)=|E|","Σ deg(v)=|V|","Σ deg(v)=2|V|"],"why":"כל קשת תורמת 2 לסכום הדרגות."},{"id":"e12","course":"discrete","topic":"גרפים","type":"recognition","prompt":"מתי גרף לא מכוון הוא דו־צדדי?","answer":"אם ורק אם אין בו מעגל באורך אי־זוגי","wrong":["אם ורק אם הוא עץ","אם כל הדרגות זוגיות","אם הוא קשיר"],"why":"זה קריטריון דו־צדדיות מרכזי."},{"id":"e13","course":"systems","topic":"ייצוג מספרים","type":"formula","prompt":"מהו טווח Two's Complement ב-n ביטים?","answer":"-2^(n-1) עד 2^(n-1)-1","wrong":["0 עד 2^n-1","-2^n עד 2^n-1","0 עד 2^(n-1)"],"why":"חצי מהקודים שליליים וחצי לא־שליליים."},{"id":"e14","course":"systems","topic":"ייצוג מספרים","type":"recognition","prompt":"מתי יש Overflow signed בחיבור?","answer":"כשמחברים שני מספרים באותו סימן והתוצאה בסימן ההפוך","wrong":["בכל carry","רק כשהתוצאה אפס","בכל חיבור של שליליים"],"why":"זה כלל הזיהוי המהיר לחיבור signed."},{"id":"e15","course":"systems","topic":"MUX","type":"formula","prompt":"MUX 8→1 דורש כמה קווי Select?","answer":"3","wrong":["1","2","8"],"why":"2^3=8."},{"id":"e16","course":"systems","topic":"Adders/ALU","type":"recognition","prompt":"מה ההבדל העיקרי בין Half Adder ל-Full Adder?","answer":"Full Adder כולל Carry-in","wrong":["Half Adder כולל Clock","Full Adder הוא MUX","אין הבדל"],"why":"Cin מאפשר שרשור של מחברים."},{"id":"e17","course":"systems","topic":"MIPS","type":"first_step","prompt":"ב-load/store, איך מחשבים effective address?","answer":"base register + offset","wrong":["PC + opcode","rs + rt בלבד","offset×4 תמיד"],"why":"כתובת הזיכרון נוצרת מהבסיס וההיסט."},{"id":"e18","course":"systems","topic":"Datapath","type":"first_step","prompt":"במעקב אחרי instruction ב-datapath, מה השלב הראשון?","answer":"Fetch","wrong":["Execute","Memory","Write Back"],"why":"קודם מביאים את ההוראה לפי ה-PC."}];

const CHAINS=[{"chain_id":"disc-2023b-q1a-nonperm","course":"discrete","topic":"תמורות","title":"2023 מועד ב׳ — סדרות שאינן תמורות","stem":"כמה סדרות באורך 5 של איברי הקבוצה A={1,2,3,4,5} הן לא תמורות?","source":{"transcript":"https://app.notion.com/p/3ecb81b1fd3981509154ec72e0a75986","status":"ok"},"summary":"סופרים את כל הסדרות באורך 5 ומחסירים את 5! התמורות.","steps":[{"prompt":"מה הזיהוי הראשוני?","answer":"משלים: כל הסדרות פחות הסדרות שהן תמורות","wrong":["Stars and Bars","אי־סדר מלא","שובך היונים"],"hint":"המילה 'לא' מציעה לספור עולם מלא ולהחסיר את הרצוי ההפוך.","explain":"כל סדרה באורך 5 מעל A מותרת; אחר כך מורידים את אלה שמשתמשות בכל איבר בדיוק פעם אחת."},{"prompt":"כמה סדרות באורך 5 אפשר ליצור ללא הגבלה?","answer":"5^5","wrong":["5!","C(5,5)","P(5,4)"],"hint":"בכל אחד מחמשת המקומות יש 5 אפשרויות.","explain":"חזרות מותרות והסדר חשוב, לכן 5^5."},{"prompt":"כמה מהסדרות הן תמורות?","answer":"5!","wrong":["5^5","C(5,2)","D5"],"hint":"תמורה משתמשת בכל חמשת האיברים בדיוק פעם אחת.","explain":"מספר התמורות של 5 איברים הוא 5!."},{"prompt":"מה התוצאה הסופית?","answer":"3005","wrong":["3120","120","3000"],"hint":"חשב 5^5−5!.","explain":"3125−120=3005."}]},{"chain_id":"disc-2023b-q2b-recurrence","course":"discrete","topic":"רקורסיות","title":"2023 מועד ב׳ — נסיגה לא־הומוגנית","stem":"מצאו את הצורה המפורשת של a_n כאשר a_0=3, a_1=14 ו-a_n=8a_{n-1}-16a_{n-2}+18 עבור n>1.","source":{"transcript":"https://app.notion.com/p/3ecb81b1fd3981509154ec72e0a75986","status":"ok"},"summary":"שורש כפול 4 + פתרון פרטי קבוע נותנים a_n=(1+2n)4^n+2.","steps":[{"prompt":"מה סוג הנסיגה?","answer":"ליניארית לא־הומוגנית מסדר 2 עם מקדמים קבועים","wrong":["הומוגנית מסדר 1","נסיגת חלוקה וכיבוש","Stars and Bars"],"hint":"האיבר +18 הוא אגף לא־הומוגני.","explain":"פותרים חלק הומוגני ומוסיפים פתרון פרטי."},{"prompt":"מה המשוואה האופיינית של החלק ההומוגני?","answer":"r²−8r+16=0","wrong":["r²−8r−16=0","r²+8r+16=0","r−8=0"],"hint":"העבר את כל איברי החלק ההומוגני לאגף אחד.","explain":"מתקבל (r−4)²=0."},{"prompt":"מה צורת הפתרון ההומוגני?","answer":"(C1+C2n)4^n","wrong":["C1·4^n+C2·8^n","C1+C2n","C1·16^n"],"hint":"השורש 4 הוא כפול.","explain":"שורש כפול מוסיף n לפתרון השני."},{"prompt":"איזה ניחוש מתאים לפתרון הפרטי?","answer":"קבוע A","wrong":["A·4^n","An·4^n","A·8^n"],"hint":"האגף הלא־הומוגני הוא הקבוע 18.","explain":"מציבים a_n=A ומקבלים A=2."},{"prompt":"מה הפתרון המפורש?","answer":"a_n=(1+2n)4^n+2","wrong":["a_n=(3+14n)4^n","a_n=4^n+18","a_n=(1+n)4^n+2"],"hint":"השתמש ב-a0=3 ואז a1=14.","explain":"A=2, C1=1 ו-C2=2."}]},{"chain_id":"disc-2023b-q2c-stars","course":"discrete","topic":"Stars and Bars","title":"2023 מועד ב׳ — מילים בלי חשיבות לסדר","stem":"תהי A={a,b,c,d}. כמה מילים באורך 30 אותיות, בלי חשיבות לסדר, ניתן ליצור כך ש-a מופיעה יותר מ-5 פעמים, b לפחות 4 פעמים, c יותר מ-4 פעמים ו-d בדיוק 3 או בדיוק 4 פעמים?","source":{"transcript":"https://app.notion.com/p/3ecb81b1fd3981509154ec72e0a75986","status":"ok"},"summary":"מפצלים לשני מקרים עבור d, מקצים מינימום ל-a,b,c, ואז Stars and Bars.","steps":[{"prompt":"מה הזיהוי הראשוני?","answer":"Stars and Bars עם חסמי מינימום ושני מקרים עבור d","wrong":["תמורות של 30 אותיות","פונקציות על","אי־סדר מלא"],"hint":"'בלי חשיבות לסדר' אומר שרק מספר ההופעות מכל אות משנה.","explain":"d יכול להיות 3 או 4, ולכן מפצלים לשני מקרים זרים."},{"prompt":"מהם החסמים המינימליים של a,b,c?","answer":"a≥6, b≥4, c≥5","wrong":["a≥5,b≥4,c≥4","a≥6,b≥5,c≥5","a≥5,b≥3,c≥4"],"hint":"'יותר מ' שונה מ'לפחות'.","explain":"יותר מ-5 הוא 6 ומעלה; יותר מ-4 הוא 5 ומעלה."},{"prompt":"במקרה d=3, כמה נשאר לחלק לאחר הקצאת המינימום?","answer":"12","wrong":["9","11","15"],"hint":"a+b+c=27 והמינימום הוא 15.","explain":"27−15=12."},{"prompt":"כמה פתרונות במקרה d=3?","answer":"C(14,2)","wrong":["C(12,3)","C(15,2)","3^12"],"hint":"3 משתנים אי־שליליים שסכומם 12.","explain":"Stars and Bars: C(12+3−1,3−1)=C(14,2)."},{"prompt":"כמה פתרונות במקרה d=4?","answer":"C(13,2)","wrong":["C(14,2)","C(12,2)","C(26,3)"],"hint":"כעת נשארות 11 יחידות מעבר למינימום.","explain":"C(11+3−1,2)=C(13,2)."},{"prompt":"מה התוצאה הכוללת?","answer":"169","wrong":["91","78","182"],"hint":"חבר את שני המקרים.","explain":"C(14,2)+C(13,2)=91+78=169."}]},{"chain_id":"disc-2023b-q3b-noninjective","course":"discrete","topic":"פונקציות","title":"2023 מועד ב׳ — פונקציות שאינן חד־חד־ערכיות","stem":"כמה פונקציות f:{1,2,3}→{1,2,3,4,5,6} הן לא חד־חד־ערכיות?","source":{"transcript":"https://app.notion.com/p/3ecb81b1fd3981509154ec72e0a75986","status":"ok"},"summary":"משלים: כל הפונקציות פחות הפונקציות החד־חד־ערכיות.","steps":[{"prompt":"מה הזיהוי הראשוני?","answer":"לספור את כל הפונקציות ולהחסיר את החד־חד־ערכיות","wrong":["הכלה והדחה על פונקציות על","Stars and Bars","אי־סדר מלא"],"hint":"'לא חד־חד־ערכיות' הוא משלים בתוך כל הפונקציות.","explain":"זה קל יותר מלספור התנגשויות ישירות."},{"prompt":"כמה פונקציות יש בסך הכול?","answer":"6^3","wrong":["3^6","P(6,3)","C(6,3)"],"hint":"לכל אחד משלושת איברי התחום יש 6 תמונות אפשריות.","explain":"6^3=216."},{"prompt":"כמה פונקציות חד־חד־ערכיות יש?","answer":"P(6,3)=6·5·4","wrong":["6^3","C(6,3)","3!"],"hint":"התמונות של שלושת איברי התחום חייבות להיות שונות.","explain":"בוחרים 3 יעדים שונים בסדר המתאים לאיברי התחום."},{"prompt":"מה התוצאה?","answer":"96","wrong":["120","216","90"],"hint":"216−120.","explain":"96 פונקציות אינן חד־חד־ערכיות."}]},{"chain_id":"disc-2023b-q3c-graph","course":"discrete","topic":"גרפים","title":"2023 מועד ב׳ — מחלקות שאריות ומשלים","stem":"יהי G=(V,E), V={1,2,...,15}, כאשר (x,y)∈E אם ורק אם x≡y (mod 3) ו-x≠y. המשלים של G מסומן H. חשבו את מספר הקשתות של H, את χ(G), את χ(H), ואת מספר תתי-הגרפים המושרים של H שאיזומורפיים ל-K3.","source":{"transcript":"https://app.notion.com/p/3ecb81b1fd3981509154ec72e0a75986","status":"ok"},"summary":"G הוא איחוד זר של שלושה K5; לכן H הוא K5,5,5.","steps":[{"prompt":"מה המבנה של G?","answer":"שלושה רכיבים זרים שכל אחד מהם K5","wrong":["K15","חמישה רכיבים K3","עץ עם 15 צמתים"],"hint":"קבץ את 1..15 לפי שארית מודולו 3.","explain":"לכל שארית יש 5 מספרים, ובתוך אותה מחלקה כל זוג מחובר."},{"prompt":"מה המבנה של H, המשלים?","answer":"גרף תלת־צדדי שלם K5,5,5","wrong":["שלושה K5 זרים","K15","C15"],"hint":"במשלים מחברים דווקא בין מחלקות השאריות.","explain":"אין קשתות בתוך כל חלק, וכל הקשתות בין חלקים קיימות."},{"prompt":"כמה קשתות יש ב-H?","answer":"75","wrong":["30","105","60"],"hint":"אפשר לחשב 105−30 או 3·5·5.","explain":"C(15,2)−3C(5,2)=105−30=75."},{"prompt":"מה χ(G)?","answer":"5","wrong":["3","15","1"],"hint":"כל רכיב הוא K5.","explain":"צביעת K5 דורשת 5 צבעים, ואפשר למחזר אותם בין הרכיבים."},{"prompt":"מה χ(H)?","answer":"3","wrong":["5","15","2"],"hint":"H הוא תלת־צדדי שלם עם שלושה חלקים לא ריקים.","explain":"כל חלק מקבל צבע אחד, ושלושת החלקים חייבים צבעים שונים."},{"prompt":"כמה תתי־גרפים מושרים של H איזומורפיים ל-K3?","answer":"125","wrong":["75","10","30"],"hint":"K3 ב-K5,5,5 חייב לבחור צומת אחד מכל חלק.","explain":"5·5·5=125."}]},{"chain_id":"disc-2023b-q4a1-hamilton","course":"discrete","topic":"Hamilton","title":"2023 מועד ב׳ — Hamilton בגרף דו־צדדי","stem":"הוכיחו או הפריכו: לא קיים G=(A,B,E) גרף Hamilton כך ש-|A|+|B| הוא מספר אי־זוגי.","source":{"transcript":"https://app.notion.com/p/3ecb81b1fd3981509154ec72e0a75986","status":"ok"},"summary":"במעגל Hamilton בגרף דו־צדדי עוברים לסירוגין בין A ל-B, ולכן |A|=|B| והסכום זוגי.","steps":[{"prompt":"מה הזיהוי המרכזי?","answer":"במעגל בגרף דו־צדדי הצמתים מתחלפים בין A ל-B","wrong":["משפט סכום הדרגות","משפט Euler","עץ פורש"],"hint":"חשוב על סדר הצמתים לאורך מעגל Hamilton.","explain":"כל קשת עוברת מצד אחד לצד האחר."},{"prompt":"מה נובע עבור מעגל Hamilton שעובר בכל הצמתים?","answer":"חייב להיות |A|=|B|","wrong":["חייב להיות |A|=|B|+1","אין קשר בין הגדלים","חייב להיות |A|=1"],"hint":"במעגל סגור מספר המעברים לכל צד זהה.","explain":"המעגל משתמש במספר שווה של צמתים משני החלקים."},{"prompt":"מה המסקנה לגבי הטענה?","answer":"הטענה נכונה","wrong":["הטענה שגויה","נכונה רק לעץ","אי אפשר לקבוע"],"hint":"אם |A|=|B|, מה הזוגיות של הסכום?","explain":"|A|+|B|=2|A| ולכן הוא זוגי; סכום אי־זוגי בלתי אפשרי."}]},{"chain_id":"disc-2023b-q4a2-euler","course":"discrete","topic":"Euler","title":"2023 מועד ב׳ — Euler רגולרי","stem":"הוכיחו או הפריכו: לא קיים גרף Euler רגולרי G=(V,E) שבו |V| זוגי ו-|E| אי־זוגי.","source":{"transcript":"https://app.notion.com/p/3ecb81b1fd3981509154ec72e0a75986","status":"ok"},"summary":"בגרף Euler כל הדרגות זוגיות. אם הוא r-רגולרי, r זוגי; עם |V| זוגי מתקבל |E|=r|V|/2 זוגי.","steps":[{"prompt":"מה ידוע על דרגות בגרף Euler?","answer":"כל הדרגות זוגיות","wrong":["כל הדרגות אי־זוגיות","כל הדרגות 1","אין תנאי על הדרגות"],"hint":"זהו תנאי Euler לגרף עם מעגל Euler.","explain":"בגרף Euler כל צומת מדרגה זוגית."},{"prompt":"אם הגרף גם r-רגולרי, מה נובע על r?","answer":"r זוגי","wrong":["r אי־זוגי","r=1","r חייב להיות 0"],"hint":"כל הצמתים באותה דרגה.","explain":"הדרגה המשותפת חייבת להיות זוגית."},{"prompt":"מה נותן משפט סכום הדרגות?","answer":"2|E|=r|V|","wrong":["|E|=r+|V|","|E|=|V|-1","2|V|=r|E|"],"hint":"סכום הדרגות הוא גם r כפול מספר הצמתים.","explain":"Σdeg(v)=r|V|=2|E|."},{"prompt":"אם r ו-|V| זוגיים, מה נובע על |E|?","answer":"|E| זוגי","wrong":["|E| אי־זוגי","אין מסקנה","|E| ראשוני"],"hint":"כתוב r=2k ו-|V|=2m.","explain":"|E|=(2k·2m)/2=2km."},{"prompt":"מה המסקנה לגבי הטענה?","answer":"הטענה נכונה","wrong":["הטענה שגויה","נכונה רק אם הגרף עץ","אי אפשר לקבוע"],"hint":"הנחת |E| אי־זוגי סותרת את המסקנה.","explain":"לכן לא קיים גרף כזה."}]}];

const names={discrete:"בדידה 2",systems:"מבוא למערכות מחשב"};
const $=id=>document.getElementById(id), shuffle=a=>[...a].sort(()=>Math.random()-.5);
let state=JSON.parse(localStorage.getItem("examRecallV2")||'{"right":0,"wrong":0,"streak":0,"items":{},"chains":{},"timing":{"fast":0,"normal":0,"slow":0,"samples":[]}}');
state.timing??={fast:0,normal:0,slow:0,samples:[]};
state.sessions??=[];
state.updatedAt??=Date.now();
for(const v of Object.values(state.items||{})){if(v.everWeak===undefined)v.everWeak=(v.wrong||0)>0;}
let appMode="warmup",current=null,locked=false,chain=null,chainStep=0,chainMistakes=0;
let sessionStarted=false,questionStartedAt=0,firstAttemptRecorded=false,timerHandle=null;
let sessionSnapshot=null;

function save(){state.updatedAt=Date.now();localStorage.setItem("examRecallV2",JSON.stringify(state))}
function stat(id){return state.items[id]||{right:0,wrong:0,everWeak:false}}
function weakness(id){return !!stat(id).everWeak}
const TIME_LIMITS={
 definition:{fast:8,normal:20},classification:{fast:8,normal:20},recognition:{fast:10,normal:25},
 formula:{fast:12,normal:30},first_step:{fast:12,normal:30},concept:{fast:15,normal:35},
 exam:{fast:25,normal:60}
};
function elapsed(){return questionStartedAt?Math.max(0,(performance.now()-questionStartedAt)/1000):0}
function fmt(sec){sec=Math.floor(sec);return String(Math.floor(sec/60)).padStart(2,"0")+":"+String(sec%60).padStart(2,"0")}
function timingClass(type,seconds,isExam=false){
 const lim=isExam?TIME_LIMITS.exam:(TIME_LIMITS[type]||TIME_LIMITS.concept);
 return seconds<=lim.fast?"fast":seconds<=lim.normal?"normal":"slow";
}
function speedLabel(c){return c==="fast"?"⚡ מהיר":c==="normal"?"✓ נורמלי":"🐢 איטי"}
function startClock(timerId,speedId){
 clearInterval(timerHandle);questionStartedAt=performance.now();firstAttemptRecorded=false;
 $(timerId).textContent="00:00";$(speedId).className="speed neutral";$(speedId).textContent="ממתין לתשובה";
 timerHandle=setInterval(()=>{$(timerId).textContent=fmt(elapsed())},250);
}
function stopClock(){clearInterval(timerHandle);timerHandle=null}
function recordTiming(key,course,topic,type,isExam=false){
 if(firstAttemptRecorded)return null;firstAttemptRecorded=true;
 const seconds=elapsed(), cls=timingClass(type,seconds,isExam);
 state.timing[cls]=(state.timing[cls]||0)+1;
 state.timing.samples.push({key,course,topic,type,seconds:Math.round(seconds*10)/10,cls,at:Date.now()});
 if(state.timing.samples.length>500)state.timing.samples=state.timing.samples.slice(-500);
 save();return {seconds,cls};
}
function makeDefItem(q){
 let same=DEF_BANK.filter(x=>x.id!==q.id&&x.course===q.course&&x.topic===q.topic);
 if(same.length<3)same=same.concat(DEF_BANK.filter(x=>x.id!==q.id&&x.course===q.course&&!same.some(y=>y.id===x.id)));
 const wrong=shuffle(same).slice(0,3).map(x=>({text:x.answer,why:'זו ההגדרה של "'+x.term+'", לא של "'+q.term+'".'}));
 return {...q,wrong,why:'זו ההגדרה המדויקת של "'+q.term+'".'};
}
function allEasy(){return [...DEF_BANK.map(makeDefItem),...EASY_EXTRA]}
function renderStats(){
 $("rightStat").textContent=state.right||0;$("wrongStat").textContent=state.wrong||0;$("streakStat").textContent=state.streak||0;
 $("weakStat").textContent=allEasy().filter(q=>weakness(q.id)>0).length;
 $("fastStat").textContent=state.timing.fast||0;$("normalStat").textContent=state.timing.normal||0;$("slowStat").textContent=state.timing.slow||0;
 const sm=state.timing.samples||[];$("avgStat").textContent=sm.length?(sm.reduce((a,x)=>a+x.seconds,0)/sm.length).toFixed(1):"—";
 renderDiagnostics();renderTopicStats();
}
function renderDiagnostics(){
 const map={};
 for(const q of allEasy()){
   const s=stat(q.id); if(!map[q.topic])map[q.topic]={course:q.course,errors:0,slow:0,samples:0,total:0};
   map[q.topic].errors+=s.wrong||0;
 }
 for(const x of state.timing.samples||[]){
   if(!map[x.topic])map[x.topic]={course:x.course,errors:0,slow:0,samples:0,total:0};
   map[x.topic].samples++;map[x.topic].total+=x.seconds;if(x.cls==="slow")map[x.topic].slow++;
 }
 const rows=Object.entries(map).filter(([,v])=>v.errors>0||v.slow>0).sort((a,b)=>(b[1].errors*3+b[1].slow)-(a[1].errors*3+a[1].slow)).slice(0,8);
 $("diagnosticList").innerHTML=rows.length?rows.map(([topic,v])=>'<div class="diag-item"><div><b>'+topic+'</b><small>'+names[v.course]+' · '+(v.samples?("ממוצע "+(v.total/v.samples).toFixed(1)+" שנ׳"):"אין עדיין מדידת זמן")+'</small></div><div class="diag-badges">'+(v.errors?'<span class="mini err">'+v.errors+' טעויות</span>':'')+(v.slow?'<span class="mini slow">'+v.slow+' איטי</span>':'')+'</div></div>').join(""):'<p class="muted">עדיין אין חולשות מאובחנות. לחץ התחל וענה על כמה שאלות.</p>';
}


const GH_OWNER="YuvalSigura",GH_REPO="yuvalsigura.github.io",GH_BRANCH="main",GH_PROGRESS_PATH="progress/progress.json",GH_TOKEN_KEY="examRecallGithubToken";
function ghToken(){return localStorage.getItem(GH_TOKEN_KEY)||""}
function setCloudStatus(text,kind=""){
 const box=$("githubSync");if(!box)return;box.classList.remove("synced","error");if(kind)box.classList.add(kind);$("cloudStatus").textContent=text;
}
function b64encodeUnicode(str){return btoa(unescape(encodeURIComponent(str)))}
function b64decodeUnicode(str){return decodeURIComponent(escape(atob(str.replace(/\n/g,""))))}
async function ghRequest(url,opts={}){
 const token=ghToken();if(!token)throw new Error("NO_TOKEN");
 const headers={Accept:"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28",Authorization:"Bearer "+token,...(opts.headers||{})};
 const res=await fetch(url,{...opts,headers});
 if(!res.ok){const body=await res.text();const err=new Error("GitHub "+res.status);err.status=res.status;err.body=body;throw err}
 return res.status===204?null:res.json();
}
function progressUrl(){return "https://api.github.com/repos/"+GH_OWNER+"/"+GH_REPO+"/contents/"+GH_PROGRESS_PATH+"?ref="+GH_BRANCH}
async function getRemoteProgress(){
 try{
  const f=await ghRequest(progressUrl());
  const parsed=JSON.parse(b64decodeUnicode(f.content));
  return {state:parsed.state||parsed,sha:f.sha};
 }catch(e){if(e.status===404)return {state:null,sha:null};throw e}
}
async function pushRemoteProgress(existingSha=null){
 const body={message:"Update Exam Recall progress",content:b64encodeUnicode(JSON.stringify({version:4,savedAt:new Date().toISOString(),state},null,2)),branch:GH_BRANCH};
 if(existingSha)body.sha=existingSha;
 await ghRequest("https://api.github.com/repos/"+GH_OWNER+"/"+GH_REPO+"/contents/"+GH_PROGRESS_PATH,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
 setCloudStatus("מסונכרן לריפו · "+new Date().toLocaleTimeString("he-IL"),"synced");
}
async function syncCloud(preferNewest=true){
 if(!ghToken()){setCloudStatus("אין טוקן שמור במכשיר הזה");return false}
 setCloudStatus("מסנכרן…");
 try{
  const remote=await getRemoteProgress();
  if(remote.state&&preferNewest&&(remote.state.updatedAt||0)>(state.updatedAt||0)){
   state=remote.state;state.sessions??=[];state.updatedAt??=Date.now();
   for(const v of Object.values(state.items||{})){if(v.everWeak===undefined)v.everWeak=(v.wrong||0)>0;}
   localStorage.setItem("examRecallV2",JSON.stringify(state));renderStats();
   setCloudStatus("נטענה התקדמות חדשה יותר מהריפו","synced");return true;
  }
  await pushRemoteProgress(remote.sha);return true;
 }catch(e){
  setCloudStatus(e.status===401||e.status===403?"הטוקן לא תקין או חסרה הרשאת Contents: Read and write":"שגיאת סנכרון עם GitHub","error");
  return false;
 }
}
async function connectGithubToken(){
 const token=$("githubTokenInput").value.trim();if(!token){setCloudStatus("הדבק טוקן בשדה קודם","error");return}
 localStorage.setItem(GH_TOKEN_KEY,token);$("githubTokenInput").value="";
 setCloudStatus("הטוקן נשמר רק בדפדפן הזה. בודק חיבור…");
 await syncCloud(true);
}
function forgetGithubToken(){localStorage.removeItem(GH_TOKEN_KEY);$("githubTokenInput").value="";setCloudStatus("הטוקן נשכח מהמכשיר. הנתונים המקומיים לא נמחקו.")}

function renderTopicStats(){
 const map={};
 for(const q of allEasy()){
  const s=stat(q.id); if(!map[q.topic])map[q.topic]={course:q.course,right:0,wrong:0,weak:0,slow:0,time:0,samples:0};
  map[q.topic].right+=s.right||0;map[q.topic].wrong+=s.wrong||0;if(s.everWeak)map[q.topic].weak++;
 }
 for(const x of state.timing.samples||[]){
  if(!map[x.topic])map[x.topic]={course:x.course,right:0,wrong:0,weak:0,slow:0,time:0,samples:0};
  map[x.topic].samples++;map[x.topic].time+=x.seconds;if(x.cls==="slow")map[x.topic].slow++;
 }
 const rows=Object.entries(map).filter(([,v])=>v.right+v.wrong+v.samples>0).sort((a,b)=>(b[1].wrong+b[1].slow)-(a[1].wrong+a[1].slow));
 $("statsByTopic").innerHTML=rows.length?rows.map(([topic,v])=>{
  const attempts=v.right+v.wrong,acc=attempts?Math.round(100*v.right/attempts):0,avg=v.samples?(v.time/v.samples).toFixed(1):"—";
  return '<div class="diag-item"><div><b>'+topic+'</b><small>'+names[v.course]+' · דיוק '+acc+'% · זמן ממוצע '+avg+' שנ׳</small></div><div class="diag-badges"><span class="mini">'+v.right+' נכון</span><span class="mini err">'+v.wrong+' טעויות</span>'+(v.weak?'<span class="mini err">'+v.weak+' כרטיסים חלשים</span>':'')+(v.slow?'<span class="mini slow">'+v.slow+' איטי</span>':'')+'</div></div>';
 }).join(""):'<p class="muted">עוד אין מספיק נתונים. התחל סשן.</p>';
}
function beginSession(){
 sessionSnapshot={startedAt:Date.now(),right:state.right||0,wrong:state.wrong||0,fast:state.timing.fast||0,normal:state.timing.normal||0,slow:state.timing.slow||0};
}
function finishSession(){
 stopClock();sessionStarted=false;
 const snap=sessionSnapshot||{startedAt:Date.now(),right:state.right||0,wrong:state.wrong||0,fast:state.timing.fast||0,normal:state.timing.normal||0,slow:state.timing.slow||0};
 const rec={startedAt:snap.startedAt,endedAt:Date.now(),right:(state.right||0)-snap.right,wrong:(state.wrong||0)-snap.wrong,fast:(state.timing.fast||0)-snap.fast,normal:(state.timing.normal||0)-snap.normal,slow:(state.timing.slow||0)-snap.slow};
 state.sessions.push(rec);if(state.sessions.length>100)state.sessions=state.sessions.slice(-100);save();renderStats();syncCloud(false);
 $("sessionSummaryBody").innerHTML='<div class="summary-grid"><div class="summary-box"><b>'+rec.right+'</b><span>נכונות</span></div><div class="summary-box"><b>'+rec.wrong+'</b><span>טעויות</span></div><div class="summary-box"><b>'+rec.slow+'</b><span>איטיות</span></div><div class="summary-box"><b>'+Math.round((rec.endedAt-rec.startedAt)/60000)+'</b><span>דקות</span></div></div><p class="summary-weak">כל שאלה שטעית בה נשארת מסומנת כחלשה גם לאחר שתיקנת אותה.</p>';
 $("sessionSummary").classList.remove("hidden");$("warmupView").classList.add("hidden");$("chainCard").classList.add("hidden");$("startGate").classList.remove("hidden");sessionSnapshot=null;
}
function exportProgress(){
 const blob=new Blob([JSON.stringify({version:3,exportedAt:new Date().toISOString(),state},null,2)],{type:"application/json"});
 const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="exam-recall-progress.json";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500);
}
function importProgress(file){
 const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(reader.result);const incoming=data.state||data;if(!incoming.items||!incoming.timing)throw new Error();state=incoming;state.sessions??=[];for(const v of Object.values(state.items||{})){if(v.everWeak===undefined)v.everWeak=(v.wrong||0)>0;}save();renderStats();alert("ההתקדמות יובאה בהצלחה.");}catch(e){alert("קובץ התקדמות לא תקין.");}};reader.readAsText(file);
}

function rebuildTopics(){
 const c=$("course").value; const src=appMode==="exam"?CHAINS:allEasy();
 const topics=[...new Set(src.filter(q=>c==="all"||q.course===c).map(q=>q.topic))].sort();
 const old=$("topic").value;$("topic").innerHTML='<option value="all">🎲 ערבוב — כל הנושאים</option>'+topics.map(t=>'<option>'+t+'</option>').join('');
 if(topics.includes(old))$("topic").value=old;
}
function easyPool(){
 const c=$("course").value,t=$("topic").value,k=$("kind").value;
 return allEasy().filter(q=>(c==="all"||q.course===c)&&(t==="all"||q.topic===t)&&(k==="all"||q.type===k)&&(appMode!=="weak"||weakness(q.id)>0));
}
function renderWarm(){
 if(!sessionStarted){$("warmupView").classList.add("hidden");return}
 $("warmupView").classList.remove("hidden");
 locked=false;$("wFeedback").className="feedback hidden";$("wNext").classList.add("hidden");
 const p=easyPool(); if(!p.length){$("wPrompt").textContent="אין כרגע שאלות במסנן הזה. נסה ערבוב או מצב Warm-up.";$("wOptions").innerHTML="";return}
 current=p[Math.floor(Math.random()*p.length)];
 $("wCourse").textContent=names[current.course];$("wTopic").textContent=current.topic;$("wType").textContent=current.type;$("wCount").textContent=p.length+" כרטיסים זמינים";$("wPrompt").textContent=current.prompt;
 const opts=shuffle([{text:current.answer,correct:true,why:null},...(current.wrong||[]).map(x=>typeof x==="string"?{text:x,correct:false,why:"זו אפשרות שמתאימה למבנה אחר."}:{text:x.text,correct:false,why:x.why})]).slice(0,4);
 $("wOptions").innerHTML=opts.map((o,i)=>'<button class="option" data-i="'+i+'">'+o.text+'</button>').join("");
 [...$("wOptions").children].forEach((b,i)=>b.onclick=()=>answerWarm(b,opts[i],opts));
 startClock("wTimer","wSpeed");
}
function answerWarm(btn,opt,opts){
 if(locked)return;
 const timing=recordTiming(current.id,current.course,current.topic,current.type,false);
 if(timing){$("wSpeed").className="speed "+timing.cls;$("wSpeed").textContent=speedLabel(timing.cls)+" · "+timing.seconds.toFixed(1)+" שנ׳";}
 if(!opt.correct){
   state.wrong++;state.streak=0;state.items[current.id]??={right:0,wrong:0,everWeak:false};state.items[current.id].wrong++;state.items[current.id].everWeak=true;save();renderStats();
   btn.classList.add("wrong");btn.disabled=true;$("wFeedback").className="feedback bad";$("wFeedbackTitle").textContent="✗ נסה שוב";$("wFeedbackText").textContent=opt.why||"בדוק שוב את ההבדל בין האפשרויות.";return;
 }
 locked=true;stopClock();state.right++;state.streak++;state.items[current.id]??={right:0,wrong:0,everWeak:false};state.items[current.id].right++;save();renderStats();
 [...$("wOptions").children].forEach(b=>b.disabled=true);btn.classList.add("correct");$("wFeedback").className="feedback good";$("wFeedbackTitle").textContent="✓ נכון";$("wFeedbackText").textContent=current.why||"יפה — הזיהוי נכון.";$("wNext").classList.remove("hidden");
}
function chainPool(){const c=$("course").value,t=$("topic").value;return CHAINS.filter(q=>(c==="all"||q.course===c)&&(t==="all"||q.topic===t))}
function renderChainPicker(){
 const p=chainPool();$("chainSelect").innerHTML=p.map(c=>'<option value="'+c.chain_id+'">'+c.title+'</option>').join("");
 $("examEmpty").classList.toggle("hidden",p.length>0);$("chainCard").classList.add("hidden");
 if(!p.length){$("examEmpty").textContent=$("course").value==="systems"?"כרגע אין שרשראות מבוא שיכולתי לאמת מטקסט PDF נגיש ב-Notion. לא המצאתי stems. ה-Warm-up של מבוא פעיל ומלא בנושאי דף הנוסחאות.":"אין שרשראות במסנן הזה כרגע."}
}
function startChain(){
 if(!sessionSnapshot)beginSession();
 chain=CHAINS.find(c=>c.chain_id===$("chainSelect").value);if(!chain)return;chainStep=0;chainMistakes=0;$("chainCard").classList.remove("hidden");$("chainDone").classList.add("hidden");renderChainStep();
}
function renderChainStep(){
 locked=false;$("chainFeedback").className="feedback hidden";$("chainNext").classList.add("hidden");
 const s=chain.steps[chainStep];$("chainTitle").textContent=chain.title;$("chainProgress").textContent=(chainStep+1)+" מתוך "+chain.steps.length;$("chainStem").textContent=chain.stem;$("chainPrompt").textContent=s.prompt;
 const opts=shuffle([{text:s.answer,correct:true},...s.wrong.map(x=>({text:x,correct:false}))]);
 $("chainOptions").innerHTML=opts.map((o,i)=>'<button class="option" data-i="'+i+'">'+o.text+'</button>').join("");
 [...$("chainOptions").children].forEach((b,i)=>b.onclick=()=>answerChain(b,opts[i],s));
 startClock("chainTimer","chainSpeed");
}
function answerChain(btn,opt,s){
 if(locked)return;
 const timing=recordTiming(chain.chain_id+"#"+chainStep,chain.course,chain.topic,"exam",true);
 if(timing){$("chainSpeed").className="speed "+timing.cls;$("chainSpeed").textContent=speedLabel(timing.cls)+" · "+timing.seconds.toFixed(1)+" שנ׳";}
 if(!opt.correct){chainMistakes++;state.wrong++;state.streak=0;state.chains[chain.chain_id]??={right:0,wrong:0};state.chains[chain.chain_id].wrong++;save();renderStats();btn.classList.add("wrong");btn.disabled=true;$("chainFeedback").className="feedback bad";$("chainFeedbackTitle").textContent="✗ עדיין לא";$("chainFeedbackText").textContent=s.hint;return}
 locked=true;stopClock();state.right++;state.streak++;state.chains[chain.chain_id]??={right:0,wrong:0};state.chains[chain.chain_id].right++;save();renderStats();[...$("chainOptions").children].forEach(b=>b.disabled=true);btn.classList.add("correct");$("chainFeedback").className="feedback good";$("chainFeedbackTitle").textContent="✓ נכון";$("chainFeedbackText").textContent=s.explain;$("chainNext").classList.remove("hidden");
}
function nextChainStep(){
 if(chainStep<chain.steps.length-1){chainStep++;renderChainStep();return}
 $("chainNext").classList.add("hidden");$("chainOptions").innerHTML="";$("chainPrompt").textContent="";$("chainFeedback").classList.add("hidden");$("chainDone").classList.remove("hidden");$("chainSummary").textContent=chain.summary+" טעויות בדרך: "+chainMistakes+".";
}
function setMode(m){
 stopClock();appMode=m;document.querySelectorAll(".mode").forEach(b=>b.classList.toggle("active",b.dataset.mode===m));
 $("warmupView").classList.toggle("hidden",m==="exam");$("examView").classList.toggle("hidden",m!=="exam");$("kindWrap").classList.toggle("hidden",m==="exam");
 rebuildTopics(); if(m==="exam"){sessionStarted=true;$("startGate").classList.add("hidden");renderChainPicker();}else{sessionStarted=false;$("startGate").classList.remove("hidden");$("warmupView").classList.add("hidden");}
}
document.querySelectorAll(".mode").forEach(b=>b.onclick=()=>setMode(b.dataset.mode));
$("course").onchange=()=>{rebuildTopics();appMode==="exam"?renderChainPicker():renderWarm()};$("topic").onchange=()=>appMode==="exam"?renderChainPicker():renderWarm();$("kind").onchange=renderWarm;
$("startSessionBtn").onclick=()=>{sessionStarted=true;beginSession();$("startGate").classList.add("hidden");renderWarm()};
$("wNext").onclick=renderWarm;$("finishWarmBtn").onclick=finishSession;$("finishExamBtn").onclick=finishSession;$("startChain").onclick=startChain;$("chainNext").onclick=nextChainStep;$("anotherChain").onclick=renderChainPicker;
$("saveTokenBtn").onclick=connectGithubToken;$("syncNowBtn").onclick=()=>syncCloud(true);$("forgetTokenBtn").onclick=forgetGithubToken;
$("exportBtn").onclick=exportProgress;$("importInput").onchange=e=>{if(e.target.files&&e.target.files[0])importProgress(e.target.files[0]);e.target.value=""};$("closeSummaryBtn").onclick=()=>{$("sessionSummary").classList.add("hidden");};
$("resetBtn").onclick=()=>{if(confirm("לאפס את כל ההתקדמות באתר?")){state={right:0,wrong:0,streak:0,items:{},chains:{},timing:{fast:0,normal:0,slow:0,samples:[]},sessions:[]};save();renderStats();sessionStarted=false;stopClock();$("startGate").classList.remove("hidden");$("warmupView").classList.add("hidden");appMode==="exam"?renderChainPicker():null}};
renderStats();rebuildTopics();$("warmupView").classList.add("hidden");
if(ghToken()){setCloudStatus("טוקן שמור במכשיר — טוען התקדמות…");syncCloud(true);}else{setCloudStatus("לא מחובר — הדבק Fine-grained token פעם אחת במכשיר הזה");}