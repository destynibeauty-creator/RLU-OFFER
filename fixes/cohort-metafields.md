# One date, everywhere: cohort metafields

Right now your cohort date is typed into at least **six places** across four files. That is why
`/pages/applynow` still said July 5 seven weeks after it stopped being true. It will happen
again unless the date lives in one place.

This puts it in one place: a Shopify settings screen you can edit in thirty seconds without
opening the code editor.

**Two parts.** Part 1 is you, five minutes of clicking. Part 2 is paste-in Liquid.

---

# PART 1 — Create the fields (you, in Shopify admin)

**Settings → Custom data → Shop → Add definition**

Add these five. For every one: **Namespace and key** must match exactly, and **Type** is
`Single line text` unless noted.

| Name | Namespace and key | Type | Value to enter now |
|---|---|---|---|
| Cohort name | `rlu.cohort_name` | Single line text | `Cohort Two` |
| Cohort start | `rlu.cohort_date` | Single line text | `Monday, September 7` |
| Cohort start (machine) | `rlu.cohort_iso` | Single line text | `2026-09-07T09:00:00-04:00` |
| Ship-by date | `rlu.ship_by` | Single line text | `Wednesday, September 3` |
| Cart closes | `rlu.cart_close` | Single line text | `Wednesday, September 3` |

Two notes:

- **Keep `cohort_iso` as text, not a date type.** Shopify's date type strips the timezone, and
  your countdown timers need the `-04:00` on the end to fire at the right hour.
- Write the human dates exactly as you want them to appear on the page, including the weekday.
  The pages print them verbatim.

Once the definitions exist, the values are edited on that same screen. **That is the only place
you touch when a cohort changes.**

---

# PART 2 — Point the pages at them

Every snippet below uses `| default:` so that if a field is ever blank, the page falls back to
the current text instead of rendering an empty gap. Nothing can break by being empty.

## 2a. `templates/page.LMCEO.liquid` — the enrollment page

This one is easy because your EDIT THESE block already centralizes the values. Replace the five
cohort lines inside that block.

**FIND**
```liquid
  assign cohort_name = "Cohort Two"
  assign cohort_day = "Monday"
  assign cohort_date = "September 7"
  assign cohort_iso = "2026-09-07T09:00:00-04:00"
  assign ship_by = "September 3"
```

**REPLACE**
```liquid
  assign cohort_name = shop.metafields.rlu.cohort_name | default: "Cohort Two"
  assign cohort_full = shop.metafields.rlu.cohort_date | default: "Monday, September 7"
  assign cohort_iso  = shop.metafields.rlu.cohort_iso  | default: "2026-09-07T09:00:00-04:00"
  assign ship_by     = shop.metafields.rlu.ship_by     | default: "Wednesday, September 3"
  # cohort_day and cohort_date are split back out so existing markup keeps working
  assign cohort_parts = cohort_full | split: ", "
  assign cohort_day   = cohort_parts[0]
  assign cohort_date  = cohort_parts[1] | default: cohort_full
```

That last bit matters. Your page prints `{{ cohort_day }}, {{ cohort_date }}` in about a dozen
places. Splitting `Monday, September 7` back into its two halves means **you do not have to
touch any of that markup.** It keeps working exactly as it does today.

Nothing else in the file changes.

## 2b. `templates/page.APPLYNOWLMCEO.liquid` — the apply page

This page is wrapped in `{% raw %}`, so Liquid does not run inside it. You break out and back
in around each value, the same way the iframe `asset_url` already does on that page.

There are three date strings. Each becomes a sandwich.

**FIND** (the urgency bar)
```html
<div class="urg-bar"><b>Enroll by Wednesday, September 3 so your kit ships in time</b> &middot; Cohort Two begins Monday, September 7 &middot; Limited seats</div>
```
**REPLACE**
```html
<div class="urg-bar"><b>Enroll by {% endraw %}{{ shop.metafields.rlu.ship_by | default: "Wednesday, September 3" }}{% raw %} so your kit ships in time</b> &middot; {% endraw %}{{ shop.metafields.rlu.cohort_name | default: "Cohort Two" }}{% raw %} begins {% endraw %}{{ shop.metafields.rlu.cohort_date | default: "Monday, September 7" }}{% raw %} &middot; Limited seats</div>
```

**FIND** (the how-note)
```html
<div class="how-note reveal">Enroll by Wednesday, September 3 so your kit ships in time &middot; Cohort Two begins Monday, September 7 &middot; Limited seats per cohort.</div>
```
**REPLACE**
```html
<div class="how-note reveal">Enroll by {% endraw %}{{ shop.metafields.rlu.ship_by | default: "Wednesday, September 3" }}{% raw %} so your kit ships in time &middot; {% endraw %}{{ shop.metafields.rlu.cohort_name | default: "Cohort Two" }}{% raw %} begins {% endraw %}{{ shop.metafields.rlu.cohort_date | default: "Monday, September 7" }}{% raw %} &middot; Limited seats per cohort.</div>
```

**FIND** (the final button subline)
```html
<div class="apply-sub">Takes 3 minutes &middot; Cohort Two begins Monday, September 7</div>
```
**REPLACE**
```html
<div class="apply-sub">Takes 3 minutes &middot; {% endraw %}{{ shop.metafields.rlu.cohort_name | default: "Cohort Two" }}{% raw %} begins {% endraw %}{{ shop.metafields.rlu.cohort_date | default: "Monday, September 7" }}{% raw %}</div>
```

**Skip all of this if you are redirecting the page.** Which is still what I would do. Do not
wire up a page you are about to retire.

## 2c. `templates/page.lashmasterychallenge.liquid` — the challenge page

One line, and it drives every countdown on the page.

**FIND**
```js
window.RLU_CHALLENGE_START = "2026-09-07T09:00:00-04:00"; /* Cohort Two, Week 1 */
```
**REPLACE**
```liquid
window.RLU_CHALLENGE_START = "{{ shop.metafields.rlu.cohort_iso | default: '2026-09-07T09:00:00-04:00' }}";
```

Check whether that page is inside a `{% raw %}` block first. If it is, sandwich it the same way
as 2b. If not, paste as written.

Then the visible date strings in the announcement bar and sticky bar, same sandwich pattern.

## 2d. The home page

Your home page is a **custom-liquid section**, edited in the theme editor rather than the code
editor: **Online Store → Customize → the Custom Liquid section → the code box.**

Liquid does run in that box, so no sandwich needed. Anywhere it names a date, use:

```liquid
{{ shop.metafields.rlu.cohort_date | default: "Monday, September 7" }}
```

---

# How you use it from now on

When Cohort Three is set:

1. **Settings → Custom data → Shop**
2. Change `cohort_name` to `Cohort Three`, `cohort_date` to the new date, `cohort_iso` to the
   new machine date, `ship_by` and `cart_close` to the new deadlines
3. Save

Every page updates at once. Every countdown retargets itself. Nothing goes stale, because
there is no second copy to forget.

**Test it before you trust it.** After Part 2, change `cohort_name` to something obvious like
`TEST COHORT`, save, and reload `/pages/enroll`. If you see TEST COHORT, it is wired. Change it
back.

---

# What this does not fix

Two date-shaped things stay hardcoded on purpose:

- **The six RLU Pay payment schedules** in the HoneyBook forms and the six agreements. Those
  are legal documents with specific dated obligations. They should not move when a settings
  field changes.
- **The Lash Cash Q4 night dates.** Different program, different calendar. If you want those
  centralized too, add `rlu.lashcash_start` and `rlu.lashcash_dates` on the same screen and
  point `page.lash-cash-q4.liquid` at them.
