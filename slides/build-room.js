const pptxgen = require("pptxgenjs");
const p = new pptxgen();
p.defineLayout({ name:"RLU", width:20, height:11.25 });
p.layout = "RLU";
p.author = "Destyni Triplett, RN";
p.title  = "The Retention Room";

const INK="FFFFFF", GOLD="D4AF37", PINK="F600A2", MUTE="B9B3BB",
      BG="0A0A0A", LINE="262026", GREEN="4EBB19", DGREEN="398414";
const PB="Poppins Bold", PR="Poppins", PI="Poppins Italics";
const M=1.62, W=18.76-1.62;   // left margin, content width

function s(){ const sl=p.addSlide(); sl.background={color:BG}; return sl; }

function eyebrow(sl,t,y){ sl.addText(t,{x:M,y:y||0.62,w:W,h:0.42,fontFace:PB,fontSize:15,
  color:GOLD,charSpacing:6,bold:true,isTextBox:true,margin:0,valign:"middle"}); }

function title(sl,rt,y,sz){ sl.addText(rt,{x:M,y:y||1.30,w:W,h:2.0,fontFace:PB,fontSize:sz||45,
  color:INK,lineSpacing:(sz||45)*1.18,isTextBox:true,margin:0,valign:"top"}); }

function kicker(sl,t){ sl.addText(t,{x:M,y:9.72,w:W,h:0.7,fontFace:PI,fontSize:17.25,
  color:MUTE,italic:true,isTextBox:true,margin:0,valign:"middle"}); }

function rule(sl,y){ sl.addShape(p.ShapeType.rect,{x:M,y:y,w:W,h:0.012,fill:{color:LINE}}); }

/* rows of numbered blocks */
function rows(sl,items,y0){
  let y=y0;
  items.forEach((it,i)=>{
    sl.addText(String(i+1).padStart(2,"0"),{x:M,y:y,w:0.9,h:0.5,fontFace:PB,fontSize:15,
      color:GOLD,charSpacing:3,isTextBox:true,margin:0,valign:"middle"});
    sl.addText(it[0],{x:M+1.0,y:y,w:W-1.0,h:0.5,fontFace:PB,fontSize:19.5,color:INK,
      isTextBox:true,margin:0,valign:"middle"});
    sl.addText(it[1],{x:M+1.0,y:y+0.52,w:W-1.0,h:0.5,fontFace:PR,fontSize:17.25,color:MUTE,
      isTextBox:true,margin:0,valign:"middle"});
    y+=1.30;
  });
}

/* ---------------- 1 · TITLE ---------------- */
{ const sl=s();
  sl.addText("R I C H   L A S H ®   U N I V E R S I T Y",{x:M,y:0.62,w:W,h:0.42,fontFace:PB,
    fontSize:15,color:GOLD,charSpacing:6,isTextBox:true,margin:0,valign:"middle"});
  sl.addText("THE RETENTION ROOM",{x:M,y:3.05,w:W,h:0.5,fontFace:PB,fontSize:15,color:PINK,
    charSpacing:6,isTextBox:true,margin:0,valign:"middle"});
  sl.addText([{text:"Why her lashes",options:{color:INK}},{text:"\n"},
              {text:"fall off in nine days.",options:{color:PINK,italic:true,fontFace:PI}}],
    {x:M,y:3.75,w:W,h:2.9,fontFace:PB,fontSize:66,lineSpacing:74,isTextBox:true,margin:0});
  rule(sl,7.05);
  sl.addText("Tuesday, September 1  ·  8 to 9 PM ET  ·  One live hour",
    {x:M,y:7.35,w:W,h:0.6,fontFace:PR,fontSize:19.5,color:MUTE,isTextBox:true,margin:0});
  sl.addText("DESTYNI TRIPLETT, REGISTERED NURSE",{x:M,y:9.9,w:W,h:0.5,fontFace:PB,fontSize:15,
    color:GOLD,charSpacing:5,isTextBox:true,margin:0});
  sl.addNotes("Cameras on. Say hi. Wait for the room to fill. Do not start teaching until 8:03.");
}

/* ---------------- 2 · WELCOME ---------------- */
{ const sl=s();
  eyebrow(sl,"WELCOME IN");
  title(sl,[{text:"One hour. ",options:{color:INK}},
            {text:"Three acts.",options:{color:PINK,fontFace:PI,italic:true}}]);
  rows(sl,[
    ["The Chemistry","Why it does not last, and what your room has to do with it"],
    ["The Consultation","It is decided before you pick up a tweezer"],
    ["The Rebooking","A set that lasts is a client who comes back"]
  ],4.35);
  kicker(sl,"Type your city in the chat so I know who is in the room.");
  sl.addNotes("Get them typing in the first 90 seconds. Read a few cities out loud by name.");
}

