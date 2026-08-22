# Rescuing /pages/challenge

**File:** `templates/page.lashmasterychallenge.liquid` (theme *Claude Updates*)
**Why:** 1,924 sessions in 90 days, 46% of all site traffic, landing on an event that ended
August 19. One link out to `/pages/enroll`.

Do not rebuild this page. It ranks, it converts attention, and the middle of it is good. Only
the parts that are now false need to change: the dates, the countdown, and where the buttons
go.

Ten find-and-replace edits, top to bottom. Each is exact.

---

## Before you start: what this page actually is

The 1,924 sessions were **paid traffic**, not organic. That spike is the August 15 to 19 ad
push, and it is spent. With ads off, this page goes quiet.

That does not make it less valuable. It makes it a different kind of valuable. This page is
not a traffic asset, it is **a proven ad destination**. Cold Meta traffic landed here and
registered at roughly $1.33 to $2.67 a head. That is the cheapest acquisition you have ever
measured, and the page that produced it is sitting here pointed at a finished event.

Two consequences:

1. **Fix it today anyway.** It takes twenty minutes, it catches the residual, and you cannot
   turn ads back on toward a page that says August 15.
2. **You have 16 days to September 7 and two seats sold.** Nothing organic is going to fill
   that room. The ads have to go back on, and they need somewhere to land.

So Section 6 below gives you two versions of the seats block. Read that one carefully, it is
the actual decision.

---

## 1. Retarget the countdown

Near the top, in the first `<script>` block:

**FIND**
```js
window.RLU_CHALLENGE_START = "2026-08-15T20:00:00-04:00"; /* Night 1, 8PM EDT */
```

**REPLACE**
```js
window.RLU_CHALLENGE_START = "2026-09-07T09:00:00-04:00"; /* Cohort Two, Week 1 */
```

The countdown is currently at zero and every timer on the page reads `0d 00h 00m`. This points
all of them at September 7 instead. Do this first, because the next two edits keep the timer
spans alive.

---

## 2. The announcement bar

**FIND**
```html
Registration is <b>open</b> · Five nights, Saturday August 15 to Wednesday August 19 · <b id="cd">-
```

**REPLACE**
```html
The August challenge has ended · <b>Cohort Two begins Monday, September 7</b> · <b id="cd">-
```

Keep the rest of that line exactly as it is, including the closing tags. The `id="cd"` span
must survive or the countdown script will have nothing to write into.

---

## 3. The sticky bar

**FIND**
```html
ive nights &middot; Starts in <b id="sbCd" style="color:var(--gold-soft)">--</b> &middot; Sat Aug 15, 8PM EDT
```

**REPLACE**
```html
ohort Two &middot; Begins in <b id="sbCd" style="color:var(--gold-soft)">--</b> &middot; Monday, September 7
```

(The leading letter is clipped on purpose so the find string matches what is actually in the
file. You are replacing the tail of "Five nights" with the tail of "Cohort Two".)

Then, just below it:

**FIND**
```html
<a href="#register" class="sb-btn">Save My Seat</a>
```

**REPLACE**
```html
<a href="/pages/enroll" class="sb-btn">See The Cohort</a>
```

---

## 4. The hero

Keep the headline. "Your first client starts here" is still true and it is doing work.
Replace the subhead and both buttons.

**FIND**
```html
<p class="sub">Five nights with a Registered Nurse. Learn lash artistry, get seen, and send the message that starts it. <b>Live on Zoom, one hour a night, even if you have never touched a lash.</b></p>
<a href="#register" class="btn-gold btn-early" onclick="rluIntent('free')">Claim Your Seat →</a>    <span class="btn-sub" style="margin-bottom:36px;">Saturday, August 15 &middot; 8PM EDT &middot; No card required</span>
```

**REPLACE**
```html
<p class="sub">The August challenge has ended. What it was preparing you for is open now. <b>Six weeks live with a Registered Nurse, two certifications, and your kit shipped before Week 1.</b></p>
<a href="/pages/enroll" class="btn-gold btn-early">See The Certification &rarr;</a>    <span class="btn-sub" style="margin-bottom:36px;">Cohort Two begins Monday, September 7 &middot; Start with a deposit or pay in full</span>
```

Note the `onclick="rluIntent('free')"` is removed. That function tags a lead as a challenge
registrant, which this button no longer is.

---

## 5. The hero title block

**FIND**
```html
<div class="hero-title">The Lash Mastery Challenge™</div>
<div class="hero-when">Saturday, August 15 to Wednesday, August 19 · 8PM EDT · Live on Zoom</div>
<a href="#register" class="btn-gold">Choose Your Seat →</a>
<span class="btn-sub">No card required &middot; Your Zoom link comes by email</span>
```

**REPLACE**
```html
<div class="hero-title">The Lash Mastery CEO Certification&trade;</div>
<div class="hero-when">Six weeks live &middot; Cohort Two begins Monday, September 7 &middot; 100% virtual</div>
<a href="/pages/enroll" class="btn-gold">Choose Your CEO Path &rarr;</a>
<span class="btn-sub">RN-led &middot; Kit shipped before Week 1 &middot; Performance Guarantee</span>
```

---

## 6. The seats section: pick one

