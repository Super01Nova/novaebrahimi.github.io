---
layout: page
title: "Phase 1: What Expert Educators Say About Virtual World Learning Environments"
description: In-depth interviews with experienced educators that produced an experience framework for learning in virtual worlds
img: assets/img/case-studies/p1-thumb.jpg
importance: 1
category: UX research
toc:
  sidebar: left
---

> **Phase 1 of 3** in a research program on designing virtual worlds for learning. Each phase looks at the same environments from a different position: [the educators who design them]({{ '/projects/1_phase1-educators/' | relative_url }}), [the students who learn in them]({{ '/projects/2_phase2-students/' | relative_url }}), and [the platform interfaces that mediate both]({{ '/projects/3_phase3-interfaces/' | relative_url }}).

| | |
|---|---|
| **My role** | Lead UX researcher (solo): study design, recruiting, interviews, synthesis, reporting |
| **Timeline** | 2024 to 2025 |
| **Methods** | In-depth interviews, pilot testing of the discussion guide, thematic analysis |
| **Tools** | Zoom, Qualtrics, ATLAS.ti |
| **Outputs** | Experience framework (SSE Model), 56 design opportunities, four publications |

## Overview

Virtual worlds such as Second Life give remote learners something a video call cannot: a shared place to walk into, build in, and meet others. Yet most schools still default to video conferencing. I interviewed experienced educators who had taught in virtual worlds for years to learn which design decisions actually make these spaces work, and turned what they told me into a framework that guided the rest of my research program.

{% include figure.liquid loading="eager" path="assets/img/case-studies/p1-hero.png" title="Virtual classroom in Second Life" class="img-fluid rounded z-depth-1" %}
<div class="caption">
  Open classroom in Second Life where an educator replaced chairs with floor cushions to cut rendering load and simplify sitting.
</div>

## The problem

Most virtual worlds are not built for teaching, so educators adapt them on their own. Few have design training, and many reach a workable setup only after years of trial and error. That hard-won knowledge stays with the person who earned it, so every new educator starts from scratch. For the product, this shows up as a steep onboarding curve and low adoption, even among people who believe in the medium.

## Research goals

1. Understand how a sense of presence, a sense of place, and a sense of community show up in real teaching practice.
2. Identify the design strategies experienced practitioners rely on to make these spaces work for learners.

## Approach

**Recruiting expert educators.** I partnered with the Virtual World Education Consortium, a long-running community of educators in Second Life, and recruited 14 participants. I targeted experts on purpose, since newcomers tend to copy physical classrooms, while experienced educators have already discarded what fails. Half of them had more than 15 years of experience.

**Discussion guide.** I wrote a 37-question guide covering teaching context, platform comparison, interface use, real-world design choices, and the experience of presence, place, and community. I piloted it with two experts through cognitive walkthroughs and revised unclear questions before fieldwork.

**Sessions.** Participants completed consent and a short background survey in Qualtrics, then joined remote sessions on Zoom lasting 60 to 180 minutes across one to three sessions. Many gave me guided tours of their virtual campuses during the call.

**Synthesis.** I verified every transcript against the recording, removed identifying details, and coded the full dataset in ATLAS.ti over nine months. Weekly debriefs with my advisor challenged my interpretations as themes took shape.

## Key insights

### 1. Presence comes from the brain, not the graphics card

Experts described a sense of "being there" that held up even with simple graphics. One called it "90% of really being there" despite basic visuals. Many students had low-end laptops, so educators simplified objects on purpose (cushions instead of chairs, plain geometry) to keep the world running smoothly.

**Design implication:** optimize for low-spec hardware first. Visual fidelity matters less than a stable, responsive experience, and simpler builds widen access.

### 2. Predictable spaces free attention for learning

Experts reduced mental effort through consistent wayfinding ("you're always turning left"), small rooms with controlled density, and oversized spaces that accommodate clumsy mouse navigation.

**Design implication:** treat navigation effort as a cost to minimize. Every second spent finding the room is a second taken from the lesson.

### 3. Nature works as a comfort signal

Water, plants, and views to a landscape helped people feel grounded, and several experts noted this mattered especially for neurodivergent learners. The same elements also told users where they could walk.

**Design implication:** natural elements can carry both function (navigation cues) and wellbeing, so they deserve a place in templates, not just decoration.

