---
title: "Part 5: Applications Beyond Pregnancy"
permalink: /learn/part5/
layout: single
sidebar:
  nav: "learn"
---

{% include progress-bar.html part=5 title="Applications Beyond Pregnancy" %}

{% include page-section-nav.html %}


The mechanisms underlying pregnancy are not specific to the maternal-fetal interface — they are fundamental features of the immune system. Understanding them using pregnancy as a model system turns out to help solve some of the most important problems in medicine. This section makes that case explicitly, using unanswered questions in cancer, transplant medicine, and autoimmunity as case studies.

Maternal-fetal immunology does not sit as a niche subfield within immunology. It is central to the field as a whole — and researchers who recognize that are finding that work at the maternal-fetal interface opens doors in directions they never anticipated.

---

## Cancer

The maternal-fetal interface and the tumor microenvironment look surprisingly similar when you zoom in on how they handle the immune system. Both involve cells that are, in some sense, "foreign," yet manage to avoid being destroyed.

One concrete example of what cancer research has already learned from pregnancy involves a molecule called **IDO (indoleamine 2,3-dioxygenase)**. At the maternal-fetal interface, IDO breaks down tryptophan — an amino acid that T cells need to function — creating a local environment where immune cells are less able to attack.[<a href="#ref-munn1998">1</a>] Tumors have independently evolved to use the same strategy: many cancers express IDO to keep T cells from doing their job.[<a href="#ref-ido-cancer">2</a>] This parallel helped researchers identify IDO as a therapeutic target, leading to the development of drugs aimed at blocking this pathway in cancer. It's a clear example of how studying pregnancy has already reshaped cancer biology.

But this is likely just one of many ways that cancer immune evasion mimics strategies at the maternal-fetal interface. If we understood how the placenta controls immune cells with such precision — allowing some responses while blocking others — we might discover new ways to fine-tune cancer treatments. Right now, many immunotherapies work by broadly activating the immune system, which can cause harmful side effects. Pregnancy suggests a different model: **the immune system can be regulated locally, in a specific tissue, without shutting it down everywhere.**[<a href="#ref-local-control">3</a>]

There are also deeper, more speculative questions worth exploring. If scientists could uncover how the placenta recruits and maintains regulatory T cells, they might learn how tumors build their own protective environments — and how to disrupt them. IDO itself not only suppresses T cells but can also promote the development of <abbr title="Regulatory T cells that suppress immune responses; the immune system's peacekeepers.">Tregs</abbr>[<a href="#ref-ido-cancer">2</a>], raising the possibility that understanding the full set of signals that create tolerance in pregnancy could reveal how to reverse those signals in cancer, making tumors more visible to the immune system.

Finally, the maternal-fetal interface suggests that evolution has already solved many of the problems cancer researchers are trying to address. The placenta has refined ways to regulate immune attack, control tissue invasion, and shape blood supply over millions of years. Many of these same features — immune suppression, invasion into surrounding tissue, and growth of new blood vessels — are also seen in tumors. Systematically studying these shared strategies could uncover entirely new principles of cancer biology.

> **Key paper:** [Similarities between placenta and tumor — ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0165037826000628)

<div class="figure-wrap">
<img src="{{ "/assets/images/CTLA4IDO.png" | relative_url }}" alt="CTLA-4-IDO-tryptophan pathway at the maternal-fetal interface">
<p>CTLA-4-IDO-tryptophan pathway at the maternal-fetal interface (Boulanger et al., 2024) [<a href="#ref-boulanger2024">4</a>]</p>
</div>

---

## Transplant medicine

Transplant medicine is built around a problem that pregnancy solves naturally: how to tolerate something that is clearly "non-self." In a kidney or heart transplant, the recipient's immune system recognizes the donor organ as foreign and tries to destroy it — which is why patients need lifelong immunosuppressive drugs. Pregnancy, by contrast, achieves tolerance to the genetically foreign fetus without shutting down the entire immune system.

One well-studied example involves immune checkpoint signals like <strong><abbr title="An immune checkpoint protein that brakes T cell activation; targeted by cancer drugs and transplant medicines like abatacept.">CTLA-4</abbr></strong>, which help turn down T cell activity. At the maternal-fetal interface, these signals contribute to a controlled, local dampening of immune responses. Similar pathways are now directly targeted in transplant medicine: drugs such as abatacept mimic these natural "brakes" to reduce rejection.[<a href="#ref-abatacept">5</a>] This is another case where mechanisms first understood in basic immunology — and visible in pregnancy — have shaped real clinical strategies.

But current transplant treatments are blunt tools. They suppress the immune system throughout the entire body, leaving patients vulnerable to infections and even cancer. Pregnancy suggests a more refined alternative. If researchers could understand how immune tolerance is restricted to the uterus while the rest of the immune system remains functional, they might design transplant therapies that protect only the donated organ. **Instead of global immunosuppression, organ-specific tolerance.** The maternal-fetal interface demonstrates that this is biologically possible.[<a href="#ref-localized-tolerance">6</a>]

