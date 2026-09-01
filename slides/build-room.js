const pptxgen = require("pptxgenjs");
const p = new pptxgen();
p.defineLayout({ name:"RLU", width:20, height:11.25 });
p.layout = "RLU";
p.author = "Destyni Triplett, RN";
p.title  = "The Retention Room";
p.subject = "Why her lashes fall off in nine days";

const INK="FFFFFF", GOLD="D4AF37", PINK="F600A2", MUTE="B9B3BB",
      BG="0A0A0A", LINE="262026", GREEN="4EBB19", DGREEN="398414", CARD="121013";
const PB="Poppins Bold", PR="Poppins", PI="Poppins Italics";
const M=1.62, W=18.76-1.62;      // left margin, full content width
const TW=9.05;                    // text column on split slides
const PX=11.30, PW=7.46;          // photo panel on split slides

function s(){ const sl=p.addSlide(); sl.background={color:BG}; return sl; }

function eyebrow(sl,t,y,w){ sl.addText(t,{x:M,y:y||0.62,w:w||W,h:0.42,fontFace:PB,fontSize:15,
  color:GOLD,charSpacing:6,bold:true,isTextBox:true,margin:0,valign:"middle"}); }

function title(sl,rt,y,sz,w,h){ sl.addText(rt,{x:M,y:y||1.30,w:w||W,h:h||2.0,fontFace:PB,fontSize:sz||45,
  color:INK,lineSpacing:(sz||45)*1.18,isTextBox:true,margin:0,valign:"top"}); }

function kicker(sl,t,w){ sl.addText(t,{x:M,y:9.72,w:w||W,h:0.7,fontFace:PI,fontSize:17.25,
  color:MUTE,italic:true,isTextBox:true,margin:0,valign:"middle"}); }

function rule(sl,y,w){ sl.addShape(p.ShapeType.rect,{x:M,y:y,w:w||W,h:0.012,fill:{color:LINE}}); }

function body(sl,t,y,w,sz){ sl.addText(t,{x:M,y:y,w:w||TW,h:3.0,fontFace:PR,fontSize:sz||21,
  color:MUTE,lineSpacing:(sz||21)*1.65,isTextBox:true,margin:0,valign:"top"}); }

/* a framed photograph, cover-cropped to the box */
function pic(sl,file,x,y,w,h,edge){
  sl.addShape(p.ShapeType.rect,{x:x-0.04,y:y-0.04,w:w+0.08,h:h+0.08,fill:{color:edge||LINE}});
  sl.addImage({path:"media/"+file,x:x,y:y,w:w,h:h,sizing:{type:"cover",w:w,h:h}});
}

function cap(sl,t,x,y,w){ sl.addText(t,{x:x,y:y,w:w,h:0.4,fontFace:PB,fontSize:12.75,color:MUTE,
  charSpacing:3,isTextBox:true,margin:0,valign:"middle"}); }

/* rows of numbered blocks */
function rows(sl,items,y0,w){
  let y=y0;
  items.forEach((it,i)=>{
    sl.addText(String(i+1).padStart(2,"0"),{x:M,y:y,w:0.9,h:0.5,fontFace:PB,fontSize:15,
      color:GOLD,charSpacing:3,isTextBox:true,margin:0,valign:"middle"});
    sl.addText(it[0],{x:M+1.0,y:y,w:(w||W)-1.0,h:0.5,fontFace:PB,fontSize:19.5,color:INK,
      isTextBox:true,margin:0,valign:"middle"});
    sl.addText(it[1],{x:M+1.0,y:y+0.52,w:(w||W)-1.0,h:0.5,fontFace:PR,fontSize:17.25,color:MUTE,
      isTextBox:true,margin:0,valign:"middle"});
    y+=1.30;
  });
}

/* the spoken script */
function notes(sl,n,section,ttl,dir,say){
  sl.addNotes("SLIDE "+n+"  |  "+section+"  |  "+ttl+"\n\n["+dir+"]\n\nSAY: \""+say+"\"");
}

/* ============ 1 · TITLE ============ */
{ const sl=s();
  pic(sl,"lash-close-3.jpeg",0,0,20,3.35);
  sl.addShape(p.ShapeType.rect,{x:0,y:0,w:20,h:3.35,fill:{color:BG,transparency:38}});
  sl.addText("R I C H   L A S H ®   U N I V E R S I T Y",{x:M,y:0.62,w:W,h:0.42,fontFace:PB,
    fontSize:15,color:GOLD,charSpacing:6,isTextBox:true,margin:0,valign:"middle"});
  sl.addText("THE RETENTION ROOM",{x:M,y:3.70,w:W,h:0.5,fontFace:PB,fontSize:15,color:PINK,
    charSpacing:6,isTextBox:true,margin:0,valign:"middle"});
  sl.addText([{text:"Why her lashes",options:{color:INK}},{text:"\n"},
              {text:"fall off in nine days.",options:{color:PINK,italic:true,fontFace:PI}}],
    {x:M,y:4.40,w:W,h:2.9,fontFace:PB,fontSize:66,lineSpacing:74,isTextBox:true,margin:0});
  rule(sl,7.70);
  sl.addText("Tuesday, September 1  ·  8 to 9 PM ET  ·  One live hour",
    {x:M,y:8.00,w:W,h:0.6,fontFace:PR,fontSize:19.5,color:MUTE,isTextBox:true,margin:0});
  sl.addText("DESTYNI TRIPLETT, REGISTERED NURSE",{x:M,y:9.9,w:W,h:0.5,fontFace:PB,fontSize:15,
    color:GOLD,charSpacing:5,isTextBox:true,margin:0});
  notes(sl,1,"THE OPEN","THE RETENTION ROOM",
    "8:00 to 8:03. Camera on. Music down. Do NOT teach yet. Smile and let the room fill. Watch the attendee count climb. Greet people by name as they come in and keep greeting until you see the number stop moving. This is the warm-up, nothing else.",
    "Hey y'all. Hey. Give me one second, let everybody get in the room. Hey Tierra. Hey Andrea, I see you. [Keep reading names as they land.] Y'all come on in, get comfortable, get your notebook. If you got your adhesive near you, go grab it right now, because you are going to need it in about ten minutes. Grab it now so you are not running through the house later. [Wait. Watch the count.] Alright. If you can hear me and see me, drop a heart in the chat so I know my audio is good. [Wait for hearts.] Perfect. Let's get into it.");
}

/* ============ 2 · WELCOME ============ */
{ const sl=s();
  eyebrow(sl,"WELCOME IN");
  title(sl,[{text:"One hour. ",options:{color:INK}},
            {text:"Three acts.",options:{color:PINK,fontFace:PI,italic:true}}],1.30,45,TW);
  rows(sl,[
    ["The Chemistry","Why it does not last, and what your room has to do with it"],
    ["The Consultation","It is decided before you pick up a tweezer"],
    ["The Rebooking","A set that lasts is a client who comes back"]
  ],4.35,TW);
  pic(sl,"lash-macro.jpeg",PX,2.40,PW,6.05);
  cap(sl,"MY WORK  ·  RICH LASH®",PX,8.62,PW);
  kicker(sl,"Type your city in the chat so I know who is in the room.",TW);
  notes(sl,2,"THE OPEN","ONE HOUR. THREE ACTS.",
    "8:03. Set the frame fast, then get them typing inside the first ninety seconds. A room that types early stays. Read at least five cities out loud by name.",
    "Here is what the next hour looks like. Three acts. Act one is the chemistry, which is why your sets are not lasting. Act two is the consultation, and I am going to prove to you that retention is decided before you ever pick up a tweezer. Act three is the rebooking, because a set that lasts is a client who comes back, and that is where the money actually is. [Beat.] Now before I go one sentence further, I want to know who is in this room with me. Type your city in the chat. Just your city. [STOP. Wait. Read five or six out loud by name.] Atlanta. Houston. Detroit. Y'all everywhere tonight. Okay, I love it.");
}

/* ============ 3 · WHO I AM ============ */
{ const sl=s();
  eyebrow(sl,"BEFORE I TEACH YOU ANYTHING",0.62,TW);
  title(sl,[{text:"You should know\nwho you are\n",options:{color:INK}},
            {text:"learning from.",options:{color:GOLD,fontFace:PI,italic:true}}],1.85,52,TW,3.9);
  body(sl,"I am a Registered Nurse. I have been lashing since 2017 and teaching since 2019.\n\nOver a thousand clients. More than 250 women trained. Nine years in one chair.",5.95,TW-0.4);
  pic(sl,"lashing-pink.jpeg",PX+1.30,0.95,PW-1.30,9.35);
  cap(sl,"DESTYNI TRIPLETT, RN",PX+1.30,10.40,PW-1.30);
  notes(sl,3,"MY STORY","WHO YOU ARE LEARNING FROM",
    "Slow all the way down. This is the trust slide. Do not perform it, tell it. Look straight into the camera. This whole story block is four slides and it should take you five minutes, no more. Quick, but real.",
    "Before I teach you one thing tonight, you should know who is teaching you. My name is Destyni Triplett. I am a Registered Nurse. I have been lashing since 2017, so that is nine years, and I have been teaching women how to do this since 2019. Over a thousand clients in my chair. More than 250 women trained. [Beat.] I am telling you that not to impress you. I am telling you so that when I say something tonight that goes against what somebody else taught you, you know where it is coming from. It is not coming from a caption I read. It is coming from nine years and a nursing license.");
}

