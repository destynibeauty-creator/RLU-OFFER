# RLU hex codes

Pulled from the live `:root` blocks in `templates/page.LMCEO.liquid`,
`templates/page.lashmasterychallenge.liquid`, and `templates/page.ceothankyou.liquid`.

## Core

| Role | Hex | Variable |
|---|---|---|
| Ground, enrollment page | `#080808` | `--black` |
| Ground, Retention Room and seat confirmed | `#0A0A0A` | `--black` |
| Panel, one step up from ground | `#0E0C0E` | `--off` |
| Ink, body text | `#F2EEF0` | `--ink` |
| Soft text, secondary | `#A39BA0` | `--soft` |
| Faint text, labels and legal | `#6A626A` | `--faint` |
| White | `#FFFFFF` | `--white` |

## Accents

| Role | Hex | Variable |
|---|---|---|
| Hot pink, the primary | `#F600A2` | `--pink` |
| Pink soft, hovers and highlights | `#FF5CC5` | `--pink-soft` |
| Gold | `#D4AF37` | `--gold` |
| Gold soft | `#E8C57A` | `--gold-soft` |
| Green, money and confirmations | `#4EBB19` | `--green` |
| Green soft | `#7EE84D` | `--green-soft` |
| Lime, used sparingly | `#ABFE2A` | `--lime` |

## Lines

| Role | Value |
|---|---|
| Hairline | `rgba(255,255,255,0.10)` |
| Warm hairline | `rgba(212,175,55,0.18)` to `0.25` |

## Notes

**One inconsistency worth knowing.** The enrollment page grounds at `#080808`
and the other two at `#0A0A0A`. Two values apart, invisible side by side, but
if you are matching an image background to a page, use the one for that page.

**`#398414` is Affirm's green, not ours.** It appears in the seat confirmed
page only on the Affirm badge. Do not use it as a brand color.

**No brown.** Warm tone comes from gold on black, never from brown.

## For image prompts

> Palette: near black #0A0A0A ground, hot pink #F600A2 neon, gold #D4AF37
> metallic accents, off white #F2EEF0 text. No brown, no beige, no warm wood.