Pregnancy also introduces a concept that transplant medicine has not yet fully achieved: **reversible tolerance**. During pregnancy, the immune system enters a tolerant state for months and then returns to normal after delivery. If researchers could understand how that "on-off switch" works, it might open the door to time-limited transplant therapies that induce tolerance during the critical period after transplantation and then safely taper off. More broadly, the maternal-fetal interface suggests that the immune system is far more flexible than transplant medicine currently assumes.

---

## Autoimmunity

For millions of years, the female immune system evolved under a constraint the male immune system did not face: the need to tolerate a genetically distinct fetus, repeatedly, without compromising the ability to fight infection. This evolution has left fingerprints everywhere in female immunology. Women mount stronger innate immune responses, produce higher antibody titers, and have larger and more active <abbr title="Regulatory T cells that suppress immune responses; the immune system's peacekeepers.">Treg</abbr> populations than men.

**Approximately 80% of autoimmune disease patients are women.** For decades, this disparity was vaguely attributed to the presence of estrogen as a general proliferative agent for immune cells (most innate and adaptive immune cells including macrophages, dendritic cells, T cells, and B cells have estrogen receptors), and researchers largely left it at that. The emerging picture is more specific and much more interesting. What if the same heightened immune reactivity that makes the female immune system better at tolerating a fetus — and better at fighting pathogens — also makes it more prone to self-reactivity? The evolutionary tradeoff that pregnancy imposed on the female immune system may also underlie the striking female bias in rheumatoid arthritis (1M:3F), multiple sclerosis (1M:4F), lupus (1M:9F), and Sjögren's syndrome (1M:19F).

Pregnancy itself offers some of the most compelling evidence for this connection. Symptoms of rheumatoid arthritis frequently **improve during the second trimester**, when Tregs and anti-inflammatory cytokines are at peak abundance, and **flare in the postpartum period** when those systems are dismantled. MS relapse rates typically drop during pregnancy and spike after delivery. These could be the signature of the same trimester-by-trimester immune shifts described in [Part 2]({{ '/learn/part2/' | relative_url }}) playing out systemically rather than locally.

**Fetal microchimerism** adds another layer. Small numbers of fetal cells enter maternal circulation during pregnancy and can persist in maternal tissues for decades — fetal DNA has been found in the maternal brain 30 years after pregnancy.[<a href="#ref-fetal-dna-brain">7</a>] The immune system must continue tolerating these persisting cells, meaning the immunological paradox of pregnancy extends beyond birth. Some evidence suggests that unusual accumulations of <abbr title="Fetal cells that persist in maternal tissues, sometimes for decades after delivery.">fetal microchimeric cells</abbr> in specific organs are associated with autoimmune diseases targeting those organs.[<a href="#ref-microchimerism">8</a>] While this is still a hypothesis, it is exactly the kind of groundbreaking theory open for a new generation of researchers to investigate.

<div class="figure-wrap">
<img src="{{ "/assets/images/FetalCellTrafficking.png" | relative_url }}" alt="Fetal cell trafficking during pregnancy">
<p>Fetal cell trafficking to the mother (Cómitre-Mariano et al., 2022) [<a href="#ref-comitremariano2022">9</a>]</p>
</div>

The connections between pregnancy and these other fields are not analogies: they are shared biology. Researchers who understand the maternal-fetal interface are positioned to contribute to cancer immunology, transplant engineering, and autoimmune disease simultaneously. If any of those fields interest you, maternal-fetal immunology is a place where a single career can touch all of them.

---

## References

<ol class="references">
<li id="ref-munn1998">Munn, D. H. et al. Prevention of allogeneic fetal rejection by tryptophan catabolism. <em>Science</em> <strong>281</strong>, 1191–1193 (1998). <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC305337/" target="_blank" rel="noopener">PMC305337</a></li>
<li id="ref-ido-cancer">IDO pathway in cancer immune evasion. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9344609/" target="_blank" rel="noopener">PMC9344609</a></li>
<li id="ref-local-control">Local immune regulation at the maternal-fetal interface. <a href="https://pubmed.ncbi.nlm.nih.gov/33363543/" target="_blank" rel="noopener">PubMed 33363543</a></li>
<li id="ref-boulanger2024">Boulanger, H. et al. Immunologic aspects of preeclampsia. <em>AJOG Global Reports</em> <strong>4</strong>, 100321 (2024).</li>
<li id="ref-abatacept">CTLA-4 pathway and abatacept in transplant medicine. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6480715/" target="_blank" rel="noopener">PMC6480715</a></li>
<li id="ref-localized-tolerance">Localized immune tolerance at the maternal-fetal interface. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7752949/" target="_blank" rel="noopener">PMC7752949</a></li>
<li id="ref-fetal-dna-brain">Fetal DNA persistence in maternal tissues. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10072000/" target="_blank" rel="noopener">PMC10072000</a></li>
<li id="ref-microchimerism">Fetal microchimerism and autoimmune disease. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8762399/" target="_blank" rel="noopener">PMC8762399</a></li>
<li id="ref-comitremariano2022">Cómitre-Mariano, B. et al. Feto-maternal microchimerism: Memories from pregnancy. <em>iScience</em> <strong>25</strong> (2022).</li>
</ol>

{% include part-nav.html
   prev_url="/learn/part4/"
   prev_title="When Tolerance Breaks Down"
   next_url="/learn/part6/"
   next_title="Frontiers & Why We Need You" %}
