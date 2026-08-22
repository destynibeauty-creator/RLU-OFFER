# Lash Cash Q4: Shopify product setup

Build one product with two variants. Both stay publicly buyable, because the
$497 rate is for your 250 graduates, not only for this cohort's Certified buyers.

## Product

| Field | Value |
|---|---|
| Title | Lash Cash Q4 Business Intensive |
| Status | Active |
| Product type | Program |
| Vendor | Rich Lash University |
| Physical product | **Yes**, check it. The Retention Ritual Kit ships with every seat |
| Track quantity | **No**, uncheck it. The 20-seat cap includes Equipped buyers who never touch this product, so Shopify cannot count it for you. Track the cap yourself |

## Variants

Add an option. Name it **Enrollment**. Two values:

| Variant | Price | Cost per item | Who it is for |
|---|---|---|---|
| With Certified CEO | 497.00 | 62.03 | Certified buyers adding it, and your 250 graduates |
| Standalone | 997.00 | 62.03 | Everyone else |

Cost per item is the Retention Ritual Kit at $62.03, so your margin reports stay honest.

## Description copy

> Certification makes you good at lashes. This makes you open for business.
>
> Six live build nights, Thursdays at 9 PM ET. Laptops open. You leave every
> one of them holding a piece of your business that already works.
>
> **Night One, The Setup.** You stop operating like a hobby. Entity, insurance, banking, and pricing built on your real numbers.
> **Night Two, The Website.** Women book you while you sleep. Your site goes live that night with a service menu, booking, and deposits.
> **Night Three, The Back End.** No-shows stop costing you. A 16-template forms library wired straight into your booking.
> **Night Four, The AI Night.** Your admin runs without you. We build your agents live: content, follow-up, reminders, the busywork.
> **Night Five, Getting Clients.** You stop posting and praying. A repeatable content, referral, and rebooking system that fills your chair.
> **Night Six, Q4 Execution.** You walk into the holidays with a plan. Holiday pricing, gift cards, packages, then your January map.
>
> Dates: October 29, November 5, 12, 19, then December 3 and 10. Every night
> recorded, so a long shift never costs you one. Your Retention Ritual Kit
> ships to your door. Seats capped at 20.
>
> Included with Equipped CEO. Half rate for women who have trained with me before.
>
> Faith first. Work daily. Watch it come.

## After you save, grab two values

1. Click the **With Certified CEO** variant. The browser URL ends in
   `/variants/1234567890`. That number is the variant ID.
2. Copy the product page URL, for example
   `https://richlash.university/products/lash-cash-q4-business-intensive`

## Paste them into the page

Open `templates/page.LMCEO.liquid` and edit two lines in the EDIT THESE block:

    assign lc_variant_addon = "PASTE THE VARIANT ID HERE"
    assign lc_product_url   = "PASTE THE PRODUCT URL HERE"

Save. The add-on button appears on the Certified card, and the "Everyone else"
row in the Lash Cash block becomes clickable. Both stay hidden while those
values are empty, so nothing breaks in the meantime.

## Inventory to order

20 seats means up to 20 Retention Ritual Kits at $62.03 each, about $1,241 at
full capacity. Current Retention Ritual stock is 44 units, so you are covered.
