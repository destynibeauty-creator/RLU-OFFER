# Rich Lash® University — Full Site Audit
**22 August 2026.** Pulled live from the Shopify Admin API: every page, every product,
every theme file, plus 12 months of traffic and sales.

---

## The headline

**6,712 sessions in 365 days. 17 completed checkouts. A 0.25% conversion rate.**

| | |
|---|---|
| Sessions, 365 days | 6,712 |
| Added to cart | 92 |
| Reached checkout | 125 |
| **Completed checkout** | **17** |
| Conversion rate | **0.25%** |
| Gross sales, 365 days | **$9,626** |
| From one product | 94.9% |

**Correction:** every Shopify figure above excludes your Skool campus. Sixteen women pay $9
a month there. That is **$144/month recurring** that Shopify cannot see, and it is the only
recurring revenue in the business. Read these as store revenue, not total revenue.

### What sold, all year

| Product | Gross | Orders |
|---|---|---|
| Lash Mastery CEO Certification™ | $9,141 | 3 |
| Elite Lash Master VIP Pass | $297 | 11 |
| Lash CEO VIP Bundle | $188 | 4 |
| **Everything else** | **$0** | **0** |

---

## Three things costing you money

### 1. Your highest-traffic page is an expired event

`/pages/challenge` took **1,924 sessions in 90 days**. That is 46% of your entire site,
three times your home page.

I read the template in full. The only dates in it are **August 15 and August 19**. It has six
buttons pointing at an on-page anchor and exactly **one** link to `/pages/enroll`.

You confirmed the spike was paid traffic. That reclassifies the page rather than devaluing it:
it is a **proven ad destination** that converted cold Meta traffic into registrants at roughly
$1.33 to $2.67 a head. You cannot turn ads back on toward it while it says August 15.

Add `/pages/ceochallenge` at 874 sessions and the two challenge pages are **66% of all
traffic**.

**Fix:** twenty minutes of find-and-replace. Full instructions in
`fixes/challenge-page-rescue.md`.

### 2. Your application page renders blank

`/pages/application` is published. Its template, `templates/page.LMCEOAPPLICATION.liquid`,
is **zero bytes**. An empty file.

Your home page's main button says **"Apply Now →"** and sends people there. That is the
funnel: home, then apply, then nothing.

**Fix:** unpublish the page, repoint the home button at `/pages/enroll`. Two settings changes.

### 3. Twenty-five live products. Zero sales in twelve months.

| | |
|---|---|
| Products total | 64 |
| Active and buyable | 25 |
| Units in stock on them | 1,469 |
| **Earned in 365 days** | **$0** |
| Draft products holding real inventory | 9 (438 units) |

Spender Spoolies, Wealth Tile, Money Shower, Pursuit, the Money Magnet trays, the tweezer
sets. All published, all in stock, all buyable. Not one appears in the annual sales report.

Another **438 units you already paid for** sit in DRAFT where nobody can buy them, including
the Pro Clean Sterilizer, the Rich Cart, and a second Money Maker Lash Kit.

---

## You sell one product through seven front doors

| Door | What it is | 90d sessions | Verdict |
|---|---|---|---|
| `/` | Home. A full cert pitch in one custom-liquid block. CTA is "Apply Now". | 629 | **Repoint.** Sends traffic to a blank page. |
| `/pages/enroll` | The real one. 167 KB, buy buttons, RLU Pay, guarantee. | 287 | **Keep.** The only page that closes. |
| `/pages/applynow` | A second landing page, 32 KB, separate copy. | 10 | **Merge.** |
| `/pages/application` | Empty template. | 0 | **Unpublish.** |
| `/products/register` | The actual product. UNLISTED, 8 units left. | 49 | **Redirect.** |
| `/pages/coursepath` | "Choose Your Path". 31 KB, published. | 0 | **Retire.** |
| `/pages/lash-mastery-…™` | Old handle still catching links. | 11 | **Redirect.** Likely 404. |

Your best page gets 287 sessions. A dead challenge page gets 1,924.

---

## Every published page