/* ============ 4 · THE NURSE PART ============ */
{ const sl=s();
  eyebrow(sl,"AND THIS IS THE PART THAT MATTERS");
  title(sl,[{text:"I did not learn chemistry\nfrom a lash class.\n",options:{color:INK}},
            {text:"I learned it in nursing school.",options:{color:PINK,fontFace:PI,italic:true}}],1.75,36,TW,3.6);
  body(sl,"Most lash educators teach you a routine and hope it works in your room. I can teach you the reaction, because I was trained to understand reactions before I ever picked up a tweezer.\n\nThat is the entire difference in tonight's hour.",5.75,TW-0.4,20);
  pic(sl,"rn-coat.jpeg",PX,1.30,PW,7.00);
  cap(sl,"RN SINCE 2020  ·  ATLANTA",PX,8.45,PW);
  notes(sl,4,"MY STORY","THE NURSE PART",
    "Say this one plainly, no hype in your voice. This is the credential slide and the credential does the work by itself. Do not oversell it.",
    "Now here is the part that actually matters to you tonight. I did not learn chemistry from a lash class. I learned it in nursing school. [Beat.] Most educators will teach you a routine. Do this, then this, then this, and they hope it works in your room. But nobody explains the reaction to you. Nobody tells you what is actually happening between that adhesive and that lash, so the second something goes wrong you have no idea where to look. You just start blaming your hands. [Beat.] I can teach you the reaction. That is the whole difference in this hour.");
}

/* ============ 5 · WHERE IT STARTED ============ */
{ const sl=s();
  eyebrow(sl,"AND I DID NOT START HERE");
  title(sl,"I started in a spare room with a folding table.",1.25,42);
  const shots=[["room-start.jpeg","THE FIRST ROOM"],["room-21.jpeg","AT TWENTY-ONE"],
               ["room-mid.jpeg","THE NEXT ONE"],["luxe-room.jpeg","THE LUXE LASH ROOM"]];
  shots.forEach((sh,i)=>{
    const x=M+i*(W/4);
    pic(sl,sh[0],x,3.35,W/4-0.40,5.10);
    cap(sl,sh[1],x,8.62,W/4-0.40);
  });
  kicker(sl,"Nine years. Same hands. The rooms only changed because the work got better.");
  notes(sl,5,"MY STORY","WHERE IT STARTED",
    "Point at the screen as you go left to right. Keep it moving, about sixty seconds total. The point of this slide is not the rooms, it is that she can start where she is.",
    "And I want you to see something, because I know some of y'all are watching me right now thinking she must have had something I do not have. [Point at the first photo.] That is where I started. A spare room, a folding table, a rug I bought to make it look like something. That was it. [Next.] That one was at twenty-one. [Next.] That one came after. [Last one.] And that is the Luxe Lash Room. [Beat.] Nine years between the first picture and the last one. Same hands. The room only changed because the work got better. So if you are sitting in a spare bedroom tonight feeling embarrassed about it, do not. I have been you. That is not the thing that is stopping you.");
}

/* ============ 6 · MY OWN WORK ============ */
{ const sl=s();
  eyebrow(sl,"THIS IS MY WORK");
  title(sl,[{text:"Every set I am about to teach you about\n",options:{color:INK}},
            {text:"is a set I have done myself.",options:{color:GOLD,fontFace:PI,italic:true}}],1.25,38,W,2.4);
  const shots=[["work-1.jpeg","THREE WEEK RETENTION"],["work-2.jpeg","NATURAL SET, FULL FILL"],
               ["work-ba.jpeg","BEFORE AND AFTER"]];
  shots.forEach((sh,i)=>{
    const x=M+i*(W/3);
    pic(sl,sh[0],x,3.85,W/3-0.44,4.85);
    cap(sl,sh[1],x,8.86,W/3-0.44);
  });
  kicker(sl,"My own sets last three weeks. Some of my clients tell me a month.");
  notes(sl,6,"MY STORY","MY OWN WORK",
    "Short. Twenty seconds. Do not linger on your own work, this is proof, not a portfolio review. Then move straight into the pain.",
    "And everything I am about to teach you tonight is something I do on a real face, in a real chair, on a real client who is paying me. My sets last three weeks. Some of my clients tell me a month. [Beat.] That is not a flex. That is the standard I want for you, and it is completely reachable, because retention is not talent. I am about to prove that to you.");
}

/* ============ 7 · WHAT THEY SAY ============ */
{ const sl=s();
  eyebrow(sl,"AND THIS IS WHAT IT SOUNDS LIKE WHEN IT LASTS");
  title(sl,"Not my words. Theirs.",1.25,42,TW);
  pic(sl,"review-1.jpeg",M,3.55,8.60,4.30);
  pic(sl,"review-2.jpeg",M+9.00,3.55,8.14,4.30);
  sl.addText("Real client reviews. Individual results vary.",
    {x:M,y:8.15,w:W,h:0.5,fontFace:PR,fontSize:15,color:MUTE,isTextBox:true,margin:0});
  rule(sl,9.05);
  sl.addText("A client who comes back every two weeks for a year is what good retention actually looks like on your calendar.",
    {x:M,y:9.35,w:W,h:0.8,fontFace:PI,fontSize:20,color:GOLD,italic:true,isTextBox:true,margin:0});
  notes(sl,7,"MY STORY","WHAT THEY SAY",
    "Read one line of one review out loud, the part about coming back every two weeks. Do not read both. Then turn hard into the pain slide. The tone change from here should be noticeable.",
    "Read what this one says. I am a regular customer who comes every two weeks. Every time I come my lash extensions are always done with exceptional customer service. [Beat.] Every two weeks. For a year. That is what retention looks like when it is working, and I want you to notice it is not a compliment about how pretty the set was. It is a woman who kept coming back. [Beat. Change your tone here.] Okay. So let me tell you why I really pulled y'all in here tonight.");
}

/* ============ 8 · DAY NINE ============ */
{ const sl=s();
  eyebrow(sl,"LET ME TELL YOU WHAT HAPPENS");
  title(sl,[{text:"Here is what happens\n",options:{color:INK}},
            {text:"on day nine.",options:{color:PINK,fontFace:PI,italic:true}}],2.60,56,TW+1.2);
  sl.addText("She sends the photo. Half the set, and a message that starts with “hey, so...”\n\nYou already know what it says before you open it.",
    {x:M,y:6.20,w:TW+1.2,h:2.4,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:34,isTextBox:true,margin:0});
  pic(sl,"lash-close-2.jpeg",PX+0.60,2.10,PW-0.60,6.60);
  notes(sl,8,"ACT ONE · THE PAIN","DAY NINE",
    "This is the emotional hook of the whole night. Slow way down. Long pauses. Do not rush to the fix. After you say it, ASK them and then STOP and wait for the chat to fill.",
    "It is day nine. You are doing something else, you are with a client, you are at your regular job, you are cooking. And your phone goes off. [Beat.] And it is her. And it is a picture. And you already know what the picture is before you even open it. [Beat.] Half the set is gone. And the message underneath it starts with hey, so. [Long pause.] And your whole stomach drops. Because you were proud of that set. You posted that set. [Beat.] Tell me right now in the chat if that has happened to you. Just type yes. [STOP. Wait. Let the yeses stack up. Read six or seven names out loud.] Yeah. Okay. So it is not just you.");
}

