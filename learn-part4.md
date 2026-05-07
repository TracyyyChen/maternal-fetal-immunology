---
title: "Part 4: When Maternal-Fetal Tolerance Breaks Down"
permalink: /learn/part4/
layout: single
sidebar:
  nav: "learn"
---

{% include progress-bar.html part=4 title="When Tolerance Breaks Down" %}

{% include page-section-nav.html %}


Everything you've learned previously describes what happens when pregnancy goes right. But the systems involved are extraordinarily complex, and when any one of them fails, the consequences range from early pregnancy loss to life-threatening complications for the mother. These are not rare edge cases: preeclampsia affects 5–8% of pregnancies worldwide and is a leading cause of maternal mortality; preterm birth affects 15 million babies annually and is the leading cause of neonatal death; recurrent miscarriage affects 1–2% of couples trying to conceive, and in at least half of cases no explanation is ever found. **Every two minutes, a woman dies of pregnancy-related causes.**[<a href="#ref-bmj2023">1</a>] These are staggering numbers for conditions that have virtually no disease-modifying treatments.

Obstetrics has historically approached these conditions as surgical and procedural problems. This section begins to make the case that they are also immunological ones — and that reframing may one day change how these conditions are prevented, diagnosed, and treated.

---

## Case study: Recurrent miscarriage

Recurrent miscarriage, defined as three or more consecutive pregnancy losses, affects roughly 1–2% of couples trying to conceive, and in at least half of cases no chromosomal or anatomical explanation is found.[<a href="#ref-rai2006">2</a>] The leading immunological hypothesis centers on **Treg failure**. In healthy pregnancies, <abbr title="Regulatory T cells that suppress immune responses; the immune system's peacekeepers.">Tregs</abbr> accumulate in the <abbr title="The immune-cell-rich uterine lining that forms during pregnancy, engineered to tolerate the fetus.">decidua</abbr> specifically in response to paternal antigens, suppressing the immune response against the fetus. In some women with recurrent miscarriage, studies have found significantly reduced Treg numbers and activity at the implantation site, along with elevated pro-inflammatory <abbr title="Signaling proteins that tell immune cells to ramp up or stand down.">cytokines</abbr> that would normally be suppressed. There is also evidence that uterine NK cell populations are present in unusually high numbers or in a less tolerogenic state.

The first-trimester inflammatory window appears to tip too far in the inflammatory direction. Rather than the controlled inflammation that enables implantation, an uncontrolled immune attack damages the developing embryo before the tolerance mechanisms can catch up. Clinical trials testing low-dose progesterone and immunomodulatory drugs in women with recurrent miscarriage are ongoing, with some promising results, but no definitive treatment exists yet.

---

## Case study: Preeclampsia

Preeclampsia (PE) is a multisystem hypertensive disorder of pregnancy that affects approximately 5–8% of pregnancies worldwide.[<a href="#ref-fox2019">3</a>] Clinically, PE is defined by new-onset hypertension after 20 weeks of gestation, accompanied by high levels of protein in the urine or evidence of end-organ dysfunction, including renal insufficiency, hepatic injury, thrombocytopenia, pulmonary edema, or neurologic symptoms. The disease exists along a spectrum of severity, and can progress to <strong><abbr title="Severe preeclampsia with life-threatening seizures or coma.">eclampsia</abbr></strong> (life-threatening seizures or coma) and <strong><abbr title="A severe preeclampsia variant: hemolysis, elevated liver enzymes, low platelets.">HELLP syndrome</abbr></strong> (hemolysis, elevated liver enzymes, and low platelets). PE accounts for up to 26% of maternal deaths in low-income countries and 16% in high-income countries.[<a href="#ref-karrar2026">4</a>]

Beyond its acute presentation, PE has profound long-term consequences. Women with a history of PE have significantly increased lifetime risk of chronic hypertension, ischemic heart disease, stroke, and metabolic disorders. Children born from PE-complicated pregnancies are also at elevated risk for cardiovascular and neurodevelopmental disease later in life.[<a href="#ref-rolnik2022">5</a>]

Current management is largely supportive: antihypertensives to control blood pressure, magnesium sulfate for seizure prophylaxis. **The only definitive treatment is delivery of the placenta**, which is not a biological cure, but removal of the inciting organ. It does not reverse maternal endothelial dysfunction or eliminate long-term cardiometabolic risk.

Although the pathogenesis of PE remains incompletely mapped, new evidence points to defective placentation — specifically, incomplete <abbr title="Maternal blood vessels remodeled by EVTs to sustain high blood flow to the fetus.">spiral artery</abbr> remodeling — as the origin. As described in [Part 2]({{ '/learn/part2/' | relative_url }}), placentation occurs within an immune-rich microenvironment. Leukocytes constitute 30–40% of decidual cells in early gestation, with <abbr title="Uterine NK cells that support placentation rather than kill, unlike their blood counterparts.">decidual NK cells</abbr> (~70%), macrophages (~20%), and T cells (~10%)[<a href="#ref-erlebacher2013">6</a>] adopting tissue-specific phenotypes that enable implantation and placentation.[<a href="#ref-saito2024">7</a>] Disruption of immune function in the decidua can impair placentation, providing a direct link between immune dysregulation and placental malperfusion in PE.