| Path | 90d | Status | Verdict |
|---|---|---|---|
| `/pages/challenge` | 1,924 | Expired | Aug 15–19 event, still live. Biggest leak. |
| `/pages/ceochallenge` | 874 | Expired | Zipify page. Same problem, second biggest. |
| `/` | 629 | Crippled | 24 of 25 sections disabled. CTA to a blank page. |
| `/pages/enroll` | 287 | Working | Your only sales page. Should get all of the above. |
| `/blogs/news/staterequirements` | 86 | Earning | Ranking on its own. Has no CTA. |
| `/products/register` | 49 | Bare | Product page, no sales copy. |
| `/pages/night1worksheet` | 44 | Fine | Add a cohort link at the bottom. |
| `/pages/calculator` | 33 | Fine | Genuinely useful. Worth promoting. |
| `/pages/night2exercise` | 23 | Duplicate | Two URL casings splitting traffic. |
| `/pages/about` | 22 | Stale | Uses the `contact` template. Odd. |
| `/pages/seatconfirmed` | 19 | Orphan | Thank-you page for a finished challenge. |
| `/pages/rlu-pay` | 13 | Fine | Link it from the enrollment page. |
| `/pages/testimonials` | 13 | Buried | 51 KB of proof nobody sees. |
| `/pages/privacy` | 12 | Fine | Required. |
| `/pages/applynow` | 10 | Duplicate | Merge into `/pages/enroll`. |
| `/pages/rluschoolofbusiness` | 5 | Unclear | Published July, no traffic, no offer. |
| `/pages/lashcashq4` | new | Launched | Needs traffic pointed at it. |
| `/pages/application` | 0 | **Empty** | Zero-byte template. Unpublish. |
| `/pages/coursepath` | 0 | Retire | 31 KB built, never found. |
| `/pages/book` | 0 | Retire | No inbound path. |
| `/pages/sciencecheckpoint` | 0 | Retire | Challenge asset, orphaned. |
| `/pages/lashmasterychallengex` | 0 | Delete | Duplicate of `/pages/challenge` with an x. |
| `/pages/lash-genesis™` | 0 | Delete | Untouched since 2023. A ™ in the URL breaks links. |
| `/pages/terms` | 0 | Fine | Required. |

**Eight more pages are already unpublished and can be deleted:** `packages`,
`classic-pro-mastery-package`, `audit`, `richlashmasterclassregister`, `upgradetovip`,
`lashmasterychallenge`, `klaviyo-test`, `ceovipbundle`.

**Three theme templates are zero-byte orphans:** `retention-ritual.liquid`,
`pages.thankyouchallengepage.liquid`, `pages.lashmasterychallenge.liquid`.

---

## Your home page is switched off

The home page template holds **25 sections**. I checked every one. **Twenty-four are
disabled.**

The Luxe Lash RN Method breakdown. The six pillars. The not-for-everyone filter. The pricing
structure. Courtney's story. LaTiya's story. The founder block. All built, all switched off in
the theme editor.

What actually renders is a single 39 KB custom-liquid block: a complete certification landing
page whose main button says **"Apply Now →"** and sends 629 sessions toward the blank page.

**So the answer to your question is no.** The home page should not list all your offers. It is
already trying to be a full certification pitch, and it is aimed at a dead end. Fix the button
first. Then decide whether home routes to three doors or just sells the certification, which
at 94.9% of revenue it arguably should.

---

## Where your traffic comes from

90 days, 4,329 sessions.

| Source | Sessions | Share |
|---|---|---|
| Instagram | 1,913 | 44% |
| Direct | 1,551 | 36% |
| Facebook | 676 | 16% |
| Google | 158 | 4% |
| **Email** | **13** | **0.3%** |

**Email is 0.3% of your traffic.** You have 1,058 engaged subscribers and they sent you
thirteen visits in three months. It is the cheapest channel you own and it is doing nothing.

The campus is the counter-example. **Sixteen women pay $9 a month** with no ad pointed at
them. Small, recurring, and the only thing that earns while you sleep.

---

## Two inventory numbers to check today

- **The certification product shows 8 units.** If tracking is on, that is your hard seat cap
  and you will hit it mid-launch.
- **Lash Cash Q4 shows 0 units** and is now Active. If tracking is on there, it cannot sell
  at all. Set it to 44.

Retention Ritual Kit reads **44 units**, which matches your Lash Cash cap exactly. That one
is correct.

---

## What I would do, in order

**This week — where the money is**

1. **Rewrite the challenge page hero and repoint its buttons.** 1,924 sessions land on a
   finished event. Full instructions in `fixes/challenge-page-rescue.md`. Same on
   `/pages/ceochallenge` in Zipify.
2. **Unpublish the blank application page, repoint the home CTA.** Two clicks and a link.
3. **Set inventory on both certification products.**
4. **Redirect the six dead doors to `/pages/enroll`.** URL redirects in admin, no code.
5. **Add one enrollment CTA to the state requirements blog post.** 86 sessions from Google
   with no ask on the page.
6. **Mail your list.** 1,058 subscribers, 13 visits. Even a bad email beats that.

**After September 7**

7. **Delete the eleven dead pages and three empty templates.**
8. **Decide what the shop is for.** 25 live products, 1,469 units, zero sales in a year.
   Either it gets an audience and a reason to exist, or it becomes fulfilment for kits only.
   Both are fine. Drifting is not.

---

*Traffic figures are Shopify Analytics sessions by landing page, 90 days unless noted. Sales
and conversion cover 365 days. Page and template findings come from theme **Claude Updates**
(live). `/pages/ceochallenge` is rendered by Zipify and sits outside the theme, so it was
assessed on traffic and status only, not on its markup.*
