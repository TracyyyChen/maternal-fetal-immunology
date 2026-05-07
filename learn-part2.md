---
title: "Part 2: The Immunological Puzzle of Pregnancy"
permalink: /learn/part2/
layout: single
sidebar:
  nav: "learn"
---

{% include progress-bar.html part=2 title="The Puzzle of Pregnancy" %}

{% include page-section-nav.html %}


<div class="figure-wrap">
<img src="{{ "/assets/images/Medawar.png" | relative_url }}" alt="Peter Medawar and the immunological paradox of pregnancy">
<p>Peter Medawar and the immunological paradox of pregnancy</p>
</div>

## The paradox at the heart of pregnancy

To appreciate how strange pregnancy is immunologically, start with the idea of organ transplants. When a surgeon transplants a kidney from one person to another, the recipient's immune system almost always tries to destroy it — not because the kidney is diseased, but simply because it's foreign. The proteins on its cell surfaces don't match the recipient's <abbr title="Surface proteins that act as molecular ID tags, letting immune cells distinguish self from foreign.">MHC</abbr> self-tags, so T cells recognize it as non-self and mount an attack. To prevent this, transplant patients take powerful immunosuppressive drugs for the rest of their lives. The more genetically different the donor and recipient, the more vigorous the rejection. This is one of the hardest unsolved problems in medicine, and it's the lens through which immunologists first looked at pregnancy.

In 1953, a British immunologist named **Peter Medawar** posed what became one of biology's most famous questions: how does the pregnant female tolerate the genetically foreign fetus? A fetus inherits half its DNA from its father, which means half its surface proteins (its MHC molecules, the same ones that trigger transplant rejection) are paternal and therefore potentially foreign to the mother. By every rule the immune system follows, the fetus should look like a poorly matched organ transplant, renewed with every pregnancy. And yet, in healthy pregnancies, it isn't rejected. Medawar himself proposed three hypotheses: that the uterus is immunologically privileged (separated from the immune system), that the fetus somehow masks its foreign antigens, or that the mother's immune system is broadly suppressed during pregnancy. Decades of research have shown that none of these is quite right — and that the true answer is far more interesting than any of them.

What we now understand is that pregnancy isn't a state of immune suppression or ignorance. It's a state of **active, exquisitely regulated tolerance**. The maternal immune system knows the fetus is there. It sees the paternal antigens. And rather than attacking or ignoring, it makes a controlled decision to stand down, deploying the very tolerance mechanisms you learned in [Part 1]({{ '/learn/part1/' | relative_url }}), but in a targeted, localized, and dynamic way. The uterus becomes a specialized immunological niche. The placenta actively negotiates with maternal immune cells. <abbr title="Regulatory T cells that suppress immune responses; the immune system's peacekeepers.">Tregs</abbr> accumulate specifically in response to paternal antigens. This is effectively molecular diplomacy, orchestrated on a scale that still humbles researchers today. The question Medawar asked in 1953 is still not fully answered. That gap is where the science gets exciting, and where new researchers are needed.

---

## The uterus as an immune organ

Most people think of the uterus as a passive vessel, like a warm, sheltered space where a fetus simply grows. The immunological reality is almost the opposite. The lining of the uterus, called the endometrium, transforms dramatically each month in preparation for a potential pregnancy, and when implantation occurs, it differentiates into a highly specialized tissue called the **decidua**. The decidua is not ordinary tissue; it is densely packed with immune cells, making the implantation site one of the most immunologically active locations in the entire body. This might seem counterintuitive: why would you want an immune hotspot right where a genetically foreign embryo is trying to attach? The answer is that those immune cells aren't there to reject the embryo. They've been reprogrammed, through signals from both the mother's hormones and the arriving embryo itself, to serve a completely different set of functions that are essential for a healthy pregnancy.

The dominant immune cells in the decidua are unlike anything elsewhere in the body. **Uterine natural killer cells, or uNK cells**, make up 70% of all immune cells at the implantation site during early pregnancy, yet they look and behave almost nothing like the natural killer cells circulating in your blood. Blood NK cells are killers: they destroy virus-infected and cancerous cells on contact. Uterine NK cells, by contrast, have dialed down their killing capacity and pivoted toward supporting the pregnancy. They release growth factors that help build new blood vessels that the placenta will need to tap into the maternal blood supply. They also help remodel the spiral arteries, the maternal blood vessels that supply the implantation site, widening them so that blood flow to the fetus is adequate throughout pregnancy. **Uterine macrophages**, the other major immune population in the decidua, similarly play a dual role: clearing cellular debris, shaping tissue remodeling, and releasing anti-inflammatory signals that help maintain local tolerance. Both cell types are in constant dialogue with the invading placental cells called trophoblasts - a molecular negotiation that determines whether implantation succeeds.

What makes the decidua truly remarkable is that it is a niche the body constructs specifically to manage this immunological problem. It actively builds an environment where tolerance is the default state. The decidua has higher concentrations of Tregs than almost any other tissue. It expresses unusual combinations of <abbr title="Signaling proteins that tell immune cells to ramp up or stand down.">cytokines</abbr> that suppress conventional immune activation. And the trophoblasts arriving from the fetal side express a unique set of surface molecules, including a protein called **HLA-G**, that specifically engage with uNK cells and macrophages to signal "I am welcome here." Throughout this process, the immune system remains alert and active, unlike Medawar's theory of immune "blindness."

<div class="figure-wrap">
<img src="{{ "/assets/images/TrophoblastImmuneInteraction.png" | relative_url }}" alt="Interactions between fetal trophoblasts and maternal immune cells at the decidua">
<p>teractions between fetal trophoblasts and maternal immune cells at the decidua (Liu et al., 2017) [<a href="#ref-liu2017">1</a>]</p>
</div>