/* ---------------- 3 · WHO I AM ---------------- */
{ const sl=s();
  eyebrow(sl,"BEFORE WE START");
  title(sl,[{text:"I am a nurse who lashes.\n",options:{color:INK}},
            {text:"That is the whole difference.",options:{color:GOLD,fontFace:PI,italic:true}}],1.30,45);
  rows(sl,[
    ["Lashing since 2017","Nine years, over a thousand clients"],
    ["Teaching since 2019","250+ women trained"],
    ["RN since 2020","Chemistry and safety, not guesswork"]
  ],4.55);
  kicker(sl,"Everything tonight comes out of a curriculum I wrote as a nurse, not as a hobbyist.");
}

/* ---------------- 4 · DAY NINE ---------------- */
{ const sl=s();
  eyebrow(sl,"LET ME TELL YOU WHAT HAPPENS");
  title(sl,[{text:"Here is what happens\n",options:{color:INK}},
            {text:"on day nine.",options:{color:PINK,fontFace:PI,italic:true}}],2.60,60);
  sl.addText("She sends the photo. Half the set, and a message that starts with “hey, so...”\n\nYou already know what it says before you open it.",
    {x:M,y:6.20,w:W*0.78,h:2.4,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:34,isTextBox:true,margin:0});
  sl.addNotes("Slow down here. Let it sit. Ask: has this happened to you? Type yes.");
}

/* ---------------- 5 · WHAT IT COSTS ---------------- */
{ const sl=s();
  eyebrow(sl,"AND THEN WHAT HAPPENS");
  title(sl,[{text:"You quietly\n",options:{color:INK}},
            {text:"stop posting your work.",options:{color:PINK,fontFace:PI,italic:true}}],1.35,50);
  sl.addText("You apologise. You offer to fix it for nothing. You spend two hours and your product on a set you already got paid for once, and you tell her it is no trouble.\n\nNot because you decided to stop posting. Because you are not sure it will last, and you cannot bear that conversation again.\n\nSo you do not raise your price. You do not ask for the referral.",
    {x:M,y:4.55,w:W*0.82,h:4.4,fontFace:PR,fontSize:19.5,color:MUTE,lineSpacing:33,isTextBox:true,margin:0});
  kicker(sl,"You get smaller, one apology at a time.");
}

/* ---------------- 6 · THE REFRAME ---------------- */
{ const sl=s();
  eyebrow(sl,"SO LET ME SAY THIS PLAIN");
  sl.addText([{text:"Bad retention is not\na talent problem.\n",options:{color:INK}},
              {text:"It is a chemistry problem.",options:{color:PINK,fontFace:PI,italic:true}}],
    {x:M,y:2.35,w:W,h:3.3,fontFace:PB,fontSize:52,color:INK,lineSpacing:64,isTextBox:true,margin:0,valign:"top"});
  rule(sl,8.15);
  sl.addText("And you cannot troubleshoot chemistry from memory.",
    {x:M,y:8.50,w:W,h:0.8,fontFace:PI,fontSize:21,color:GOLD,italic:true,isTextBox:true,margin:0});
  sl.addNotes("This is the thesis of the whole night. Say it twice.");
}

/* ---------------- 7 · ACT ONE ---------------- */
{ const sl=s();
  sl.addText("ACT ONE",{x:M,y:3.9,w:W,h:0.6,fontFace:PB,fontSize:15,color:PINK,charSpacing:8,
    isTextBox:true,margin:0});
  sl.addText([{text:"The ",options:{color:INK}},{text:"Chemistry",options:{color:GOLD,fontFace:PI,italic:true}}],
    {x:M,y:4.65,w:W,h:1.9,fontFace:PB,fontSize:76,isTextBox:true,margin:0});
  sl.addText("Why it does not last.",{x:M,y:6.75,w:W,h:0.8,fontFace:PR,fontSize:21,color:MUTE,
    isTextBox:true,margin:0});
}