Emerging theories propose that **impaired immune tolerance precedes and may even cause vascular dysfunction**.[<a href="#ref-boulanger2024">8</a>] Epidemiological observations support this: the risk of PE increases from ~4.1% in a first pregnancy to ~14.7% after a prior PE, and to ~31.9% after two consecutive preeclamptic pregnancies,[<a href="#ref-campbell1985">9</a>] suggesting an immunological memory. When a pregnancy occurs with a new partner following prior uncomplicated pregnancies, the risk of PE increases by approximately 30%. Conversely, when a pregnancy following PE occurs with a different partner, subsequent risk is reduced[<a href="#ref-lie1998">10</a>] — patterns consistent with immune tolerance to paternal alloantigens as an upstream event.

If that reframing is correct, preeclampsia becomes not just a pregnancy complication but a tractable model for studying what happens when targeted immune tolerance fails — and a disease whose solution could transform care for hundreds of thousands of women every year.

> **Key paper:** [Frontiers of preeclampsia immune research — PMC review](https://pmc.ncbi.nlm.nih.gov/articles/PMC10994979/)

---

## Case study: Preterm birth

Preterm birth is the leading cause of neonatal death and long-term disability worldwide. Approximately 15 million babies are born preterm annually, and immune dysfunction, specifically **premature activation of the third-trimester inflammatory shift** described in [Part 2]({{ '/learn/part2/' | relative_url }}), is implicated in a large fraction of cases.

The most well-characterized trigger is intrauterine infection. When bacteria ascend from the vaginal microbiome into the uterine cavity, innate immune sensors on decidual and myometrial cells detect bacterial products and mount an inflammatory response, releasing prostaglandins, matrix metalloproteinases, and pro-inflammatory cytokines that activate the labor cascade, only weeks or months too early. Adaptive immune cells are also hypothesized to participate, with alterations in their tolerance-maintaining function potentially leading to preterm labor. Immune cells that bridge the innate and adaptive systems, including naturally killer T (NKT) cells and dendritic cells (DCs), also appear to participate in the pathophysiology.[<a href="#ref-gomezlopez2014">11</a>]

<div class="figure-wrap">
<img src="{{ "/assets/images/TLPTL.png" | relative_url }}" alt="Innate and adaptive immune cells in term vs. preterm labor">
<p>Schematic of innate and adaptive immune cells at the maternal-fetal interface in term labor and preterm labor (Gomez-Lopez et al., 2014) [<a href="#ref-gomezlopez2014">11</a>]</p>
</div>

---

## OB-GYN as a field ripe for an immunological revolution

Today, obstetrics and gynecology is considered primarily a clinical and surgical specialty. The management of pregnancy complications has historically reflected that orientation: monitoring, intervening, and delivering being considered the only solutions. Preeclampsia is managed with antihypertensives and magnesium sulfate, preterm birth with progesterone and bed rest, recurrent miscarriage with watchful waiting. These are not treatments in the disease-modifying sense; they are ways of managing consequences while the underlying biology runs its course.

The United States is facing a severe and worsening shortage of OB-GYNs. Nearly half of all U.S. counties have no practicing obstetrician.[<a href="#ref-obgyn2022">12</a>] Access in the Global South is characterized by severe shortages, with estimated availability ranging from 0.13 to 1.57 trained obstetricians per 100,000 people — far below the suggested target of 20 per 100,000. The consequences fall hardest on rural and low-resourced communities, where the vast majority of preeclampsia- and preterm birth-related deaths occur.

This is exactly why **disease-modifying therapies matter so much**, and why the immunological reframing of pregnancy complications is not just scientifically interesting but life-saving at scale. A therapy that targets the upstream immune mechanisms driving preeclampsia or preterm birth — a single infusion, a monthly injection, a drug taken at home — would not require weekly specialist visits or proximity to a tertiary hospital. That therapy does not yet exist. But the biological foundation for developing it is being laid right now.

According to Dr. Ai-ris Yonekura Collier, a clinician-scientist specializing in maternal-fetal medicine at Beth Israel Deaconess Medical Center and Professor of Reproductive Biology at Harvard Medical School, the field is, in a real sense, "trial-ready." Bench discoveries are beginning to move to the bedside: <abbr title="A protein released by a stressed placenta; elevated levels predict preeclampsia severity.">sFlt-1</abbr>, a circulating biomarker of placental stress, is now being used clinically to predict preeclampsia severity and guide delivery timing. The concept of transplacental antibody transfer has become mainstream through maternal vaccine programs targeting RSV and influenza, and is now being actively explored as a platform for engineered antibody therapies that protect the newborn by immunizing the mother.

The infrastructure, the interest, and increasingly the biological understanding are converging. What the field now needs is a generation of researchers who can speak both immunology and obstetrics. **This is where you come in.**

In Part 5, you'll see how the same mechanisms driving tolerance in pregnancy are being applied to cancer immunotherapy, transplant medicine, and autoimmune disease, fields that are actively looking to pregnancy for answers.

---

## References

<ol class="references">
<li id="ref-bmj2023">More action needed to reduce global maternal mortality. <em>BMJ Evidence-Based Nursing</em> (2023). <a href="https://blogs.bmj.com/ebn/2023/04/09/more-action-needed-to-reduce-global-maternal-mortality/" target="_blank" rel="noopener">Link</a></li>
<li id="ref-rai2006">Rai, R. &amp; Regan, L. Recurrent miscarriage. <em>The Lancet</em> <strong>368</strong>, 601–611 (2006). <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2709325/" target="_blank" rel="noopener">PMC2709325</a></li>
<li id="ref-fox2019">Fox, R. et al. Preeclampsia: Risk Factors, Diagnosis, Management, and the Cardiovascular Impact on the Offspring. <em>Journal of Clinical Medicine</em> <strong>8</strong>, 1625 (2019). <a href="https://doi.org/10.3390/jcm8101625" target="_blank" rel="noopener">https://doi.org/10.3390/jcm8101625</a></li>
<li id="ref-karrar2026">Karrar, S. A., Martingano, D. J. &amp; Hong, P. L. Preeclampsia. In <em>StatPearls</em>. StatPearls Publishing (2025). <a href="https://www.ncbi.nlm.nih.gov/books/NBK570611/" target="_blank" rel="noopener">NBK570611</a></li>
<li id="ref-rolnik2022">Rolnik, D. L., Nicolaides, K. H. &amp; Poon, L. C. Prevention of preeclampsia with aspirin. <em>American Journal of Obstetrics and Gynecology</em> <strong>226</strong>(2S), S1108–S1119 (2022). <a href="https://doi.org/10.1016/j.ajog.2020.08.045" target="_blank" rel="noopener">https://doi.org/10.1016/j.ajog.2020.08.045</a></li>
<li id="ref-erlebacher2013">Erlebacher, A. Immunology of the Maternal-Fetal Interface. <em>Annual Review of Immunology</em> <strong>31</strong>, 387–411 (2013). <a href="https://doi.org/10.1146/annurev-immunol-032712-100003" target="_blank" rel="noopener">https://doi.org/10.1146/annurev-immunol-032712-100003</a></li>
<li id="ref-saito2024">Saito, S. Role of immune cells in the establishment of implantation and maintenance of pregnancy. <em>Reproductive Medicine and Biology</em> <strong>23</strong>, e12600 (2024). <a href="https://doi.org/10.1002/rmb2.12600" target="_blank" rel="noopener">https://doi.org/10.1002/rmb2.12600</a></li>
<li id="ref-boulanger2024">Boulanger, H. et al. Immunologic aspects of preeclampsia. <em>AJOG Global Reports</em> <strong>4</strong>, 100321 (2024). <a href="https://doi.org/10.1016/j.xagr.2024.100321" target="_blank" rel="noopener">https://doi.org/10.1016/j.xagr.2024.100321</a></li>
<li id="ref-campbell1985">Campbell, D. M., MacGillivray, I. &amp; Carr-Hill, R. Pre-eclampsia in second pregnancy. <em>BJOG</em> <strong>92</strong>, 131–140 (1985). <a href="https://doi.org/10.1111/j.1471-0528.1985.tb01064.x" target="_blank" rel="noopener">https://doi.org/10.1111/j.1471-0528.1985.tb01064.x</a></li>
<li id="ref-lie1998">Lie, R. T. et al. Fetal and maternal contributions to risk of pre-eclampsia: population based study. <em>BMJ</em> <strong>316</strong>, 1343–1347 (1998). <a href="https://doi.org/10.1136/bmj.316.7141.1343" target="_blank" rel="noopener">https://doi.org/10.1136/bmj.316.7141.1343</a></li>
<li id="ref-gomezlopez2014">Gomez-Lopez, N. et al. Immune cells in term and preterm labor. <em>Cellular &amp; Molecular Immunology</em> <strong>11</strong>, 571–581 (2014). <a href="https://www.nature.com/articles/cmi201446" target="_blank" rel="noopener">https://www.nature.com/articles/cmi201446</a></li>
<li id="ref-obgyn2022">OB-GYN workforce projections and shortage data. <em>PubMed</em>. <a href="https://pubmed.ncbi.nlm.nih.gov/40997332/" target="_blank" rel="noopener">PubMed 40997332</a></li>
</ol>

{% include part-nav.html
   prev_url="/learn/part3/"
   prev_title="Model Systems"
   next_url="/learn/part5/"
   next_title="Applications Beyond Pregnancy" %}