### 4. Exact replicas go unused; familiar cues plus new capabilities win

Copies of real offices and classrooms often sat empty. What worked was a mix: familiar layouts that signal how to behave (rows facing a podium mean "sit and listen"), combined with things only a virtual world can do, such as slides turned into walkable panels or a vertical tower that moves from DNA up to chromosomes.

**Design implication:** borrow real-world cues to set expectations, then spend the design budget on what the physical world cannot offer.

### 5. Community needs a schedule and an identity

Community formed around regular live events, not round-the-clock access. Branded arrival points and university t-shirts for avatars gave remote students a sense of belonging. One remote student said it was the first time she felt like a real student of her university.

**Design implication:** support recurring events and institutional identity at the entry point. Always-open spaces alone do not bring people together.

{% include figure.liquid path="assets/img/case-studies/p1-group-zones.jpg" title="Group work zones" class="img-fluid rounded z-depth-1" %}
<div class="caption">
  Platforms mark private group zones with visible boundaries, such as circles around tables in Virbela and rugs in Gather.Town.
</div>

## Outcome: an experience framework

The strongest strategies never addressed one need at a time. A seating layout, for example, shaped how avatars moved, what the room meant, and how the group talked, all at once. I captured this in the **Socio-Spatial Embodiment (SSE) Model**, which frames learning experience as the overlap of three dimensions:

- **Embodied presence:** experiencing the world through your avatar
- **Meaningful place:** a space that carries purpose and memory
- **Learning community:** belonging to a group that meets there

{% include figure.liquid path="assets/img/case-studies/p1-sse-model.png" title="SSE Model" class="img-fluid rounded z-depth-1" %}
<div class="caption">
  The SSE Model. The best designs sit where all three dimensions overlap.
</div>

**Deliverables and recognition**

- The SSE Model, used as the analysis lens for Phases 2 and 3
- 56 design opportunities (52 pattern candidates plus 4 improvement ideas drawn from the comparison with video calls)
- Four papers; the framework paper in *Virtual Worlds* (MDPI) was named an Editor's Choice Article

## Reflection

I coded alone to keep interpretation consistent across a large, context-heavy dataset, and used regular peer debriefs to check my reading. The sample covered expert educators only, so I could not speak for learners. That gap shaped Phase 2, where I went directly to students.

## Publications

- **Interaction Design Strategies for Socio-Spatial Embodiment in Virtual World Learning.** A. N. Ebrahimi and H. Ramaprasad. *Virtual Worlds* (MDPI), 2025. Editor's Choice Article.<br>
  <a href="{{ '/assets/pdf/ebrahimi2025interaction.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
  <a href="https://doi.org/10.3390/virtualworlds4030030" class="btn btn-sm z-depth-0" role="button">Online</a>
- **Successful Teaching Strategies in Virtual World Education for Engineering and Computing.** A. N. Ebrahimi, M. L. Maher, and H. Ramaprasad. *IEEE Frontiers in Education Conference (FIE)*, 2025.<br>
  <a href="{{ '/assets/pdf/ebrahimi2025teaching.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
  <a href="https://doi.org/10.1109/FIE63693.2025.11328593" class="btn btn-sm z-depth-0" role="button">Online</a>
- **Successful Practices for Avatars in Virtual World Learning: Perspectives from Experienced Educators.** A. N. Ebrahimi and H. Ramaprasad. *IEEE Digital Education and MOOCS Conference (DEMOcon)*, 2025.<br>
  <a href="{{ '/assets/pdf/ebrahimi2025avatars.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
  <a href="https://doi.org/10.1109/DEMOcon65705.2025.11282660" class="btn btn-sm z-depth-0" role="button">Online</a>
- **Advantages of Virtual Worlds versus Video Conferencing Platforms for Online Education: A Comparative Study.** A. N. Ebrahimi and H. Ramaprasad. *IEEE Digital Education and MOOCS Conference (DEMOcon)*, 2025.<br>
  <a href="{{ '/assets/pdf/ebrahimi2025advantages.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
  <a href="https://doi.org/10.1109/DEMOcon65705.2025.11282851" class="btn btn-sm z-depth-0" role="button">Online</a>

**Next:** [Phase 2: What Students Say About Virtual World Learning Environments]({{ '/projects/2_phase2-students/' | relative_url }})