/* ---------------- 8 · CURING ---------------- */
{ const sl=s();
  eyebrow(sl,"ACT ONE  ·  THE THING NOBODY TOLD YOU");
  title(sl,[{text:"Your adhesive is not drying.\n",options:{color:INK}},
            {text:"It is curing.",options:{color:PINK,fontFace:PI,italic:true}}],2.15,54);
  sl.addText("Cyanoacrylate does not dry like paint. It is a chemical reaction that sets using moisture in the air.\n\nWhich means your room is part of your kit.",
    {x:M,y:6.15,w:W*0.80,h:2.6,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
  sl.addNotes("Ask them to hold up their bottle. Have three people read the brand and name in the chat.");
}

/* ---------------- 9 · HOLD UP YOUR BOTTLE ---------------- */
{ const sl=s();
  eyebrow(sl,"DO THIS WITH ME RIGHT NOW");
  title(sl,[{text:"Pick up your adhesive.\n",options:{color:INK}},
            {text:"Type the name in the chat.",options:{color:GOLD,fontFace:PI,italic:true}}],3.10,54);
  sl.addText("Brand and name. It is on the bottle.\n\nNo adhesive yet? Type NONE. You are in the right room either way.",
    {x:M,y:6.75,w:W*0.80,h:2.2,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
  sl.addNotes("STOP TEACHING. Wait for the chat. Read out five brands by name. This is the participation beat.");
}

/* ---------------- 10 · THREE STATES ---------------- */
{ const sl=s();
  eyebrow(sl,"ACT ONE  ·  THE CURE CHECK");
  title(sl,"Three states. Your room picks one.",1.30,45);
  const cards=[
    ["TOO DRY",PINK,"Under-cures. Stays tacky.\nSlides off in a few days."],
    ["IN RANGE",GREEN,"A strong, flexible bond.\nThis is the whole goal."],
    ["TOO HUMID",PINK,"Shock-cures. Blooms.\nGoes brittle and lets go early."]
  ];
  cards.forEach((c,i)=>{
    const x=M+i*(W/3);
    sl.addShape(p.ShapeType.roundRect,{x:x,y:4.15,w:W/3-0.42,h:3.55,fill:{color:"121013"},
      line:{color:LINE,width:1},rectRadius:0.12});
    sl.addText(c[0],{x:x+0.5,y:4.62,w:W/3-1.4,h:0.5,fontFace:PB,fontSize:15,color:c[1],
      charSpacing:5,isTextBox:true,margin:0});
    sl.addText(c[2],{x:x+0.5,y:5.42,w:W/3-1.4,h:1.9,fontFace:PR,fontSize:18.75,color:INK,
      lineSpacing:30,isTextBox:true,margin:0});
  });
  kicker(sl,"Two artists. Same glue. Different rooms. Completely different retention.");
}

/* ---------------- 11 · MYTH ONE ---------------- */
{ const sl=s();
  eyebrow(sl,"AND THIS IS WHERE I LOSE FRIENDS");
  title(sl,[{text:"There is no universal\n",options:{color:INK}},
            {text:"humidity rule.",options:{color:PINK,fontFace:PI,italic:true}}],2.35,56);
  sl.addText("40 to 70 percent. 70 to 72 degrees. Whoever taught you that taught you somebody else's adhesive.\n\nThose numbers are product-dependent. Get a hygrometer, learn your adhesive's range, and read your own air.",
    {x:M,y:6.30,w:W*0.82,h:2.8,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
  sl.addNotes("Expect chat reaction here. Let them react before moving on.");
}

/* ---------------- 12 · THE OIL ---------------- */
{ const sl=s();
  eyebrow(sl,"ACT ONE  ·  THE PART THAT IS NOT YOUR FAULT");
  title(sl,[{text:"She swore she wasn't using oil.\n",options:{color:INK}},
            {text:"She was telling the truth.",options:{color:PINK,fontFace:PI,italic:true}}],2.05,48);
  sl.addText("The glands along her lid margin keep her lash line moist. That same oil is dissolving your bond, a little every day, whether she touches a product or not.\n\nAn oily client sheds faster no matter how clean your application was.",
    {x:M,y:6.05,w:W*0.82,h:2.9,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
  kicker(sl,"That is not you failing. That is her chemistry, and now you can explain it.");
}

/* ---------------- 13 · TROUBLESHOOT ORDER ---------------- */
{ const sl=s();
  eyebrow(sl,"WHEN RETENTION DROPS, CHECK IN THIS ORDER");
  title(sl,"Do not start with your hands.",1.30,45);
  const items=["Your environment","Adhesive age and drop age","Her aftercare","Your isolation","Your attachment"];
  let y=4.15;
  items.forEach((t,i)=>{
    sl.addText(String(i+1).padStart(2,"0"),{x:M,y:y,w:0.9,h:0.62,fontFace:PB,fontSize:15,
      color:i<3?GOLD:MUTE,charSpacing:3,isTextBox:true,margin:0,valign:"middle"});
    sl.addText(t,{x:M+1.0,y:y,w:W-1.0,h:0.62,fontFace:i<3?PB:PR,fontSize:22,
      color:i<3?INK:MUTE,isTextBox:true,margin:0,valign:"middle"});
    y+=1.02;
  });
  kicker(sl,"Most of you start at number five. That is why you have been blaming yourself.");
}

/* ---------------- 14 · TAKEAWAY ONE ---------------- */
{ const sl=s();
  sl.addText("YOU LEAVE WITH",{x:0,y:4.05,w:20,h:0.5,fontFace:PB,fontSize:15,color:MUTE,
    charSpacing:6,align:"center",isTextBox:true,margin:0});
  sl.addText([{text:"The Cure ",options:{color:INK}},{text:"Check",options:{color:GOLD,fontFace:PI,italic:true}}],
    {x:0,y:4.85,w:20,h:1.7,fontFace:PB,fontSize:72,align:"center",isTextBox:true,margin:0});
  sl.addText("The three conditions in your room that decide how long her set lasts.",
    {x:3.6,y:6.85,w:12.8,h:0.9,fontFace:PR,fontSize:21,color:MUTE,align:"center",isTextBox:true,margin:0});
}

/* ---------------- 15 · ACT TWO ---------------- */
{ const sl=s();
  sl.addText("ACT TWO",{x:M,y:3.9,w:W,h:0.6,fontFace:PB,fontSize:15,color:PINK,charSpacing:8,
    isTextBox:true,margin:0});
  sl.addText([{text:"The ",options:{color:INK}},{text:"Consultation",options:{color:GOLD,fontFace:PI,italic:true}}],
    {x:M,y:4.65,w:W,h:1.9,fontFace:PB,fontSize:76,isTextBox:true,margin:0});
  sl.addText("It is decided before you pick up a tweezer.",{x:M,y:6.75,w:W,h:0.8,fontFace:PR,
    fontSize:21,color:MUTE,isTextBox:true,margin:0});
}

/* ---------------- 16 · THE FOUR QUESTIONS ---------------- */
{ const sl=s();
  eyebrow(sl,"ACT TWO  ·  THE FOUR QUESTIONS");
  title(sl,"Ask these at intake. Every time.",1.30,45);
  const qs=[["What are you putting on your face at night?","Skincare is the number one silent bond-killer"],
            ["How does the water hit your face in the shower?","Direct hot water, every day, is a different set"],
            ["Are you wearing mascara on these?","This answer changes what you can safely build"],
            ["When was your last full set?","Tells you where she is in her own lash cycle"]];
  rows(sl,qs,4.20);
  kicker(sl,"Her answer tells you what her set is going to do, before you touch her.");
  sl.addNotes("Say each question the way you would say it in the chair. Then what the answer tells you.");
}

/* ---------------- 17 · SAY IT OUT LOUD ---------------- */
{ const sl=s();
  eyebrow(sl,"AND THIS IS THE PART THAT SAVES YOU");
  title(sl,[{text:"Say it out loud at intake\n",options:{color:INK}},
            {text:"instead of her finding out on day nine.",options:{color:PINK,fontFace:PI,italic:true}}],2.85,44);
  sl.addText("“Based on what you just told me, your set is going to want a fill around week two instead of week three. That is your oil, not my work. Here is what we do about it.”",
    {x:M,y:6.35,w:W*0.84,h:2.4,fontFace:PI,fontSize:23,color:INK,italic:true,lineSpacing:38,isTextBox:true,margin:0});
  kicker(sl,"You just turned a future complaint into proof that you knew what you were doing.");
}

/* ---------------- 18 · TAKEAWAY TWO ---------------- */
{ const sl=s();
  sl.addText("YOU LEAVE WITH",{x:0,y:4.05,w:20,h:0.5,fontFace:PB,fontSize:15,color:MUTE,
    charSpacing:6,align:"center",isTextBox:true,margin:0});
  sl.addText([{text:"The Four ",options:{color:INK}},{text:"Questions",options:{color:GOLD,fontFace:PI,italic:true}}],
    {x:0,y:4.85,w:20,h:1.7,fontFace:PB,fontSize:72,align:"center",isTextBox:true,margin:0});
  sl.addText("Ask them at your next appointment. Watch what changes.",
    {x:3.6,y:6.85,w:12.8,h:0.9,fontFace:PR,fontSize:21,color:MUTE,align:"center",isTextBox:true,margin:0});
}

/* ---------------- 19 · ACT THREE ---------------- */
{ const sl=s();
  sl.addText("ACT THREE",{x:M,y:3.9,w:W,h:0.6,fontFace:PB,fontSize:15,color:PINK,charSpacing:8,
    isTextBox:true,margin:0});
  sl.addText([{text:"The ",options:{color:INK}},{text:"Rebooking",options:{color:GOLD,fontFace:PI,italic:true}}],
    {x:M,y:4.65,w:W,h:1.9,fontFace:PB,fontSize:76,isTextBox:true,margin:0});
  sl.addText("A set that lasts is a client who comes back.",{x:M,y:6.75,w:W,h:0.8,fontFace:PR,
    fontSize:21,color:MUTE,isTextBox:true,margin:0});
}

/* ---------------- 20 · MONEY ---------------- */
{ const sl=s();
  eyebrow(sl,"ACT THREE  ·  WHY THIS IS THE MONEY PART");
  title(sl,[{text:"Retention stops being about lashes\n",options:{color:INK}},
            {text:"and starts being about your money.",options:{color:PINK,fontFace:PI,italic:true}}],2.15,44);
  sl.addText("When her set lasts, she trusts you. She comes back. She rebooks before she ever leaves the chair.\n\nYou stop chasing. You stop discounting. You stop redoing sets for nothing.",
    {x:M,y:6.05,w:W*0.82,h:2.8,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
}

/* ---------------- 21 · AFTERCARE ---------------- */
{ const sl=s();
  eyebrow(sl,"ACT THREE  ·  AFTERCARE SHE WILL ACTUALLY FOLLOW");
  title(sl,"Four things, in this order.",1.30,45);
  rows(sl,[
    ["Keep the lash line clean","Brush it. Foam cleanse it. Buildup wrecks retention and eye health"],
    ["No oil-based products near the eyes","Oil is the enemy of a cured bond"],
    ["Do not rub, tug or pull. No mascara","Pulling extensions damages her natural lash"],
    ["Water timing per your adhesive","Not a blanket rule you heard somewhere"]
  ],4.20);
}

/* ---------------- 22 · MYTH TWO ---------------- */
{ const sl=s();
  eyebrow(sl,"ONE MORE THING YOU WERE TAUGHT WRONG");
  title(sl,[{text:"“No water for 24 hours”\n",options:{color:INK}},
            {text:"is not a rule. It is a rumor.",options:{color:PINK,fontFace:PI,italic:true}}],2.75,50);
  sl.addText("It is product-dependent. Give her the timing your manufacturer specifies.\n\nAnything else is you repeating what somebody told you.",
    {x:M,y:6.55,w:W*0.82,h:2.4,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
}

/* ---------------- 23 · TELL HER WHY ---------------- */
{ const sl=s();
  eyebrow(sl,"THE PART MOST ARTISTS SKIP");
  title(sl,[{text:"Tell her ",options:{color:INK}},{text:"why.",options:{color:PINK,fontFace:PI,italic:true}}],2.35,66);
  sl.addText("“I am cleansing first so the adhesive bonds to a clean lash. That is half your retention right there.”",
    {x:M,y:5.05,w:W*0.84,h:1.8,fontFace:PI,fontSize:25,color:INK,italic:true,lineSpacing:42,isTextBox:true,margin:0});
  sl.addText("A client who understands the why protects it at home, comes back on schedule, and tells her friends what made you different.\n\nA client who got handed a list does not.",
    {x:M,y:7.15,w:W*0.82,h:2.2,fontFace:PR,fontSize:20,color:MUTE,lineSpacing:33,isTextBox:true,margin:0});
}

/* ---------------- 24 · DAY THREE ---------------- */
{ const sl=s();
  eyebrow(sl,"ACT THREE  ·  THE DAY-THREE MESSAGE");
  title(sl,"Send this on day three. Every client.",1.30,45);
  sl.addShape(p.ShapeType.roundRect,{x:M,y:3.95,w:W*0.78,h:2.15,fill:{color:"121013"},
    line:{color:PINK,width:1.5},rectRadius:0.14});
  sl.addText("“Wanted to make sure your lashes are feeling good. Text me if anything needs adjusting.”",
    {x:M+0.6,y:4.30,w:W*0.78-1.2,h:1.5,fontFace:PI,fontSize:25,color:INK,italic:true,
     lineSpacing:40,isTextBox:true,margin:0});
  sl.addText("That message is for her.\n\n“Spots are filling fast, book now” is for you. She can feel the difference instantly.",
    {x:M,y:6.65,w:W*0.82,h:2.4,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
  kicker(sl,"You do not need fake urgency when your work is good.");
}

/* ---------------- 25 · TAKEAWAY THREE ---------------- */
{ const sl=s();
  sl.addText("YOU LEAVE WITH",{x:0,y:4.05,w:20,h:0.5,fontFace:PB,fontSize:15,color:MUTE,
    charSpacing:6,align:"center",isTextBox:true,margin:0});
  sl.addText([{text:"The ",options:{color:INK}},{text:"Protocol",options:{color:GOLD,fontFace:PI,italic:true}}],
    {x:0,y:4.85,w:20,h:1.7,fontFace:PB,fontSize:72,align:"center",isTextBox:true,margin:0});
  sl.addText("The day-three message, what to look for in her answer, and how it saves the clients you would have lost.",
    {x:3.0,y:6.85,w:14,h:1.2,fontFace:PR,fontSize:21,color:MUTE,align:"center",isTextBox:true,margin:0});
}

/* ---------------- 26 · RECAP ---------------- */
{ const sl=s();
  eyebrow(sl,"IN ONE HOUR YOU GOT");
  title(sl,"Three things you can use tomorrow.",1.30,45);
  const t=[["The Cure Check","Your room, read properly, for the first time"],
           ["The Four Questions","Asked at intake, before you touch her"],
           ["The Protocol","Aftercare that sticks and a day-three message"]];
  rows(sl,t,4.35);
  kicker(sl,"That was the free hour, and I meant every word of it.");
}

/* ---------------- 27 · THE TURN ---------------- */
{ const sl=s();
  eyebrow(sl,"NOW LET ME BE HONEST WITH YOU");
  title(sl,[{text:"Knowing why is not\nthe same as ",options:{color:INK}},
            {text:"being corrected.",options:{color:PINK,fontFace:PI,italic:true}}],2.35,50);
  sl.addText("You can leave here knowing exactly what went wrong and still do it again next Tuesday, because nobody is watching your hands.\n\nThat is the gap. It is not information. It is correction.",
    {x:M,y:6.45,w:W*0.82,h:2.7,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
  sl.addNotes("This is the pivot. Do not rush it and do not apologise for it.");
}

/* ---------------- 28 · INVITATION ---------------- */
{ const sl=s();
  eyebrow(sl,"THE INVITATION");
  title(sl,[{text:"I want to invite you into the\n",options:{color:INK}},
            {text:"Lash Mastery CEO Certification™.",options:{color:GOLD,fontFace:PI,italic:true}}],2.75,46);
  sl.addText("If this is what you want for your life, type YES in the chat.",
    {x:M,y:6.35,w:W*0.84,h:1.0,fontFace:PB,fontSize:28,color:INK,isTextBox:true,margin:0});
  sl.addText("The details are for the yeses only. If it is not for you, no hard feelings. The hour was yours either way.",
    {x:M,y:7.55,w:W*0.82,h:1.4,fontFace:PR,fontSize:20,color:MUTE,lineSpacing:33,isTextBox:true,margin:0});
  sl.addNotes("WAIT for the YES chat. Read names out loud. Do not move until the chat moves.");
}

/* ---------------- 29 · WHAT'S INCLUDED ---------------- */
{ const sl=s();
  eyebrow(sl,"WHAT YOU JUST SAID YES TO");
  title(sl,"The Lash Mastery CEO Certification™",1.30,42);
  const inc=[["Six weeks live with an RN","Every session recorded. You leave corrected, not guessing"],
             ["Barbicide® + Master Eyelash Specialist","Credentials clients recognize"],
             ["The Money Maker Lash Kit, shipped","Professional product for your first 30 paying clients"],
             ["Lash CEO GPT Library™ + Vendor List","Four AI tools answering the questions that stop women cold"],
             ["The Rich Lash® Performance Guarantee","We keep working with you until your first paying client"]];
  let y=3.95;
  inc.forEach(it=>{
    sl.addText("✓",{x:M,y:y,w:0.6,h:0.55,fontFace:PB,fontSize:22,color:GREEN,isTextBox:true,margin:0,valign:"middle"});
    sl.addText(it[0],{x:M+0.7,y:y,w:W-0.7,h:0.55,fontFace:PB,fontSize:20,color:INK,isTextBox:true,margin:0,valign:"middle"});
    sl.addText(it[1],{x:M+0.7,y:y+0.52,w:W-0.7,h:0.5,fontFace:PR,fontSize:17.25,color:MUTE,isTextBox:true,margin:0,valign:"middle"});
    y+=1.20;
  });
}

/* ---------------- 30 · TIER ONE ---------------- */
{ const sl=s();
  eyebrow(sl,"TIER ONE");
  title(sl,[{text:"Certified ",options:{color:INK}},{text:"CEO",options:{color:GOLD,fontFace:PI,italic:true}}],1.25,54);
  sl.addText("START TONIGHT WITH",{x:M,y:3.55,w:6.0,h:0.45,fontFace:PB,fontSize:15,color:MUTE,
    charSpacing:4,isTextBox:true,margin:0});
  sl.addText("$750",{x:M,y:4.00,w:6.0,h:1.5,fontFace:PB,fontSize:76,color:PINK,isTextBox:true,margin:0});
  sl.addText("Total $2,997  ·  RLU Pay™ total $3,147, no credit check",
    {x:M,y:5.55,w:9.6,h:0.6,fontFace:PR,fontSize:18.75,color:MUTE,isTextBox:true,margin:0});
  const li=["6-week live RN-led certification","Barbicide® + Master Eyelash Specialist Certs",
            "Money Maker Lash Kit for your first 30 clients","Lash CEO GPT Library™ + Vendor List",
            "Performance Guarantee · 12 months campus access"];
  let y=3.70;
  li.forEach(t=>{
    sl.addText("✓",{x:M+9.9,y:y,w:0.5,h:0.5,fontFace:PB,fontSize:19,color:GREEN,isTextBox:true,margin:0,valign:"middle"});
    sl.addText(t,{x:M+10.5,y:y,w:W-10.5,h:0.5,fontFace:PR,fontSize:18.75,color:INK,isTextBox:true,margin:0,valign:"middle"});
    y+=0.86;
  });
  rule(sl,8.55);
  sl.addText("Enroll by Thursday September 3 and your kit reaches you before Week One.",
    {x:M,y:8.85,w:W,h:0.7,fontFace:PB,fontSize:19.5,color:GOLD,isTextBox:true,margin:0});
}

/* ---------------- 31 · TIER TWO ---------------- */
{ const sl=s();
  eyebrow(sl,"TIER TWO  ·  MOST CHOSEN");
  title(sl,[{text:"Equipped ",options:{color:INK}},{text:"CEO",options:{color:GOLD,fontFace:PI,italic:true}}],1.25,54);
  sl.addText("START TONIGHT WITH",{x:M,y:3.55,w:6.0,h:0.45,fontFace:PB,fontSize:15,color:MUTE,
    charSpacing:4,isTextBox:true,margin:0});
  sl.addText("$1,200",{x:M,y:4.00,w:6.6,h:1.5,fontFace:PB,fontSize:76,color:PINK,isTextBox:true,margin:0});
  sl.addText("Total $3,997  ·  RLU Pay™ total $4,147, no credit check",
    {x:M,y:5.55,w:9.6,h:0.6,fontFace:PR,fontSize:18.75,color:MUTE,isTextBox:true,margin:0});
  const li=["Everything in Certified CEO, kit included","Complete Professional Studio, shipped to your door",
            "Shadow Labs · live correction on your real hands","Private 1:1 Strategy Sessions with Destyni",
            "Lash Cash Q4 included · a $997 program","24 months of campus and curriculum access"];
  let y=3.55;
  li.forEach(t=>{
    sl.addText("✓",{x:M+9.9,y:y,w:0.5,h:0.5,fontFace:PB,fontSize:19,color:GREEN,isTextBox:true,margin:0,valign:"middle"});
    sl.addText(t,{x:M+10.5,y:y,w:W-10.5,h:0.5,fontFace:PR,fontSize:18.75,color:INK,isTextBox:true,margin:0,valign:"middle"});
    y+=0.84;
  });
  rule(sl,8.55);
  sl.addText("You do not start experimenting. You start equipped.",
    {x:M,y:8.85,w:W,h:0.7,fontFace:PI,fontSize:21,color:GOLD,italic:true,isTextBox:true,margin:0});
}

/* ---------------- 32 · RLU PAY ---------------- */
{ const sl=s();
  eyebrow(sl,"RLU PAY™");
  title(sl,"Pick your tier. Pick your pace.",1.25,45);
  const cols=[["CERTIFIED CEO","$750","deposit tonight",
               ["Weekly · $400 × 3, then $399 × 3","Biweekly · 3 payments of $799","Two payments · $1,198.50 each"]],
              ["EQUIPPED CEO · MOST CHOSEN","$1,200","deposit tonight",
               ["Weekly · $491 × 6","Biweekly · 3 payments of $982.33","Two payments · $1,473.50 each"]]];
  cols.forEach((c,i)=>{
    const x=M+i*(W/2+0.1);
    sl.addShape(p.ShapeType.roundRect,{x:x,y:3.85,w:W/2-0.5,h:4.35,fill:{color:"121013"},
      line:{color:i?PINK:LINE,width:i?1.5:1},rectRadius:0.14});
    sl.addText(c[0],{x:x+0.6,y:4.20,w:W/2-1.7,h:0.45,fontFace:PB,fontSize:15,color:i?PINK:GOLD,
      charSpacing:4,isTextBox:true,margin:0});
    sl.addText(c[1],{x:x+0.6,y:4.70,w:W/2-1.7,h:1.05,fontFace:PB,fontSize:52,color:INK,isTextBox:true,margin:0});
    sl.addText(c[2],{x:x+0.6,y:5.78,w:W/2-1.7,h:0.4,fontFace:PR,fontSize:17.25,color:MUTE,isTextBox:true,margin:0});
    let y=6.35;
    c[3].forEach(t=>{ sl.addText(t,{x:x+0.6,y:y,w:W/2-1.7,h:0.5,fontFace:PR,fontSize:18.75,
      color:INK,isTextBox:true,margin:0,valign:"middle"}); y+=0.56; });
  });
  sl.addText("No credit check  ·  No lender  ·  No interest.  Or pay in full with Shop Pay, Affirm or Sezzle.",
    {x:M,y:8.75,w:W,h:0.7,fontFace:PR,fontSize:19.5,color:MUTE,isTextBox:true,margin:0});
}

/* ---------------- 33 · GUARANTEE ---------------- */
{ const sl=s();
  eyebrow(sl,"THE RICH LASH® PERFORMANCE GUARANTEE");
  title(sl,[{text:"The real fear is betting on\nyourself and ",options:{color:INK}},
            {text:"it not working.",options:{color:PINK,fontFace:PI,italic:true}}],1.85,46);
  rows(sl,[["Complete the curriculum","Do the six weeks"],
           ["Show up to your live sessions","Be in the room"],
           ["Run the client strategy we give you","Use what we hand you"]],5.05);
  rule(sl,8.65);
  sl.addText("Still no first paying client after that? We keep working with you until you land her.",
    {x:M,y:8.95,w:W,h:0.7,fontFace:PB,fontSize:20,color:GOLD,isTextBox:true,margin:0});
}

/* ---------------- 34 · THREE THOUGHTS ---------------- */
{ const sl=s();
  eyebrow(sl,"REAL TALK  ·  I KNOW WHAT IS IN YOUR HEAD");
  title(sl,"Let me answer it before you close the tab.",1.25,42);
  const th=[["“It is virtual. Will I really learn?”","More live coaching than any one-day class. Every session recorded. Your real work corrected by an RN, on camera."],
            ["“It is still a real investment.”","A certification, six weeks of coaching, the kit, the AI library, and a guarantee. If full pay is a stretch, that is what the deposit is for."],
            ["“I could find something cheaper.”","You could. Pre-recorded videos and nobody watching your hands. Cheap teaches you to lash. This builds you a business."]];
  let y=3.95;
  th.forEach(t=>{
    sl.addText(t[0],{x:M,y:y,w:W,h:0.6,fontFace:PI,fontSize:23,color:INK,italic:true,isTextBox:true,margin:0,valign:"middle"});
    sl.addText(t[1],{x:M,y:y+0.62,w:W*0.86,h:1.0,fontFace:PR,fontSize:18.75,color:MUTE,lineSpacing:30,isTextBox:true,margin:0});
    y+=1.92;
  });
  kicker(sl,"My best graduates had all three of those thoughts. They came anyway.");
}

/* ---------------- 35 · THE WINDOW ---------------- */
{ const sl=s();
  eyebrow(sl,"THE WINDOW");
  title(sl,"Here is exactly what happens next.",1.25,45);
  const w=[["You are in","Your seat locks tonight. An acceptance letter, not silence."],
           ["You get set up","Campus opens. Kit ships. Equipped CEOs, the studio ships too."],
           ["We begin Monday September 7","Six weeks of live coaching with an RN correcting your work."],
           ["You launch","Certified, equipped, first clients, guarantee behind you."]];
  rows(sl,w,4.00);
  rule(sl,9.10);
  sl.addText("Kit cutoff Thursday September 3  ·  Doors close Sunday September 6  ·  4 seats left",
    {x:M,y:9.40,w:W,h:0.7,fontFace:PB,fontSize:20,color:PINK,isTextBox:true,margin:0});
}

/* ---------------- 36 · WHO FOR ---------------- */
{ const sl=s();
  eyebrow(sl,"ONE MORE TIME");
  title(sl,[{text:"Who are you doing this for?\n",options:{color:INK}},
            {text:"Type the name in the chat.",options:{color:PINK,fontFace:PI,italic:true}}],3.20,52);
  sl.addText("Just the name.\n\nThat name is not asking you to feel ready. That name is waiting on you to decide.",
    {x:M,y:6.85,w:W*0.80,h:2.3,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
  sl.addNotes("Read the names out loud. Slowly. This is the last emotional beat before the close.");
}

/* ---------------- 37 · CAMPUS · 8:58 ---------------- */
{ const sl=s();
  eyebrow(sl,"NINE O’CLOCK");
  title(sl,[{text:"General Admission leaves with notes.\n",options:{color:INK}},
            {text:"The Campus stays in the room.",options:{color:GOLD,fontFace:PI,italic:true}}],2.15,44);
  sl.addShape(p.ShapeType.roundRect,{x:M,y:5.35,w:W*0.80,h:2.75,fill:{color:"0D160B"},
    line:{color:DGREEN,width:1.5},rectRadius:0.14});
  sl.addText("STAY UNTIL 9:45",{x:M+0.7,y:5.70,w:8,h:0.45,fontFace:PB,fontSize:15,color:"7FD317",
    charSpacing:4,isTextBox:true,margin:0});
  sl.addText("Pull up a set that did not last and we work out what happened to yours, on the screen, together.",
    {x:M+0.7,y:6.25,w:W*0.80-1.4,h:1.5,fontFace:PR,fontSize:21,color:INK,lineSpacing:34,isTextBox:true,margin:0});
  sl.addText("Nine dollars.  Less than the adhesive you are going to throw out this month.",
    {x:M,y:8.55,w:W,h:0.7,fontFace:PB,fontSize:21,color:PINK,isTextBox:true,margin:0});
  sl.addNotes("8:58 PM. Say it out loud: in two minutes General Admission is out. Link in the chat. Nine dollars.");
}

/* ---------------- 38 · CLOSE ---------------- */
{ const sl=s();
  sl.addText("R I C H   L A S H ®   U N I V E R S I T Y",{x:0,y:2.15,w:20,h:0.5,fontFace:PB,
    fontSize:15,color:GOLD,charSpacing:6,align:"center",isTextBox:true,margin:0});
  sl.addText([{text:"Your seat is open.\n",options:{color:INK}},
              {text:"The next move is yours.",options:{color:PINK,fontFace:PI,italic:true}}],
    {x:0,y:3.20,w:20,h:2.5,fontFace:PB,fontSize:60,lineSpacing:70,align:"center",isTextBox:true,margin:0});
  sl.addText("richlash.university/pages/enroll",{x:0,y:5.95,w:20,h:0.8,fontFace:PB,fontSize:30,
    color:GOLD,align:"center",isTextBox:true,margin:0});
  sl.addText("Certified CEO $2,997 or $750 down   ·   Equipped CEO $3,997 or $1,200 down",
    {x:0,y:6.95,w:20,h:0.6,fontFace:PR,fontSize:19.5,color:INK,align:"center",isTextBox:true,margin:0});
  sl.addText("Cohort begins Monday September 7  ·  Kit cutoff Thursday the 3rd  ·  Doors close Sunday the 6th",
    {x:0,y:7.60,w:20,h:0.6,fontFace:PR,fontSize:18.75,color:MUTE,align:"center",isTextBox:true,margin:0});
  sl.addText("Campus: stay on at nine. We look at your sets together.",
    {x:0,y:8.35,w:20,h:0.6,fontFace:PI,fontSize:19.5,color:GREEN,italic:true,align:"center",isTextBox:true,margin:0});
  sl.addText("Faith first. Work daily. Watch it come.",{x:0,y:9.55,w:20,h:0.6,fontFace:PB,
    fontSize:16.5,color:GOLD,charSpacing:3,align:"center",isTextBox:true,margin:0});
}

p.writeFile({ fileName: "The-Retention-Room.pptx" }).then(f=>console.log("wrote",f));