---

## The placenta's immune toolkit

When the embryo implants, it sends out an invasion force. Specialized cells called **trophoblasts**, which form the outer layer of the early embryo, actively burrow into the uterine lining and eventually into the walls of maternal blood vessels. A subset called **extravillous trophoblasts (EVTs)** migrate away from anchoring villi and invade the decidua and myometrium, converting uterine spiral arteries from low-capacitance, pulsatile vessels into high-capacitance, low-resistance conduits capable of sustaining continuous perfusion to meet the growing fetus's metabolic demands.

This invasion creates direct, intimate contact between fetal cells and maternal immune cells — exactly the kind of contact that would normally trigger a rejection response. What prevents it is not chance. The trophoblasts arrive pre-armed with a remarkable molecular toolkit, each component specifically designed to neutralize a different arm of the maternal immune system.

The most studied of these tools is **HLA-G**. You'll remember from [Part 1]({{ '/learn/part1/' | relative_url }}) that MHC proteins (called HLA proteins in humans) are the surface tags that T cells use to distinguish self from non-self. Normal fetal cells express paternal HLA proteins that could be recognized as foreign. Trophoblasts, remarkably, suppress most of these and instead display HLA-G — a non-classical MHC molecule almost exclusive to the placenta. HLA-G doesn't trigger rejection. Instead, it directly engages inhibitory receptors on uterine NK cells and macrophages, essentially sending a "stand down" signal. It also promotes the generation of more Tregs locally, adding another layer of suppression.

On top of this, trophoblasts regulate the **complement system** (a cascade of blood proteins that normally punch holes in foreign cells) by expressing complement regulatory proteins that shield themselves from destruction. And they express <strong><abbr title="Surface proteins that brake T cell activation; exploited by trophoblasts and tumors alike, and targeted by cancer immunotherapies.">immune checkpoint molecules</abbr></strong> — proteins like PD-L1, the same pathway exploited by some cancer cells to evade immunity — that switch off activated T cells on contact. Together, these mechanisms actively reprogram the immune cells that encounter the placenta.

What makes this system so scientifically fascinating is that it works at the interface of two different organisms, in real time, across the entire length of pregnancy. Critically, when this negotiation breaks down — when HLA-G signaling is insufficient, complement regulation fails, or checkpoint molecules are dysregulated — the consequences can be severe: miscarriage, preeclampsia, and fetal growth restriction. The placenta's immune toolkit is the molecular basis for why pregnancy succeeds at all.

<div class="figure-wrap">
<img src="{{ "/assets/images/Trophoblasts.png" | relative_url }}" alt="Interactions between fetal trophoblasts and maternal immune cells">
<p>Interactions between fetal trophoblasts and maternal immune cells</p>
</div>

---

## A trimester-by-trimester immune story

<div class="figure-wrap">
<img src="{{ "/assets/images/TrimesterImmunology.png" | relative_url }}" alt="Immune system changes across trimesters">
<p>Shifts in immune system across the three trimesters of pregnancy</p>
</div>

One of the most elegant and underappreciated facts about pregnancy is that the maternal immune system doesn't simply adopt a single fixed state and hold it for nine months. Instead, it shifts through three distinct immunological phases timed to match what the pregnancy needs at that moment. This idea was formalized by immunologist **Gil Mor**, who proposed that pregnancy is not a state of immune tolerance but a dynamic, carefully orchestrated sequence of immune states: successful pregnancy requires inflammation, then tolerance, then inflammation again. Each phase, if it fails to occur or occurs at the wrong time, is associated with a specific category of pregnancy complication.

**The first trimester** is, counterintuitively, a state of controlled inflammation. When the embryo implants, it needs to break through the uterine lining, remodel blood vessels, and establish a blood supply, which are all inherently tissue-disrupting processes. The immune system's inflammatory response is actually required for this to work. Innate immune cells flood the implantation site, clearing cellular debris and promoting the tissue remodeling that trophoblast invasion depends on. But the key word is *controlled*: too little inflammation and implantation fails; too much and the embryo is damaged. Disruptions here are increasingly recognized as causes of early pregnancy loss and implantation failure in IVF cycles.

**The second trimester** is the immunologically quietest phase, characterized by profound tolerance. Tregs are at their peak abundance. Anti-inflammatory cytokines dominate the uterine environment. The fetus is growing rapidly, the placenta is established, and the immune system's job is largely to maintain the status quo. This is often what people imagine when they think of "immune suppression" during pregnancy — though suppression isn't the right descriptor, since the immune system remains fully capable of fighting infections. It's better described as a period of actively maintained peace.

**The third trimester** sees the immune system begin shifting back toward inflammation in preparation for labor. Pro-inflammatory cytokines rise, immune cell populations in the myometrium increase, and the cervix undergoes an inflammatory-driven softening process called ripening. Labor itself is an inflammatory event marked by contractions, membrane rupture, and placental delivery are all driven in part by the same molecular signals that drive any tissue-clearing immune response. When this late-pregnancy inflammatory shift occurs prematurely, the result is preterm labor, one of the leading causes of neonatal mortality worldwide and a condition whose immunological roots are still being actively researched.

---

## References

<ol class="references">
<li id="ref-liu2017">Liu, S., Diao, L., Huang, C., Li, Y. et al. The role of decidual immune cells on human pregnancy. <em>Journal of Reproductive Immunology</em> (2017). <a href="https://doi.org/10.1016/j.jri.2017.10.045" target="_blank" rel="noopener">https://doi.org/10.1016/j.jri.2017.10.045</a></li>
</ol>

{% include part-nav.html
   prev_url="/learn/part1/"
   prev_title="Immunology Foundations"
   next_url="/learn/part3/"
   next_title="Model Systems" %}