/* ============ 9 · WHAT IT COSTS ============ */
{ const sl=s();
  eyebrow(sl,"AND THEN WHAT HAPPENS");
  title(sl,[{text:"You quietly\n",options:{color:INK}},
            {text:"stop posting your work.",options:{color:PINK,fontFace:PI,italic:true}}],1.35,50,TW+1.4);
  sl.addText("You apologise. You offer to fix it for nothing. You spend two hours and your product on a set you already got paid for once, and you tell her it is no trouble.\n\nNot because you decided to stop posting. Because you are not sure it will last, and you cannot bear that conversation again.\n\nSo you do not raise your price. You do not ask for the referral.",
    {x:M,y:4.55,w:TW+1.4,h:4.4,fontFace:PR,fontSize:19.5,color:MUTE,lineSpacing:33,isTextBox:true,margin:0});
  pic(sl,"work-2.jpeg",PX+1.10,1.30,PW-1.10,7.60);
  kicker(sl,"You get smaller, one apology at a time.",TW+1.4);
  notes(sl,9,"ACT ONE · THE COST","WHAT IT ACTUALLY COSTS YOU",
    "Quiet voice. Almost gentle. This is the slide where women feel seen, so do not sell here, just describe. End on the kicker line and let it sit for a full three seconds before you click.",
    "And here is the part nobody talks about. You apologise. You tell her come back, I will fix it, no charge. And you spend two more hours and your own product on a set you already got paid for one time. And you tell her it is no trouble. [Beat.] And then you stop posting your work. Not on purpose. You do not sit down and decide to stop posting. You just stop, because you are not sure it is going to last and you cannot go through that conversation one more time. [Beat.] So you do not raise your price. You do not ask her for the referral. You take the client who books cheap because at least she will not complain. [Long pause.] You get smaller, one apology at a time. And I hate that for you, because I do not think you are bad at lashing. I think nobody ever explained the chemistry to you.");
}

/* ============ 10 · THE REFRAME ============ */
{ const sl=s();
  eyebrow(sl,"SO LET ME SAY THIS PLAIN");
  sl.addText([{text:"Bad retention is not\na talent problem.\n",options:{color:INK}},
              {text:"It is a chemistry problem.",options:{color:PINK,fontFace:PI,italic:true}}],
    {x:M,y:2.35,w:W,h:3.3,fontFace:PB,fontSize:52,color:INK,lineSpacing:64,isTextBox:true,margin:0,valign:"top"});
  rule(sl,8.15);
  sl.addText("And you cannot troubleshoot chemistry from memory.",
    {x:M,y:8.50,w:W,h:0.8,fontFace:PI,fontSize:21,color:GOLD,italic:true,isTextBox:true,margin:0});
  notes(sl,10,"ACT ONE · THE THESIS","BAD RETENTION IS NOT A TALENT PROBLEM",
    "This is the thesis of the entire night. Say it twice, word for word, and let the second one land in silence. If they only remember one sentence from tonight, it needs to be this one.",
    "So let me say this as plain as I know how to say it. Bad retention is not a talent problem. It is a chemistry problem. [Long pause.] Say it with me. Bad retention is not a talent problem. It is a chemistry problem. [Beat.] And you cannot troubleshoot chemistry from memory. You cannot guess your way through a chemical reaction. Which is exactly what most of y'all have been doing, because that is what you were taught.");
}

/* ============ 11 · ACT ONE ============ */
{ const sl=s();
  pic(sl,"lash-close-1.jpeg",0,0,20,3.05);
  sl.addShape(p.ShapeType.rect,{x:0,y:0,w:20,h:3.05,fill:{color:BG,transparency:45}});
  sl.addText("ACT ONE",{x:M,y:4.30,w:W,h:0.6,fontFace:PB,fontSize:15,color:PINK,charSpacing:8,
    isTextBox:true,margin:0});
  sl.addText([{text:"The ",options:{color:INK}},{text:"Chemistry",options:{color:GOLD,fontFace:PI,italic:true}}],
    {x:M,y:5.05,w:W,h:1.9,fontFace:PB,fontSize:76,isTextBox:true,margin:0});
  sl.addText("Why it does not last.",{x:M,y:7.15,w:W,h:0.8,fontFace:PR,fontSize:21,color:MUTE,
    isTextBox:true,margin:0});
  notes(sl,11,"ACT ONE","THE CHEMISTRY",
    "Transition card. Two seconds. Say the act name and click straight through. Do not linger on section cards, they kill momentum.",
    "Act one. The chemistry.");
}