`<section class="dark seats" id="seats">` holds a working Klaviyo form that already collects
name, email, and phone, tags the lead, and redirects to `/pages/seatconfirmed`. **Do not
delete it.** Email is 0.3% of your traffic right now: 1,058 subscribers produced thirteen
visits in ninety days. This form is the only thing on your highest-traffic page that grows
that list.

You have two ways to use it. Given 16 days and two seats, I would do **6B**.

### 6A. Waitlist (do this if you are not running ads before September 7)

**FIND**
```html
<span class="ey reveal">Registration Open</span>
```
**REPLACE**
```html
<span class="ey reveal">Next Challenge &middot; Waitlist</span>
```

**FIND**
```html
<a href="#register" class="seat-btn" onclick="rluIntent('free')">Claim My General Seat</a>
<div class="seat-note">No card required &middot; Zoom link sent by email</div>
```
**REPLACE**
```html
<a href="#register" class="seat-btn" onclick="rluIntent('waitlist')">Put Me On The List</a>
<div class="seat-note">No card required &middot; You hear about the next one first</div>
```

Passive. Collects names. Costs nothing. Fills no seats by September 7.

### 6B. One masterclass (recommended)

You already have the machine: ads fill the room, DMs fill the seats. That is how the last
cohort sold. The only thing missing is a room to fill.

This page is already a proven ad destination with a working registration form. Point it at a
**single 90 minute masterclass** in the first week of September, turn the ads back on, and DM
every registrant. One night of teaching, not five. It fits inside your ten hour ceiling and it
is the only thing on the table that can realistically fill Cohort Two.

**FIND**
```html
<span class="ey reveal">Registration Open</span>
```
**REPLACE**
```html
<span class="ey reveal">One Night &middot; Live &middot; No Card Required</span>
```

**FIND**
```html
<a href="#register" class="seat-btn" onclick="rluIntent('free')">Claim My General Seat</a>
<div class="seat-note">No card required &middot; Zoom link sent by email</div>
```
**REPLACE**
```html
<a href="#register" class="seat-btn" onclick="rluIntent('masterclass')">Save My Spot</a>
<div class="seat-note">No card required &middot; Your Zoom link comes by email</div>
```

Then set your masterclass date in the heading just above the form, and change the hero in
Section 4 to lead with the masterclass rather than the certification. The certification
becomes what you sell **on** the night, not what the page sells cold.

### Either way, change the second ticket button

**FIND**
```html
<a href="#register" class="seat-btn" onclick="rluIntent('vip')">Get My VIP Seat &rarr;</a>
```
**REPLACE**
```html
<a href="/pages/enroll" class="seat-btn">Skip Ahead &middot; See The Cohort &rarr;</a>
```

Two honest exits: not ready yet registers, ready now goes to the cohort.

---

## 7. The closing CTA

**FIND**
```html
<div class="reveal d2"><a href="#register" class="btn-gold" style="max-width:420px">Yes! Save My Seat →</a></div>
<span class="when reveal d2">Saturday, August 15 to Wednesday, August 19 · 8PM EDT · Live on Zoom</span>
```

**REPLACE**
```html
<div class="reveal d2"><a href="/pages/enroll" class="btn-gold" style="max-width:420px">Enroll In Cohort Two &rarr;</a></div>
<span class="when reveal d2">Six weeks live &middot; Begins Monday, September 7 &middot; Seats are limited</span>
```

---

## 8. Fix the Klaviyo source tag

Two places carry the old campaign name. Change both so waitlist signups do not land in the
August segment.

**FIND (twice)**
```
'Lash Mastery Challenge Aug 2026'
```

**REPLACE (both)**
```
'Challenge Waitlist 2026'
```

There is a third occurrence inside a Facebook `Lead` event. Change that one too.

---

## 9. Banned word sweep

The page uses **scale** eight times. It is on your no-list. Search `scale` and rewrite each
one. Most will read fine as "grow", "build", or just be cut. Also one instance of
**student**, which should be **woman** or **artist**.

Ignore any `scale` inside the CSS or in `transform:` and `scaleY(` in the script. Those are
code, not copy.

---

## 10. Check it

After saving, load `/pages/challenge` and confirm:

- The countdown reads a real number of days to September 7, not zeros
- Every button goes to `/pages/enroll` except the two waitlist ones
- Nothing on the page still says August 15 or August 19
- The registration form still submits and still lands on `/pages/seatconfirmed`

---

## Then do the same on /pages/ceochallenge

That page took **874 sessions** and has the same problem. It is a Zipify page, not a theme
template, so it is edited inside the Zipify app rather than the code editor. Same three
changes: kill the old dates, repoint the buttons to `/pages/enroll`, and keep any email
capture as a waitlist.

Between the two pages this moves roughly **2,800 sessions a quarter** off a finished event and
onto the only page you own that has a working cart.

---

## What happens to this page after September 7

Once the cohort is running, this becomes the **evergreen challenge** page: register, land in
the campus, watch five nights on demand, get the cohort offer by email. That is the version
that lets you keep ads running while you are teaching, or on a cruise, or asleep.

It needs one thing you do not have yet: **Night 2 has no replay.** Re-record it alone, ninety
minutes, no audience. Nobody watching on demand knows it was shot later.

Build that in the quiet weeks after Cohort Two starts. Not now. Now you have 16 days and two
seats.