/* ============ 12 · CURING ============ */
{ const sl=s();
  eyebrow(sl,"ACT ONE  ·  THE THING NOBODY TOLD YOU");
  title(sl,[{text:"Your adhesive is not drying.\n",options:{color:INK}},
            {text:"It is curing.",options:{color:PINK,fontFace:PI,italic:true}}],2.15,44,TW+1.4);
  sl.addText("Cyanoacrylate does not dry like paint. It is a chemical reaction that sets using moisture in the air.\n\nWhich means your room is part of your kit.",
    {x:M,y:6.15,w:TW+1.4,h:2.6,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
  pic(sl,"the-kit.jpeg",PX+0.90,1.60,PW-0.90,7.10);
  notes(sl,12,"ACT ONE · THE MECHANISM","IT IS NOT DRYING. IT IS CURING.",
    "Teaching voice now, not story voice. Sit up. This is the single most useful fact of the night and most of the room has never heard it said correctly. Say the word cyanoacrylate slowly and let them write it down.",
    "Okay. Here is the thing nobody told you. Your adhesive is not drying. It is curing. [Beat.] Those are two completely different things. Drying is when water evaporates out of something, like paint. Curing is a chemical reaction. Your adhesive is cyanoacrylate, and cyanoacrylate cures by pulling moisture out of the air. Out of the air. [Beat.] So read that back to me. If the reaction needs moisture from the air, and the air in your room changes every single day, then what happens to your bond? [Beat. Let them get there.] Right. It changes too. Which means your room is part of your kit. Your room is a tool, same as your tweezers, and most of y'all have never once measured it.");
}

/* ============ 13 · PICK UP YOUR BOTTLE ============ */
{ const sl=s();
  eyebrow(sl,"DO THIS WITH ME RIGHT NOW");
  title(sl,[{text:"Pick up your adhesive.\n",options:{color:INK}},
            {text:"Type the name in the chat.",options:{color:GOLD,fontFace:PI,italic:true}}],3.10,54);
  sl.addText("Brand and name. It is on the bottle.\n\nNo adhesive yet? Type NONE. You are in the right room either way.",
    {x:M,y:6.75,w:W*0.80,h:2.2,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
  notes(sl,13,"ACT ONE · PARTICIPATION","PICK UP YOUR BOTTLE",
    "STOP TEACHING. This is the participation beat and it is the most important sixty seconds of engagement in the whole hour. Wait for the chat. Read at least five brands out loud by name. When somebody types NONE, say her name warmly and say the line about being in the right room. Do not skip this slide to save time.",
    "Alright, I want you to do something with me right now. Reach over and pick up your adhesive. Physically pick it up. [Beat.] Now type the brand and the name in the chat. It is written on the bottle. [STOP. Wait. Do not fill the silence. Let the chat move.] Okay, I see Lash Bomb. I see Sky S plus. Nicole, I see you. Somebody said Glue Magnet. [Keep reading names.] And listen, if you do not have adhesive yet, if you have not bought anything yet, type NONE and do not feel one way about it. [Warmly, by name.] I see you. You are in the right room. You are actually in the best position, because you are about to buy your first bottle already knowing what most people never learn.");
}

/* ============ 14 · THREE STATES ============ */
{ const sl=s();
  eyebrow(sl,"ACT ONE  ·  THE CURE CHECK");
  title(sl,"Three states. Your room picks one.",1.30,45);
  const cards=[
    ["TOO DRY",PINK,"Under-cures. Stays tacky.\nSheds within a few days."],
    ["IN RANGE",GREEN,"A strong, flexible bond.\nThis is the whole goal."],
    ["TOO HUMID",PINK,"Shock-cures. Blooms.\nGoes brittle and falls out early."]
  ];
  cards.forEach((c,i)=>{
    const x=M+i*(W/3);
    sl.addShape(p.ShapeType.roundRect,{x:x,y:4.15,w:W/3-0.42,h:3.55,fill:{color:CARD},
      line:{color:LINE,width:1},rectRadius:0.12});
    sl.addText(c[0],{x:x+0.5,y:4.62,w:W/3-1.4,h:0.5,fontFace:PB,fontSize:15,color:c[1],
      charSpacing:5,isTextBox:true,margin:0});
    sl.addText(c[2],{x:x+0.5,y:5.42,w:W/3-1.4,h:1.9,fontFace:PR,fontSize:18.75,color:INK,
      lineSpacing:30,isTextBox:true,margin:0});
  });
  kicker(sl,"Two artists. Same glue. Different rooms. Completely different retention.");
  notes(sl,14,"ACT ONE · THE CURE CHECK","THREE STATES",
    "This is takeaway number one, so slow down and make them write. Say WRITE THIS DOWN out loud. Walk the three cards left to right and give a real symptom for each so she can self-diagnose while you are still talking.",
    "Write this down, because this is the first thing you are leaving with tonight. I call it the Cure Check. Your room is always in one of three states. [Point.] Too dry. The reaction does not have enough moisture to finish, so it under-cures. It stays a little tacky, it feels fine when she walks out, and it sheds within a few days. That is the one that gets blamed on your hands the most. [Point.] In range. Strong bond, still flexible. That is the whole goal. [Point.] Too humid. Now it is the opposite problem. It shock-cures, it goes off too fast, you get blooming, that white cast, and the bond turns brittle and falls out early. [Beat.] Same glue. Same artist. Two different rooms. Completely different retention. So if you took a class with somebody in Arizona and you are lashing in Georgia in August, that is not the same class.");
}

/* ============ 15 · MYTH ONE ============ */
{ const sl=s();
  eyebrow(sl,"AND THIS IS WHERE I LOSE FRIENDS");
  title(sl,[{text:"There is no universal\n",options:{color:INK}},
            {text:"humidity rule.",options:{color:PINK,fontFace:PI,italic:true}}],2.35,56);
  sl.addText("40 to 70 percent. 70 to 72 degrees. Whoever taught you that taught you somebody else's adhesive.\n\nThose numbers are product-dependent. Get a hygrometer, learn your adhesive's range, and read your own air.",
    {x:M,y:6.30,w:W*0.82,h:2.8,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
  notes(sl,15,"ACT ONE · MYTH ONE","THERE IS NO UNIVERSAL HUMIDITY RULE",
    "Expect the chat to blow up here. Pause and LET them react before you move. Ask who was taught the 40 to 70 rule and wait. This is the slide that makes people trust you, because you just contradicted their last educator and told them why.",
    "Now this is where I lose friends. [Beat.] There is no universal humidity rule. Forty to seventy percent. Seventy to seventy-two degrees. Whoever handed you those numbers handed you somebody else's adhesive. [Beat.] Type in the chat if you were taught forty to seventy. [STOP. Wait for it. Read the names.] Yeah. Everybody. Because it gets repeated in every class, and nobody ever says where it came from. [Beat.] Those numbers are product-dependent. Your manufacturer publishes a range for your specific bottle, and that is the only range that matters to you. So here is what you do. Get a hygrometer. They are about twelve dollars. Find your adhesive's actual range. And then read your own air, in your own room, on the day you are working. That is it. That is the whole fix, and it costs twelve dollars.");
}

/* ============ 16 · THE OIL ============ */
{ const sl=s();
  eyebrow(sl,"ACT ONE  ·  THE PART THAT IS NOT YOUR FAULT");
  title(sl,[{text:"She swore she wasn't using oil.\n",options:{color:INK}},
            {text:"She was telling the truth.",options:{color:PINK,fontFace:PI,italic:true}}],2.05,41,TW+1.4);
  sl.addText("The glands along her lid margin keep her lash line moist. That same oil is dissolving your bond, a little every day, whether she touches a product or not.\n\nAn oily client sheds faster no matter how clean your application was.",
    {x:M,y:6.05,w:TW+1.4,h:2.9,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
  pic(sl,"lash-close-2.jpeg",PX+0.90,1.85,PW-0.90,6.85);
  kicker(sl,"That is not you falling short. That is her chemistry, and now you can explain it.",TW+1.4);
  notes(sl,16,"ACT ONE · THE OIL","SHE WAS TELLING THE TRUTH",
    "This is the relief slide. Watch the chat go quiet and then go crazy. Deliver the meibomian gland fact simply, no medical showing off, then land hard on the last line because that is the one that takes the guilt off her.",
    "Okay. Now I want to take something off of you. [Beat.] You have had the client who swore up and down she was not using oil. And you thought she was lying. [Beat.] She was telling you the truth. There are glands that run right along the edge of her eyelid, right at the lash line, and their whole job is to release oil to keep her eye from drying out. That is her body working correctly. And that same oil is sitting on your bond, dissolving it a little bit every single day, whether she ever touches a product or not. [Beat.] So an oily client is going to shed faster than a dry client. Every time. No matter how clean your application was. [Long pause.] That is not you falling short. That is her chemistry. And starting tonight, you can explain it to her instead of apologising for it.");
}

/* ============ 17 · TROUBLESHOOT ORDER ============ */
{ const sl=s();
  eyebrow(sl,"WHEN RETENTION DROPS, CHECK IN THIS ORDER");
  title(sl,"Do not start with your hands.",1.30,45,TW+1.0);
  const items=["Your environment","Adhesive age and drop age","Her aftercare","Your isolation","Your attachment"];
  let y=4.15;
  items.forEach((t,i)=>{
    sl.addText(String(i+1).padStart(2,"0"),{x:M,y:y,w:0.9,h:0.62,fontFace:PB,fontSize:15,
      color:i<3?GOLD:MUTE,charSpacing:3,isTextBox:true,margin:0,valign:"middle"});
    sl.addText(t,{x:M+1.0,y:y,w:TW,h:0.62,fontFace:i<3?PB:PR,fontSize:22,
      color:i<3?INK:MUTE,isTextBox:true,margin:0,valign:"middle"});
    y+=1.02;
  });
  pic(sl,"lash-macro.jpeg",PX+0.50,2.55,PW-0.50,5.70);
  kicker(sl,"Most of you start at number five. That is why you have been blaming yourself.",TW+1.2);
  notes(sl,17,"ACT ONE · THE ORDER","DO NOT START WITH YOUR HANDS",
    "Count them off on your fingers on camera. Then stop on the kicker and ask them to type which number they normally start at. Most will say five. Read a few out loud and say the line back to them.",
    "So when your retention drops, here is the order you check things in. One, your environment. Two, how old your adhesive is and how old that drop on your tile is. Three, her aftercare. Four, your isolation. Five, your attachment. [Beat.] Now look at that list again. Your hands are number four and number five. They are last. [Beat.] Type in the chat, which number do you normally start at when a set does not last? [STOP. Wait.] Five. Five. Five. Everybody is saying five. [Beat.] Exactly. Every one of you starts at the bottom of the list, which is why you have spent years thinking you were bad at this. You have been troubleshooting backwards.");
}

/* ============ 18 · TAKEAWAY ONE ============ */
{ const sl=s();
  sl.addText("YOU LEAVE WITH",{x:0,y:4.05,w:20,h:0.5,fontFace:PB,fontSize:15,color:MUTE,
    charSpacing:6,align:"center",isTextBox:true,margin:0});
  sl.addText([{text:"The Cure ",options:{color:INK}},{text:"Check",options:{color:GOLD,fontFace:PI,italic:true}}],
    {x:0,y:4.85,w:20,h:1.7,fontFace:PB,fontSize:72,align:"center",isTextBox:true,margin:0});
  sl.addText("The three conditions in your room that decide how long her set lasts.",
    {x:3.6,y:6.85,w:12.8,h:0.9,fontFace:PR,fontSize:21,color:MUTE,align:"center",isTextBox:true,margin:0});
  notes(sl,18,"ACT ONE · TAKEAWAY","THE CURE CHECK",
    "Fast. Fifteen seconds. Name the takeaway, tell them to circle it in their notes, click on. Momentum.",
    "That is takeaway number one, and I want you to circle it. The Cure Check. The three conditions in your room that decide how long her set lasts. You already know how to lash. Now you know what your room is doing to it.");
}

/* ============ 19 · ACT TWO ============ */
{ const sl=s();
  pic(sl,"lash-close-3.jpeg",0,0,20,3.05);
  sl.addShape(p.ShapeType.rect,{x:0,y:0,w:20,h:3.05,fill:{color:BG,transparency:45}});
  sl.addText("ACT TWO",{x:M,y:4.30,w:W,h:0.6,fontFace:PB,fontSize:15,color:PINK,charSpacing:8,
    isTextBox:true,margin:0});
  sl.addText([{text:"The ",options:{color:INK}},{text:"Consultation",options:{color:GOLD,fontFace:PI,italic:true}}],
    {x:M,y:5.05,w:W,h:1.9,fontFace:PB,fontSize:76,isTextBox:true,margin:0});
  sl.addText("It is decided before you pick up a tweezer.",{x:M,y:7.15,w:W,h:0.8,fontFace:PR,
    fontSize:21,color:MUTE,isTextBox:true,margin:0});
  notes(sl,19,"ACT TWO","THE CONSULTATION",
    "Transition card. Two seconds. Check the clock here. You should be at roughly 8:28. If you are past 8:33, tighten act two.",
    "Act two. The consultation. And this is the one I think is going to surprise y'all the most.");
}

/* ============ 20 · THE FOUR QUESTIONS ============ */
{ const sl=s();
  eyebrow(sl,"ACT TWO  ·  THE FOUR QUESTIONS");
  title(sl,"Ask these at intake. Every time.",1.30,45);
  const qs=[["What are you putting on your face at night?","Skincare is the number one silent bond-killer"],
            ["How does the water hit your face in the shower?","Direct hot water, every day, is a different set"],
            ["Are you wearing mascara on these?","This answer changes what you can safely build"],
            ["When was your last full set?","Tells you where she is in her own lash cycle"]];
  rows(sl,qs,4.20);
  kicker(sl,"Her answer tells you what her set is going to do, before you touch her.");
  notes(sl,20,"ACT TWO · TAKEAWAY","THE FOUR QUESTIONS",
    "This is takeaway number two. Say each question the way you would actually say it in the chair, in your normal client voice, then flip and tell them what the answer means. Tell them to write all four down word for word.",
    "Four questions. Write these down word for word, because you are going to use them on your next client. [One.] What are you putting on your face at night? Because retinol, night oils, heavy moisturiser, all of it migrates up to that lash line while she is sleeping. Skincare is the number one silent bond-killer and nobody asks about it. [Two.] How does the water hit your face in the shower? Because a woman who stands under hot water face-first every morning has a completely different set than a woman who washes her face at the sink. [Three.] Are you wearing mascara on these? Because her answer changes what you can safely build for her and what you tell her about removal. [Four.] When was your last full set? Because that tells you where she is in her own lash cycle, and if she is about to go through a natural shed, you need to say that out loud today instead of getting the text on day nine. [Beat.] Four questions. Two minutes. Her answers tell you what her set is going to do before you ever touch her face.");
}

/* ============ 21 · SAY IT OUT LOUD ============ */
{ const sl=s();
  eyebrow(sl,"AND THIS IS THE PART THAT SAVES YOU");
  title(sl,[{text:"Say it out loud at intake\n",options:{color:INK}},
            {text:"instead of her finding out on day nine.",options:{color:PINK,fontFace:PI,italic:true}}],2.85,33,TW+1.4,2.6);
  sl.addText("“Based on what you just told me, your set is going to want a fill around week two instead of week three. That is your oil, not my work. Here is what we do about it.”",
    {x:M,y:6.35,w:TW+1.4,h:2.4,fontFace:PI,fontSize:23,color:INK,italic:true,lineSpacing:38,isTextBox:true,margin:0});
  pic(sl,"work-1.jpeg",PX+1.10,1.70,PW-1.10,7.00);
  kicker(sl,"You just turned a future complaint into proof that you knew what you were doing.",TW+1.4);
  notes(sl,21,"ACT TWO · THE SCRIPT","SAY IT OUT LOUD",
    "Perform the quote. Actually say it the way you would say it to a real client sitting in your chair, with your client voice, not your teaching voice. Then drop back to your teaching voice for the last line so they feel the difference.",
    "Now here is the part that saves you. You do not just collect those answers and keep them to yourself. You say it out loud. [Switch to your client voice.] Okay, so based on what you just told me, your set is probably going to want a fill around week two instead of week three. That is your oil, that is not my work, and here is exactly what we are going to do about it. [Beat. Back to teaching voice.] You hear what just happened there? [Beat.] On day nine, when she loses a few, she does not think you did a bad set. She thinks, oh, she told me that. She called it. [Beat.] You just took a complaint that was coming and turned it into proof that you knew what you were doing. That is the whole game, and it costs you thirty seconds at intake.");
}

/* ============ 22 · TAKEAWAY TWO ============ */
{ const sl=s();
  sl.addText("YOU LEAVE WITH",{x:0,y:4.05,w:20,h:0.5,fontFace:PB,fontSize:15,color:MUTE,
    charSpacing:6,align:"center",isTextBox:true,margin:0});
  sl.addText([{text:"The Four ",options:{color:INK}},{text:"Questions",options:{color:GOLD,fontFace:PI,italic:true}}],
    {x:0,y:4.85,w:20,h:1.7,fontFace:PB,fontSize:72,align:"center",isTextBox:true,margin:0});
  sl.addText("Ask them at your next appointment. Watch what changes.",
    {x:3.6,y:6.85,w:12.8,h:0.9,fontFace:PR,fontSize:21,color:MUTE,align:"center",isTextBox:true,margin:0});
  notes(sl,22,"ACT TWO · TAKEAWAY","THE FOUR QUESTIONS",
    "Fifteen seconds. Then ask for a commitment: who is asking these at their next appointment. Wait for the chat, read three names, move.",
    "Takeaway number two. The Four Questions. [Beat.] Who is going to use these on their very next client? Type I AM. [STOP. Wait. Read three names out loud.] Okay. Ashleigh. Miesha. Courtney. I am holding y'all to that.");
}

/* ============ 23 · ACT THREE ============ */
{ const sl=s();
  pic(sl,"lash-close-1.jpeg",0,0,20,3.05);
  sl.addShape(p.ShapeType.rect,{x:0,y:0,w:20,h:3.05,fill:{color:BG,transparency:45}});
  sl.addText("ACT THREE",{x:M,y:4.30,w:W,h:0.6,fontFace:PB,fontSize:15,color:PINK,charSpacing:8,
    isTextBox:true,margin:0});
  sl.addText([{text:"The ",options:{color:INK}},{text:"Rebooking",options:{color:GOLD,fontFace:PI,italic:true}}],
    {x:M,y:5.05,w:W,h:1.9,fontFace:PB,fontSize:76,isTextBox:true,margin:0});
  sl.addText("A set that lasts is a client who comes back.",{x:M,y:7.15,w:W,h:0.8,fontFace:PR,
    fontSize:21,color:MUTE,isTextBox:true,margin:0});
  notes(sl,23,"ACT THREE","THE REBOOKING",
    "Transition card. Two seconds. Clock check: you want to be around 8:38 here. Act three is the shortest act.",
    "Act three. The rebooking.");
}

/* ============ 24 · MONEY ============ */
{ const sl=s();
  eyebrow(sl,"ACT THREE  ·  WHY THIS IS THE MONEY PART");
  title(sl,[{text:"Retention stops being about lashes\n",options:{color:INK}},
            {text:"and starts being about your money.",options:{color:PINK,fontFace:PI,italic:true}}],2.15,38,TW+1.6);
  sl.addText("When her set lasts, she trusts you. She comes back. She rebooks before she ever leaves the chair.\n\nYou stop chasing. You stop discounting. You stop redoing sets for nothing.",
    {x:M,y:6.05,w:TW+1.6,h:2.8,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
  pic(sl,"lashing-pink.jpeg",PX+1.55,1.55,PW-1.55,7.15);
  notes(sl,24,"ACT THREE · THE STAKES","THIS IS THE MONEY PART",
    "Do not put numbers on this. No income talk, no what you could make. Keep it about the behaviour: she comes back, you stop chasing. Say it with certainty and move.",
    "And here is where retention stops being about lashes and starts being about your money. [Beat.] When her set lasts, she trusts you. When she trusts you, she comes back. And when she comes back on schedule, she rebooks before she gets out of the chair, because she does not want to lose her spot with you. [Beat.] You stop chasing people. You stop discounting to fill your week. You stop redoing sets for nothing on your own product. [Beat.] Every single one of those things is a retention problem wearing a marketing costume.");
}

/* ============ 25 · AFTERCARE ============ */
{ const sl=s();
  eyebrow(sl,"ACT THREE  ·  AFTERCARE SHE WILL ACTUALLY FOLLOW");
  title(sl,"Four things, in this order.",1.30,45);
  rows(sl,[
    ["Keep the lash line clean","Brush it. Foam cleanse it. Buildup wrecks retention and eye health"],
    ["No oil-based products near the eyes","Oil is the enemy of a cured bond"],
    ["Do not rub, tug or pull. No mascara","Pulling extensions damages her natural lash"],
    ["Water timing per your adhesive","Not a blanket rule you heard somewhere"]
  ],4.20);
  notes(sl,25,"ACT THREE · AFTERCARE","FOUR THINGS, IN THIS ORDER",
    "Keep this one moving, about ninety seconds. The order matters and that is the teaching point. Number one surprises people because most artists lead with no water.",
    "Aftercare. Four things, and the order matters. [One.] Keep the lash line clean. Brush them, foam cleanse them. And I know somebody was taught not to get them wet at all, we are about to talk about that. Buildup at the lash line wrecks retention and it is an eye health issue, so this one is number one for a reason. [Two.] No oil-based products anywhere near the eyes. Oil is the enemy of a cured bond, we already covered why. [Three.] Do not rub, do not tug, do not pull. No mascara on extensions, because when she pulls that off she is pulling her natural lash out with it, and then she comes back to you with gaps and thinks you did it. [Four.] Water timing based on your specific adhesive. Not a blanket rule you heard somewhere.");
}

/* ============ 26 · MYTH TWO ============ */
{ const sl=s();
  eyebrow(sl,"ONE MORE THING YOU WERE TAUGHT WRONG");
  title(sl,[{text:"“No water for 24 hours”\n",options:{color:INK}},
            {text:"is not a rule. It is a rumor.",options:{color:PINK,fontFace:PI,italic:true}}],2.75,50);
  sl.addText("It is product-dependent. Give her the timing your manufacturer specifies.\n\nAnything else is you repeating what somebody told you.",
    {x:M,y:6.55,w:W*0.82,h:2.4,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
  notes(sl,26,"ACT THREE · MYTH TWO","NO WATER FOR 24 HOURS IS A RUMOR",
    "Second myth-buster of the night. Expect pushback in the chat and welcome it. Say the manufacturer line twice. This is another slide where you visibly outrank whoever taught them.",
    "Second thing you were taught wrong. No water for twenty-four hours. [Beat.] That is not a rule. That is a rumor. It got repeated so many times that everybody thinks it came from somewhere. [Beat.] It is product-dependent. Some adhesives are fully cured in a couple of hours. Some want longer. Your manufacturer publishes it. So you give her the timing your manufacturer specifies, and anything else is you repeating something somebody told you in a class one time. [Beat.] And I say that with love, because I did it too for years.");
}

/* ============ 27 · TELL HER WHY ============ */
{ const sl=s();
  eyebrow(sl,"THE PART MOST ARTISTS SKIP");
  title(sl,[{text:"Tell her ",options:{color:INK}},{text:"why.",options:{color:PINK,fontFace:PI,italic:true}}],2.35,66,TW+1.4);
  sl.addText("“I am cleansing first so the adhesive bonds to a clean lash. That is half your retention right there.”",
    {x:M,y:5.05,w:TW+1.4,h:1.8,fontFace:PI,fontSize:25,color:INK,italic:true,lineSpacing:42,isTextBox:true,margin:0});
  sl.addText("A client who understands the why protects it at home, comes back on schedule, and tells her friends what made you different.\n\nA client who got handed a list does not.",
    {x:M,y:7.15,w:TW+1.4,h:2.2,fontFace:PR,fontSize:20,color:MUTE,lineSpacing:33,isTextBox:true,margin:0});
  pic(sl,"work-ba.jpeg",PX+1.10,2.20,PW-1.10,6.20);
  notes(sl,27,"ACT THREE · THE WHY","TELL HER WHY",
    "Perform the quote in your client voice again. This is a small slide that changes how women work forever, so give it a real beat at the end.",
    "And here is the part almost every artist skips. Tell her why. [Client voice.] So I am cleansing your lashes first, and I know it feels like an extra step, but that is so the adhesive is bonding to a clean lash instead of to your makeup from yesterday. That right there is half your retention. [Teaching voice.] Say it while your hands are working. It costs you nothing. [Beat.] Because a client who understands the why protects it at home. She comes back on schedule. And when her friend asks her where she got her lashes done, she does not just say the name of your shop. She tells her what you explained to her, and that is what makes you different from the girl charging forty dollars. [Beat.] A client who got handed a printed list does none of that.");
}

/* ============ 28 · DAY THREE ============ */
{ const sl=s();
  eyebrow(sl,"ACT THREE  ·  THE DAY-THREE MESSAGE");
  title(sl,"Send this on day three. Every client.",1.30,35,TW+1.4);
  sl.addShape(p.ShapeType.roundRect,{x:M,y:3.95,w:TW+1.4,h:2.15,fill:{color:CARD},
    line:{color:PINK,width:1.5},rectRadius:0.14});
  sl.addText("“Wanted to make sure your lashes are feeling good. Text me if anything needs adjusting.”",
    {x:M+0.6,y:4.30,w:TW+0.2,h:1.5,fontFace:PI,fontSize:25,color:INK,italic:true,
     lineSpacing:40,isTextBox:true,margin:0});
  sl.addText("That message is for her.\n\n“Spots are filling fast, book now” is for you. She can feel the difference instantly.",
    {x:M,y:6.65,w:TW+1.4,h:2.4,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
  pic(sl,"lash-close-2.jpeg",PX+1.30,2.60,PW-1.30,5.90);
  kicker(sl,"You do not need fake urgency when your work is good.",TW+1.4);
  notes(sl,28,"ACT THREE · TAKEAWAY","THE DAY-THREE MESSAGE",
    "Takeaway three. Tell them to screenshot this slide. Actually say the words screenshot this. Then contrast the two messages out loud so the difference is obvious.",
    "Takeaway number three. Screenshot this slide right now. [Beat.] Day three, every client, you send this. Wanted to make sure your lashes are feeling good. Text me if anything needs adjusting. [Beat.] That is it. That is the whole message. And what it does is it catches a problem on day three, when it is a fifteen minute fix, instead of day nine, when it is a full redo and a bad review. [Beat.] Now compare that to what most people send. Spots are filling fast, book now. [Beat.] One of those messages is for her. One of those messages is for you. And she can feel which one is which instantly. [Beat.] You do not need fake urgency when your work is good.");
}

/* ============ 29 · TAKEAWAY THREE ============ */
{ const sl=s();
  sl.addText("YOU LEAVE WITH",{x:0,y:4.05,w:20,h:0.5,fontFace:PB,fontSize:15,color:MUTE,
    charSpacing:6,align:"center",isTextBox:true,margin:0});
  sl.addText([{text:"The ",options:{color:INK}},{text:"Protocol",options:{color:GOLD,fontFace:PI,italic:true}}],
    {x:0,y:4.85,w:20,h:1.7,fontFace:PB,fontSize:72,align:"center",isTextBox:true,margin:0});
  sl.addText("The day-three message, what to look for in her answer, and how it saves the clients you would have lost.",
    {x:3.0,y:6.85,w:14,h:1.2,fontFace:PR,fontSize:21,color:MUTE,align:"center",isTextBox:true,margin:0});
  notes(sl,29,"ACT THREE · TAKEAWAY","THE PROTOCOL",
    "Fifteen seconds. Clock check: you should be right around 8:45 here. If you are past 8:48, cut straight to the recap.",
    "Takeaway three. The Protocol. The day-three message, what to listen for in her answer, and how it saves you the clients you were about to lose without ever knowing why.");
}

/* ============ 30 · RECAP ============ */
{ const sl=s();
  eyebrow(sl,"IN ONE HOUR YOU GOT");
  title(sl,"Three things you can use tomorrow.",1.30,45);
  const t=[["The Cure Check","Your room, read properly, for the first time"],
           ["The Four Questions","Asked at intake, before you touch her"],
           ["The Protocol","Aftercare that sticks and a day-three message"]];
  rows(sl,t,4.35);
  kicker(sl,"That was the hour I promised you, and I meant every word of it.");
  notes(sl,30,"THE RECAP","THREE THINGS YOU CAN USE TOMORROW",
    "Deliver this warmly and completely. Do not rush into the pivot. She has to genuinely feel she got everything she was promised BEFORE you turn, or the turn feels like a bait and switch. Take a full breath at the end.",
    "Alright. In one hour you got three things. The Cure Check, which is your room read properly for the first time. The Four Questions, asked at intake before you ever touch her. And the Protocol, aftercare that actually sticks plus your day-three message. [Beat.] You can use all three of those tomorrow. On your next client. Without buying one thing from me. [Beat.] I told y'all I was not going to gatekeep, and I meant it. That was the hour I promised you. [Long pause.] Now let me be honest with you about something.");
}

/* ============ 31 · THE TURN ============ */
{ const sl=s();
  eyebrow(sl,"NOW LET ME BE HONEST WITH YOU");
  title(sl,[{text:"Knowing why is not\nthe same as ",options:{color:INK}},
            {text:"being corrected.",options:{color:PINK,fontFace:PI,italic:true}}],2.35,50);
  sl.addText("You can leave here knowing exactly what went wrong and still do it again next Tuesday, because nobody is watching your hands.\n\nThat is the gap. It is not information. It is correction.",
    {x:M,y:6.45,w:W*0.82,h:2.7,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
  notes(sl,31,"THE TURN","KNOWING WHY IS NOT BEING CORRECTED",
    "THE PIVOT OF THE ENTIRE NIGHT. Do not rush it and do not apologise for it. No prices exist yet, no offer yet. You are naming the gap, that is all. Slow, steady, look right at the camera.",
    "Everything I gave you tonight was information. And information is real, it will help you. [Beat.] But knowing why is not the same thing as being corrected. [Long pause.] You can walk out of this room tonight knowing exactly what went wrong with your last three sets, and then do the exact same thing next Tuesday, because nobody is standing behind you watching your hands. [Beat.] Nobody is watching your isolation. Nobody is watching your attachment point. Nobody is telling you, right there, that is the thing, do it again. [Beat.] That is the gap. And I want to be really clear with y'all. It is not an information gap. You have all the information now. It is a correction gap.");
}

/* ============ 32 · INVITATION ============ */
{ const sl=s();
  eyebrow(sl,"THE INVITATION");
  title(sl,[{text:"I want to invite you into the\n",options:{color:INK}},
            {text:"Lash Mastery CEO Certification™.",options:{color:GOLD,fontFace:PI,italic:true}}],2.75,46);
  sl.addText("If this is what you want for your life, type YES in the chat.",
    {x:M,y:6.35,w:W*0.84,h:1.0,fontFace:PB,fontSize:28,color:INK,isTextBox:true,margin:0});
  sl.addText("The details are for the yeses only. If it is not for you, no hard feelings. The hour was yours either way.",
    {x:M,y:7.55,w:W*0.82,h:1.4,fontFace:PR,fontSize:20,color:MUTE,lineSpacing:33,isTextBox:true,margin:0});
  notes(sl,32,"THE INVITATION","GET THE YES",
    "THE MOST IMPORTANT WAIT OF THE NIGHT. No prices exist yet. You are not selling, you are INVITING. Say the invitation, ask for the YES, then STOP TALKING. Read every single YES out loud by name. Let it stack. Do not move on early, even when the silence feels long. The room needs to see other women saying yes.",
    "So I want to invite you into something. It is called the Lash Mastery CEO Certification, and it is six weeks, live, with me, an RN, watching your actual hands and correcting your actual work. [Beat.] I am not going to give you any details yet. Because first I want to know who actually wants this for their life. [Beat.] If that is you, if you are sitting there thinking I am tired of guessing and I want somebody to just tell me what I am doing wrong, type YES in the chat. Right now. Just YES. [STOP. Wait. Do not fill the silence. Read every YES out loud by name.] Yes, Tierra. Yes, Andrea. Khadijah, I see you. LaDoris, yes ma'am. [Keep going. Let it stack.] Okay. [Beat.] Everything from here is for the yeses. And if it is not for you, no hard feelings at all, the hour was yours either way and you got everything I promised.");
}

/* ============ 33 · WHAT'S INCLUDED ============ */
{ const sl=s();
  eyebrow(sl,"WHAT YOU JUST SAID YES TO");
  title(sl,"The Lash Mastery CEO Certification™",1.30,33,TW+1.6,1.3);
  const inc=[["Six weeks live with an RN","Every session recorded. You leave corrected, not guessing"],
             ["Barbicide® + Master Eyelash Specialist","Credentials clients recognize"],
             ["The Money Maker Lash Kit, shipped","Professional product for your first 30 paying clients"],
             ["Lash CEO GPT Library™ + Vendor List","Four AI tools answering the questions that stop women cold"],
             ["The Rich Lash® Performance Guarantee","We keep working with you until your first paying client"]];
  let y=3.55;
  inc.forEach(it=>{
    sl.addText("✓",{x:M,y:y,w:0.6,h:0.55,fontFace:PB,fontSize:22,color:GREEN,isTextBox:true,margin:0,valign:"middle"});
    sl.addText(it[0],{x:M+0.7,y:y,w:TW-0.5,h:0.55,fontFace:PB,fontSize:20,color:INK,isTextBox:true,margin:0,valign:"middle"});
    sl.addText(it[1],{x:M+0.7,y:y+0.52,w:TW-0.5,h:0.5,fontFace:PR,fontSize:17.25,color:MUTE,isTextBox:true,margin:0,valign:"middle"});
    y+=1.20;
  });
  pic(sl,"live-teaching.jpeg",PX+0.60,3.55,PW-0.60,3.05);
  cap(sl,"A LIVE CORRECTION SESSION, ON YOUR REAL WORK",PX+0.60,6.78,PW-0.60);
  pic(sl,"the-kit.jpeg",PX+0.60,7.35,PW-0.60,2.55);
  notes(sl,33,"THE OFFER","WHAT IS INCLUDED",
    "Point at the screen. The two photos do the work: the top one is a real correction session, the bottom one is the actual kit. Say six weeks LIVE and hit the word live. Do not read every line, hit lines one, three and five.",
    "So here is what it is. Six weeks, live, with a Registered Nurse. Every session recorded so you never lose one. [Point at the top photo.] And that right there is what a session actually looks like. That is your work on the screen and me telling you exactly where your attachment is off. That is correction. That is not a video. [Beat.] You get your Barbicide certification and your Master Eyelash Specialist certification, credentials your clients actually recognise. [Point at the bottom photo.] You get the Money Maker Lash Kit shipped to your door, real professional product, enough for your first thirty paying clients. You get the Lash CEO GPT Library and my vendor list. [Beat.] And you get the Rich Lash Performance Guarantee, and I am going to tell you exactly what that means in a minute.");
}

/* ============ 34 · THE WOMEN WHO DID IT ============ */
{ const sl=s();
  eyebrow(sl,"AND I AM NOT NEW AT THIS");
  title(sl,[{text:"250+ women have gone through this ",options:{color:INK}},
            {text:"since 2017.",options:{color:GOLD,fontFace:PI,italic:true}}],1.25,36,W,1.3);
  const g=[["grad-1.jpeg","CERTIFIED"],["grad-2.jpeg","CERTIFIED"],
           ["grad-3.jpeg","CERTIFIED"],["grad-4.jpeg","CERTIFIED"]];
  g.forEach((it,i)=>{
    const x=M+i*(W/4);
    pic(sl,it[0],x,3.30,W/4-0.40,5.35);
    cap(sl,it[1],x,8.85,W/4-0.40);
  });
  sl.addText("Rich Lash® University graduates. Individual results vary.",
    {x:M,y:9.65,w:W,h:0.5,fontFace:PR,fontSize:15,color:MUTE,isTextBox:true,margin:0});
  notes(sl,34,"THE OFFER · PROOF","THE WOMEN WHO DID IT",
    "Say a name if you remember one. Real names land harder than a number. Keep it to forty seconds, this is proof, not a slideshow.",
    "And I want you to see who has already done this, because I am not new at this. Since 2017, more than 250 women have come through my training. [Point across.] That is a real certificate. That is a real graduation day. These are women who came in exactly where you are right now, guessing, frustrated, embarrassed to post their work. [Beat.] And I am going to tell y'all the truth. Not every single one of them went and built the same thing, because everybody's life is different. But every one of them left knowing what she was doing with her hands. Every one.");
}

/* ============ 35 · IN THEIR WORDS ============ */
{ const sl=s();
  eyebrow(sl,"IN THEIR WORDS, NOT MINE");
  title(sl,"This is what week two sounds like.",1.25,42);
  pic(sl,"testimonial-chelsea.jpeg",M,3.35,6.10,5.85);
  pic(sl,"testimonial-omoye.jpeg",8.20,3.35,4.45,5.85);
  sl.addText("“I just wanted to share with y'all the set I did today. This the very first set that I did that I'm extremely proud of and can't believe I did that.”",
    {x:13.25,y:3.55,w:5.51,h:3.9,fontFace:PI,fontSize:19,color:INK,italic:true,lineSpacing:32,isTextBox:true,margin:0});
  cap(sl,"CHELSEA B.  ·  CAMPUS MEMBER",13.25,7.62,5.51);
  sl.addText("Posted by Rich Lash® women inside the campus. Individual results vary.",
    {x:M,y:9.55,w:W,h:0.5,fontFace:PR,fontSize:15,color:MUTE,isTextBox:true,margin:0});
  notes(sl,35,"THE OFFER · PROOF","IN THEIR WORDS",
    "Read Chelsea's line out loud, exactly as written. That specific sentence, extremely proud and cannot believe I did that, is the emotional target for every woman in the room tonight. Then stop and let it sit.",
    "And this is not me talking. This is them, inside the campus, posting their own work. [Read it out loud.] I just wanted to share with y'all the set I did today. This is the very first set that I did that I am extremely proud of and cannot believe I did that. [Long pause.] Extremely proud. Cannot believe I did that. [Beat.] That is what I want for you. Not a certificate on your wall. That feeling right there.");
}

/* ============ 36 · TIER ONE ============ */
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
  notes(sl,36,"THE OFFER · TIER ONE","CERTIFIED CEO",
    "First time a price appears tonight. Say the deposit number BEFORE the total, and say it calmly. Do not rush past the price, do not apologise for it, do not soften your voice. Then the kit cutoff line, because that is the only real deadline you have this week.",
    "There are two ways in. This is the first one. Certified CEO. [Beat.] You start tonight with seven hundred and fifty dollars. The full investment is two thousand nine hundred ninety-seven. [Beat.] And that is your six weeks live with me, your Barbicide and your Master Eyelash Specialist certifications, the Money Maker Lash Kit shipped to your door for your first thirty clients, the GPT library, my vendor list, the Performance Guarantee, and twelve months in the campus. [Beat.] One thing on timing. If you want your kit in your hands before week one, you need to be enrolled by Thursday. That is not a sales deadline, that is a shipping deadline, that is just how long the box takes to get to you.");
}

/* ============ 37 · TIER TWO ============ */
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
  notes(sl,37,"THE OFFER · TIER TWO","EQUIPPED CEO",
    "This is the one most women pick, so say that out loud. The difference that actually sells it is the studio and the Shadow Labs, not the price. Land hard on the last line.",
    "And this is the second way in, and I will tell y'all straight up, this is the one most women pick. Equipped CEO. [Beat.] You start tonight with twelve hundred. The full investment is three thousand nine hundred ninety-seven. [Beat.] You get everything in Certified CEO, kit included. But then you also get the complete professional studio shipped to your door. The bed, the setup, the whole thing. [Beat.] You get Shadow Labs, which is live correction on your real hands while I am watching. You get private one on one strategy sessions with me. You get Lash Cash Q4 included, which is a nine hundred ninety-seven dollar program by itself. And you get twenty-four months in the campus instead of twelve. [Long pause.] Here is why women pick this one. You do not start experimenting. You start equipped.");
}

/* ============ 38 · RLU PAY ============ */
{ const sl=s();
  eyebrow(sl,"RLU PAY™");
  title(sl,"Pick your tier. Pick your pace.",1.25,45);
  const cols=[["CERTIFIED CEO","$750","deposit tonight",
               ["Weekly · $400 × 3, then $399 × 3","Biweekly · 3 payments of $799","Two payments · $1,198.50 each"]],
              ["EQUIPPED CEO · MOST CHOSEN","$1,200","deposit tonight",
               ["Weekly · $491 × 6","Biweekly · 3 payments of $982.33","Two payments · $1,473.50 each"]]];
  cols.forEach((c,i)=>{
    const x=M+i*(W/2+0.1);
    sl.addShape(p.ShapeType.roundRect,{x:x,y:3.85,w:W/2-0.5,h:4.35,fill:{color:CARD},
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
  notes(sl,38,"THE OFFER · PAYMENTS","RLU PAY",
    "Drop the link in the chat RIGHT HERE, while this slide is up. Say the three words that remove the fear: no credit check. Say them slowly. This slide removes the last practical objection, so do not hurry it.",
    "And I built RLU Pay because I know exactly what stops women at this exact moment. [Beat.] No credit check. No lender. No interest. That is my own payment plan, it is not a third party, nobody is pulling your credit and telling you no. [Beat.] Certified CEO, you can do weekly, biweekly, or split it in two. Equipped CEO, same thing. Pick your pace. [Beat.] Or if you want to pay in full, Shop Pay, Affirm and Sezzle are all right there at checkout. [Beat.] I am dropping the link in the chat right now. Go grab your seat while I keep talking, because I have got a few more things to tell you.");
}

/* ============ 39 · GUARANTEE ============ */
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
  notes(sl,39,"THE OFFER · GUARANTEE","THE PERFORMANCE GUARANTEE",
    "Name the actual fear out loud before you give the guarantee. Do not promise an amount and do not promise a timeline. The promise is that you stay, nothing else. Say the three conditions plainly so it does not sound like fine print.",
    "And let me name the real fear, because I do not think it is the money. [Beat.] The real fear is betting on yourself and it not working. Again. Because a lot of y'all have already spent money on a class before and you have nothing to show for it, and you are scared to feel that twice. [Beat.] So here is the Performance Guarantee. Complete the curriculum. Show up to your live sessions. Run the client strategy we hand you. [Beat.] Do those three things, and if you still have not landed your first paying client, we keep working with you until you do. [Beat.] I am not promising you an amount and I am not promising you a timeline, because I would be lying to you and you would know it. What I am promising is that I do not disappear on you at week six.");
}

/* ============ 40 · THREE THOUGHTS ============ */
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
  notes(sl,40,"THE OFFER · OBJECTIONS","THE THREE THOUGHTS",
    "Say each objection in HER voice, like you are reading her mind, then answer it in yours. Do not get defensive on any of the three. The last line is the whole point of the slide, so slow down for it.",
    "Now I know exactly what is in your head right now, so let me just say it for you. [Beat.] Thought one. It is virtual, am I really going to learn? [Beat.] You are going to get more live coaching hours than any one-day class in your city, every session is recorded, and your real work gets corrected by a nurse on camera. A one-day class hands you a certificate and sends you home. [Beat.] Thought two. It is still a real investment. [Beat.] Yes it is. I am not going to sit here and pretend it is not. It is a certification, six weeks of live coaching, the kit, the AI library, and a guarantee. And if paying it all at once is a stretch, that is exactly what the deposit is for. [Beat.] Thought three. I could find something cheaper. [Beat.] You absolutely could. Pre-recorded videos, a PDF, nobody watching your hands. Cheap teaches you to lash. This builds you a business. [Long pause.] And I will tell y'all something. My best graduates had all three of those thoughts sitting right where you are sitting. They came anyway.");
}

/* ============ 41 · THE WINDOW ============ */
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
  notes(sl,41,"THE OFFER · LOGISTICS","THE WINDOW",
    "Remove all the uncertainty about what happens after they pay. Say the acceptance letter line, women remember that one. The three dates at the bottom are real, so state them flatly and do not dress them up.",
    "Here is exactly what happens after you enroll, so nothing is a mystery. [One.] You are in. Your seat locks tonight and you get an acceptance letter from me, not silence. Not a receipt and nothing else. [Two.] You get set up. The campus opens for you, your kit ships, and if you went Equipped, your studio ships too. [Three.] We begin Monday, September 7. Six weeks of live coaching with a nurse correcting your work. [Four.] You launch. Certified, equipped, first clients, guarantee behind you. [Beat.] Three real dates. Kit cutoff is Thursday the third. Doors close Sunday the sixth. And there are four seats left in this cohort. That is not a countdown timer, that is just how many chairs are in the room.");
}

/* ============ 42 · WHO FOR ============ */
{ const sl=s();
  eyebrow(sl,"ONE MORE TIME");
  title(sl,[{text:"Who are you doing this for?\n",options:{color:INK}},
            {text:"Type the name in the chat.",options:{color:PINK,fontFace:PI,italic:true}}],3.20,45,TW+1.6);
  sl.addText("Just the name.\n\nThat name is not asking you to feel ready. That name is waiting on you to decide.",
    {x:M,y:6.85,w:TW+1.6,h:2.3,fontFace:PR,fontSize:21,color:MUTE,lineSpacing:35,isTextBox:true,margin:0});
  pic(sl,"grad-1.jpeg",PX+1.55,2.55,PW-1.55,5.60);
  notes(sl,42,"THE CLOSE","WHO ARE YOU DOING THIS FOR",
    "The last emotional beat of the night. Read the names out loud, SLOWLY, one at a time. Do not rush this and do not talk over the chat. Say your own answer too, so it is not a technique.",
    "One more thing before I let General Admission go. [Beat.] Who are you doing this for? Type the name in the chat. Just the name, nothing else. [STOP. Wait. Read them out loud, slowly, one at a time.] Amari. Jayden. My mom. My daughter. [Keep reading.] My grandmother. Myself. [Beat, on that one.] Somebody said myself. Good. [Long pause.] I will tell you mine. I did it for my son. [Beat.] And here is what I want you to hear. That name you just typed is not asking you to feel ready. That name has never once asked you to feel ready. That name is waiting on you to decide.");
}

/* ============ 43 · CAMPUS · 8:58 ============ */
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
  notes(sl,43,"THE CLOSE · CAMPUS","EIGHT FIFTY-EIGHT",
    "8:58 PM exactly. Watch your clock on this one. Say out loud that in two minutes General Admission is out. Drop the nine dollar link in the chat while you are saying it, then say the number twice.",
    "It is eight fifty-eight. In two minutes General Admission is out, and I mean that, the room closes. [Beat.] So here is the last thing. If you want to stay on with me until nine forty-five, pull up a set of yours that did not last, a real one, and we are going to work out what happened to yours, on the screen, together. Not theory. Your photo. [Beat.] That is the campus, and it is nine dollars. [Beat.] Nine dollars. That is less than the bottle of adhesive you are going to throw out this month because it went bad in your drawer. [Beat.] Link is in the chat right now. Grab it and stay with me.");
}

/* ============ 44 · CLOSE ============ */
{ const sl=s();
  pic(sl,"grad-hall.jpeg",0,0,20,11.25);
  sl.addShape(p.ShapeType.rect,{x:0,y:0,w:20,h:11.25,fill:{color:BG,transparency:22}});
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
  notes(sl,44,"THE CLOSE","YOUR SEAT IS OPEN",
    "Leave this slide up the entire time you are answering questions and for the whole campus session. Do not click off it. The link needs to stay on the screen. End on the sign-off, every time.",
    "Your seat is open. The next move is yours. [Beat.] Link is on the screen and it is in the chat. Certified CEO, seven fifty down. Equipped CEO, twelve hundred down. We start Monday the seventh. [Beat.] And if you are staying with me for the campus, do not go anywhere, we are about to look at your real sets. [Beat.] Faith first. Work daily. Watch it come. [Beat.] I love y'all. Let's get into these lashes.");
}

p.writeFile({ fileName: "The-Retention-Room.pptx" }).then(f=>console.log("wrote",f));
